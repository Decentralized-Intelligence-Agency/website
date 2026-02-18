"use client";

import { Users, Cpu, Database, Palette, Server } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";

interface ResearchArea {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const RESEARCH_AREAS: ResearchArea[] = [
  {
    icon: <Users size={24} />,
    title: "Collective Intelligence Systems",
    description:
      "How do groups of humans create knowledge that exceeds individual capacity? How can we measure, model, and amplify collective intelligence? We study coordination mechanisms, knowledge synthesis, and collaborative reasoning.",
  },
  {
    icon: <Cpu size={24} />,
    title: "Open-Source AI Infrastructure",
    description:
      "What architectures enable user-controlled AI rather than platform-mediated AI? We research and build decentralized training, inference, and orchestration systems that resist centralized control.",
  },
  {
    icon: <Database size={24} />,
    title: "Decentralized Knowledge Architecture",
    description:
      "How should knowledge be structured, stored, and shared in systems designed for human agency rather than corporate extraction? We develop schemas, protocols, and interfaces for user-sovereign knowledge management.",
  },
  {
    icon: <Palette size={24} />,
    title: "Generous Interface Design",
    description:
      "What makes an interface generous versus extractive? We conduct applied research in interface design that empowers rather than manipulates, educates rather than addicts.",
  },
  {
    icon: <Server size={24} />,
    title: "Distributed Systems for Intelligence",
    description:
      "How can actor models, CRDTs, and distributed computing paradigms support collective intelligence applications? We advance the state of distributed systems engineering for knowledge work.",
  },
];

export function Research() {
  return (
    <section id="research" className="bg-section-alt py-32" aria-labelledby="research-heading">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <p className="font-mono text-amber text-xs uppercase tracking-widest mb-4">
              OUR FOCUS
            </p>
            <h2
              id="research-heading"
              className="font-display text-4xl md:text-5xl text-foreground mb-6"
            >
              Research Areas
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Our research and development focuses on:
            </p>
          </div>
        </ScrollReveal>

        {/* First row: 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {RESEARCH_AREAS.slice(0, 3).map((area, index) => (
            <ScrollReveal
              key={area.title}
              direction="up"
              delay={0.1 + index * 0.08}
            >
              <article className="glass-card p-8 h-full flex flex-col gap-5">
                <div
                  className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-amber/10 text-amber flex-shrink-0"
                  aria-hidden="true"
                >
                  {area.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground leading-snug">
                  {area.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed flex-1">
                  {area.description}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* Second row: 2 cards centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
          {RESEARCH_AREAS.slice(3).map((area, index) => (
            <ScrollReveal
              key={area.title}
              direction="up"
              delay={0.34 + index * 0.08}
            >
              <article className="glass-card p-8 h-full flex flex-col gap-5">
                <div
                  className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-amber/10 text-amber flex-shrink-0"
                  aria-hidden="true"
                >
                  {area.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground leading-snug">
                  {area.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed flex-1">
                  {area.description}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
