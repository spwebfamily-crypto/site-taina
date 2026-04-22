"use client";

import { motion } from "framer-motion";
import { FadeInUp } from "../AnimatedSection";
import { CTAButton } from "../CTAButton";
import { useRegionalOffer } from "@/hooks/useRegionalOffer";

const confetti = [
  { left: "5%",  top: "10%", color: "#FFD93D", size: 14, delay: 0 },
  { left: "92%", top: "15%", color: "#FF6B6B", size: 10, delay: 0.4 },
  { left: "10%", top: "80%", color: "#6BCB77", size: 12, delay: 0.8 },
  { left: "88%", top: "75%", color: "#4D96FF", size: 14, delay: 0.2 },
  { left: "50%", top: "5%",  color: "#FFE566", size: 10, delay: 1.0 },
  { left: "30%", top: "90%", color: "#FF6B6B", size: 12, delay: 0.6 },
  { left: "70%", top: "88%", color: "#FFD93D", size: 10, delay: 1.2 },
];

export function FinalCTASection() {
  const offer = useRegionalOffer();

  return (
    <section className="relative overflow-hidden px-6 py-20 md:px-12 md:py-28" aria-labelledby="final-cta-heading">

      {/* Sunny gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFF9E6] via-[#FFF0CC] to-[#FFE8D6]" />

      {/* Rainbow arc */}
      <div className="absolute -top-60 left-1/2 -translate-x-1/2 w-[160vw] h-[600px] rounded-[50%] opacity-15"
        style={{ background: "conic-gradient(from 200deg at 50% 100%, #FF6B6B, #FFD93D, #FFAA00, #FF8C42, #FFE566, #FF6B6B)" }}
        aria-hidden="true"
      />

      {/* Glow blobs */}
      <div className="absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-gold/30 blur-[80px]" aria-hidden="true" />
      <div className="absolute -right-32 top-1/3 h-80 w-80 rounded-full bg-pink/25 blur-[80px]" aria-hidden="true" />

      {/* Confetti */}
      {confetti.map((c, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{ left: c.left, top: c.top, width: c.size, height: c.size, backgroundColor: c.color }}
          animate={{ y: [0, -22, 0], opacity: [0.5, 1, 0.5], scale: [0.8, 1.3, 0.8] }}
          transition={{ duration: 3.5, repeat: Infinity, delay: c.delay, ease: "easeInOut" }}
          aria-hidden="true"
        />
      ))}

      <div className="relative z-10 mx-auto max-w-3xl text-center">

        <FadeInUp>
          <motion.div
            className="text-6xl mb-4 inline-block"
            animate={{ rotate: [-10, 10, -10], scale: [1, 1.15, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            🌟
          </motion.div>
          <p className="text-xl font-extrabold leading-relaxed text-foreground/80 md:text-2xl">
            <span className="text-coral">Pequenos momentos hoje</span>
            <br />
            podem gerar <span className="rainbow-text font-black text-2xl md:text-3xl">grandes raízes</span> para sempre.
          </p>
        </FadeInUp>

        <FadeInUp delay={0.15}>
          <h2 id="final-cta-heading" className="mt-8 text-3xl font-black text-foreground md:text-4xl leading-tight">
            Dê ao seu filho o maior presente:{" "}
            <span className="text-coral drop-shadow-[0_2px_12px_rgba(232,115,74,0.3)]">conhecer a Deus</span>{" "}
            desde pequeno 💛
          </h2>
        </FadeInUp>

        {/* Price card - MOBILE OPTIMIZED */}
        <FadeInUp delay={0.25}>
          <div className="mt-6 md:mt-8 relative overflow-hidden rounded-[24px] md:rounded-[28px] p-[3px]"
            style={{ background: "linear-gradient(135deg, #FFD93D, #FF8C42, #E8734A, #FFD93D)" }}
          >
            <div className="shine-card rounded-[22px] md:rounded-[26px] bg-white p-6 md:p-8">
              <p className="text-sm md:text-base text-foreground/60">
                Acesso imediato ao <strong className="text-foreground">Devocional Pequenos Corações</strong>
              </p>
              <div className="mt-2 md:mt-3 flex items-baseline justify-center gap-2">
                <span className="text-base md:text-lg text-foreground/40 line-through">
                  {offer.compareAtFormatted}
                </span>
                <span className="text-sm md:text-base text-foreground/50">por apenas</span>
              </div>
              <div className="flex items-baseline justify-center gap-1 mt-1">
                <span className="text-xl md:text-2xl font-bold text-foreground/50">{offer.currencySymbol}</span>
                <motion.span
                  className="text-7xl md:text-8xl font-black text-coral leading-none drop-shadow-[0_4px_16px_rgba(232,115,74,0.35)]"
                  animate={{ scale: [1, 1.04, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  {offer.priceAmount}
                </motion.span>
              </div>
              <p className="mt-2 text-xs md:text-sm font-extrabold text-green">
                🎉 Economize {offer.savingsFormatted} hoje!
              </p>
            </div>
          </div>
        </FadeInUp>

        <FadeInUp delay={0.35} className="mt-6 md:mt-8 flex flex-col items-center gap-3 md:gap-4">
          <CTAButton className="text-lg md:text-xl px-10 md:px-14 py-5 md:py-6 w-full md:w-auto" />
          <p className="text-sm text-foreground/45 flex flex-wrap justify-center gap-3">
            <span>🔒 Pagamento seguro</span>
            <span>•</span>
            <span>🛡️ Garantia de 7 dias</span>
            <span>•</span>
            <span>⚡ Acesso imediato</span>
          </p>
        </FadeInUp>

        {/* Bible verse */}
        <FadeInUp delay={0.45}>
          <div className="mt-10 relative overflow-hidden rounded-2xl p-[2px]"
            style={{ background: "linear-gradient(135deg, #FFD93D, #FFAA00, #FF8C42, #FFE566)" }}
          >
            <div className="rounded-[14px] bg-white/90 backdrop-blur-sm p-6">
              <p className="text-foreground/70 italic text-base font-semibold">
                &quot;Deixai as crianças virem a mim, e não as impeçais;
                <br />
                porque o reino de Deus é para os que se assemelham a elas.&quot;
              </p>
              <p className="mt-2 text-sm font-extrabold text-[#B8860B]">— Marcos 10:14</p>
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
