'use client';

import { useEffect } from 'react';
import { InteractiveChatWithFloatingInput } from '@/components/chat/InteractiveChatWithFloatingInput';
import { usePersona } from '@/hooks/use-persona';

export default function ServiceTeamMemberDemoPage() {
  const { setPersona } = usePersona();

  useEffect(() => {
    setPersona('service-team-member');
  }, [setPersona]);

  return <InteractiveChatWithFloatingInput />;
}
