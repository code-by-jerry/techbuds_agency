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
  ArrowRight,
} from "lucide-react";
import { submitStaticForm } from "@/lib/staticForms";
import { contactEmail, whatsappUrl } from "@/lib/contact";
import { useContactModal } from "@/components/ContactModalProvider";
import FAQSection from "@/components/FAQSection";

const teamMembers = [
  {
    role: "Senior Executive",
    name: "Venky",
    phone: "+91 94913 12257",
    href: "tel:+919491312257",
    image: "https://ik.imagekit.io/codebyjerry/techbuds/Executive.png",
  },
  {
    role: "Developer",
    name: "Jerry",
    phone: "+91 70929 36243",
    href: "tel:+917092936243",
    image: "https://ik.imagekit.io/codebyjerry/techbuds/Developer.png",
  },
  {
    role: "Brand Designer",
    name: "Gopi",
    phone: "+91 95505 90174",
    href: "tel:+919550590174",
    image: "https://ik.imagekit.io/codebyjerry/techbuds/Designer.png",
  },
];

const contactFaq = [
  {
    q: "How can I contact TechBuds?",
    a: "You can contact us through the form on this page, email us at info@techbuds.online, call +91 94913 12257, or message us on WhatsApp at +91 70929 36243.",
  },
  {
    q: "How quickly do you respond to project inquiries?",
    a: "We typically respond within 24 hours. For urgent project discussions, WhatsApp is usually the fastest way to reach us.",
  },
  {
    q: "Do you work with clients remotely?",
    a: "Yes. TechBuds works remotely and supports clients across Hyderabad, Bangalore, and other locations through online meetings and structured project communication.",
  },
  {
    q: "What details should I share before starting a project?",
    a: "Share your business goal, project type, required features, timeline, budget range, and any reference websites or apps. This helps us suggest the right approach quickly.",
  },
  {
    q: "Can I speak directly with the developer or designer?",
    a: "Yes. Depending on your project requirement, you can connect with our developer, brand designer, or executive for the right discussion.",
  },
  {
    q: "Do you provide a quote after the first discussion?",
    a: "Yes. After understanding the scope, we provide a suitable project estimate, timeline, and development plan.",
  },
];

export default function ContactPageContent() {
  const { openContactModal } = useContactModal();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

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
    <>
      <section className="relative overflow-hidden">
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
        <div className="pointer-events-none absolute -left-60 top-1/3 h-96 w-96 rounded-full bg-red-500/[0.05] blur-3xl" />
        <div className="pointer-events-none absolute -right-60 bottom-1/4 h-96 w-96 rounded-full bg-red-500/[0.03] blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3">
                <img
                  src="/logo.png"
                  alt="TechBuds"
                  className="h-10 w-auto rounded-lg"
                />
              </div>

              <div>
                <h2 className="text-2xl font-bold leading-tight text-primary md:text-4xl">
                  Let&rsquo;s Build Something{" "}
                  <span className="text-red-400">Amazing</span> Together
                </h2>
                <p className="mt-4 max-w-lg text-sm leading-relaxed text-secondary md:text-base">
                  Have a project, idea, or challenge you&rsquo;d like to
                  discuss? We&rsquo;re always open to talking through new
                  opportunities, collaborations, or creative concepts.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    icon: Mail,
                    label: "Email",
                    value: "info@techbuds.online",
                    href: "mailto:info@techbuds.online",
                  },
                  {
                    icon: Phone,
                    label: "Phone",
                    value: "+91 94913 12257",
                    href: "tel:+919491312257",
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
                      <p className="text-sm font-semibold text-primary transition-colors duration-300 group-hover:text-red-400">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

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
                  <span className="font-semibold text-secondary">24 hours</span>.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 shadow-2xl shadow-black/30 backdrop-blur-2xl md:p-10">
                <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-red-500/10" />

                <div className="mb-8">
                  <h3 className="text-xl font-bold text-primary md:text-2xl">
                    Send Us a Message
                  </h3>
                  <p className="mt-2 text-sm text-secondary/70">
                    Fill out the form below and our team will get back to you as
                    soon as possible.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
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

                  <div className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3 backdrop-blur-sm">
                    <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-green-400" />
                    <p className="text-xs leading-relaxed text-secondary/60">
                      Your information is encrypted and secure. We will never
                      share your data with third parties.
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-red-500 to-red-600 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-red-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(255,77,90,0.35)]"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {status === "submitting" ? "Sending..." : "Send Message"}
                      <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
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

      <section className="relative overflow-hidden border-t border-[#e2e8f0] bg-[#f8fafc]">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "url(https://ik.imagekit.io/codebyjerry/techbuds/map.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden
        />

        <div className="relative mx-auto max-w-6xl px-6 py-10 md:px-10 md:py-14">
          <div className="mb-8 text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-accent-secondary">
              Our Team
            </p>
            <h2 className="text-2xl font-bold text-[#1e293b] md:text-3xl">
              Talk to the{" "}
              <span className="text-accent-secondary">Right Person</span>
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {teamMembers.map((member) => (
              <article
                key={member.name}
                className="group rounded-xl border border-[#e2e8f0] bg-white p-4 text-center shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-secondary/25 hover:shadow-md"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border-2 border-accent-secondary/20 bg-[#f1f5f9] p-0.5">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>

                <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-accent-secondary">
                  {member.role}
                </p>
                <h3 className="mt-1 text-lg font-bold text-[#1e293b]">
                  {member.name}
                </h3>
                <a
                  href={member.href}
                  className="mt-3 inline-flex items-center justify-center gap-1.5 rounded-full border border-[#e2e8f0] bg-[#f8fafc] px-3 py-1.5 text-xs font-semibold text-[#64748b] transition-all duration-300 hover:border-accent-secondary/30 hover:bg-accent-secondary/5 hover:text-accent-secondary"
                >
                  <Phone className="h-3.5 w-3.5" />
                  {member.phone}
                </a>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-[#e2e8f0] bg-white px-5 py-6 shadow-sm md:flex md:items-center md:justify-between md:gap-6 md:px-8">
            <div className="text-center md:text-left">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-secondary">
                General queries
              </p>
              <h3 className="mt-1.5 text-lg font-bold text-[#1e293b] md:text-xl">
                Have a question or want to discuss your project?
              </h3>
              <p className="mt-1.5 text-sm text-[#64748b]">
                Reach out anytime — we&rsquo;ll point you to the right person
                and get the conversation started.
              </p>
            </div>

            <div className="mt-5 flex shrink-0 flex-col items-center gap-2.5 sm:flex-row md:mt-0">
              <button
                type="button"
                onClick={() => openContactModal("Contact - Team Section")}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent-secondary px-5 py-2.5 text-sm font-bold text-white transition-transform duration-300 hover:scale-[1.02] sm:w-auto"
              >
                Send a Message
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#e2e8f0] px-5 py-2.5 text-sm font-semibold text-[#1e293b] transition-colors duration-300 hover:border-accent-secondary/40 hover:text-accent-secondary sm:w-auto"
              >
                Chat on WhatsApp
              </a>
              <a
                href={`mailto:${contactEmail}`}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#e2e8f0] px-5 py-2.5 text-sm font-semibold text-[#1e293b] transition-colors duration-300 hover:border-accent-secondary/40 hover:text-accent-secondary sm:w-auto"
              >
                <Mail className="h-4 w-4" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <FAQSection title="Contact Questions" list={contactFaq} />
    </>
  );
}
