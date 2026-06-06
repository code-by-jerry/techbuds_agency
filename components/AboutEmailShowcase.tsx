import { ArrowUpRight } from "lucide-react";
import { contactEmail } from "@/lib/contact";

const MARQUEE_ITEMS = Array.from({ length: 6 }, (_, index) => index);

const FLOATING_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=400&fit=crop",
    alt: "Team collaboration",
    className: "left-[3%] top-[18%] h-14 w-14 md:left-[5%] md:top-[20%] md:h-20 md:w-20 lg:h-24 lg:w-24",
    delay: "0s",
  },
  {
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=400&fit=crop",
    alt: "Developers at work",
    className: "left-[22%] bottom-[18%] h-12 w-12 md:left-[24%] md:bottom-[20%] md:h-[4.5rem] md:w-[4.5rem] lg:h-20 lg:w-20",
    delay: "0.9s",
  },
  {
    src: "https://ik.imagekit.io/codebyjerry/techbuds/about-techbuds.png",
    alt: "TechBuds team",
    className: "left-[46%] top-[12%] h-14 w-14 md:h-[4.75rem] md:w-[4.75rem] lg:h-24 lg:w-24",
    delay: "1.6s",
  },
  {
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=400&fit=crop",
    alt: "Laptop workspace",
    className: "right-[24%] bottom-[16%] h-12 w-12 md:right-[26%] md:bottom-[18%] md:h-[4.5rem] md:w-[4.5rem] lg:h-20 lg:w-20",
    delay: "2.3s",
  },
  {
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    alt: "Professional portrait",
    className: "right-[4%] top-[14%] h-14 w-14 md:right-[6%] md:top-[16%] md:h-20 md:w-20 lg:h-24 lg:w-24",
    delay: "3s",
  },
];

function MarqueeBlock() {
  return (
    <span className="flex shrink-0 items-center gap-6 px-6 md:gap-10 md:px-10">
      <ArrowUpRight
        strokeWidth={2.5}
        className="hidden h-12 w-12 shrink-0 text-accent-secondary md:block lg:h-[4.5rem] lg:w-[4.5rem]"
        aria-hidden
      />
      <span className="whitespace-nowrap text-[clamp(2.75rem,9vw,6.5rem)] font-black uppercase leading-none tracking-[-0.03em] text-accent-secondary">
        {contactEmail}
      </span>
      <ArrowUpRight
        size={40}
        strokeWidth={2.5}
        className="shrink-0 text-accent-secondary md:hidden"
        aria-hidden
      />
    </span>
  );
}

export default function AboutEmailShowcase() {
  return (
    <section className="relative overflow-hidden border-t border-custom bg-[#081124] py-14 md:py-20">
      {FLOATING_IMAGES.map((image) => (
        <div
          key={image.alt}
          className={`about-email-float pointer-events-none absolute z-20 hidden rounded-full border-2 border-accent-secondary/20 sm:block ${image.className}`}
          style={{ animationDelay: image.delay }}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="h-full w-full rounded-full object-cover"
          />
        </div>
      ))}

      <a
        href={`mailto:${contactEmail}`}
        className="group relative z-10 block"
        aria-label={`Contact TechBuds at ${contactEmail}`}
      >
        <div className="about-email-marquee-wrapper">
          <div className="about-email-marquee-track group-hover:[animation-play-state:paused]">
            {MARQUEE_ITEMS.map((item) => (
              <MarqueeBlock key={item} />
            ))}
            {MARQUEE_ITEMS.map((item) => (
              <MarqueeBlock key={`dup-${item}`} />
            ))}
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-secondary/75 transition-colors duration-300 group-hover:text-accent-secondary md:text-base">
          Have a project in mind?{" "}
          <span className="font-semibold text-primary">Contact us anytime.</span>
        </p>
      </a>
    </section>
  );
}
