"use client";

import { motion } from "framer-motion";
import { StaggerContainer, StaggerItem, FadeInUp } from "../AnimatedSection";

const audiences = [
  {
    emoji: "👨‍👩‍👧",
    label: "Pais e mães",
    desc: "Que querem criar filhos com raízes na fé",
    bg: "bg-[#FFF4F0]",
    border: "border-[#F0D0C4]",
    accent: "#D88A73",
    gradBg: "from-[#FFF4F0] to-[#FFFAF8]",
  },
  {
    emoji: "👴‍👵",
    label: "Avós e familiares",
    desc: "Que desejam deixar um legado espiritual",
    bg: "bg-[#FDFBF0]",
    border: "border-[#EAE0A8]",
    accent: "#C9A84C",
    gradBg: "from-[#FDFBF0] to-[#FFFDF8]",
  },
  {
    emoji: "👩‍🏫",
    label: "Professores e educadores",
    desc: "Que ensinam valores cristãos na escola",
    bg: "bg-[#F2F8EE]",
    border: "border-[#C9DDBD]",
    accent: "#6D9A70",
    gradBg: "from-[#F2F8EE] to-[#FAFDF8]",
  },
  {
    emoji: "⛪",
    label: "Líderes da escolinha",
    desc: "Que buscam material prático para a igreja",
    bg: "bg-[#F1F8FB]",
    border: "border-[#C9DDE7]",
    accent: "#5A8FAA",
    gradBg: "from-[#F1F8FB] to-[#FAFCFE]",
  },
];

export function AudienceSection() {
  return (
    <section
      className="relative overflow-hidden bg-background px-6 py-20 md:px-12 md:py-28"
      aria-labelledby="audience-heading"
    >
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#E5D8C4] to-transparent" />


      <div className="relative z-10 mx-auto max-w-4xl">
        <FadeInUp className="text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#D9C9B8]/80 bg-white/80 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-foreground/45 shadow-sm">
            🎯 Para quem é?
          </span>
          <h2
            id="audience-heading"
            className="mx-auto mt-5 max-w-2xl text-3xl font-black leading-tight tracking-tight text-foreground md:text-5xl"
          >
            Ideal para quem ama crianças{" "}
            <span className="rainbow-text">e ama a Deus.</span>
          </h2>
        </FadeInUp>

        <StaggerContainer className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {audiences.map((item) => (
            <StaggerItem key={item.label}>
              <motion.div
                className={`card-glow flex items-center gap-5 rounded-2xl border bg-gradient-to-br ${item.gradBg} p-6 shadow-[0_6px_24px_rgba(88,72,55,0.07)] transition-all duration-300 ${item.border}`}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div
                  className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-4xl shadow-sm ring-1 ring-black/5"
                  style={{ background: `linear-gradient(135deg, ${item.accent}15, ${item.accent}25)`, border: `1px solid ${item.accent}30` }}
                >
                  {item.emoji}
                </div>
                <div>
                  <p className="text-base font-black text-foreground">{item.label}</p>
                  <p className="mt-0.5 text-sm font-semibold text-foreground/55">{item.desc}</p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeInUp delay={0.35} className="mt-8 text-center">
          <motion.div
            className="inline-flex items-center gap-3 rounded-2xl border border-[#E5D8C4] bg-gradient-to-r from-[#FFF8F0] to-[#FFFDF9] px-6 py-4 shadow-sm"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="text-2xl">💛</span>
            <p className="text-sm font-bold text-foreground/70">
              Qualquer pessoa que deseja plantar a semente da fé no coração de uma criança
            </p>
          </motion.div>
        </FadeInUp>
      </div>
    </section>
  );
}
