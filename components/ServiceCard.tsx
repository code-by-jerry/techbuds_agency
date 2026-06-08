import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { ServiceItem } from "@/lib/services";

type ServiceCardProps = {
  service: ServiceItem;
  theme?: "light" | "dark";
  index?: number;
  animated?: boolean;
  compact?: boolean;
};

export default function ServiceCard({
  service,
  theme = "dark",
  index = 0,
  animated = false,
  compact = false,
}: ServiceCardProps) {
  const isLight = theme === "light";
  const previewDetails = service.details.slice(0, 3);

  return (
    <Link
      href={`/services/${service.slug}`}
      className={`group block h-full ${animated ? "service-card-enter" : ""}`}
      style={animated ? { animationDelay: `${120 + index * 90}ms` } : undefined}
    >
      <div
        className={`relative flex h-full flex-col overflow-hidden rounded-2xl border transition-all duration-500 hover:-translate-y-2 ${
          isLight
            ? "border-[#e2e8f0] bg-white shadow-[0_10px_40px_rgba(15,23,42,0.06)] hover:border-accent-secondary/35 hover:shadow-[0_24px_60px_rgba(245,32,45,0.12)]"
            : "border-white/5 bg-[#0b1226] shadow-sm hover:border-accent-secondary/30 hover:shadow-accent-secondary/5"
        }`}
      >
        <div className="absolute left-0 top-0 h-1 w-0 bg-accent-secondary transition-all duration-500 group-hover:w-full" />

        <div
          className={`relative flex w-full shrink-0 items-center justify-center overflow-hidden ${
            compact
              ? "h-40 sm:h-44 md:h-48"
              : "h-[200px] sm:h-[220px] md:h-[230px]"
          } ${
            isLight
              ? "bg-gradient-to-br from-[#f8fafc] via-white to-[#fff5f5]"
              : "bg-[#0b1226]"
          }`}
        >
          <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(245,32,45,0.1),transparent_65%)]" />
          </div>

          {isLight && animated && !compact ? (
            <span className="pointer-events-none absolute right-4 top-3 text-5xl font-bold leading-none text-[#f1f5f9] transition-colors duration-500 group-hover:text-accent-secondary/15">
              {String(index + 1).padStart(2, "0")}
            </span>
          ) : null}

          <img
            src={service.src}
            alt={service.label}
            className={`relative z-10 w-auto object-contain transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-0.5 ${
              compact
                ? "h-[92%] max-w-[90%]"
                : "h-full max-w-[88%] group-hover:scale-110 group-hover:-translate-y-1"
            } ${animated && isLight && !compact ? "service-image-float" : ""}`}
            style={
              animated && isLight
                ? { animationDelay: `${index * 0.4}s` }
                : undefined
            }
          />
        </div>

        <div
          className={`flex flex-1 flex-col ${compact ? "px-4 py-4 md:px-5 md:py-5" : "px-5 py-5 md:px-6 md:py-6"}`}
        >
          <div className="flex items-start justify-between gap-3">
            <h3
              className={`font-bold leading-snug transition-colors duration-300 group-hover:text-accent-secondary ${
                compact ? "text-sm md:text-base" : "text-base md:text-lg"
              } ${isLight ? "text-[#1e293b]" : "text-primary"}`}
            >
              {service.label}
            </h3>
            <span
              className={`inline-flex shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                compact ? "h-7 w-7" : "h-8 w-8"
              } ${
                isLight
                  ? "bg-[#f1f5f9] text-accent-secondary group-hover:bg-accent-secondary group-hover:text-white"
                  : "bg-white/5 text-accent-secondary group-hover:bg-accent-secondary group-hover:text-white"
              }`}
            >
              <ArrowUpRight
                size={compact ? 14 : 16}
                className="transition-transform duration-300 group-hover:rotate-12"
              />
            </span>
          </div>

          {compact ? (
            <>
              <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-[#64748b] md:text-sm">
                {service.summary}
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {previewDetails.map((detail) => (
                  <span
                    key={detail}
                    className="rounded-full bg-[#f8fafc] px-2 py-0.5 text-[10px] font-medium text-[#64748b] ring-1 ring-[#e2e8f0]"
                  >
                    {detail}
                  </span>
                ))}
              </div>
            </>
          ) : (
            <ul
              className={`mt-4 space-y-2.5 border-t pt-4 ${
                isLight ? "border-[#e2e8f0]" : "border-white/10"
              }`}
            >
              {service.details.map((detail, detailIndex) => (
                <li
                  key={detail}
                  className={`flex items-start gap-2.5 text-xs leading-snug transition-all duration-300 md:text-[13px] ${
                    isLight ? "text-[#64748b]" : "text-secondary"
                  }`}
                  style={
                    animated
                      ? { transitionDelay: `${detailIndex * 30}ms` }
                      : undefined
                  }
                >
                  <span className="mt-1.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-accent-secondary/10 transition-colors duration-300 group-hover:bg-accent-secondary/20">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-secondary" />
                  </span>
                  <span className="transition-colors duration-300 group-hover:text-[#475569]">
                    {detail}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </Link>
  );
}
