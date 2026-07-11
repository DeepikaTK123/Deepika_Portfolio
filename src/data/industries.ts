import {
  HeartPulse,
  GraduationCap,
  Landmark,
  Users,
  Factory,
  ShoppingBag,
  Truck,
  Rocket,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export interface Industry {
  id: string;
  name: string;
  icon: LucideIcon;
}

export const industries: Industry[] = [
  { id: "healthcare", name: "Healthcare", icon: HeartPulse },
  { id: "education", name: "Education", icon: GraduationCap },
  { id: "finance", name: "Finance", icon: Landmark },
  { id: "hr", name: "Human Resources", icon: Users },
  { id: "manufacturing", name: "Manufacturing", icon: Factory },
  { id: "retail", name: "Retail", icon: ShoppingBag },
  { id: "logistics", name: "Logistics", icon: Truck },
  { id: "startups", name: "Startups", icon: Rocket },
  { id: "automation", name: "Business Automation", icon: Workflow },
];
