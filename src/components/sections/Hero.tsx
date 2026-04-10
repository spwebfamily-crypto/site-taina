"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CTAButton } from "../CTAButton";

function CloudSVG({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 80" fill="currentColor" aria-hidden="true">
      <ellipse cx="70" cy="50" rx="60" ry="30" />
      <ellipse cx="130" cy="50" rx="50" ry="25" />
      <ellipse cx="100" cy="35" rx="45" ry="28" />
    </svg>
  );
}

export function HeroSection() {
  return (
    <section
      className="relative min-h-[100vh] overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* === Multi-layer background === */}
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFF5E6] via-[#FFECD2] to-[#FFE0C4]" />

      {/* Radial warm glow top-left */}
      <div className="absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full bg-gradient-radial from-gold/30 via-gold/10 to-transparent blur-3xl" />

      {/* Radial pink glow right */}
      <div className="absolute -right-32 top-1/4 h-[500px] w-[500px] rounded-full bg-gradient-radial from-pink/25 via-pink/8 to-transparent blur-3xl" />

      {/* Radial coral glow bottom */}
      <div className="absolute -bottom-20 left-1/3 h-[400px] w-[400px] rounded-full bg-gradient-radial from-coral/15 via-coral/5 to-transparent blur-3xl" />

      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23E8734A' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />

      {/* Animated floating clouds */}
      <motion.div
        animate={{ x: [0, 30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[5%] top-[8%] text-white/40"
        aria-hidden="true"
      >
        <CloudSVG className="h-20 w-40 md:h-28 md:w-56" />
      </motion.div>
      <motion.div
        animate={{ x: [0, -25, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[10%] top-[5%] text-white/30"
        aria-hidden="true"
      >
        <CloudSVG className="h-16 w-32 md:h-24 md:w-48" />
      </motion.div>
      <motion.div
        animate={{ x: [0, 20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[40%] top-[2%] text-white/25"
        aria-hidden="true"
      >
        <CloudSVG className="h-12 w-24 md:h-16 md:w-32" />
      </motion.div>

      {/* Animated floating stars */}
      {[
        { left: "8%", top: "20%", size: "h-4 w-4", delay: 0, duration: 3 },
        { left: "15%", top: "60%", size: "h-3 w-3", delay: 0.5, duration: 4 },
        { left: "85%", top: "25%", size: "h-5 w-5", delay: 1, duration: 3.5 },
        { left: "75%", top: "70%", size: "h-3 w-3", delay: 1.5, duration: 2.8 },
        { left: "92%", top: "50%", size: "h-4 w-4", delay: 0.8, duration: 3.2 },
        { left: "50%", top: "85%", size: "h-3 w-3", delay: 2, duration: 4 },
        { left: "25%", top: "80%", size: "h-4 w-4", delay: 0.3, duration: 3.8 },
        { left: "65%", top: "10%", size: "h-3 w-3", delay: 1.2, duration: 3 },
      ].map((star, i) => (
        <motion.div
          key={i}
          className={`absolute ${star.size}`}
          style={{ left: star.left, top: star.top }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [0.8, 1.2, 0.8],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
          aria-hidden="true"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="text-gold/60">
            <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8l-6.2 4.5 2.4-7.4L2 9.4h7.6z" />
          </svg>
        </motion.div>
      ))}

      {/* Floating hearts */}
      {[
        { left: "5%", top: "45%", size: "h-5 w-5", color: "text-pink/40", delay: 0, duration: 5 },
        { left: "90%", top: "35%", size: "h-4 w-4", color: "text-coral/30", delay: 1, duration: 6 },
        { left: "70%", top: "85%", size: "h-5 w-5", color: "text-pink/35", delay: 2, duration: 4.5 },
      ].map((heart, i) => (
        <motion.div
          key={`heart-${i}`}
          className={`absolute ${heart.size} ${heart.color}`}
          style={{ left: heart.left, top: heart.top }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: heart.duration,
            repeat: Infinity,
            delay: heart.delay,
            ease: "easeInOut",
          }}
          aria-hidden="true"
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </motion.div>
      ))}

      {/* Decorative circles */}
      <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full border-[3px] border-dashed border-gold/15" aria-hidden="true" />
      <div className="absolute -left-10 -top-10 h-60 w-60 rounded-full border-[2px] border-dashed border-pink/10" aria-hidden="true" />
      <div className="absolute -bottom-16 -right-16 h-72 w-72 rounded-full border-[3px] border-dashed border-coral/10" aria-hidden="true" />

      {/* Bottom wave transition */}
      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          preserveAspectRatio="none"
          className="h-16 w-full md:h-24"
        >
          <path
            d="M0 60C240 120 480 0 720 60C960 120 1200 0 1440 60V120H0V60Z"
            fill="white"
          />
        </svg>
      </div>

      {/* === Main content === */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 pb-28 pt-16 md:flex-row md:gap-16 md:px-12 md:pb-36 md:pt-24">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-1 flex-col items-center text-center md:items-start md:text-left"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/70 px-5 py-2 text-sm font-bold text-coral shadow-sm backdrop-blur-sm"
          >
            <span className="flex h-2 w-2 rounded-full bg-coral">
              <span className="inline-flex h-full w-full animate-ping rounded-full bg-coral/60" />
            </span>
            Devocional Pequenos Corações • 2 a 5 anos
          </motion.span>

          <h1
            id="hero-heading"
            className="mb-6 text-4xl font-black leading-[1.1] tracking-tight md:text-5xl lg:text-[3.5rem]"
          >
            Ensine seu filho sobre{" "}
            <motion.span
              className="inline-block bg-gradient-to-r from-coral to-[#E85D3A] bg-clip-text text-transparent"
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              Deus
            </motion.span>{" "}
            de forma{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-gold to-[#F0A030] bg-clip-text text-transparent">
                simples
              </span>
              <motion.span
                className="absolute -bottom-1 left-0 h-3 w-full rounded-full bg-gold/20"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                style={{ originX: 0 }}
              />
            </span>
            <br />
            <span className="text-foreground/60">— mesmo na correria</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mb-8 max-w-lg text-lg leading-relaxed text-foreground/65 md:text-xl"
          >
            Momentos simples com <strong className="text-foreground/80">Deus</strong> de forma leve, prática e
            cheia de significado.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <CTAButton />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="mt-5 flex items-center gap-4 text-sm text-foreground/45"
          >
            <span className="flex items-center gap-1.5">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Acesso imediato
            </span>
            <span className="h-1 w-1 rounded-full bg-foreground/20" />
            <span className="flex items-center gap-1.5">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Formato digital (PDF)
            </span>
          </motion.div>
        </motion.div>

        {/* Product Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
          className="flex flex-1 items-center justify-center"
        >
          <div className="relative">
            {/* Glow behind image */}
            <div className="absolute -inset-8 rounded-full bg-gradient-to-br from-gold/30 via-pink/20 to-coral/20 blur-3xl" />
            <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-white/40 to-transparent blur-2xl" />

            {/* Decorative ring */}
            <motion.div
              className="absolute -inset-6 rounded-full border-2 border-dashed border-gold/25"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              aria-hidden="true"
            />

            {/* Float animation wrapper */}
            <div className="float-animation relative">
              <Image
                src="/images/capa-livro.png"
                alt="Devocional Pequenos Corações - Capa do livro com ilustrações coloridas de histórias bíblicas para crianças"
                width={440}
                height={440}
                priority
                className="relative drop-shadow-[0_20px_50px_rgba(232,115,74,0.25)]"
              />
            </div>

            {/* Small badges around the image */}
            <motion.div
              className="absolute -left-4 top-1/4 rounded-xl bg-white px-3 py-2 shadow-lg"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              aria-hidden="true"
            >
              <span className="text-lg">📖</span>
              <span className="ml-1 text-xs font-bold text-foreground/70">25 histórias</span>
            </motion.div>

            <motion.div
              className="absolute -right-2 top-1/3 rounded-xl bg-white px-3 py-2 shadow-lg"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              aria-hidden="true"
            >
              <span className="text-lg">🎨</span>
              <span className="ml-1 text-xs font-bold text-foreground/70">Colorir</span>
            </motion.div>

            <motion.div
              className="absolute -bottom-2 left-1/4 rounded-xl bg-white px-3 py-2 shadow-lg"
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              aria-hidden="true"
            >
              <span className="text-lg">✝️</span>
              <span className="ml-1 text-xs font-bold text-foreground/70">Versículos</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
