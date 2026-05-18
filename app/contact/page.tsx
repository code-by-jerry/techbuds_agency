"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  User,
  AtSign,
  PhoneIcon,
  MessageSquare,
  Send,
  ShieldCheck,
} from "lucide-react";
import { submitStaticForm } from "@/lib/staticForms";
import { whatsappUrl } from "@/lib/contact";

export default function Contact() {
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
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
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
        source: "Contact Page",
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
    <div className="min-h-screen bg-brand">
      {/* Hero / Header Section */}
      <section className="relative overflow-hidden border-b border-custom">
        <div className="overflow-hidden">
          <picture>
            <source
              media="(min-width: 768px)"
              srcSet="https://ik.imagekit.io/codebyjerry/techbuds/contact_web_new.png"
            />
            <img
              src="https://ik.imagekit.io/codebyjerry/techbuds/contact_mobile_new.png"
              alt="Contact hero"
              className="w-full h-auto"
            />
          </picture>
        </div>
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[700px] -translate-x-1/2 rounded-full bg-red-500/[0.05] blur-3xl" />
      </section>

      {/* Contact Section — Two Column Layout */}
      <section className="relative overflow-hidden">
        {/* background pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            backgroundImage:
              "url(https://ik.imagekit.io/codebyjerry/techbuds/bg_pattern_contact.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="pointer-events-none absolute inset-0 bg-[#081124]/30" />

        {/* red glow accents */}
        <div className="pointer-events-none absolute -left-60 top-1/3 h-96 w-96 rounded-full bg-red-500/[0.05] blur-3xl" />
        <div className="pointer-events-none absolute -right-60 bottom-1/4 h-96 w-96 rounded-full bg-red-500/[0.03] blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
            {/* ─── LEFT COLUMN — Branding & Contact Info ─── */}
            <div className="space-y-8">
              {/* Logo */}
              <div className="inline-flex items-center gap-3">
                <img
                  src="/logo.png"
                  alt="TechBuds"
                  className="h-10 w-auto rounded-lg"
                />
              </div>

              {/* Heading */}
              <div>
                <h2 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
                  Let&rsquo;s Build Something{" "}
                  <span className="text-red-400">Amazing</span> Together
                </h2>
                <p className="mt-4 text-secondary text-sm md:text-base leading-relaxed max-w-lg">
                  Have a project, idea, or challenge you&rsquo;d like to
                  discuss? We&rsquo;re always open to talking through new
                  opportunities, collaborations, or creative concepts.
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="space-y-4">
                {[
                  {
                    icon: Mail,
                    label: "Email",
                    value: "techbuds57@gmail.com",
                    href: "mailto:techbuds57@gmail.com",
                  },
                  {
                    icon: Phone,
                    label: "Phone",
                    value: "+91 98853 94334",
                    href: "tel:+919885394334",
                  },
                  {
                    icon: MessageSquare,
                    label: "WhatsApp",
                    value: "+91 70929 36243",
                    href: whatsappUrl,
                  },
                  {
                    icon: MapPin,
                    label: "Location",
                    value: "Remote, Hyderabad, Bangalore",
                    href: null,
                  },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href || undefined}
                    className={`group flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-md transition-all duration-300 hover:border-red-400/30 hover:bg-red-500/[0.04] ${
                      !item.href ? "cursor-default" : ""
                    }`}
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-500/10 text-red-400 transition-colors duration-300 group-hover:bg-red-500/20">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-secondary/60">
                        {item.label}
                      </p>
                      <p className="text-sm font-semibold text-primary group-hover:text-red-400 transition-colors duration-300">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Trust Note */}
              <div className="flex items-center gap-2 rounded-xl border border-white/5 bg-white/[0.02] px-5 py-3 backdrop-blur-sm">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-green-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <p className="text-xs text-secondary/70">
                  We typically reply within{" "}
                  <span className="font-semibold text-secondary">24 hours</span>
                  .
                </p>
              </div>
            </div>

            {/* ─── RIGHT COLUMN — Contact Form ─── */}
            <div className="relative">
              {/* Glass card container */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-8 shadow-2xl shadow-black/30 md:p-10">
                {/* inner glow ring */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-red-500/10" />

                {/* Form Header */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-primary md:text-2xl">
                    Send Us a Message
                  </h3>
                  <p className="mt-2 text-sm text-secondary/70">
                    Fill out the form below and our team will get back to you as
                    soon as possible.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Row: Name + Email */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="group relative">
                      <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-secondary/40 transition-colors duration-300 group-focus-within:text-red-400">
                        <User className="h-4 w-4" />
                      </div>
                      <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full rounded-xl border border-white/10 bg-white/[0.03] py-3.5 pl-11 pr-4 text-sm text-primary placeholder-secondary/40 outline-none backdrop-blur-sm transition-all duration-300 focus:border-red-400/40 focus:bg-red-500/[0.03] focus:shadow-[0_0_20px_rgba(255,77,90,0.06)]"
                      />
                    </div>

                    <div className="group relative">
                      <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-secondary/40 transition-colors duration-300 group-focus-within:text-red-400">
                        <AtSign className="h-4 w-4" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full rounded-xl border border-white/10 bg-white/[0.03] py-3.5 pl-11 pr-4 text-sm text-primary placeholder-secondary/40 outline-none backdrop-blur-sm transition-all duration-300 focus:border-red-400/40 focus:bg-red-500/[0.03] focus:shadow-[0_0_20px_rgba(255,77,90,0.06)]"
                      />
                    </div>
                  </div>

                  {/* Row: Phone + Subject */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="group relative">
                      <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-secondary/40 transition-colors duration-300 group-focus-within:text-red-400">
                        <PhoneIcon className="h-4 w-4" />
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-white/10 bg-white/[0.03] py-3.5 pl-11 pr-4 text-sm text-primary placeholder-secondary/40 outline-none backdrop-blur-sm transition-all duration-300 focus:border-red-400/40 focus:bg-red-500/[0.03] focus:shadow-[0_0_20px_rgba(255,77,90,0.06)]"
                      />
                    </div>

                    <div className="group relative">
                      <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-secondary/40 transition-colors duration-300 group-focus-within:text-red-400">
                        <MessageSquare className="h-4 w-4" />
                      </div>
                      <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-white/10 bg-white/[0.03] py-3.5 pl-11 pr-4 text-sm text-primary placeholder-secondary/40 outline-none backdrop-blur-sm transition-all duration-300 focus:border-red-400/40 focus:bg-red-500/[0.03] focus:shadow-[0_0_20px_rgba(255,77,90,0.06)]"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="group relative">
                    <div className="pointer-events-none absolute left-4 top-4 text-secondary/40 transition-colors duration-300 group-focus-within:text-red-400">
                      <MessageSquare className="h-4 w-4" />
                    </div>
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] py-3.5 pl-11 pr-4 text-sm text-primary placeholder-secondary/40 outline-none backdrop-blur-sm transition-all duration-300 focus:border-red-400/40 focus:bg-red-500/[0.03] focus:shadow-[0_0_20px_rgba(255,77,90,0.06)]"
                    />
                  </div>

                  {/* Trust + Security Note */}
                  <div className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3 backdrop-blur-sm">
                    <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-green-400" />
                    <p className="text-xs text-secondary/60 leading-relaxed">
                      Your information is encrypted and secure. We will never
                      share your data with third parties.
                    </p>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-red-500 to-red-600 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-red-500/20 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,77,90,0.35)] hover:-translate-y-0.5"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {status === "submitting" ? "Sending..." : "Send Message"}
                      <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                    {/* Shine effect */}
                    <div className="pointer-events-none absolute inset-0 -translate-x-full skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  </button>

                  {status === "success" ? (
                    <p className="text-center text-sm font-semibold text-green-400">
                      Thanks. Your message has been sent successfully.
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
      </section>
    </div>
  );
}
