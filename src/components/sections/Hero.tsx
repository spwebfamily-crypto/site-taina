"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CTAButton } from "../CTAButton";
import { Floating, RainbowSVG, SheepSVG } from "../BiblicalIllustrations";

const eyebrowText = "Para crian\u00E7as de 2 a 5 anos";
const brandText = "Devocional Pequenos Cora\u00E7\u00F5es";
const titleLineOne = "Um cantinho de f\u00E9";
const titleLineTwo = "para o cora\u00E7\u00E3o do";
const titleLineThree = "seu filho";
const descriptionText =
  "25 hist\u00F3rias b\u00EDblicas curtas, delicadas e f\u00E1ceis de viver em fam\u00EDlia, com um visual mais leve, acolhedor e cheio de do\u00E7ura.";
const imageAlt = "Devocional Pequenos Cora\u00E7\u00F5es - Capa do livro";

const highlights = [
  "25 hist\u00F3rias curtas",
  "PDF para imprimir",
  "Acesso imediato",
];

const ambientSheep = [
  { className: "left-[4%] top-[14%] hidden lg:block", size: "h-20 w-20", duration: 6.2, delay: 0.1, yRange: 10 },
  { className: "left-[8%] bottom-[16%] hidden md:block", size: "h-24 w-24", duration: 5.8, delay: 0.6, yRange: 12 },
  { className: "right-[9%] top-[18%] hidden xl:block", size: "h-[4.5rem] w-[4.5rem]", duration: 6.8, delay: 0.3, yRange: 11 },
  { className: "right-[5%] bottom-[12%] hidden lg:block", size: "h-24 w-24", duration: 5.4, delay: 0.9, yRange: 13 },
];

const frameSheep = [
  { className: "-left-8 bottom-10 hidden md:block", size: "h-[4.5rem] w-[4.5rem]", duration: 5.2, delay: 0.2, yRange: 9 },
  { className: "-right-6 top-10 hidden md:block", size: "h-16 w-16", duration: 5.7, delay: 0.5, yRange: 8 },
  { className: "right-10 -bottom-4 hidden lg:block", size: "h-20 w-20", duration: 6.1, delay: 0.8, yRange: 10 },
];

export function HeroSection() {
  return (
    <section className="relative min-h-[100vh] overflow-hidden" aria-labelledby="hero-heading">
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFFDF9] via-[#FFF7F2] to-[#F7FAFF]" />
      <div
        className="absolute inset-x-0 top-0 h-[52vh] opacity-80"
        style={{
          background:
            "radial-gradient(circle at top, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0) 72%)",
        }}
        aria-hidden="true"
      />
      <div className="absolute -left-24 top-0 h-[420px] w-[420px] rounded-full bg-[#FCEEF1] blur-[110px]" aria-hidden="true" />
      <div className="absolute right-0 top-16 h-[360px] w-[360px] rounded-full bg-[#EAF5FF] blur-[100px]" aria-hidden="true" />
      <div className="absolute bottom-0 left-1/3 h-[280px] w-[280px] rounded-full bg-[#FFF5DD] blur-[90px]" aria-hidden="true" />

      {ambientSheep.map((sheep, index) => (
        <Floating
          key={index}
          className={`absolute ${sheep.className}`}
          duration={sheep.duration}
          delay={sheep.delay}
          yRange={sheep.yRange}
        >
          <div className="rounded-full bg-white/75 p-3 shadow-[0_16px_36px_rgba(199,168,147,0.18)] backdrop-blur-sm">
            <SheepSVG className={`${sheep.size} text-[#F8F4EF]`} />
          </div>
        </Floating>
      ))}

      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none" className="h-16 w-full md:h-24">
          <path d="M0 60C360 116 720 8 1080 54C1260 78 1380 48 1440 60V120H0V60Z" fill="#FFFCF8" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-10 px-6 pb-24 pt-14 md:flex-row md:gap-14 md:px-12 md:pb-32 md:pt-20">
        <motion.div
          initial={{ opacity: 0, x: -36 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-1 flex-col items-center text-center md:items-start md:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/80 px-5 py-2 text-sm font-extrabold text-[#B88472] shadow-[0_10px_24px_rgba(194,160,145,0.16)] backdrop-blur-sm"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-[#E9C58A]" />
            {eyebrowText}
          </motion.div>

          <p className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-[#C79C8D]">
            {brandText}
          </p>

          <h1 id="hero-heading" className="max-w-xl text-4xl font-black leading-[1.08] tracking-tight md:text-5xl lg:text-[3.65rem]">
            <span className="text-[#B97F6B]">{titleLineOne}</span>
            <br />
            <span className="text-foreground/86">{titleLineTwo}</span>
            <br />
            <span className="text-[#D29B76]">{titleLineThree}</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="mt-6 max-w-lg text-lg leading-relaxed text-foreground/68 md:text-xl"
          >
            {descriptionText}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="mt-8"
          >
            <CTAButton />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75 }}
            className="mt-7 flex flex-wrap items-center justify-center gap-3 md:justify-start"
          >
            {highlights.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/75 bg-white/72 px-4 py-2 text-sm font-bold text-foreground/62 shadow-[0_10px_24px_rgba(194,160,145,0.14)] backdrop-blur-sm"
              >
                {item}
              </span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 28 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: "easeOut" }}
          className="flex flex-1 items-center justify-center"
        >
          <div className="relative">
            {frameSheep.map((sheep, index) => (
              <Floating
                key={index}
                className={`absolute ${sheep.className}`}
                duration={sheep.duration}
                delay={sheep.delay}
                yRange={sheep.yRange}
              >
                <div className="rounded-full bg-white/82 p-2.5 shadow-[0_16px_34px_rgba(194,160,145,0.16)] backdrop-blur-sm">
                  <SheepSVG className={sheep.size} />
                </div>
              </Floating>
            ))}

            <div className="relative rounded-[2.75rem] border border-white/80 bg-white/58 px-6 py-8 shadow-[0_28px_80px_rgba(195,160,142,0.2)] backdrop-blur-sm md:px-8">
              <RainbowSVG className="pointer-events-none absolute -top-10 left-1/2 hidden w-[330px] -translate-x-1/2 opacity-45 md:block" />

              <div className="float-animation relative">
                <Image
                  src="/images/capa-livro-hero-soft.png"
                  alt={imageAlt}
                  width={560}
                  height={560}
                  preload
                  quality={100}
                  sizes="(max-width: 640px) 320px, (max-width: 768px) 390px, (max-width: 1024px) 470px, 560px"
                  className="relative h-auto w-[320px] sm:w-[390px] md:w-[470px] lg:w-[560px] drop-shadow-[0_24px_60px_rgba(194,145,121,0.28)]"
                  style={{ filter: "saturate(1.04) contrast(1.03)" }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
