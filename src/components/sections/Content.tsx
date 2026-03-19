"use client";

import { motion } from "framer-motion";
import {
  FadeInUp,
  StaggerContainer,
  StaggerItem,
} from "../AnimatedSection";
import { DotsDivider } from "../Decorations";

const receiveItems = [
  "25 histórias bíblicas curtas e adaptadas",
  "Pergunta simples para interação com a criança",
  "Versículo bíblico",
  "Frases para repetir juntos",
  "Momento devocional guiado",
  "Desenhos para colorir",
];

const loveReasons = [
  "Incentiva o relacionamento com Deus desde cedo",
  "Cria momentos de conexão em família ou em grupo",
  "Facilita o ensino bíblico no dia a dia",
  "Não exige preparação — é só abrir e usar",
  "Torna o aprendizado leve e envolvente para a criança",
  "Ajuda a criar uma rotina simples e constante com Deus",
];

function CheckIcon() {
  return (
    <svg
      className="mt-0.5 h-5 w-5 flex-shrink-0 text-green"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={3}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function BulletIcon() {
  return (
    <svg
      className="mt-0.5 h-5 w-5 flex-shrink-0 text-coral"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}

export function ContentSection() {
  return (
    <section
      className="bg-white px-6 py-16 md:px-12 md:py-24"
      aria-labelledby="content-heading"
    >
      <div className="mx-auto max-w-5xl">
        <FadeInUp className="text-center">
          <h2
            id="content-heading"
            className="text-3xl font-extrabold md:text-4xl"
          >
            Tudo pronto para você usar{" "}
            <span className="text-coral">hoje mesmo</span>
          </h2>
        </FadeInUp>

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
          {/* Left column - What you receive */}
          <div>
            <FadeInUp>
              <h3 className="mb-6 text-center text-xl font-bold md:text-left">
                Você vai receber
              </h3>
            </FadeInUp>
            <StaggerContainer className="space-y-4">
              {receiveItems.map((item) => (
                <StaggerItem key={item}>
                  <motion.div
                    className="flex items-start gap-3"
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <CheckIcon />
                    <span className="text-lg">{item}</span>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Right column - Why you'll love it */}
          <div>
            <FadeInUp>
              <div className="relative mb-6 text-center md:text-left">
                <h3 className="text-xl font-bold">Por que você vai amar</h3>
                <svg
                  className="absolute -right-2 -top-3 hidden h-16 w-32 text-pink/40 md:block"
                  viewBox="0 0 200 80"
                  fill="none"
                  aria-hidden="true"
                >
                  <ellipse
                    cx="100"
                    cy="40"
                    rx="90"
                    ry="35"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </FadeInUp>
            <StaggerContainer className="space-y-4">
              {loveReasons.map((item) => (
                <StaggerItem key={item}>
                  <motion.div
                    className="flex items-start gap-3"
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <BulletIcon />
                    <span className="text-lg">{item}</span>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>

        <FadeInUp delay={0.3} className="mt-16">
          <DotsDivider />
        </FadeInUp>
      </div>
    </section>
  );
}
