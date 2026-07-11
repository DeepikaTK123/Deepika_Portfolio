export const siteConfig = {
  name: "Deepika TK",
  title: "Deepika TK | Freelance Web Application & Backend Developer",
  description:
    "Hire Deepika TK to build secure, scalable web applications, admin dashboards, and backend systems for startups and growing businesses.",
  url: "https://deepikatk123.github.io/Deepika_Portfolio",
  locale: "en_US",
  email: "deepikakumar78910@gmail.com",
  linkedIn: "https://www.linkedin.com/in/deepika-tk07/",
  location: "Bengaluru, Karnataka, India",
  role: "Python Backend Developer",
  tagline:
    "Helping businesses build secure and scalable web applications.",
} as const;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
] as const;

export const contactEmail = siteConfig.email;
export const linkedInUrl = siteConfig.linkedIn;

export const socialLinks = {
  email: contactEmail,
  linkedin: linkedInUrl,
} as const;

export const trustedBy = [
  "Python",
  "Django",
  "FastAPI",
  "PostgreSQL",
  "Redis",
  "Docker",
  "Next.js",
  "TypeScript",
] as const;

export const heroFeatures = [
  "Custom Web Applications",
  "Secure Backend Solutions",
  "Business-Focused Development",
] as const;

export const aboutParagraphs = [
  "I'm a software engineer with 4+ years of experience helping businesses turn ideas into reliable, high-performing web applications. I specialize in custom web application development, admin dashboards, secure backend systems, and enhancing existing products — so your software works the way your business needs it to.",
  "Clients hire me when they need more than just code. I focus on clean architecture, strong security, and thoughtful user experience, delivering solutions that solve real business problems and stay easy to grow as your company scales.",
] as const;

export const stats = [
  { value: 4, suffix: "+", label: "Years of Experience" },
  { value: 10, suffix: "+", label: "Projects Delivered" },
  { value: 100, suffix: "%", label: "Commitment to Quality" },
] as const;

export const experience = [
  {
    period: "Mar 2024 — Jun 2026",
    role: "Software Engineer",
    company: "WeP Solutions Limited, Bengaluru",
    description:
      "Built and enhanced enterprise web applications that support critical business workflows. Designed secure REST APIs, authentication, and authorization systems, and improved application performance so teams could work faster with more reliable software. Collaborated closely with product and business stakeholders to deliver features that created measurable operational value.",
  },
  {
    period: "Apr 2023 — Mar 2024",
    role: "Software Engineer",
    company: "IoTronics System Pvt. Ltd., Bengaluru",
    description:
      "Developed backend applications and APIs that powered core business modules. Optimized database queries and application structure to improve speed and scalability, and delivered reusable components that helped the team ship features more efficiently without compromising quality.",
  },
  {
    period: "Mar 2022 — Mar 2023",
    role: "Associate Engineer – Product Development",
    company: "Harman Connected Services, Bengaluru",
    description:
      "Contributed to Python-based product development by building automation tools, resolving backend issues, and strengthening application stability. Supported feature enhancements and bug fixes that improved day-to-day reliability for users and internal teams.",
  },
] as const;

export const education = [
  {
    period: "2024 — 2026",
    degree: "M.Tech in Cloud Computing",
    institution: "Birla Institute of Technology and Science, Pilani",
    description:
      "Advancing expertise in scalable system design, distributed application architecture, and building high-performance software for modern business needs.",
  },
  {
    period: "2018 — 2022",
    degree: "B.E. in Information Science & Engineering",
    institution: "Kalpataru Institute of Technology (VTU)",
    description:
      "Developed a strong foundation in software engineering, databases, and application design — the core skills behind building reliable web products.",
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
  "Authentication",
  "Admin Dashboards",
  "Web Applications",
  "Clean Architecture",
  "Performance Optimization",
  "System Design",
  "Git",
  "Agile",
] as const;

export const footerQuickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
] as const;
