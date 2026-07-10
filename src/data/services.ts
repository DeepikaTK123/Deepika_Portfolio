import {
  Server,
  Code2,
  Cloud,
  Gauge,
  Bot,
  Wrench,
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
    id: "backend",
    title: "Backend Development",
    description:
      "Robust, scalable server-side applications built with Python. Clean architecture, SOLID principles, and production-grade code quality.",
    icon: Server,
  },
  {
    id: "api",
    title: "API Development",
    description:
      "RESTful and GraphQL APIs designed for performance and developer experience. Comprehensive documentation and versioning strategies.",
    icon: Code2,
  },
  {
    id: "cloud",
    title: "Cloud Deployment",
    description:
      "End-to-end cloud infrastructure on AWS. Container orchestration with Kubernetes, auto-scaling, and infrastructure as code.",
    icon: Cloud,
  },
  {
    id: "performance",
    title: "Performance Optimization",
    description:
      "Database query optimization, caching strategies, and load testing. Reduce latency and improve throughput at scale.",
    icon: Gauge,
  },
  {
    id: "automation",
    title: "Automation",
    description:
      "CI/CD pipelines, automated testing, and deployment workflows. Reduce manual effort and accelerate delivery cycles.",
    icon: Bot,
  },
  {
    id: "maintenance",
    title: "Maintenance",
    description:
      "Ongoing support, monitoring, security patches, and system health. Proactive maintenance to keep your systems running smoothly.",
    icon: Wrench,
  },
];
