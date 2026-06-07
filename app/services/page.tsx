import FAQSection from "@/components/FAQSection";
import ContactModalCTA from "@/components/ContactModalCTA";
import PageHeroBanner from "@/components/PageHeroBanner";
import ServicesIndexSection from "@/components/ServicesIndexSection";
import ServicesWhySection from "@/components/ServicesWhySection";
import TechStackSection from "@/components/TechStackSection";
import type { Metadata } from "next";
import { PAGE_BANNERS } from "@/lib/page-banners";

const SERVICE_INFO_IMAGE =
  "https://ik.imagekit.io/codebyjerry/techbuds/Service-info.png";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore TechBuds services including brand identity, custom web solutions, mobile applications, business platforms, SEO growth, and ecommerce development.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "TechBuds Services",
    description:
      "Brand identity, custom web solutions, mobile apps, business platforms, SEO, and ecommerce services for modern businesses.",
    url: "/services",
    images: [
      {
        url: PAGE_BANNERS.services.image,
        width: 1200,
        height: 630,
        alt: "TechBuds services",
      },
    ],
  },
};

const SERVICE_DELIVERY_POINTS = [
  "Clear scope, honest timelines, and practical recommendations",
  "Design and development handled by one focused team",
  "Built for real users — not just launch-day screenshots",
  "Support that continues after your product goes live",
];

const SERVICE_PAGE_FAQ = [
  {
    q: "What services does TechBuds provide?",
    a: "We provide Brand Identity, Custom Web Solutions, Mobile Applications, Business Platforms, SEO & Growth, and Ecommerce & Digital Solutions.",
  },
  {
    q: "Do you work with startups and growing businesses?",
    a: "Yes. We work with startups, small businesses, and enterprises looking to build scalable and modern digital solutions.",
  },
  {
    q: "Are your solutions fully customized?",
    a: "Absolutely. Every project is tailored based on business goals, workflows, user requirements, and long-term scalability.",
  },
  {
    q: "Which technologies do you work with?",
    a: "We work with modern technologies including Next.js, React.js, Laravel, Firebase, Node.js, PostgreSQL, Tailwind CSS, and cloud-based systems.",
  },
  {
    q: "Do you provide mobile-friendly and responsive solutions?",
    a: "Yes. All our websites, applications, and platforms are fully optimized for desktop, tablet, and mobile devices.",
  },
  {
    q: "Can you redesign or upgrade existing platforms?",
    a: "Yes. We help businesses modernize outdated systems with improved UI/UX, better performance, scalability, and SEO optimization.",
  },
  {
    q: "Do you provide post-launch support?",
    a: "Yes. We offer maintenance, updates, optimization, and long-term technical support after project deployment.",
  },
  {
    q: "How do you approach project development?",
    a: "We follow a structured workflow that includes discovery, strategy, design, development, testing, launch, and growth optimization.",
  },
  {
    q: "Do you provide SEO and growth optimization?",
    a: "Yes. We build SEO-friendly digital solutions focused on performance, visibility, and long-term business growth.",
  },
  {
    q: "Why choose TechBuds?",
    a: "TechBuds combines modern design, scalable technology, clean development, and business-focused strategies to create digital solutions that are reliable, future-ready, and growth-driven.",
  },
];

export default function Services() {
  return (
    <div className="bg-brand min-h-screen">
      <PageHeroBanner {...PAGE_BANNERS.services} />

      <section className="border-b border-[#e2e8f0] bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent-secondary/20 bg-accent-secondary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent-secondary">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-secondary" />
                What We Deliver
              </div>

              <h2 className="text-3xl font-bold leading-tight text-[#1e293b] md:text-4xl lg:text-5xl">
                Digital work that helps businesses{" "}
                <span className="text-accent-secondary">move forward.</span>
              </h2>
              <div className="mt-3 h-1 w-16 rounded-full bg-accent-secondary" />

              <p className="mt-6 text-base leading-relaxed text-[#475569] md:text-lg">
                We work with founders and teams who need more than a polished
                website — they need products, platforms, and brands that actually
                support day-to-day operations and long-term growth.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[#475569] md:text-lg">
                From early strategy and UI design to development, launch, and
                ongoing improvements, we stay involved so you always know where the
                project stands and what comes next.
              </p>

              <ul className="mt-8 space-y-3">
                {SERVICE_DELIVERY_POINTS.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-sm text-[#475569] md:text-base"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-secondary" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-center">
              <img
                src={SERVICE_INFO_IMAGE}
                alt="TechBuds services — strategy, design, development, and growth"
                className="h-auto w-full max-w-xl rounded-2xl object-contain lg:max-w-none"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-custom">
        <ServicesIndexSection />
      </section>

      <ServicesWhySection />

      <TechStackSection />

      <FAQSection
        title="Frequently Asked Questions"
        list={SERVICE_PAGE_FAQ}
        theme="dark"
      />

      <ContactModalCTA />
    </div>
  );
}
