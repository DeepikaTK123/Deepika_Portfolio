export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
] as const;

export const contactEmail = "deepikakumar78910@gmail.com";

export const linkedInUrl = "https://www.linkedin.com/in/deepika-tk07/";
export const githubUrl = "https://github.com/DeepikaTK123";

export const socialLinks = {
  email: contactEmail,
  linkedin: linkedInUrl,
  github: githubUrl,
} as const;

export const trustedBy = [
  "AWS",
  "Docker",
  "Python",
  "Django",
  "FastAPI",
  "PostgreSQL",
  "Redis",
  "RabbitMQ",
  "GitHub",
  "Kubernetes",
] as const;

export const heroSkills = [
  "Python",
  "FastAPI",
  "AWS",
  "Docker",
  "Kubernetes",
] as const;

export const stats = [
  { value: 4, suffix: "+", label: "Years" },
  { value: 15, suffix: "+", label: "Clients" },
  { value: 99, suffix: "%", label: "Delivery" },
] as const;

export const experience = [
  {
    period: "Mar 2024 — June 2026",
    role: "Software Engineer",
    company: "WeP Solutions Limited, Bengaluru",
    description:
      "Designing scalable Python backend services and REST APIs for enterprise Document Management Systems. Deploying and maintaining applications on AWS EC2, building automation tools, and implementing logging and monitoring for production reliability.",
  },
  {
    period: "Apr 2023 — Mar 2024",
    role: "Software Engineer",
    company: "IoTronics System Pvt. Ltd., Bengaluru",
    description:
      "Developed backend applications using Python frameworks and REST APIs. Designed database schemas, optimized SQL queries, and built reusable modules to improve scalability and development efficiency in Agile delivery cycles.",
  },
  {
    period: "Mar 2022 — Mar 2023",
    role: "Associate Engineer – Product Development",
    company: "Harman Connected Services, Bengaluru",
    description:
      "Built Python automation scripts for internal development workflows. Assisted in debugging backend services, supported functional and system testing, and collaborated with engineering teams to improve system stability.",
  },
] as const;

export const education = [
  {
    period: "2024 — 2026",
    degree: "M.Tech in Cloud Computing",
    institution: "Birla Institute of Technology and Science, Pilani",
    description:
      "Pursuing advanced studies in cloud computing, distributed systems, and modern infrastructure architecture.",
  },
  {
    period: "2018 — 2022",
    degree: "B.E. in Information Science & Engineering",
    institution: "Kalpataru Institute of Technology (VTU)",
    description:
      "Built a strong foundation in software engineering, databases, and information systems.",
  },
] as const;

export const skills = [
  "Python",
  "FastAPI",
  "Flask",
  "Django",
  "REST APIs",
  "PostgreSQL",
  "SQL",
  "AWS",
  "EC2",
  "Docker",
  "CI/CD",
  "Redis",
  "RabbitMQ",
  "Microservices",
  "Git",
  "Kubernetes",
  "System Design",
  "Performance Tuning",
  "Agile",
] as const;
