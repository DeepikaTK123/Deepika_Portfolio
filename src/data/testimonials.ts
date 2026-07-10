export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Mitchell",
    role: "CTO",
    company: "TechFlow Inc",
    content:
      "Deepika transformed our backend infrastructure from a monolith to a scalable microservices architecture. The performance improvements were immediate — our API response times dropped by 60%. Exceptional engineering skills.",
    avatar: "SM",
    rating: 5,
  },
  {
    id: "2",
    name: "James Chen",
    role: "Product Manager",
    company: "DataSync Solutions",
    content:
      "Working with Deepika was a game-changer for our document management platform. She delivered ahead of schedule, with clean code and comprehensive documentation. A true professional who understands both technology and business.",
    avatar: "JC",
    rating: 5,
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    role: "Engineering Lead",
    company: "CloudScale",
    content:
      "Deepika's expertise in Python and cloud architecture helped us scale from 1,000 to 100,000 users without a hitch. Her attention to detail and proactive communication made the entire process seamless.",
    avatar: "ER",
    rating: 5,
  },
  {
    id: "4",
    name: "Michael Park",
    role: "Founder",
    company: "FinTrack",
    content:
      "The expense tracker Deepika built for us exceeded all expectations. The AI categorization feature alone saved our team 20 hours per week. I wouldn't hesitate to recommend her for any backend project.",
    avatar: "MP",
    rating: 5,
  },
  {
    id: "5",
    name: "Lisa Thompson",
    role: "VP Engineering",
    company: "Analytics Pro",
    content:
      "Deepika architected our real-time analytics platform that now processes millions of events daily. Her system design skills are top-notch, and she consistently delivers production-ready solutions.",
    avatar: "LT",
    rating: 5,
  },
];
