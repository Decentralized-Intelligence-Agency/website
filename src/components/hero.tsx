"use client";

import { motion } from "framer-motion";
import { Github, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { ParticleBg } from "@/components/particle-bg";

const HEADLINE = "Intelligence, Liberated.";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 40, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

export default function Hero() {
  const words = HEADLINE.split(" ");

  return (
    <section
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden",
        "px-6 text-center"
      )}
    >
      <ParticleBg className="absolute inset-0" />

      {/* Amber radial glow */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        aria-hidden="true"
      >
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[800px] rounded-full blur-[120px]"
          style={{
            background:
              "radial-gradient(ellipse, rgba(245, 158, 11, 0.08) 0%, rgba(251, 191, 36, 0.04) 50%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Headline */}
        <motion.h1
          className="font-hero text-5xl font-bold leading-tight tracking-wide md:text-7xl lg:text-8xl"
          aria-label={HEADLINE}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              variants={wordVariants}
              className="mr-[0.25em] inline-block last:mr-0 gradient-text"
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          custom={0.75}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl"
        >
          The Decentralized Intelligence Agency is a 501(c)(3) scientific nonprofit
          dedicated to increasing collective intelligence through open-source research,
          development, and education.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          custom={1.0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="#about"
            className={cn(
              "group inline-flex h-12 items-center gap-2 rounded-full px-6",
              "text-sm font-semibold text-void",
              "transition-all duration-200",
              "hover:shadow-[0_0_24px_rgba(245,158,11,0.4)]",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber",
              "focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            )}
            style={{
              background: "linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)",
            }}
          >
            Explore Our Work
            <ArrowRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>

          <a
            href="https://github.com/Decentralized-Intelligence-Agency"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex h-12 items-center gap-2 rounded-full border",
              "border-foreground/20 px-6 text-sm font-semibold text-foreground",
              "transition-all duration-200",
              "hover:border-amber-light/40 hover:bg-amber/5",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/50",
              "focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            )}
          >
            <Github className="h-4 w-4" aria-hidden="true" />
            View on GitHub
          </a>
        </motion.div>

        {/* Tagline */}
        <motion.p
          custom={1.3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-mono text-xs tracking-widest text-muted/50"
          aria-hidden="true"
        >
          intelligence &middot; liberated
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        custom={1.6}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-hidden="true"
      >
        <div className="flex flex-col items-center gap-1.5">
          <span className="text-xs tracking-widest text-muted uppercase">
            scroll
          </span>
          <div className="h-8 w-px bg-gradient-to-b from-muted to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
