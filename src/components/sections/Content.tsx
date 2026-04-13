"use client";

import { motion } from "framer-motion";
import { FadeInUp, StaggerContainer, StaggerItem } from "../AnimatedSection";

const receiveItems = [
  { icon: "📖", text: "25 histórias bíblicas curtas e adaptadas", bg: "from-[#D6F0FF] to-[#EEF8FF]", border: "border-sky/40" },
  { icon: "❓", text: "Pergunta simples para interação com a criança", bg: "from-[#FFE8F0] to-[#FFF5F8]", border: "border-pink/40" },
  { icon: "✝️", text: "Versículo bíblico em cada história",           bg: "from-[#FFF8D6] to-[#FFFAEE]", border: "border-gold/40" },
  { icon: "🗣️", text: "Frases para repetir juntos em família",        bg: "from-[#FFF8D6] to-[#FFFDF0]", border: "border-gold/40" },
  { icon: "🙏", text: "Momento devocional guiado passo a passo",      bg: "from-[#D6F5E0] to-[#F0FFF5]", border: "border-green/40" },
  { icon: "🎨", text: "Desenhos para colorir em cada história",       bg: "from-[#FFE8D6] to-[#FFF5EE]", border: "border-coral/40" },
];

const benefits = [
  { icon: "🌱", text: "Incentiva o relacionamento com Deus desde cedo",  color: "text-green" },
  { icon: "👨‍👩‍👧", text: "Cria momentos de conexão em família",              color: "text-coral" },
  { icon: "📅", text: "Facilita o ensino bíblico no dia a dia",           color: "text-[#2980B9]" },
  { icon: "🚀", text: "Não exige preparação — é só abrir e usar",         color: "text-orange" },
  { icon: "😄", text: "Torna o aprendizado leve e envolvente",            color: "text-gold" },
  { icon: "🔄", text: "Ajuda a criar uma rotina constante com Deus",      color: "text-pink" },
];

export function ContentSection() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-16 md:px-12 md:py-24" aria-labelledby="content-heading">
      {/* Rainbow top border */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-sky via-gold via-pink to-yellow" />

      {/* Soft background blobs */}
      <div className="absolute -right-40 top-0 h-96 w-96 rounded-full bg-yellow/20 blur-[80px]" aria-hidden="true" />
      <div className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-sky/20 blur-[80px]" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <FadeInUp className="text-center">
          <motion.span
            className="mb-4 inline-block rounded-full border-2 border-gold/40 bg-yellow/20 px-5 py-2 text-sm font-extrabold text-[#B8860B] shadow-md"
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            🎁 O que está incluído
          </motion.span>
          <h2 id="content-heading" className="text-3xl font-extrabold md:text-4xl">
            Tudo pronto para você usar{" "}
            <span className="text-coral">hoje mesmo!</span>
          </h2>
          <p className="mt-3 text-lg text-foreground/55 max-w-xl mx-auto">
            Um material completo que transforma qualquer momento em uma experiência espiritual inesquecível ✨
          </p>
        </FadeInUp>

        {/* Receive items */}
        <FadeInUp delay={0.1} className="mt-12">
          <h3 className="text-center text-xl font-extrabold mb-6">📦 Você vai receber</h3>
        </FadeInUp>
        <StaggerContainer className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {receiveItems.map((item) => (
            <StaggerItem key={item.text}>
              <div className={`shine-card flex items-center gap-4 rounded-2xl border-2 bg-gradient-to-br ${item.bg} ${item.border} p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg`}>
                <span className="text-4xl flex-shrink-0 drop-shadow-sm">{item.icon}</span>
                <span className="text-sm font-bold text-foreground/80 leading-snug">{item.text}</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Benefits */}
        <FadeInUp delay={0.25} className="mt-14">
          <div className="relative overflow-hidden rounded-[28px] p-[3px]"
            style={{ background: "linear-gradient(135deg, #FFD93D, #FF8C42, #FF6B6B, #FFAA00, #FFE566, #FFD93D)" }}
          >
            <div className="rounded-[26px] bg-white p-8">
              <h3 className="text-center text-xl font-extrabold mb-7">💛 Por que você vai amar</h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {benefits.map((item) => (
                  <motion.div
                    key={item.text}
                    className="flex items-center gap-3"
                    whileHover={{ x: 6 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="text-3xl flex-shrink-0">{item.icon}</span>
                    <span className={`text-base font-semibold ${item.color}`}>{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
