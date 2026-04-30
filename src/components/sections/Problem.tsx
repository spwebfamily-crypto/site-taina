"use client";

import { FadeInUp, StaggerContainer, StaggerItem } from "../AnimatedSection";

const painPoints = [
  "Quero ensinar sobre Deus, mas não sei por onde começar.",
  "A rotina é corrida e o momento espiritual acaba ficando para depois.",
  "Preciso explicar a Bíblia de um jeito simples para uma criança pequena.",
];

export function ProblemSection() {
  return (
    <section
      className="relative overflow-hidden bg-background px-4 py-14 sm:px-6 md:px-12 md:py-24"
      aria-labelledby="problem-heading"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-foreground/10" />

      <div className="relative z-10 mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <FadeInUp>
          <p className="text-sm font-black uppercase tracking-[0.14em] text-coral">
            Para a rotina real
          </p>
          <h2
            id="problem-heading"
            className="mt-3 text-[2rem] font-black leading-tight text-foreground md:text-5xl"
          >
            Um jeito simples de abrir a Bíblia com as crianças.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground/60 md:text-lg">
            O material foi pensado para caber em poucos minutos do dia, sem
            preparação longa e sem linguagem difícil.
          </p>
        </FadeInUp>

        <StaggerContainer className="grid gap-3">
          {painPoints.map((text, index) => (
            <StaggerItem key={text}>
              <div className="grid grid-cols-[auto_1fr] items-start gap-3 rounded-[16px] border border-foreground/10 bg-white px-4 py-4 shadow-sm md:gap-4 md:rounded-[18px] md:px-5">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F7E7C6] text-sm font-black text-[#8D6230] md:h-9 md:w-9">
                  {index + 1}
                </span>
                <p className="text-sm font-bold leading-relaxed text-foreground/70 md:text-base">
                  {text}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
