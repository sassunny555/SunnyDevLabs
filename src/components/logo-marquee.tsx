import Image from "next/image";

type LogoMarqueeProps = {
  logos: string[];
};

export default function LogoMarquee({ logos }: LogoMarqueeProps) {
  const looped = [...logos, ...logos];

  return (
    <section className="reveal mt-7 overflow-hidden px-2 py-2 md:mt-9 md:px-4">
      <p className="text-sm tracking-[0.2em] text-[var(--color-muted)]">BRANDS AND PROJECTS</p>
      <div className="marquee mt-5">
        <div className="marquee-track">
          {looped.map((logo, index) => (
            <div
              key={`${logo}-${index}`}
              className="mx-1.5 flex min-w-[11rem] items-center justify-center rounded-2xl border border-[var(--color-line)]/60 bg-[var(--color-surface)]/45 p-4 md:min-w-[12rem]"
            >
              <Image
                src={logo}
                alt={`Brand logo placeholder ${index + 1}`}
                width={220}
                height={80}
                className="h-9 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
