"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { useContactModal } from "@/components/ContactModalProvider";
import { whatsappUrl } from "@/lib/contact";

const CTA_ROTATING_PHRASES = [
  "build your brand identity",
  "develop a custom web platform",
  "launch a mobile application",
  "scale your ecommerce store",
  "automate business workflows",
  "grow with SEO & performance",
];

const ROTATE_INTERVAL = 3200;

export default function ContactModalCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [phraseVisible, setPhraseVisible] = useState(true);
  const { openContactModal } = useContactModal();

  useEffect(() => {
    const timer = window.setInterval(() => {
      setPhraseVisible(false);
      window.setTimeout(() => {
        setPhraseIndex((current) => (current + 1) % CTA_ROTATING_PHRASES.length);
        setPhraseVisible(true);
      }, 280);
    }, ROTATE_INTERVAL);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden border-t border-custom bg-[#081124]"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "url(https://ik.imagekit.io/codebyjerry/techbuds/bg_pattern_1.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#081124] via-[#081124]/95 to-[#081124]/90" />

      <div className="relative flex min-h-[280px] w-full flex-col items-center justify-center gap-6 px-6 py-12 md:min-h-[300px] md:flex-row md:justify-between md:gap-10 md:px-12 lg:px-16 lg:py-14">
        <div className="w-full text-center md:max-w-3xl md:text-left">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-accent-secondary">
            Let&rsquo;s build together
          </p>
          <h2 className="text-2xl font-bold leading-tight text-primary md:text-3xl lg:text-4xl">
            Want to{" "}
            <span
              className={`inline-block min-w-[12ch] text-accent-secondary transition-all duration-300 md:min-w-[18ch] ${
                phraseVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-2 opacity-0"
              }`}
            >
              {CTA_ROTATING_PHRASES[phraseIndex]}
            </span>
            ?
          </h2>
          <p className="mt-3 text-sm text-secondary/80 md:text-base">
            Tell us what you need — we&rsquo;ll help you plan, design, and ship
            it with a focused team.
          </p>
        </div>

        <div className="flex w-full shrink-0 flex-col items-center gap-3 sm:flex-row md:w-auto">
          <button
            type="button"
            onClick={() => openContactModal("CTA - Start Your Project")}
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent-secondary px-6 py-3 text-sm font-bold text-white transition-transform duration-300 hover:scale-[1.02] sm:w-auto"
          >
            Start Your Project
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-primary transition-colors duration-300 hover:border-accent-secondary/40 hover:text-accent-secondary sm:w-auto"
          >
            Let&rsquo;s Talk
          </a>
        </div>
      </div>
    </section>
  );
}
