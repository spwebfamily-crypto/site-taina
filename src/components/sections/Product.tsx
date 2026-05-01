"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ProductImage from "../../produto-aberto-clean.png";
import { FadeInUp, ScaleIn } from "../AnimatedSection";
import { CTAButton } from "../CTAButton";
import { useRegionalOffer } from "@/hooks/useRegionalOffer";

const productNotes = [
  "⚡ Acesso imediato",
  "🖨️ Pronto para imprimir",
  "♾️ Use quantas vezes quiser",
];

const insideItems = [
  { icon: "📖", text: "História bíblica curta", gradient: "from-[#F1F8FB] to-[#D9EDFB]" },
  { icon: "💬", text: "Pergunta para conversar", gradient: "from-[#FFF4F6] to-[#FCDCE7]" },
  { icon: "🙏", text: "Versículo e oração guiada", gradient: "from-[#FDFBF0] to-[#F5EDCB]" },
  { icon: "🎨", text: "Desenho para colorir", gradient: "from-[#F6F1FA] to-[#EFE5F7]" },
];

export function ProductSection() {
  const offer = useRegionalOffer();

  return (
    <section
      className="relative overflow-hidden bg-[#FFF8F0] px-6 py-20 md:px-12 md:py-28"
      aria-labelledby="product-heading"
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 60% 50% at 10% 20%, rgba(234,208,135,0.28) 0%, transparent 55%), radial-gradient(ellipse 55% 45% at 90% 80%, rgba(191,216,239,0.35) 0%, transparent 50%), linear-gradient(180deg, #FFF8F0 0%, #F8FBF4 100%)",
        }}
        aria-hidden="true"
      />


      <div className="relative z-10 mx-auto grid max-w-6xl gap-14 md:grid-cols-[1.1fr_0.9fr] md:items-center md:gap-20">
        <ScaleIn>
          <div className="relative mx-auto max-w-[480px] md:max-w-[560px]">
            {/* Glow behind product image */}
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[75%] w-[75%] rounded-full glow-pulse opacity-50"
              style={{
                background: "radial-gradient(circle, rgba(232,185,110,0.2) 0%, rgba(216,138,115,0.1) 40%, transparent 70%)",
              }}
              aria-hidden="true"
            />
            <Image
              src={ProductImage}
              alt="Devocional Pequenos Corações aberto para leitura e atividade"
              sizes="(max-width: 768px) 92vw, 560px"
              className="relative h-auto w-full drop-shadow-[0_32px_80px_rgba(92,79,56,0.24)]"
            />
            <div className="absolute -bottom-5 left-1/2 w-[85%] -translate-x-1/2 rounded-xl border border-white/90 bg-white/90 px-4 py-3 text-center shadow-[0_12px_36px_rgba(92,79,56,0.12)] backdrop-blur">
              <p className="text-xs font-black text-foreground/60">
                ✨ Visual real do PDF incluído no material
              </p>
            </div>
          </div>
        </ScaleIn>

        <div className="flex flex-col items-center gap-6 text-center md:items-start md:text-left">
          <FadeInUp>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#E7C9A3]/80 bg-white/80 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#9E7350] shadow-sm">
              🎁 O que você recebe
            </span>
            <h2
              id="product-heading"
              className="mt-4 text-3xl font-black leading-tight tracking-tight text-foreground md:text-5xl"
            >
              Um PDF bonito, guiado e feito para{" "}
              <span className="rainbow-text">virar rotina.</span>
            </h2>
            <p className="mt-4 max-w-lg text-base font-semibold leading-relaxed text-foreground/58 md:text-lg">
              Cada devocional conduz a leitura, a conversa e a atividade sem
              exigir preparo. É só abrir, imprimir e viver o momento.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.1} className="w-full max-w-lg">
            <div className="grid grid-cols-2 gap-2.5">
              {insideItems.map((item) => (
                <motion.div
                  key={item.text}
                  className={`card-glow flex items-center gap-3 rounded-xl border border-white/85 bg-gradient-to-br ${item.gradient} px-4 py-3 text-sm font-bold text-foreground/65 shadow-sm backdrop-blur`}
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/80 text-lg ring-1 ring-black/5">{item.icon}</span>
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </div>
          </FadeInUp>

          <FadeInUp delay={0.16} className="flex flex-wrap justify-center gap-2 md:justify-start">
            {productNotes.map((note) => (
              <motion.span
                key={note}
                className="rounded-full border border-[#E8D8C5]/80 bg-white/80 px-3.5 py-1.5 text-xs font-black uppercase tracking-[0.07em] text-foreground/48 shadow-sm"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {note}
              </motion.span>
            ))}
          </FadeInUp>

          <FadeInUp delay={0.24} className="w-full max-w-sm">
            <div className="shine-card relative overflow-hidden rounded-2xl border border-[#E6C98D]/60 bg-white/90 p-6 shadow-[0_20px_60px_rgba(125,91,55,0.13)] backdrop-blur">
              <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#E4BE83] to-[#D88A73]" />

              {/* Discount badge */}
              <motion.div
                className="discount-badge absolute -right-2 -top-2 z-10 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#D87E72] to-[#B65F55] shadow-[0_6px_20px_rgba(182,95,85,0.35)]"
                style={{ transform: "rotate(12deg)" }}
              >
                <div className="text-center">
                  <p className="text-[0.5rem] font-black leading-none text-white/80">ATÉ</p>
                  <p className="text-base font-black leading-none text-white">65%</p>
                  <p className="text-[0.45rem] font-black leading-none text-white/80">OFF</p>
                </div>
              </motion.div>

              <p className="text-sm font-bold text-foreground/38 line-through">
                De {offer.compareAtFormatted}
              </p>
              <p className="mt-0.5 text-[0.65rem] font-black uppercase tracking-[0.14em] text-foreground/38">
                hoje por apenas
              </p>
              <div className="mt-1 flex items-end gap-1.5">
                <span className="pb-1 text-lg font-black text-[#B65F55]">
                  {offer.currencySymbol}
                </span>
                <motion.span
                  className="text-6xl font-black leading-none price-shimmer"
                  animate={{ scale: [1, 1.03, 1] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                >
                  {offer.priceAmount}
                </motion.span>
              </div>
              <p className="mt-2 text-sm font-extrabold text-[#6D9A70]">
                ✨ Você economiza {offer.savingsFormatted} hoje.
              </p>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.32} className="w-full max-w-sm md:max-w-none">
            <CTAButton className="w-full md:w-auto" />
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}
