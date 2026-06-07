const WHY_TECHBUDS_BG =
  "https://ik.imagekit.io/codebyjerry/techbuds/ChatGPT%20Image%20Jun%207,%202026,%2012_46_00%20PM.png";

export default function ServicesWhySection() {
  return (
    <section className="relative overflow-hidden border-y border-[#e2e8f0]">
      <div
        className="absolute inset-0 bg-cover bg-right bg-no-repeat"
        style={{ backgroundImage: `url(${WHY_TECHBUDS_BG})` }}
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/25 md:via-white/88 md:to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-white/20 md:from-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 py-14 md:px-12 md:py-20 lg:py-24">
        <div className="max-w-xl">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-accent-secondary">
            Why TechBuds
          </p>
          <h2 className="text-3xl font-bold leading-tight text-[#1e293b] md:text-4xl">
            Built to perform today,{" "}
            <span className="text-accent-secondary">ready to grow tomorrow.</span>
          </h2>
          <div className="mt-3 h-0.5 w-16 rounded-full bg-accent-secondary" />
          <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
            A polished launch is only the starting point. We build brands,
            websites, and platforms with the speed, structure, and clarity your
            team needs once real users, real traffic, and real decisions show
            up.
          </p>
          <p className="mt-4 text-base leading-relaxed text-[#475569] md:text-lg">
            One focused team handles strategy, design, and development — so you
            get honest recommendations, fewer handoffs, and digital work that
            keeps improving long after go-live.
          </p>
        </div>
      </div>
    </section>
  );
}
