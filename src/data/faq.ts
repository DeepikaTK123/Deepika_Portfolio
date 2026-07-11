export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    id: "timeline",
    question: "How long does a project usually take?",
    answer:
      "Most projects take between 2 and 8 weeks, depending on scope, features, and complexity. After our initial discussion, I’ll share a clear timeline with milestones so you always know what to expect.",
  },
  {
    id: "custom",
    question: "Can you build a custom web application based on my requirements?",
    answer:
      "Yes. I specialize in custom web application development tailored to your business needs — from core workflows and dashboards to secure authentication and high-performance APIs.",
  },
  {
    id: "enhance",
    question: "Can you improve my existing application?",
    answer:
      "Absolutely. I can add new features, fix bugs, improve performance, refactor code, and modernize your backend so your current product becomes more reliable and easier to grow.",
  },
  {
    id: "source-code",
    question: "Will I receive the complete source code?",
    answer:
      "Yes. Once the project is delivered, you receive the complete source code and ownership of the work created for your business.",
  },
  {
    id: "communication",
    question: "How will we communicate during development?",
    answer:
      "We’ll stay in touch through email, calls, or your preferred messaging channel. You’ll get regular progress updates, demos, and clear next steps throughout the project.",
  },
  {
    id: "discuss",
    question: "Can we discuss the project before getting started?",
    answer:
      "Of course. Book a free consultation and we’ll discuss your goals, requirements, timeline, and the best approach before any commitment.",
  },
];
