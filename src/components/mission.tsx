"use client";

import { Hammer, FlaskConical, Lightbulb, Megaphone } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";

interface PillarCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const PILLARS: PillarCard[] = [
  {
    icon: <Hammer size={24} />,
    title: "Building Open Infrastructure for Thought",
    description:
      "Creating tools and systems that amplify human intelligence without gatekeeping, surveillance, or extraction. Every system we build or fund is open source, designed to be owned and operated by anyone.",
  },
  {
    icon: <FlaskConical size={24} />,
    title: "Advancing Research in Distributed Intelligence",
    description:
      "Supporting scientific research into how knowledge is created, shared, and synthesized across individuals and communities. We study collective intelligence not as metaphor, but as measurable phenomenon.",
  },
  {
    icon: <Lightbulb size={24} />,
    title: "Demonstrating Alternatives to Centralized AI",
    description:
      "Developing proof-of-concept systems that show decentralized, user-controlled AI is not just possible but superior for human flourishing. We build the future we want to inhabit.",
  },
  {
    icon: <Megaphone size={24} />,
    title: "Educating and Advocating",
    description:
      "Publishing research, teaching principles, and advocating for policy that protects open-source development, free expression, and decentralized systems.",
  },
];

export function Mission() {
  return (
    <section id="mission" className="py-32" aria-labelledby="mission-heading">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <p className="font-mono text-amber text-xs uppercase tracking-widest mb-4">
              OUR MISSION
            </p>
            <h2
              id="mission-heading"
              className="font-display text-4xl md:text-5xl text-foreground mb-6"
            >
              We Increase Collective Intelligence
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PILLARS.map((pillar, index) => (
            <ScrollReveal
              key={pillar.title}
              direction="up"
              delay={0.1 + index * 0.1}
            >
              <article className="glass-card p-8 h-full flex flex-col gap-5">
                <div
                  className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-amber/10 text-amber flex-shrink-0"
                  aria-hidden="true"
                >
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed flex-1">
                  {pillar.description}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
