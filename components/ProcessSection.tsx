const PROCESS_STEPS = [
  {
    id: "discovery",
    step: "01",
    title: "Discovery",
    desc: "Goals, audience, and market research through workshops.",
    image: "https://ik.imagekit.io/codebyjerry/techbuds/discovery.png",
  },
  {
    id: "strategy",
    step: "02",
    title: "Strategy",
    desc: "Roadmap, architecture, and technical direction aligned to business.",
    image: "https://ik.imagekit.io/codebyjerry/techbuds/strategy.png",
  },
  {
    id: "design",
    step: "03",
    title: "UI/UX Design",
    desc: "Interfaces and user flows shaped through iterative prototyping.",
    image: "https://ik.imagekit.io/codebyjerry/techbuds/design.png",
  },
  {
    id: "development",
    step: "04",
    title: "Development",
    desc: "Scalable frontends and backends built with clean engineering.",
    image: "https://ik.imagekit.io/codebyjerry/techbuds/developement.png",
  },
  {
    id: "testing",
    step: "05",
    title: "Testing",
    desc: "QA, automation, and performance checks before launch.",
    image: "https://ik.imagekit.io/codebyjerry/techbuds/testing.png",
  },
  {
    id: "launch",
    step: "06",
    title: "Launch & Growth",
    desc: "Deployment, monitoring, and ongoing optimization.",
    image:
      "https://ik.imagekit.io/codebyjerry/techbuds/launch%20and%20growth.png",
  },
];

const BG_PATTERN =
  "https://ik.imagekit.io/codebyjerry/techbuds/bg_pattern_2.png";

export default function ProcessSection() {
  return (
    <section className="relative overflow-hidden border-t border-custom">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `url(${BG_PATTERN})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[#081124]/75" />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-56 w-[480px] -translate-x-1/2 rounded-full bg-accent-secondary/[0.06] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-14 md:px-12 md:py-20">
        <div className="mx-auto mb-8 max-w-2xl text-center md:mb-10">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-accent-secondary">
            How We Work
          </p>
          <h2 className="text-2xl font-bold text-primary md:text-4xl">
            Our <span className="text-accent-secondary">Process</span>
          </h2>
          <div className="mx-auto mt-2 h-0.5 w-12 rounded-full bg-accent-secondary" />
          <p className="mt-3 text-sm leading-relaxed text-secondary/80 md:text-base">
            A structured workflow from concept to launch — built in clear,
            focused phases.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {PROCESS_STEPS.map((step) => (
            <article
              key={step.id}
              className="group overflow-hidden rounded-2xl bg-white/[0.07] shadow-[0_8px_32px_rgba(0,0,0,0.25)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.11] hover:shadow-[0_16px_48px_rgba(245,32,45,0.15)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-white/[0.04]">
                <img
                  src={step.image}
                  alt={step.title}
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <span className="absolute left-3 top-3 inline-flex h-8 min-w-8 items-center justify-center rounded-full bg-accent-secondary px-2 text-[11px] font-bold text-white shadow-lg shadow-accent-secondary/30">
                  {step.step}
                </span>
              </div>

              <div className="p-4 sm:p-5">
                <h3 className="text-sm font-bold text-primary transition-colors group-hover:text-accent-secondary sm:text-base">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-secondary/75 sm:text-[13px]">
                  {step.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
