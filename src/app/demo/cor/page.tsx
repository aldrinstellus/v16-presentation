'use client';

import { useEffect, Suspense } from 'react';
import { InteractiveChatWithFloatingInput } from '@/components/chat/InteractiveChatWithFloatingInput';
import { usePersona } from '@/hooks/use-persona';

export default function CORDemoPage() {
  const { setPersona } = usePersona();

  useEffect(() => {
    setPersona('cor');
  }, [setPersona]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <InteractiveChatWithFloatingInput />
    </Suspense>
  );
}
