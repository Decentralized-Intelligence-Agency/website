"use client";

import { Heart, Code, FlaskConical, Bell, Github, Mail } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";

interface RoleCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ROLE_CARDS: RoleCard[] = [
  {
    icon: <Heart size={24} />,
    title: "Donate",
    description:
      "The DIA is a 501(c)(3) tax-exempt scientific nonprofit. Donations are tax-deductible. Your support funds open-source development, scientific research, and educational initiatives that increase collective intelligence for everyone.",
  },
  {
    icon: <Code size={24} />,
    title: "Contribute",
    description:
      "All DIA-funded projects welcome open-source contributions. Visit individual project repositories to contribute code, documentation, research, or design work.",
  },
  {
    icon: <FlaskConical size={24} />,
    title: "Research With Us",
    description:
      "We collaborate with academic researchers, independent scholars, and practitioners working on collective intelligence, decentralized systems, and open-source AI. If your research aligns with our mission, we want to hear from you.",
  },
  {
    icon: <Bell size={24} />,
    title: "Stay Informed",
    description:
      "Follow our work, read our research, and track ecosystem developments.",
  },
];

export function GetInvolved() {
  return (
    <section id="get-involved" className="py-32" aria-labelledby="get-involved-heading">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <p className="font-mono text-amber text-xs uppercase tracking-widest mb-4">
              JOIN US
            </p>
            <h2
              id="get-involved-heading"
              className="font-display text-4xl md:text-5xl text-foreground mb-6"
            >
              Get Involved
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Intelligence should be distributed, not concentrated. Knowledge should be free, not gated.
              If you share these values, there&apos;s a place for you here.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {ROLE_CARDS.map((card, index) => (
            <ScrollReveal
              key={card.title}
              direction="up"
              delay={0.1 + index * 0.08}
            >
              <article className="glass-card p-6 text-center flex flex-col items-center gap-4 h-full">
                <div
                  className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-amber/10 text-amber"
                  aria-hidden="true"
                >
                  {card.icon}
                </div>
                <h3 className="text-base font-semibold text-foreground leading-snug">
                  {card.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {card.description}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal direction="up" delay={0.35}>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://github.com/Decentralized-Intelligence-Agency"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2 px-5 py-2.5
                border border-card-border rounded-lg
                text-sm font-medium text-muted-foreground
                transition-all duration-200
                hover:border-amber hover:text-amber-light hover:bg-amber/5
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 focus-visible:ring-offset-background
              "
            >
              <Github size={16} aria-hidden="true" />
              GitHub Organization
            </a>
            <a
              href="mailto:info@decentralizedintelligence.agency"
              className="
                inline-flex items-center gap-2 px-5 py-2.5
                border border-card-border rounded-lg
                text-sm font-medium text-muted-foreground
                transition-all duration-200
                hover:border-amber hover:text-amber-light hover:bg-amber/5
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 focus-visible:ring-offset-background
              "
            >
              <Mail size={16} aria-hidden="true" />
              Contact Us
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
