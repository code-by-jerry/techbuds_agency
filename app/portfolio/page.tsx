import ContactModalCTA from "@/components/ContactModalCTA";
import FAQSection from "@/components/FAQSection";
import PageHeroBanner from "@/components/PageHeroBanner";
import PortfolioHighlightsSection from "@/components/PortfolioHighlightsSection";
import PortfolioShowcase from "@/components/PortfolioShowcase";
import ServiceBlogPreview from "@/components/ServiceBlogPreview";
import { PAGE_BANNERS } from "@/lib/page-banners";
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

      <PortfolioHighlightsSection />

      <section className="border-b border-[#e2e8f0] bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-20">
          <div className="mb-12 text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-accent-secondary">
              Selected Work
            </p>
            <h2 className="text-3xl font-bold text-[#1e293b] md:text-4xl">
              Projects we&apos;ve{" "}
              <span className="text-accent-secondary">shipped.</span>
            </h2>
            <div className="mx-auto mt-3 h-0.5 w-16 rounded-full bg-accent-secondary" />
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#64748b] md:text-base">
              Click a project to browse screenshots in the gallery.
            </p>
          </div>

          <PortfolioShowcase />
        </div>
      </section>

      <ServiceBlogPreview />

      <FAQSection title="Portfolio Questions" list={portfolioFaq} />

      <ContactModalCTA />
    </div>
  );
}
