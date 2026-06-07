export type ServiceItem = {
  slug: string;
  label: string;
  src: string;
  summary: string;
  details: string[];
};

export const SERVICES: ServiceItem[] = [
  {
    slug: "brand-identity",
    label: "Brand Identity",
    src: "https://ik.imagekit.io/codebyjerry/techbuds/brand_no_bg.png",
    summary:
      "Logos, visual systems, and brand guidelines that help your business look consistent and credible everywhere.",
    details: [
      "Logo Design",
      "Brand Strategy",
      "Visual Identity Systems",
      "Brand Guidelines",
      "Marketing Collateral",
      "UI/UX Design",
      "Wireframing & Prototyping",
    ],
  },
  {
    slug: "custom-web-solutions",
    label: "Custom Web Solutions",
    src: "https://ik.imagekit.io/codebyjerry/techbuds/web_no_bg.png",
    summary:
      "Fast, responsive websites and web apps built around your workflows, content, and business goals.",
    details: [
      "Business Websites",
      "Corporate Websites",
      "Landing Pages",
      "Web Portals",
      "Custom Web Applications",
      "Admin Dashboards",
      "API Integrations",
      "CMS Development",
    ],
  },
  {
    slug: "mobile-applications",
    label: "Mobile Applications System",
    src: "https://ik.imagekit.io/codebyjerry/techbuds/mobile_no_bg.png",
    summary:
      "Native and cross-platform mobile apps with clean UI, reliable performance, and room to scale.",
    details: [
      "Android App Development",
      "iOS App Development",
      "Flutter Applications",
      "Cross-Platform Apps",
      "Business Applications",
      "Customer Applications",
      "App Maintenance & Support",
      "App Store Deployment",
    ],
  },
  {
    slug: "business-platforms",
    label: "Business Platforms",
    src: "https://ik.imagekit.io/codebyjerry/techbuds/business_no_bg.png",
    summary:
      "Custom CRM, ERP, and internal tools that simplify operations and keep teams aligned.",
    details: [
      "CRM Systems",
      "ERP Solutions",
      "HRMS Platforms",
      "Inventory Management",
      "Workflow Automation",
      "SaaS Product Development",
      "Customer Portals",
      "Vendor Portals",
    ],
  },
  {
    slug: "seo-growth",
    label: "SEO and Growth",
    src: "https://ik.imagekit.io/codebyjerry/techbuds/seo_no_bg.png",
    summary:
      "Technical SEO, content, and performance work focused on visibility, traffic, and conversions.",
    details: [
      "Technical SEO",
      "On-Page SEO",
      "Local SEO",
      "Content Strategy",
      "Website Optimization",
      "Conversion Optimization",
      "Analytics & Tracking",
      "Growth Consulting",
    ],
  },
  {
    slug: "ecommerce-digital",
    label: "Ecommerce & Digital Solutions",
    src: "https://ik.imagekit.io/codebyjerry/techbuds/ecom_no_bg.png",
    summary:
      "Online stores and marketplaces designed for smooth shopping, secure payments, and growth.",
    details: [
      "Shopify Development",
      "WooCommerce Development",
      "Custom Ecommerce Platforms",
      "Multi-Vendor Marketplaces",
      "Payment Gateway Integration",
      "Order Management Systems",
      "Customer Loyalty Systems",
      "Ecommerce Growth Solutions",
    ],
  },
];
