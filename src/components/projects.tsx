"use client";

import { ExternalLink } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";

interface Project {
  name: string;
  description: string;
  href?: string;
  external?: boolean;
}

const PROJECTS: Project[] = [
  {
    name: "Logos Liber",
    description:
      "The foundational open-source ecosystem for decentralized knowledge and AI systems. A comprehensive framework for building generous, user-controlled interfaces.",
    href: "https://logosliber.org",
    external: true,
  },
  {
    name: "Generous",
    description:
      "A universal canvas for AI interaction featuring streaming generative UI. Generous demonstrates how AI interfaces can be expansive and user-empowering rather than constraining and extractive.",
    href: "https://generous.works",
    external: true,
  },
  {
    name: "Galaxy Brain",
    description:
      "Universal knowledge management infrastructure designed for human thought, not corporate data models. Capture, connect, and synthesize knowledge across any context.",
    href: "https://galaxybrain.info",
    external: true,
  },
  {
    name: "Agents of Empire",
    description:
      "Comprehensive AI agent management and orchestration. Built on the principle that users should control their agents, not rent them from platforms.",
  },
  {
    name: "Monumental Systems",
    description:
      "Production-grade Orleans actor framework development. Co-founded with our technical leadership, Monumental Systems advances distributed systems architecture for real-world applications.",
  },
];

export function Projects() {
  return (
    <section id="projects" className="bg-section-alt py-32" aria-labelledby="projects-heading">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <p className="font-mono text-amber text-xs uppercase tracking-widest mb-4">
              ECOSYSTEM
            </p>
            <h2
              id="projects-heading"
              className="font-display text-4xl md:text-5xl text-foreground mb-6"
            >
              What We Build and Fund
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              The DIA supports an ecosystem of projects working toward collective intelligence.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* First row: 3 cards */}
          {PROJECTS.slice(0, 3).map((project, index) => (
            <ScrollReveal
              key={project.name}
              direction="up"
              delay={0.1 + index * 0.08}
            >
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>

        {/* Second row: 2 cards centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
          {PROJECTS.slice(3).map((project, index) => (
            <ScrollReveal
              key={project.name}
              direction="up"
              delay={0.34 + index * 0.08}
            >
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal direction="up" delay={0.5}>
          <p className="text-center text-muted-foreground text-lg mt-12 italic font-display">
            All DIA-funded projects are released as open source. We do not build proprietary
            systems. We do not gate knowledge behind paywalls. We do not extract value from users.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const content = (
    <article className="glass-card p-8 h-full flex flex-col gap-4 group">
      <div className="flex items-center gap-3">
        <h3 className="text-xl font-semibold text-foreground leading-snug">
          {project.name}
        </h3>
        {project.href && (
          <ExternalLink
            size={16}
            className="text-amber opacity-0 group-hover:opacity-100 transition-opacity"
            aria-hidden="true"
          />
        )}
      </div>
      <p className="text-muted-foreground leading-relaxed flex-1">
        {project.description}
      </p>
      {project.href && (
        <span className="text-sm text-amber font-medium">
          {project.href.replace("https://", "")}
        </span>
      )}
    </article>
  );

  if (project.href) {
    return (
      <a
        href={project.href}
        target={project.external ? "_blank" : undefined}
        rel={project.external ? "noopener noreferrer" : undefined}
        className="block h-full transition-transform duration-200 hover:scale-[1.02]"
      >
        {content}
      </a>
    );
  }

  return content;
}
