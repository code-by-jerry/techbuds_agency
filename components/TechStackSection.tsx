import { TECH_STACK_LOGOS } from "@/lib/tech-stack";

function TechLogo({ name, src }: { name: string; src: string }) {
  return (
    <div className="tech-logo-card shrink-0">
      <div className="flex h-12 w-12 items-center justify-center md:h-14 md:w-14">
        <img
          src={src}
          alt={name}
          className="max-h-full max-w-full object-contain"
        />
      </div>
      <span className="whitespace-nowrap text-[9px] font-medium text-[#64748b] md:text-[10px]">
        {name}
      </span>
    </div>
  );
}

export default function TechStackSection() {
  return (
    <section className="border-y border-[#e2e8f0] bg-white">
      <div className="mx-auto max-w-7xl px-6 py-8 md:px-12 md:py-10">
        <div className="mb-5 text-center">
          <p className="mb-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-accent-secondary">
            Tech Stack
          </p>
          <h2 className="text-2xl font-bold text-[#1e293b] md:text-3xl">
            Technologies We <span className="text-accent-secondary">Use</span>
          </h2>
          <div className="mx-auto mt-2 h-0.5 w-12 rounded-full bg-accent-secondary" />
          <p className="mx-auto mt-3 max-w-xl text-sm leading-snug text-[#64748b]">
            Modern tools we use to build performant, scalable products.
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
