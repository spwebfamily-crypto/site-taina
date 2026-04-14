"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CTAButton } from "../CTAButton";

const confetti = [
  { left: "6%",  top: "12%", color: "#FFD93D", size: 14, delay: 0,   dur: 3.2 },
  { left: "12%", top: "55%", color: "#FF6B6B", size: 10, delay: 0.4, dur: 4.0 },
  { left: "20%", top: "78%", color: "#6BCB77", size: 12, delay: 0.8, dur: 3.5 },
  { left: "80%", top: "10%", color: "#4D96FF", size: 14, delay: 0.2, dur: 3.8 },
  { left: "88%", top: "42%", color: "#FFAA00", size: 10, delay: 1.0, dur: 4.2 },
  { left: "75%", top: "70%", color: "#FF6B6B", size: 12, delay: 0.6, dur: 3.0 },
  { left: "50%", top: "6%",  color: "#FFD93D", size: 10, delay: 1.2, dur: 3.6 },
  { left: "35%", top: "85%", color: "#4D96FF", size: 14, delay: 0.3, dur: 4.5 },
  { left: "93%", top: "65%", color: "#6BCB77", size: 10, delay: 0.9, dur: 3.3 },
  { left: "3%",  top: "35%", color: "#FFD93D", size: 12, delay: 1.5, dur: 4.0 },
  { left: "60%", top: "90%", color: "#FF6B6B", size: 10, delay: 0.7, dur: 3.7 },
  { left: "45%", top: "20%", color: "#FFD93D", size: 8,  delay: 1.1, dur: 2.8 },
];

const floatingEmojis = [
  { emoji: "⭐", left: "8%",  top: "30%", delay: 0,   dur: 4 },
  { emoji: "🌈", left: "88%", top: "25%", delay: 0.5, dur: 5 },
  { emoji: "💛", left: "5%",  top: "65%", delay: 1,   dur: 3.5 },
  { emoji: "🕊️", left: "92%", top: "60%", delay: 0.3, dur: 4.5 },
  { emoji: "✝️", left: "18%", top: "88%", delay: 1.5, dur: 4 },
  { emoji: "💖", left: "78%", top: "82%", delay: 0.8, dur: 3.8 },
];

export function HeroSection() {
  return (
    <section className="relative min-h-[100vh] overflow-hidden" aria-labelledby="hero-heading">

      {/* ── Sunny sky gradient ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFF9E6] via-[#FFF0CC] to-[#FFE8D6]" />

      {/* Rainbow arc top */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[140vw] h-[500px] rounded-[50%] opacity-20"
        style={{ background: "conic-gradient(from 200deg at 50% 100%, #FF6B6B, #FFD93D, #FFAA00, #FF8C42, #FFE566, #FF6B6B)" }}
        aria-hidden="true"
      />

      {/* Soft glow blobs */}
      <div className="absolute -left-32 top-0 h-[500px] w-[500px] rounded-full bg-yellow/40 blur-[100px]" aria-hidden="true" />
      <div className="absolute -right-32 top-1/4 h-[400px] w-[400px] rounded-full bg-pink/30 blur-[80px]" aria-hidden="true" />
      <div className="absolute bottom-0 left-1/3 h-[300px] w-[300px] rounded-full bg-sky/30 blur-[80px]" aria-hidden="true" />

      {/* Confetti dots */}
      {confetti.map((c, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{ left: c.left, top: c.top, width: c.size, height: c.size, backgroundColor: c.color }}
          animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: c.dur, repeat: Infinity, delay: c.delay, ease: "easeInOut" }}
          aria-hidden="true"
        />
      ))}

      {/* Floating emojis */}
      {floatingEmojis.map((e, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl select-none"
          style={{ left: e.left, top: e.top }}
          animate={{ y: [0, -16, 0], rotate: [-5, 5, -5] }}
          transition={{ duration: e.dur, repeat: Infinity, delay: e.delay, ease: "easeInOut" }}
          aria-hidden="true"
        >
          {e.emoji}
        </motion.div>
      ))}

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg viewBox="0 0 1440 100" fill="none" preserveAspectRatio="none" className="h-14 w-full md:h-20">
          <path d="M0 50C360 100 720 0 1080 50C1260 75 1380 40 1440 50V100H0V50Z" fill="#FFFBF5" />
        </svg>
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 pb-24 pt-12 md:flex-row md:gap-12 md:px-12 md:pb-36 md:pt-20">

        {/* Text side - MOBILE OPTIMIZED */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-1 flex-col items-center text-center md:items-start md:text-left w-full"
        >
          {/* Badge - BIGGER ON MOBILE */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bounce-badge mb-4 inline-flex items-center gap-2 rounded-full border-2 border-gold/50 bg-white px-4 py-2.5 text-xs font-extrabold text-coral shadow-lg md:text-sm"
          >
            <span className="text-lg md:text-base">🌟</span> 
            <span>Devocional Pequenos Corações</span>
            <span className="text-lg md:text-base">🌟</span>
          </motion.div>

          {/* Headline - LARGER & CLEARER ON MOBILE */}
          <h1 id="hero-heading" className="mb-4 text-[2rem] font-black leading-[1.1] tracking-tight md:text-5xl lg:text-[3.6rem]">
            <span className="rainbow-text block mb-1">Plante a fé</span>
            <span className="text-foreground block">no coração do</span>
            <motion.span
              className="inline-block text-coral drop-shadow-[0_2px_12px_rgba(232,115,74,0.4)]"
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
              seu filho 💛
            </motion.span>
          </h1>

          {/* Description - SHORTER ON MOBILE */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mb-6 max-w-lg text-base leading-relaxed text-foreground/70 md:text-xl"
          >
            <strong className="text-coral">25 histórias bíblicas</strong> encantadoras que criam momentos{" "}
            <strong className="text-[#B8860B]">inesquecíveis</strong> — leve, divertido e cheio de amor! 🎉
          </motion.p>

          {/* CTA - MUCH BIGGER ON MOBILE */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.7 }}
            className="w-full md:w-auto"
          >
            <CTAButton className="w-full md:w-auto text-base md:text-lg px-8 py-4 md:px-10 md:py-5" />
          </motion.div>

          {/* Trust badges - STACKED ON MOBILE */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-5 flex flex-col items-center gap-3 md:items-start w-full"
          >
            {/* Stars */}
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <motion.span
                  key={i}
                  className="text-xl text-gold"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 1, repeat: Infinity, delay: i * 0.15 }}
                >★</motion.span>
              ))}
              <span className="ml-2 text-xs font-bold text-foreground/60 md:text-sm">+500 famílias transformadas</span>
            </div>
            {/* Features - VERTICAL ON MOBILE */}
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-3 text-xs font-semibold text-foreground/50">
              <span className="rounded-full bg-green/15 px-3 py-1.5 text-green">⚡ Acesso imediato</span>
              <span className="rounded-full bg-sky/30 px-3 py-1.5 text-[#2980B9]">📄 PDF para imprimir</span>
              <span className="rounded-full bg-pink-light px-3 py-1.5 text-coral">🛡️ 7 dias de garantia</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Book image side - SMALLER ON MOBILE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.75, rotate: 6 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="flex flex-1 items-center justify-center w-full md:w-auto"
        >
          <div className="relative w-full max-w-[280px] md:max-w-none">
            {/* Multi-layer glow */}
            <div className="absolute -inset-8 md:-inset-12 rounded-full bg-gradient-to-br from-yellow/60 via-gold/40 to-pink/30 blur-3xl" />
            <div className="absolute -inset-4 md:-inset-6 rounded-full bg-gradient-to-tr from-coral/20 to-transparent blur-2xl" />

            {/* Spinning rings - HIDDEN ON SMALL MOBILE */}
            <motion.div
              className="absolute -inset-6 md:-inset-8 rounded-full border-2 md:border-4 border-dashed border-gold/40 hidden sm:block"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              aria-hidden="true"
            />
            <motion.div
              className="absolute -inset-3 md:-inset-4 rounded-full border border-dashed border-pink/30 hidden sm:block"
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              aria-hidden="true"
            />

            {/* Book - NO WHITE BOX */}
            <div className="float-animation relative">
              <Image
                src="/images/capa-livro-upscaled.png"
                alt="Devocional Pequenos Corações - Capa do livro"
                width={1066}
                height={1600}
                sizes="(max-width: 640px) 280px, (max-width: 768px) 390px, (max-width: 1024px) 470px, 560px"
                priority
                quality={100}
                className="relative h-auto w-full drop-shadow-[0_20px_50px_rgba(249,184,78,0.5)]"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
