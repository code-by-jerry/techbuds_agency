"use client";

import { useState, useEffect, useCallback, useRef } from "react";

const testimonials = [
  "https://ik.imagekit.io/codebyjerry/techbuds/Testimonial_1.png",
  "https://ik.imagekit.io/codebyjerry/techbuds/Testimonial_4.png",
  "https://ik.imagekit.io/codebyjerry/techbuds/Testimonial_3.png",
  "https://ik.imagekit.io/codebyjerry/techbuds/Testoimonial_2.png",
];

const TOTAL = testimonials.length;
const AUTO_INTERVAL = 4000;
const VISIBLE_DESKTOP = 3;
const VISIBLE_MOBILE = 1;

// Triple the array for infinite scroll room
const duplicated = [...testimonials, ...testimonials, ...testimonials];

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(TOTAL);
  const [transition, setTransition] = useState(true);
  const [visibleCount, setVisibleCount] = useState(VISIBLE_DESKTOP);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Responsive visible count
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

  // Move by 1 card width
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

  // Auto-slide
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

  // Each card = viewport / visibleCount so exactly `visibleCount` cards fit
  const slideWidthPercent = 100 / visibleCount;

  // Map infinite position to dot index
  const realIndex = current % TOTAL;
  // Offset to center the active card when showing 3
  const offset = visibleCount === 3 ? slideWidthPercent : 0;

  return (
    <div
      className="relative mx-auto max-w-5xl"
      onMouseEnter={pause}
      onMouseLeave={resume}
    >
      {/* slides wrapper with gap handled inside */}
      <div className="overflow-hidden rounded-xl">
        <div
          className="flex"
          style={{
            transform: `translateX(-${current * slideWidthPercent}%)`,
            transition: transition
              ? "transform 600ms cubic-bezier(0.4, 0, 0.2, 1)"
              : "none",
          }}
        >
          {duplicated.map((src, i) => (
            <div
              key={i}
              className="shrink-0 px-2 md:px-3"
              style={{ width: `${slideWidthPercent}%` }}
            >
              <div className="testimonial-card w-full overflow-hidden rounded-xl">
                <img
                  src={src}
                  alt={`Testimonial ${(i % TOTAL) + 1}`}
                  className="w-full h-auto block"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Nav arrows */}
      <button
        type="button"
        onClick={goPrev}
        className="absolute left-1 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#0f172a]/80 text-secondary/70 backdrop-blur-md transition-all hover:border-red-400/30 hover:text-red-400 md:left-2"
        aria-label="Previous"
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
        className="absolute right-1 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#0f172a]/80 text-secondary/70 backdrop-blur-md transition-all hover:border-red-400/30 hover:text-red-400 md:right-2"
        aria-label="Next"
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

      {/* Pagination dots */}
      <div className="mt-6 flex items-center justify-center gap-2">
        {testimonials.map((_, i) => {
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
                  ? "w-7 h-2 bg-red-400"
                  : "w-2 h-2 bg-white/15 hover:bg-white/40"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          );
        })}
      </div>
    </div>
  );
}
