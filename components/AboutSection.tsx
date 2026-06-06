import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ABOUT_IMAGE, ABOUT_STATS } from "@/lib/about";

type AboutTheme = "light" | "dark";

const themeStyles: Record<
  AboutTheme,
  {
    section: string;
    badge: string;
    heading: string;
    accent: string;
    body: string;
    muted: string;
    divider: string;
    image: string;
    cta: string;
  }
> = {
  light: {
    section: "border-y border-[#e2e8f0] bg-[#f8fafc]",
    badge:
      "border-accent-secondary/25 bg-accent-secondary/10 text-accent-secondary",
    heading: "text-[#1e293b]",
    accent: "text-accent-secondary",
    body: "text-[#475569]",
    muted: "text-[#64748b]",
    divider: "border-[#e2e8f0]",
    image: "border-[#e2e8f0] bg-white shadow-sm",
    cta: "border-[#e2e8f0] bg-white text-[#1e293b] hover:border-accent-secondary/40 hover:text-accent-secondary",
  },
  dark: {
    section: "border-y border-custom bg-[#081124]",
    badge:
      "border-accent-secondary/30 bg-accent-secondary/10 text-accent-secondary",
    heading: "text-primary",
    accent: "text-accent-secondary",
    body: "text-secondary/85",
    muted: "text-secondary/70",
    divider: "border-white/10",
    image: "border-white/10 bg-white/[0.04] shadow-xl shadow-black/20",
    cta: "border-white/15 bg-white/[0.04] text-primary hover:border-accent-secondary/40 hover:bg-accent-secondary/10 hover:text-accent-secondary",
  },
};

type AboutSectionProps = {
  theme?: AboutTheme;
  id?: string;
  showLink?: boolean;
};

export default function AboutSection({
  theme = "light",
  id,
  showLink = false,
}: AboutSectionProps) {
  const styles = themeStyles[theme];

  return (
    <section id={id} className={styles.section}>
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <div className="flex flex-col justify-center">
            <div
              className={`mb-5 inline-flex w-fit items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] ${styles.badge}`}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent-secondary" />
              About TechBuds
            </div>

            <h2
              className={`text-3xl font-bold leading-tight md:text-4xl lg:text-5xl ${styles.heading}`}
            >
              We build digital products that help businesses{" "}
              <span className={styles.accent}>grow with confidence.</span>
            </h2>

            <div className="mt-3 h-1 w-16 rounded-full bg-accent-secondary" />

            <p className={`mt-6 text-base leading-relaxed md:text-lg ${styles.body}`}>
              TechBuds is a digital solutions studio working with startups and
              growing businesses across India. We partner with teams that need
              more than a good-looking website — they need reliable products,
              clear branding, and technology that supports real business goals.
            </p>

            <p className={`mt-4 text-base leading-relaxed md:text-lg ${styles.body}`}>
              From strategy and design to development and launch, we stay
              involved at every stage. Our focus is simple: deliver work that is
              practical, scalable, and built to perform long after go-live.
            </p>

            <div
              className={`mt-8 grid grid-cols-3 gap-4 border-t pt-8 ${styles.divider}`}
            >
              {ABOUT_STATS.map((stat) => (
                <div key={stat.label}>
                  <p className={`text-2xl font-bold md:text-3xl ${styles.accent}`}>
                    {stat.value}
                  </p>
                  <p className={`mt-1 text-xs font-medium ${styles.muted}`}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {showLink ? (
              <Link
                href="/about"
                className={`mt-8 inline-flex w-fit items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors ${styles.cta}`}
              >
                Learn more about us
                <ArrowRight size={16} />
              </Link>
            ) : null}
          </div>

          <div className="relative flex min-h-[280px] items-center justify-center">
            <img
              src={ABOUT_IMAGE}
              alt="TechBuds team collaborating on digital projects"
              className={`h-auto max-h-full w-full rounded-2xl border object-contain object-center ${styles.image}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
