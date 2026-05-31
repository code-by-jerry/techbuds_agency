import { Mail, Phone } from "lucide-react";

export default function Header() {
  return (
    <div className="bg-[#F5202D] text-white text-xs md:text-sm px-6 py-3">
      <div className="mx-auto flex max-w-7xl flex-row flex-wrap items-center justify-center gap-4">
        <span className="inline-flex items-center gap-2 text-white">
          <Phone size={14} className="text-white" />
          +91 94913 12257
        </span>
        <span className="inline-flex items-center gap-2 text-white">
          <Mail size={14} className="text-white" />
          techbuds57@gmail.com
        </span>
      </div>
    </div>
  );
}
