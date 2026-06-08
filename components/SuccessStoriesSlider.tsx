"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SUCCESS_STORIES } from "@/lib/success-stories";

const TOTAL = SUCCESS_STORIES.length;
const AUTO_INTERVAL = 5500;
const VISIBLE_DESKTOP = 3;
const VISIBLE_MOBILE = 1;

const duplicated = [
  ...SUCCESS_STORIES,
  ...SUCCESS_STORIES,
  ...SUCCESS_STORIES,
];

function SuccessStoryCard({
  story,
}: {
  story: (typeof SUCCESS_STORIES)[number];
}) {
  return (
    <div className="success-story-card flex h-full w-full flex-col p-5 md:p-6">
      <span className="inline-flex w-fit rounded-full bg-accent-secondary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-accent-secondary">
        {story.category}
      </span>

      <h3 className="mt-3 text-lg font-bold text-[#1e293b] md:text-xl">
        {story.project}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-[#64748b]">
        {story.summary}
      </p>

      <p className="mt-4 text-sm font-semibold leading-snug text-[#1e293b]">
        {story.outcome}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {story.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-[#f8fafc] px-2.5 py-1 text-[10px] font-medium text-[#64748b]"
          >
            {tag}
          </span>
        ))}
      </div>

      <Link
        href={`/portfolio#${story.slug}`}
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-secondary transition-colors hover:text-[#1e293b]"
      >
        View case study
        <ArrowRight size={14} />
      </Link>
    </div>
  );
}

export default function SuccessStoriesSlider() {
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
      className="relative w-full"
      onMouseEnter={pause}
      onMouseLeave={resume}
    >
      <div className="overflow-hidden px-1 md:px-2">
        <div
          className="flex items-stretch"
          style={{
            transform: `translateX(-${current * slideWidthPercent}%)`,
            transition: transition
              ? "transform 600ms cubic-bezier(0.4, 0, 0.2, 1)"
              : "none",
          }}
        >
          {duplicated.map((story, i) => (
            <div
              key={`${story.id}-${i}`}
              className="shrink-0 px-2 md:px-4"
              style={{ width: `${slideWidthPercent}%` }}
            >
              <SuccessStoryCard story={story} />
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={goPrev}
        className="absolute left-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#f5202d] bg-white text-[#64748b] transition-all hover:bg-[#f5202d] hover:text-white md:-left-5"
        aria-label="Previous success story"
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
        className="absolute right-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#f5202d] bg-white text-[#64748b] transition-all hover:bg-[#f5202d] hover:text-white md:-right-5"
        aria-label="Next success story"
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
        {SUCCESS_STORIES.map((_, i) => {
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
                  : "h-2 w-2 bg-[#cbd5e1] hover:bg-[#94a3b8]"
              }`}
              aria-label={`Go to success story ${i + 1}`}
            />
          );
        })}
      </div>
    </div>
  );
}
