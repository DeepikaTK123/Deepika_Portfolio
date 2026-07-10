"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GitHubIcon } from "@/components/icons/brand-icons";
import { TextReveal } from "@/components/effects/text-reveal";
import { FadeIn } from "@/components/effects/fade-in";
import { MagneticButton } from "@/components/effects/magnetic-button";
import { Badge } from "@/components/ui/badge";
import { useConsultation } from "@/components/consultation/consultation-provider";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

export function ProjectsSection() {
  const { openProjectAccess } = useConsultation();
  return (
    <section
      id="projects"
      className="relative section-padding overflow-hidden"
      aria-label="Projects"
    >
      <div className="container-wide">
        <div className="max-w-2xl mb-20">
          <TextReveal
            text="Featured Projects"
            as="h2"
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
          />
          <FadeIn delay={0.2}>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              A selection of projects showcasing scalable backend architecture,
              performance optimization, and clean engineering practices.
            </p>
          </FadeIn>
        </div>

        <div className="space-y-32">
          {projects.map((project, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <FadeIn key={project.id} delay={0.1}>
                <article
                  className={cn(
                    "grid lg:grid-cols-2 gap-12 lg:gap-16 items-center",
                    isReversed && "lg:direction-rtl"
                  )}
                >
                  {/* Image */}
                  <motion.div
                    className={cn(
                      "relative aspect-[16/10] rounded-3xl overflow-hidden group",
                      isReversed && "lg:order-2"
                    )}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
                    <div className="absolute inset-0 border border-white/[0.06] rounded-3xl" />
                  </motion.div>

                  {/* Content */}
                  <div className={cn(isReversed && "lg:order-1")}>
                    <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                      {project.title}
                    </h3>

                    <p className="mt-4 text-muted leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mt-6">
                      {project.techStack.map((tech) => (
                        <Badge key={tech} variant="accent">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Challenges & Solutions */}
                    <div className="grid sm:grid-cols-2 gap-6 mt-8">
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">
                          Challenges
                        </h4>
                        <ul className="space-y-2">
                          {project.challenges.map((item) => (
                            <li
                              key={item}
                              className="text-sm text-muted flex items-start gap-2"
                            >
                              <span className="w-1 h-1 rounded-full bg-accent mt-2.5 shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">
                          Solutions
                        </h4>
                        <ul className="space-y-2">
                          {project.solutions.map((item) => (
                            <li
                              key={item}
                              className="text-sm text-muted flex items-start gap-2"
                            >
                              <span className="w-1 h-1 rounded-full bg-success mt-2.5 shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Performance */}
                    <div className="mt-6 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                      <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">
                        Performance Improvements
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {project.performance.map((item) => (
                          <span
                            key={item}
                            className="text-xs font-medium text-success bg-success/10 px-3 py-1.5 rounded-full border border-success/20"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-4 mt-8">
                      <MagneticButton type="button" onClick={openProjectAccess}>
                        View Project
                        <ArrowUpRight size={16} />
                      </MagneticButton>
                      <MagneticButton
                        variant="secondary"
                        type="button"
                        onClick={openProjectAccess}
                      >
                        <GitHubIcon size={16} />
                        GitHub
                      </MagneticButton>
                    </div>
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
