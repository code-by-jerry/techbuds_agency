"use client";

import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContactModal } from "@/components/ContactModalProvider";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  if (href.startsWith("/#")) return false;
  return pathname === href || pathname.startsWith(`${href}/`);
}

const navUnderline =
  "relative py-1 after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[#F5202D] after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100";

function navLinkClass(
  pathname: string,
  href: string,
  scrolled: boolean,
  mobile = false,
) {
  const active = isActivePath(pathname, href);

  if (mobile) {
    if (scrolled) {
      return `block rounded-2xl px-4 py-3 text-sm font-medium transition-colors ${
        active
          ? "bg-accent-secondary/10 text-[#1e293b]"
          : "text-[#64748b] hover:bg-[#f1f5f9] hover:text-[#1e293b]"
      }`;
    }

    return `block rounded-2xl px-4 py-3 text-sm font-medium transition-colors ${
      active
        ? "bg-white/10 text-white"
        : "text-secondary hover:bg-white/5 hover:text-white"
    }`;
  }

  if (scrolled) {
    return `${navUnderline} text-sm font-medium transition-colors hover:!text-[#1e293b] ${
      active ? "!text-[#1e293b] after:scale-x-100" : "!text-[#64748b]"
    }`;
  }

  return `${navUnderline} text-sm font-medium transition-colors hover:!text-white ${
    active ? "!text-white after:scale-x-100" : "!text-secondary"
  }`;
}

function GetQuoteButton({ scrolled }: { scrolled: boolean }) {
  const { openContactModal } = useContactModal();

  return (
    <button
      type="button"
      onClick={() => openContactModal("Navbar - Get Quote")}
      className={`quote-btn-attention relative inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-300 ${
        scrolled
          ? "border border-accent-secondary bg-accent-secondary !text-white hover:!text-white"
          : "border border-accent-secondary bg-accent-secondary/10 !text-secondary hover:border-accent-secondary hover:bg-accent-secondary hover:!text-white"
      }`}
    >
      <Phone size={16} className="quote-btn-icon relative z-10" />
      <span className="relative z-10">Get Quote</span>
    </button>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { openContactModal } = useContactModal();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => {
    setMenuOpen(false);
    setScrolled(window.scrollY > 20);
  }, [pathname]);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[#e2e8f0] bg-white shadow-[0_4px_20px_rgba(15,23,42,0.08)]"
          : "border-b border-white/10 bg-white/[0.04] backdrop-blur-2xl"
      }`}
    >
      <div className="mx-auto flex min-h-[var(--site-navbar-height)] max-w-7xl items-center px-4 py-1.5 md:px-6 md:py-2">
        <Link href="/" className="inline-flex shrink-0 items-center gap-3">
          <img
            src={scrolled ? "/logo_old.png" : "/logo.png"}
            alt="Tech Buds"
            className="h-10 w-auto rounded-lg transition-opacity duration-300"
          />
        </Link>

        <div className="hidden flex-1 items-center justify-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={navLinkClass(pathname, item.href, scrolled)}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden shrink-0 md:block">
          <GetQuoteButton scrolled={scrolled} />
        </div>

        <button
          type="button"
          className={`ml-auto inline-flex h-11 w-11 items-center justify-center rounded-full border shadow-sm transition-colors duration-300 md:hidden ${
            scrolled
              ? "border-[#e2e8f0] bg-white text-[#1e293b]"
              : "border-white/20 bg-surface text-white"
          }`}
          aria-label="Toggle navigation menu"
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div
        className={`md:hidden ${menuOpen ? "block" : "hidden"} border-t px-4 py-4 transition-colors duration-300 ${
          scrolled
            ? "border-[#e2e8f0] bg-white"
            : "border-custom bg-surface/95"
        }`}
      >
        <div className="space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={navLinkClass(pathname, item.href, scrolled, true)}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <button
            type="button"
            className={`quote-btn-attention mt-2 flex w-full items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold transition-colors ${
              scrolled
                ? "border border-accent-secondary bg-accent-secondary !text-white"
                : "border border-accent-secondary bg-accent-secondary/10 !text-secondary hover:bg-accent-secondary hover:!text-white"
            }`}
            onClick={() => {
              setMenuOpen(false);
              openContactModal("Navbar Mobile - Get Quote");
            }}
          >
            <Phone size={16} className="quote-btn-icon relative z-10" />
            <span className="relative z-10">Get Quote</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
