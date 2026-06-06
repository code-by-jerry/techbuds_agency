import { Mail, Phone } from "lucide-react";
import {
  contactEmail,
  contactPhone,
  contactPhoneHref,
  socialLinks,
} from "@/lib/contact";

function SocialIcon({ type }: { type: "linkedin" | "instagram" }) {
  if (type === "linkedin") {
    return (
      <img
        src="https://ik.imagekit.io/codebyjerry/techbuds/linkedin-linked-in-svgrepo-com.svg"
        alt=""
        className="h-4 w-4"
        style={{ filter: "brightness(0) invert(1)" }}
      />
    );
  }

  return (
    <svg
      className="h-4 w-4 text-white"
      fill="currentColor"
      viewBox="0 0 32 32"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M22.3,8.4c-0.8,0-1.4,0.6-1.4,1.4c0,0.8,0.6,1.4,1.4,1.4c0.8,0,1.4-0.6,1.4-1.4C23.7,9,23.1,8.4,22.3,8.4z" />
      <path d="M16,10.2c-3.3,0-5.9,2.7-5.9,5.9s2.7,5.9,5.9,5.9s5.9-2.7,5.9-5.9S19.3,10.2,16,10.2z M16,19.9c-2.1,0-3.8-1.7-3.8-3.8 c0-2.1,1.7-3.8,3.8-3.8c2.1,0,3.8,1.7,3.8,3.8C19.8,18.2,18.1,19.9,16,19.9z" />
      <path d="M20.8,4h-9.5C7.2,4,4,7.2,4,11.2v9.5c0,4,3.2,7.2,7.2,7.2h9.5c4,0,7.2-3.2,7.2-7.2v-9.5C28,7.2,24.8,4,20.8,4z M25.7,20.8 c0,2.7-2.2,5-5,5h-9.5c-2.7,0-5-2.2-5-5v-9.5c0-2.7,2.2-5,5-5h9.5c2.7,0,5,2.2,5,5V20.8z" />
    </svg>
  );
}

export default function Header() {
  return (
    <div className="relative z-[60] h-[var(--site-header-height)] bg-[#F5202D] shadow-[0_2px_10px_rgba(0,0,0,0.18)]">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between gap-2 px-3 sm:px-4 md:gap-3 md:px-6">
        <div className="flex min-w-0 items-center gap-2 sm:gap-4">
          <a
            href={contactPhoneHref}
            className="inline-flex shrink-0 items-center gap-1.5 text-xs font-bold leading-none tracking-wide !text-white transition-opacity hover:!text-white hover:opacity-90 md:text-[13px]"
          >
            <Phone
              size={14}
              className="shrink-0 !text-white"
              strokeWidth={2.5}
            />
            <span className="whitespace-nowrap !text-white">{contactPhone}</span>
          </a>

          <span className="hidden h-3 w-px shrink-0 bg-white/35 sm:block" />

          <a
            href={`mailto:${contactEmail}`}
            className="hidden min-w-0 items-center gap-1.5 text-xs font-bold leading-none tracking-wide !text-white transition-opacity hover:!text-white hover:opacity-90 sm:inline-flex md:text-[13px]"
          >
            <Mail size={14} className="shrink-0 !text-white" strokeWidth={2.5} />
            <span className="truncate !text-white">{contactEmail}</span>
          </a>
        </div>

        <div className="flex shrink-0 items-center gap-1.5">
          {socialLinks.map((social) => (
            <a
              key={social.href}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              className="inline-flex h-6 w-6 items-center justify-center rounded-full !text-white transition-opacity hover:opacity-80 hover:!text-white md:h-7 md:w-7"
            >
              <SocialIcon type={social.icon} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
