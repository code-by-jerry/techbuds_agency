import ContactModalCTA from "@/components/ContactModalCTA";
import FAQSection from "@/components/FAQSection";
import ServiceBlogPreview from "@/components/ServiceBlogPreview";
import ServiceDetailContent from "@/components/ServiceDetailContent";
import { getServiceDetail, SERVICE_DETAILS } from "@/lib/service-details";
import { getServiceFaq } from "@/lib/service-faqs";
import { serviceSeo } from "@/lib/seo";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return SERVICE_DETAILS.map((service) => ({
    service: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string }>;
}): Promise<Metadata> {
  const { service } = await params;
  const seo = serviceSeo.find((item) => item.slug === service);
  const detail = getServiceDetail(service);

  if (!seo || !detail) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: `/services/${seo.slug}`,
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: `/services/${seo.slug}`,
      type: "website",
      images: [
        {
          url: seo.image,
          width: 1200,
          height: 630,
          alt: detail.label,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [seo.image],
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  const { service } = await params;
  const detail = getServiceDetail(service);

  if (!detail) return notFound();

  const faq = getServiceFaq(service);

  return (
    <div className="min-h-screen bg-white">
      <ServiceDetailContent detail={detail} />

      <ServiceBlogPreview />

      <FAQSection
        title={`${detail.label} — Frequently Asked Questions`}
        list={faq}
        theme="dark"
      />

      <ContactModalCTA />
    </div>
  );
}
