"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/[0.04] backdrop-blur-2xl border-b border-white/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="inline-flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Tech Buds"
            className="h-10 w-auto rounded-lg"
          />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-secondary transition-colors hover:text-accent-secondary"
          >
            Home
          </Link>
          <Link
            href="/services"
            className="text-sm font-medium text-secondary transition-colors hover:text-accent-secondary"
          >
            Services
          </Link>
          <Link
            href="/portfolio"
            className="text-sm font-medium text-secondary transition-colors hover:text-accent-secondary"
          >
            Portfolio
          </Link>
          <Link
            href="/blog"
            className="text-sm font-medium text-secondary transition-colors hover:text-accent-secondary"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-accent-secondary bg-accent-secondary/10 px-4 py-2 text-sm font-semibold text-accent-secondary transition hover:bg-accent-secondary hover:text-white"
          >
            Contact
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-surface text-white shadow-sm md:hidden"
          aria-label="Toggle navigation menu"
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div
        className={`md:hidden ${menuOpen ? "block" : "hidden"} border-t border-custom bg-surface/95 px-6 py-4`}
      >
        <div className="space-y-3">
          <Link
            href="/"
            className="block rounded-2xl px-4 py-3 text-sm font-medium text-secondary transition-colors hover:bg-white/5 hover:text-accent-secondary"
          >
            Home
          </Link>
          <Link
            href="/services"
            className="block rounded-2xl px-4 py-3 text-sm font-medium text-secondary transition-colors hover:bg-white/5 hover:text-accent-secondary"
          >
            Services
          </Link>
          <Link
            href="/portfolio"
            className="block rounded-2xl px-4 py-3 text-sm font-medium text-secondary transition-colors hover:bg-white/5 hover:text-accent-secondary"
          >
            Portfolio
          </Link>
          <Link
            href="/blog"
            className="block rounded-2xl px-4 py-3 text-sm font-medium text-secondary transition-colors hover:bg-white/5 hover:text-accent-secondary"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="block rounded-2xl border border-accent-secondary bg-accent-secondary/10 px-4 py-3 text-sm font-semibold text-accent-secondary transition hover:bg-accent-secondary hover:text-white"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
