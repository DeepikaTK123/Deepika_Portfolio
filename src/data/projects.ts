export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  challenges: string[];
  solutions: string[];
  performance: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "edms",
    title: "Enterprise Document Management System",
    description:
      "A comprehensive document management platform serving 50,000+ enterprise users. Features include real-time collaboration, version control, advanced search, and role-based access control with audit trails.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop&q=80",
    techStack: ["Python", "FastAPI", "PostgreSQL", "Redis", "AWS", "Docker"],
    challenges: [
      "Handling 10M+ documents with sub-second search",
      "Real-time collaboration across distributed teams",
      "Compliance with enterprise security standards",
    ],
    solutions: [
      "Implemented Elasticsearch for full-text search indexing",
      "WebSocket-based real-time sync with conflict resolution",
      "Zero-trust architecture with end-to-end encryption",
    ],
    performance: [
      "Search latency reduced from 3s to 200ms",
      "99.99% uptime over 12 months",
      "50% reduction in infrastructure costs",
    ],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: "expense-tracker",
    title: "Expense Tracker",
    description:
      "A smart expense management application with AI-powered categorization, receipt scanning, and comprehensive financial reporting. Built for teams and individuals managing complex budgets.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop&q=80",
    techStack: ["Python", "Django", "PostgreSQL", "Celery", "RabbitMQ"],
    challenges: [
      "Processing thousands of receipts in real-time",
      "Accurate multi-currency expense categorization",
      "Generating complex financial reports on demand",
    ],
    solutions: [
      "Async task queue with Celery for OCR processing",
      "ML-based categorization with 95% accuracy",
      "Materialized views for instant report generation",
    ],
    performance: [
      "Receipt processing under 2 seconds",
      "Report generation 10x faster",
      "Handles 100K+ transactions monthly",
    ],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: "analytics-dashboard",
    title: "Analytics Dashboard",
    description:
      "Real-time analytics platform processing millions of events per day. Interactive dashboards, custom metrics, alerting, and data export capabilities for data-driven decision making.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=800&fit=crop&q=80",
    techStack: ["Python", "FastAPI", "Redis", "PostgreSQL", "Kubernetes", "AWS"],
    challenges: [
      "Processing 5M+ events per day in real-time",
      "Sub-second dashboard refresh rates",
      "Horizontal scaling during traffic spikes",
    ],
    solutions: [
      "Event streaming pipeline with Redis Streams",
      "Pre-aggregated metrics with time-series caching",
      "Auto-scaling Kubernetes pods based on load",
    ],
    performance: [
      "Dashboard loads in under 500ms",
      "Handles 10x traffic spikes seamlessly",
      "99.9% data accuracy guarantee",
    ],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
];
