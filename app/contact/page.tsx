import ContactPageContent from "@/components/ContactPageContent";
import PageHeroBanner from "@/components/PageHeroBanner";
import { PAGE_BANNERS } from "@/lib/page-banners";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-brand">
      <PageHeroBanner {...PAGE_BANNERS.contact} />
      <ContactPageContent />
    </div>
  );
}
