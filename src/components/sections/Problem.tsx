"use client";

import { motion } from "framer-motion";
import { FadeInUp, StaggerContainer, StaggerItem } from "../AnimatedSection";

const painPoints = [
  {
    emoji: "🌱",
    title: "Começar sem complicar",
    text: '"Quero ensinar meu filho sobre Deus, mas não sei por onde começar."',
    accent: "#E9B7C8",
    bg: "bg-[#FFF4F6]",
    border: "border-[#F0D0DA]",
    iconBg: "from-[#FFF4F6] to-[#FCDCE7]",
  },
  {
    emoji: "⏰",
    title: "Criar espaço na rotina",
    text: '"A rotina é corrida e o tempo para momentos espirituais é curto."',
    accent: "#A8C8DC",
    bg: "bg-[#F1F8FB]",
    border: "border-[#C9DDE7]",
    iconBg: "from-[#F1F8FB] to-[#D9EDFB]",
  },
  {
    emoji: "💬",
    title: "Falar de forma simples",
    text: '"Como explicar a Bíblia de um jeito que uma criança entenda?"',
    accent: "#D9C87A",
    bg: "bg-[#FDFBF0]",
    border: "border-[#EAE0A8]",
    iconBg: "from-[#FDFBF0] to-[#F5EDCB]",
  },
];

export function ProblemSection() {
  return (
    <section
      className="relative overflow-hidden bg-[#FFFCF7] px-6 py-20 md:px-12 md:py-28"
      aria-labelledby="problem-heading"
    >

      <div className="relative z-10 mx-auto max-w-5xl">
        <FadeInUp className="text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#E9B7C8]/60 bg-white/80 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#B86478] shadow-sm backdrop-blur">
            💭 Você se identifica?
          </span>
          <h2
            id="problem-heading"
            className="mx-auto mt-5 max-w-3xl text-3xl font-black leading-tight tracking-tight text-foreground md:text-5xl"
          >
            Ensinar a fé pode ser{" "}
            <span className="rainbow-text">simples, carinhoso</span> e possível
            no dia a dia.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-foreground/55 md:text-lg">
            O material foi pensado para pais que querem presença, clareza e um
            caminho pronto para conversar sobre Deus com os pequenos.
          </p>
        </FadeInUp>

        <StaggerContainer className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {painPoints.map((point, index) => (
            <StaggerItem key={point.title}>
              <motion.div
                className={`card-glow group relative flex h-full flex-col rounded-2xl border p-7 backdrop-blur-sm transition-all duration-300 ${point.bg} ${point.border}`}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Top accent line */}
                <div
                  className="absolute left-0 top-0 h-1 w-full rounded-t-2xl opacity-60"
                  style={{ background: `linear-gradient(90deg, transparent, ${point.accent}, transparent)` }}
                />

                {/* Step number */}
                <span className="absolute -top-3 right-5 flex h-7 w-7 items-center justify-center rounded-full bg-white text-[0.65rem] font-black text-foreground/30 shadow-md ring-1 ring-black/5">
                  {index + 1}
                </span>

                <div
                  className={`mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${point.iconBg} text-3xl shadow-sm`}
                  style={{ border: `1px solid ${point.accent}44` }}
                >
                  {point.emoji}
                </div>
                <p className="text-xs font-black uppercase tracking-[0.1em] text-foreground/40">
                  {point.title}
                </p>
                <p className="mt-3 text-base font-bold leading-relaxed text-foreground/70">
                  {point.text}
                </p>

                {/* Hover shine effect */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/40 via-transparent to-transparent" />
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Connecting lines between cards (desktop) */}
        <div className="mt-2 hidden items-center justify-center gap-0 md:flex" aria-hidden="true">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#E9B7C8]/30 to-[#A8C8DC]/30" />
          <span className="mx-2 text-foreground/15 text-lg">•</span>
          <div className="h-px flex-1 bg-gradient-to-r from-[#A8C8DC]/30 via-[#D9C87A]/30 to-transparent" />
        </div>

        <FadeInUp delay={0.25} className="mt-10">
          <div className="fancy-quote relative overflow-hidden rounded-2xl border border-[#DFCDAF] bg-gradient-to-br from-[#F7F0E3] to-[#FDF8EF] px-10 py-10 text-center shadow-[0_12px_40px_rgba(88,72,55,0.09)] md:px-14 md:py-12">
            <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#E4BE83] via-[#D88A73] to-[#E4BE83]" />
            <p className="relative mx-auto max-w-3xl text-xl font-black italic leading-relaxed text-[#705842] md:text-2xl">
              Instrua a criança no caminho em que deve andar, e quando
              envelhecer, não se desviará dele.
            </p>
            <p className="relative mt-4 text-xs font-black uppercase tracking-[0.18em] text-[#9F8060]">
              ✝️ Provérbios 22:6
            </p>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
