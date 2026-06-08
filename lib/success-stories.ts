export type SuccessStory = {
  id: string;
  slug: string;
  project: string;
  category: string;
  summary: string;
  outcome: string;
  tags: string[];
};

export const SUCCESS_STORIES: SuccessStory[] = [
  {
    id: "enmart",
    slug: "enmart",
    project: "Enmart",
    category: "Q-Commerce Platform",
    summary:
      "Built a mobile-first q-commerce platform with delivery slots, location-aware shopping, and a streamlined checkout for everyday essentials.",
    outcome: "Production-ready platform built for speed and repeat orders.",
    tags: ["Q-Commerce", "Next.js", "Mobile UX"],
  },
  {
    id: "camiprod",
    slug: "camiprod",
    project: "Camiprod",
    category: "Healthcare Ecommerce",
    summary:
      "Designed a trust-led ecommerce store for diabetes-care products with clear education, certifications, and polished product pages.",
    outcome: "Shop-ready healthcare store that earns confidence before purchase.",
    tags: ["Ecommerce", "Healthcare", "Branding"],
  },
  {
    id: "paalu-predictor",
    slug: "paalu-predictor",
    project: "Paalu Predictor",
    category: "AI Milk Analysis App",
    summary:
      "Developed a Flutter app that turns AI vision analysis into field-ready milk yield, health, and quality insights.",
    outcome: "Complex AI made practical for on-ground dairy operations.",
    tags: ["Flutter", "AI Vision", "Mobile App"],
  },
  {
    id: "destro-solutions",
    slug: "destro-solutions",
    project: "Destro Solutions",
    category: "Software Defined Vehicles",
    summary:
      "Created a B2B platform to present SDV expertise, training programs, and enterprise services with clarity.",
    outcome: "Credible digital presence for education and enterprise leads.",
    tags: ["SDV", "Web Platform", "B2B"],
  },
];
