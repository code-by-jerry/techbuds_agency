import type { PageBannerContent } from "@/lib/page-banners";

type PageHeroBannerProps = PageBannerContent & {
  theme?: "dark" | "light";
};

export default function PageHeroBanner({
  image,
  eyebrow,
  title,
  titleAccent,
  description,
  theme = "dark",
}: PageHeroBannerProps) {
  const isLight = theme === "light";

  return (
    <section
      className={`relative overflow-hidden border-b ${
        isLight ? "border-[#e2e8f0] bg-[#f8fafc]" : "border-custom"
      }`}
    >
      <div
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat ${
          isLight ? "opacity-25" : ""
        }`}
        style={{ backgroundImage: `url(${image})` }}
        aria-hidden
      />
      {isLight ? (
        <>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/90 via-[#f8fafc]/95 to-[#f8fafc]" />
          <div className="pointer-events-none absolute -top-24 right-0 h-64 w-64 rounded-full bg-accent-secondary/[0.06] blur-3xl" />
        </>
      ) : (
        <>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#081124]/92 via-[#081124]/78 to-[#081124]/45" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#081124]/50 via-transparent to-[#081124]/20" />
        </>
      )}

      <div
        className={`relative mx-auto max-w-7xl px-6 md:px-12 ${
          isLight ? "py-14 md:py-20" : "py-16 md:py-24"
        }`}
      >
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-accent-secondary">
            {eyebrow}
          </p>
          <h1
            className={`text-3xl font-bold leading-tight md:text-5xl ${
              isLight ? "text-[#1e293b]" : "text-primary"
            }`}
          >
            {title}{" "}
            <span className="text-accent-secondary">{titleAccent}</span>
          </h1>
          <div className="mx-auto mt-3 h-0.5 w-16 rounded-full bg-accent-secondary" />
          <p
            className={`mt-5 text-base leading-relaxed md:text-lg ${
              isLight ? "text-[#64748b]" : "text-secondary/85"
            }`}
          >
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
