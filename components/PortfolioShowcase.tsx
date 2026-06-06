import { PORTFOLIO_PROJECTS } from "@/lib/portfolio";

export default function PortfolioShowcase() {
  return (
    <div className="space-y-20 md:space-y-28">
      {PORTFOLIO_PROJECTS.map((project, index) => (
        <article
          key={project.slug}
          id={project.slug}
          className="scroll-mt-28 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] shadow-xl shadow-black/20"
        >
          <div
            className={`grid gap-0 lg:grid-cols-2 ${
              index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div className="flex flex-col justify-center p-6 md:p-10 lg:p-12">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent-secondary">
                {project.category}
              </p>
              <h2 className="mt-3 text-3xl font-bold text-primary md:text-4xl">
                {project.name}
              </h2>
              <div className="mt-3 h-1 w-14 rounded-full bg-accent-secondary" />
              <p className="mt-5 text-sm leading-relaxed text-secondary/85 md:text-base">
                {project.description}
              </p>

              <ul className="mt-6 space-y-2.5">
                {project.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-secondary/80"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-secondary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-[#0b1226] px-3 py-1 text-[11px] font-medium text-secondary/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-t border-white/10 bg-[#0b1226] p-4 md:p-6 lg:border-l lg:border-t-0">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary/60">
                  Screenshots
                </p>
                <span className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-secondary/60">
                  {project.images.length} screens
                </span>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {project.images.map((image, imageIndex) => (
                  <div
                    key={`${project.slug}-${imageIndex}`}
                    className="group overflow-hidden rounded-xl border border-white/10 bg-[#081124] transition-all duration-300 hover:border-accent-secondary/30 hover:shadow-lg hover:shadow-accent-secondary/5"
                  >
                    <img
                      src={image}
                      alt={`${project.name} screen ${imageIndex + 1}`}
                      className="h-auto w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
