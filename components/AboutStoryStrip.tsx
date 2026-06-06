"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  Lightbulb,
  Quote,
  Rocket,
  Star,
  ThumbsUp,
  Users,
} from "lucide-react";
import {
  ABOUT_HIGHLIGHT_STATS,
  ABOUT_MISSION,
} from "@/lib/about";
import { PAGE_BANNERS } from "@/lib/page-banners";
import { TESTIMONIALS } from "@/lib/testimonials";

const HERO_IMAGE = PAGE_BANNERS.about.image;
const SPOTLIGHT_TESTIMONIALS = TESTIMONIALS.slice(0, 4);
const AUTO_INTERVAL = 6000;

const statIcons = {
  rocket: Rocket,
  "thumbs-up": ThumbsUp,
  lightbulb: Lightbulb,
  users: Users,
} as const;

function StarRating({ rating }: { rating: 4 | 5 }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          size={13}
          className={
            index < rating
              ? "fill-amber-400 text-amber-400"
              : "fill-[#e2e8f0] text-[#e2e8f0]"
          }
        />
      ))}
    </div>
  );
}

export default function AboutStoryStrip() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isInView, setIsInView] = useState(false);

  const goTo = useCallback((index: number) => {
    setIsVisible(false);
    window.setTimeout(() => {
      setActiveIndex(index);
      setIsVisible(true);
    }, 220);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      goTo((activeIndex + 1) % SPOTLIGHT_TESTIMONIALS.length);
    }, AUTO_INTERVAL);

    return () => window.clearInterval(timer);
  }, [activeIndex, goTo]);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const testimonial = SPOTLIGHT_TESTIMONIALS[activeIndex];

  return (
    <section
      ref={sectionRef}
      className={`w-full bg-[#FEFEFE] ${isInView ? "about-strip-visible" : ""}`}
    >
      <div className="grid w-full lg:grid-cols-[34fr_66fr]">
        {/* Testimonial spotlight */}
        <div className="relative flex min-h-[300px] flex-col justify-between bg-gradient-to-br from-[#fafbfc] to-white p-7 md:p-9 lg:min-h-[360px]">
          <div className="flex items-start justify-between gap-4">
            <div className="relative">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className={`h-14 w-14 rounded-full object-cover ring-2 ring-white transition-transform duration-500 ${
                  isVisible ? "scale-100" : "scale-95"
                }`}
              />
              <span className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-accent-secondary text-white shadow-md">
                <Quote size={14} aria-hidden />
              </span>
            </div>

            <div className="flex items-center gap-1.5" role="tablist" aria-label="Testimonials">
              {SPOTLIGHT_TESTIMONIALS.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={index === activeIndex}
                  aria-label={`Show testimonial from ${item.name}`}
                  onClick={() => goTo(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "w-6 bg-accent-secondary"
                      : "w-2 bg-[#cbd5e1] hover:bg-[#94a3b8]"
                  }`}
                />
              ))}
            </div>
          </div>

          <div
            className={`mt-6 flex flex-1 flex-col transition-all duration-300 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
            }`}
          >
            <StarRating rating={testimonial.rating} />
            <p className="mt-4 text-base leading-relaxed text-[#475569] md:text-lg">
              &ldquo;{testimonial.message}&rdquo;
            </p>
            <div className="mt-6">
              <p className="text-sm font-bold text-[#1e293b]">{testimonial.name}</p>
              <p className="mt-0.5 text-xs text-[#64748b]">
                {testimonial.role}, {testimonial.company}
              </p>
            </div>
          </div>
        </div>

        {/* Mission + stats — shared hero background */}
        <div className="relative grid lg:grid-cols-[56fr_44fr]">
          <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
            <div
              className="about-strip-bg-image absolute inset-0 bg-cover bg-center bg-no-repeat opacity-35"
              style={{ backgroundImage: `url(${HERO_IMAGE})` }}
            />
          </div>

          {/* Mission statement */}
          <div className="relative z-10 flex min-h-[280px] flex-col items-center justify-center overflow-hidden px-7 py-12 text-center md:px-10 lg:min-h-[360px]">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent-secondary/82 via-[#e3182a]/78 to-[#b81222]/85" />
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.1]"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 30%, white 1px, transparent 1px), radial-gradient(circle at 80% 70%, white 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
              aria-hidden
            />
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-black/10 blur-2xl" />

            <p className="about-strip-mission-text relative z-10 max-w-md text-2xl font-bold leading-tight text-white md:text-3xl lg:text-[2rem]">
              {ABOUT_MISSION.headline}
            </p>

            <span className="about-strip-mission-pill relative z-10 mt-8 inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#1e293b]">
              {ABOUT_MISSION.tagline}
            </span>
          </div>

          {/* Highlight stats */}
          <div className="relative z-10 grid min-h-[280px] grid-cols-2 p-7 md:p-8 lg:min-h-[360px] lg:p-9">
            <div className="pointer-events-none absolute inset-0 bg-[#081124]/78" />

            {ABOUT_HIGHLIGHT_STATS.map((stat) => {
              const Icon = statIcons[stat.icon];

              return (
                <div
                  key={stat.label}
                  className="about-strip-stat relative z-10 flex flex-col items-center justify-center px-3 py-5 text-center"
                >
                  <span className="about-strip-stat-icon mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-accent-secondary/15 text-accent-secondary">
                    <Icon size={22} strokeWidth={1.75} aria-hidden />
                  </span>
                  <p className="text-3xl font-bold leading-none text-white md:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.14em] text-white/55 md:text-xs">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
