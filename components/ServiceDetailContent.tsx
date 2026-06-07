"use client";

import Link from "next/link";
import {
  ArrowRight,
  Award,
  BarChart3,
  Bell,
  BookOpen,
  Briefcase,
  Building2,
  ClipboardList,
  Clock,
  Cloud,
  CreditCard,
  Eye,
  FileText,
  Gauge,
  Globe,
  HeartHandshake,
  Layers,
  LayoutDashboard,
  LineChart,
  Link as LinkIcon,
  MapPin,
  MonitorSmartphone,
  Package,
  Palette,
  PenTool,
  Plug,
  Search,
  Server,
  Settings,
  Shield,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Store,
  Target,
  TrendingUp,
  Users,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactModalTrigger from "@/components/ContactModalTrigger";
import ServiceTitleMarquee from "@/components/ServiceTitleMarquee";
import type { ServiceDetail } from "@/lib/service-details";

const DELIVER_MAP_BG =
  "https://ik.imagekit.io/codebyjerry/techbuds/map.png";

const ICON_MAP: Record<string, LucideIcon> = {
  sparkles: Sparkles,
  target: Target,
  palette: Palette,
  globe: Globe,
  "book-open": BookOpen,
  smartphone: Smartphone,
  briefcase: Briefcase,
  "building-2": Building2,
  zap: Zap,
  "layout-dashboard": LayoutDashboard,
  plug: Plug,
  "monitor-smartphone": MonitorSmartphone,
  search: Search,
  layers: Layers,
  "pen-tool": PenTool,
  cloud: Cloud,
  bell: Bell,
  wrench: Wrench,
  users: Users,
  settings: Settings,
  "bar-chart-3": BarChart3,
  shield: Shield,
  link: LinkIcon,
  server: Server,
  "file-text": FileText,
  gauge: Gauge,
  "map-pin": MapPin,
  "line-chart": LineChart,
  "shopping-bag": ShoppingBag,
  store: Store,
  "credit-card": CreditCard,
  package: Package,
  "trending-up": TrendingUp,
  eye: Eye,
  award: Award,
  "heart-handshake": HeartHandshake,
  clock: Clock,
  "clipboard-list": ClipboardList,
};

type ServiceDetailContentProps = {
  detail: ServiceDetail;
};

function ServiceIcon({ name, size = 20 }: { name: string; size?: number }) {
  const Icon = ICON_MAP[name] ?? Sparkles;
  return <Icon size={size} aria-hidden />;
}

export default function ServiceDetailContent({
  detail,
}: ServiceDetailContentProps) {
  const BadgeIcon = ICON_MAP[detail.icon] ?? Sparkles;

  return (
    <div className="bg-white">
      <section className="border-b border-[#e2e8f0]">
        <div className="mx-auto max-w-7xl px-6 py-8 md:px-12 md:py-10">
          <Breadcrumbs
            items={[
              { label: "Services", href: "/services" },
              { label: detail.label },
            ]}
          />

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-accent-secondary/20 bg-accent-secondary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent-secondary">
                <BadgeIcon size={14} />
                {detail.label}
              </span>

              <h1 className="mt-5 text-3xl font-bold leading-tight text-[#1e293b] md:text-4xl lg:text-5xl">
                {detail.title}{" "}
                <span className="text-accent-secondary">{detail.titleAccent}</span>
              </h1>
              <div className="mt-4 h-0.5 w-16 rounded-full bg-accent-secondary" />

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#475569] md:text-lg">
                {detail.intro}
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <ContactModalTrigger
                  source={`${detail.label} Page`}
                  className="inline-flex items-center gap-2 rounded-full bg-accent-secondary px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(245,32,45,0.28)] transition-transform hover:-translate-y-0.5"
                >
                  Get a Free Quote
                  <ArrowRight size={16} />
                </ContactModalTrigger>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 rounded-full border border-[#e2e8f0] px-5 py-3 text-sm font-semibold text-[#475569] transition-colors hover:border-accent-secondary/30 hover:text-accent-secondary"
                >
                  View Our Work
                </Link>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <img
                src={detail.showcaseImage}
                alt={detail.label}
                className="max-h-[340px] w-full max-w-md object-contain drop-shadow-[0_24px_48px_rgba(15,23,42,0.12)] lg:max-h-[400px]"
              />
            </div>
          </div>
        </div>
      </section>

      <ServiceTitleMarquee
        outline={detail.marqueeOutline}
        bold={detail.marqueeBold}
      />

      <section className="relative overflow-hidden border-b border-custom bg-[#081124]">
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90"
          style={{ backgroundImage: `url(${DELIVER_MAP_BG})` }}
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-0 bg-[#081124]/35" aria-hidden />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#081124]/50 via-transparent to-[#081124]/60" aria-hidden />

        <div className="relative mx-auto max-w-7xl px-6 py-14 md:px-12 md:py-16">
          <div className="mb-10">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-accent-secondary">
              What We Deliver
            </p>
            <h2 className="text-2xl font-bold text-primary md:text-3xl">
              Core deliverables for{" "}
              <span className="text-accent-secondary">
                {detail.label.toLowerCase()}.
              </span>
            </h2>
            <div className="mt-3 h-0.5 w-16 rounded-full bg-accent-secondary" />
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {detail.deliverables.map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl bg-white/10 p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15 hover:shadow-[0_16px_40px_rgba(0,0,0,0.25)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-secondary text-white shadow-[0_8px_20px_rgba(245,32,45,0.35)]">
                  <ServiceIcon name={item.icon} />
                </div>
                <p className="mt-4 text-base font-bold text-primary">
                  {item.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-secondary">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#e2e8f0] bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14 md:px-12 md:py-16">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="overflow-hidden rounded-2xl bg-[#f8fafc] shadow-[0_16px_48px_rgba(15,23,42,0.08)]">
              <img
                src={detail.sectionImage}
                alt={`${detail.label} showcase`}
                className="h-full w-full object-cover"
              />
            </div>

            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-accent-secondary">
                Our Approach
              </p>
              <h2 className="text-2xl font-bold text-[#1e293b] md:text-3xl">
                From discovery to{" "}
                <span className="text-accent-secondary">launch.</span>
              </h2>
              <ol className="mt-6 space-y-3">
                {detail.approach.map((step, index) => (
                  <li
                    key={step}
                    className="flex items-center gap-4 rounded-2xl bg-[#f8fafc] px-5 py-4 transition-colors hover:bg-accent-secondary/[0.04]"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-secondary text-sm font-bold text-white shadow-[0_4px_14px_rgba(245,32,45,0.3)]">
                      {index + 1}
                    </span>
                    <span className="text-sm font-medium text-[#475569] md:text-base">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>

              {detail.technologies ? (
                <div className="mt-8">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-accent-secondary">
                    Technologies
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {detail.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-[#f1f5f9] px-3.5 py-1.5 text-sm font-medium text-[#475569]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-custom bg-[#081124]">
        <div className="pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-accent-secondary/[0.06] blur-3xl" />
        <div className="pointer-events-none absolute -right-16 bottom-0 h-56 w-56 rounded-full bg-white/[0.03] blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-14 md:px-12 md:py-16">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-accent-secondary">
            Why It Matters
          </p>
          <h2 className="text-2xl font-bold text-primary md:text-3xl">
            Outcomes that support{" "}
            <span className="text-accent-secondary">real growth.</span>
          </h2>
          <div className="mt-3 h-0.5 w-16 rounded-full bg-accent-secondary" />

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {detail.whyMatters.map((item) => (
              <li
                key={item.text}
                className="group flex items-start gap-4 rounded-2xl bg-white/[0.04] p-5 backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.07] hover:shadow-[0_12px_40px_rgba(0,0,0,0.25)]"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-secondary/15 text-accent-secondary transition-colors group-hover:bg-accent-secondary group-hover:text-white">
                  <ServiceIcon name={item.icon} />
                </div>
                <span className="pt-2 text-sm leading-relaxed text-secondary md:text-base">
                  {item.text}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <ContactModalTrigger
              source={`${detail.label} Why It Matters`}
              className="inline-flex items-center gap-2 rounded-full bg-accent-secondary px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(245,32,45,0.35)] transition-transform hover:-translate-y-0.5"
            >
              Start Your Project
              <ArrowRight size={16} />
            </ContactModalTrigger>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-secondary transition-colors hover:text-accent-secondary"
            >
              Explore all services
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-custom bg-[#081124]">
        <div className="pointer-events-none absolute left-1/2 top-0 h-48 w-96 -translate-x-1/2 rounded-full bg-accent-secondary/[0.04] blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-12 md:px-12 md:py-16">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-accent-secondary">
            Industries
          </p>
          <h2 className="text-2xl font-bold text-primary md:text-3xl">
            Sectors we{" "}
            <span className="text-accent-secondary">work with.</span>
          </h2>
          <div className="mt-3 h-0.5 w-16 rounded-full bg-accent-secondary" />
          <div className="mt-7 flex flex-wrap gap-3">
            {detail.industries.map((industry) => (
              <span
                key={industry}
                className="rounded-full bg-white/[0.06] px-5 py-2.5 text-sm font-semibold text-primary backdrop-blur-sm transition-colors hover:bg-accent-secondary/20 hover:text-white"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
