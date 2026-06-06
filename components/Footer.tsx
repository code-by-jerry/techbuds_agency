import Link from "next/link";
import { contactEmail, contactPhone, contactPhoneHref, socialLinks, whatsappUrl } from "@/lib/contact";

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-custom px-6 py-12">
      <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-3">
        <div className="space-y-4">
          <Link href="/" className="inline-flex items-center">
            <img
              src="/logo.png"
              alt="TechBuds"
              className="h-12 w-auto rounded-lg"
            />
          </Link>
          <p className="text-secondary text-sm leading-relaxed max-w-xs transition-colors">
            TechBuds builds websites, apps, brands, and business platforms that
            help modern companies grow with clean design and scalable
            technology.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-primary font-poppins">
            Quick Links
          </h2>
          <ul className="text-secondary text-sm space-y-2">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/services", label: "Services" },
              { href: "/portfolio", label: "Portfolio" },
              { href: "/blog", label: "Blog" },
              { href: "/contact", label: "Contact" },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition-colors hover:text-accent-secondary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-primary font-poppins">
            Contact
          </h2>
          <div className="text-secondary text-sm space-y-2">
            <a
              href={`mailto:${contactEmail}`}
              className="block transition-colors hover:text-accent-secondary"
            >
              {contactEmail}
            </a>
            <a
              href={contactPhoneHref}
              className="block transition-colors hover:text-accent-secondary"
            >
              {contactPhone}
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="block transition-colors hover:text-accent-secondary"
            >
              WhatsApp: +91 70929 36243
            </a>
          </div>

          <div className="pt-3">
            <h3 className="text-sm font-semibold text-primary">Social Media</h3>
            <div className="mt-3 flex flex-wrap gap-3 text-sm">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-3 text-secondary transition-colors hover:border-accent-secondary/40 hover:text-accent-secondary"
                  aria-label={social.label}
                >
                  {social.icon === "linkedin" ? (
                    <img
                      src="https://ik.imagekit.io/codebyjerry/techbuds/linkedin-linked-in-svgrepo-com.svg"
                      alt=""
                      className="h-5 w-5"
                      style={{ filter: "brightness(0) invert(1)" }}
                    />
                  ) : (
                    <svg
                      className="h-5 w-5"
                      fill="#000000"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ filter: "brightness(0) invert(1)" }}
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
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-secondary/5 mt-12 pt-8">
        <p className="text-center text-secondary/60 text-xs">
          © 2026 TechBuds. All rights reserved. Designed for excellence.
        </p>
      </div>
    </footer>
  );
}
