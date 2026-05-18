export default function Footer() {
  return (
    <footer className="bg-surface border-t border-custom px-6 py-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-primary font-poppins">
            Tech Agency
          </h2>
          <p className="text-secondary text-sm leading-relaxed max-w-xs transition-colors">
            We build websites, apps, and brands that grow your business. Minimal
            design, maximal impact.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-primary font-poppins">
            Quick Links
          </h2>
          <ul className="text-secondary text-sm space-y-2">
            <li className="hover:text-accent-primary transition-colors cursor-pointer">
              Home
            </li>
            <li className="hover:text-accent-primary transition-colors cursor-pointer">
              Services
            </li>
            <li className="hover:text-accent-primary transition-colors cursor-pointer">
              Portfolio
            </li>
            <li className="hover:text-accent-primary transition-colors cursor-pointer">
              Blog
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-primary font-poppins">
            Contact
          </h2>
          <div className="text-secondary text-sm space-y-2">
            <a
              href="mailto:techbuds57@gmail.com"
              className="block hover:text-accent-secondary transition-colors"
            >
              techbuds57@gmail.com
            </a>
            <a
              href="tel:+919885394334"
              className="block hover:text-accent-secondary transition-colors"
            >
              +91 98853 94334
            </a>
            <a
              href="https://wa.me/917092936243"
              target="_blank"
              rel="noreferrer"
              className="block hover:text-accent-secondary transition-colors"
            >
              WhatsApp: +91 70929 36243
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-secondary/5 mt-12 pt-8">
        <p className="text-center text-secondary/60 text-xs">
          © 2026 Tech Agency. All rights reserved. Designed for excellence.
        </p>
      </div>
    </footer>
  );
}
