import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import ContactModalCTA from "@/components/ContactModalCTA";
import type { Metadata } from "next";

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
        url: "https://ik.imagekit.io/codebyjerry/techbuds/services_hero_banner.png",
        width: 1200,
        height: 630,
        alt: "TechBuds services",
      },
    ],
  },
};

const SERVICES = [
  {
    slug: "brand-identity",
    label: "Brand Identity",
    src: "https://ik.imagekit.io/codebyjerry/techbuds/brand_identity.png",
  },
  {
    slug: "custom-web-solutions",
    label: "Custom Web Solutions",
    src: "https://ik.imagekit.io/codebyjerry/techbuds/web_solution.png",
  },
  {
    slug: "mobile-applications",
    label: "Mobile Applications System",
    src: "https://ik.imagekit.io/codebyjerry/techbuds/mobile_app.png",
  },
  {
    slug: "business-platforms",
    label: "Business Platforms",
    src: "https://ik.imagekit.io/codebyjerry/techbuds/business_paltform_new.png",
  },
  {
    slug: "seo-growth",
    label: "SEO and Growth",
    src: "https://ik.imagekit.io/codebyjerry/techbuds/seo_growth_new.png",
  },
  {
    slug: "ecommerce-digital",
    label: "Ecommerce & Digital Solutions",
    src: "https://ik.imagekit.io/codebyjerry/techbuds/ecommerce_new.png",
  },
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
    <div className="bg-surface min-h-screen">
      {/* Hero Section — image only, no overlay */}
      <section className="w-full">
        <picture>
          <source
            media="(min-width: 768px)"
            srcSet="https://ik.imagekit.io/codebyjerry/techbuds/services_hero_banner.png"
          />
          <img
            src="https://ik.imagekit.io/codebyjerry/techbuds/servive_hero_mobile.png"
            alt="Services hero"
            className="w-full h-auto block"
          />
        </picture>
      </section>

      {/* Intro Section — enhanced with icons */}
      <section className="relative overflow-hidden border-y border-custom bg-[#081124]">
        {/* subtle background gradient */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent-secondary/5 via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
          {/* badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent-secondary/30 bg-accent-secondary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent-secondary">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-secondary animate-pulse" />
            What We Deliver
          </div>

          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            {/* left — heading + text */}
            <div>
              <h2 className="text-3xl font-bold leading-tight text-primary md:text-5xl">
                Solutions Designed for{" "}
                <span className="text-accent-secondary">Growth.</span>
              </h2>
              <div className="mt-2 h-1 w-20 rounded-full bg-accent-secondary" />
              <p className="mt-6 text-secondary text-base md:text-lg leading-relaxed">
                We craft modern digital solutions that blend strategy,
                creativity, and technology to help businesses build stronger
                brands, scale faster, and deliver meaningful digital
                experiences.
              </p>
              <p className="mt-4 text-secondary text-base md:text-lg leading-relaxed">
                From brand identity and custom platforms to mobile applications
                and growth-driven solutions, every experience is designed with
                performance, scalability, and long-term business impact in mind.
              </p>
            </div>

            {/* right — icon cards */}
            <div className="grid gap-4 sm:grid-cols-2">
              {/* Card 1 */}
              <div className="group rounded-lg border border-custom bg-surface/40 p-5 transition-all duration-300 hover:border-accent-secondary/40 hover:bg-surface/80 hover:-translate-y-1">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-accent-secondary/10 text-accent-secondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                    />
                  </svg>
                </div>
                <h3 className="text-sm font-bold text-primary">
                  Strategy & Creative
                </h3>
                <p className="mt-1 text-xs text-secondary leading-relaxed">
                  Blending design thinking with business strategy for impactful
                  results.
                </p>
              </div>

              {/* Card 2 */}
              <div className="group rounded-lg border border-custom bg-surface/40 p-5 transition-all duration-300 hover:border-accent-secondary/40 hover:bg-surface/80 hover:-translate-y-1">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-accent-secondary/10 text-accent-secondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                    />
                  </svg>
                </div>
                <h3 className="text-sm font-bold text-primary">
                  Technology & Scale
                </h3>
                <p className="mt-1 text-xs text-secondary leading-relaxed">
                  Performance-first engineering built to grow with your
                  business.
                </p>
              </div>

              {/* Card 3 */}
              <div className="group rounded-lg border border-custom bg-surface/40 p-5 transition-all duration-300 hover:border-accent-secondary/40 hover:bg-surface/80 hover:-translate-y-1">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-accent-secondary/10 text-accent-secondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5"
                    />
                  </svg>
                </div>
                <h3 className="text-sm font-bold text-primary">
                  UX & Experience
                </h3>
                <p className="mt-1 text-xs text-secondary leading-relaxed">
                  Human-centered interfaces that delight users and drive
                  conversion.
                </p>
              </div>

              {/* Card 4 */}
              <div className="group rounded-lg border border-custom bg-surface/40 p-5 transition-all duration-300 hover:border-accent-secondary/40 hover:bg-surface/80 hover:-translate-y-1">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-accent-secondary/10 text-accent-secondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                    />
                  </svg>
                </div>
                <h3 className="text-sm font-bold text-primary">
                  Growth & Impact
                </h3>
                <p className="mt-1 text-xs text-secondary leading-relaxed">
                  Data-driven strategies that deliver measurable business
                  outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section — visually separated */}
      <section className="border-y border-custom bg-[#081124]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
          <h1 className="text-3xl font-bold text-primary mb-6">Our Services</h1>
          <p className="text-secondary mb-8 max-w-2xl">
            Explore the services we offer. Click any card to view details.
          </p>

          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="block group"
              >
                <div className="overflow-hidden rounded-md bg-[#0b1226] shadow-sm transition-colors duration-300">
                  <div className="relative h-[220px] sm:h-[260px] md:h-[320px] w-full overflow-hidden">
                    <img
                      src={s.src}
                      alt={s.label}
                      className="h-full w-full object-cover"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  </div>
                  <div className="py-4 px-4 text-center">
                    <p className="text-primary font-semibold">{s.label}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Service Page Content + FAQ + CTA */}
      <section className="border-y border-custom bg-[#081124] text-secondary">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
          <div className="mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-surface/80 p-10 shadow-[0_30px_90px_rgba(0,0,0,0.25)] ring-1 ring-white/10 backdrop-blur-xl">
            <h2 className="text-3xl font-bold text-primary md:text-4xl">
              Our Services
            </h2>
            <p className="mt-6 text-secondary text-base leading-8 md:text-lg">
              At TechBuds, we build modern digital solutions that help
              businesses grow, scale, and create meaningful digital experiences.
              From branding and custom platforms to mobile applications,
              ecommerce systems, and growth-focused strategies, our services are
              designed to combine creativity, technology, and performance into
              scalable business solutions.
            </p>
            <p className="mt-4 text-secondary text-base leading-8 md:text-lg">
              We focus on creating clean, future-ready digital products that
              improve user experience, strengthen brand presence, and support
              long-term business goals.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Performance",
                "Scalability",
                "Modern UI/UX",
                "Business Strategy",
                "Long-Term Growth",
                "User-Centered Experiences",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-3xl border border-white/10 bg-[#0e172f] px-4 py-4 text-sm text-secondary/80"
                >
                  {item}
                </div>
              ))}
            </div>

            <p className="mt-8 text-secondary text-base leading-8 md:text-lg">
              Our goal is simple — to help businesses transform ideas into
              impactful digital experiences through modern technology and
              strategic execution.
            </p>
          </div>

          <div className="mt-16">
            <FAQSection
              title="Frequently Asked Questions"
              list={SERVICE_PAGE_FAQ}
            />
          </div>

          <div className="mt-16">
            <ContactModalCTA />
          </div>
        </div>{" "}
      </section>
    </div>
  );
}
