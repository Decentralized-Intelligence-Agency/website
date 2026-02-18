"use client";

import { ScrollReveal } from "@/components/scroll-reveal";

const PARAGRAPHS = [
  {
    id: 1,
    text: "The Decentralized Intelligence Agency inverts the traditional model of an intelligence agency. Where conventional intelligence organizations centralize knowledge, classify information, and concentrate power, the DIA decentralizes intelligence, liberates knowledge, and distributes capability.",
    emphasized: true,
  },
  {
    id: 2,
    text: "We are a scientific nonprofit that funds research and development in collective intelligence, open-source AI systems, and decentralized knowledge infrastructure. Our work spans theoretical research, practical software development, and educational initiatives — all committed to increasing humanity\u2019s collective capacity to understand, create, and solve problems together.",
    emphasized: false,
  },
  {
    id: 3,
    text: "Founded by the creator of the Logos Liber open-source ecosystem, the DIA serves as the philosophical and organizational foundation that guides a network of interconnected projects working toward a more intelligent, more free future.",
    emphasized: false,
  },
];

export function Introduction() {
  return (
    <section id="about" className="bg-section-alt py-32" aria-labelledby="about-heading">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <ScrollReveal direction="up">
          <p className="font-mono text-amber text-xs uppercase tracking-widest mb-6">
            ABOUT
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.08}>
          <h2
            id="about-heading"
            className="font-display text-4xl md:text-5xl text-foreground mb-12 leading-tight"
          >
            What is the DIA?
          </h2>
        </ScrollReveal>

        <div className="flex flex-col gap-6">
          {PARAGRAPHS.map((para, index) =>
            para.emphasized ? (
              <ScrollReveal key={para.id} direction="up" delay={0.1 + index * 0.1}>
                <p className="text-xl italic leading-relaxed gradient-text">
                  {para.text}
                </p>
              </ScrollReveal>
            ) : (
              <ScrollReveal key={para.id} direction="up" delay={0.1 + index * 0.1}>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {para.text}
                </p>
              </ScrollReveal>
            )
          )}
        </div>
      </div>
    </section>
  );
}
