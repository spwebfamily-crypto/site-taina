"use client";

import Image from "next/image";
import { FadeInUp, ScaleIn } from "../AnimatedSection";
import { CTAButton } from "../CTAButton";
import { Floating, BibleSVG } from "../BiblicalIllustrations";

export function ProductSection() {
  return (
    <section
      className="relative overflow-hidden bg-background px-6 py-16 md:px-12 md:py-24"
      aria-labelledby="product-heading"
    >
      <Floating className="absolute -right-4 top-[15%] opacity-25 md:right-[5%] md:opacity-35" duration={7} delay={1} yRange={14} rotate={-5}>
        <BibleSVG className="h-28 w-24 md:h-40 md:w-32" />
      </Floating>

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-10 md:flex-row md:gap-16">
        <ScaleIn className="flex-1">
          <div className="relative mx-auto max-w-md">
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-pink/15 to-gold/15 blur-xl" />
            <Image
              src="/images/livro-aberto.png"
              alt="Devocional Pequenos Corações aberto mostrando uma história bíblica ilustrada com atividade para colorir"
              width={500}
              height={350}
              className="relative rounded-lg drop-shadow-xl"
            />
          </div>
        </ScaleIn>

        <div className="flex flex-1 flex-col items-center text-center md:items-start md:text-left">
          <FadeInUp>
            <h2
              id="product-heading"
              className="text-3xl font-extrabold md:text-4xl"
            >
              Devocional Pequenos Corações
            </h2>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full bg-white px-4 py-2 text-sm font-bold text-foreground shadow-sm">
                📄 Formato digital (PDF)
              </span>
              <span className="rounded-full bg-white px-4 py-2 text-sm font-bold text-foreground shadow-sm">
                🖨️ Pronto para imprimir
              </span>
              <span className="rounded-full bg-white px-4 py-2 text-sm font-bold text-foreground shadow-sm">
                ♾️ Use quantas vezes quiser
              </span>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <div className="mt-8">
              <p className="text-lg text-foreground/60">Acesso imediato por apenas</p>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-xl text-foreground/50">R$</span>
                <span className="text-6xl font-black text-coral">14,90</span>
              </div>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.3} className="mt-8">
            <CTAButton />
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}
