"use client";

import { StaggerContainer, StaggerItem, FadeInUp } from "../AnimatedSection";

const audiences = [
  { emoji: "❤️", label: "Pais e mães" },
  { emoji: "💚", label: "Avós e familiares" },
  { emoji: "❤️", label: "Professores e educadores" },
  { emoji: "💚", label: "Líderes e voluntários da escolinha da igreja" },
];

export function AudienceSection() {
  return (
    <section
      className="bg-background px-6 py-16 md:px-12 md:py-24"
      aria-labelledby="audience-heading"
    >
      <div className="mx-auto max-w-4xl">
        <FadeInUp className="text-center">
          <h2
            id="audience-heading"
            className="text-3xl font-extrabold md:text-4xl"
          >
            Ideal para
          </h2>
        </FadeInUp>

        <StaggerContainer className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {audiences.map((item) => (
            <StaggerItem key={item.label}>
              <div className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
                <span className="text-2xl" role="img" aria-hidden="true">
                  {item.emoji}
                </span>
                <span className="text-lg font-semibold">{item.label}</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeInUp delay={0.4} className="mt-8 text-center">
          <p className="rounded-2xl bg-pink-light/50 px-6 py-4 text-lg text-foreground/70">
            Qualquer pessoa que deseja ensinar valores bíblicos às crianças de
            forma simples e significativa.
          </p>
        </FadeInUp>
      </div>
    </section>
  );
}
