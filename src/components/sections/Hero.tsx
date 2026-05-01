"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import CoverImage from "../../capa-pdf-clean.png";
import { useRegionalOffer } from "@/hooks/useRegionalOffer";
import { CTAButton } from "../CTAButton";

const heroHighlights = [
  "📖 25 histórias bíblicas",
  "🖨️ PDF para imprimir",
  "🎨 Desenhos para colorir",
];

const heroStats = [
  { value: "25", label: "Histórias", icon: "📖" },
  { value: "100%", label: "Digital", icon: "⚡" },
];

const floatingParticles = [
  { emoji: "✨", top: "10%", left: "7%", delay: 0, duration: 4.2 },
  { emoji: "💛", top: "20%", right: "5%", delay: 0.6, duration: 5.1 },
  { emoji: "⭐", top: "66%", left: "4%", delay: 1.2, duration: 3.8 },
  { emoji: "🌟", top: "76%", right: "9%", delay: 0.3, duration: 4.6 },
  { emoji: "✨", top: "43%", left: "1%", delay: 1.8, duration: 5.5 },
  { emoji: "💫", top: "33%", right: "2%", delay: 0.9, duration: 4.0 },
];

export function HeroSection() {
  const offer = useRegionalOffer();

  return (
    <section
      className="relative min-h-screen overflow-hidden bg-[#FFF8EF]"
      aria-labelledby="hero-heading"
    >
      {/* Rich layered background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 90% 65% at 15% 0%, rgba(244,196,212,0.5) 0%, transparent 60%), radial-gradient(ellipse 75% 55% at 88% 8%, rgba(185,214,238,0.55) 0%, transparent 55%), radial-gradient(ellipse 65% 55% at 78% 92%, rgba(186,220,187,0.6) 0%, transparent 52%), linear-gradient(168deg, #FFF8EF 0%, #FCEAF2 40%, #EFF8F2 72%, #EDF6FC 100%)",
        }}
        aria-hidden="true"
      />

      {/* Subtle grain texture for depth */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: "180px",
        }}
        aria-hidden="true"
      />

      {/* Floating particles */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {floatingParticles.map((p, i) => (
          <motion.span
            key={i}
            className="absolute text-lg md:text-xl"
            style={{ top: p.top, left: p.left, right: p.right }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 18, -12, 0],
              opacity: [0.2, 0.55, 0.2],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {p.emoji}
          </motion.span>
        ))}
      </div>

      {/* Bottom fade */}
      <div
        className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-background to-transparent"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto grid min-h-screen max-w-6xl items-center gap-10 px-6 pb-32 pt-14 md:grid-cols-[1fr_1fr] md:gap-16 md:px-12 md:pb-32 md:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center md:items-start md:text-left"
        >
          {/* Animated badge */}
          <motion.div
            className="badge-glow mb-5 inline-flex items-center gap-2 rounded-full border border-[#E7B8C8]/80 bg-white/85 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#B86478] shadow-md backdrop-blur"
            animate={{ scale: [1, 1.025, 1] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.span
              className="h-2 w-2 rounded-full bg-[#E4BE83]"
              animate={{ scale: [1, 1.6, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 1.8, repeat: Infinity }}
              aria-hidden="true"
            />
            ✨ Devocional Pequenos Corações
          </motion.div>

          <h1
            id="hero-heading"
            className="max-w-xl text-[2.6rem] font-black leading-[1.0] tracking-tight text-foreground sm:text-[3.2rem] md:text-[3.8rem] lg:text-[4.4rem]"
          >
            Plante a fé no coração do seu filho com{" "}
            <span className="rainbow-text">histórias que encantam.</span>
          </h1>

          <p className="mt-5 max-w-md text-base font-semibold leading-relaxed text-foreground/58 md:text-lg">
            Um PDF devocional com leitura curta, conversa guiada, versículo e
            atividade — para criar momentos de fé mesmo na rotina corrida.
          </p>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-7 flex gap-3 self-center md:self-start"
          >
            {heroStats.map((s) => (
              <div
                key={s.label}
                className="stat-card flex flex-col items-center px-4 py-2.5 shadow-sm"
              >
                <span className="text-base">{s.icon}</span>
                <span className="mt-0.5 text-base font-black leading-none text-foreground">
                  {s.value}
                </span>
                <span className="text-[0.6rem] font-extrabold uppercase tracking-[0.1em] text-foreground/40">
                  {s.label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Price + CTA card */}
          <div className="mt-7 w-full max-w-lg">
            <div className="gradient-border-animated">
              <div className="rounded-[calc(1.25rem-2px)] bg-white/92 p-4 shadow-[0_24px_70px_rgba(116,84,58,0.13)] backdrop-blur">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <div className="flex-1 rounded-xl bg-gradient-to-br from-[#FFF6E5] to-[#FFF0D8] px-5 py-4 text-center ring-1 ring-[#E6C98D]/50 sm:text-left">
                    <p className="text-[0.62rem] font-black uppercase tracking-[0.16em] text-foreground/40">
                      🎁 PDF por apenas
                    </p>
                    <p className="mt-0.5 text-4xl font-black leading-none text-[#B65F55]">
                      {offer.priceFormatted}
                    </p>
                    <p className="mt-1.5 text-[0.68rem] font-extrabold text-[#6D9A70]">
                      ⚡ Acesso imediato · 🛡️ Garantia de 7 dias
                    </p>
                  </div>
                  <CTAButton className="w-full sm:w-auto" />
                </div>
              </div>
            </div>
          </div>

          {/* Highlight pills */}
          <div className="mt-5 flex flex-wrap justify-center gap-2 md:justify-start">
            {heroHighlights.map((item, i) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + i * 0.1, type: "spring", stiffness: 300 }}
                className="rounded-full border border-white/85 bg-white/72 px-3.5 py-1.5 text-xs font-extrabold text-foreground/55 shadow-sm backdrop-blur"
                whileHover={{ scale: 1.07, y: -2 }}
              >
                {item}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Book image column */}
        <motion.div
          initial={{ opacity: 0, y: 36, rotate: 2 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.95, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto flex w-full max-w-[300px] justify-center sm:max-w-[380px] md:max-w-[500px]"
        >
          {/* Glow behind the book */}
          <div
            className="glow-pulse absolute left-1/2 top-1/2 h-[80%] w-[80%] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(232,185,110,0.28) 0%, rgba(216,138,115,0.14) 42%, transparent 72%)",
            }}
            aria-hidden="true"
          />

          <div className="float-animation relative z-10">
            <Image
              src={CoverImage}
              alt="Devocional Pequenos Corações - capa do PDF"
              priority
              sizes="(max-width: 640px) 300px, (max-width: 768px) 380px, 500px"
              className="h-auto w-full drop-shadow-[0_36px_90px_rgba(111,82,55,0.3)]"
            />
          </div>

          {/* Floating price badge */}
          <motion.div
            className="absolute -right-2 top-8 z-20 rounded-2xl border border-white/90 bg-white/92 px-4 py-3 text-center shadow-[0_20px_50px_rgba(116,84,58,0.2)] backdrop-blur md:-right-6"
            animate={{ y: [0, -9, 0] }}
            transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <p className="text-[0.58rem] font-black uppercase tracking-[0.14em] text-foreground/35">
              Oferta
            </p>
            <p className="text-xl font-black text-[#B65F55]">{offer.priceFormatted}</p>
          </motion.div>

          {/* Discount badge */}
          <motion.div
            className="discount-badge absolute -left-3 top-4 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#6D9A70] to-[#4A7A4E] text-center shadow-[0_10px_28px_rgba(76,122,78,0.35)] md:-left-6"
            style={{ transform: "rotate(-12deg)" }}
          >
            <div>
              <p className="text-[0.5rem] font-black leading-none text-white/80">ATÉ</p>
              <p className="text-sm font-black leading-none text-white">65%</p>
              <p className="text-[0.45rem] font-black leading-none text-white/80">OFF</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll CTA */}
      <motion.a
        href="#content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2.5 rounded-full border border-white/80 bg-white/75 px-5 py-2.5 text-xs font-black uppercase tracking-[0.12em] text-foreground/50 shadow-sm backdrop-blur"
      >
        Ver o que vem no PDF
        <motion.span
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden="true"
          className="text-base leading-none"
        >
          ↓
        </motion.span>
      </motion.a>
    </section>
  );
}
