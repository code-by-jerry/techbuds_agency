import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5">
      <Link
        href="/"
        className="inline-flex items-center gap-1 text-sm text-[#94a3b8] transition-colors hover:text-accent-secondary"
      >
        <Home size={14} />
        <span>Home</span>
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <span key={`${item.label}-${index}`} className="flex items-center gap-1.5">
            <ChevronRight size={14} className="text-[#cbd5e1]" aria-hidden />
            {isLast || !item.href ? (
              <span className="text-sm font-medium text-[#1e293b]">
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className="text-sm text-[#94a3b8] transition-colors hover:text-accent-secondary"
              >
                {item.label}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}
