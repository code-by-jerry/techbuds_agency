import Link from "next/link";
import { Mail, MessageCircle, Phone } from "lucide-react";
import {
  contactEmail,
  contactPhone,
  contactPhoneHref,
  socialLinks,
  whatsappUrl,
} from "@/lib/contact";

const PAGE_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const SERVICE_LINKS = [
  { href: "/services/custom-web-solutions", label: "Web Development" },
  { href: "/services/mobile-applications", label: "Mobile Apps" },
  { href: "/services/business-platforms", label: "Business Platforms" },
  { href: "/services/ecommerce-digital", label: "Ecommerce" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#1e293b] bg-[#081124]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-2 md:px-12 lg:grid-cols-12 lg:gap-12">
        <div className="space-y-4 lg:col-span-4">
          <Link href="/" className="inline-flex items-center">
            <img
              src="/logo.png"
              alt="TechBuds"
              className="h-11 w-auto rounded-lg"
            />
          </Link>
          <p className="max-w-sm text-sm leading-relaxed text-[#94a3b8]">
            TechBuds builds websites, apps, brands, and business platforms that
            help modern companies grow with clean design and scalable
            technology.
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {socialLinks.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-[#94a3b8] transition-colors hover:border-accent-secondary/40 hover:text-accent-secondary"
                aria-label={social.label}
              >
                {social.icon === "linkedin" ? (
                  <img
                    src="https://ik.imagekit.io/codebyjerry/techbuds/linkedin-linked-in-svgrepo-com.svg"
                    alt=""
                    className="h-4 w-4 opacity-80"
                    style={{ filter: "brightness(0) invert(1)" }}
                  />
                ) : (
                  <svg
                    className="h-4 w-4 opacity-80"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                  >
                    <path d="M22.3,8.4c-0.8,0-1.4,0.6-1.4,1.4c0,0.8,0.6,1.4,1.4,1.4c0.8,0,1.4-0.6,1.4-1.4C23.7,9,23.1,8.4,22.3,8.4z" />
                    <path d="M16,10.2c-3.3,0-5.9,2.7-5.9,5.9s2.7,5.9,5.9,5.9s5.9-2.7,5.9-5.9S19.3,10.2,16,10.2z M16,19.9c-2.1,0-3.8-1.7-3.8-3.8 c0-2.1,1.7-3.8,3.8-3.8c2.1,0,3.8,1.7,3.8,3.8C19.8,18.2,18.1,19.9,16,19.9z" />
                    <path d="M20.8,4h-9.5C7.2,4,4,7.2,4,11.2v9.5c0,4,3.2,7.2,7.2,7.2h9.5c4,0,7.2-3.2,7.2-7.2v-9.5C28,7.2,24.8,4,20.8,4z M25.7,20.8 c0,2.7-2.2,5-5,5h-9.5c-2.7,0-5-2.2-5-5v-9.5c0-2.7,2.2-5,5-5h9.5c2.7,0,5,2.2,5,5V20.8z" />
                  </svg>
                )}
              </a>
            ))}
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:col-span-4">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f9fafb]">
              Quick Links
            </h2>
            <ul className="mt-4 space-y-2.5">
              {PAGE_LINKS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#94a3b8] transition-colors hover:text-[#f9fafb]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f9fafb]">
              Services
            </h2>
            <ul className="mt-4 space-y-2.5">
              {SERVICE_LINKS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#94a3b8] transition-colors hover:text-[#f9fafb]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-sm font-medium text-accent-secondary transition-colors hover:text-accent-secondary/80"
                >
                  View all services →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="lg:col-span-4">
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f9fafb]">
            Get in Touch
          </h2>
          <ul className="mt-4 space-y-3">
            <li>
              <a
                href={`mailto:${contactEmail}`}
                className="group flex items-start gap-3 text-sm text-[#94a3b8] transition-colors hover:text-[#f9fafb]"
              >
                <Mail
                  size={16}
                  className="mt-0.5 shrink-0 text-accent-secondary"
                />
                <span>{contactEmail}</span>
              </a>
            </li>
            <li>
              <a
                href={contactPhoneHref}
                className="group flex items-start gap-3 text-sm text-[#94a3b8] transition-colors hover:text-[#f9fafb]"
              >
                <Phone
                  size={16}
                  className="mt-0.5 shrink-0 text-accent-secondary"
                />
                <span>{contactPhone}</span>
              </a>
            </li>
            <li>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 text-sm text-[#94a3b8] transition-colors hover:text-[#f9fafb]"
              >
                <MessageCircle
                  size={16}
                  className="mt-0.5 shrink-0 text-accent-secondary"
                />
                <span>WhatsApp: +91 70929 36243</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-center text-xs text-[#64748b] md:flex-row md:px-12 md:text-left">
          <p>© 2026 TechBuds. All rights reserved.</p>
          <p>Designed for excellence.</p>
        </div>
      </div>
    </footer>
  );
}
