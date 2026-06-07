"use client";

import { useCallback, useEffect, useState } from "react";
import {
  Car,
  ChevronLeft,
  ChevronRight,
  HeartPulse,
  ShoppingBag,
  Smartphone,
  Sparkles,
  X,
  type LucideIcon,
} from "lucide-react";
import { PORTFOLIO_PROJECTS, type PortfolioProject } from "@/lib/portfolio";

const ICON_MAP: Record<string, LucideIcon> = {
  "shopping-bag": ShoppingBag,
  "heart-pulse": HeartPulse,
  smartphone: Smartphone,
  car: Car,
};

function ProjectIcon({ name }: { name: string }) {
  const Icon = ICON_MAP[name] ?? Sparkles;
  return <Icon size={16} className="text-[#94a3b8]" aria-hidden />;
}

type LightboxState = {
  project: PortfolioProject;
  index: number;
} | null;

function PortfolioLightbox({
  state,
  onClose,
  onPrev,
  onNext,
  onSelectIndex,
}: {
  state: LightboxState;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  onSelectIndex: (index: number) => void;
}) {
  useEffect(() => {
    if (!state) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onPrev();
      if (event.key === "ArrowRight") onNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [state, onClose, onPrev, onNext]);

  if (!state) return null;

  const { project, index } = state;
  const currentImage = project.images[index];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#081124]/92 p-4 backdrop-blur-sm md:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.name} screenshots`}
    >
      <div
        className="relative flex max-h-[92vh] w-full max-w-5xl flex-col"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-4 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-secondary">
              {project.category}
            </p>
            <h3 className="text-lg font-bold text-white md:text-xl">
              {project.name}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            aria-label="Close gallery"
          >
            <X size={20} />
          </button>
        </div>

        <div className="relative overflow-hidden rounded-2xl bg-[#0b1226] shadow-2xl">
          <img
            src={currentImage}
            alt={`${project.name} screenshot ${index + 1}`}
            className="max-h-[68vh] w-full object-contain object-center"
          />

          {project.images.length > 1 ? (
            <>
              <button
                type="button"
                onClick={onPrev}
                className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#1e293b] shadow-lg transition-colors hover:bg-white"
                aria-label="Previous screenshot"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                type="button"
                onClick={onNext}
                className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#1e293b] shadow-lg transition-colors hover:bg-white"
                aria-label="Next screenshot"
              >
                <ChevronRight size={22} />
              </button>
            </>
          ) : null}
        </div>

        <p className="mt-4 text-sm text-secondary">
          {index + 1} of {project.images.length}
        </p>

        {project.images.length > 1 ? (
          <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
            {project.images.map((image, imageIndex) => (
              <button
                key={`${project.slug}-preview-${imageIndex}`}
                type="button"
                onClick={() => onSelectIndex(imageIndex)}
                className={`h-14 w-20 shrink-0 overflow-hidden rounded-lg ring-2 transition-all ${
                  imageIndex === index
                    ? "ring-accent-secondary"
                    : "ring-white/20 opacity-70 hover:opacity-100"
                }`}
              >
                <img
                  src={image}
                  alt=""
                  className="h-full w-full object-cover object-top"
                />
              </button>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

function PortfolioCard({
  project,
  onOpen,
}: {
  project: PortfolioProject;
  onOpen: () => void;
}) {
  const summary =
    project.description.length > 130
      ? `${project.description.slice(0, 130).trim()}…`
      : project.description;

  return (
    <button
      type="button"
      onClick={onOpen}
      className="group relative w-full pb-20 text-left transition-transform duration-300 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-secondary focus-visible:ring-offset-2"
    >
      <div className="overflow-hidden rounded-2xl bg-[#e2e8f0] shadow-[0_12px_40px_rgba(15,23,42,0.08)]">
        <img
          src={project.previewImage}
          alt={project.name}
          className="h-52 w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03] md:h-60"
          loading="lazy"
        />
      </div>

      <div className="absolute bottom-0 left-3 right-3 rounded-xl bg-white px-5 pb-5 pt-5 shadow-[0_16px_48px_rgba(15,23,42,0.12)] md:left-4 md:right-4 md:px-6 md:pb-6 md:pt-6">
        <div className="absolute -top-4 right-5 overflow-hidden rounded-md shadow-md">
          <div className="bg-accent-secondary px-2.5 py-1 text-center text-xs font-bold text-white">
            {project.year}
          </div>
          <div className="bg-amber-400 px-2.5 py-1 text-center text-[10px] font-semibold text-white">
            {project.month}
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm text-[#94a3b8]">
          <ProjectIcon name={project.icon} />
          <span>{project.category}</span>
        </div>
        <h3 className="mt-2 text-xl font-bold text-[#1e293b] transition-colors group-hover:text-accent-secondary md:text-2xl">
          {project.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-[#64748b]">
          {summary}
        </p>
        <p className="mt-3 text-xs font-semibold text-accent-secondary">
          View {project.images.length} screenshots →
        </p>
      </div>
    </button>
  );
}

export default function PortfolioShowcase() {
  const [lightbox, setLightbox] = useState<LightboxState>(null);

  const openLightbox = (project: PortfolioProject) => {
    setLightbox({ project, index: 0 });
  };

  const closeLightbox = useCallback(() => setLightbox(null), []);

  const goPrev = useCallback(() => {
    setLightbox((current) => {
      if (!current) return null;
      const nextIndex =
        (current.index - 1 + current.project.images.length) %
        current.project.images.length;
      return { ...current, index: nextIndex };
    });
  }, []);

  const goNext = useCallback(() => {
    setLightbox((current) => {
      if (!current) return null;
      const nextIndex = (current.index + 1) % current.project.images.length;
      return { ...current, index: nextIndex };
    });
  }, []);

  const setLightboxIndex = useCallback((index: number) => {
    setLightbox((current) => (current ? { ...current, index } : null));
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-x-8 md:gap-y-14">
        {PORTFOLIO_PROJECTS.map((project) => (
          <PortfolioCard
            key={project.slug}
            project={project}
            onOpen={() => openLightbox(project)}
          />
        ))}
      </div>

      <PortfolioLightbox
        state={lightbox}
        onClose={closeLightbox}
        onPrev={goPrev}
        onNext={goNext}
        onSelectIndex={setLightboxIndex}
      />
    </>
  );
}
