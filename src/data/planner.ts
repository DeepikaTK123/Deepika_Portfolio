import {
  AppWindow,
  LayoutDashboard,
  Server,
  Sparkles,
  Lightbulb,
  type LucideIcon,
} from "lucide-react";

export interface PlannerGoal {
  id: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
}

export interface PlannerFeature {
  id: string;
  title: string;
  description: string;
  complexity: number;
}

export interface PlannerDesignOption {
  id: string;
  title: string;
  description: string;
  complexity: number;
}

export const plannerGoals: PlannerGoal[] = [
  {
    id: "web-app",
    title: "Launch a custom web application",
    subtitle: "Web Application Development",
    icon: AppWindow,
  },
  {
    id: "dashboard",
    title: "Build an admin / operations dashboard",
    subtitle: "Admin Dashboard Development",
    icon: LayoutDashboard,
  },
  {
    id: "backend",
    title: "Create secure backend & APIs",
    subtitle: "Backend Development",
    icon: Server,
  },
  {
    id: "enhance",
    title: "Improve an existing application",
    subtitle: "Application Enhancement",
    icon: Sparkles,
  },
  {
    id: "idea",
    title: "I have an idea and need guidance",
    subtitle: "Discovery & Scoping",
    icon: Lightbulb,
  },
];

export const plannerFeatures: PlannerFeature[] = [
  {
    id: "auth",
    title: "User Logins & Profiles",
    description: "Secure register, passwords, and user accounts.",
    complexity: 2,
  },
  {
    id: "payments",
    title: "Payment Processing",
    description: "Collect payments via Stripe, PayPal, or invoicing.",
    complexity: 3,
  },
  {
    id: "admin",
    title: "Admin Panel & Dashboard",
    description: "Manage data, list views, and statistics.",
    complexity: 3,
  },
  {
    id: "notifications",
    title: "Email / SMS Notifications",
    description: "Automated updates for users and teams.",
    complexity: 2,
  },
  {
    id: "database",
    title: "Database Storage & Backups",
    description: "Secure data structure with reliable storage.",
    complexity: 2,
  },
  {
    id: "apis",
    title: "Custom APIs & Integrations",
    description: "REST APIs and third-party service connections.",
    complexity: 2,
  },
];

export const plannerDesignOptions: PlannerDesignOption[] = [
  {
    id: "polished",
    title: "Polished Designs Ready",
    description: "I have Figma or high-fidelity mockups.",
    complexity: 0,
  },
  {
    id: "wireframes",
    title: "Rough Wireframes / Sketches",
    description: "I have conceptual drawings or blueprints.",
    complexity: 1,
  },
  {
    id: "feature-list",
    title: "Feature List Only",
    description: "I have a text document describing what I need.",
    complexity: 2,
  },
  {
    id: "need-help",
    title: "Need Requirements Help",
    description: "I just have an idea and need help defining scope.",
    complexity: 3,
  },
];

export interface TimelineEstimate {
  prototype: string;
  fullDelivery: string;
  summary: string;
}

export function estimateTimeline(
  goalId: string | null,
  featureIds: string[],
  designId: string | null
): TimelineEstimate {
  let score = 2;

  if (goalId === "enhance" || goalId === "idea") score += 1;
  if (goalId === "web-app" || goalId === "dashboard") score += 2;
  if (goalId === "backend") score += 1;

  featureIds.forEach((id) => {
    const feature = plannerFeatures.find((f) => f.id === id);
    if (feature) score += feature.complexity;
  });

  const design = plannerDesignOptions.find((d) => d.id === designId);
  if (design) score += design.complexity;

  if (score <= 5) {
    return {
      prototype: "5–10 days",
      fullDelivery: "2–4 weeks",
      summary: "A focused scope with a clear path to a first reviewable build.",
    };
  }

  if (score <= 10) {
    return {
      prototype: "1–2 weeks",
      fullDelivery: "4–6 weeks",
      summary:
        "A mid-complexity project with room for feature iterations and polish.",
    };
  }

  return {
    prototype: "2–3 weeks",
    fullDelivery: "6–10 weeks",
    summary:
      "A broader build — we’ll phase delivery so you see progress early and often.",
  };
}
