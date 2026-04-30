"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CTAButton } from "../CTAButton";
import { useRegionalOffer } from "@/hooks/useRegionalOffer";

const featurePills = [
  "25 histórias bíblicas",
  "PDF para imprimir",
  "Atividades para colorir",
];

export function HeroSection() {
  const offer = useRegionalOffer();

  return (
    <section
      className="relative overflow-hidden bg-[#FFF8EC] px-4 py-8 sm:px-6 md:px-12 md:py-16"
      aria-labelledby="hero-heading"
    >
      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgba(255,255,255,0.9) 0%, rgba(255,246,226,0.8) 48%, rgba(245,226,154,0.35) 100%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-background to-transparent"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-8 pb-5 pt-2 md:min-h-[calc(100vh-80px)] md:gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto flex max-w-xl flex-col items-center text-center lg:mx-0 lg:items-start lg:text-left"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-coral/20 bg-white/80 px-3.5 py-2 text-[0.68rem] font-black uppercase tracking-[0.1em] text-coral shadow-sm md:mb-5 md:px-4 md:text-xs">
            Devocional Pequenos Corações
          </div>

          <h1
            id="hero-heading"
            className="text-[2.15rem] font-black leading-[1.04] text-foreground sm:text-[2.55rem] md:text-6xl lg:text-[4.35rem]"
          >
            Histórias de Jesus para colorir, conversar e orar em família.
          </h1>

          <p className="mt-4 max-w-lg text-[0.98rem] leading-relaxed text-foreground/65 md:mt-5 md:text-xl">
            Um devocional infantil em PDF com histórias bíblicas curtas,
            versículos, perguntas e atividades para criar um momento simples
            com Deus em casa.
          </p>

          <div className="mt-5 grid w-full max-w-md grid-cols-1 overflow-hidden rounded-[16px] border border-gold/40 bg-white shadow-[0_18px_50px_rgba(121,75,39,0.12)] sm:grid-cols-[1fr_auto] md:mt-7 md:rounded-[18px]">
            <div className="p-4 text-center sm:text-left md:p-5">
              <p className="text-xs font-black uppercase tracking-[0.12em] text-foreground/45">
                por apenas
              </p>
              <div className="mt-1 flex items-end justify-center gap-1.5 sm:justify-start">
                <span className="pb-1 text-xl font-black text-coral md:text-2xl">
                  {offer.currencySymbol}
                </span>
                <motion.span
                  className="text-5xl font-black leading-none text-coral md:text-6xl"
                  animate={{ scale: [1, 1.035, 1] }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                >
                  {offer.priceAmount}
                </motion.span>
              </div>
              <p className="mt-2 text-xs font-bold text-foreground/45">
                {offer.market === "brazil"
                  ? "Preço em reais para quem está no Brasil."
                  : "Preço em euro para Europa e demais países."}
              </p>
            </div>
            <div className="flex items-center justify-center bg-[#F7E7C6] px-4 py-2 text-center text-xs font-black uppercase leading-tight text-[#8D6230] sm:min-w-24">
              Acesso imediato
            </div>
          </div>

          <div className="mt-5 w-full max-w-md lg:max-w-none">
            <CTAButton className="w-full px-5 py-4 text-sm tracking-[0.02em] sm:text-base md:w-auto md:px-10 md:py-5 md:text-lg" />
          </div>

          <div className="mt-5 flex flex-wrap justify-center gap-2 lg:justify-start">
            {featurePills.map((pill) => (
              <span
                key={pill}
                className="rounded-full border border-foreground/10 bg-white/70 px-3.5 py-2 text-xs font-extrabold text-foreground/60"
              >
                {pill}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32, rotate: 1 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-[260px] sm:max-w-[330px] md:max-w-[460px] lg:max-w-[520px]"
        >
          <div className="absolute -inset-4 rounded-[28px] bg-white/55 blur-xl" aria-hidden="true" />
          <div className="float-animation relative mx-auto max-w-[240px] sm:max-w-[290px] md:max-w-[360px] lg:max-w-[420px]">
            <Image
              src="/images/capa-livro-upscaled.png"
              alt="Capa do Devocional Pequenos Corações"
              width={1066}
              height={1600}
              sizes="(max-width: 640px) 240px, (max-width: 768px) 290px, (max-width: 1024px) 360px, 420px"
              priority
              className="h-auto w-full drop-shadow-[0_22px_50px_rgba(121,75,39,0.2)]"
            />
          </div>
          <div className="relative mx-auto -mt-3 w-full max-w-[320px] rounded-[16px] border border-gold/35 bg-white/92 px-4 py-3 text-center shadow-[0_18px_45px_rgba(121,75,39,0.12)] backdrop-blur md:-mt-5">
            <p className="text-sm font-black text-foreground">
              PDF para imprimir + momento com Deus em família
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
