"use client";

import { useEffect, useRef, useState } from "react";
import ServiceCard from "@/components/ServiceCard";
import { SERVICES } from "@/lib/services";

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`relative overflow-hidden border-y border-[#e2e8f0] bg-[#f8fafc] ${
        visible ? "services-visible" : ""
      }`}
    >
      <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-accent-secondary/[0.06] blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-[#1e293b]/[0.04] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24">
        <div
          className="service-card-enter mb-12 grid gap-8 lg:mb-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-end"
          style={{ animationDelay: "0ms" }}
        >
          <div>
            <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-accent-secondary/25 bg-accent-secondary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent-secondary">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent-secondary" />
              What We Offer
            </div>

            <h2 className="text-3xl font-bold leading-tight text-[#1e293b] md:text-4xl lg:text-5xl">
              Our <span className="text-accent-secondary">Services</span>
            </h2>

            <div className="mt-4 h-1 w-20 rounded-full bg-accent-secondary" />
          </div>

          <p className="max-w-xl text-base leading-relaxed text-[#475569] md:text-lg lg:pb-1">
            End-to-end digital solutions — from brand identity and custom
            platforms to mobile apps, SEO, and ecommerce — built to help your
            business grow with clarity and confidence.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3 xl:gap-8">
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={service.slug}
              service={service}
              theme="light"
              index={index}
              animated
            />
          ))}
        </div>
      </div>
    </section>
  );
}
