export type PageBannerContent = {
  image: string;
  eyebrow: string;
  title: string;
  titleAccent: string;
  description: string;
};

export const PAGE_BANNERS = {
  about: {
    image:
      "https://ik.imagekit.io/codebyjerry/techbuds/About_page_banner_new.png",
    eyebrow: "About Us",
    title: "Building digital products with",
    titleAccent: "clarity and craft.",
    description:
      "TechBuds helps businesses turn ideas into scalable digital experiences — from branding and product design to development, launch, and growth.",
  },
  services: {
    image:
      "https://ik.imagekit.io/codebyjerry/techbuds/Service_page_banner_new.png",
    eyebrow: "Our Services",
    title: "Solutions designed for",
    titleAccent: "growth.",
    description:
      "From brand identity and custom platforms to mobile applications and growth-driven solutions — built for performance, scale, and long-term impact.",
  },
  portfolio: {
    image:
      "https://ik.imagekit.io/codebyjerry/techbuds/portfolio_page_banner_new.png",
    eyebrow: "Portfolio",
    title: "Work we have",
    titleAccent: "built.",
    description:
      "Real platforms and products across q-commerce, healthcare ecommerce, AI-powered mobile apps, and software-defined vehicle technology.",
  },
  blog: {
    image:
      "https://ik.imagekit.io/codebyjerry/techbuds/blog_page_banner_new.png",
    eyebrow: "Our Blog",
    title: "Insights, ideas and",
    titleAccent: "inspiration.",
    description:
      "Practical guides on custom digital platforms, web applications, SEO performance, ecommerce development, and mobile app strategy.",
  },
} satisfies Record<string, PageBannerContent>;
