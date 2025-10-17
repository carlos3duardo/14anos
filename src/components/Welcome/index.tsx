'use client';

import { Heart } from 'lucide-react';
import { useCallback, useState } from 'react';

import { Content } from '../Content';

export function Welcome() {
  const [started, setStarted] = useState(false);

  const handleStart = useCallback(() => {
    setStarted(true);
  }, []);

  if (started) {
    return <Content />;
  }

  return (
    <section className="absolute top-0 left-0 flex h-screen w-screen flex-col items-center justify-center gap-6">
      <button
        className="relative flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white"
        onClick={() => handleStart()}
      >
        <span className="animate-heartbeat absolute top-0 left-0 h-full w-full animate-ping rounded-full bg-white" />
        <span className="relative">
          <Heart size={24} />
        </span>
      </button>
      <p className="text-sm font-semibold text-white">Clique para começar</p>
    </section>
  );
}
