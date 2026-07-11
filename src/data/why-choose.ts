import {
  BriefcaseBusiness,
  MessageSquare,
  Scaling,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const whyChooseMe: WhyChooseItem[] = [
  {
    id: "business",
    title: "Business-Focused Solutions",
    description:
      "I build software that solves real business problems instead of just writing code.",
    icon: BriefcaseBusiness,
  },
  {
    id: "scalable",
    title: "Scalable Architecture",
    description:
      "Applications are designed for performance, maintainability, and future growth.",
    icon: Scaling,
  },
  {
    id: "communication",
    title: "Transparent Communication",
    description:
      "Clear communication, regular updates, and collaborative development throughout the project.",
    icon: MessageSquare,
  },
  {
    id: "quality",
    title: "Quality-Focused Development",
    description:
      "Every project is built with clean code, best practices, and attention to detail.",
    icon: Sparkles,
  },
];
