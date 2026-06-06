import FAQSection from "@/components/FAQSection";
import ContactModalCTA from "@/components/ContactModalCTA";
import PageHeroBanner from "@/components/PageHeroBanner";
import ServiceCard from "@/components/ServiceCard";
import TechStackSection from "@/components/TechStackSection";
import type { Metadata } from "next";
import { PAGE_BANNERS } from "@/lib/page-banners";
import { SERVICES } from "@/lib/services";
import { Lightbulb, LineChart, Smartphone, Zap } from "lucide-react";

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

const SERVICE_PILLARS = [
  {
    icon: Lightbulb,
    title: "Strategy & Creative",
    description:
      "Blending design thinking with business strategy for impactful results.",
  },
  {
    icon: Zap,
    title: "Technology & Scale",
    description:
      "Performance-first engineering built to grow with your business.",
  },
  {
    icon: Smartphone,
    title: "UX & Experience",
    description:
      "Human-centered interfaces that delight users and drive conversion.",
  },
  {
    icon: LineChart,
    title: "Growth & Impact",
    description:
      "Data-driven strategies that deliver measurable business outcomes.",
  },
];

const SERVICE_FOCUS = [
  "Performance",
  "Scalability",
  "Modern UI/UX",
  "Business Strategy",
  "Long-Term Growth",
  "User-Centered Experiences",
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

      <section className="relative overflow-hidden border-b border-custom bg-[#081124]">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent-secondary/5 via-transparent to-transparent" />
        <div className="pointer-events-none absolute -top-24 right-0 h-56 w-56 rounded-full bg-accent-secondary/[0.06] blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent-secondary/30 bg-accent-secondary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent-secondary">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent-secondary" />
            What We Deliver
          </div>

          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-bold leading-tight text-primary md:text-5xl">
                Solutions Designed for{" "}
                <span className="text-accent-secondary">Growth.</span>
              </h2>
              <div className="mt-2 h-1 w-20 rounded-full bg-accent-secondary" />
              <p className="mt-6 text-base leading-relaxed text-secondary/85 md:text-lg">
                We craft modern digital solutions that blend strategy,
                creativity, and technology to help businesses build stronger
                brands, scale faster, and deliver meaningful digital experiences.
              </p>
              <p className="mt-4 text-base leading-relaxed text-secondary/85 md:text-lg">
                From brand identity and custom platforms to mobile applications
                and growth-driven solutions, every experience is designed with
                performance, scalability, and long-term business impact in mind.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {SERVICE_PILLARS.map((pillar) => (
                <article
                  key={pillar.title}
                  className="group rounded-2xl bg-white/[0.06] p-5 shadow-[0_8px_32px_rgba(0,0,0,0.2)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.09]"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-accent-secondary/10 text-accent-secondary">
                    <pillar.icon size={20} />
                  </div>
                  <h3 className="text-sm font-bold text-primary">
                    {pillar.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-secondary/75">
                    {pillar.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#e2e8f0] bg-[#f8fafc]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24">
          <div className="mb-10 max-w-2xl">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-accent-secondary">
              Our Services
            </p>
            <h2 className="text-3xl font-bold text-[#1e293b] md:text-4xl">
              Everything you need to{" "}
              <span className="text-accent-secondary">build and grow.</span>
            </h2>
            <div className="mt-3 h-1 w-16 rounded-full bg-accent-secondary" />
            <p className="mt-4 text-base leading-relaxed text-[#64748b]">
              Explore the services we offer. Click any card to view details.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
            {SERVICES.map((service, index) => (
              <ServiceCard
                key={service.slug}
                service={service}
                theme="light"
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <TechStackSection />

      <section className="border-y border-[#e2e8f0] bg-[#f8fafc]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-accent-secondary">
                Why TechBuds
              </p>
              <h2 className="text-3xl font-bold text-[#1e293b] md:text-4xl">
                Built for performance,{" "}
                <span className="text-accent-secondary">designed to scale.</span>
              </h2>
              <div className="mt-3 h-1 w-16 rounded-full bg-accent-secondary" />
              <p className="mt-5 text-base leading-relaxed text-[#475569] md:text-lg">
                At TechBuds, we build modern digital solutions that help
                businesses grow, scale, and create meaningful digital
                experiences. From branding and custom platforms to mobile
                applications and growth-focused strategies, our work combines
                creativity, technology, and performance.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[#475569] md:text-lg">
                Our goal is simple — to help businesses transform ideas into
                impactful digital experiences through modern technology and
                strategic execution.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {SERVICE_FOCUS.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-white px-4 py-4 text-sm font-medium text-[#475569] shadow-[0_8px_30px_rgba(15,23,42,0.06)] transition-transform duration-300 hover:-translate-y-0.5"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FAQSection
        title="Frequently Asked Questions"
        list={SERVICE_PAGE_FAQ}
        theme="dark"
      />

      <ContactModalCTA />
    </div>
  );
}
