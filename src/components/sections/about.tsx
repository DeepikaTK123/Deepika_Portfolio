"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TextReveal } from "@/components/effects/text-reveal";
import { FadeIn } from "@/components/effects/fade-in";
import { AnimatedCounter } from "@/components/effects/animated-counter";
import { GradientBlob } from "@/components/effects/gradient-blob";
import {
  experience,
  education,
  skills,
  stats,
} from "@/data/site";
import { Badge } from "@/components/ui/badge";
import { assetPath } from "@/lib/asset-path";

export function AboutSection() {
  return (
    <section id="about" className="relative section-padding overflow-hidden" aria-label="About">
      <GradientBlob className="top-[20%] right-[-15%]" color="rgba(59,130,246,0.06)" size="600px" />

      <div className="container-wide">
        <TextReveal
          text="Who I Am"
          as="h2"
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-20"
        />

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Image */}
          <FadeIn direction="left">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden group">
              <Image
                src={assetPath("/images/deepika.jpg")}
                alt="Deepika - Python Backend Developer"
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
          </FadeIn>

          {/* Content */}
          <div className="space-y-16">
            <FadeIn delay={0.1}>
              <p className="text-lg text-muted leading-relaxed">
                Software Engineer with 4+ years of experience designing,
                developing, and deploying scalable backend systems using Python
                and modern cloud technologies. Strong expertise in RESTful APIs,
                FastAPI, Flask, and Django.
              </p>
              <p className="mt-4 text-lg text-muted leading-relaxed">
                Hands-on experience with AWS EC2 deployments, database design,
                performance optimization, Docker containerization, and CI/CD
                pipelines — delivering reliable enterprise applications with
                cross-functional teams.
              </p>
            </FadeIn>

            {/* Stats */}
            <FadeIn delay={0.2}>
              <div className="grid grid-cols-3 gap-8">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center lg:text-left">
                    <div className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                      <AnimatedCounter
                        value={stat.value}
                        suffix={stat.suffix}
                      />
                    </div>
                    <p className="mt-2 text-sm text-muted font-medium">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* Experience */}
            <FadeIn delay={0.3}>
              <h3 className="text-2xl font-semibold tracking-tight mb-8">
                Experience
              </h3>
              <div className="space-y-8">
                {experience.map((item, i) => (
                  <motion.div
                    key={`${item.company}-${item.period}`}
                    className="relative pl-8 border-l border-white/[0.08]"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                  >
                    <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-accent border-2 border-background" />
                    <span className="text-xs font-medium text-accent tracking-wide">
                      {item.period}
                    </span>
                    <h4 className="mt-1 text-lg font-semibold text-foreground">
                      {item.role}
                    </h4>
                    <p className="text-sm text-muted font-medium">
                      {item.company}
                    </p>
                    <p className="mt-2 text-sm text-muted leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </FadeIn>

            {/* Education */}
            <FadeIn delay={0.4}>
              <h3 className="text-2xl font-semibold tracking-tight mb-8">
                Education
              </h3>
              {education.map((item) => (
                <div
                  key={item.degree}
                  className="relative pl-8 border-l border-white/[0.08]"
                >
                  <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-success border-2 border-background" />
                  <span className="text-xs font-medium text-success tracking-wide">
                    {item.period}
                  </span>
                  <h4 className="mt-1 text-lg font-semibold text-foreground">
                    {item.degree}
                  </h4>
                  <p className="text-sm text-muted font-medium">
                    {item.institution}
                  </p>
                  <p className="mt-2 text-sm text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </FadeIn>

            {/* Skills */}
            <FadeIn delay={0.5}>
              <h3 className="text-2xl font-semibold tracking-tight mb-6">
                Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="default">
                    {skill}
                  </Badge>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
