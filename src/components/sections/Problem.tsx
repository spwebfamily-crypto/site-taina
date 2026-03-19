"use client";

import { FadeInUp } from "../AnimatedSection";
import { DotsDivider } from "../Decorations";

export function ProblemSection() {
  return (
    <section className="bg-white px-6 py-16 md:px-12 md:py-24" aria-labelledby="problem-heading">
      <div className="mx-auto max-w-3xl text-center">
        <FadeInUp>
          <DotsDivider />
        </FadeInUp>

        <FadeInUp delay={0.1}>
          <p className="mt-10 text-lg leading-relaxed text-foreground/60 md:text-xl">
            Sem tempo? Você ainda pode ensinar seu filho sobre Deus de forma
            simples.
          </p>
        </FadeInUp>

        <FadeInUp delay={0.2}>
          <h2
            id="problem-heading"
            className="mt-8 text-2xl font-extrabold leading-snug md:text-3xl"
          >
            <span className="text-coral">Ensinar uma criança sobre Deus</span>{" "}
            é um dos maiores presentes que podemos oferecer.
          </h2>
        </FadeInUp>

        <FadeInUp delay={0.3}>
          <p className="mt-6 text-lg leading-relaxed text-foreground/60">
            Mas, na correria do dia a dia, nem sempre é fácil saber como fazer
            isso de forma simples e constante.
          </p>
        </FadeInUp>

        <FadeInUp delay={0.4}>
          <p className="mt-8 text-lg leading-relaxed text-foreground/70">
            O Devocional Pequenos Corações foi criado para tornar esse momento{" "}
            <strong className="text-foreground">
              mais fácil, leve e especial.
            </strong>
            <br />
            Um material pensado para ajudar no ensino bíblico infantil de forma
            prática, com linguagem acessível e atividades que envolvem a
            criança.
          </p>
        </FadeInUp>
      </div>
    </section>
  );
}
