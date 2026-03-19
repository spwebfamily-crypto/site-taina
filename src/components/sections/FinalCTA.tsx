"use client";

import { motion } from "framer-motion";
import { FadeInUp } from "../AnimatedSection";
import { CTAButton } from "../CTAButton";

export function FinalCTASection() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-background to-pink-light/30 px-6 py-20 md:px-12 md:py-28"
      aria-labelledby="final-cta-heading"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-gold/5" />
        <div className="absolute -right-32 top-1/3 h-80 w-80 rounded-full bg-coral/5" />
      </div>

      <div className="relative mx-auto max-w-3xl text-center">
        <FadeInUp>
          <p className="text-xl font-bold leading-relaxed md:text-2xl">
            <span className="text-coral">Pequenos momentos hoje</span>
            <br />
            podem gerar <span className="text-gold">grandes raízes</span> no
            futuro.
          </p>
        </FadeInUp>

        <FadeInUp delay={0.15}>
          <h2
            id="final-cta-heading"
            className="mt-10 text-3xl font-black md:text-4xl"
          >
            Comece hoje mesmo a construir esse tempo com Deus.
          </h2>
        </FadeInUp>

        <FadeInUp delay={0.25}>
          <p className="mt-6 text-lg text-foreground/60">
            Acesso imediato ao{" "}
            <strong className="text-foreground">
              Devocional Pequenos Corações
            </strong>
          </p>
        </FadeInUp>

        <FadeInUp delay={0.35}>
          <div className="mt-6 flex items-baseline justify-center gap-1">
            <span className="text-lg text-foreground/50">Por apenas</span>
            <span className="ml-2 text-lg text-foreground/50">R$</span>
            <span className="text-5xl font-black text-coral">14,90</span>
          </div>
        </FadeInUp>

        <FadeInUp delay={0.45} className="mt-8 flex flex-col items-center">
          {/* Arrow decoration */}
          <motion.svg
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mb-4 h-16 w-16 text-purple-400"
            viewBox="0 0 64 64"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M20 10C20 10 15 35 32 42C49 49 44 55 44 55"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M38 50L44 56L50 48"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </motion.svg>

          <CTAButton className="text-xl px-12 py-6" />
        </FadeInUp>
      </div>
    </section>
  );
}
