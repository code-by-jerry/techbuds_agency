import type { Metadata } from "next";
import { PAGE_BANNERS } from "@/lib/page-banners";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact TechBuds for custom websites, mobile apps, ecommerce platforms, branding, SEO, and scalable digital product development.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact TechBuds",
    description:
      "Start your project with TechBuds. Reach us by email, phone, WhatsApp, or the contact form.",
    url: "/contact",
    images: [
      {
        url: PAGE_BANNERS.contact.image,
        width: 1200,
        height: 630,
        alt: "Contact TechBuds",
      },
    ],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
