'use client';

import { useEffect } from 'react';
import { InteractiveChatWithFloatingInput } from '@/components/chat/InteractiveChatWithFloatingInput';
import { usePersona } from '@/hooks/use-persona';

export default function CORDemoPage() {
  const { setPersona } = usePersona();

  useEffect(() => {
    setPersona('cor');
  }, [setPersona]);

  return <InteractiveChatWithFloatingInput />;
}
