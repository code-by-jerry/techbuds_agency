import Link from "next/link";
import { whatsappUrl } from "@/lib/contact";

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
              href="mailto:techbuds57@gmail.com"
              className="block transition-colors hover:text-accent-secondary"
            >
              techbuds57@gmail.com
            </a>
            <a
              href="tel:+919885394334"
              className="block transition-colors hover:text-accent-secondary"
            >
              +91 98853 94334
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
