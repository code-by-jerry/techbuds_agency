"use client";

import { useState } from "react";

const PROCESS_STEPS = [
  {
    id: "discovery",
    step: "01",
    title: "Discovery",
    desc: "Understanding your goals, audience, and market through research and stakeholder workshops.",
    image: "https://ik.imagekit.io/codebyjerry/techbuds/discovery.png",
  },
  {
    id: "strategy",
    step: "02",
    title: "Strategy",
    desc: "Defining the roadmap, architecture, and technical approach aligned with your business objectives.",
    image: "https://ik.imagekit.io/codebyjerry/techbuds/strategy.png",
  },
  {
    id: "design",
    step: "03",
    title: "UI/UX Design",
    desc: "Crafting intuitive interfaces and seamless user experiences through iterative prototyping.",
    image: "https://ik.imagekit.io/codebyjerry/techbuds/design.png",
  },
  {
    id: "development",
    step: "04",
    title: "Development",
    desc: "Building scalable, performance-optimized frontends and backends with clean code practices.",
    image: "https://ik.imagekit.io/codebyjerry/techbuds/developement.png",
  },
  {
    id: "testing",
    step: "05",
    title: "Testing",
    desc: "Rigorous QA, automated testing, and performance audits to ensure reliability and stability.",
    image: "https://ik.imagekit.io/codebyjerry/techbuds/testing.png",
  },
  {
    id: "launch",
    step: "06",
    title: "Launch & Growth",
    desc: "Deployment, monitoring, and ongoing optimization to drive long-term success.",
    image:
      "https://ik.imagekit.io/codebyjerry/techbuds/launch%20and%20growth.png",
  },
];

const DEFAULT_IMAGE =
  "https://ik.imagekit.io/codebyjerry/techbuds/How_we_work_new.png";

const BG_PATTERN =
  "https://ik.imagekit.io/codebyjerry/techbuds/bg_pattern_2.png";

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [animDir, setAnimDir] = useState<"left" | "right">("right");

  const handleHover = (index: number) => {
    setAnimDir(index > (activeStep ?? -1) ? "right" : "left");
    setActiveStep(index);
  };

  const handleLeave = () => {
    setAnimDir("right");
    setActiveStep(null);
  };

  return (
    <section className="relative overflow-hidden border-t border-custom">
      {/* background pattern — fully visible */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `url(${BG_PATTERN})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      {/* dark overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-[#081124]/70" />

      {/* floating particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute left-1/4 top-1/4 h-2 w-2 rounded-full bg-red-400/30 animate-ping"
          style={{ animationDuration: "4s" }}
        />
        <div
          className="absolute right-1/3 top-1/3 h-1.5 w-1.5 rounded-full bg-red-400/20 animate-ping"
          style={{ animationDuration: "3s", animationDelay: "1s" }}
        />
        <div
          className="absolute left-2/3 bottom-1/4 h-2 w-2 rounded-full bg-red-400/20 animate-ping"
          style={{ animationDuration: "5s", animationDelay: "2s" }}
        />
        <div
          className="absolute right-1/4 bottom-1/3 h-1 w-1 rounded-full bg-red-400/15 animate-ping"
          style={{ animationDuration: "3.5s", animationDelay: "0.5s" }}
        />
        <div className="absolute -top-40 left-1/2 h-60 w-[500px] -translate-x-1/2 rounded-full bg-red-500/[0.04] blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        {/* compact left/right layout */}
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          {/* LEFT — step list */}
          <div className="space-y-0">
            <div className="mb-6">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-red-400">
                How We Work
              </p>
              <h2 className="text-2xl font-bold text-primary md:text-4xl">
                Our <span className="text-red-400">Process</span>
              </h2>
              <div className="mt-2 h-0.5 w-12 rounded-full bg-red-400" />
            </div>

            {PROCESS_STEPS.map((step, index) => (
              <button
                key={step.id}
                type="button"
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={handleLeave}
                className={`group relative flex w-full items-start gap-4 border-l-2 px-4 py-3.5 text-left transition-all duration-300 ${
                  activeStep === index
                    ? "border-red-400 bg-gradient-to-r from-red-500/[0.06] to-transparent"
                    : "border-white/10 hover:border-white/30 hover:bg-white/[0.02]"
                }`}
              >
                {/* step number */}
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-xs font-bold transition-all duration-300 ${
                    activeStep === index
                      ? "bg-red-500/20 text-red-400 shadow-[0_0_12px_rgba(248,113,113,0.2)]"
                      : "bg-white/[0.04] text-secondary/50 group-hover:bg-white/[0.08] group-hover:text-secondary"
                  }`}
                >
                  {step.step}
                </span>

                {/* content */}
                <div className="flex-1 pt-0.5">
                  <h3
                    className={`text-sm font-bold transition-colors duration-300 ${
                      activeStep === index
                        ? "text-red-400"
                        : "text-primary group-hover:text-primary"
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={`mt-0.5 text-xs leading-relaxed transition-all duration-300 ${
                      activeStep === index
                        ? "text-secondary/80"
                        : "text-secondary/50 group-hover:text-secondary/60"
                    }`}
                  >
                    {step.desc}
                  </p>
                </div>

                {/* arrow indicator */}
                <div
                  className={`mt-1 hidden shrink-0 self-start transition-all duration-300 lg:block ${
                    activeStep === index
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-2"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5 text-red-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </div>
              </button>
            ))}
          </div>

          {/* RIGHT — section title + animated image */}
          <div className="space-y-5">
            {/* section header above image */}
            <div className="text-left">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-secondary/60 lg:hidden">
                How We Work
              </p>
              <p className="hidden text-xs font-semibold uppercase tracking-[0.28em] text-secondary/60 lg:block">
                Visual Workflow
              </p>
              <p className="mt-1 text-sm text-secondary/70 max-w-md leading-relaxed">
                A structured end-to-end workflow that takes your project from
                concept to launch — and beyond.
              </p>
            </div>

            {/* image display with page-turn animation */}
            <div className="relative flex items-center justify-center">
              {/* glow behind image */}
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <div
                  className={`h-60 w-60 rounded-full transition-all duration-700 ${
                    activeStep !== null
                      ? "bg-red-500/8 blur-3xl scale-110"
                      : "bg-red-500/4 blur-3xl scale-90"
                  }`}
                />
              </div>

              <div className="relative w-full [perspective:1400px]">
                {/* page-turn shadow overlay */}
                <div
                  className={`pointer-events-none absolute inset-0 z-10 rounded-2xl transition-all duration-900 ${
                    activeStep !== null ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    background:
                      "linear-gradient(to right, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0) 50%)",
                    pointerEvents: "none",
                  }}
                />

                <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] backdrop-blur-xl shadow-xl shadow-black/20">
                  {/* default image (no hover) — page curl out effect */}
                  <div
                    className={`transition-all duration-900 ${
                      activeStep !== null
                        ? "[transform:rotateY(-80deg)_scaleX(0.95)] [transform-origin:left_center] opacity-0 absolute inset-0 pointer-events-none"
                        : "[transform:rotateY(0deg)_scaleX(1)] [transform-origin:left_center] opacity-100 relative [transform-style:preserve-3d]"
                    }`}
                    style={{
                      transitionTimingFunction:
                        "cubic-bezier(0.22, 1, 0.36, 1)",
                    }}
                  >
                    <img
                      src={DEFAULT_IMAGE}
                      alt="Our Process"
                      className="w-full h-auto block"
                    />
                  </div>

                  {/* active step image (on hover) — page turn in effect */}
                  {PROCESS_STEPS.map((step, index) => {
                    const isActive = activeStep === index;

                    return (
                      <div
                        key={step.id}
                        className={`transition-all duration-900 ${
                          isActive
                            ? "[transform:rotateY(0deg)_scaleX(1)] [transform-origin:left_center] opacity-100 relative"
                            : "[transform:rotateY(80deg)_scaleX(0.95)] [transform-origin:left_center] opacity-0 absolute inset-0 pointer-events-none"
                        }`}
                        style={{
                          transitionTimingFunction:
                            "cubic-bezier(0.22, 1, 0.36, 1)",
                          transformStyle: "preserve-3d",
                        }}
                      >
                        <img
                          src={step.image}
                          alt={step.title}
                          className="w-full h-auto block"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
