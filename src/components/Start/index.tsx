'use client';

import { Heart } from 'lucide-react';
import { useCallback, useState } from 'react';

import { Main } from '@/components/Main';

export function Start() {
  const [started, setStarted] = useState(false);

  const handleStart = useCallback(() => {
    setStarted(true);
  }, []);

  if (started) {
    return <Main />;
  }

  return (
    <section className="flex h-dvh w-full flex-col items-center justify-center gap-6">
      <button
        className="relative flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white"
        onClick={() => handleStart()}
      >
        <span className="animate-heartbeat absolute top-0 left-0 h-full w-full animate-ping rounded-full bg-white" />
        <span className="relative text-black">
          <Heart size={24} />
        </span>
      </button>
      <p className="text-sm font-semibold text-white">Clique para começar</p>
    </section>
  );
}
