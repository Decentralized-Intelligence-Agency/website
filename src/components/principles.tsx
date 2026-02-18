"use client";

import { Network, BookOpen, Megaphone, Gift, Brain } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";

interface PrincipleCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const PRINCIPLES: PrincipleCard[] = [
  {
    icon: <Network size={24} />,
    title: "Decentralization Over Consolidation",
    description:
      "Power concentrated is power abused. We build systems that distribute capability, resist monopoly, and enable individual sovereignty.",
  },
  {
    icon: <BookOpen size={24} />,
    title: "Open Source Everything",
    description:
      "Knowledge hidden is knowledge lost. Every line of code, every research finding, every design decision we make is published openly for anyone to use, study, modify, and share.",
  },
  {
    icon: <Megaphone size={24} />,
    title: "Free Speech Maximalism",
    description:
      "The right to speak, publish, and build without permission is foundational to human flourishing. We defend open platforms and resist censorship in all forms.",
  },
  {
    icon: <Gift size={24} />,
    title: "Generous Interfaces",
    description:
      "Software should be generous \u2014 giving users more power, more understanding, more capability. We reject dark patterns, engagement manipulation, and extractive design.",
  },
  {
    icon: <Brain size={24} />,
    title: "Collective Intelligence",
    description:
      "Individual intelligence is limited. Collective intelligence is unbounded. We build systems that help humans think together, learn together, and create together.",
  },
];

export function Principles() {
  return (
    <section id="principles" className="py-32" aria-labelledby="principles-heading">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <p className="font-mono text-amber text-xs uppercase tracking-widest mb-4">
              WHAT WE STAND FOR
            </p>
            <h2
              id="principles-heading"
              className="font-display text-4xl md:text-5xl text-foreground"
            >
              Our Principles
            </h2>
          </div>
        </ScrollReveal>

        {/* First row: 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRINCIPLES.slice(0, 3).map((principle, index) => (
            <ScrollReveal
              key={principle.title}
              direction="up"
              delay={0.1 + index * 0.1}
            >
              <article className="glass-card p-8 h-full flex flex-col gap-5">
                <div
                  className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-amber/10 text-amber flex-shrink-0"
                  aria-hidden="true"
                >
                  {principle.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground leading-snug">
                  {principle.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed flex-1">
                  {principle.description}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* Second row: 2 cards centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
          {PRINCIPLES.slice(3).map((principle, index) => (
            <ScrollReveal
              key={principle.title}
              direction="up"
              delay={0.4 + index * 0.1}
            >
              <article className="glass-card p-8 h-full flex flex-col gap-5">
                <div
                  className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-amber/10 text-amber flex-shrink-0"
                  aria-hidden="true"
                >
                  {principle.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground leading-snug">
                  {principle.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed flex-1">
                  {principle.description}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
