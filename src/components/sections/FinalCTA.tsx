"use client";

import { motion } from "framer-motion";
import { FadeInUp } from "../AnimatedSection";
import { CTAButton } from "../CTAButton";
import { useRegionalOffer } from "@/hooks/useRegionalOffer";

const confettiItems = [
  { emoji: "💛", top: "5%", left: "10%", delay: 0 },
  { emoji: "⭐", top: "8%", right: "12%", delay: 0.5 },
  { emoji: "✨", top: "20%", left: "5%", delay: 1.0 },
  { emoji: "🌟", top: "15%", right: "8%", delay: 1.5 },
  { emoji: "💫", top: "60%", left: "8%", delay: 0.3 },
  { emoji: "✨", top: "70%", right: "6%", delay: 0.8 },
  { emoji: "💛", top: "80%", left: "15%", delay: 1.3 },
  { emoji: "⭐", top: "75%", right: "14%", delay: 1.8 },
];

export function FinalCTASection() {
  const offer = useRegionalOffer();

  return (
    <section
      className="relative overflow-hidden px-6 py-24 md:px-12 md:py-32"
      aria-labelledby="final-cta-heading"
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(244,199,213,0.35) 0%, transparent 60%), radial-gradient(ellipse 70% 50% at 20% 100%, rgba(191,221,189,0.3) 0%, transparent 55%), linear-gradient(160deg, #FFF9F1 0%, #FCEFF4 50%, #EEF8F1 100%)",
        }}
        aria-hidden="true"
      />


      {/* Floating confetti decorations */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {confettiItems.map((item, i) => (
          <motion.span
            key={i}
            className="absolute text-lg opacity-30"
            style={{ top: item.top, left: item.left, right: item.right }}
            animate={{
              y: [0, -15, 0],
              rotate: [0, 20, -10, 0],
              opacity: [0.15, 0.4, 0.15],
            }}
            transition={{
              duration: 4,
              delay: item.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {item.emoji}
          </motion.span>
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <FadeInUp>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#E7C9A3]/80 bg-white/80 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#9E7350] shadow-sm">
            🌟 Comece hoje
          </span>
          <h2
            id="final-cta-heading"
            className="mt-5 text-3xl font-black leading-tight tracking-tight text-foreground md:text-5xl"
          >
            Dê ao seu filho um momento simples para{" "}
            <span className="rainbow-text">conhecer a Deus.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-foreground/58 md:text-lg">
            Pequenas leituras feitas com constância podem criar memórias de fé,
            conversa e carinho para a vida inteira.
          </p>
        </FadeInUp>

        <FadeInUp delay={0.16}>
          <div className="gradient-border-animated mx-auto mt-10 max-w-sm">
            <div className="shine-card relative overflow-hidden rounded-[calc(1.25rem-2px)] bg-white/95 p-7 shadow-[0_20px_60px_rgba(125,91,55,0.14)] backdrop-blur">
              <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#E4BE83] via-[#D88A73] to-[#E4BE83]" />

              {/* Discount badge */}
              <motion.div
                className="discount-badge absolute -right-2 -top-2 z-10 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#6D9A70] to-[#4A7A4E] shadow-[0_6px_20px_rgba(76,122,78,0.3)]"
                style={{ transform: "rotate(12deg)" }}
              >
                <div className="text-center">
                  <p className="text-[0.45rem] font-black leading-none text-white/80">ATÉ</p>
                  <p className="text-sm font-black leading-none text-white">65%</p>
                  <p className="text-[0.4rem] font-black leading-none text-white/80">OFF</p>
                </div>
              </motion.div>

              <p className="text-sm font-bold text-foreground/38 line-through">
                {offer.compareAtFormatted}
              </p>
              <p className="mt-0.5 text-xs font-black uppercase tracking-[0.14em] text-foreground/38">
                🎁 PDF por apenas
              </p>
              <div className="mt-1 flex items-end justify-center gap-1.5">
                <span className="pb-1.5 text-xl font-black text-[#B56F5C]">
                  {offer.currencySymbol}
                </span>
                <motion.span
                  className="text-7xl font-black leading-none price-shimmer"
                  animate={{ scale: [1, 1.03, 1] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                >
                  {offer.priceAmount}
                </motion.span>
              </div>
              <p className="mt-2 text-sm font-extrabold text-[#6F9A73]">
                ✨ Economia de {offer.savingsFormatted} hoje.
              </p>
            </div>
          </div>
        </FadeInUp>

        <FadeInUp delay={0.26} className="mt-7 flex flex-col items-center gap-3">
          <CTAButton className="w-full max-w-sm md:w-auto md:max-w-none" />
          <motion.p
            className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs font-bold text-foreground/38"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <span>🔒 Pagamento seguro</span>
            <span className="hidden sm:inline h-3 w-px bg-foreground/15" />
            <span>🛡️ Garantia de 7 dias</span>
            <span className="hidden sm:inline h-3 w-px bg-foreground/15" />
            <span>⚡ Acesso imediato</span>
          </motion.p>
        </FadeInUp>
      </div>
    </section>
  );
}
