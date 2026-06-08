const PROCESS_STEPS = [
  {
    id: "discover",
    step: "01",
    title: "Discover",
    desc: "Understanding your business, audience, and goals.",
    icon: "https://ik.imagekit.io/codebyjerry/Icons/discover.png",
  },
  {
    id: "analyze",
    step: "02",
    title: "Analyze",
    desc: "Research, planning, and solution architecture.",
    icon: "https://ik.imagekit.io/codebyjerry/Icons/analyse.png",
  },
  {
    id: "design",
    step: "03",
    title: "Design",
    desc: "Brand, UI/UX, and experience creation.",
    icon: "https://ik.imagekit.io/codebyjerry/Icons/design.png",
  },
  {
    id: "build",
    step: "04",
    title: "Build",
    desc: "Engineering websites, apps, and platforms.",
    icon: "https://ik.imagekit.io/codebyjerry/Icons/build.png",
  },
  {
    id: "validate",
    step: "05",
    title: "Validate",
    desc: "Testing, optimization, and quality assurance.",
    icon: "https://ik.imagekit.io/codebyjerry/Icons/validation.png",
  },
  {
    id: "launch",
    step: "06",
    title: "Launch",
    desc: "Deployment across cloud and digital ecosystems.",
    icon: "https://ik.imagekit.io/codebyjerry/Icons/launch.png",
  },
  {
    id: "scale",
    step: "07",
    title: "Scale",
    desc: "Growth, SEO, automation, and continuous improvement.",
    icon: "https://ik.imagekit.io/codebyjerry/Icons/scale.png",
  },
];

const BG_PATTERN =
  "https://ik.imagekit.io/codebyjerry/techbuds/bg_pattern_2.png";

function ProcessStep({ step }: { step: (typeof PROCESS_STEPS)[number] }) {
  return (
    <article className="group flex flex-col items-center px-2 text-center transition-transform duration-300 hover:-translate-y-2">
      <span className="mb-4 text-[11px] font-bold tracking-[0.28em] text-accent-secondary">
        {step.step}
      </span>

      <div className="relative mb-5 flex h-[72px] w-[72px] items-center justify-center md:h-20 md:w-20">
        <span
          className="absolute inset-0 rounded-full bg-accent-secondary/20 transition-all duration-500 ease-out scale-100 translate-y-0 group-hover:scale-[1.5] group-hover:translate-y-1 group-hover:bg-accent-secondary/30"
          aria-hidden
        />
        <div className="relative z-10 flex h-full w-full items-center justify-center rounded-full bg-white transition-colors duration-300 group-hover:bg-accent-secondary">
          <img
            src={step.icon}
            alt={step.title}
            className="process-step-icon h-9 w-9 object-contain transition-all duration-300 md:h-10 md:w-10"
            loading="lazy"
          />
        </div>
      </div>

      <h3 className="text-base font-bold text-primary transition-colors duration-300 group-hover:text-accent-secondary md:text-lg">
        {step.title}
      </h3>
      <p className="mt-2 max-w-[240px] text-sm leading-relaxed text-secondary/80">
        {step.desc}
      </p>
    </article>
  );
}

export default function ProcessSection() {
  const firstRow = PROCESS_STEPS.slice(0, 4);
  const secondRow = PROCESS_STEPS.slice(4);

  return (
    <section className="relative overflow-hidden border-t border-custom bg-[#081124]">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage: `url(${BG_PATTERN})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 bg-[#081124]/70" />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-56 w-[480px] -translate-x-1/2 rounded-full bg-accent-secondary/[0.06] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-14 md:px-12 md:py-20">
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-accent-secondary">
            How We Work
          </p>
          <h2 className="text-2xl font-bold text-primary md:text-4xl">
            Our <span className="text-accent-secondary">Process</span>
          </h2>
          <div className="mx-auto mt-2 h-0.5 w-12 rounded-full bg-accent-secondary" />
          <p className="mt-3 text-sm leading-relaxed text-secondary/80 md:text-base">
            From business discovery to growth — a structured framework for
            branding, platforms, automation, and digital transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-8 lg:hidden">
          {PROCESS_STEPS.map((step) => (
            <ProcessStep key={step.id} step={step} />
          ))}
        </div>

        <div className="hidden flex-col gap-12 lg:flex">
          <div className="grid grid-cols-4 gap-8">
            {firstRow.map((step) => (
              <ProcessStep key={step.id} step={step} />
            ))}
          </div>
          <div className="mx-auto grid w-full max-w-4xl grid-cols-3 gap-8">
            {secondRow.map((step) => (
              <ProcessStep key={step.id} step={step} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
