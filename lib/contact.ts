const whatsappMessage =
  "Hi TechBuds, I am interested in your digital solutions. Please contact me to discuss my project.";

export const contactEmail = "info@techbuds.online";
export const contactPhone = "+91 94913 12257";
export const contactPhoneHref = "tel:+919491312257";

export const socialLinks = [
  {
    href: "https://www.linkedin.com/in/techbuds-online-0a36a0395",
    label: "LinkedIn",
    icon: "linkedin" as const,
  },
  {
    href: "https://www.instagram.com/techbuds_online_?igsh=ODVnNTlsbWlqanRn",
    label: "Instagram",
    icon: "instagram" as const,
  },
];

export const whatsappUrl = `https://wa.me/917092936243?text=${encodeURIComponent(
  whatsappMessage,
)}`;
