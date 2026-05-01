"use client";

import { motion } from "framer-motion";
import { FadeInUp, StaggerContainer, StaggerItem } from "../AnimatedSection";

const receiveItems = [
  { marker: "📖", text: "25 histórias bíblicas curtas e adaptadas", bg: "bg-[#F1F8FB]", border: "border-[#C9DDE7]", gradBg: "from-[#E8F4FC] to-[#F1F8FB]" },
  { marker: "💬", text: "Perguntas simples para conversar com a criança", bg: "bg-[#FFF4F6]", border: "border-[#EBC9D1]", gradBg: "from-[#FFEDF0] to-[#FFF4F6]" },
  { marker: "✝️", text: "Versículo bíblico em cada história", bg: "bg-[#FDFBF0]", border: "border-[#E5D8A8]", gradBg: "from-[#FBF7E4] to-[#FDFBF0]" },
  { marker: "👨‍👩‍👧", text: "Frases para repetir juntos em família", bg: "bg-[#F2F8EE]", border: "border-[#C9DDBD]", gradBg: "from-[#E8F5E4] to-[#F2F8EE]" },
  { marker: "🙏", text: "Momento devocional guiado passo a passo", bg: "bg-[#FFF8F0]", border: "border-[#E8D2BA]", gradBg: "from-[#FFF0E0] to-[#FFF8F0]" },
  { marker: "🎨", text: "Desenhos para colorir em cada história", bg: "bg-[#F6F1FA]", border: "border-[#DCCEE7]", gradBg: "from-[#EFE5F7] to-[#F6F1FA]" },
];

const benefits = [
  { emoji: "🌱", text: "Incentiva o relacionamento com Deus desde cedo" },
  { emoji: "💛", text: "Cria momentos de conexão em família" },
  { emoji: "📅", text: "Facilita o ensino bíblico no dia a dia" },
  { emoji: "⚡", text: "Não exige preparação: é só abrir e usar" },
  { emoji: "😊", text: "Torna o aprendizado leve e envolvente" },
  { emoji: "🔁", text: "Ajuda a criar uma rotina constante com Deus" },
];

export function ContentSection() {
  return (
    <section
      id="content"
      className="relative overflow-hidden bg-white px-6 py-20 md:px-12 md:py-28"
      aria-labelledby="content-heading"
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "linear-gradient(180deg, #FFFCF7 0%, #F8FBF5 50%, #FFFFFF 100%)",
        }}
        aria-hidden="true"
      />


      <div className="relative z-10 mx-auto max-w-6xl">
        <FadeInUp className="text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#D9C9B8]/80 bg-white/80 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-foreground/45 shadow-sm">
            🎁 O que vem no PDF
          </span>
          <h2
            id="content-heading"
            className="mx-auto mt-5 max-w-3xl text-3xl font-black leading-tight tracking-tight text-foreground md:text-5xl"
          >
            Tudo pronto para usar em{" "}
            <span className="rainbow-text">poucos minutos.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-foreground/55 md:text-lg">
            Cada página foi pensada para conduzir leitura, conversa, oração e
            atividade com uma linguagem simples para crianças pequenas.
          </p>
        </FadeInUp>

        {/* Animated counter */}
        <FadeInUp delay={0.1} className="mt-8 flex justify-center">
          <motion.div
            className="inline-flex items-center gap-4 rounded-2xl border border-[#E6C98D]/50 bg-white/80 px-6 py-3 shadow-sm backdrop-blur"
            whileInView={{ scale: [0.95, 1] }}
            viewport={{ once: true }}
          >
            <motion.span
              className="text-4xl font-black text-[#B65F55]"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: "spring" }}
            >
              25
            </motion.span>
            <div className="text-left">
              <p className="text-sm font-black text-foreground/70">Histórias Bíblicas</p>
              <p className="text-xs font-semibold text-foreground/40">Prontas para usar com seu filho</p>
            </div>
          </motion.div>
        </FadeInUp>

        <StaggerContainer className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {receiveItems.map((item) => (
            <StaggerItem key={item.text}>
              <motion.div
                className={`card-glow group flex h-full items-center gap-4 rounded-2xl border bg-gradient-to-br ${item.gradBg} p-5 shadow-[0_6px_24px_rgba(88,72,55,0.07)] transition-all duration-200 ${item.border}`}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/90 text-xl shadow-sm ring-1 ring-black/5">
                  {item.marker}
                </span>
                <span className="text-sm font-bold leading-snug text-foreground/70">
                  {item.text}
                </span>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeInUp delay={0.22} className="mt-14">
          <div className="relative overflow-hidden rounded-2xl border border-[#E5D8C4] bg-gradient-to-br from-[#FFF8F0] to-[#FFFDF9] p-7 shadow-[0_12px_40px_rgba(88,72,55,0.08)] md:p-10">
            <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#E4BE83] via-[#D88A73] to-[#97C69B]" />

            {/* Decorative sparkles */}
            <div className="pointer-events-none absolute right-6 top-6 text-lg opacity-30 sparkle sparkle-delay-1" aria-hidden="true">✨</div>
            <div className="pointer-events-none absolute left-8 bottom-8 text-sm opacity-20 sparkle sparkle-delay-3" aria-hidden="true">⭐</div>

            <h3 className="text-center text-xl font-black tracking-tight text-foreground md:text-2xl">
              Por que as famílias usam no dia a dia
            </h3>
            <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {benefits.map((item) => (
                <motion.div
                  key={item.text}
                  className="group flex items-center gap-3 rounded-xl border border-white/90 bg-white/75 px-4 py-3 text-sm font-bold text-foreground/65 shadow-sm transition-all duration-200 hover:bg-white/95 hover:shadow-md"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#FFF8F0] text-lg ring-1 ring-black/5">{item.emoji}</span>
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
