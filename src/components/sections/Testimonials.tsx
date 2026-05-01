"use client";

import { motion } from "framer-motion";
import { FadeInUp, StaggerContainer, StaggerItem } from "../AnimatedSection";

const testimonials = [
  {
    name: "Ana Carolina",
    role: "Mãe de 2 filhos",
    emoji: "👩",
    text: "Minha filha de 3 anos ama as histórias! Toda noite ela pede para ler. Foi a melhor compra que fiz.",
    stars: 5,
    accent: "border-[#F0D0DA]",
    bg: "from-[#FFF4F6] to-[#FFFAFC]",
  },
  {
    name: "Rafael Santos",
    role: "Pai de gêmeos",
    emoji: "👨",
    text: "Finalmente algo prático que não exige preparação. Abro o PDF, leio e as crianças já se envolvem.",
    stars: 5,
    accent: "border-[#C9DDE7]",
    bg: "from-[#F1F8FB] to-[#FAFCFE]",
  },
  {
    name: "Mariana Oliveira",
    role: "Professora de EBD",
    emoji: "👩‍🏫",
    text: "Uso na escolinha da igreja e as crianças adoram os desenhos para colorir. Material de qualidade!",
    stars: 5,
    accent: "border-[#C9DDBD]",
    bg: "from-[#F2F8EE] to-[#FAFDF8]",
  },
  {
    name: "Camila Ferreira",
    role: "Mãe e avó",
    emoji: "👵",
    text: "Comprei para usar com minha neta de 4 anos. As perguntas são perfeitas para a idade. Super recomendo!",
    stars: 5,
    accent: "border-[#EAE0A8]",
    bg: "from-[#FDFBF0] to-[#FFFDF8]",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="star-rating flex gap-0.5">
      {Array.from({ length: count }, (_, i) => (
        <motion.span
          key={i}
          className="text-sm"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08, type: "spring", stiffness: 400 }}
        >
          ⭐
        </motion.span>
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section
      className="relative overflow-hidden bg-[#FFFCF7] px-6 py-20 md:px-12 md:py-28"
      aria-labelledby="testimonials-heading"
    >
      {/* Top separator */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#E5D8C4] to-transparent" />


      {/* Decorative sparkles */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <span className="absolute top-12 left-[10%] text-sm opacity-25 sparkle sparkle-delay-2">✨</span>
        <span className="absolute top-20 right-[15%] text-sm opacity-20 sparkle sparkle-delay-4">⭐</span>
        <span className="absolute bottom-16 left-[20%] text-sm opacity-25 sparkle sparkle-delay-1">💛</span>
        <span className="absolute bottom-24 right-[10%] text-sm opacity-20 sparkle sparkle-delay-3">✨</span>
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        <FadeInUp className="text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#E6C98D]/60 bg-white/80 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#9E7350] shadow-sm backdrop-blur">
            💬 O que dizem as famílias
          </span>
          <h2
            id="testimonials-heading"
            className="mx-auto mt-5 max-w-2xl text-3xl font-black leading-tight tracking-tight text-foreground md:text-5xl"
          >
            Famílias reais,{" "}
            <span className="rainbow-text">momentos de fé reais.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-foreground/55 md:text-lg">
            Veja como o devocional tem transformado a rotina de famílias em todo
            o Brasil.
          </p>
        </FadeInUp>

        {/* Average rating */}
        <FadeInUp delay={0.1} className="mt-6 flex justify-center">
          <div className="inline-flex items-center gap-3 rounded-2xl border border-[#E6C98D]/40 bg-white/80 px-5 py-3 shadow-sm backdrop-blur">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <span key={i} className="text-sm star-rating">⭐</span>
              ))}
            </div>
            <div className="h-4 w-px bg-foreground/15" />
            <p className="text-sm font-black text-foreground/60">
              5.0 <span className="font-bold text-foreground/40">· +500 avaliações</span>
            </p>
          </div>
        </FadeInUp>

        <StaggerContainer className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <motion.div
                className={`testimonial-card relative rounded-2xl border ${t.accent} bg-gradient-to-br ${t.bg} p-6 shadow-[0_6px_24px_rgba(88,72,55,0.06)]`}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
              >
                {/* Quote mark */}
                <span className="absolute right-5 top-4 text-3xl leading-none text-foreground/6 font-serif">
                  &ldquo;
                </span>

                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-xl shadow-sm ring-1 ring-black/5">
                    {t.emoji}
                  </div>
                  <div>
                    <p className="text-sm font-black text-foreground/75">{t.name}</p>
                    <p className="text-[0.7rem] font-semibold text-foreground/40">{t.role}</p>
                  </div>
                </div>

                <p className="mt-4 text-sm font-semibold leading-relaxed text-foreground/60">
                  &ldquo;{t.text}&rdquo;
                </p>

                <div className="mt-3">
                  <StarRating count={t.stars} />
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom social proof */}
        <FadeInUp delay={0.3} className="mt-10 text-center">
          <motion.div
            className="inline-flex items-center gap-3 rounded-2xl border border-[#D8E3CF]/70 bg-[#F2F8EE]/80 px-6 py-4 shadow-sm backdrop-blur"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex -space-x-2">
              {["🧑‍🍼", "👩‍👧", "👨‍👧‍👦", "👩‍👦"].map((emoji, i) => (
                <span
                  key={i}
                  className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#FFF8F0] text-sm shadow-sm"
                >
                  {emoji}
                </span>
              ))}
            </div>
            <p className="text-sm font-bold text-[#6D9A70]">
              Junte-se a <span className="font-black">+500 famílias</span> que já plantam a fé
            </p>
          </motion.div>
        </FadeInUp>
      </div>
    </section>
  );
}
