import type { PageBannerContent } from "@/lib/page-banners";

type PageHeroBannerProps = PageBannerContent;

export default function PageHeroBanner({
  image,
  eyebrow,
  title,
  titleAccent,
  description,
}: PageHeroBannerProps) {
  return (
    <section className="relative overflow-hidden border-b border-custom">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#081124]/92 via-[#081124]/78 to-[#081124]/45" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#081124]/50 via-transparent to-[#081124]/20" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-accent-secondary">
            {eyebrow}
          </p>
          <h1 className="text-3xl font-bold leading-tight text-primary md:text-5xl">
            {title}{" "}
            <span className="text-accent-secondary">{titleAccent}</span>
          </h1>
          <div className="mx-auto mt-3 h-0.5 w-16 rounded-full bg-accent-secondary" />
          <p className="mt-5 text-base leading-relaxed text-secondary/85 md:text-lg">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
