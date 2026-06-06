import AboutEmailShowcase from "@/components/AboutEmailShowcase";
import AboutMissionVision from "@/components/AboutMissionVision";
import AboutSection from "@/components/AboutSection";
import AboutStoryStrip from "@/components/AboutStoryStrip";
import ContactModalCTA from "@/components/ContactModalCTA";
import PageHeroBanner from "@/components/PageHeroBanner";
import { PAGE_BANNERS } from "@/lib/page-banners";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about TechBuds — a digital solutions studio building websites, apps, brands, and business platforms for growing companies across India.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About TechBuds",
    description:
      "Strategy, design, and development partner for startups and growing businesses.",
    url: "/about",
    images: [
      {
        url: PAGE_BANNERS.about.image,
        width: 1200,
        height: 630,
        alt: "About TechBuds",
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <div className="bg-brand">
      <PageHeroBanner {...PAGE_BANNERS.about} />

      <AboutSection theme="light" variant="page" />

      <AboutStoryStrip />

      <AboutMissionVision />

      <AboutEmailShowcase />

      <ContactModalCTA />
    </div>
  );
}
