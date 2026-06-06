"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  AtSign,
  MessageSquare,
  PhoneIcon,
  Sparkles,
  User,
  X,
  Zap,
} from "lucide-react";
import { submitStaticForm } from "@/lib/staticForms";

const CTA_HIGHLIGHTS = [
  { icon: Zap, label: "Free consultation" },
  { icon: Sparkles, label: "48h response time" },
];

export default function ContactModalCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (status !== "idle") {
      setStatus("idle");
    }
  };

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
      { threshold: 0.25 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      await submitStaticForm({
        ...formData,
        source: "CTA Modal",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <section
        ref={sectionRef}
        className={`relative overflow-hidden border-t border-custom ${visible ? "cta-section-visible" : ""}`}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "url(https://ik.imagekit.io/codebyjerry/techbuds/bg_pattern_1.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="pointer-events-none absolute inset-0 bg-[#081124]/82" />
        <div className="cta-orb-1 pointer-events-none absolute -left-16 top-1/4 h-56 w-56 rounded-full bg-accent-secondary/[0.12] blur-3xl" />
        <div className="cta-orb-2 pointer-events-none absolute -right-10 bottom-0 h-64 w-64 rounded-full bg-accent-secondary/[0.08] blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-20">
          <div className="relative overflow-hidden rounded-3xl p-[1px]">
            <div className="cta-glow-ring rounded-3xl" />

            <div className="relative overflow-hidden rounded-3xl bg-white/[0.06] px-8 py-10 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl md:px-12 md:py-12">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,32,45,0.14),transparent_42%)]" />

              <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl text-center lg:text-left">
                  <p className="cta-reveal-1 mb-3 inline-flex items-center gap-2 rounded-full border border-accent-secondary/25 bg-accent-secondary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-accent-secondary">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent-secondary" />
                    Let&rsquo;s Build Something Great
                  </p>
                  <h2 className="cta-reveal-2 text-2xl font-bold leading-tight text-primary md:text-4xl lg:text-[2.5rem]">
                    Ready to Transform Your{" "}
                    <span className="text-accent-secondary">Digital Presence</span>
                    ?
                  </h2>
                  <p className="cta-reveal-3 mt-4 max-w-xl text-sm leading-relaxed text-secondary/85 md:text-base">
                    From strategy and design to development and growth — we help
                    businesses build scalable digital experiences that drive real
                    results.
                  </p>

                  <div className="cta-reveal-4 mt-5 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
                    {CTA_HIGHLIGHTS.map(({ icon: Icon, label }) => (
                      <span
                        key={label}
                        className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-[11px] font-medium text-secondary/80"
                      >
                        <Icon size={12} className="text-accent-secondary" />
                        {label}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="cta-reveal-4 flex w-full shrink-0 flex-col items-center gap-3 sm:flex-row lg:w-auto lg:flex-col xl:flex-row">
                  <button
                    type="button"
                    onClick={() => setOpen(true)}
                    className="cta-btn-primary cta-btn-shimmer group inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent-secondary px-7 py-3.5 text-sm font-bold text-white transition-transform duration-300 hover:scale-[1.02] sm:w-auto"
                  >
                    Start Your Project
                    <ArrowRight className="cta-btn-arrow h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </button>
                  <a
                    href="/contact"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-7 py-3.5 text-sm font-semibold text-primary transition-all duration-300 hover:border-accent-secondary/40 hover:bg-accent-secondary/10 hover:text-accent-secondary sm:w-auto"
                  >
                    Let&rsquo;s Talk
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {open ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-6 sm:px-6"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-6xl overflow-hidden rounded-[2rem] bg-[#050816] shadow-2xl shadow-black/50 ring-1 ring-white/10 max-h-[calc(100vh-4rem)]"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Contact form modal"
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-slate-950/80 text-white transition hover:border-red-400/40 hover:bg-slate-900/90"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-[1.15fr_1fr] max-h-[calc(100vh-4rem)]">
              <div className="relative hidden overflow-hidden bg-[#0f172a] md:block md:min-h-full">
                <img
                  src="https://ik.imagekit.io/codebyjerry/techbuds/contact_1.png"
                  alt="Contact preview"
                  className="h-full w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#050816]/95 via-transparent to-transparent" />
              </div>

              <div className="scrollbar-hidden flex items-start overflow-y-auto max-h-[calc(100vh-4rem)] p-5 sm:p-8 md:p-10">
                <div className="w-full">
                  <div className="mb-6 space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-red-400">
                      Book a project consultation
                    </p>
                    <h2 className="text-3xl font-bold text-white sm:text-4xl">
                      Start your project with us.
                    </h2>
                    <p className="text-sm text-secondary/80 leading-relaxed">
                      Share your requirements and our team will reach out with a
                      custom plan, timeline, and estimate.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <label className="group block">
                        <span className="text-xs font-semibold text-secondary/70">
                          Full Name
                        </span>
                        <div className="mt-2 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 transition-colors duration-300 focus-within:border-red-400/40">
                          <User className="h-4 w-4 text-secondary/60" />
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your name"
                            required
                            className="w-full bg-transparent text-sm text-white outline-none placeholder:text-secondary/40"
                          />
                        </div>
                      </label>

                      <label className="group block">
                        <span className="text-xs font-semibold text-secondary/70">
                          Email Address
                        </span>
                        <div className="mt-2 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 transition-colors duration-300 focus-within:border-red-400/40">
                          <AtSign className="h-4 w-4 text-secondary/60" />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                            required
                            className="w-full bg-transparent text-sm text-white outline-none placeholder:text-secondary/40"
                          />
                        </div>
                      </label>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <label className="group block">
                        <span className="text-xs font-semibold text-secondary/70">
                          Phone
                        </span>
                        <div className="mt-2 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 transition-colors duration-300 focus-within:border-red-400/40">
                          <PhoneIcon className="h-4 w-4 text-secondary/60" />
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+91 94913 12257"
                            className="w-full bg-transparent text-sm text-white outline-none placeholder:text-secondary/40"
                          />
                        </div>
                      </label>

                      <label className="group block">
                        <span className="text-xs font-semibold text-secondary/70">
                          Project Subject
                        </span>
                        <div className="mt-2 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 transition-colors duration-300 focus-within:border-red-400/40">
                          <MessageSquare className="h-4 w-4 text-secondary/60" />
                          <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="Project title"
                            className="w-full bg-transparent text-sm text-white outline-none placeholder:text-secondary/40"
                          />
                        </div>
                      </label>
                    </div>

                    <label className="block">
                      <span className="text-xs font-semibold text-secondary/70">
                        Message
                      </span>
                      <textarea
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project"
                        required
                        className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none placeholder:text-secondary/40 transition-colors duration-300 focus:border-red-400/40"
                      />
                    </label>

                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-red-500 px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-red-600 hover:shadow-[0_0_25px_rgba(255,90,95,0.35)]"
                    >
                      {status === "submitting" ? "Sending..." : "Send Request"}
                      <ArrowRight className="h-4 w-4" />
                    </button>

                    {status === "success" ? (
                      <p className="text-center text-sm font-semibold text-green-400">
                        Thanks. Your request has been sent successfully.
                      </p>
                    ) : null}

                    {status === "error" ? (
                      <p className="text-center text-sm font-semibold text-red-400">
                        Something went wrong. Please try again.
                      </p>
                    ) : null}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
