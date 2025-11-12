import { useState, useEffect, useCallback } from 'react';
import { Persona, PersonaType } from '@/types/persona';
import { getPersonaById, getPersonasByMode, getDefaultPersona } from '@/data/personas';
import { useMode } from '@/contexts/ModeContext';

const PERSONA_STORAGE_KEY = 'selected-persona';

export function usePersona() {
  const { currentMode } = useMode();
  const [currentPersona, setCurrentPersona] = useState<Persona>(getDefaultPersona(currentMode));
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Load saved persona from localStorage on mount
  useEffect(() => {
    const savedPersonaId = localStorage.getItem(PERSONA_STORAGE_KEY);
    if (savedPersonaId) {
      const persona = getPersonaById(savedPersonaId);
      // Only use saved persona if it matches current mode
      if (persona && persona.mode === currentMode) {
        setCurrentPersona(persona);
      } else {
        // Reset to default persona for current mode
        const defaultPersona = getDefaultPersona(currentMode);
        setCurrentPersona(defaultPersona);
        localStorage.setItem(PERSONA_STORAGE_KEY, defaultPersona.id);
      }
    } else {
      // No saved persona, use default for mode
      const defaultPersona = getDefaultPersona(currentMode);
      setCurrentPersona(defaultPersona);
      localStorage.setItem(PERSONA_STORAGE_KEY, defaultPersona.id);
    }
  }, [currentMode]); // Re-run when mode changes

  // Change persona with transition
  const setPersona = useCallback(
    (personaId: PersonaType) => {
      const newPersona = getPersonaById(personaId);
      if (!newPersona || newPersona.id === currentPersona.id) return;

      setIsTransitioning(true);

      // Fade out phase (200ms)
      setTimeout(() => {
        setCurrentPersona(newPersona);
        localStorage.setItem(PERSONA_STORAGE_KEY, personaId);

        // Fade in phase (400ms)
        setTimeout(() => {
          setIsTransitioning(false);
        }, 400);
      }, 200);
    },
    [currentPersona.id]
  );

  return {
    currentPersona,
    setPersona,
    availablePersonas: getPersonasByMode(currentMode), // Filter by current mode
    isTransitioning,
  };
}
