'use client';

import { Building2, Users } from 'lucide-react';
import { useMode } from '@/contexts/ModeContext';

export function ModeSwitcher() {
  const { currentMode, setMode } = useMode();

  return (
    <div className="flex items-center gap-1 p-1 bg-muted/30 rounded-lg">
      <button
        onClick={() => setMode('government')}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
          currentMode === 'government'
            ? 'bg-primary text-primary-foreground shadow-sm'
            : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
        }`}
        aria-label="Switch to Government mode"
      >
        <Building2 className="h-3.5 w-3.5" />
        <span>Government</span>
      </button>
      <button
        onClick={() => setMode('project')}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
          currentMode === 'project'
            ? 'bg-primary text-primary-foreground shadow-sm'
            : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
        }`}
        aria-label="Switch to Project mode"
      >
        <Users className="h-3.5 w-3.5" />
        <span>Project</span>
      </button>
    </div>
  );
}
