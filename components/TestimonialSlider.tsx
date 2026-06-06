"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Quote, Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/testimonials";

const TOTAL = TESTIMONIALS.length;
const AUTO_INTERVAL = 5000;
const VISIBLE_DESKTOP = 3;
const VISIBLE_MOBILE = 1;

const duplicated = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];

function StarRating({ rating }: { rating: 4 | 5 }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          size={14}
          className={
            index < rating
              ? "fill-amber-400 text-amber-400"
              : "fill-white/10 text-white/15"
          }
        />
      ))}
    </div>
  );
}

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof TESTIMONIALS)[number];
}) {
  return (
    <div className="testimonial-card flex h-full flex-col p-5 md:p-6">
      <Quote
        size={22}
        className="mb-3 text-accent-secondary/70"
        aria-hidden
      />
      <p className="flex-1 text-sm leading-relaxed text-secondary/85 md:text-[15px]">
        &ldquo;{testimonial.message}&rdquo;
      </p>

      <div className="mt-5 space-y-3 border-t border-white/10 pt-4">
        <StarRating rating={testimonial.rating} />
        <div className="flex items-center gap-3">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="h-11 w-11 shrink-0 rounded-full bg-white/10 object-cover ring-2 ring-white/10"
          />
          <div className="min-w-0">
            <p className="truncate text-sm font-bold text-primary">
              {testimonial.name}
            </p>
            <p className="truncate text-xs text-secondary/70">
              {testimonial.role}, {testimonial.company}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(TOTAL);
  const [transition, setTransition] = useState(true);
  const [visibleCount, setVisibleCount] = useState(VISIBLE_DESKTOP);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const update = () => {
      setVisibleCount(
        window.innerWidth < 768 ? VISIBLE_MOBILE : VISIBLE_DESKTOP,
      );
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const snap = useCallback((pos: number) => {
    setTransition(false);
    setCurrent(pos);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setTransition(true);
      });
    });
  }, []);

  const goNext = useCallback(() => {
    const next = current + 1;
    if (next >= TOTAL * 2) {
      snap(current - TOTAL + 1);
    } else {
      setCurrent(next);
    }
  }, [current, snap]);

  const goPrev = useCallback(() => {
    const prev = current - 1;
    if (prev < 0) {
      snap(current + TOTAL - 1);
    } else {
      setCurrent(prev);
    }
  }, [current, snap]);

  useEffect(() => {
    timerRef.current = setInterval(goNext, AUTO_INTERVAL);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [goNext]);

  const pause = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };
  const resume = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(goNext, AUTO_INTERVAL);
  };

  const slideWidthPercent = 100 / visibleCount;
  const realIndex = current % TOTAL;

  return (
    <div
      className="relative mx-auto max-w-6xl"
      onMouseEnter={pause}
      onMouseLeave={resume}
    >
      <div className="overflow-hidden">
        <div
          className="flex items-stretch"
          style={{
            transform: `translateX(-${current * slideWidthPercent}%)`,
            transition: transition
              ? "transform 600ms cubic-bezier(0.4, 0, 0.2, 1)"
              : "none",
          }}
        >
          {duplicated.map((testimonial, i) => (
            <div
              key={`${testimonial.id}-${i}`}
              className="shrink-0 px-2 md:px-3"
              style={{ width: `${slideWidthPercent}%` }}
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={goPrev}
        className="absolute left-0 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#0f172a]/80 text-secondary/70 backdrop-blur-md transition-all hover:border-accent-secondary/30 hover:text-accent-secondary md:-left-4"
        aria-label="Previous testimonial"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3.5 w-3.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>

      <button
        type="button"
        onClick={goNext}
        className="absolute right-0 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#0f172a]/80 text-secondary/70 backdrop-blur-md transition-all hover:border-accent-secondary/30 hover:text-accent-secondary md:-right-4"
        aria-label="Next testimonial"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3.5 w-3.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
        {TESTIMONIALS.map((_, i) => {
          const isActive = i === realIndex;
          return (
            <button
              key={i}
              type="button"
              onClick={() => {
                const diff = i - realIndex;
                setCurrent((prev) => prev + diff);
              }}
              className={`rounded-full transition-all duration-300 ${
                isActive
                  ? "h-2 w-7 bg-accent-secondary"
                  : "h-2 w-2 bg-white/15 hover:bg-white/40"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          );
        })}
      </div>
    </div>
  );
}
