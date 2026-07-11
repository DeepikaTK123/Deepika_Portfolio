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
}

export const services: Service[] = [
  {
    id: "web-apps",
    title: "Custom Web Application Development",
    description:
      "Transform your ideas into powerful, scalable, and user-friendly web applications tailored to your business needs. I build secure, high-performance solutions with clean architecture — ensuring reliability, maintainability, and a seamless experience for your users.",
    icon: AppWindow,
  },
  {
    id: "admin-dashboards",
    title: "Admin Dashboard Development",
    description:
      "Modern, intuitive admin dashboards that simplify operations through centralized data management, reporting, analytics, and role-based access control. Designed to boost productivity and deliver clear, actionable insights for your team.",
    icon: LayoutDashboard,
  },
  {
    id: "backend",
    title: "Backend Development",
    description:
      "Robust, scalable backend systems built with Python, Django, and FastAPI. From business logic and secure authentication to database integration and high-performance APIs, I create reliable server-side foundations that power modern web products.",
    icon: Server,
  },
  {
    id: "enhancement",
    title: "Existing Application Enhancement",
    description:
      "Improve and extend your current applications by adding features, resolving issues, optimizing performance, and modernizing backend functionality. Enhance what you already have — without the cost and disruption of rebuilding from scratch.",
    icon: Sparkles,
  },
];
