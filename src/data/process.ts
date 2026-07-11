import {
  MessageCircle,
  PenLine,
  Code2,
  ShieldCheck,
  PackageCheck,
  type LucideIcon,
} from "lucide-react";

export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const processSteps: ProcessStep[] = [
  {
    id: "requirements",
    number: "01",
    title: "Requirement Discussion",
    description:
      "We discuss your goals, users, and business challenges so the solution is aligned from day one.",
    icon: MessageCircle,
  },
  {
    id: "planning",
    number: "02",
    title: "Planning & Solution Design",
    description:
      "I map out the architecture, features, and delivery plan with clear milestones and priorities.",
    icon: PenLine,
  },
  {
    id: "development",
    number: "03",
    title: "Development",
    description:
      "Your application is built with clean architecture, secure backend logic, and a polished user experience.",
    icon: Code2,
  },
  {
    id: "testing",
    number: "04",
    title: "Testing & Quality Assurance",
    description:
      "Every feature is carefully tested for reliability, performance, and a smooth end-user experience.",
    icon: ShieldCheck,
  },
  {
    id: "delivery",
    number: "05",
    title: "Project Delivery",
    description:
      "You receive a production-ready application, complete source code, and a clear handover.",
    icon: PackageCheck,
  },
];
