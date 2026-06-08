import Link from "next/link";
import ContactModalTrigger from "@/components/ContactModalTrigger";
import ProcessSection from "@/components/ProcessSection";
import ServiceBlogPreview from "@/components/ServiceBlogPreview";
import SuccessStoriesSlider from "@/components/SuccessStoriesSlider";
import ContactModalCTA from "@/components/ContactModalCTA";
import FAQSection from "@/components/FAQSection";
import HeroContactForm from "@/components/HeroContactForm";
import ServicesSection from "@/components/ServicesSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import PlatformPartners from "@/components/PlatformPartners";
import AboutSection from "@/components/AboutSection";
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
      src: "https://ik.imagekit.io/codebyjerry/contibutions%20-%20logo/ChatGPT%20Image%20Jun%205,%202026,%2010_04_02%20PM.png",
      alt: "Pala Predictor",
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
      src: "https://ik.imagekit.io/codebyjerry/contibutions%20-%20logo/logo.svg",
      alt: "Client Logo",
    },
    {
      src: "https://ik.imagekit.io/codebyjerry/contibutions%20-%20logo/Baybee_logo.svg",
      alt: "Baybee",
    },
    {
      src: "https://ik.imagekit.io/codebyjerry/contibutions%20-%20logo/ChatGPT%20Image%20Jun%205,%202026,%2010_04_02%20PM.png",
      alt: "Pala Predictor",
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
      <section className="relative min-h-below-chrome w-full overflow-hidden bg-brand lg:h-below-chrome">
        <video
          src="/video/Fluid_motion_graphic_abstract_waves_202605310524.mp4"
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 h-full bg-black/40" />
        <div className="relative flex h-full min-h-below-chrome items-center px-6 py-16 md:px-10 lg:min-h-0 lg:px-16 lg:py-6">
          <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
            <div className="text-center lg:text-left">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-accent-secondary">
                Fluid tech motion
              </p>
              <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-[2.85rem] lg:leading-[1.12] xl:text-5xl">
                Building digital brands, products, and platforms that grow
                revenue.
              </h1>
              <div className="relative mx-auto mt-6 h-20 max-w-xl overflow-hidden sm:h-24 lg:mx-0 lg:mt-6">
                {[
                  "Custom websites",
                  "Mobile apps",
                  "Ecommerce platforms",
                  "Branding & digital strategy",
                ].map((line, index) => (
                  <p
                    key={line}
                    className="hero-phrase absolute inset-x-0 text-lg font-semibold text-white/90 sm:text-xl lg:text-2xl"
                    style={{ animationDelay: `${index * 3}s` }}
                  >
                    {line}
                  </p>
                ))}
              </div>
              <p className="mx-auto mt-4 max-w-xl text-sm text-secondary md:text-base lg:mx-0 lg:mt-5">
                Premium abstract visuals, fluid motion, and crisp content
                transitions for a bold digital studio first impression.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:mt-6 lg:justify-start">
                <ContactModalTrigger
                  source="Home Hero - Start your project"
                  className="btn-primary"
                >
                  Start your project
                </ContactModalTrigger>
                <Link href="/portfolio" className="btn-secondary">
                  View portfolio
                </Link>
              </div>
            </div>

            <HeroContactForm />
          </div>
        </div>
      </section>

      {/* TRUST BAR SECTION */}
      <section className="border-y border-[#e2e8f0] bg-[#f8fafc]">
        <div className="mx-auto max-w-7xl px-6 py-5 md:px-10 md:py-6">
          <div className="mb-4 text-center md:mb-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#64748b]">
              Brand Area
            </p>
            <p className="mx-auto mt-1 max-w-lg text-sm leading-snug text-[#1e293b]">
              Trusted by brands we&apos;ve helped grow online.
            </p>
          </div>

          <div className="overflow-hidden">
            <div className="logo-marquee flex gap-10 py-1 md:gap-12">
              {logos.map((logo, index) => (
                <div
                  key={index}
                  className="flex min-w-[42%] items-center justify-center md:min-w-[14%]"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className={`max-h-8 object-contain md:max-h-9 ${logo.noFilter ? "" : "brightness-0 opacity-70"} transition-opacity duration-300 hover:opacity-100`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <AboutSection theme="light" id="about" showLink />

      {/* WHY US */}
      <section className="w-full border-y border-[#e2e8f0] bg-[#081124]">
        <div className="px-6 pt-8 pb-5 text-center md:hidden">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Why Choose{" "}
            <span className="text-accent-secondary">TechBuds</span>
          </h2>
          <div className="mx-auto mt-3 h-1 w-14 rounded-full bg-accent-secondary" />
        </div>

        <div className="relative">
          <picture>
            <source
              media="(min-width: 768px)"
              srcSet="https://ik.imagekit.io/codebyjerry/techbuds/why_us_web.png"
            />
            <img
              src="https://ik.imagekit.io/codebyjerry/techbuds/Why_us_mobile.png"
              alt="Why choose TechBuds"
              className="block h-auto w-full"
            />
          </picture>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 hidden px-6 pb-8 text-center md:block lg:pb-10">
            <h2 className="text-3xl font-bold tracking-tight text-white lg:text-4xl xl:text-5xl">
              Why Choose{" "}
              <span className="text-accent-secondary">TechBuds</span>
            </h2>
            <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-accent-secondary" />
          </div>
        </div>
      </section>

      <ServicesSection />

      <FeaturedProjects />

      <PlatformPartners />

      {/* PROCESS SECTION — interactive left/right layout */}
      <ProcessSection />

      <ServiceBlogPreview />

      <section className="relative overflow-hidden border-t border-[#e2e8f0] bg-[#f8fafc]">
        <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24">
          <div className="mb-12 text-center md:mb-14">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-accent-secondary">
              Case Studies
            </p>
            <h2 className="text-3xl font-bold text-[#1e293b] md:text-5xl">
              Business{" "}
              <span className="text-accent-secondary">Success Stories</span>
            </h2>
            <div className="mx-auto mt-3 h-0.5 w-16 rounded-full bg-accent-secondary" />
            <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-[#64748b] md:text-lg">
              Real projects, real challenges, and real digital solutions
              delivered for growing businesses.
            </p>
          </div>

          <SuccessStoriesSlider />
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
