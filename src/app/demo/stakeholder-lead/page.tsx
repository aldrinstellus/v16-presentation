'use client';

import { useEffect } from 'react';
import { InteractiveChatWithFloatingInput } from '@/components/chat/InteractiveChatWithFloatingInput';
import { usePersona } from '@/hooks/use-persona';

export default function StakeholderLeadDemoPage() {
  const { setPersona } = usePersona();

  useEffect(() => {
    setPersona('stakeholder-lead');
  }, [setPersona]);

  return <InteractiveChatWithFloatingInput />;
}
