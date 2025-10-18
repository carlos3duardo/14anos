'use client';

import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

import { LongTimeAgo } from '../LongTimeAgo';
import ScreenSizeViewer from '../ScreenSizeViewer';
import { TheBestPerson } from '../TheBestPerson';

export function Main() {
  const intro1Ref = useRef<HTMLDivElement | null>(null);
  const intro2Ref = useRef<HTMLDivElement | null>(null);

  const mainLogoRef = useRef<HTMLDivElement | null>(null);
  const fromLogoRef = useRef<HTMLDivElement | null>(null);
  const galaxyLogoRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    return;
    if (!intro1Ref.current) return;

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
      .set(mainLogoRef.current, {
        opacity: 1,
        delay: 0,
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
      );
  }, []);

  return (
    <main className="relative flex h-dvh w-full flex-col items-center justify-center overflow-hidden">
      <ScreenSizeViewer />
      <LongTimeAgo intro1={intro1Ref} intro2={intro2Ref} />
      <TheBestPerson
        logoRef={mainLogoRef}
        fromRef={fromLogoRef}
        galaxyRef={galaxyLogoRef}
      />
    </main>
  );
}
