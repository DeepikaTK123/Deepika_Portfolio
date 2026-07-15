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
  duration: string;
  deliverables: string[];
  icon: LucideIcon;
}

export const processSteps: ProcessStep[] = [
  {
    id: "requirements",
    number: "01",
    title: "Requirement Discussion",
    description:
      "We align on your business goals, users, and constraints so the solution starts with clarity — not assumptions.",
    duration: "1–3 days",
    deliverables: [
      "Discovery call notes",
      "Priority use cases",
      "Success criteria",
    ],
    icon: MessageCircle,
  },
  {
    id: "planning",
    number: "02",
    title: "Planning & Solution Design",
    description:
      "I map architecture, features, and milestones so you know what ships when — and what can wait.",
    duration: "2–5 days",
    deliverables: [
      "Solution outline",
      "Feature breakdown",
      "Delivery roadmap",
    ],
    icon: PenLine,
  },
  {
    id: "development",
    number: "03",
    title: "Development",
    description:
      "Your application is built with clean architecture, secure backend logic, and a polished user experience.",
    duration: "1–6 weeks",
    deliverables: [
      "Working feature increments",
      "Secure APIs & data models",
      "Regular demos",
    ],
    icon: Code2,
  },
  {
    id: "testing",
    number: "04",
    title: "Testing & Quality Assurance",
    description:
      "Features are verified for reliability, performance, and a smooth experience before you go live.",
    duration: "2–5 days",
    deliverables: [
      "Bug fixes & polish",
      "Regression checks",
      "Release-ready build",
    ],
    icon: ShieldCheck,
  },
  {
    id: "delivery",
    number: "05",
    title: "Project Delivery",
    description:
      "You receive a production-ready application, complete source code, and a clear handover.",
    duration: "1–2 days",
    deliverables: [
      "Source code ownership",
      "Handover documentation",
      "Next-step recommendations",
    ],
    icon: PackageCheck,
  },
];
