import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

interface CompnentProps {
  messageRef: React.RefObject<HTMLDivElement | null>;
}

function Text({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={twMerge(
        'text-justify text-lg font-bold md:text-[3rem]',
        className,
      )}
    >
      {children}
    </p>
  );
}

export function TheMessage({ messageRef }: CompnentProps) {
  return (
    <section
      className="w-[96%] text-amber-400 md:w-[80%] lg:w-[70%]"
      style={{
        bottom: '0',
        height: '100rem',
        left: '50%',
        position: 'absolute',
        transform: 'translateX(-50%) perspective(280px) rotateX(18deg)',
        transformOrigin: '50% 100%',
      }}
    >
      <div
        className="absolute top-[100%] flex flex-col gap-8 lg:gap-12"
        ref={messageRef}
      >
        <h1 className="text-center text-xl font-bold md:text-[3rem]">
          Episódio XIV
        </h1>

        <h2 className="font-condensed text-center text-[3rem] font-medium uppercase md:text-[6rem]">
          As bodas de marfim
        </h2>

        <Text>
          A escolha do marfim para representar os 14 anos de casamento é devido
          à sua solidez e durabilidade. Mesmo que meu amor por você tenha
          nascido antes disso, saiba que ele possui as mesmas atribuições do
          marfim: resistência, durabilidade e beleza.
        </Text>

        <div className="flex flex-col gap-8 lg:flex-row-reverse lg:gap-12">
          <figure className="relative aspect-video lg:flex-1">
            <Image
              src="/images/album/erinalva_001.png"
              fill
              alt=""
              className="absolute top-0 left-0 h-full w-full object-cover"
            />
          </figure>
          <Text className="flex-1">
            Todo esse tempo sempre procurei manter nosso amor vivo e forte.
            Regá-lo com dedicação, carinho e gentilezas. Porque você merece se
            sentir amada, cuidada, respeitada e desejada.
          </Text>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
          <figure className="relative aspect-video lg:flex-1">
            <Image
              src="/images/album/erinalva_002.png"
              fill
              alt=""
              className="absolute top-0 left-0 h-full w-full object-cover"
            />
          </figure>
          <Text className="flex-1">
            Quatorze anos é muito tempo de vida juntos. Tempo para aprender
            sobre nós e nossas experiências, com a soma dos dias comuns e dias
            inesquecíveis. Sempre de mãos dadas, enfrentamos desafios juntos.
          </Text>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row-reverse lg:gap-12">
          <figure className="relative aspect-video lg:flex-1">
            <Image
              src="/images/album/erinalva_003.png"
              fill
              alt=""
              className="absolute top-0 left-0 h-full w-full object-cover"
            />
          </figure>
          <Text className="flex-1">
            E mesmo diante de tudo que percorremos, meu desejo é olhar adiante.
            Porque o que eu desejo é passar muito mais tempo ao seu lado. Porque
            meu coração ainda aquece quando você está por perto.
          </Text>
        </div>

        <Text>
          14 anos é um marco que devemos comemorar juntos, repleto de memórias e
          amor acumulado por todo esse tempo. É uma conquista importante. Mas,
          ainda assim, não é tão impressionante. Porque lá em 2007, há 18 anos,
          quando, já com o coração borbulhando de paixão, eu perguntei se você
          desejaria compartilhar comigo o resto de nossos dias, e você aceitou,
          eu já sabia que eu lhe amaria incondicionamente por todo o sempre.
        </Text>

        <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
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

        <Text>
          14 anos é uma longa jornada. Mas não estamos nem na metade. Ainda
          quero estar com você, sentir o seu cheiro, sua pele, sua respiração.
          Quero continuar cultivando o nosso amor, com abraços fortes, beijos
          doces, muito carinho e aconchego. Ainda há muitas noites para dormir
          abraçados e muitas manhãs preguiçosas para aproveitar juntos.
        </Text>

        <Text>
          Te amo,
          <br />
          Por todo o sempre.
        </Text>
      </div>
    </section>
  );
}
