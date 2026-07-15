import {
  AppWindow,
  LayoutDashboard,
  Server,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  badge?: "HIGHLY REQUESTED" | "POPULAR";
  badgeTone?: "cyan" | "purple";
  capabilities: string[];
  stack: string[];
}

export const services: Service[] = [
  {
    id: "web-apps",
    title: "Custom Web Application Development",
    description:
      "Transform your ideas into powerful, scalable, and user-friendly web applications tailored to your business needs.",
    icon: AppWindow,
    badge: "HIGHLY REQUESTED",
    badgeTone: "cyan",
    capabilities: [
      "End-to-end product flows",
      "Secure authentication",
      "Responsive UI & UX",
      "API integrations",
    ],
    stack: ["Python", "FastAPI", "Django", "PostgreSQL", "React"],
  },
  {
    id: "admin-dashboards",
    title: "Admin Dashboard Development",
    description:
      "Modern, intuitive dashboards that centralize operations, reporting, analytics, and role-based access control.",
    icon: LayoutDashboard,
    badge: "POPULAR",
    badgeTone: "purple",
    capabilities: [
      "Role-based permissions",
      "Analytics & reporting",
      "Data tables & filters",
      "Operational workflows",
    ],
    stack: ["FastAPI", "Django", "PostgreSQL", "Redis", "Charts"],
  },
  {
    id: "backend",
    title: "Backend Development",
    description:
      "Robust backend systems with clean architecture, secure APIs, and reliable business logic for modern web products.",
    icon: Server,
    capabilities: [
      "REST API design",
      "Auth & authorization",
      "Database modeling",
      "Performance tuning",
    ],
    stack: ["Python", "FastAPI", "Django", "SQL", "PostgreSQL"],
  },
  {
    id: "enhancement",
    title: "Existing Application Enhancement",
    description:
      "Improve and extend your current apps with features, bug fixes, performance gains, and backend modernization.",
    icon: Sparkles,
    capabilities: [
      "Feature additions",
      "Bug fixes & stability",
      "Refactoring",
      "Performance upgrades",
    ],
    stack: ["Python", "Legacy migrations", "SQL", "API upgrades"],
  },
];
