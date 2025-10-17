'use client';

import { gsap } from 'gsap';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

import styles from './Styles.module.css';

export function Content() {
  const introRef = useRef<HTMLDivElement | null>(null);
  const intro2Ref = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<HTMLImageElement | null>(null);
  const fromLeftCurtainRef = useRef<HTMLDivElement | null>(null);
  const fromRightCurtainRef = useRef<HTMLDivElement | null>(null);
  const galaxyCurtainRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!introRef.current) return;

    if (!audioRef.current) {
      audioRef.current = new Audio('/audio/starwars-intro.mp3');
      audioRef.current.preload = 'auto';
      audioRef.current.volume = 1;
    }

    const tl = gsap.timeline();

    tl.set(introRef.current, { opacity: 0 }) // garante estado inicial

      .to(introRef.current, {
        opacity: 1,
        duration: 4.5,
        delay: 1,
        ease: 'power1.out',
      })
      .to(introRef.current, {
        opacity: 0,
        duration: 1.5,
        delay: 0.5,
        ease: 'power1.in',
      })
      .to(intro2Ref.current, {
        opacity: 1,
        duration: 4.5,
        delay: 1,
        ease: 'power1.out',
      })
      .to(intro2Ref.current, {
        opacity: 0,
        duration: 2.5,
        delay: 1,
        ease: 'power1.out',
      })
      .set(logoRef.current, {
        opacity: 1,
        scale: 4,
        delay: 0.5,
      })
      .call(() => {
        audioRef.current?.play().catch((err) => {
          console.warn('Não foi possível tocar automaticamente:', err);
        });
      })
      .to(logoRef.current, {
        duration: 16,
        scale: 0.05,
        ease: 'power2.easeOut',
      })
      .to(
        fromLeftCurtainRef.current,
        {
          x: '-100%',
          duration: 1,
          ease: 'power2.easeOut',
        },
        '<4',
      )
      .to(
        fromRightCurtainRef.current,
        {
          x: '100%',
          duration: 1,
          ease: 'power2.easeOut',
        },
        '<',
      )
      .to(
        galaxyCurtainRef.current,
        {
          y: '100%',
          duration: 1,
          ease: 'power2.easeOut',
        },
        '>',
      )
      .to(
        logoRef.current,
        {
          opacity: 0,
          duration: 1.5,
          ease: 'power2.easeOut',
        },
        '-=1.5',
      )
      .to(contentRef.current, {
        duration: 240,
        top: '-560%',
        ease: 'power2.linear',
      })
      .to(
        contentRef.current,
        {
          opacity: 0,
          duration: 1.5,
          ease: 'power2.easeOut',
        },
        '-=1.5',
      );

    return () => {
      tl.kill();

      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  return (
    <div className={styles.container}>
      <section className={styles.intro} ref={introRef}>
        <p>
          Há muito tempo atrás, numa galáxia
          <br />
          muito, muito distante...
        </p>
      </section>

      <section className={styles.intro} ref={intro2Ref}>
        <p>eu encontrei alguém muito especial.</p>
      </section>

      <section
        data-slot="logo"
        className="absolute top-1/2 left-1/2 h-[180px] w-[420px] -translate-1/2 opacity-0"
        ref={logoRef}
      >
        <Image
          src="/images/melhor-pessoa.png"
          width={1120}
          height={480}
          alt="Melhor Pessoa"
          className="h-[180px] w-[420px]"
        />

        <div className="absolute top-[calc(100%_+_8px)] flex w-full items-center gap-1 overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full w-1/2 bg-black"
            ref={fromLeftCurtainRef}
          />
          <div
            className="absolute top-0 right-0 h-full w-1/2 bg-black"
            ref={fromRightCurtainRef}
          />
          <span className="h-[8px] w-full flex-1 border-t-2 border-b-2 border-t-white border-b-white" />
          <Image
            src="/images/da.png"
            width={190}
            height={86}
            alt="Melhor Pessoa"
            className="h-[24px] w-[53px]"
          />
          <span className="h-[8px] w-full flex-1 border-t-2 border-b-2 border-t-white border-b-white" />
        </div>

        <figure className="absolute top-[calc(100%_+_8px_+_24px_+_8px)] left-0 flex w-full justify-center">
          <div
            className="absolute top-0 left-0 h-full w-full bg-black"
            ref={galaxyCurtainRef}
          />
          <Image
            src="/images/galaxia.png"
            width={1192}
            height={200}
            alt="Melhor Pessoa"
            className="h-[80px] w-[440px]"
          />
        </figure>
      </section>

      <section className={styles.crawl}>
        <div className={styles.content} ref={contentRef}>
          <h1 className={styles.title}>Episódio XIV</h1>
          <h2 className={styles.subtitle}>BODAS DE MARFIM</h2>
          <p>
            A escolha do marfim para representar os 14 anos de casamento é
            devido à sua solidez e durabilidade. Mesmo que meu amor por vocẽ
            tenha nascido antes disso, saiba que ele possui as mesmas
            atribuições do marfim: resistência, durabilidade e beleza.
          </p>

          <div className="flex flex-col gap-16 py-8 lg:flex-row-reverse">
            <figure className="relative aspect-video lg:flex-1">
              <Image
                src="/images/album/erinalva_001.png"
                fill
                alt=""
                className="absolute top-0 left-0 h-full w-full object-cover"
              />
            </figure>
            <p className="flex-1">
              Todo esse tempo sempre procurei manter nosso amor vivo e forte.
              Regá-lo com dedicação, carinho e gentilezas. Porque você merece se
              sentir amada, cuidada, respeitada e desejada.
            </p>
          </div>

          <div className="flex flex-col gap-16 py-8 lg:flex-row">
            <figure className="relative aspect-video lg:flex-1">
              <Image
                src="/images/album/erinalva_002.png"
                fill
                alt=""
                className="absolute top-0 left-0 h-full w-full object-cover"
              />
            </figure>
            <p className="flex-1">
              Quatorze anos é muito tempo de vida juntos. Tempo para aprender
              sobre nós e nossas experiências, com a soma dos dias comuns e dias
              inesquecíveis. Sempre de mãos dadas, enfrentamos desafios juntos.
            </p>
          </div>

          <div className="flex flex-col gap-16 py-8 lg:flex-row-reverse">
            <figure className="relative aspect-video lg:flex-1">
              <Image
                src="/images/album/erinalva_003.png"
                fill
                alt=""
                className="absolute top-0 left-0 h-full w-full object-cover"
              />
            </figure>
            <p className="flex-1">
              E mesmo diante de tudo que percorremos, meu desejo é olhar
              adiante. Porque o que eu desejo é passar muito mais tempo ao seu
              lado. Porque meu coração ainda aquece quando você está por perto.
            </p>
          </div>

          <p className="py-8">
            14 anos é um marco que devemos comemorar juntos, repleto de memórias
            e amor acumulado por todo esse tempo. É uma conquista importante.
            Mas, ainda assim, não é tão impressionante. Porque lá em 2007, há 18
            anos, quando, já com o coração borbulhando de paixão, eu perguntei
            se você desejaria compartilhar comigo o resto de nossos dias, e você
            aceitou, eu já sabia que eu lhe amaria incondicionamente por todo o
            sempre.
          </p>

          <div className="flex flex-col gap-16 py-8 lg:flex-row">
            <figure className="relative aspect-video lg:flex-1">
              <Image
                src="/images/album/juntos_003.jpg"
                fill
                alt=""
                className="absolute top-0 left-0 h-full w-full object-cover"
              />
            </figure>
            <figure className="relative aspect-video lg:flex-1">
              <Image
                src="/images/album/juntos_002.jpg"
                fill
                alt=""
                className="absolute top-0 left-0 h-full w-full object-cover"
              />
            </figure>
          </div>

          <p>
            14 anos é uma longa jornada. Mas não estamos nem na metade. Ainda
            quero estar com você, sentir o seu cheiro, sua pele, sua respiração.
            Quero continuar cultivando o nosso amor, com abraços fortes, beijos
            doces, muito carinho e aconchego. Ainda há muitas noites para dormir
            abraçados e muitas manhãs preguiçosas para aproveitar juntos.
          </p>

          <p>
            Te amo,
            <br />
            Por todo o sempre.
          </p>
        </div>
      </section>
    </div>
  );
}
