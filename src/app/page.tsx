import { HeroSection } from "@/components/sections/hero";
import { TrustedBySection } from "@/components/sections/trusted-by";
import { AboutSection } from "@/components/sections/about";
import { WhyChooseSection } from "@/components/sections/why-choose";
import { ServicesSection } from "@/components/sections/services";
import { ProjectsSection } from "@/components/sections/projects";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { IndustriesSection } from "@/components/sections/industries";
import { TechStackSection } from "@/components/sections/tech-stack";
import { ProcessSection } from "@/components/sections/process";
import { FaqSection } from "@/components/sections/faq";
import { CTASection } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustedBySection />
      <AboutSection />
      <WhyChooseSection />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <IndustriesSection />
      <TechStackSection />
      <ProcessSection />
      <FaqSection />
      <CTASection />
    </>
  );
}
