export type ExpertiseBadge = {
  label: string;
  icon: "expert" | "insights" | "strategy";
};

export const ABOUT_EXPERTISE_BADGES: ExpertiseBadge[] = [
  { label: "Expert Team", icon: "expert" },
  { label: "Insights", icon: "insights" },
  { label: "Strategy", icon: "strategy" },
];
