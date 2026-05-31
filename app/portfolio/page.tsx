import ContactModalCTA from "@/components/ContactModalCTA";
import FAQSection from "@/components/FAQSection";
import TestimonialSlider from "@/components/TestimonialSlider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore TechBuds portfolio projects across food delivery, q-commerce, healthcare, accounting, design, software-defined vehicles, and ecommerce platforms.",
  alternates: {
    canonical: "/portfolio",
  },
  openGraph: {
    title: "TechBuds Portfolio",
    description:
      "A selection of digital platforms, ecommerce systems, mobile products, and brand experiences built by TechBuds.",
    url: "/portfolio",
    images: [
      {
        url: "https://ik.imagekit.io/codebyjerry/techbuds/portfolio_web.png",
        width: 1200,
        height: 630,
        alt: "TechBuds portfolio",
      },
    ],
  },
};

const portfolioItems = [
  {
    name: "Aaran Info",
    category: "Accounts Consultancy & Billing Software",
    description:
      "A digital platform providing accounting consultancy services and smart billing solutions designed to simplify financial operations and business management.",
    logo: "https://ik.imagekit.io/codebyjerry/contibutions%20-%20logo/aaraninfo.png?updatedAt=1777100866170",
  },
  {
    name: "Camiprod",
    category: "Healthcare Products Platform",
    description:
      "A healthcare-focused digital platform built to showcase and manage medical and wellness products with a clean and trustworthy user experience.",
    logo: "https://ik.imagekit.io/codebyjerry/contibutions%20-%20logo/logo.svg",
  },
  {
    name: "Baybee",
    category: "Q-Commerce Baby Products",
    description:
      "A quick-commerce platform dedicated to baby care essentials, offering fast delivery, smooth shopping experiences, and user-friendly product discovery.",
    logo: "https://ik.imagekit.io/codebyjerry/contibutions%20-%20logo/Baybee_logo.svg",
  },
  {
    name: "Pixora",
    category: "Graphic Designing Services",
    description:
      "A creative branding and graphic design platform delivering modern visual identity solutions, marketing creatives, and digital design services.",
    logo: "https://ik.imagekit.io/codebyjerry/contibutions%20-%20logo/pixora_new_white.png?updatedAt=1779039491768",
  },
  {
    name: "DestroSolution",
    category: "Software Defined Vehicles",
    description:
      "A technology-focused platform centered around software-defined vehicle solutions, innovation systems, and future-ready mobility technologies.",
    logo: "https://ik.imagekit.io/codebyjerry/contibutions%20-%20logo/destrosolutions_new.png",
  },
  {
    name: "Enmart",
    category: "Q-Commerce Platform",
    description:
      "A scalable quick-commerce solution designed for fast-moving online shopping experiences with optimized delivery workflows and modern ecommerce systems.",
    logo: "https://ik.imagekit.io/codebyjerry/contibutions%20-%20logo/enmart_logo.png",
  },
];

const portfolioFaq = [
  {
    q: "What types of portfolio projects does TechBuds handle?",
    a: "We build ecommerce, quick-commerce, SaaS, billing systems, healthcare platforms, mobile apps, and custom business software for growing brands.",
  },
  {
    q: "Can you build a platform similar to one of these projects?",
    a: "Yes. We can use these projects as a reference point and create a custom solution based on your workflows, brand, audience, and business goals.",
  },
  {
    q: "Do you design and develop the complete product?",
    a: "Yes. We handle planning, UI/UX, frontend, backend, integrations, deployment, and post-launch support depending on the project scope.",
  },
  {
    q: "Can you improve an existing product instead of building from scratch?",
    a: "Absolutely. We can redesign interfaces, improve performance, add features, fix user experience issues, and modernize existing platforms.",
  },
  {
    q: "How do we start a project with TechBuds?",
    a: "Share your idea, requirements, or current platform with us. We will review the scope and suggest the right plan, timeline, and technical approach.",
  },
];

export default function Portfolio() {
  return (
    <div className="bg-brand">
      <section className="w-full overflow-hidden border-b border-custom">
        <picture>
          <source
            media="(min-width: 768px)"
            srcSet="https://ik.imagekit.io/codebyjerry/techbuds/portfolio_web.png"
          />
          <img
            src="https://ik.imagekit.io/codebyjerry/techbuds/portfolio_mobile.png"
            alt="TechBuds portfolio hero banner"
            className="block h-auto w-full"
            fetchPriority="high"
          />
        </picture>
      </section>

      <section className="relative overflow-hidden border-b border-custom bg-[#081124]">
        <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[600px] -translate-x-1/2 rounded-full bg-red-500/[0.04] blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6 py-16 md:px-12 md:py-20">
          <div className="mb-10">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-red-400">
              Portfolio
            </p>
            <h1 className="text-3xl font-bold text-primary md:text-5xl">
              Work We Have <span className="text-red-400">Built</span>
            </h1>
            <div className="mt-3 h-0.5 w-16 rounded-full bg-red-400" />
          </div>

          <div className="grid gap-5">
            {portfolioItems.map((item) => (
              <article
                key={item.name}
                className="grid gap-6 rounded-xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl transition-all duration-300 hover:border-red-400/30 hover:bg-white/[0.05] md:grid-cols-[220px_1fr] md:items-center md:p-7"
              >
                <div className="flex h-28 items-center justify-center rounded-lg border border-white/10 bg-[#0b1226] px-6">
                  <img
                    src={item.logo}
                    alt={`${item.name} logo`}
                    className="max-h-14 max-w-full object-contain filter brightness-0 invert"
                  />
                </div>

                <div className="max-w-3xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-red-400">
                    {item.category}
                  </p>
                  <h2 className="mt-2 text-2xl font-bold text-primary md:text-3xl">
                    {item.name}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-secondary/80 md:text-base">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-custom bg-surface">
        <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[600px] -translate-x-1/2 rounded-full bg-red-500/[0.04] blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-28">
          <div className="mb-14 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-red-400">
              Testimonials
            </p>
            <h2 className="text-3xl font-bold text-primary md:text-5xl">
              What Our <span className="text-red-400">Clients Say</span>
            </h2>
            <div className="mx-auto mt-3 h-0.5 w-16 rounded-full bg-red-400" />
            <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-secondary md:text-lg">
              Real feedback from the brands and businesses we&rsquo;ve had the
              privilege to work with.
            </p>
          </div>

          <TestimonialSlider />
        </div>
      </section>

      <FAQSection title="Portfolio Questions" list={portfolioFaq} />

      <ContactModalCTA />
    </div>
  );
}
