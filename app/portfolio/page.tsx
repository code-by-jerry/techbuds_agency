import ContactModalCTA from "@/components/ContactModalCTA";
import FAQSection from "@/components/FAQSection";
import PageHeroBanner from "@/components/PageHeroBanner";
import PortfolioShowcase from "@/components/PortfolioShowcase";
import TestimonialSlider from "@/components/TestimonialSlider";
import { PAGE_BANNERS } from "@/lib/page-banners";
import { PORTFOLIO_PROJECTS } from "@/lib/portfolio";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore TechBuds portfolio — Enmart q-commerce, Camiprod healthcare ecommerce, Paalu Predictor AI milk analysis, and Destro Solutions SDV platform.",
  alternates: {
    canonical: "/portfolio",
  },
  openGraph: {
    title: "TechBuds Portfolio",
    description:
      "Real product work across q-commerce, healthcare ecommerce, AI mobile apps, and software-defined vehicle platforms.",
    url: "/portfolio",
    images: [
      {
        url: PAGE_BANNERS.portfolio.image,
        width: 1200,
        height: 630,
        alt: "TechBuds portfolio",
      },
    ],
  },
};

const portfolioFaq = [
  {
    q: "What types of portfolio projects does TechBuds handle?",
    a: "We build q-commerce platforms, healthcare ecommerce stores, AI-powered mobile apps, automotive technology websites, SaaS products, and custom business software.",
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
      <PageHeroBanner {...PAGE_BANNERS.portfolio} />

      <section className="relative overflow-hidden border-b border-custom bg-[#081124]">
        <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[600px] -translate-x-1/2 rounded-full bg-accent-secondary/[0.06] blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-20">
          <nav
            aria-label="Portfolio projects"
            className="mb-12 flex flex-wrap gap-2"
          >
            {PORTFOLIO_PROJECTS.map((project) => (
              <a
                key={project.slug}
                href={`#${project.slug}`}
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-secondary/85 transition-colors hover:border-accent-secondary/40 hover:bg-accent-secondary/10 hover:text-primary"
              >
                {project.name}
              </a>
            ))}
          </nav>

          <PortfolioShowcase />
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-custom bg-surface">
        <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[600px] -translate-x-1/2 rounded-full bg-accent-secondary/[0.04] blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-28">
          <div className="mb-14 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-accent-secondary">
              Testimonials
            </p>
            <h2 className="text-3xl font-bold text-primary md:text-5xl">
              What Our <span className="text-accent-secondary">Clients Say</span>
            </h2>
            <div className="mx-auto mt-3 h-0.5 w-16 rounded-full bg-accent-secondary" />
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
