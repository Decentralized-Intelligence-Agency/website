"use client";

import { ScrollReveal } from "@/components/scroll-reveal";

export function NonprofitInfo() {
  return (
    <section className="bg-section-alt py-32" aria-labelledby="nonprofit-heading">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <ScrollReveal direction="up">
          <p className="font-mono text-amber text-xs uppercase tracking-widest mb-6">
            TAX-EXEMPT NONPROFIT
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.08}>
          <h2
            id="nonprofit-heading"
            className="font-display text-4xl md:text-5xl text-foreground mb-12 leading-tight"
          >
            501(c)(3) Information
          </h2>
        </ScrollReveal>

        <div className="flex flex-col gap-6">
          <ScrollReveal direction="up" delay={0.15}>
            <p className="text-lg leading-relaxed text-muted-foreground">
              The Decentralized Intelligence Agency is a registered 501(c)(3) tax-exempt
              scientific nonprofit organization.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.25}>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Donations to the DIA are tax-deductible charitable contributions under IRC
              Section 170. We are classified as a public charity under IRC Section 501(c)(3)
              and are eligible to receive tax-deductible contributions in accordance with
              applicable law.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.35}>
            <p className="text-xl italic leading-relaxed gradient-text">
              The DIA is committed to transparency. Our financial statements, Form 990
              filings, and governance documents are available upon request.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
