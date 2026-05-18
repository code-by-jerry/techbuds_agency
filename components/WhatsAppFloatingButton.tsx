import { whatsappUrl } from "@/lib/contact";

export default function WhatsAppFloatingButton() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with TechBuds on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-16 w-16 items-center justify-center rounded-full border border-red-300/40 bg-gradient-to-br from-red-500 to-[#ff2f45] text-white shadow-[0_0_0_6px_rgba(255,90,95,0.08),0_18px_45px_rgba(255,47,69,0.35)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_0_0_8px_rgba(255,90,95,0.12),0_22px_55px_rgba(255,47,69,0.48)]"
    >
      <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 transition-opacity duration-300 hover:opacity-100" />
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="relative h-8 w-8"
        fill="currentColor"
      >
        <path d="M19.05 4.91A9.8 9.8 0 0 0 12.04 2a9.86 9.86 0 0 0-8.49 14.86L2.05 22l5.28-1.39a9.83 9.83 0 0 0 4.7 1.2h.01a9.86 9.86 0 0 0 7.01-16.9Zm-7.01 15.22h-.01a8.17 8.17 0 0 1-4.17-1.14l-.3-.18-3.13.82.84-3.05-.2-.31A8.18 8.18 0 1 1 20.22 12a8.19 8.19 0 0 1-8.18 8.13Zm4.49-6.12c-.25-.12-1.46-.72-1.68-.8-.23-.08-.39-.12-.56.12-.16.25-.64.8-.78.96-.14.16-.29.18-.54.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.23-1.46-1.37-1.71-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.41-.56-.42h-.48c-.16 0-.43.06-.66.31-.23.25-.86.84-.86 2.05s.88 2.38 1 2.54c.12.16 1.73 2.64 4.2 3.7.59.25 1.04.4 1.4.51.59.19 1.12.16 1.55.1.47-.07 1.46-.6 1.66-1.18.21-.58.21-1.08.14-1.18-.06-.1-.22-.16-.47-.28Z" />
      </svg>
    </a>
  );
}
