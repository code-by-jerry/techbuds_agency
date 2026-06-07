import { Layers, Rocket, Target } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const MAP_BG = "https://ik.imagekit.io/codebyjerry/techbuds/map.png";

type HighlightItem = {
  title: string;
  description: string;
  icon: LucideIcon;
  featured?: boolean;
};

const HIGHLIGHTS: HighlightItem[] = [
  {
    title: "Products Across Industries",
    description:
      "From q-commerce and healthcare stores to AI mobile apps and enterprise platforms — each project shows how we adapt to different markets and users.",
    icon: Layers,
  },
  {
    title: "Built From Idea to Launch",
    description:
      "Every case study reflects full-cycle work: research, UI/UX, development, integrations, and go-live — so you see how we actually deliver, not just how things look.",
    icon: Rocket,
    featured: true,
  },
  {
    title: "Proof You Can Trust",
    description:
      "Real screenshots, real flows, and real outcomes give you a clear picture of our standards before your project even starts.",
    icon: Target,
  },
];

function HighlightCard({ item }: { item: HighlightItem }) {
  const Icon = item.icon;

  if (item.featured) {
    return (
      <article className="relative mx-auto w-full max-w-sm pt-14">
        <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-accent-secondary shadow-[0_12px_32px_rgba(245,32,45,0.3)]">
            <Icon className="text-white" size={36} strokeWidth={1.75} />
          </div>
        </div>

        <div className="rounded-[2rem] bg-white px-6 pb-9 pt-16 text-center shadow-[0_20px_50px_rgba(15,23,42,0.1)] ring-1 ring-accent-secondary/15">
          <h3 className="text-lg font-bold text-[#1e293b] md:text-xl">
            {item.title}
          </h3>
          <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-[#64748b]">
            {item.description}
          </p>
        </div>
      </article>
    );
  }

  return (
    <article className="relative mx-auto w-full max-w-sm pt-14">
      <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2">
        <div className="flex h-24 w-24 items-center justify-center rounded-full border border-[#e2e8f0] bg-white shadow-[0_8px_24px_rgba(15,23,42,0.06)]">
          <Icon
            className="text-accent-secondary"
            size={36}
            strokeWidth={1.75}
          />
        </div>
      </div>

      <div className="rounded-[1.75rem] bg-[#f4f6f8] px-6 pb-9 pt-16 text-center">
        <h3 className="text-lg font-bold text-[#1e293b] md:text-xl">
          {item.title}
        </h3>
        <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-[#64748b]">
          {item.description}
        </p>
      </div>
    </article>
  );
}

export default function PortfolioHighlightsSection() {
  return (
    <section className="relative overflow-hidden border-b border-[#e2e8f0] bg-white">
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.22]"
        style={{ backgroundImage: `url(${MAP_BG})` }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/55 via-white/80 to-white"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-20">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 text-sm font-medium tracking-wide text-[#94a3b8]">
            <span className="text-accent-secondary">//</span> Our Portfolio
          </p>
          <h2 className="text-3xl font-bold leading-tight text-[#1e293b] md:text-4xl lg:text-[2.75rem]">
            Work that shows what we{" "}
            <span className="text-accent-secondary">actually build.</span>
          </h2>
          <div className="mx-auto mt-4 h-0.5 w-16 rounded-full bg-accent-secondary" />
        </div>

        <div className="grid items-end gap-8 md:grid-cols-3 md:gap-6 lg:gap-10">
          {HIGHLIGHTS.map((item) => (
            <HighlightCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
