"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/services";

const CURSOR_GAP_BELOW = 20;
const FLOAT_IMAGE_MAX_HEIGHT = 200;
const FLOAT_IMAGE_MAX_WIDTH = 260;

type FloatPosition = {
  top: number;
  left: number;
  visible: boolean;
};

export default function ServicesIndexSection() {
  const gridRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [floatPos, setFloatPos] = useState<FloatPosition>({
    top: 0,
    left: 0,
    visible: false,
  });

  const updateFromPointer = useCallback(
    (clientX: number, clientY: number, index: number) => {
      const container = gridRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const paddingX = 24;
      const paddingTop = 16;
      const paddingBottom = 16;

      let left = clientX - rect.left;
      let top = clientY - rect.top + CURSOR_GAP_BELOW;

      left = Math.min(
        Math.max(left, paddingX + FLOAT_IMAGE_MAX_WIDTH / 2),
        rect.width - paddingX - FLOAT_IMAGE_MAX_WIDTH / 2
      );
      top = Math.min(
        Math.max(top, paddingTop),
        rect.height - paddingBottom - FLOAT_IMAGE_MAX_HEIGHT
      );

      setActiveIndex(index);
      setFloatPos({ top, left, visible: true });
    },
    []
  );

  const clearActive = useCallback(() => {
    setFloatPos((current) => ({ ...current, visible: false }));
    setActiveIndex(null);
  }, []);

  useEffect(() => {
    const handleResize = () => clearActive();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [clearActive]);

  const activeService =
    activeIndex !== null ? SERVICES[activeIndex] : null;

  return (
    <div className="grid lg:grid-cols-2">
      <div className="relative overflow-hidden bg-[#081124] lg:sticky lg:top-[var(--site-navbar-height)] lg:min-h-[calc(100vh-var(--site-navbar-height))] lg:self-start">
        <div className="pointer-events-none absolute -left-24 top-1/4 h-80 w-80 rounded-full bg-accent-secondary/[0.06] blur-3xl" />
        <div className="pointer-events-none absolute -right-10 bottom-0 h-64 w-64 rounded-full bg-white/[0.03] blur-3xl" />

        <div className="relative flex min-h-full flex-col justify-center px-6 py-16 md:px-12 lg:px-14 lg:py-24 xl:px-20">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-accent-secondary">
            Our Services
          </p>
          <h2 className="text-3xl font-bold leading-tight text-primary md:text-4xl lg:text-[2.65rem]">
            Digital solutions shaped around{" "}
            <span className="text-accent-secondary">real business needs.</span>
          </h2>
          <div className="mt-4 h-1 w-16 rounded-full bg-accent-secondary" />
          <p className="mt-5 max-w-md text-base leading-relaxed text-secondary">
            Browse our core services on the right. Move your cursor over a row
            on desktop to preview the work — the image follows your movement
            without blocking the copy.
          </p>

          <Link
            href="#services-index-grid"
            className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:border-accent-secondary/40 hover:text-accent-secondary"
          >
            View service index
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>

      <div className="relative bg-white px-6 py-16 md:px-12 lg:px-14 lg:py-24 xl:px-20">
        {activeService ? (
          <div className="mb-6 flex items-center justify-center rounded-2xl border border-[#e2e8f0] bg-[#f8fafc] p-6 md:hidden">
            <img
              src={activeService.src}
              alt={activeService.label}
              className="service-index-float-image max-h-44 w-auto object-contain"
            />
          </div>
        ) : (
          <p className="mb-4 text-center text-xs text-[#94a3b8] md:hidden">
            Tap a service to preview
          </p>
        )}

        <div
          id="services-index-grid"
          ref={gridRef}
          className="relative grid border border-[#e2e8f0] sm:grid-cols-2"
          onMouseLeave={clearActive}
        >
          <div
            className={`pointer-events-none absolute z-20 hidden md:block ${
              floatPos.visible ? "opacity-100" : "opacity-0"
            }`}
            style={{
              top: floatPos.top,
              left: floatPos.left,
              transform: "translate(-50%, 0)",
              transition: floatPos.visible
                ? "opacity 0.25s ease"
                : "opacity 0.2s ease",
            }}
            aria-hidden={!floatPos.visible}
          >
            {activeService ? (
              <img
                key={activeService.slug}
                src={activeService.src}
                alt=""
                className="service-index-cursor-image max-h-[200px] w-auto max-w-[260px] object-contain drop-shadow-[0_24px_48px_rgba(15,23,42,0.16)]"
              />
            ) : null}
          </div>

          {SERVICES.map((service, index) => {
            const isActive = activeIndex === index;

            return (
              <article
                key={service.slug}
                className={`group relative min-h-[220px] border-[#e2e8f0] p-6 transition-colors duration-300 sm:min-h-[240px] sm:p-7 ${
                  index % 2 === 0 ? "sm:border-r" : ""
                } ${index < SERVICES.length - 1 ? "max-sm:border-b" : ""} ${
                  index < SERVICES.length - 2 ? "sm:border-b" : ""
                } ${
                  isActive
                    ? "bg-[#fffafa]"
                    : "bg-white hover:bg-[#fcfcfd]"
                }`}
                onMouseEnter={(event) =>
                  updateFromPointer(event.clientX, event.clientY, index)
                }
                onMouseMove={(event) =>
                  updateFromPointer(event.clientX, event.clientY, index)
                }
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setActiveIndex(activeIndex === index ? null : index);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label={`Preview ${service.label}`}
              >
                <span
                  className={`mb-4 block h-0.5 w-0 rounded-full bg-accent-secondary transition-all duration-300 ${
                    isActive ? "w-10" : "group-hover:w-10"
                  }`}
                />

                <p
                  className={`text-sm font-semibold transition-colors duration-300 ${
                    isActive
                      ? "text-accent-secondary"
                      : "text-[#cbd5e1] group-hover:text-accent-secondary"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </p>

                <h3
                  className={`mt-2 text-lg font-bold transition-colors duration-300 md:text-xl ${
                    isActive
                      ? "text-accent-secondary"
                      : "text-[#1e293b] group-hover:text-[#0f172a]"
                  }`}
                >
                  {service.label}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-[#64748b]">
                  {service.summary}
                </p>

                <Link
                  href={`/services/${service.slug}`}
                  onClick={(event) => event.stopPropagation()}
                  className={`mt-5 inline-flex items-center gap-1.5 text-sm font-semibold transition-colors duration-300 ${
                    isActive
                      ? "text-accent-secondary"
                      : "text-[#94a3b8] group-hover:text-accent-secondary"
                  }`}
                >
                  View details
                  <ArrowRight size={14} />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
