export type PlatformPartner = {
  name: string;
  logo: string;
  compact?: boolean;
  iconOnly?: boolean;
};

export const PLATFORM_PARTNERS: PlatformPartner[] = [
  {
    name: "AWS",
    logo: "https://ik.imagekit.io/codebyjerry/works/Partners/brandbird-AWS%20(Amazon%20Web%20Services)-logotype.svg",
  },
  {
    name: "Google Analytics",
    logo: "https://ik.imagekit.io/codebyjerry/works/Partners/brandbird-Google%20Analytics-logotype.svg",
  },
  {
    name: "Oracle Cloud",
    logo: "https://ik.imagekit.io/codebyjerry/works/Partners/brandbird-Oracle%20Cloud-logotype.svg",
  },
  {
    name: "Vercel",
    logo: "https://ik.imagekit.io/codebyjerry/works/Partners/vercel-svgrepo-com.svg",
    iconOnly: true,
  },
  {
    name: "Meta",
    logo: "https://ik.imagekit.io/codebyjerry/works/Partners/brandbird-Meta-logotype.svg",
  },
  {
    name: "Cloudflare",
    logo: "https://ik.imagekit.io/codebyjerry/works/Partners/brandbird-Cloudflare-logotype.svg",
  },
  {
    name: "Firebase",
    logo: "https://ik.imagekit.io/codebyjerry/works/Partners/brandbird-Firebase-logotype.svg",
  },
  {
    name: "Stripe",
    logo: "https://ik.imagekit.io/codebyjerry/works/Partners/brandbird-Stripe-logotype.svg",
  },
  {
    name: "Shopify",
    logo: "https://ik.imagekit.io/codebyjerry/works/Partners/brandbird-Shopify-logotype.svg",
  },
  {
    name: "Google Cloud",
    logo: "https://ik.imagekit.io/codebyjerry/works/Partners/brandbird-Google%20Cloud-logotype.svg",
  },
  {
    name: "Zoho",
    logo: "https://ik.imagekit.io/codebyjerry/works/Partners/brandbird-Zoho-logotype.svg",
  },
  {
    name: "OpenAI",
    logo: "https://ik.imagekit.io/codebyjerry/works/Partners/brandbird-OpenAI-logotype.svg",
  },
  {
    name: "Razorpay",
    logo: "https://ik.imagekit.io/codebyjerry/works/Partners/razorpay-icon.svg",
    compact: true,
  },
  {
    name: "Google Workspace",
    logo: "https://ik.imagekit.io/codebyjerry/works/Partners/logo-google-workspace.svg",
  },
  {
    name: "Twilio",
    logo: "https://ik.imagekit.io/codebyjerry/works/Partners/twilio-ar21.svg",
  },
  {
    name: "WhatsApp Business",
    logo: "https://ik.imagekit.io/codebyjerry/works/Partners/whatsapp-business-icon.svg",
    compact: true,
  },
  {
    name: "NGINX",
    logo: "https://ik.imagekit.io/codebyjerry/works/Partners/nginx.svg",
  },
  {
    name: "Hostinger",
    logo: "https://ik.imagekit.io/codebyjerry/works/Partners/hostinger.svg",
    compact: true,
  },
];

export const PARTNER_CATEGORIES = [
  {
    title: "Cloud & Infrastructure",
    items: ["AWS", "Google Cloud", "Oracle Cloud", "Firebase", "Cloudflare", "Vercel", "NGINX"],
  },
  {
    title: "Payments & Commerce",
    items: ["Stripe", "Razorpay", "Shopify"],
  },
  {
    title: "AI, Analytics & Productivity",
    items: ["OpenAI", "Google Analytics", "Google Workspace", "Zoho"],
  },
  {
    title: "Communication & Growth",
    items: ["Meta", "WhatsApp Business", "Twilio"],
  },
];
