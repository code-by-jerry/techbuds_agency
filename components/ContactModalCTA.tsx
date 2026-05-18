"use client";

import { useState } from "react";
import {
  ArrowRight,
  AtSign,
  MessageSquare,
  PhoneIcon,
  User,
  X,
} from "lucide-react";
import { submitStaticForm } from "@/lib/staticForms";

export default function ContactModalCTA() {
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
      <section className="relative overflow-hidden border-t border-custom">
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
        <div className="pointer-events-none absolute inset-0 bg-[#081124]/80" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
          <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl px-8 py-12 md:px-14 md:py-14 shadow-2xl shadow-black/30">
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-red-500/10" />

            <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between md:gap-10">
              <div className="max-w-2xl text-center md:text-left">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-red-400">
                  Let&rsquo;s Build Something Great
                </p>
                <h2 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
                  Ready to Transform Your{" "}
                  <span className="text-red-400">Digital Presence</span>?
                </h2>
                <p className="mt-3 text-secondary text-sm md:text-base leading-relaxed max-w-xl">
                  From strategy and design to development and growth — we help
                  businesses build scalable digital experiences that drive real
                  results.
                </p>
              </div>

              <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => setOpen(true)}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-red-500 px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-red-600 hover:shadow-[0_0_30px_rgba(255,90,95,0.4)] hover:-translate-y-0.5"
                >
                  Start Your Project
                  <ArrowRight className="h-4 w-4" />
                </button>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-primary transition-all duration-300 hover:border-red-400/40 hover:bg-red-500/10 hover:text-red-400 hover:-translate-y-0.5"
                >
                  Let&rsquo;s Talk
                </a>
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
              <div className="relative overflow-hidden bg-[#0f172a] md:min-h-full">
                <img
                  src="https://ik.imagekit.io/codebyjerry/techbuds/contact_1.png"
                  alt="Contact preview"
                  className="h-full w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#050816]/95 via-transparent to-transparent" />
              </div>

              <div className="flex items-start p-6 sm:p-8 md:p-10 overflow-y-auto max-h-[calc(100vh-4rem)]">
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
                            placeholder="+91 98853 94334"
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
