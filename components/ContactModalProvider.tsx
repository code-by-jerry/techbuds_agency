"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import {
  ArrowRight,
  AtSign,
  MessageSquare,
  PhoneIcon,
  User,
  X,
} from "lucide-react";
import { submitStaticForm } from "@/lib/staticForms";

type ContactModalContextValue = {
  openContactModal: (source?: string) => void;
  closeContactModal: () => void;
};

const ContactModalContext = createContext<ContactModalContextValue | null>(null);

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export function useContactModal() {
  const context = useContext(ContactModalContext);

  if (!context) {
    throw new Error("useContactModal must be used within ContactModalProvider");
  }

  return context;
}

function ContactModal({
  open,
  source,
  onClose,
}: {
  open: boolean;
  source: string;
  onClose: () => void;
}) {
  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) {
      setFormData(initialFormData);
      setStatus("idle");
    }
  }, [open]);

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
        source,
      });
      setFormData(initialFormData);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0f172a]/45 p-4 backdrop-blur-md sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative max-h-[calc(100vh-2rem)] w-full max-w-xl overflow-hidden rounded-3xl border border-white/70 bg-white/75 shadow-[0_24px_80px_rgba(15,23,42,0.18)] backdrop-blur-2xl"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Contact form"
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/90 via-white/70 to-accent-secondary/[0.06]" />

        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#e2e8f0] bg-white/80 text-[#64748b] transition-colors hover:border-accent-secondary/30 hover:text-accent-secondary"
          aria-label="Close contact form"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="scrollbar-hidden relative max-h-[calc(100vh-2rem)] overflow-y-auto p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent-secondary">
            Get in touch
          </p>
          <h2 className="mt-2 text-2xl font-bold text-[#1e293b] sm:text-3xl">
            Start your project with us
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-[#64748b]">
            Share your requirements and our team will reach out with a plan,
            timeline, and estimate.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-xs font-semibold text-[#475569]">
                  Full Name
                </span>
                <div className="mt-1.5 flex items-center gap-2.5 rounded-xl border border-[#e2e8f0] bg-white/70 px-3.5 py-2.5 transition-colors focus-within:border-accent-secondary/50">
                  <User className="h-4 w-4 text-[#94a3b8]" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="w-full bg-transparent text-sm text-[#1e293b] outline-none placeholder:text-[#94a3b8]"
                  />
                </div>
              </label>

              <label className="block">
                <span className="text-xs font-semibold text-[#475569]">
                  Email Address
                </span>
                <div className="mt-1.5 flex items-center gap-2.5 rounded-xl border border-[#e2e8f0] bg-white/70 px-3.5 py-2.5 transition-colors focus-within:border-accent-secondary/50">
                  <AtSign className="h-4 w-4 text-[#94a3b8]" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    className="w-full bg-transparent text-sm text-[#1e293b] outline-none placeholder:text-[#94a3b8]"
                  />
                </div>
              </label>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-xs font-semibold text-[#475569]">
                  Phone
                </span>
                <div className="mt-1.5 flex items-center gap-2.5 rounded-xl border border-[#e2e8f0] bg-white/70 px-3.5 py-2.5 transition-colors focus-within:border-accent-secondary/50">
                  <PhoneIcon className="h-4 w-4 text-[#94a3b8]" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 94913 12257"
                    className="w-full bg-transparent text-sm text-[#1e293b] outline-none placeholder:text-[#94a3b8]"
                  />
                </div>
              </label>

              <label className="block">
                <span className="text-xs font-semibold text-[#475569]">
                  Project Subject
                </span>
                <div className="mt-1.5 flex items-center gap-2.5 rounded-xl border border-[#e2e8f0] bg-white/70 px-3.5 py-2.5 transition-colors focus-within:border-accent-secondary/50">
                  <MessageSquare className="h-4 w-4 text-[#94a3b8]" />
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project title"
                    className="w-full bg-transparent text-sm text-[#1e293b] outline-none placeholder:text-[#94a3b8]"
                  />
                </div>
              </label>
            </div>

            <label className="block">
              <span className="text-xs font-semibold text-[#475569]">
                Message
              </span>
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project"
                required
                className="mt-1.5 w-full resize-none rounded-xl border border-[#e2e8f0] bg-white/70 px-3.5 py-2.5 text-sm text-[#1e293b] outline-none placeholder:text-[#94a3b8] transition-colors focus:border-accent-secondary/50"
              />
            </label>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent-secondary px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:shadow-[0_12px_32px_rgba(245,32,45,0.28)] disabled:opacity-70"
            >
              {status === "submitting" ? "Sending..." : "Send Request"}
              <ArrowRight className="h-4 w-4" />
            </button>

            {status === "success" ? (
              <p className="text-center text-sm font-semibold text-emerald-600">
                Thanks. Your request has been sent successfully.
              </p>
            ) : null}

            {status === "error" ? (
              <p className="text-center text-sm font-semibold text-accent-secondary">
                Something went wrong. Please try again.
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </div>
  );
}

export default function ContactModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [source, setSource] = useState("Website");

  const openContactModal = useCallback((nextSource = "Website") => {
    setSource(nextSource);
    setOpen(true);
  }, []);

  const closeContactModal = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <ContactModalContext.Provider value={{ openContactModal, closeContactModal }}>
      {children}
      <ContactModal open={open} source={source} onClose={closeContactModal} />
    </ContactModalContext.Provider>
  );
}
