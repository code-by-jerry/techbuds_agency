import { ArrowUpRight } from "lucide-react";

type ServiceTitleMarqueeProps = {
  outline: string;
  bold: string;
};

function MarqueeGroup({ outline, bold }: ServiceTitleMarqueeProps) {
  return (
    <div className="flex shrink-0 items-center gap-6 px-6 md:gap-10 md:px-10">
      <span className="service-marquee-outline">{outline}</span>
      <ArrowUpRight
        className="shrink-0 text-accent-secondary"
        size={44}
        strokeWidth={2.5}
        aria-hidden
      />
      <span className="service-marquee-fill">{bold}</span>
      <ArrowUpRight
        className="shrink-0 text-accent-secondary"
        size={44}
        strokeWidth={2.5}
        aria-hidden
      />
    </div>
  );
}

export default function ServiceTitleMarquee({
  outline,
  bold,
}: ServiceTitleMarqueeProps) {
  return (
    <section className="overflow-hidden border-b border-white/10 bg-[#081124] py-6 md:py-8">
      <div className="service-title-marquee-wrapper">
        <div className="service-title-marquee-track">
          <MarqueeGroup outline={outline} bold={bold} />
          <MarqueeGroup outline={outline} bold={bold} />
          <MarqueeGroup outline={outline} bold={bold} />
          <MarqueeGroup outline={outline} bold={bold} />
        </div>
      </div>
    </section>
  );
}
