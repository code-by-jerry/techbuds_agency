export type PortfolioProject = {
  slug: string;
  name: string;
  category: string;
  description: string;
  highlights: string[];
  tags: string[];
  previewImage: string;
  images: string[];
};

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    slug: "enmart",
    name: "Enmart",
    category: "Q-Commerce Platform",
    description:
      "A fast, mobile-first quick-commerce platform built for everyday essentials — with smart delivery scheduling, location-aware shopping, streamlined checkout, and a polished product discovery experience.",
    highlights: [
      "Daily delivery slots with real-time availability",
      "Location-based store and serviceability flow",
      "Ratings, reviews, and verified purchase feedback",
      "Optimized cart-to-checkout journey",
    ],
    tags: ["Next.js", "Mobile UX", "Q-Commerce", "Checkout", "Reviews"],
    previewImage:
      "https://ik.imagekit.io/codebyjerry/techbuds/ChatGPT%20Image%20Jun%206,%202026,%2010_38_57%20PM.png",
    images: [
      "https://ik.imagekit.io/codebyjerry/works/Enmart/WhatsApp%20Image%202026-05-20%20at%203.59.44%20PM.jpeg?updatedAt=1779274109237",
      "https://ik.imagekit.io/codebyjerry/works/Enmart/WhatsApp%20Image%202026-05-20%20at%204.16.21%20PM.jpeg?updatedAt=1779274109354",
      "https://ik.imagekit.io/codebyjerry/works/Enmart/WhatsApp%20Image%202026-05-20%20at%204.16.21%20PM%20(4).jpeg?updatedAt=1779274109303",
      "https://ik.imagekit.io/codebyjerry/works/Enmart/WhatsApp%20Image%202026-05-20%20at%204.16.22%20PM%20(1).jpeg?updatedAt=1779274108741",
      "https://ik.imagekit.io/codebyjerry/works/Enmart/WhatsApp%20Image%202026-05-20%20at%204.16.22%20PM%20(4).jpeg?updatedAt=1779274108679",
    ],
  },
  {
    slug: "camiprod",
    name: "Camiprod",
    category: "Healthcare Ecommerce",
    description:
      "A clean, trust-focused ecommerce store for diabetes-care nutrition products — combining educational content, product storytelling, certifications, and a seamless shopping flow for healthcare consumers.",
    highlights: [
      "Healthcare-focused product pages and variants",
      "Brand storytelling with lifestyle visuals",
      "Certification and trust signal sections",
      "Shop-ready ecommerce experience",
    ],
    tags: ["Ecommerce", "Healthcare", "UI/UX", "Product Pages", "Branding"],
    previewImage:
      "https://ik.imagekit.io/codebyjerry/techbuds/ChatGPT%20Image%20Jun%206,%202026,%2010_38_59%20PM.png",
    images: [
      "https://ik.imagekit.io/codebyjerry/works/camiprod/Screenshot%202026-04-11%20144548.png?updatedAt=1776506054013",
      "https://ik.imagekit.io/codebyjerry/works/camiprod/Screenshot%202026-04-11%20144819.png?updatedAt=1776506054135",
      "https://ik.imagekit.io/codebyjerry/works/camiprod/Screenshot%202026-04-11%20144641.png?updatedAt=1776506053279",
      "https://ik.imagekit.io/codebyjerry/works/camiprod/Screenshot%202026-04-11%20144721.png?updatedAt=1776506052388",
      "https://ik.imagekit.io/codebyjerry/works/camiprod/Screenshot%202026-04-11%20144819.png?updatedAt=1776506054135",
    ],
  },
  {
    slug: "paalu-predictor",
    name: "Paalu Predictor",
    category: "AI Milk Analysis App",
    description:
      "An advanced mobile application using AI vision and segmentation to analyze dairy livestock — predicting milk yield, health indicators, and quality metrics to support smarter decisions for farms and large supply networks.",
    highlights: [
      "AI-powered image capture and analysis pipeline",
      "Milk yield prediction with confidence scoring",
      "Health, symmetry, and udder quality insights",
      "Guided capture flow for consistent field results",
    ],
    tags: ["Flutter", "AI Vision", "TFLite", "Mobile App", "Dairy Tech"],
    previewImage:
      "https://ik.imagekit.io/codebyjerry/techbuds/ChatGPT%20Image%20Jun%206,%202026,%2010_39_02%20PM.png",
    images: [
      "https://ik.imagekit.io/codebyjerry/works/Milk%20Predictor/Screenshot%202026-06-04%20101827.png",
      "https://ik.imagekit.io/codebyjerry/works/Milk%20Predictor/Screenshot%202026-06-04%20102110.png",
      "https://ik.imagekit.io/codebyjerry/works/Milk%20Predictor/Screenshot%202026-06-04%20102032.png",
      "https://ik.imagekit.io/codebyjerry/works/Milk%20Predictor/Screenshot%202026-06-04%20102040.png",
      "https://ik.imagekit.io/codebyjerry/works/Milk%20Predictor/Screenshot%202026-06-04%20101911.png",
    ],
  },
  {
    slug: "destro-solutions",
    name: "Destro Solutions",
    category: "Software Defined Vehicles",
    description:
      "A modern technology platform for Software-Defined Vehicles (SDV) — showcasing quantum-safe mobility stacks, expert training programs, enterprise services, and consultation flows for automotive innovation teams.",
    highlights: [
      "SDV-focused product and service positioning",
      "Training and certification program pages",
      "Enterprise consultation and contact flows",
      "Clean B2B technology brand experience",
    ],
    tags: ["SDV", "Automotive", "Cybersecurity", "Training", "Web Platform"],
    previewImage:
      "https://ik.imagekit.io/codebyjerry/works/Destro%20Solutions/Screenshot%202026-06-06%20210322.png",
    images: [
      "https://ik.imagekit.io/codebyjerry/works/Destro%20Solutions/Screenshot%202026-06-06%20210322.png",
      "https://ik.imagekit.io/codebyjerry/works/Destro%20Solutions/Screenshot%202026-06-06%20210427.png",
      "https://ik.imagekit.io/codebyjerry/works/Destro%20Solutions/Screenshot%202026-06-06%20210404.png",
      "https://ik.imagekit.io/codebyjerry/works/Destro%20Solutions/Screenshot%202026-06-06%20210339.png",
      "https://ik.imagekit.io/codebyjerry/works/Destro%20Solutions/Screenshot%202026-06-06%20210519.png",
    ],
  },
];

export const HOME_FEATURED_PROJECTS = PORTFOLIO_PROJECTS.filter((p) =>
  ["enmart", "camiprod", "paalu-predictor"].includes(p.slug),
);
