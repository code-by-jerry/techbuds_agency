"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import ContactModalTrigger from "@/components/ContactModalTrigger";
import { BUSINESS_SOLUTIONS } from "@/lib/business-solutions";

export default function BusinessSolutionsSection() {
  const [active, setActive] = useState(0);
  const solution = BUSINESS_SOLUTIONS[active];

  return (
    <section className="border-y border-[#e2e8f0] bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14 md:px-12 md:py-20">
        <div className="mx-auto mb-8 max-w-3xl text-center md:mb-10">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-accent-secondary">
            Industry Platforms
          </p>
          <h2 className="text-2xl font-bold text-[#1a1f2e] md:text-4xl">
            Business Solutions{" "}
            <span className="text-accent-secondary">We Build</span>
          </h2>
          <div className="mx-auto mt-2 h-0.5 w-12 rounded-full bg-accent-secondary" />
          <p className="mt-3 text-sm leading-relaxed text-[#64748b] md:text-base">
            Purpose-built platforms designed to streamline operations, automate
            workflows, and drive business growth across industries.
          </p>
        </div>

        <div className="mb-8 -mx-1 overflow-x-auto pb-1 md:mb-10">
          <div className="flex min-w-max gap-2 px-1 md:flex-wrap md:justify-center">
            {BUSINESS_SOLUTIONS.map((item, index) => {
              const isActive = index === active;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActive(index)}
                  className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200 ${
                    isActive
                      ? "bg-accent-secondary text-white"
                      : "bg-[#f1f5f9] text-[#64748b] hover:bg-[#e2e8f0] hover:text-[#1a1f2e]"
                  }`}
                >
                  {item.tab}
                </button>
              );
            })}
          </div>
        </div>

        <div
          key={solution.id}
          className="business-solution-panel overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white lg:grid lg:grid-cols-2"
        >
          <div className="flex items-center justify-center bg-[#f8fafc] p-6 md:p-8">
            <img
              src={solution.image}
              alt={solution.title}
              className="business-solution-image h-auto w-full rounded-xl object-cover"
            />
          </div>

          <div className="business-solution-content border-t border-[#e2e8f0] p-6 md:p-8 lg:border-l lg:border-t-0">
            <h3 className="text-2xl font-bold text-[#1a1f2e] md:text-3xl">
              {solution.title}
            </h3>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent-secondary">
                  What We Build
                </p>
                <ul className="space-y-2.5">
                  {solution.solutions.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-[#64748b]"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-secondary/10">
                        <Check
                          size={12}
                          className="text-accent-secondary"
                          strokeWidth={3}
                        />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent-secondary">
                  Business Benefits
                </p>
                <ul className="space-y-2.5">
                  {solution.benefits.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm font-medium text-[#1a1f2e]"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-secondary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <ContactModalTrigger
                source={`Business Solutions - ${solution.tab}`}
                className="inline-flex items-center gap-2 rounded-full bg-accent-secondary px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-accent-secondary/90"
              >
                Discuss Your Platform
                <ArrowRight size={14} />
              </ContactModalTrigger>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 rounded-full border border-[#e2e8f0] px-5 py-2.5 text-sm font-semibold text-[#1a1f2e] transition-colors hover:border-accent-secondary/40 hover:text-accent-secondary"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
