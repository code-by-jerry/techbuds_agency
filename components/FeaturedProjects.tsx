"use client";

import { useEffect, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { HOME_FEATURED_PROJECTS } from "@/lib/portfolio";

const SLIDE_DURATION_MS = 6000;
const PREVIEW_VIEWPORT =
  "h-[380px] sm:h-[420px] lg:h-[460px]";

const PREVIEW_IMAGE_CLASS =
  "h-full w-full object-contain object-center";

export default function FeaturedProjects() {
  const [active, setActive] = useState(0);
  const [slideKey, setSlideKey] = useState(0);
  const project = HOME_FEATURED_PROJECTS[active];

  const selectProject = (index: number) => {
    const next =
      (index + HOME_FEATURED_PROJECTS.length) % HOME_FEATURED_PROJECTS.length;
    setActive(next);
    setSlideKey((key) => key + 1);
  };

  useEffect(() => {
    const timer = window.setInterval(() => {
      selectProject(active + 1);
    }, SLIDE_DURATION_MS);
    return () => window.clearInterval(timer);
  }, [active]);

  return (
    <section className="relative overflow-hidden border-t border-custom bg-[#081124]">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[600px] -translate-x-1/2 rounded-full bg-accent-secondary/[0.06] blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-accent-secondary/[0.04] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24">
        <div className="mb-10 flex flex-col gap-6 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-accent-secondary">
              Our Work
            </p>
            <h2 className="text-3xl font-bold text-primary md:text-5xl">
              Featured <span className="text-accent-secondary">Projects</span>
            </h2>
            <div className="mt-3 h-0.5 w-16 rounded-full bg-accent-secondary" />
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-secondary/80 md:text-base">
              Real products we&apos;ve designed and built — from q-commerce and
              healthcare ecommerce to AI-powered mobile apps.
            </p>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-semibold text-primary transition-all hover:border-accent-secondary/40 hover:bg-accent-secondary/10"
          >
            View full portfolio
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.01] shadow-2xl shadow-black/40">
          <div className="grid min-h-[520px] lg:grid-cols-[1.2fr_0.8fr]">
            <div className="featured-preview-grid relative flex flex-col bg-[#0a1020] p-5 md:p-8">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="rounded-full border border-accent-secondary/30 bg-accent-secondary/10 px-3 py-1 text-[11px] font-bold tracking-widest text-accent-secondary">
                    {String(active + 1).padStart(2, "0")}
                  </span>
                  <span className="text-xs text-secondary/50">
                    / {String(HOME_FEATURED_PROJECTS.length).padStart(2, "0")}
                  </span>
                </div>
                <p className="text-xs font-medium text-secondary/60">
                  Product preview
                </p>
              </div>

              <div className="relative mx-auto w-full max-w-xl overflow-hidden rounded-2xl border border-white/10 bg-[#050b18] shadow-[0_24px_60px_rgba(0,0,0,0.45)]">
                <div className="flex items-center gap-2 border-b border-white/10 bg-[#0d1528] px-4 py-2.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-accent-secondary/70" />
                  <div className="ml-2 h-6 flex-1 rounded-md bg-white/[0.04]" />
                </div>

                <div className={`relative ${PREVIEW_VIEWPORT} overflow-hidden bg-[#050b18]`}>
                  {HOME_FEATURED_PROJECTS.map((item, index) => (
                    <div
                      key={item.slug}
                      className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ease-out ${
                        index === active
                          ? "z-10 opacity-100"
                          : "z-0 opacity-0"
                      }`}
                    >
                      <img
                        src={item.previewImage}
                        alt={`${item.name} preview`}
                        className={PREVIEW_IMAGE_CLASS}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => selectProject(active - 1)}
                    aria-label="Previous project"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:border-accent-secondary/40 hover:bg-accent-secondary/10"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    type="button"
                    onClick={() => selectProject(active + 1)}
                    aria-label="Next project"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:border-accent-secondary/40 hover:bg-accent-secondary/10"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>

                <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/10">
                  <span
                    key={slideKey}
                    className="featured-progress-bar block h-full rounded-full bg-accent-secondary"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between border-t border-white/10 p-6 md:p-8 lg:border-l lg:border-t-0 lg:p-10">
              <div key={slideKey} className="featured-content-enter">
                <p className="inline-flex rounded-full border border-accent-secondary/25 bg-accent-secondary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-secondary">
                  {project.category}
                </p>
                <h3 className="mt-4 text-2xl font-bold text-primary md:text-3xl lg:text-[2rem]">
                  {project.name}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-secondary/85 md:text-[15px]">
                  {project.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {project.highlights.slice(0, 3).map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-secondary/80"
                    >
                      <span className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-secondary/15 text-[10px] font-bold text-accent-secondary">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-medium text-secondary/75"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={`/portfolio#${project.slug}`}
                  className="inline-flex items-center gap-2 rounded-full bg-accent-secondary px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                >
                  View case study
                  <ExternalLink size={15} />
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:border-accent-secondary/40 hover:text-accent-secondary"
                >
                  All projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
