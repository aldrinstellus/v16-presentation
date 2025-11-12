'use client';

import { useEffect } from 'react';
import { InteractiveChatWithFloatingInput } from '@/components/chat/InteractiveChatWithFloatingInput';
import { usePersona } from '@/hooks/use-persona';

export default function ProjectManagerDemoPage() {
  const { setPersona } = usePersona();

  useEffect(() => {
    setPersona('project-manager');
  }, [setPersona]);

  return <InteractiveChatWithFloatingInput />;
}
