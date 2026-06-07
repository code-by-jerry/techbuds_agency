export type ServiceDeliverable = {
  icon: string;
  title: string;
  text: string;
};

export type ServiceDetail = {
  slug: string;
  label: string;
  icon: string;
  title: string;
  titleAccent: string;
  intro: string;
  showcaseImage: string;
  sectionImage: string;
  marqueeOutline: string;
  marqueeBold: string;
  deliverables: ServiceDeliverable[];
  whyMatters: { icon: string; text: string }[];
  approach: string[];
  industries: string[];
  technologies?: string[];
};

export const SERVICE_DETAILS: ServiceDetail[] = [
  {
    slug: "brand-identity",
    label: "Brand Identity",
    icon: "palette",
    title: "Build a brand people",
    titleAccent: "remember and trust.",
    intro:
      "We craft logo systems, visual identities, and brand guidelines that look sharp everywhere — from your website and social feeds to pitch decks and packaging. Strategy-led, design-forward, and built for long-term recognition.",
    showcaseImage:
      "https://ik.imagekit.io/codebyjerry/techbuds/brand_no_bg.png",
    sectionImage:
      "https://ik.imagekit.io/codebyjerry/techbuds/brand_identity.png",
    marqueeOutline: "BRANDING",
    marqueeBold: "BRAND IDENTITY",
    deliverables: [
      {
        icon: "sparkles",
        title: "Logo Systems",
        text: "Memorable marks designed for digital and print consistency.",
      },
      {
        icon: "target",
        title: "Brand Strategy",
        text: "Positioning and messaging aligned with your business goals.",
      },
      {
        icon: "palette",
        title: "Visual Identity",
        text: "Typography, color palettes, and scalable design systems.",
      },
      {
        icon: "book-open",
        title: "Brand Guidelines",
        text: "Clear usage rules so every asset stays on-brand.",
      },
      {
        icon: "smartphone",
        title: "Digital Assets",
        text: "Social templates, banners, and marketing-ready files.",
      },
      {
        icon: "briefcase",
        title: "Collateral",
        text: "Business cards, decks, and branded materials.",
      },
    ],
    whyMatters: [
      { icon: "heart-handshake", text: "Build customer trust from the first interaction" },
      { icon: "eye", text: "Improve recognition across every channel" },
      { icon: "award", text: "Stand out in crowded markets" },
      { icon: "trending-up", text: "Support long-term loyalty and growth" },
    ],
    approach: [
      "Market and audience research",
      "Creative concept exploration",
      "Visual system development",
      "Digital-first adaptability",
      "Guidelines and asset delivery",
    ],
    industries: [
      "Startups",
      "Ecommerce",
      "Technology",
      "Healthcare",
      "Education",
      "Real Estate",
      "Agencies",
    ],
  },
  {
    slug: "custom-web-solutions",
    label: "Custom Web Solutions",
    icon: "globe",
    title: "Web products built for",
    titleAccent: "speed, scale, and clarity.",
    intro:
      "From marketing sites to custom web apps and admin dashboards — we build digital products that load fast, work reliably, and grow with your business. One team handles design, development, and integrations end to end.",
    showcaseImage: "https://ik.imagekit.io/codebyjerry/techbuds/web_no_bg.png",
    sectionImage:
      "https://ik.imagekit.io/codebyjerry/techbuds/web_solution.png",
    marqueeOutline: "WEB",
    marqueeBold: "CUSTOM SOLUTIONS",
    deliverables: [
      {
        icon: "building-2",
        title: "Business Websites",
        text: "Professional sites built to generate trust and leads.",
      },
      {
        icon: "zap",
        title: "Web Applications",
        text: "Custom tools that automate workflows and save time.",
      },
      {
        icon: "layout-dashboard",
        title: "Admin Dashboards",
        text: "Secure panels with analytics, roles, and reporting.",
      },
      {
        icon: "plug",
        title: "API Integrations",
        text: "Payments, CRMs, cloud services, and third-party APIs.",
      },
      {
        icon: "monitor-smartphone",
        title: "Responsive UI",
        text: "Flawless experiences on desktop, tablet, and mobile.",
      },
      {
        icon: "search",
        title: "SEO-Ready Build",
        text: "Clean structure and performance baked in from day one.",
      },
    ],
    whyMatters: [
      { icon: "zap", text: "Faster load times improve conversions" },
      { icon: "wrench", text: "Custom builds fit real workflows" },
      { icon: "trending-up", text: "Scalable architecture supports growth" },
      { icon: "shield", text: "Secure, maintainable codebases" },
    ],
    approach: [
      "Discovery and scope planning",
      "UI/UX design and prototyping",
      "Full-stack development",
      "Testing and performance tuning",
      "Launch and ongoing support",
    ],
    industries: [
      "Startups",
      "SaaS",
      "Healthcare",
      "Education",
      "Ecommerce",
      "Professional Services",
    ],
    technologies: [
      "Next.js",
      "React.js",
      "Laravel",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "Firebase",
      "Tailwind CSS",
    ],
  },
  {
    slug: "mobile-applications",
    label: "Mobile Applications System",
    icon: "smartphone",
    title: "Mobile apps built for",
    titleAccent: "real-world use.",
    intro:
      "We design and develop Android, iOS, and cross-platform apps with clean interfaces, reliable performance, and backends that scale as your user base grows.",
    showcaseImage:
      "https://ik.imagekit.io/codebyjerry/techbuds/mobile_no_bg.png",
    sectionImage:
      "https://ik.imagekit.io/codebyjerry/techbuds/mobile_app.png",
    marqueeOutline: "MOBILE",
    marqueeBold: "APP DEVELOPMENT",
    deliverables: [
      {
        icon: "smartphone",
        title: "Android & iOS",
        text: "Native-quality experiences on both major platforms.",
      },
      {
        icon: "layers",
        title: "Cross-Platform",
        text: "Flutter and React Native for faster multi-platform delivery.",
      },
      {
        icon: "pen-tool",
        title: "Mobile UI/UX",
        text: "Interfaces focused on clarity, speed, and retention.",
      },
      {
        icon: "cloud",
        title: "Cloud Backends",
        text: "Firebase, APIs, and scalable server architecture.",
      },
      {
        icon: "bell",
        title: "Push & Auth",
        text: "Notifications, login flows, and secure user sessions.",
      },
      {
        icon: "wrench",
        title: "Post-Launch Care",
        text: "Updates, fixes, and performance improvements.",
      },
    ],
    whyMatters: [
      { icon: "smartphone", text: "Meet customers where they spend time" },
      { icon: "zap", text: "Faster access than mobile web alone" },
      { icon: "bell", text: "Drive engagement with notifications" },
      { icon: "bar-chart-3", text: "Streamline internal operations" },
    ],
    approach: [
      "User flow mapping",
      "Prototype and UI design",
      "Agile development sprints",
      "Device and performance testing",
      "Store deployment and support",
    ],
    industries: [
      "Ecommerce",
      "Healthcare",
      "Education",
      "Logistics",
      "Startups",
      "Enterprise",
    ],
    technologies: [
      "Flutter",
      "React Native",
      "Firebase",
      "Node.js",
      "REST APIs",
      "Laravel",
    ],
  },
  {
    slug: "business-platforms",
    label: "Business Platforms",
    icon: "layers",
    title: "Platforms that simplify",
    titleAccent: "how your team works.",
    intro:
      "CRM panels, vendor portals, workflow tools, and internal dashboards — we build centralized systems that replace scattered spreadsheets and disconnected tools.",
    showcaseImage:
      "https://ik.imagekit.io/codebyjerry/techbuds/business_no_bg.png",
    sectionImage:
      "https://ik.imagekit.io/codebyjerry/techbuds/business_paltform_new.png",
    marqueeOutline: "PLATFORMS",
    marqueeBold: "BUSINESS SYSTEMS",
    deliverables: [
      {
        icon: "users",
        title: "CRM Systems",
        text: "Track leads, clients, and pipelines in one place.",
      },
      {
        icon: "settings",
        title: "Workflow Automation",
        text: "Reduce manual steps with smart process flows.",
      },
      {
        icon: "bar-chart-3",
        title: "Analytics Dashboards",
        text: "Real-time insights into operations and performance.",
      },
      {
        icon: "shield",
        title: "Role-Based Access",
        text: "Secure permissions for admins, staff, and clients.",
      },
      {
        icon: "link",
        title: "System Integrations",
        text: "Connect ERPs, payments, and third-party tools.",
      },
      {
        icon: "server",
        title: "SaaS Products",
        text: "Multi-tenant platforms built to scale.",
      },
    ],
    whyMatters: [
      { icon: "clock", text: "Save hours on manual processes" },
      { icon: "clipboard-list", text: "Single source of truth for teams" },
      { icon: "shield", text: "Secure, role-controlled access" },
      { icon: "trending-up", text: "Scale operations without chaos" },
    ],
    approach: [
      "Workflow mapping and requirements",
      "System architecture planning",
      "Modular platform development",
      "Integration and security testing",
      "Training and rollout support",
    ],
    industries: [
      "Enterprise",
      "Logistics",
      "Healthcare",
      "Education",
      "Manufacturing",
      "Agencies",
    ],
    technologies: [
      "Next.js",
      "Laravel",
      "PostgreSQL",
      "Firebase",
      "REST APIs",
      "Node.js",
    ],
  },
  {
    slug: "seo-growth",
    label: "SEO and Growth",
    icon: "trending-up",
    title: "Get found by the people",
    titleAccent: "already searching for you.",
    intro:
      "Technical SEO, on-page optimization, and performance improvements that help your site rank higher, load faster, and convert more visitors into leads.",
    showcaseImage: "https://ik.imagekit.io/codebyjerry/techbuds/seo_no_bg.png",
    sectionImage:
      "https://ik.imagekit.io/codebyjerry/techbuds/seo_growth_new.png",
    marqueeOutline: "SEO",
    marqueeBold: "GROWTH STRATEGY",
    deliverables: [
      {
        icon: "wrench",
        title: "Technical SEO",
        text: "Indexing, crawlability, structure, and Core Web Vitals.",
      },
      {
        icon: "file-text",
        title: "On-Page SEO",
        text: "Metadata, headings, content structure, and internal links.",
      },
      {
        icon: "gauge",
        title: "Speed Optimization",
        text: "Faster pages that rank better and retain users.",
      },
      {
        icon: "map-pin",
        title: "Local SEO",
        text: "Visibility for location-based searches.",
      },
      {
        icon: "line-chart",
        title: "Analytics Setup",
        text: "Track traffic, conversions, and growth metrics.",
      },
      {
        icon: "target",
        title: "Growth Strategy",
        text: "Keyword planning and long-term visibility roadmaps.",
      },
    ],
    whyMatters: [
      { icon: "search", text: "Capture high-intent organic traffic" },
      { icon: "line-chart", text: "Lower cost per lead over time" },
      { icon: "award", text: "Outrank competitors in search" },
      { icon: "bar-chart-3", text: "Measure what actually drives growth" },
    ],
    approach: [
      "SEO audit and baseline analysis",
      "Technical and on-page fixes",
      "Content and structure optimization",
      "Performance improvements",
      "Ongoing tracking and iteration",
    ],
    industries: [
      "Ecommerce",
      "SaaS",
      "Healthcare",
      "Real Estate",
      "Education",
      "Local Business",
    ],
  },
  {
    slug: "ecommerce-digital",
    label: "Ecommerce & Digital Solutions",
    icon: "shopping-bag",
    title: "Online stores built to",
    titleAccent: "sell and scale.",
    intro:
      "Custom ecommerce sites, marketplaces, and digital commerce platforms designed for smooth checkout, secure payments, and inventory you can actually manage.",
    showcaseImage: "https://ik.imagekit.io/codebyjerry/techbuds/ecom_no_bg.png",
    sectionImage:
      "https://ik.imagekit.io/codebyjerry/techbuds/ecommerce_new.png",
    marqueeOutline: "COMMERCE",
    marqueeBold: "ECOMMERCE SOLUTIONS",
    deliverables: [
      {
        icon: "shopping-bag",
        title: "Online Stores",
        text: "Custom storefronts optimized for conversion.",
      },
      {
        icon: "store",
        title: "Marketplaces",
        text: "Multi-vendor platforms with vendor management.",
      },
      {
        icon: "credit-card",
        title: "Payment Gateways",
        text: "Stripe, Razorpay, and secure checkout flows.",
      },
      {
        icon: "package",
        title: "Order Management",
        text: "Inventory, fulfillment, and customer tracking.",
      },
      {
        icon: "smartphone",
        title: "Mobile Commerce",
        text: "Shopping experiences that work on every device.",
      },
      {
        icon: "trending-up",
        title: "Growth Tools",
        text: "Loyalty, subscriptions, and analytics dashboards.",
      },
    ],
    whyMatters: [
      { icon: "credit-card", text: "Frictionless checkout boosts sales" },
      { icon: "smartphone", text: "Mobile shoppers expect speed" },
      { icon: "package", text: "Reliable order and inventory control" },
      { icon: "search", text: "SEO-friendly product discovery" },
    ],
    approach: [
      "Commerce strategy and UX planning",
      "Storefront and admin development",
      "Payment and shipping integrations",
      "Performance and SEO optimization",
      "Launch support and growth tuning",
    ],
    industries: [
      "Retail",
      "D2C Brands",
      "Marketplaces",
      "Subscriptions",
      "Healthcare",
      "Education",
    ],
    technologies: [
      "Next.js",
      "Laravel",
      "Stripe",
      "Razorpay",
      "PostgreSQL",
      "Firebase",
    ],
  },
];

export function getServiceDetail(slug: string): ServiceDetail | undefined {
  return SERVICE_DETAILS.find((service) => service.slug === slug);
}
