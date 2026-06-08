export type BusinessSolution = {
  id: string;
  tab: string;
  title: string;
  image: string;
  solutions: string[];
  benefits: string[];
};

export const BUSINESS_SOLUTIONS: BusinessSolution[] = [
  {
    id: "ecommerce",
    tab: "Ecommerce",
    title: "Ecommerce Platforms",
    image:
      "https://ik.imagekit.io/codebyjerry/techbuds/Ecommerce_solution.png",
    solutions: [
      "Online Stores",
      "Multi-Vendor Marketplace",
      "Subscription Commerce",
      "Inventory Management",
      "Order Management",
      "Payment Integration",
      "Customer Loyalty Systems",
    ],
    benefits: [
      "Increase online sales",
      "Improve customer experience",
      "Automate operations",
      "Scale product catalogs",
    ],
  },
  {
    id: "crm",
    tab: "CRM",
    title: "CRM & Sales Platforms",
    image: "https://ik.imagekit.io/codebyjerry/techbuds/CRM_solutions.png",
    solutions: [
      "Lead Management",
      "Sales CRM",
      "Customer Support Portal",
      "Pipeline Tracking",
      "Quotation Systems",
      "Workflow Automation",
    ],
    benefits: [
      "Better lead conversion",
      "Organized sales process",
      "Faster follow-ups",
      "Higher team productivity",
    ],
  },
  {
    id: "healthcare",
    tab: "Healthcare",
    title: "Healthcare Platforms",
    image:
      "https://ik.imagekit.io/codebyjerry/techbuds/Healthcare_solution.png",
    solutions: [
      "Clinic Management",
      "Appointment Booking",
      "Patient Records",
      "Telemedicine",
      "Billing Systems",
      "Pharmacy Management",
    ],
    benefits: [
      "Better patient experience",
      "Reduced paperwork",
      "Improved operations",
      "Centralized management",
    ],
  },
  {
    id: "education",
    tab: "Education",
    title: "Education Platforms",
    image:
      "https://ik.imagekit.io/codebyjerry/techbuds/Education_solution.png",
    solutions: [
      "Learning Management Systems",
      "Student Portals",
      "Online Courses",
      "Examination Systems",
      "Attendance Management",
      "Teacher Dashboards",
    ],
    benefits: [
      "Digital learning at scale",
      "Stronger student engagement",
      "Easy administration",
      "Scalable education delivery",
    ],
  },
  {
    id: "food-delivery",
    tab: "Food Delivery",
    title: "Food Delivery & Restaurant Systems",
    image: "https://ik.imagekit.io/codebyjerry/techbuds/Food_solution.png",
    solutions: [
      "Food Ordering Apps",
      "Delivery Tracking",
      "Restaurant Dashboards",
      "Vendor Management",
      "Loyalty Programs",
      "Real-Time Order Updates",
    ],
    benefits: [
      "Faster ordering experiences",
      "Operational efficiency",
      "Better customer retention",
      "Scalable delivery operations",
    ],
  },
  {
    id: "logistics",
    tab: "Logistics",
    title: "Logistics Platforms",
    image: "https://ik.imagekit.io/codebyjerry/techbuds/Logistics.png",
    solutions: [
      "Shipment Tracking",
      "Fleet Management",
      "Driver Apps",
      "Route Optimization",
      "Warehouse Systems",
      "Dispatch Dashboards",
    ],
    benefits: [
      "End-to-end delivery visibility",
      "Reduced operational costs",
      "Better logistics planning",
      "Faster fulfillment cycles",
    ],
  },
  {
    id: "automation",
    tab: "Business Automation",
    title: "Business Automation",
    image:
      "https://ik.imagekit.io/codebyjerry/techbuds/automation_solution.png",
    solutions: [
      "Internal Portals",
      "ERP Systems",
      "HRMS Platforms",
      "Payroll Systems",
      "Inventory Automation",
      "Reporting Dashboards",
    ],
    benefits: [
      "Reduced manual work",
      "Better team productivity",
      "Real-time business insights",
      "Streamlined operations",
    ],
  },
  {
    id: "saas",
    tab: "SaaS",
    title: "SaaS Platforms",
    image:
      "https://ik.imagekit.io/codebyjerry/techbuds/Saas_new_solution%20AM.png",
    solutions: [
      "Subscription Platforms",
      "Customer Portals",
      "White-Label Systems",
      "Analytics Platforms",
      "Admin Dashboards",
      "Multi-Tenant Architecture",
    ],
    benefits: [
      "Recurring revenue models",
      "Scalable product architecture",
      "Product-led growth",
      "Faster feature rollout",
    ],
  },
  {
    id: "ai",
    tab: "AI Solutions",
    title: "AI Solutions",
    image:
      "https://ik.imagekit.io/codebyjerry/techbuds/AI_new_solutions.png",
    solutions: [
      "Predictive Analytics",
      "AI Assistants",
      "Recommendation Engines",
      "Document Processing",
      "AI-Powered Workflows",
      "Computer Vision Apps",
    ],
    benefits: [
      "Faster business decisions",
      "Increased operational efficiency",
      "Automation at scale",
      "Smarter customer experiences",
    ],
  },
  {
    id: "marketplace",
    tab: "Marketplace",
    title: "Marketplace Platforms",
    image:
      "https://ik.imagekit.io/codebyjerry/techbuds/Marketplace_solutions.png",
    solutions: [
      "Vendor Portals",
      "Commission Systems",
      "Product Catalogs",
      "Order Management",
      "Settlement Systems",
      "Buyer & Seller Dashboards",
    ],
    benefits: [
      "New revenue streams",
      "Ecosystem growth",
      "Centralized vendor management",
      "Scalable multi-sided commerce",
    ],
  },
];
