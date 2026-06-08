import Link from "next/link";
import { Lightbulb, Target, Users } from "lucide-react";
import {
  ABOUT_HIGHLIGHT_STATS,
  ABOUT_HOME_CONTENT,
  ABOUT_PAGE_CONTENT,
  type AboutSectionContent,
} from "@/lib/about";
import { ABOUT_EXPERTISE_BADGES } from "@/lib/trust-badges";

const expertiseIcons = {
  expert: Users,
  insights: Lightbulb,
  strategy: Target,
} as const;

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
  variant?: "home" | "page";
  id?: string;
};

const ABOUT_VARIANTS: Record<"home" | "page", AboutSectionContent> = {
  home: ABOUT_HOME_CONTENT,
  page: ABOUT_PAGE_CONTENT,
};

const variantOverrides: Partial<
  Record<"home" | "page", Partial<(typeof themeStyles)["light"]>>
> = {
  page: {
    section: "border-y border-[#e2e8f0] bg-[#FEFEFE]",
    image: "",
  },
};

export default function AboutSection({
  theme = "light",
  variant = "home",
  id,
}: AboutSectionProps) {
  const baseStyles = themeStyles[theme];
  const overrides = variant === "page" ? variantOverrides.page : undefined;
  const styles = { ...baseStyles, ...overrides };
  const content = ABOUT_VARIANTS[variant];
  const imageClassName = [
    "h-auto max-h-full w-full rounded-2xl object-contain object-center",
    variant === "home" ? `border ${styles.image}` : styles.image,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section id={id} className={styles.section}>
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <div className="flex flex-col justify-center">
            <div
              className={`mb-5 inline-flex w-fit items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] ${styles.badge}`}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent-secondary" />
              {content.badge}
            </div>

            <h2
              className={`text-3xl font-bold leading-tight md:text-4xl lg:text-5xl ${styles.heading}`}
            >
              {content.heading}{" "}
              <span className={styles.accent}>{content.headingAccent}</span>
            </h2>

            <div className="mt-3 h-1 w-16 rounded-full bg-accent-secondary" />

            {content.paragraphs.map((paragraph, index) => (
              <p
                key={paragraph}
                className={`${index === 0 ? "mt-6" : "mt-4"} text-base leading-relaxed md:text-lg ${styles.body}`}
              >
                {paragraph}
              </p>
            ))}

            {variant === "home" ? (
              <div
                className={`mt-8 grid grid-cols-2 gap-x-6 gap-y-5 border-t pt-8 sm:gap-x-10 ${styles.divider}`}
              >
                {ABOUT_HIGHLIGHT_STATS.map((stat) => (
                  <div key={stat.label}>
                    <p
                      className={`text-2xl font-bold md:text-3xl ${styles.accent}`}
                    >
                      {stat.value}
                    </p>
                    <p className={`mt-1 text-sm ${styles.muted}`}>
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div
                className={`mt-8 grid w-full grid-cols-3 border-t pt-8 ${styles.divider}`}
              >
                {ABOUT_EXPERTISE_BADGES.map((badge) => {
                  const Icon = expertiseIcons[badge.icon];

                  return (
                    <div
                      key={badge.label}
                      className="flex flex-col items-center gap-1.5 text-center sm:flex-row sm:justify-center sm:gap-2.5 sm:text-left"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-secondary/10 text-accent-secondary">
                        <Icon size={16} strokeWidth={2} aria-hidden />
                      </span>
                      <span
                        className={`text-xs font-semibold md:text-sm ${
                          theme === "light" ? "text-[#334155]" : "text-primary"
                        }`}
                      >
                        {badge.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <div className="relative flex min-h-[280px] items-center justify-center">
            {variant === "home" ? (
              <Link
                href="/about"
                className="group block w-full transition-transform duration-300 hover:scale-[1.01]"
                aria-label="Learn more about TechBuds"
              >
                <img
                  src={content.image}
                  alt={content.imageAlt}
                  className={`${imageClassName} transition-shadow duration-300 group-hover:shadow-md`}
                />
              </Link>
            ) : (
              <img
                src={content.image}
                alt={content.imageAlt}
                className={imageClassName}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
