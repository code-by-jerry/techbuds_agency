export type Testimonial = {
  id: string;
  name: string;
  role: string;
  company: string;
  rating: 4 | 5;
  message: string;
  avatar: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "rakesh-gowda",
    name: "Rakesh Gowda",
    role: "CEO",
    company: "Growth Solutions",
    rating: 5,
    message:
      "TechBuds delivered our platform on time with a clean UI and solid backend. Communication was clear at every stage.",
    avatar:
      "https://api.dicebear.com/7.x/initials/svg?seed=Rakesh%20Gowda&backgroundColor=f5202d&textColor=ffffff",
  },
  {
    id: "priya-sharma",
    name: "Priya Sharma",
    role: "Founder",
    company: "Enmart",
    rating: 5,
    message:
      "Our q-commerce experience improved dramatically — faster checkout, better mobile flow, and a polished brand feel.",
    avatar:
      "https://api.dicebear.com/7.x/initials/svg?seed=Priya%20Sharma&backgroundColor=1e293b&textColor=ffffff",
  },
  {
    id: "arjun-mehta",
    name: "Arjun Mehta",
    role: "CTO",
    company: "Destro Solutions",
    rating: 5,
    message:
      "They understood our SDV positioning and built a professional site that reflects our technical depth and enterprise focus.",
    avatar:
      "https://api.dicebear.com/7.x/initials/svg?seed=Arjun%20Mehta&backgroundColor=f5202d&textColor=ffffff",
  },
  {
    id: "kavitha-n",
    name: "Kavitha N",
    role: "Product Lead",
    company: "Camiprod",
    rating: 4,
    message:
      "The healthcare ecommerce store looks trustworthy and converts well. Product pages and checkout were handled thoughtfully.",
    avatar:
      "https://api.dicebear.com/7.x/initials/svg?seed=Kavitha%20N&backgroundColor=1e293b&textColor=ffffff",
  },
  {
    id: "suresh-kumar",
    name: "Suresh Kumar",
    role: "Director",
    company: "Aaran Info",
    rating: 5,
    message:
      "From billing workflows to client-facing dashboards, the team built exactly what our consultancy needed to scale operations.",
    avatar:
      "https://api.dicebear.com/7.x/initials/svg?seed=Suresh%20Kumar&backgroundColor=f5202d&textColor=ffffff",
  },
  {
    id: "meera-iyer",
    name: "Meera Iyer",
    role: "Operations Head",
    company: "Baybee",
    rating: 4,
    message:
      "Quick-commerce UX was the priority and TechBuds nailed it — smooth browsing, fast pages, and a reliable ordering flow.",
    avatar:
      "https://api.dicebear.com/7.x/initials/svg?seed=Meera%20Iyer&backgroundColor=1e293b&textColor=ffffff",
  },
  {
    id: "vikram-patel",
    name: "Vikram Patel",
    role: "Managing Director",
    company: "Pixora",
    rating: 5,
    message:
      "Our brand and service pages finally match the quality of our design work. Great attention to detail and responsive support.",
    avatar:
      "https://api.dicebear.com/7.x/initials/svg?seed=Vikram%20Patel&backgroundColor=f5202d&textColor=ffffff",
  },
  {
    id: "ananya-reddy",
    name: "Ananya Reddy",
    role: "Founder",
    company: "Paalu Predictor",
    rating: 5,
    message:
      "The mobile app UI makes complex AI results easy to understand. Capture flow, insights, and overall polish exceeded expectations.",
    avatar:
      "https://api.dicebear.com/7.x/initials/svg?seed=Ananya%20Reddy&backgroundColor=1e293b&textColor=ffffff",
  },
  {
    id: "rahul-desai",
    name: "Rahul Desai",
    role: "Marketing Head",
    company: "Retail Co.",
    rating: 4,
    message:
      "SEO improvements and site performance work led to better traffic and leads within the first few weeks after launch.",
    avatar:
      "https://api.dicebear.com/7.x/initials/svg?seed=Rahul%20Desai&backgroundColor=f5202d&textColor=ffffff",
  },
];
