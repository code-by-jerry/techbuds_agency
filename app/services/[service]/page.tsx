import FAQSection from "@/components/FAQSection";
import ContactModalCTA from "@/components/ContactModalCTA";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { serviceSeo } from "@/lib/seo";

const SERVICES = [
  {
    slug: "brand-identity",
    label: "Brand Identity",
    image: "https://ik.imagekit.io/codebyjerry/techbuds/brand_identity.png",
    heroDesktop: "https://ik.imagekit.io/codebyjerry/techbuds/brand_web.png",
    heroMobile: "https://ik.imagekit.io/codebyjerry/techbuds/brand_mobile.png",
    description:
      "We craft unique identities that resonate and convert — strategy, logo systems and brand guidelines.",
  },
  {
    slug: "custom-web-solutions",
    label: "Custom Web Solutions",
    image: "https://ik.imagekit.io/codebyjerry/techbuds/web_solution.png",
    heroDesktop:
      "https://ik.imagekit.io/codebyjerry/techbuds/custom%20web%20desktop.png",
    heroMobile:
      "https://ik.imagekit.io/codebyjerry/techbuds/custom%20web%20mobile.png",
    description:
      "Tailored web platforms and dashboards built for performance, stability and scale.",
  },
  {
    slug: "mobile-applications",
    label: "Mobile Applications System",
    image: "https://ik.imagekit.io/codebyjerry/techbuds/mobile_app.png",
    heroDesktop:
      "https://ik.imagekit.io/codebyjerry/techbuds/mobile%20app%20desktop.png",
    heroMobile:
      "https://ik.imagekit.io/codebyjerry/techbuds/mobile%20app%20mobile.png",
    description:
      "Native and cross-platform mobile apps with thoughtful UX and robust engineering.",
  },
  {
    slug: "business-platforms",
    label: "Business Platforms",
    image:
      "https://ik.imagekit.io/codebyjerry/techbuds/business_paltform_new.png",
    heroDesktop:
      "https://ik.imagekit.io/codebyjerry/techbuds/business%20desktop.png",
    heroMobile:
      "https://ik.imagekit.io/codebyjerry/techbuds/business%20mobile.png",
    description:
      "Enterprise and SMB platforms — integrations, APIs, and long-term maintainability.",
  },
  {
    slug: "seo-growth",
    label: "SEO and Growth",
    image: "https://ik.imagekit.io/codebyjerry/techbuds/seo_growth_new.png",
    heroDesktop:
      "https://ik.imagekit.io/codebyjerry/techbuds/seo%20desktop.png",
    heroMobile: "https://ik.imagekit.io/codebyjerry/techbuds/seo%20mobile.png",
    description:
      "Data-driven SEO and growth strategies to increase visibility and conversion.",
  },
  {
    slug: "ecommerce-digital",
    label: "Ecommerce & Digital Solutions",
    image: "https://ik.imagekit.io/codebyjerry/techbuds/ecommerce_new.png",
    heroDesktop:
      "https://ik.imagekit.io/codebyjerry/techbuds/ecommerce%20desktop.png",
    heroMobile:
      "https://ik.imagekit.io/codebyjerry/techbuds/ecommerce%20mobile.png",
    description:
      "Ecommerce stores and digital solutions optimized for conversion and lifetime value.",
  },
];

export function generateStaticParams() {
  return SERVICES.map((service) => ({
    service: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string }>;
}): Promise<Metadata> {
  const { service } = await params;
  const seo = serviceSeo.find((item) => item.slug === service);
  const svc = SERVICES.find((item) => item.slug === service);

  if (!seo || !svc) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: `/services/${seo.slug}`,
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: `/services/${seo.slug}`,
      type: "website",
      images: [
        {
          url: seo.image,
          width: 1200,
          height: 630,
          alt: svc.label,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [seo.image],
    },
  };
}

const BRAND_IDENTITY_FAQ = [
  {
    q: "What is included in your Brand Identity service?",
    a: "Our Brand Identity service includes logo design, visual identity systems, typography selection, color palette creation, brand guidelines, and digital branding assets designed to create a consistent and professional brand presence.",
  },
  {
    q: "Why is brand identity important for a business?",
    a: "A strong brand identity helps businesses build trust, improve recognition, create a professional image, and stand out in competitive markets. It also creates consistency across digital and marketing platforms.",
  },
  {
    q: "Do you create custom logo designs?",
    a: "Yes. Every logo and visual identity system we create is fully customized based on your business goals, target audience, and industry positioning.",
  },
  {
    q: "Will the branding work across digital platforms?",
    a: "Absolutely. Our brand systems are designed to work seamlessly across websites, social media, mobile applications, presentations, and marketing materials.",
  },
  {
    q: "Do you provide brand guidelines?",
    a: "Yes. We create professional brand guideline documents that define logo usage, colors, typography, spacing, and visual consistency standards.",
  },
  {
    q: "Can you redesign an existing brand identity?",
    a: "Yes. We help businesses modernize outdated branding with refreshed visual systems, updated design direction, and improved brand consistency.",
  },
  {
    q: "How long does a branding project usually take?",
    a: "The timeline depends on the project scope and requirements. Most branding projects are completed through structured phases including research, concept development, revisions, and final delivery.",
  },
  {
    q: "Do you design branding for startups?",
    a: "Yes. We work with startups, growing businesses, and established companies looking to build strong and scalable brand identities.",
  },
  {
    q: "What industries do you support for branding?",
    a: "We create brand identities for technology companies, ecommerce businesses, healthcare brands, educational platforms, agencies, real estate companies, and service-based businesses.",
  },
  {
    q: "What makes TechBuds’ branding approach different?",
    a: "Our approach combines strategy, modern design systems, scalability, and digital-first thinking to create identities that are visually impactful, business-focused, and built for long-term growth.",
  },
];

const CUSTOM_WEB_SOLUTIONS_FAQ = [
  {
    q: "What types of web solutions do you develop?",
    a: "We develop custom business websites, web applications, admin dashboards, customer portals, ecommerce platforms, booking systems, and scalable business management solutions tailored to specific business requirements.",
  },
  {
    q: "Do you build fully custom websites?",
    a: "Yes. Every website and web application we create is custom-designed and developed based on your business goals, target audience, and operational workflows.",
  },
  {
    q: "Which technologies do you use for web development?",
    a: "We work with modern technologies including Next.js, React.js, Laravel, Node.js, TypeScript, PostgreSQL, Firebase, and Tailwind CSS.",
  },
  {
    q: "Will the website be mobile responsive?",
    a: "Absolutely. All our web solutions are optimized for desktop, tablet, and mobile devices to ensure seamless user experiences across all screen sizes.",
  },
  {
    q: "Do you provide backend and API integration services?",
    a: "Yes. We develop secure backend systems and integrate APIs, payment gateways, cloud services, CRMs, and third-party platforms based on project requirements.",
  },
  {
    q: "Is SEO included in your web development process?",
    a: "Yes. We build SEO-friendly websites with optimized performance, clean structure, responsive design, and modern development practices that support search visibility.",
  },
  {
    q: "Can you redesign or upgrade an existing website?",
    a: "Yes. We help businesses modernize outdated websites with improved UI/UX, performance optimization, responsive layouts, and scalable architecture.",
  },
  {
    q: "How long does a web development project take?",
    a: "Project timelines vary depending on complexity, features, and project scope. We follow a structured workflow with clear milestones and transparent communication.",
  },
  {
    q: "Do you provide post-launch support and maintenance?",
    a: "Yes. We offer ongoing support, updates, maintenance, performance improvements, and technical assistance after deployment.",
  },
  {
    q: "What makes TechBuds’ web solutions different?",
    a: "Our web solutions focus on scalability, performance, clean architecture, modern UI/UX, and long-term business growth while using future-ready technologies and user-focused development strategies.",
  },
];

const MOBILE_APPLICATIONS_FAQ = [
  {
    q: "What types of mobile applications do you develop?",
    a: "We develop custom mobile applications for startups, businesses, ecommerce platforms, enterprise systems, booking solutions, customer engagement platforms, and operational management systems.",
  },
  {
    q: "Do you develop apps for both Android and iOS?",
    a: "Yes. We build mobile applications for both Android and iOS platforms using modern cross-platform and scalable development technologies.",
  },
  {
    q: "Which technologies do you use for mobile app development?",
    a: "We work with technologies such as Flutter, React Native, Firebase, REST APIs, Node.js, Laravel APIs, and cloud-based backend systems.",
  },
  {
    q: "Will the mobile app be scalable for future growth?",
    a: "Absolutely. Our applications are designed with scalable architecture, flexible backend systems, and future-ready development practices to support business growth.",
  },
  {
    q: "Do you provide UI/UX design for mobile applications?",
    a: "Yes. We create modern, user-friendly, and responsive mobile interfaces focused on usability, performance, and smooth user experiences.",
  },
  {
    q: "Can you integrate APIs and third-party services?",
    a: "Yes. We integrate payment gateways, cloud services, analytics tools, authentication systems, notifications, and other third-party APIs based on project requirements.",
  },
  {
    q: "Do you develop business and enterprise mobile applications?",
    a: "Yes. We create mobile solutions for workflow management, employee operations, customer management, reporting systems, and business automation.",
  },
  {
    q: "How long does a mobile application project take?",
    a: "The development timeline depends on app complexity, features, integrations, and project scope. We follow structured development phases with transparent communication.",
  },
  {
    q: "Do you provide app maintenance and post-launch support?",
    a: "Yes. We provide ongoing maintenance, updates, bug fixes, performance optimization, and technical support after deployment.",
  },
  {
    q: "What makes TechBuds’ mobile solutions different?",
    a: "Our mobile applications combine modern UI/UX, scalable development, performance optimization, and business-focused functionality to deliver reliable and future-ready digital experiences.",
  },
];

const BUSINESS_PLATFORMS_FAQ = [
  {
    q: "What is a business platform?",
    a: "A business platform is a centralized digital system designed to manage operations, workflows, users, reporting, and business processes efficiently through a secure and scalable environment.",
  },
  {
    q: "What types of business platforms do you develop?",
    a: "We develop CRM systems, admin dashboards, workflow automation platforms, employee management systems, vendor portals, analytics dashboards, and custom operational management platforms.",
  },
  {
    q: "Can the platform be customized for our business workflow?",
    a: "Yes. Every business platform we build is fully customized based on your operational requirements, workflows, business goals, and user roles.",
  },
  {
    q: "Do you provide role-based access and permissions?",
    a: "Yes. We implement secure role and permission management systems for admins, managers, employees, clients, and multiple user types.",
  },
  {
    q: "Which technologies do you use for platform development?",
    a: "We use modern technologies including Next.js, React.js, Laravel, Node.js, PostgreSQL, Firebase, REST APIs, and cloud infrastructure services.",
  },
  {
    q: "Will the platform support scalability as our business grows?",
    a: "Absolutely. Our platforms are built with scalable architecture and modular systems designed to support future growth and expanding operational needs.",
  },
  {
    q: "Can you integrate third-party systems and APIs?",
    a: "Yes. We integrate payment systems, CRMs, ERP software, analytics tools, cloud services, communication APIs, and other third-party platforms.",
  },
  {
    q: "Do you provide analytics and reporting dashboards?",
    a: "Yes. We develop real-time dashboards and reporting systems that provide insights into operations, performance, user activity, and business data.",
  },
  {
    q: "How secure are your business platforms?",
    a: "Security is a core part of our development process. We implement authentication systems, secure APIs, role-based access control, and modern security practices.",
  },
  {
    q: "What makes TechBuds’ business platforms different?",
    a: "Our business platforms are designed with scalability, usability, performance, and operational efficiency in mind, helping businesses simplify processes and improve productivity through modern digital systems.",
  },
];

const SEO_GROWTH_FAQ = [
  {
    q: "What does your SEO and Growth service include?",
    a: "Our SEO and Growth service includes technical SEO, on-page optimization, website performance improvement, keyword strategy, content structure optimization, analytics setup, and digital growth planning.",
  },
  {
    q: "Why is SEO important for a business website?",
    a: "SEO helps businesses improve search engine visibility, attract organic traffic, generate qualified leads, strengthen online presence, and support long-term digital growth.",
  },
  {
    q: "Do you provide technical SEO optimization?",
    a: "Yes. We optimize website structure, indexing, crawlability, page speed, Core Web Vitals, metadata, mobile responsiveness, and overall technical performance.",
  },
  {
    q: "Can SEO improve website traffic and conversions?",
    a: "Yes. A properly optimized website can improve visibility, increase targeted traffic, enhance user experience, and create better opportunities for conversions and business growth.",
  },
  {
    q: "Do you optimize websites for mobile devices?",
    a: "Absolutely. Mobile optimization is a core part of our SEO strategy to ensure better usability, performance, and search rankings across all devices.",
  },
  {
    q: "Which tools do you use for SEO analysis and tracking?",
    a: "We work with tools such as Google Search Console, Google Analytics, Lighthouse, Core Web Vitals tools, and modern SEO auditing platforms.",
  },
  {
    q: "Is SEO included during website development?",
    a: "Yes. We follow SEO-friendly development practices including semantic structure, clean code, performance optimization, responsive design, and metadata implementation.",
  },
  {
    q: "How long does SEO take to show results?",
    a: "SEO is a long-term strategy. The timeline depends on competition, industry, website condition, and optimization scope, but consistent improvements build sustainable growth over time.",
  },
  {
    q: "Do you provide SEO services for existing websites?",
    a: "Yes. We can analyze, optimize, and improve existing websites to strengthen search performance, usability, and technical health.",
  },
  {
    q: "What makes TechBuds’ SEO approach different?",
    a: "Our SEO strategy combines technical optimization, performance-focused development, user experience improvements, and long-term growth planning to create sustainable digital visibility and measurable business impact.",
  },
];

const ECOMMERCE_DIGITAL_FAQ = [
  {
    q: "What ecommerce solutions do you provide?",
    a: "We develop custom ecommerce websites, online stores, multi-vendor marketplaces, digital product platforms, subscription systems, and scalable commerce management solutions.",
  },
  {
    q: "Do you build fully custom ecommerce websites?",
    a: "Yes. Every ecommerce platform we create is fully customized based on your business model, products, workflows, and customer experience requirements.",
  },
  {
    q: "Which technologies do you use for ecommerce development?",
    a: "We use modern technologies including Next.js, React.js, Laravel, Firebase, PostgreSQL, Stripe, Razorpay, REST APIs, and cloud infrastructure services.",
  },
  {
    q: "Will the ecommerce website be mobile responsive?",
    a: "Absolutely. All ecommerce platforms are optimized for desktop, tablet, and mobile devices to provide seamless shopping experiences across all screen sizes.",
  },
  {
    q: "Do you integrate payment gateways?",
    a: "Yes. We integrate secure payment gateways such as Stripe, Razorpay, and other modern transaction systems based on project requirements.",
  },
  {
    q: "Can you build multi-vendor marketplace platforms?",
    a: "Yes. We develop scalable marketplace solutions with vendor management, product listings, order tracking, commission systems, and admin controls.",
  },
  {
    q: "Do you provide inventory and order management systems?",
    a: "Yes. Our ecommerce solutions include product management, inventory tracking, order processing, customer management, and analytics dashboards.",
  },
  {
    q: "Is SEO included in ecommerce development?",
    a: "Yes. We build SEO-friendly ecommerce platforms with optimized product structure, fast performance, responsive layouts, and clean architecture for better search visibility.",
  },
  {
    q: "Do you provide post-launch support and maintenance?",
    a: "Yes. We offer ongoing support, maintenance, updates, optimization, and technical assistance after deployment.",
  },
  {
    q: "What makes TechBuds’ ecommerce solutions different?",
    a: "Our ecommerce platforms focus on performance, scalability, modern UI/UX, secure infrastructure, and conversion-focused experiences designed to support long-term digital business growth.",
  },
];

export default async function ServicePage({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  const { service } = await params;
  const svc = SERVICES.find((s) => s.slug === service);
  if (!svc) return notFound();

  return (
    <div className="bg-surface">
      <section className="w-full overflow-hidden bg-brand">
        <picture className="block w-full">
          <source media="(min-width: 768px)" srcSet={svc.heroDesktop} />
          <img
            src={svc.heroMobile}
            alt={svc.label}
            className="w-full h-auto object-cover"
          />
        </picture>
      </section>

      {svc.slug === "brand-identity" ? (
        <section className="border-t border-custom bg-[#081124] text-secondary">
          <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-20">
            <div className="max-w-4xl mx-auto space-y-16 rounded-[2rem] border border-white/10 bg-surface/70 p-10 shadow-[0_30px_90px_rgba(0,0,0,0.35)] ring-1 ring-white/10 backdrop-blur-xl">
              <div className="space-y-6">
                <p className="text-sm uppercase tracking-[0.28em] text-red-400">
                  Brand Identity
                </p>
                <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
                  Build a Brand That People Remember
                </h1>
                <p className="text-base leading-8 text-secondary/80">
                  Your brand is more than a logo — it’s the first impression,
                  the emotional connection, and the identity that defines your
                  business in a competitive digital world. At TechBuds, we
                  create strategic brand identities that help businesses stand
                  out, build trust, and create lasting recognition.
                </p>
                <p className="text-base leading-8 text-secondary/80">
                  We combine creativity, design thinking, and business strategy
                  to craft modern brand experiences that communicate
                  professionalism, clarity, and confidence across every customer
                  touchpoint.
                </p>
              </div>

              <div className="space-y-12">
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-white">
                    What We Deliver
                  </h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {[
                      "Unique and memorable logo systems designed for digital and print consistency.",
                      "Clear positioning, messaging, and identity direction aligned with your business goals.",
                      "Professional font pairings and scalable color palettes built for strong visual recognition.",
                      "Structured brand usage documentation to maintain consistency across platforms.",
                      "Modern assets optimized for websites, social media, presentations, and marketing campaigns.",
                      "Business cards, banners, pitch decks, and branded materials designed for professional communication.",
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-3xl border border-white/10 bg-white/[0.03] px-5 py-5"
                      >
                        <p className="text-sm text-secondary/80">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-white">
                    Why Brand Identity Matters
                  </h2>
                  <p className="text-base leading-8 text-secondary/80">
                    A strong brand identity helps businesses:
                  </p>
                  <ul className="list-inside list-disc space-y-2 text-secondary/80">
                    {[
                      "Build customer trust",
                      "Improve brand recognition",
                      "Create a professional market presence",
                      "Increase customer loyalty",
                      "Stand out from competitors",
                      "Deliver consistent experiences across digital platforms",
                    ].map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <p className="text-base leading-8 text-secondary/80">
                    In today’s digital-first environment, branding directly
                    impacts how customers perceive and remember your business.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-white">
                    Our Approach
                  </h2>
                  <p className="text-base leading-8 text-secondary/80">
                    We focus on creating clean, scalable, and modern brand
                    systems that work across all devices and platforms. Every
                    design decision is aligned with usability, clarity, and
                    long-term growth.
                  </p>
                  <p className="text-base leading-8 text-secondary/80">
                    Our branding process combines:
                  </p>
                  <ul className="list-inside list-disc space-y-2 text-secondary/80">
                    {[
                      "Market research",
                      "Audience understanding",
                      "Creative exploration",
                      "Visual consistency",
                      "Digital adaptability",
                    ].map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <p className="text-base leading-8 text-secondary/80">
                    This ensures your brand remains impactful, future-ready, and
                    professionally positioned.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-white">
                    Industries We Support
                  </h2>
                  <ul className="grid gap-3 sm:grid-cols-2 text-secondary/80">
                    {[
                      "Startups",
                      "Ecommerce Businesses",
                      "Technology Companies",
                      "Healthcare Brands",
                      "Educational Platforms",
                      "Real Estate Businesses",
                      "Agencies & Professional Services",
                    ].map((item) => (
                      <li
                        key={item}
                        className="rounded-3xl border border-white/10 bg-white/[0.03] px-4 py-3"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-10">
                  <h2 className="text-2xl font-semibold text-white">
                    Build Your Brand with Confidence
                  </h2>
                  <p className="mt-3 text-base leading-8 text-secondary/80">
                    Whether you’re launching a new business or rebranding an
                    existing one, TechBuds helps you create a modern identity
                    that reflects your vision and builds lasting credibility.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {svc.slug === "brand-identity" ? (
        <FAQSection
          title="Brand Identity – Frequently Asked Questions"
          list={BRAND_IDENTITY_FAQ}
        />
      ) : null}

      {svc.slug === "custom-web-solutions" ? (
        <section className="border-t border-custom bg-[#081124] text-secondary">
          <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-20">
            <div className="max-w-4xl mx-auto space-y-16 rounded-[2rem] border border-white/10 bg-surface/70 p-10 shadow-[0_30px_90px_rgba(0,0,0,0.35)] ring-1 ring-white/10 backdrop-blur-xl">
              <div className="space-y-6">
                <p className="text-sm uppercase tracking-[0.28em] text-red-400">
                  Custom Web Solutions
                </p>
                <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
                  Custom Web Development Built for Modern Businesses
                </h1>
                <p className="text-base leading-8 text-secondary/80">
                  At TechBuds, we build high-performance custom web solutions
                  designed to help businesses grow, scale, and operate
                  efficiently in the digital world. From business websites and
                  customer portals to advanced web applications and enterprise
                  platforms, our solutions are tailored to your unique business
                  requirements.
                </p>
                <p className="text-base leading-8 text-secondary/80">
                  We focus on creating fast, secure, scalable, and user-friendly
                  digital experiences that combine modern design with powerful
                  functionality.
                </p>
              </div>

              <div className="space-y-12">
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-white">
                    End-to-End Web Development Services
                  </h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {[
                      "Professional websites designed to build trust, improve visibility, and generate leads.",
                      "Tailored web applications developed to streamline operations, automate workflows, and improve productivity.",
                      "Secure and scalable management systems with analytics, reporting, and user management features.",
                      "Seamless integrations with payment gateways, CRMs, ERP systems, Firebase, cloud services, and external APIs.",
                      "Modern interfaces optimized for desktop, tablet, and mobile devices with clean user experiences.",
                      "Fast-loading websites and applications built with optimized architecture and modern technologies.",
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-3xl border border-white/10 bg-white/[0.03] px-5 py-5"
                      >
                        <p className="text-sm text-secondary/80">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-white">
                    Technologies We Work With
                  </h2>
                  <p className="text-base leading-8 text-secondary/80">
                    We use modern and scalable technologies including:
                  </p>
                  <div className="grid gap-3 sm:grid-cols-2 text-secondary/80">
                    {[
                      "Next.js",
                      "React.js",
                      "Laravel",
                      "Node.js",
                      "TypeScript",
                      "PostgreSQL",
                      "Firebase",
                      "Tailwind CSS",
                      "REST APIs & Cloud Services",
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-3xl border border-white/10 bg-white/[0.03] px-4 py-3"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                  <p className="text-base leading-8 text-secondary/80">
                    Our development approach ensures long-term maintainability,
                    scalability, and performance.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-white">
                    Why Businesses Choose Custom Web Solutions
                  </h2>
                  <p className="text-base leading-8 text-secondary/80">
                    Custom development provides greater flexibility and control
                    compared to template-based systems.
                  </p>
                  <ul className="list-inside list-disc space-y-2 text-secondary/80">
                    {[
                      "Scalable architecture",
                      "Better performance and security",
                      "Tailored business workflows",
                      "Improved customer experience",
                      "Easier integrations",
                      "SEO-friendly structure",
                      "Long-term business adaptability",
                    ].map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <p className="text-base leading-8 text-secondary/80">
                    Every solution is designed specifically around your goals,
                    users, and operational needs.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-white">
                    Our Development Approach
                  </h2>
                  <p className="text-base leading-8 text-secondary/80">
                    We follow a structured process to ensure quality and
                    transparency throughout the project lifecycle:
                  </p>
                  <ul className="list-inside list-disc space-y-2 text-secondary/80">
                    {[
                      "Requirement Analysis",
                      "Strategy & Planning",
                      "UI/UX Design",
                      "Agile Development",
                      "Testing & Optimization",
                      "Deployment & Support",
                    ].map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <p className="text-base leading-8 text-secondary/80">
                    This process helps us deliver reliable digital products with
                    clean code and strong technical foundations.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-white">
                    Industries We Support
                  </h2>
                  <ul className="grid gap-3 sm:grid-cols-2 text-secondary/80">
                    {[
                      "Startups",
                      "Ecommerce Businesses",
                      "Healthcare Platforms",
                      "Educational Systems",
                      "SaaS Products",
                      "Real Estate Businesses",
                      "Logistics & Operations",
                      "Corporate Enterprises",
                    ].map((item) => (
                      <li
                        key={item}
                        className="rounded-3xl border border-white/10 bg-white/[0.03] px-4 py-3"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-10">
                  <h2 className="text-2xl font-semibold text-white">
                    Scalable Solutions for Long-Term Growth
                  </h2>
                  <p className="mt-3 text-base leading-8 text-secondary/80">
                    At TechBuds, we don’t just build websites — we create
                    scalable digital systems that help businesses improve
                    efficiency, strengthen their online presence, and support
                    long-term growth.
                  </p>
                  <p className="text-base leading-8 text-secondary/80">
                    Whether you need a modern company website, an advanced
                    business platform, or a fully customized web application, we
                    deliver solutions built for performance and reliability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {svc.slug === "custom-web-solutions" ? (
        <FAQSection
          title="Custom Web Solutions – Frequently Asked Questions"
          list={CUSTOM_WEB_SOLUTIONS_FAQ}
        />
      ) : null}

      {svc.slug === "mobile-applications" ? (
        <FAQSection
          title="Mobile Applications System – Frequently Asked Questions"
          list={MOBILE_APPLICATIONS_FAQ}
        />
      ) : null}

      {svc.slug === "mobile-applications" ? (
        <section className="border-t border-custom bg-[#081124] text-secondary">
          <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-20">
            <div className="max-w-4xl mx-auto space-y-16 rounded-[2rem] border border-white/10 bg-surface/70 p-10 shadow-[0_30px_90px_rgba(0,0,0,0.35)] ring-1 ring-white/10 backdrop-blur-xl">
              <div className="space-y-6">
                <p className="text-sm uppercase tracking-[0.28em] text-red-400">
                  Mobile Applications System
                </p>
                <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
                  Mobile App Solutions Designed for Performance and Growth
                </h1>
                <p className="text-base leading-8 text-secondary/80">
                  At TechBuds, we develop modern mobile application systems that
                  help businesses deliver seamless digital experiences across
                  smartphones and tablets. Our mobile solutions are built to
                  improve customer engagement, streamline operations, and
                  support long-term business growth.
                </p>
                <p className="text-base leading-8 text-secondary/80">
                  From startup applications to enterprise-level platforms, we
                  create scalable, secure, and user-focused mobile apps tailored
                  to real business needs.
                </p>
              </div>

              <div className="space-y-12">
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-white">
                    Custom Mobile App Development Services
                  </h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {[
                      "High-performance Android applications built with modern frameworks and scalable architecture.",
                      "Smooth and responsive iOS applications designed for premium user experiences and reliability.",
                      "Cost-effective mobile solutions developed for both Android and iOS using shared technologies and optimized performance.",
                      "Custom mobile systems that automate workflows, improve communication, and simplify business operations.",
                      "Mobile commerce applications with secure payments, product management, notifications, and customer engagement features.",
                      "Seamless integrations with backend systems, payment gateways, Firebase, cloud services, CRMs, and third-party platforms.",
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-3xl border border-white/10 bg-white/[0.03] px-5 py-5"
                      >
                        <p className="text-sm text-secondary/80">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-white">
                    Features We Focus On
                  </h2>
                  <p className="text-base leading-8 text-secondary/80">
                    Our mobile applications are built with:
                  </p>
                  <ul className="list-inside list-disc space-y-2 text-secondary/80">
                    {[
                      "Responsive and intuitive UI/UX",
                      "Secure authentication systems",
                      "Fast performance optimization",
                      "Push notifications",
                      "Real-time synchronization",
                      "Scalable backend architecture",
                      "Cloud database integration",
                      "Offline and online functionality",
                    ].map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <p className="text-base leading-8 text-secondary/80">
                    Every application is designed to provide stability,
                    usability, and long-term scalability.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-white">
                    Technologies We Use
                  </h2>
                  <p className="text-base leading-8 text-secondary/80">
                    We work with modern mobile technologies including:
                  </p>
                  <div className="grid gap-3 sm:grid-cols-2 text-secondary/80">
                    {[
                      "Flutter",
                      "React Native",
                      "Firebase",
                      "Laravel APIs",
                      "Node.js",
                      "PostgreSQL",
                      "Cloud Services",
                      "REST API Integration",
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-3xl border border-white/10 bg-white/[0.03] px-4 py-3"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                  <p className="text-base leading-8 text-secondary/80">
                    Our development approach ensures flexibility,
                    maintainability, and smooth user experiences across devices.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-white">
                    Why Mobile Applications Matter
                  </h2>
                  <p className="text-base leading-8 text-secondary/80">
                    Mobile applications help businesses:
                  </p>
                  <ul className="list-inside list-disc space-y-2 text-secondary/80">
                    {[
                      "Increase customer engagement",
                      "Improve accessibility",
                      "Strengthen brand presence",
                      "Automate operational processes",
                      "Enhance customer communication",
                      "Drive sales and conversions",
                      "Deliver personalized digital experiences",
                    ].map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <p className="text-base leading-8 text-secondary/80">
                    In today’s mobile-first world, a well-designed application
                    creates stronger customer relationships and better business
                    opportunities.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-white">
                    Our Development Process
                  </h2>
                  <p className="text-base leading-8 text-secondary/80">
                    We follow a structured and transparent workflow:
                  </p>
                  <ul className="list-inside list-disc space-y-2 text-secondary/80">
                    {[
                      "Business Requirement Analysis",
                      "Strategy & Feature Planning",
                      "UI/UX Design",
                      "Application Development",
                      "Testing & Performance Optimization",
                      "Deployment & Post-Launch Support",
                    ].map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <p className="text-base leading-8 text-secondary/80">
                    This process ensures quality, security, and consistent
                    performance throughout the product lifecycle.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-white">
                    Industries We Support
                  </h2>
                  <ul className="grid gap-3 sm:grid-cols-2 text-secondary/80">
                    {[
                      "Startups",
                      "Ecommerce Businesses",
                      "Healthcare Platforms",
                      "Educational Applications",
                      "Logistics & Delivery Services",
                      "Business Automation Systems",
                      "Real Estate Platforms",
                      "Service-Based Businesses",
                    ].map((item) => (
                      <li
                        key={item}
                        className="rounded-3xl border border-white/10 bg-white/[0.03] px-4 py-3"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-10">
                  <h2 className="text-2xl font-semibold text-white">
                    Scalable Mobile Solutions for Modern Businesses
                  </h2>
                  <p className="mt-3 text-base leading-8 text-secondary/80">
                    At TechBuds, we create mobile application systems that
                    combine technology, usability, and business strategy to
                    deliver meaningful digital experiences.
                  </p>
                  <p className="text-base leading-8 text-secondary/80">
                    Whether you need a customer-facing mobile app, an internal
                    business platform, or a scalable enterprise application, we
                    develop solutions built for reliability, performance, and
                    future growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {svc.slug === "business-platforms" ? (
        <section className="border-t border-custom bg-[#081124] text-secondary">
          <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-20">
            <div className="max-w-4xl mx-auto space-y-16 rounded-[2rem] border border-white/10 bg-surface/70 p-10 shadow-[0_30px_90px_rgba(0,0,0,0.35)] ring-1 ring-white/10 backdrop-blur-xl">
              <div className="space-y-6">
                <p className="text-sm uppercase tracking-[0.28em] text-red-400">
                  Business Platform
                </p>
                <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
                  Scalable Business Platforms Built for Modern Operations
                </h1>
                <p className="text-base leading-8 text-secondary/80">
                  At TechBuds, we develop custom business platforms that help
                  organizations streamline workflows, manage operations
                  efficiently, and improve productivity through centralized
                  digital systems. Our platforms are designed to support growing
                  businesses with scalable architecture, secure infrastructure,
                  and user-friendly experiences.
                </p>
                <p className="text-base leading-8 text-secondary/80">
                  From internal management systems and CRM platforms to
                  enterprise dashboards and workflow automation solutions, we
                  build technology that simplifies business processes and
                  supports long-term growth.
                </p>
              </div>

              <div className="space-y-12">
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-white">
                    Custom Business Platform Development
                  </h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {[
                      "Manage leads, customers, communication, and sales processes through centralized and scalable CRM solutions.",
                      "Interactive dashboards with real-time reporting, analytics, user management, and operational visibility.",
                      "Automate repetitive tasks, approvals, notifications, and business processes to improve efficiency and reduce manual work.",
                      "Platforms for attendance tracking, task management, collaboration, scheduling, and workforce management.",
                      "Custom systems designed for inventory management, vendor coordination, logistics tracking, and operational workflows.",
                      "Secure role-based platforms with permission management for admins, staff, managers, clients, and business teams.",
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-3xl border border-white/10 bg-white/[0.03] px-5 py-5"
                      >
                        <p className="text-sm text-secondary/80">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-white">
                    Core Features We Focus On
                  </h2>
                  <p className="text-base leading-8 text-secondary/80">
                    Our business platforms are built with:
                  </p>
                  <ul className="list-inside list-disc space-y-2 text-secondary/80">
                    {[
                      "Scalable architecture",
                      "Secure authentication systems",
                      "Real-time data management",
                      "Role & permission control",
                      "Cloud integration",
                      "Performance optimization",
                      "Responsive UI/UX",
                      "Reporting & analytics systems",
                      "API & third-party integrations",
                    ].map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <p className="text-base leading-8 text-secondary/80">
                    Every platform is developed with long-term usability,
                    maintainability, and business scalability in mind.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-white">
                    Technologies We Use
                  </h2>
                  <p className="text-base leading-8 text-secondary/80">
                    We build business platforms using modern technologies
                    including:
                  </p>
                  <div className="grid gap-3 sm:grid-cols-2 text-secondary/80">
                    {[
                      "Next.js",
                      "React.js",
                      "Laravel",
                      "Node.js",
                      "PostgreSQL",
                      "Firebase",
                      "REST APIs",
                      "Tailwind CSS",
                      "Cloud Infrastructure",
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-3xl border border-white/10 bg-white/[0.03] px-4 py-3"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                  <p className="text-base leading-8 text-secondary/80">
                    Our technology stack ensures flexibility, security, and
                    high-performance digital operations.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-white">
                    Why Businesses Need Modern Platforms
                  </h2>
                  <p className="text-base leading-8 text-secondary/80">
                    Digital business platforms help organizations:
                  </p>
                  <ul className="list-inside list-disc space-y-2 text-secondary/80">
                    {[
                      "Improve operational efficiency",
                      "Centralize business processes",
                      "Reduce manual errors",
                      "Improve team collaboration",
                      "Gain real-time business insights",
                      "Scale operations effectively",
                      "Enhance customer management",
                      "Support data-driven decision making",
                    ].map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <p className="text-base leading-8 text-secondary/80">
                    Modern platforms create stronger operational foundations for
                    businesses in a competitive digital environment.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-white">
                    Our Development Process
                  </h2>
                  <p className="text-base leading-8 text-secondary/80">
                    We follow a structured workflow to deliver reliable business
                    solutions:
                  </p>
                  <ul className="list-inside list-disc space-y-2 text-secondary/80">
                    {[
                      "Requirement Discovery",
                      "Workflow Planning",
                      "UI/UX Design",
                      "Platform Development",
                      "Testing & Security Validation",
                      "Deployment & Ongoing Support",
                    ].map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <p className="text-base leading-8 text-secondary/80">
                    This approach helps ensure scalability, stability, and
                    seamless user experiences.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-white">
                    Industries We Support
                  </h2>
                  <ul className="grid gap-3 sm:grid-cols-2 text-secondary/80">
                    {[
                      "Startups",
                      "Healthcare Organizations",
                      "Educational Institutions",
                      "Ecommerce Businesses",
                      "Logistics Companies",
                      "Service-Based Businesses",
                      "Corporate Enterprises",
                      "Real Estate Platforms",
                    ].map((item) => (
                      <li
                        key={item}
                        className="rounded-3xl border border-white/10 bg-white/[0.03] px-4 py-3"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-10">
                  <h2 className="text-2xl font-semibold text-white">
                    Future-Ready Business Solutions
                  </h2>
                  <p className="mt-3 text-base leading-8 text-secondary/80">
                    At TechBuds, we create business platforms that combine
                    functionality, performance, and modern technology to help
                    organizations operate more efficiently and scale with
                    confidence.
                  </p>
                  <p className="text-base leading-8 text-secondary/80">
                    Whether you need a custom management system, analytics
                    dashboard, workflow automation platform, or enterprise
                    portal, we build secure and scalable solutions designed to
                    support business growth and digital transformation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {svc.slug === "business-platforms" ? (
        <FAQSection
          title="Business Platform – Frequently Asked Questions"
          list={BUSINESS_PLATFORMS_FAQ}
        />
      ) : null}

      {svc.slug === "seo-growth" ? (
        <section className="border-t border-custom bg-[#081124] text-secondary">
          <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-20">
            <div className="max-w-4xl mx-auto space-y-16 rounded-[2rem] border border-white/10 bg-surface/70 p-10 shadow-[0_30px_90px_rgba(0,0,0,0.35)] ring-1 ring-white/10 backdrop-blur-xl">
              <div className="space-y-6">
                <p className="text-sm uppercase tracking-[0.28em] text-red-400">
                  SEO and Growth
                </p>
                <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
                  Search-Optimized Growth Strategies for Sustainable Visibility
                </h1>
                <p className="text-base leading-8 text-secondary/80">
                  TechBuds helps brands increase organic search visibility,
                  improve rankings, and convert more visitors with a strategic
                  SEO and growth framework tailored to your business goals.
                </p>
                <p className="text-base leading-8 text-secondary/80">
                  Our SEO services combine technical optimization, content
                  relevance, and measurable growth planning so your website
                  performs better in search engines and attracts qualified
                  traffic.
                </p>
              </div>

              <div className="space-y-12">
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-white">
                    What We Deliver
                  </h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {[
                      "Full SEO audits that identify technical, content, and user experience opportunities.",
                      "Keyword research and search intent mapping to target high-value traffic.",
                      "Content optimization for pages, blog posts, and category landing pages.",
                      "On-page SEO improvements including metadata, headings, schema, and internal linking.",
                      "Performance enhancements for site speed, mobile usability, and crawl efficiency.",
                      "Ongoing growth recommendations driven by analytics, rankings, and conversion metrics.",
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-3xl border border-white/10 bg-white/[0.03] px-5 py-5"
                      >
                        <p className="text-sm text-secondary/80">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-white">
                    Core SEO Focus Areas
                  </h2>
                  <p className="text-base leading-8 text-secondary/80">
                    We optimize every element of your website to improve search
                    engine performance and user engagement.
                  </p>
                  <ul className="list-inside list-disc space-y-2 text-secondary/80">
                    {[
                      "Technical SEO for fast, crawlable, and index-ready pages.",
                      "Content strategy aligned with keyword demand and customer intent.",
                      "Mobile-first optimization for modern search behavior.",
                      "Structured data for better visibility in search results.",
                      "Conversion-focused user journeys that turn visits into leads.",
                      "Local search optimization for location-based discovery.",
                    ].map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <p className="text-base leading-8 text-secondary/80">
                    Our SEO initiatives are designed to improve both rankings
                    and business outcomes, not just traffic volume.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-white">
                    Growth Through Data
                  </h2>
                  <p className="text-base leading-8 text-secondary/80">
                    We track performance with real metrics so your SEO strategy
                    continually improves over time.
                  </p>
                  <div className="grid gap-3 sm:grid-cols-2 text-secondary/80">
                    {[
                      "Organic traffic growth",
                      "Keyword ranking improvements",
                      "Click-through rate increases",
                      "Page experience and speed gains",
                      "Lead generation from search referrals",
                      "Content engagement and conversion insights",
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-3xl border border-white/10 bg-white/[0.03] px-4 py-3"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                  <p className="text-base leading-8 text-secondary/80">
                    We use analytics to turn visitor behavior into a growth
                    roadmap that increases qualified traffic and strengthens
                    brand reach.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-white">
                    SEO Services That Deliver Results
                  </h2>
                  <ul className="list-inside list-disc space-y-2 text-secondary/80">
                    {[
                      "Site audits with prioritized SEO fixes.",
                      "Keyword targeting for your products, services, and brand.",
                      "Content planning for search-driven lead generation.",
                      "Technical audits for faster page load and better indexability.",
                      "Backlink analysis and authority-building recommendations.",
                      "Regular reporting with actionable next steps.",
                    ].map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <p className="text-base leading-8 text-secondary/80">
                    Every SEO engagement is built around measurable growth,
                    clearer search visibility, and stronger digital performance.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-white">
                    Industries We Support
                  </h2>
                  <ul className="grid gap-3 sm:grid-cols-2 text-secondary/80">
                    {[
                      "B2B service companies",
                      "Ecommerce brands",
                      "Software businesses",
                      "Consultancies",
                      "Local service providers",
                      "Professional service firms",
                      "Startups seeking organic growth",
                      "Digital publishers and agencies",
                    ].map((item) => (
                      <li
                        key={item}
                        className="rounded-3xl border border-white/10 bg-white/[0.03] px-4 py-3"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-10">
                  <h2 className="text-2xl font-semibold text-white">
                    SEO Strategy for Long-Term Growth
                  </h2>
                  <p className="mt-3 text-base leading-8 text-secondary/80">
                    With TechBuds, your SEO program is built for sustainable
                    organic performance, stronger search authority, and
                    measurable business impact.
                  </p>
                  <p className="text-base leading-8 text-secondary/80">
                    We focus on practical SEO tactics that improve visibility,
                    increase qualified traffic, and help your website become a
                    dependable source of leads.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {svc.slug === "seo-growth" ? (
        <FAQSection
          title="SEO and Growth – Frequently Asked Questions"
          list={SEO_GROWTH_FAQ}
        />
      ) : null}

      {svc.slug === "seo-growth" ? (
        <FAQSection
          title="SEO and Growth – Frequently Asked Questions"
          list={SEO_GROWTH_FAQ}
        />
      ) : null}

      {svc.slug === "ecommerce-digital" ? (
        <FAQSection
          title="Ecommerce & Digital Solutions – Frequently Asked Questions"
          list={ECOMMERCE_DIGITAL_FAQ}
        />
      ) : null}

      {svc.slug === "ecommerce-digital" ? (
        <section className="border-t border-custom bg-[#081124] text-secondary">
          <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-20">
            <div className="max-w-4xl space-y-16 rounded-[2rem] border border-white/10 bg-surface/70 p-10 shadow-[0_30px_90px_rgba(0,0,0,0.35)] ring-1 ring-white/10 backdrop-blur-xl">
              <div className="space-y-6">
                <p className="text-sm uppercase tracking-[0.28em] text-red-400">
                  Ecommerce & Digital Solutions
                </p>
                <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
                  Modern Ecommerce Solutions Built for Digital Growth
                </h1>
                <p className="text-base leading-8 text-secondary/80">
                  At TechBuds, we create scalable ecommerce and digital commerce
                  solutions designed to help businesses deliver seamless online
                  shopping experiences, manage operations efficiently, and
                  increase digital revenue.
                </p>
                <p className="text-base leading-8 text-secondary/80">
                  Our platforms combine modern design, secure infrastructure,
                  and conversion-focused development to support long-term
                  business growth.
                </p>
                <p className="text-base leading-8 text-secondary/80">
                  From custom online stores and multi-vendor marketplaces to
                  digital product platforms and integrated commerce systems, we
                  build solutions tailored to modern customer expectations and
                  evolving digital business models.
                </p>
              </div>

              <div className="space-y-12">
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-white">
                    Ecommerce Development Services
                  </h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {[
                      "Custom Ecommerce Websites — fully customized ecommerce platforms designed around your products, business workflows, and customer experience goals.",
                      "Online Store Development — responsive and high-performance online stores optimized for usability, speed, and conversion-focused shopping experiences.",
                      "Multi-Vendor Marketplace Solutions — scalable marketplace systems with vendor onboarding, product management, commission handling, and order tracking functionality.",
                      "Digital Product Platforms — platforms for selling digital products, subscriptions, memberships, downloadable content, and online services.",
                      "Ecommerce Management Systems — centralized dashboards for managing products, orders, customers, inventory, analytics, and operational workflows.",
                      "Payment Gateway Integration — secure payment processing with modern checkout experiences and seamless transaction management.",
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-3xl border border-white/10 bg-white/[0.03] px-5 py-5"
                      >
                        <p className="text-sm text-secondary/80">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-white">
                    Features We Focus On
                  </h2>
                  <p className="text-base leading-8 text-secondary/80">
                    Our ecommerce platforms are built with:
                  </p>
                  <ul className="list-inside list-disc space-y-2 text-secondary/80">
                    {[
                      "Responsive mobile-first design",
                      "Secure authentication systems",
                      "Fast loading performance",
                      "Scalable architecture",
                      "SEO-friendly product structure",
                      "Inventory & order management",
                      "Payment gateway integration",
                      "Customer account systems",
                      "Analytics & reporting tools",
                      "API & third-party integrations",
                    ].map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <p className="text-base leading-8 text-secondary/80">
                    Every platform is optimized for performance, scalability,
                    and user experience.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-white">
                    Technologies We Use
                  </h2>
                  <p className="text-base leading-8 text-secondary/80">
                    We build ecommerce and digital platforms using:
                  </p>
                  <div className="grid gap-3 sm:grid-cols-2 text-secondary/80">
                    {[
                      "Next.js",
                      "React.js",
                      "Laravel",
                      "Firebase",
                      "PostgreSQL",
                      "Stripe",
                      "Razorpay",
                      "REST APIs",
                      "Cloud Infrastructure",
                      "Tailwind CSS",
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-3xl border border-white/10 bg-white/[0.03] px-4 py-3"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                  <p className="text-base leading-8 text-secondary/80">
                    Our modern technology stack helps ensure stability,
                    scalability, and long-term maintainability.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-white">
                    Why Ecommerce Solutions Matter
                  </h2>
                  <p className="text-base leading-8 text-secondary/80">
                    Digital commerce continues to shape how customers interact
                    with businesses.
                  </p>
                  <ul className="list-inside list-disc space-y-2 text-secondary/80">
                    {[
                      "Increase online sales",
                      "Improve customer engagement",
                      "Expand digital reach",
                      "Simplify operations",
                      "Create scalable revenue channels",
                      "Improve customer retention",
                      "Deliver seamless shopping experiences",
                      "Strengthen brand presence",
                    ].map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <p className="text-base leading-8 text-secondary/80">
                    A professionally developed ecommerce system creates a strong
                    foundation for sustainable digital growth.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-white">
                    Our Development Process
                  </h2>
                  <p className="text-base leading-8 text-secondary/80">
                    We follow a structured workflow to deliver reliable
                    ecommerce systems:
                  </p>
                  <ul className="list-inside list-disc space-y-2 text-secondary/80">
                    {[
                      "Business Requirement Analysis",
                      "Store Strategy & Planning",
                      "UI/UX Design",
                      "Ecommerce Development",
                      "Testing & Optimization",
                      "Deployment & Post-Launch Support",
                    ].map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <p className="text-base leading-8 text-secondary/80">
                    This process ensures performance, usability, and long-term
                    operational efficiency.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-white">
                    Industries We Support
                  </h2>
                  <ul className="grid gap-3 sm:grid-cols-2 text-secondary/80">
                    {[
                      "Retail Businesses",
                      "Ecommerce Brands",
                      "Startups",
                      "Subscription Businesses",
                      "Service-Based Companies",
                      "Educational Platforms",
                      "Healthcare Businesses",
                      "Marketplace Businesses",
                    ].map((item) => (
                      <li
                        key={item}
                        className="rounded-3xl border border-white/10 bg-white/[0.03] px-4 py-3"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-10">
                  <h2 className="text-2xl font-semibold text-white">
                    Scalable Commerce Solutions for the Digital Era
                  </h2>
                  <p className="mt-3 text-base leading-8 text-secondary/80">
                    At TechBuds, we build ecommerce and digital platforms that
                    combine technology, performance, and user-focused design to
                    support modern business growth.
                  </p>
                  <p className="text-base leading-8 text-secondary/80">
                    Whether you need an online store, marketplace platform,
                    subscription system, or digital commerce solution, we
                    develop scalable experiences designed to improve
                    conversions, streamline operations, and strengthen your
                    digital presence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}
      <ContactModalCTA />
    </div>
  );
}
