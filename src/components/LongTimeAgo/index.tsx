interface CompnentProps {
  intro1: React.RefObject<HTMLDivElement | null>;
  intro2: React.RefObject<HTMLDivElement | null>;
}

export function LongTimeAgo({ intro1, intro2 }: CompnentProps) {
  return (
    <>
      <section
        className="absolute top-1/2 left-1/2 w-[300px] -translate-1/2 text-cyan-400 opacity-0 md:w-[420px]"
        ref={intro1}
      >
        <p className="text-base font-semibold lg:text-xl">
          Há muito tempo atrás, numa galáxia
          <br />
          muito, muito distante...
        </p>
      </section>
      <section
        className="absolute top-1/2 left-1/2 w-[300px] -translate-1/2 text-cyan-400 opacity-0 md:w-[420px]"
        ref={intro2}
      >
        <p className="text-base font-semibold lg:text-xl">
          ...eu encontrei alguém muito especial.
        </p>
      </section>
    </>
  );
}
