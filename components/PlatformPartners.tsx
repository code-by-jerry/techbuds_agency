import { PARTNER_CATEGORIES, PLATFORM_PARTNERS } from "@/lib/partners";

export default function PlatformPartners() {
  return (
    <section className="border-y border-[#e2e8f0] bg-[#f8fafc]">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            {PLATFORM_PARTNERS.map((partner) => (
              <div
                key={partner.name}
                className="group flex min-h-[76px] items-center justify-center rounded-xl border border-[#e2e8f0] bg-white px-3 py-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-secondary/25 hover:shadow-md sm:min-h-[84px]"
              >
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className={`w-auto object-contain transition-opacity duration-300 group-hover:opacity-100 ${
                    partner.compact
                      ? "max-h-9 sm:max-h-10"
                      : "max-h-7 sm:max-h-8"
                  }`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          <div>
            <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-accent-secondary/25 bg-accent-secondary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent-secondary">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-secondary" />
              Platform Partners
            </div>

            <h2 className="text-3xl font-bold leading-tight text-[#1e293b] md:text-4xl lg:text-[2.6rem]">
              Built on trusted{" "}
              <span className="text-accent-secondary">platform ecosystems.</span>
            </h2>

            <div className="mt-3 h-1 w-16 rounded-full bg-accent-secondary" />

            <p className="mt-6 text-base leading-relaxed text-[#475569] md:text-lg">
              We integrate industry-leading platforms into the products we
              deliver — from cloud hosting and payments to AI, analytics, and
              customer communication tools.
            </p>

            <p className="mt-4 text-base leading-relaxed text-[#475569]">
              This lets our clients launch faster, scale securely, and connect
              the right services without rebuilding everything from scratch.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {PARTNER_CATEGORIES.map((category) => (
                <div
                  key={category.title}
                  className="rounded-xl border border-[#e2e8f0] bg-white p-4 shadow-sm"
                >
                  <p className="text-sm font-bold text-[#1e293b]">
                    {category.title}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-[#64748b]">
                    {category.items.join(" · ")}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm font-medium text-[#64748b]">
              {PLATFORM_PARTNERS.length}+ platforms used across our client
              projects and product builds.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
