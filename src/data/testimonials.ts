export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  content: string;
  avatar: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Aarav Sharma",
    role: "Founder",
    company: "TechNova Solutions",
    content:
      "Working with Deepika was a fantastic experience. She quickly understood our business requirements and delivered a secure, scalable web application that exceeded our expectations. The communication was clear, and every milestone was delivered on time.",
    avatar: "AS",
    rating: 5,
  },
  {
    id: "2",
    name: "Priya Nair",
    role: "Operations Manager",
    content:
      "Deepika developed a modern admin dashboard that significantly improved the way we manage our daily operations. The interface is intuitive, fast, and exactly what our team needed.",
    avatar: "PN",
    rating: 5,
  },
  {
    id: "3",
    name: "Rahul Verma",
    role: "Product Manager",
    content:
      "Our backend was redesigned with clean architecture and optimized APIs. The application became more reliable, easier to maintain, and performed exceptionally well under heavy usage.",
    avatar: "RV",
    rating: 5,
  },
  {
    id: "4",
    name: "Sneha Reddy",
    role: "Business Owner",
    content:
      "We approached Deepika to enhance our existing application with new features and performance improvements. The work was completed professionally, and the quality of the implementation was outstanding.",
    avatar: "SR",
    rating: 5,
  },
  {
    id: "5",
    name: "Vikram Patel",
    role: "CEO",
    company: "Innovate Digital",
    content:
      "From understanding our requirements to delivering the final product, the entire process was smooth and transparent. We highly recommend Deepika for anyone looking for a reliable backend and web application developer.",
    avatar: "VP",
    rating: 5,
  },
];
