"use client";

import { useContactModal } from "@/components/ContactModalProvider";

type ContactModalTriggerProps = {
  children: React.ReactNode;
  source?: string;
  className?: string;
};

export default function ContactModalTrigger({
  children,
  source = "Website CTA",
  className,
}: ContactModalTriggerProps) {
  const { openContactModal } = useContactModal();

  return (
    <button
      type="button"
      onClick={() => openContactModal(source)}
      className={className}
    >
      {children}
    </button>
  );
}
