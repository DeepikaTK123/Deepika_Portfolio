import {
  Search,
  Layers,
  Code2,
  TestTube,
  Rocket,
  Shield,
  type LucideIcon,
} from "lucide-react";

export interface ProcessStep {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const processSteps: ProcessStep[] = [
  {
    id: "discovery",
    title: "Discovery",
    description:
      "Understanding your business goals, technical requirements, and constraints. Deep dive into existing systems and identify opportunities.",
    icon: Search,
  },
  {
    id: "architecture",
    title: "Architecture",
    description:
      "Designing scalable system architecture, database schemas, and API contracts. Creating detailed technical specifications.",
    icon: Layers,
  },
  {
    id: "development",
    title: "Development",
    description:
      "Building with clean, tested code following best practices. Regular progress updates and iterative delivery of features.",
    icon: Code2,
  },
  {
    id: "testing",
    title: "Testing",
    description:
      "Comprehensive testing including unit, integration, and load tests. Ensuring reliability, security, and performance standards.",
    icon: TestTube,
  },
  {
    id: "deployment",
    title: "Deployment",
    description:
      "Smooth deployment to production with zero downtime. CI/CD pipeline setup and infrastructure provisioning.",
    icon: Rocket,
  },
  {
    id: "maintenance",
    title: "Maintenance",
    description:
      "Ongoing monitoring, optimization, and support. Proactive maintenance to ensure long-term system health.",
    icon: Shield,
  },
];
