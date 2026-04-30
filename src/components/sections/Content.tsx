"use client";

import { FadeInUp, StaggerContainer, StaggerItem } from "../AnimatedSection";

const steps = [
  {
    title: "Leia uma história curta",
    text: "Textos bíblicos adaptados para os primeiros anos, com linguagem leve e direta.",
  },
  {
    title: "Converse com a criança",
    text: "Cada tema traz uma pergunta simples para transformar leitura em conexão.",
  },
  {
    title: "Ore e pinte juntos",
    text: "Atividades e desenhos ajudam a criança a lembrar da mensagem no dia a dia.",
  },
];

const includedItems = [
  "25 histórias bíblicas",
  "Versículo em cada tema",
  "Perguntas para conversa",
  "Frases para repetir",
  "Oração guiada",
  "Desenhos para colorir",
];

export function ContentSection() {
  return (
    <section
      className="relative overflow-hidden bg-white px-4 py-14 sm:px-6 md:px-12 md:py-24"
      aria-labelledby="content-heading"
    >
      <div className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-coral via-gold to-sky md:w-2" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <FadeInUp className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.14em] text-coral">
            O que vem dentro
          </p>
          <h2
            id="content-heading"
            className="mt-3 text-[2rem] font-black leading-tight text-foreground md:text-5xl"
          >
            Um roteiro pronto para transformar leitura em momento com Deus.
          </h2>
        </FadeInUp>

        <div className="mt-8 grid gap-8 lg:mt-10 lg:grid-cols-[1.1fr_0.9fr]">
          <StaggerContainer className="grid gap-3 md:gap-4">
            {steps.map((step, index) => (
              <StaggerItem key={step.title}>
                <div className="grid grid-cols-[auto_1fr] gap-4 rounded-[16px] border border-foreground/10 bg-[#FFFDF9] p-4 shadow-sm md:gap-5 md:rounded-[18px] md:p-5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-coral text-base font-black text-white md:h-11 md:w-11 md:text-lg">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-black text-foreground md:text-xl">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-foreground/60 md:text-base">
                      {step.text}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInUp delay={0.15}>
            <div className="rounded-[20px] border border-gold/35 bg-[#FFF8EC] p-6 shadow-[0_20px_50px_rgba(121,75,39,0.08)]">
              <h3 className="text-xl font-black text-foreground">
                Você recebe
              </h3>
              <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {includedItems.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 border-b border-foreground/10 pb-3 text-sm font-extrabold text-foreground/70 last:border-b-0 last:pb-0"
                  >
                    <span className="h-2.5 w-2.5 rounded-full bg-gold" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}
