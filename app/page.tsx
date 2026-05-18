import {
  Palette,
  Monitor,
  Building2,
  ShoppingCart,
  Zap,
  Layers,
  Shield,
  TrendingUp,
  Code,
} from "lucide-react";
import ProcessSection from "@/components/ProcessSection";
import TestimonialSlider from "@/components/TestimonialSlider";
import ContactModalCTA from "@/components/ContactModalCTA";
import FAQSection from "@/components/FAQSection";
import type { Metadata } from "next";
import { defaultSeo } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Custom Websites, Apps, Branding and Digital Growth",
  description: defaultSeo.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: defaultSeo.title,
    description: defaultSeo.description,
    url: "/",
    images: [
      {
        url: defaultSeo.image,
        width: 1200,
        height: 630,
        alt: "TechBuds digital solutions agency",
      },
    ],
  },
};

export default function Home() {
  const logos: { src: string; alt: string; noFilter?: boolean }[] = [
    {
      src: "https://ik.imagekit.io/codebyjerry/contibutions%20-%20logo/enmart_logo.png",
      alt: "Enmart",
    },
    {
      src: "https://ik.imagekit.io/codebyjerry/contibutions%20-%20logo/aaraninfo.png?updatedAt=1777100866170",
      alt: "Aaran Info",
    },
    {
      src: "https://ik.imagekit.io/codebyjerry/contibutions%20-%20logo/pixora_new_white.png?updatedAt=1779039491768",
      alt: "Pixora",
    },
    {
      src: "https://ik.imagekit.io/codebyjerry/contibutions%20-%20logo/destrosolutions_new.png",
      alt: "Destro Solutions",
    },
    {
      src: "https://ik.imagekit.io/codebyjerry/contibutions%20-%20logo/jippymart.webp?updatedAt=1777100737251",
      alt: "JippyMart",
    },
    {
      src: "https://ik.imagekit.io/codebyjerry/contibutions%20-%20logo/logo.svg",
      alt: "Client Logo",
    },
    {
      src: "https://ik.imagekit.io/codebyjerry/contibutions%20-%20logo/Baybee_logo.svg",
      alt: "Baybee",
    },
    {
      src: "https://ik.imagekit.io/codebyjerry/contibutions%20-%20logo/enmart_logo.png",
      alt: "Enmart",
    },
    {
      src: "https://ik.imagekit.io/codebyjerry/contibutions%20-%20logo/aaraninfo.png?updatedAt=1777100866170",
      alt: "Aaran Info",
    },
    {
      src: "https://ik.imagekit.io/codebyjerry/contibutions%20-%20logo/pixora_new_white.png?updatedAt=1779039491768",
      alt: "Pixora",
    },
    {
      src: "https://ik.imagekit.io/codebyjerry/contibutions%20-%20logo/destrosolutions_new.png",
      alt: "Destro Solutions",
    },
    {
      src: "https://ik.imagekit.io/codebyjerry/contibutions%20-%20logo/jippymart.webp?updatedAt=1777100737251",
      alt: "JippyMart",
    },
    {
      src: "https://ik.imagekit.io/codebyjerry/contibutions%20-%20logo/logo.svg",
      alt: "Client Logo",
    },
    {
      src: "https://ik.imagekit.io/codebyjerry/contibutions%20-%20logo/Baybee_logo.svg",
      alt: "Baybee",
    },
  ];

  return (
    <div className="bg-brand w-full overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative w-full overflow-hidden bg-brand">
        <div className="relative w-full overflow-hidden">
          <picture>
            <source
              media="(min-width: 768px)"
              srcSet="https://ik.imagekit.io/codebyjerry/techbuds/Hero%20web%20image.png"
            />
            <img
              src="https://ik.imagekit.io/codebyjerry/techbuds/Hero%20mobile%20image.png?updatedAt=1779037241193"
              alt="Techbuds hero"
              className="w-full h-auto block"
            />
          </picture>
        </div>
      </section>

      {/* TRUST BAR SECTION */}
      <section className="border-t border-b border-custom bg-surface/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-10">
          {/* TOP TEXT */}
          <div className="text-center mb-10">
            <p className="text-sm uppercase tracking-[0.25em] text-secondary font-medium">
              Brand Area
            </p>
            <p className="text-lg text-primary mt-2 max-w-2xl mx-auto">
              Featuring partner brands and clients we’ve built digital
              experiences for.
            </p>
          </div>

          {/* LOGOS */}
          <div className="overflow-hidden">
            <div className="logo-marquee flex gap-6 py-4">
              {logos.map((logo, index) => (
                <div
                  key={index}
                  className="flex min-w-[50%] items-center justify-center md:min-w-[16.6667%]"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className={`max-h-12 object-contain ${logo.noFilter ? "" : "filter brightness-0 invert"} opacity-80 transition-opacity duration-300 hover:opacity-100`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION — high impact */}
      <section className="relative overflow-hidden border-y border-custom">
        {/* background pattern — fully visible */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "url(https://ik.imagekit.io/codebyjerry/techbuds/bg_pattern_1.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        {/* dark overlay for readability */}
        <div className="pointer-events-none absolute inset-0 bg-[#081124]/70" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            {/* left — branding / stat blocks */}
            <div>
              {/* badge */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent-secondary/30 bg-accent-secondary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent-secondary">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-secondary animate-pulse" />
                About TechBuds
              </div>

              <h2 className="text-3xl font-bold leading-tight text-primary md:text-5xl">
                Building Brands. Scaling{" "}
                <span className="text-accent-secondary">Solutions.</span>
              </h2>

              <div className="mt-2 h-1 w-20 rounded-full bg-accent-secondary" />

              <p className="mt-6 text-secondary text-base md:text-lg leading-relaxed">
                TechBuds is a modern digital solutions company focused on
                building impactful brands, scalable platforms, and
                high-performance digital experiences.
              </p>

              <p className="mt-4 text-secondary text-base md:text-lg leading-relaxed">
                We combine strategy, design, and technology to help businesses
                grow with clean development, modern UI/UX, and future-ready
                solutions.
              </p>

              {/* stat row */}
              <div className="mt-8 grid grid-cols-3 gap-4 border-t border-custom pt-8">
                {[
                  { value: "50+", label: "Projects Delivered" },
                  { value: "5+", label: "Years Experience" },
                  { value: "98%", label: "Client Satisfaction" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl font-bold text-accent-secondary md:text-3xl">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs text-secondary/80">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* right — service expertise cards */}
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: "palette",
                  title: "Branding & Identity",
                  desc: "Strategic brand development, visual identity, and positioning.",
                },
                {
                  icon: "monitor",
                  title: "Web & Mobile Apps",
                  desc: "Custom web platforms, dashboards, and cross-platform mobile apps.",
                },
                {
                  icon: "building",
                  title: "Business Platforms",
                  desc: "Scalable enterprise platforms, APIs, and system integrations.",
                },
                {
                  icon: "cart",
                  title: "Ecommerce & Growth",
                  desc: "Conversion-focused stores, SEO strategy, and growth systems.",
                },
              ].map((card) => {
                const IconComponent =
                  card.icon === "palette"
                    ? Palette
                    : card.icon === "monitor"
                      ? Monitor
                      : card.icon === "building"
                        ? Building2
                        : ShoppingCart;

                return (
                  <div
                    key={card.title}
                    className="group rounded-lg border border-custom bg-surface/30 p-5 transition-all duration-300 hover:border-accent-secondary/30 hover:bg-surface/60 hover:-translate-y-1"
                  >
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-accent-secondary/10">
                      <IconComponent className="h-6 w-6 text-accent-secondary" />
                    </div>
                    <h3 className="text-sm font-bold text-primary">
                      {card.title}
                    </h3>
                    <p className="mt-1 text-xs text-secondary/80 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="bg-surface border-t border-custom">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4 text-primary">
              Our Services
            </h2>

            <p className="text-secondary text-lg max-w-2xl font-inter">
              Digital solutions crafted to grow your business and elevate your
              brand.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {[
              {
                src: "https://ik.imagekit.io/codebyjerry/techbuds/brand_identity.png",
                label: "Brand Identity",
              },
              {
                src: "https://ik.imagekit.io/codebyjerry/techbuds/web_solution.png",
                label: "Custom Web Solutions",
              },
              {
                src: "https://ik.imagekit.io/codebyjerry/techbuds/mobile_app.png",
                label: "Mobile Applications System",
              },
              {
                src: "https://ik.imagekit.io/codebyjerry/techbuds/business_paltform_new.png",
                label: "Business Platforms",
              },
              {
                src: "https://ik.imagekit.io/codebyjerry/techbuds/seo_growth_new.png",
                label: "SEO and Growth",
              },
              {
                src: "https://ik.imagekit.io/codebyjerry/techbuds/ecommerce_new.png",
                label: "Ecommerce & Digital Solutions",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="overflow-hidden rounded-md bg-[#0b1226] shadow-sm transition-colors duration-300"
              >
                <div className="relative h-[220px] sm:h-[260px] md:h-[320px] w-full overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.label}
                    className="h-full w-full object-cover transition-opacity duration-300"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>

                <div className="py-4 px-4 text-center">
                  <p className="text-primary font-semibold">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE TECHBUDS — professional & clean */}
      <section className="relative overflow-hidden border-t border-custom">
        {/* background pattern — full visibility */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "url(https://ik.imagekit.io/codebyjerry/techbuds/bg_pattern_1.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        {/* dark overlay for readability */}
        <div className="pointer-events-none absolute inset-0 bg-[#081124]/70" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
          {/* header */}
          <div className="text-center mb-16">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-accent-secondary">
              Why Choose Us
            </p>
            <h2 className="text-3xl font-bold text-primary md:text-5xl">
              Why Choose <span className="text-accent-secondary">TechBuds</span>
            </h2>
            <div className="mx-auto mt-3 h-0.5 w-16 rounded-full bg-accent-secondary" />
            <p className="mx-auto mt-5 max-w-3xl text-secondary text-base md:text-lg leading-relaxed">
              We create modern digital solutions focused on performance,
              scalability, and long-term business growth. Every project is built
              with a balance of strategy, clean design, and reliable technology
              to deliver experiences that truly make an impact.
            </p>
          </div>

          {/* glassmorphism container */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-xl shadow-black/20">
            <div className="grid gap-px overflow-hidden rounded-2xl sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: Zap,
                  title: "Performance Focused",
                  desc: "Fast, optimized, and built for seamless user experiences across all devices.",
                },
                {
                  icon: Layers,
                  title: "Scalable Solutions",
                  desc: "Flexible architectures designed to support future growth and evolving business needs.",
                },
                {
                  icon: Palette,
                  title: "Modern UI/UX",
                  desc: "Clean, intuitive, and visually engaging interfaces built for usability and conversion.",
                },
                {
                  icon: Shield,
                  title: "Secure & Reliable",
                  desc: "Development practices focused on stability, security, and long-term reliability.",
                },
                {
                  icon: TrendingUp,
                  title: "Growth Driven",
                  desc: "Solutions designed not only to look great — but to support real business growth.",
                },
                {
                  icon: Code,
                  title: "End-to-End Development",
                  desc: "From strategy and design to deployment and optimization, we handle the complete digital journey.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="group bg-[#0b1226] p-7 transition-all duration-300 hover:bg-[#0f1a30]"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent-secondary/10 text-accent-secondary transition-colors duration-300 group-hover:bg-accent-secondary/20">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-sm font-bold text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-secondary/70 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS — premium dark theme */}
      <section className="relative overflow-hidden border-t border-custom bg-[#081124]">
        {/* subtle top red glow */}
        <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[600px] -translate-x-1/2 rounded-full bg-red-500/[0.04] blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
          {/* header */}
          <div className="mb-16">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-red-400">
              Our Work
            </p>
            <h2 className="text-3xl font-bold text-primary md:text-5xl">
              Featured <span className="text-red-400">Projects</span>
            </h2>
            <div className="mt-3 h-0.5 w-16 rounded-full bg-red-400" />
            <p className="mt-5 max-w-3xl text-secondary text-base md:text-lg leading-relaxed">
              A selection of recent work showcasing our expertise in brand
              identity, web development, and digital product design.
            </p>
          </div>

          {/* featured project — large card */}
          <div className="group mb-8 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] backdrop-blur-xl shadow-xl shadow-black/20 transition-all duration-500 hover:border-red-500/30 hover:shadow-red-500/5">
            <div className="grid md:grid-cols-[1.3fr_1fr]">
              {/* image side */}
              <div className="relative overflow-hidden">
                <img
                  src="https://ik.imagekit.io/codebyjerry/techbuds/brand_identity.png"
                  alt="Brand Identity Project"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#081124]/80" />
              </div>
              {/* content side */}
              <div className="flex flex-col justify-center p-8 md:p-10">
                <span className="mb-3 inline-flex w-fit rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-red-400">
                  Featured
                </span>
                <h3 className="text-2xl font-bold text-primary md:text-3xl">
                  Brand Identity — Enmart
                </h3>
                <p className="mt-3 text-secondary/80 text-sm leading-relaxed">
                  Complete brand overhaul including logo system, color palettes,
                  typography, and brand guidelines for a modern retail platform.
                </p>
                {/* tech tags */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {[
                    "Figma",
                    "Illustrator",
                    "After Effects",
                    "Brand Strategy",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-secondary/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* smaller project cards — 3 across */}
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                src: "https://ik.imagekit.io/codebyjerry/techbuds/web_solution.png",
                title: "Pixora — SaaS Platform",
                desc: "Full-stack dashboard with real-time analytics and team collaboration features.",
                tags: ["Next.js", "Node.js", "PostgreSQL", "Redis"],
              },
              {
                src: "https://ik.imagekit.io/codebyjerry/techbuds/mobile_app.png",
                title: "JippyMart — Mobile App",
                desc: "Cross-platform shopping app with AI-powered recommendations and live tracking.",
                tags: ["React Native", "Firebase", "Stripe"],
              },
              {
                src: "https://ik.imagekit.io/codebyjerry/techbuds/business_paltform_new.png",
                title: "Destro Solutions — ERP",
                desc: "Enterprise resource planning system with modular architecture and custom integrations.",
                tags: ["Angular", "Python", "Docker", "GraphQL"],
              },
            ].map((project) => (
              <div
                key={project.title}
                className="group overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] backdrop-blur-lg shadow-lg shadow-black/20 transition-all duration-400 hover:-translate-y-1 hover:border-red-500/20 hover:shadow-red-500/5"
              >
                <div className="relative h-52 w-full overflow-hidden">
                  <img
                    src={project.src}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#081124] via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-base font-bold text-primary">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-secondary/70 leading-relaxed">
                    {project.desc}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] font-medium text-secondary/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION — interactive left/right layout */}
      <ProcessSection />

      {/* TECHNOLOGIES SECTION — auto-scrolling marquee */}
      <section className="relative overflow-hidden border-t border-custom bg-[#081124]">
        {/* red glow */}
        <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[600px] -translate-x-1/2 rounded-full bg-red-500/[0.04] blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
          {/* header */}
          <div className="text-center mb-14">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-red-400">
              Tech Stack
            </p>
            <h2 className="text-3xl font-bold text-primary md:text-5xl">
              Technologies We <span className="text-red-400">Use</span>
            </h2>
            <div className="mx-auto mt-3 h-0.5 w-16 rounded-full bg-red-400" />
            <p className="mx-auto mt-5 max-w-3xl text-secondary text-base md:text-lg leading-relaxed">
              Modern tools and frameworks we leverage to build performant,
              scalable digital products.
            </p>
          </div>

          {/* marquee wrapper — horizontal auto-scroll with mask fade */}
          <div className="tech-marquee-wrapper">
            <div className="tech-marquee-track">
              {/* first set */}
              {techLogos.map((logo) => (
                <TechLogo key={logo.name} name={logo.name} src={logo.src} />
              ))}
              {/* duplicate for seamless loop */}
              {techLogos.map((logo) => (
                <TechLogo
                  key={`dup-${logo.name}`}
                  name={logo.name}
                  src={logo.src}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION — horizontal slider */}
      <section className="relative overflow-hidden border-t border-custom bg-surface">
        {/* subtle red glow */}
        <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[600px] -translate-x-1/2 rounded-full bg-red-500/[0.04] blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
          {/* header */}
          <div className="text-center mb-14">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-red-400">
              Testimonials
            </p>
            <h2 className="text-3xl font-bold text-primary md:text-5xl">
              What Our <span className="text-red-400">Clients Say</span>
            </h2>
            <div className="mx-auto mt-3 h-0.5 w-16 rounded-full bg-red-400" />
            <p className="mx-auto mt-5 max-w-3xl text-secondary text-base md:text-lg leading-relaxed">
              Real feedback from the brands and businesses we&rsquo;ve had the
              privilege to work with.
            </p>
          </div>

          {/* testimonial slider — 3 at a time desktop, 1 mobile */}
          <TestimonialSlider />
        </div>
      </section>

      <FAQSection title="Frequently Asked Questions" list={faqData} />

      <ContactModalCTA />
    </div>
  );
}

const faqData = [
  {
    q: "What services does TechBuds provide?",
    a: "We provide Brand Identity, Custom Web Solutions, Mobile Applications, Business Platforms, SEO & Growth, and Ecommerce & Digital Solutions tailored for modern businesses.",
  },
  {
    q: "Do you build custom websites?",
    a: "Yes. Every website and platform we create is fully customized based on your business goals, audience, and growth requirements.",
  },
  {
    q: "Which technologies do you use?",
    a: "We work with modern technologies including Next.js, React, Laravel, Node.js, TypeScript, Firebase, PostgreSQL, Tailwind CSS, and Shopify.",
  },
  {
    q: "Do you provide mobile app development?",
    a: "Yes. We build scalable and user-friendly mobile applications for startups, businesses, and digital platforms.",
  },
  {
    q: "Can you redesign an existing website or platform?",
    a: "Absolutely. We can modernize your current website with improved UI/UX, better performance, SEO optimization, and responsive design.",
  },
  {
    q: "Do you offer SEO and digital growth services?",
    a: "Yes. We help businesses improve visibility, rankings, traffic, and conversions through strategic SEO and growth-focused solutions.",
  },
  {
    q: "How long does a project usually take?",
    a: "Project timelines depend on the scope and complexity. Most projects are delivered in planned phases with clear communication throughout the process.",
  },
  {
    q: "Will my website be mobile responsive?",
    a: "Yes. Every solution we build is optimized for desktop, tablet, and mobile devices to ensure the best user experience.",
  },
  {
    q: "Do you provide support after project completion?",
    a: "Yes. We provide ongoing support, maintenance, updates, and performance improvements after launch.",
  },
  {
    q: "How can we start working with TechBuds?",
    a: "You can contact us through our website or project inquiry form. We'll discuss your requirements and create the right solution for your business goals.",
  },
];

const techLogos = [
  {
    name: "Next.js",
    src: "https://ik.imagekit.io/codebyjerry/Techstack%20logos/next-js.svg?updatedAt=1777103789537",
  },
  {
    name: "React",
    src: "https://ik.imagekit.io/codebyjerry/Techstack%20logos/React.png?updatedAt=1777103789784",
  },
  {
    name: "TypeScript",
    src: "https://ik.imagekit.io/codebyjerry/Techstack%20logos/typescript.jpg?updatedAt=1777103789516",
  },
  {
    name: "JavaScript",
    src: "https://ik.imagekit.io/codebyjerry/Techstack%20logos/javascript.webp?updatedAt=1777103789547",
  },
  {
    name: "Laravel",
    src: "https://ik.imagekit.io/codebyjerry/Techstack%20logos/Laravel.png?updatedAt=1777103789399",
  },
  {
    name: "PHP",
    src: "https://ik.imagekit.io/codebyjerry/Techstack%20logos/php.png?updatedAt=1777103789754",
  },
  {
    name: "Node.js",
    src: "https://ik.imagekit.io/codebyjerry/Techstack%20logos/node-js.png?updatedAt=1777103789668",
  },
  {
    name: "Firebase",
    src: "https://ik.imagekit.io/codebyjerry/Techstack%20logos/Firebase.png?updatedAt=1777103789380",
  },
  {
    name: "PostgreSQL",
    src: "https://ik.imagekit.io/codebyjerry/Techstack%20logos/postgres.png?updatedAt=1777103789417",
  },
  {
    name: "MySQL",
    src: "https://ik.imagekit.io/codebyjerry/Techstack%20logos/mysql.png?updatedAt=1777103789400",
  },
  {
    name: "SQL",
    src: "https://ik.imagekit.io/codebyjerry/Techstack%20logos/sql.png?updatedAt=1777103790046",
  },
  {
    name: "Tailwind CSS",
    src: "https://ik.imagekit.io/codebyjerry/Techstack%20logos/tailwind%20css.png?updatedAt=1777103789565",
  },
  {
    name: "Bootstrap",
    src: "https://ik.imagekit.io/codebyjerry/Techstack%20logos/boostrap.jpg?updatedAt=1777103789397",
  },
  {
    name: "Alpine.js",
    src: "https://ik.imagekit.io/codebyjerry/Techstack%20logos/alpine.jpg?updatedAt=1777103789368",
  },
  {
    name: "Inertia",
    src: "https://ik.imagekit.io/codebyjerry/Techstack%20logos/inertia.jpg?updatedAt=1777103789415",
  },
  {
    name: "Shopify",
    src: "https://ik.imagekit.io/codebyjerry/Techstack%20logos/Shopify.png?updatedAt=1777103788756",
  },
  {
    name: "WordPress",
    src: "https://ik.imagekit.io/codebyjerry/Techstack%20logos/WordPress.png?updatedAt=1777103788740",
  },
  {
    name: "Vercel",
    src: "https://ik.imagekit.io/codebyjerry/Techstack%20logos/vercel.png?updatedAt=1777103789544",
  },
  {
    name: "Cloudflare",
    src: "https://ik.imagekit.io/codebyjerry/Techstack%20logos/Cloudflare.png?updatedAt=1777103789371",
  },
  {
    name: "GCP",
    src: "https://ik.imagekit.io/codebyjerry/Techstack%20logos/GCP.png?updatedAt=1777103789339",
  },
  {
    name: "Git",
    src: "https://ik.imagekit.io/codebyjerry/Techstack%20logos/Git.png?updatedAt=1777103789358",
  },
  {
    name: "Postman",
    src: "https://ik.imagekit.io/codebyjerry/Techstack%20logos/Postman.png?updatedAt=1777103789313",
  },
  {
    name: "PHPUnit",
    src: "https://ik.imagekit.io/codebyjerry/Techstack%20logos/PHPUnit.jpg?updatedAt=1777103789323",
  },
  {
    name: "OAuth",
    src: "https://ik.imagekit.io/codebyjerry/Techstack%20logos/oauth.png?updatedAt=1777103789608",
  },
  {
    name: "Hostinger",
    src: "https://ik.imagekit.io/codebyjerry/Techstack%20logos/Hostinger.png?updatedAt=1777103788743",
  },
];

function TechLogo({ name, src }: { name: string; src: string }) {
  return (
    <div className="tech-logo-card shrink-0">
      <div className="flex h-10 w-10 items-center justify-center md:h-12 md:w-12">
        <img
          src={src}
          alt={name}
          className="max-h-full max-w-full object-contain"
        />
      </div>
      <span className="text-[10px] font-medium text-secondary/60 whitespace-nowrap md:text-xs">
        {name}
      </span>
    </div>
  );
}
