import Image from 'next/image';

interface CompnentProps {
  logoRef: React.RefObject<HTMLDivElement | null>;
  fromRef: React.RefObject<HTMLDivElement | null>;
  galaxyRef: React.RefObject<HTMLDivElement | null>;
}

export function TheBestPerson({ logoRef, fromRef, galaxyRef }: CompnentProps) {
  return (
    <div
      className="absolute top-1/2 left-1/2 h-[154px] w-[360px] -translate-1/2 opacity-0 md:h-[291px] md:w-[680px]"
      ref={logoRef}
    >
      <Image
        src="/images/melhor-pessoa.png"
        width={1120}
        height={480}
        alt="Melhor Pessoa"
        className="h-[154px] w-[360px] md:h-[291px] md:w-[680px]"
      />
      <div
        className="absolute top-[calc(100%_+_8px)] flex w-full items-center gap-1"
        ref={fromRef}
      >
        <span className="h-[8px] w-full flex-1 border-t-2 border-b-2 border-t-white border-b-white md:h-[12px] md:border-t-3 md:border-b-3" />
        <Image
          src="/images/da.png"
          width={190}
          height={86}
          alt="Melhor Pessoa"
          className="h-[20px] w-[44px] md:h-[27px] md:w-[60px]"
        />
        <span className="h-[8px] w-full flex-1 border-t-2 border-b-2 border-t-white border-b-white md:h-[12px] md:border-t-3 md:border-b-3" />
      </div>
      <figure
        className="absolute top-[calc(100%_+_8px_+_20px_+_8px)] left-0 flex w-full justify-center opacity-0"
        ref={galaxyRef}
      >
        <Image
          src="/images/galaxia.png"
          width={1098}
          height={200}
          alt="Melhor Pessoa"
          className="h-[66px] w-[360px] md:h-[120px] md:w-[660px]"
        />
      </figure>
    </div>
  );
}
