"use client";

import { motion } from "framer-motion";
import { StaggerContainer, StaggerItem, FadeInUp } from "../AnimatedSection";

const audiences = [
  { emoji: "👨‍👩‍👧", label: "Pais e mães",              desc: "Que querem criar filhos com raízes na fé",       bg: "from-[#FFE8D6] to-[#FFF5EE]", border: "border-coral/30",  glow: "hover:shadow-coral/20" },
  { emoji: "👴👵",   label: "Avós e familiares",         desc: "Que desejam deixar um legado espiritual",        bg: "from-[#FFF8D6] to-[#FFFDF0]", border: "border-gold/30",   glow: "hover:shadow-gold/20"  },
  { emoji: "👩‍🏫",   label: "Professores e educadores", desc: "Que ensinam valores cristãos na escola",         bg: "from-[#D6F5E0] to-[#F0FFF5]", border: "border-green/30",  glow: "hover:shadow-green/20" },
  { emoji: "⛪",     label: "Líderes da escolinha",      desc: "Que buscam material prático para a igreja",      bg: "from-[#FFF8D6] to-[#FFFAEE]", border: "border-gold/40",  glow: "hover:shadow-gold/20" },
];

export function AudienceSection() {
  return (
    <section className="relative overflow-hidden bg-background px-6 py-16 md:px-12 md:py-24" aria-labelledby="audience-heading">
      {/* Rainbow top border */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-coral via-gold via-green to-yellow" />

      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 10% 50%, #FFF8D6 0%, transparent 40%), radial-gradient(circle at 90% 50%, #FFF3CC 0%, transparent 40%)" }} aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-4xl">
        <FadeInUp className="text-center">
          <motion.span
            className="mb-4 inline-block rounded-full border-2 border-coral/30 bg-white px-5 py-2 text-sm font-extrabold text-coral shadow-md"
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            🎯 Para quem é?
          </motion.span>
          <h2 id="audience-heading" className="text-3xl font-extrabold md:text-4xl">
            Ideal para quem ama crianças{" "}
            <span className="rainbow-text">e ama a Deus</span> 🙌
          </h2>
        </FadeInUp>

        <StaggerContainer className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {audiences.map((item) => (
            <StaggerItem key={item.label}>
              <div className={`shine-card flex items-center gap-5 rounded-3xl bg-gradient-to-br ${item.bg} border-2 ${item.border} p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${item.glow}`}>
                <span className="text-6xl flex-shrink-0 drop-shadow-md">{item.emoji}</span>
                <div>
                  <p className="text-xl font-extrabold text-foreground">{item.label}</p>
                  <p className="mt-1 text-sm text-foreground/60">{item.desc}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeInUp delay={0.4} className="mt-8 text-center">
          <div className="inline-flex items-center gap-3 rounded-full border-2 border-gold/40 bg-gradient-to-r from-yellow/30 to-gold/20 px-6 py-3 shadow-md">
            <span className="text-2xl">💛</span>
            <p className="text-base font-bold text-foreground/80">
              Qualquer pessoa que deseja plantar a semente da fé no coração de uma criança
            </p>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
