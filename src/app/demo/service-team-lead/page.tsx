'use client';

import { useEffect } from 'react';
import { InteractiveChatWithFloatingInput } from '@/components/chat/InteractiveChatWithFloatingInput';
import { usePersona } from '@/hooks/use-persona';

export default function ServiceTeamLeadDemoPage() {
  const { setPersona } = usePersona();

  useEffect(() => {
    setPersona('service-team-lead');
  }, [setPersona]);

  return <InteractiveChatWithFloatingInput />;
}
