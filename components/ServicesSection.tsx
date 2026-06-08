"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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

      <div className="relative mx-auto max-w-7xl px-6 py-12 md:px-12 md:py-16">
        <div
          className="service-card-enter mb-8 text-center md:mb-10"
          style={{ animationDelay: "0ms" }}
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-accent-secondary">
            What We Offer
          </p>
          <h2 className="text-2xl font-bold text-[#1e293b] md:text-4xl">
            Our <span className="text-accent-secondary">Services</span>
          </h2>
          <div className="mx-auto mt-2 h-0.5 w-12 rounded-full bg-accent-secondary" />
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[#64748b] md:text-base">
            Brand, web, mobile, platforms, SEO, and ecommerce — built to help
            your business grow with clarity and confidence.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={service.slug}
              service={service}
              theme="light"
              index={index}
              animated
              compact
            />
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full border border-[#f5202d] px-5 py-2.5 text-sm font-semibold text-accent-secondary transition-colors hover:bg-accent-secondary hover:text-white"
          >
            Explore all services
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
