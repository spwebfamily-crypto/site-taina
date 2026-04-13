"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FadeInUp, ScaleIn } from "../AnimatedSection";
import { CTAButton } from "../CTAButton";

export function ProductSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FFFBF5] to-[#FFF0E0] px-6 py-16 md:px-12 md:py-24" aria-labelledby="product-heading">
      {/* Rainbow top border */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-pink via-coral via-gold to-yellow" />

      {/* Glow blobs */}
      <div className="absolute -left-32 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-gold/25 blur-[80px]" aria-hidden="true" />
      <div className="absolute -right-32 top-1/3 h-80 w-80 rounded-full bg-coral/20 blur-[80px]" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-12 md:flex-row md:gap-16">

        {/* Book image */}
        <ScaleIn className="flex-1">
          <div className="relative mx-auto max-w-md">
            <div className="absolute -inset-10 rounded-3xl bg-gradient-to-br from-yellow/50 via-gold/30 to-coral/25 blur-3xl" />
            <Image
              src="/images/livro-aberto.png"
              alt="Devocional Pequenos Corações aberto mostrando uma história bíblica ilustrada"
              width={500}
              height={350}
              className="relative rounded-2xl drop-shadow-[0_20px_50px_rgba(249,184,78,0.4)]"
            />
          </div>
        </ScaleIn>

        {/* Info side */}
        <div className="flex flex-1 flex-col items-center text-center md:items-start md:text-left gap-5">
          <FadeInUp>
            <motion.span
              className="inline-block rounded-full border-2 border-coral/40 bg-coral/10 px-5 py-2 text-sm font-extrabold text-coral shadow-md"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🔥 Oferta especial de lançamento
            </motion.span>
            <h2 id="product-heading" className="mt-4 text-3xl font-extrabold md:text-4xl">
              Devocional Pequenos Corações
            </h2>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {["📄 PDF digital", "🖨️ Pronto para imprimir", "♾️ Use sempre"].map((tag) => (
                <span key={tag} className="rounded-full border border-foreground/10 bg-white px-4 py-1.5 text-sm font-bold text-foreground shadow-sm">
                  {tag}
                </span>
              ))}
            </div>
          </FadeInUp>

          {/* Price box */}
          <FadeInUp delay={0.2} className="w-full">
            <div className="relative overflow-hidden rounded-[24px] p-[3px]"
              style={{ background: "linear-gradient(135deg, #FFD93D, #FF8C42, #E8734A)" }}
            >
              <div className="shine-card rounded-[22px] bg-white p-6 text-center md:text-left">
                <p className="text-sm font-semibold text-foreground/40 line-through">De R$ 49,90</p>
                <div className="flex items-baseline gap-1 mt-1 justify-center md:justify-start">
                  <span className="text-xl font-bold text-foreground/50">R$</span>
                  <motion.span
                    className="text-7xl font-black text-coral leading-none"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    14,90
                  </motion.span>
                </div>
                <p className="mt-2 text-sm font-extrabold text-green">🎉 Você economiza R$ 35,00 hoje!</p>
                <p className="mt-1 text-xs text-foreground/40">Pagamento único • Acesso imediato</p>
              </div>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.3} className="w-full flex flex-col items-center md:items-start gap-3">
            <CTAButton />
            <p className="text-xs text-foreground/40 flex items-center gap-2">
              <span>🔒 Compra 100% segura</span>
              <span>•</span>
              <span>🛡️ Garantia de 7 dias</span>
            </p>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}
