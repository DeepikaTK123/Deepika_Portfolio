"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
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
        <div className="mb-12 max-w-2xl sm:mb-16 md:mb-20">
          <TextReveal
            text="Featured Projects"
            as="h2"
            className="text-heading font-bold"
          />
          <FadeIn delay={0.2}>
            <p className="mt-5 text-body text-muted sm:mt-6">
              A selection of projects showcasing scalable backend architecture,
              performance optimization, and clean engineering practices.
            </p>
          </FadeIn>
        </div>

        <div className="space-y-20 sm:space-y-28 md:space-y-32">
          {projects.map((project, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <FadeIn key={project.id} delay={0.1}>
                <article
                  className={cn(
                    "grid items-center gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16",
                    isReversed && "lg:direction-rtl"
                  )}
                >
                  {/* Image */}
                  <motion.div
                    className={cn(
                      "group relative aspect-[16/10] overflow-hidden rounded-2xl sm:rounded-3xl",
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
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 50vw"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
                    <div className="absolute inset-0 rounded-2xl border border-white/[0.06] sm:rounded-3xl" />
                  </motion.div>

                  {/* Content */}
                  <div className={cn("min-w-0", isReversed && "lg:order-1")}>
                    <h3 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
                      {project.title}
                    </h3>

                    <p className="mt-4 text-muted leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <Badge key={tech} variant="accent">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Challenges & Solutions */}
                    <div className="mt-8 grid gap-6 sm:grid-cols-2">
                      <div>
                        <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-foreground">
                          Challenges
                        </h4>
                        <ul className="space-y-2">
                          {project.challenges.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2 text-sm text-muted"
                            >
                              <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-foreground">
                          Solutions
                        </h4>
                        <ul className="space-y-2">
                          {project.solutions.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2 text-sm text-muted"
                            >
                              <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-success" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Performance */}
                    <div className="mt-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">
                      <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-foreground">
                        Performance Improvements
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {project.performance.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-success/20 bg-success/10 px-3 py-1.5 text-xs font-medium text-success"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
                      <MagneticButton
                        type="button"
                        className="w-full sm:w-auto"
                        onClick={openProjectAccess}
                      >
                        View Project
                        <ArrowUpRight size={16} />
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
