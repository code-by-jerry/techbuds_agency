"use client";

import { useState } from "react";
import { ArrowRight, AtSign, Phone, User } from "lucide-react";
import { submitStaticForm } from "@/lib/staticForms";

const fieldClass =
  "w-full rounded-xl border border-white/20 bg-transparent px-4 py-3 text-sm text-white outline-none backdrop-blur-sm transition-colors duration-300 placeholder:text-white/40 focus:border-[#F5202D] focus:bg-white/[0.04]";

export default function HeroContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

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
        subject: "Hero section inquiry",
        source: "Hero Section",
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="w-full max-w-md rounded-2xl border border-white/15 bg-black/25 p-6 backdrop-blur-md md:p-7 lg:ml-auto">
      <div className="mb-5">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#F5202D]">
          Get in touch
        </p>
        <h2 className="mt-2 text-xl font-bold text-white">
          Start your project
        </h2>
        <p className="mt-1.5 text-sm text-white/60">
          Share a few details and we&apos;ll get back to you shortly.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3.5">
        <div className="group relative">
          <User className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40 transition-colors group-focus-within:text-[#F5202D]" />
          <input
            type="text"
            name="name"
            placeholder="Full name"
            value={formData.name}
            onChange={handleChange}
            required
            className={`${fieldClass} pl-10`}
          />
        </div>

        <div className="group relative">
          <AtSign className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40 transition-colors group-focus-within:text-[#F5202D]" />
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            required
            className={`${fieldClass} pl-10`}
          />
        </div>

        <div className="group relative">
          <Phone className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40 transition-colors group-focus-within:text-[#F5202D]" />
          <input
            type="tel"
            name="phone"
            placeholder="Phone number"
            value={formData.phone}
            onChange={handleChange}
            className={`${fieldClass} pl-10`}
          />
        </div>

        <textarea
          name="message"
          placeholder="Tell us about your project"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          required
          className={`${fieldClass} resize-none`}
        />

        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#F5202D] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#d91b28] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "submitting" ? "Sending..." : "Send message"}
          <ArrowRight className="h-4 w-4" />
        </button>

        {status === "success" ? (
          <p className="text-center text-sm font-medium text-green-400">
            Thanks! We&apos;ll be in touch soon.
          </p>
        ) : null}

        {status === "error" ? (
          <p className="text-center text-sm font-medium text-[#F5202D]">
            Something went wrong. Please try again.
          </p>
        ) : null}
      </form>
    </div>
  );
}
