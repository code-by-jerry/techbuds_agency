"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  AtSign,
  MessageSquare,
  PhoneIcon,
  User,
  X,
} from "lucide-react";
import { submitStaticForm } from "@/lib/staticForms";

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
    const timer = window.setInterval(() => {
      setPhraseVisible(false);
      window.setTimeout(() => {
        setPhraseIndex((current) => (current + 1) % CTA_ROTATING_PHRASES.length);
        setPhraseVisible(true);
      }, 280);
    }, ROTATE_INTERVAL);

    return () => window.clearInterval(timer);
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
              onClick={() => setOpen(true)}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent-secondary px-6 py-3 text-sm font-bold text-white transition-transform duration-300 hover:scale-[1.02] sm:w-auto"
            >
              Start Your Project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
            <a
              href="/contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-primary transition-colors duration-300 hover:border-accent-secondary/40 hover:text-accent-secondary sm:w-auto"
            >
              Let&rsquo;s Talk
            </a>
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
