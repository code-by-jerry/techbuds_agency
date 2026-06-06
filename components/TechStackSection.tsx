import { TECH_STACK_LOGOS } from "@/lib/tech-stack";

function TechLogo({ name, src }: { name: string; src: string }) {
  return (
    <div className="tech-logo-card shrink-0">
      <div className="flex h-10 w-10 items-center justify-center md:h-12 md:w-12">
        <img
          src={src}
          alt={name}
          className="max-h-full max-w-full object-contain"
        />
      </div>
      <span className="whitespace-nowrap text-[10px] font-medium text-secondary/60 md:text-xs">
        {name}
      </span>
    </div>
  );
}

export default function TechStackSection() {
  return (
    <section className="relative overflow-hidden border-y border-custom bg-[#081124]">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[600px] -translate-x-1/2 rounded-full bg-accent-secondary/[0.04] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-28">
        <div className="mb-14 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-accent-secondary">
            Tech Stack
          </p>
          <h2 className="text-3xl font-bold text-primary md:text-5xl">
            Technologies We <span className="text-accent-secondary">Use</span>
          </h2>
          <div className="mx-auto mt-3 h-0.5 w-16 rounded-full bg-accent-secondary" />
          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-secondary md:text-lg">
            Modern tools and frameworks we leverage to build performant,
            scalable digital products.
          </p>
        </div>

        <div className="tech-marquee-wrapper">
          <div className="tech-marquee-track">
            {TECH_STACK_LOGOS.map((logo) => (
              <TechLogo key={logo.name} name={logo.name} src={logo.src} />
            ))}
            {TECH_STACK_LOGOS.map((logo) => (
              <TechLogo
                key={`dup-${logo.name}`}
                name={logo.name}
                src={logo.src}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
