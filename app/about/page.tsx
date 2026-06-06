import AboutSection from "@/components/AboutSection";
import ContactModalCTA from "@/components/ContactModalCTA";
import FAQSection from "@/components/FAQSection";
import { ABOUT_APPROACH, ABOUT_VALUES } from "@/lib/about";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about TechBuds — a digital solutions studio building websites, apps, brands, and business platforms for growing companies across India.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About TechBuds",
    description:
      "Strategy, design, and development partner for startups and growing businesses.",
    url: "/about",
    images: [
      {
        url: "https://ik.imagekit.io/codebyjerry/techbuds/about-techbuds.png",
        width: 1200,
        height: 630,
        alt: "About TechBuds",
      },
    ],
  },
};

const aboutFaq = [
  {
    q: "What does TechBuds do?",
    a: "We design and build websites, mobile apps, brand identities, ecommerce platforms, and custom business software for startups and growing companies.",
  },
  {
    q: "Who do you typically work with?",
    a: "We work with founders, marketing teams, and business owners who need a reliable digital partner for product design, development, and launch.",
  },
  {
    q: "Where is TechBuds based?",
    a: "TechBuds works with clients across India, including Hyderabad and Bangalore, through structured remote collaboration and online project communication.",
  },
  {
    q: "What makes TechBuds different?",
    a: "We combine business-focused strategy, modern UI/UX, and scalable engineering — staying involved from planning through post-launch support.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-brand">
      <section className="border-b border-custom bg-[#081124]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-accent-secondary">
              About Us
            </p>
            <h1 className="text-3xl font-bold text-primary md:text-5xl">
              Building digital products with{" "}
              <span className="text-accent-secondary">clarity and craft.</span>
            </h1>
            <div className="mx-auto mt-3 h-0.5 w-16 rounded-full bg-accent-secondary" />
            <p className="mt-5 text-base leading-relaxed text-secondary/85 md:text-lg">
              TechBuds helps businesses turn ideas into scalable digital
              experiences — from branding and product design to development,
              launch, and growth.
            </p>
          </div>
        </div>
      </section>

      <AboutSection theme="light" />

      <section className="border-y border-[#e2e8f0] bg-[#f8fafc]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-20">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-accent-secondary">
              What We Stand For
            </p>
            <h2 className="text-2xl font-bold text-[#1e293b] md:text-4xl">
              Values that shape{" "}
              <span className="text-accent-secondary">every project.</span>
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ABOUT_VALUES.map((value) => (
              <article
                key={value.title}
                className="rounded-2xl bg-white p-5 shadow-[0_8px_30px_rgba(15,23,42,0.06)] transition-transform duration-300 hover:-translate-y-0.5"
              >
                <h3 className="text-sm font-bold text-[#1e293b] md:text-base">
                  {value.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#64748b] md:text-sm">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-custom bg-[#081124]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-accent-secondary">
                Our Approach
              </p>
              <h2 className="text-2xl font-bold text-primary md:text-4xl">
                End-to-end delivery,{" "}
                <span className="text-accent-secondary">one focused team.</span>
              </h2>
              <div className="mt-3 h-1 w-16 rounded-full bg-accent-secondary" />
              <p className="mt-5 text-sm leading-relaxed text-secondary/85 md:text-base">
                We keep projects structured and transparent — so you always know
                what stage we are in, what comes next, and how each decision
                supports your business goals.
              </p>
            </div>

            <ul className="space-y-3">
              {ABOUT_APPROACH.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl bg-white/[0.05] px-4 py-3.5 backdrop-blur-sm"
                >
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-secondary/15 text-[10px] font-bold text-accent-secondary">
                    ✓
                  </span>
                  <span className="text-sm text-secondary/85">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <FAQSection title="About TechBuds" list={aboutFaq} />

      <ContactModalCTA />
    </div>
  );
}
