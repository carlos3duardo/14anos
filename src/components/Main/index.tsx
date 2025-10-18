'use client';

import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

import { LongTimeAgo, TheBestPerson, TheMessage } from '@/components';

export function Main() {
  const intro1Ref = useRef<HTMLDivElement | null>(null);
  const intro2Ref = useRef<HTMLDivElement | null>(null);

  const mainLogoRef = useRef<HTMLDivElement | null>(null);
  const fromLogoRef = useRef<HTMLDivElement | null>(null);
  const galaxyLogoRef = useRef<HTMLDivElement | null>(null);

  const messageRef = useRef<HTMLDivElement | null>(null);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!intro1Ref.current) return;

    if (!audioRef.current) {
      audioRef.current = new Audio('/audio/starwars-intro.mp3');
      audioRef.current.preload = 'auto';
      audioRef.current.volume = 1;
    }

    const tl = gsap.timeline();

    tl.set(intro1Ref.current, { opacity: 0 })
      .set(intro2Ref.current, { opacity: 0 })
      .to(intro1Ref.current, {
        opacity: 1,
        duration: 2.5,
        delay: 0.5,
        ease: 'none',
      })
      .to(intro1Ref.current, {
        opacity: 0,
        duration: 2.5,
        delay: 3,
        ease: 'none',
      })
      .to(intro2Ref.current, {
        opacity: 1,
        duration: 2.5,
        delay: 0.5,
        ease: 'none',
      })
      .to(intro2Ref.current, {
        opacity: 0,
        duration: 2.5,
        delay: 2,
        ease: 'none',
      })
      .call(() => {
        audioRef.current?.play().catch((err) => {
          console.warn('Não foi possível tocar automaticamente:', err);
        });
      })
      .set(mainLogoRef.current, {
        opacity: 1,
        delay: 0.75,
      })
      .set(fromLogoRef.current, {
        opacity: 1,
        clipPath: 'polygon(50% 0%,50% 0%,50% 100%,50% 100%)',
      })
      .set(galaxyLogoRef.current, {
        opacity: 1,
        clipPath: 'polygon(0 0,100% 0,100% 0,0 0)',
      })
      .to(mainLogoRef.current, {
        duration: 16,
        scale: 0.05,
        ease: 'power2.easeOut',
        delay: 1,
      })
      .to(
        fromLogoRef.current,
        {
          clipPath: 'polygon(0% 0%,100% 0%,100% 100%,0% 100%)',
          duration: 1.5,
          ease: 'power2.out',
        },
        '<+=4',
      )
      .to(
        galaxyLogoRef.current,
        {
          clipPath: 'polygon(0% 0%,100% 0%,100% 100%,0% 100%)',
          duration: 1.5,
          ease: 'power2.out',
        },
        '>-0.5',
      )
      .to(
        mainLogoRef.current,
        {
          opacity: 0,
          duration: 1.5,
          ease: 'power2.easeOut',
        },
        '-=1.5',
      )
      .to(messageRef.current, {
        duration: () => {
          // Tempo fixo baseado no dispositivo
          return window.innerWidth < 768 ? 150 : 120; // 150s no mobile, 120s no desktop
        },
        top: () => {
          if (!messageRef.current) return '-200%';
          const contentHeight = messageRef.current.scrollHeight;
          return `-${contentHeight}px`;
        },
        ease: 'none',
        delay: 0,
      })
      .to(messageRef.current, {
        duration: 2,
        opacity: 0,
        ease: 'power2.easeOut',
      });

    return () => {
      tl.kill();

      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  return (
    <main className="relative flex h-dvh w-full flex-col items-center justify-center overflow-hidden">
      <LongTimeAgo intro1={intro1Ref} intro2={intro2Ref} />
      <TheBestPerson
        logoRef={mainLogoRef}
        fromRef={fromLogoRef}
        galaxyRef={galaxyLogoRef}
      />
      <TheMessage messageRef={messageRef} />
    </main>
  );
}
