export const ABOUT_VALUES = [
  {
    title: "Strategy First",
    description:
      "We align design and development with business goals before writing a single line of code.",
  },
  {
    title: "Clean Execution",
    description:
      "Modern stacks, maintainable code, and scalable architecture built for long-term growth.",
  },
  {
    title: "Design With Purpose",
    description:
      "Interfaces that look polished and guide users toward meaningful actions.",
  },
  {
    title: "Partnership Mindset",
    description:
      "We stay involved from discovery to launch — and support you after go-live.",
  },
];

export const ABOUT_APPROACH = [
  "Discovery workshops and requirement clarity",
  "UI/UX design with real user flows",
  "Full-stack development and integrations",
  "Testing, launch, and post-launch support",
];

export const ABOUT_IMAGE =
  "https://ik.imagekit.io/codebyjerry/techbuds/about-techbuds.png";

export const ABOUT_PAGE_IMAGE =
  "https://ik.imagekit.io/codebyjerry/techbuds/About%20Page%20Content.png";

export type AboutSectionContent = {
  image: string;
  imageAlt: string;
  badge: string;
  heading: string;
  headingAccent: string;
  paragraphs: string[];
};

export const ABOUT_HOME_CONTENT: AboutSectionContent = {
  image: ABOUT_IMAGE,
  imageAlt: "TechBuds team collaborating on digital projects",
  badge: "About TechBuds",
  heading: "We build digital products that help businesses",
  headingAccent: "grow with confidence.",
  paragraphs: [
    "TechBuds is a digital solutions studio working with startups and growing businesses across India. We partner with teams that need more than a good-looking website — they need reliable products, clear branding, and technology that supports real business goals.",
    "From strategy and design to development and launch, we stay involved at every stage. Our focus is simple: deliver work that is practical, scalable, and built to perform long after go-live.",
  ],
};

export const ABOUT_MISSION = {
  headline: "Digital products built to perform — not just impress.",
  tagline: "Growth — driven by craft.",
};

export const ABOUT_MISSION_BLOCK = {
  eyebrow: "Our Mission",
  heading: "Empowering businesses through",
  headingAccent: "purposeful digital solutions.",
  image: "https://ik.imagekit.io/codebyjerry/techbuds/vision.png",
  imageAlt: "TechBuds mission — innovation, leadership, and global growth",
  paragraphs: [
    "Our mission is to help startups and growing companies turn ideas into reliable digital products — websites, apps, brands, and platforms that support real business outcomes.",
    "We combine strategy, design, and engineering with clear communication, quality execution, and a partnership mindset that stays with you from discovery through launch and beyond.",
  ],
};

export const ABOUT_VISION_BLOCK = {
  eyebrow: "Our Vision",
  heading: "To be the most trusted digital partner for",
  headingAccent: "growing businesses.",
  image: "https://ik.imagekit.io/codebyjerry/techbuds/mission.png",
  imageAlt: "TechBuds vision — strategy, growth, and collaboration",
  paragraphs: [
    "We envision a future where every business — regardless of size — has access to world-class digital experiences that are practical, polished, and built to perform.",
    "TechBuds aims to set the standard for thoughtful design, dependable engineering, and long-term client success across India and beyond.",
  ],
};

export const ABOUT_HIGHLIGHT_STATS = [
  { value: "20+", label: "Projects Contributed", icon: "rocket" as const },
  { value: "98%", label: "Client Satisfaction", icon: "thumbs-up" as const },
  { value: "10+", label: "Industry Verticals", icon: "lightbulb" as const },
  { value: "5+", label: "Years Industry Experience", icon: "users" as const },
];

export const ABOUT_PAGE_CONTENT: AboutSectionContent = {
  image: ABOUT_PAGE_IMAGE,
  imageAlt: "TechBuds collaborative team and culture collage",
  badge: "Who We Are",
  heading: "Where strategy, design, and engineering",
  headingAccent: "work as one team.",
  paragraphs: [
    "TechBuds brings together designers, developers, and strategists who collaborate closely on every project. We believe strong digital products are built through clear communication, shared ownership, and a genuine commitment to client success.",
    "From early discovery to launch and beyond, we work as an extension of your team — transparent, responsive, and focused on outcomes that help your business move faster with confidence.",
  ],
};
