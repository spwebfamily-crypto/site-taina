"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FadeInUp, ScaleIn } from "../AnimatedSection";
import { CTAButton } from "../CTAButton";
import { useRegionalOffer } from "@/hooks/useRegionalOffer";

const productNotes = [
  "PDF digital pronto para baixar",
  "Material para imprimir em casa",
  "Acesso imediato após a compra",
];

export function ProductSection() {
  const offer = useRegionalOffer();

  return (
    <section
      className="relative overflow-hidden bg-[#2D2A26] px-4 py-14 text-white sm:px-6 md:px-12 md:py-24"
      aria-labelledby="product-heading"
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 20%, #E7C27D 0%, transparent 30%), radial-gradient(circle at 85% 70%, #D88A73 0%, transparent 32%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-center">
        <ScaleIn>
          <div className="relative mx-auto w-full max-w-md md:max-w-xl">
            <div className="grid items-end gap-3 sm:grid-cols-[0.72fr_1fr]">
              <div className="relative mx-auto w-full max-w-[210px] rounded-[18px] bg-white p-2 shadow-[0_24px_70px_rgba(0,0,0,0.22)] sm:-mr-8 sm:max-w-none">
                <Image
                  src="/images/capa-livro-upscaled.png"
                  alt="Capa do Devocional Pequenos Corações"
                  width={1066}
                  height={1600}
                  sizes="(max-width: 768px) 150px, 210px"
                  className="h-auto w-full rounded-xl"
                />
              </div>
              <div className="relative rounded-[20px] bg-white p-2 shadow-[0_24px_70px_rgba(0,0,0,0.28)] sm:p-3">
                <Image
                  src="/images/livro-aberto.png"
                  alt="Devocional Pequenos Corações aberto mostrando uma história bíblica ilustrada"
                  width={800}
                  height={533}
                  sizes="(max-width: 768px) 92vw, 360px"
                  className="h-auto w-full rounded-[14px]"
                />
              </div>
            </div>
          </div>
        </ScaleIn>

        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <FadeInUp>
            <p className="text-sm font-black uppercase tracking-[0.14em] text-gold">
              Oferta especial
            </p>
            <h2
              id="product-heading"
              className="mt-3 text-[2rem] font-black leading-tight md:text-5xl"
            >
              Devocional Pequenos Corações
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-white/65 md:text-lg">
              Um material leve para imprimir, colorir e viver pequenos momentos
              de fé com as crianças.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.12} className="mt-7 w-full max-w-md">
            <div className="rounded-[20px] border border-white/12 bg-white/8 p-5 backdrop-blur">
              <p className="text-sm font-semibold text-white/40 line-through">
                De {offer.compareAtFormatted}
              </p>
              <div className="mt-1 flex items-baseline justify-center gap-1 lg:justify-start">
                <span className="text-xl font-black text-gold md:text-2xl">
                  {offer.currencySymbol}
                </span>
                <motion.span
                  className="text-6xl font-black leading-none text-white md:text-7xl"
                  animate={{ scale: [1, 1.04, 1] }}
                  transition={{ duration: 2.1, repeat: Infinity, ease: "easeInOut" }}
                >
                  {offer.priceAmount}
                </motion.span>
              </div>
              <p className="mt-2 text-sm font-extrabold text-gold">
                Economia de {offer.savingsFormatted} hoje
              </p>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.2} className="mt-6 w-full max-w-md">
            <div className="grid gap-2">
              {productNotes.map((note) => (
                <div
                  key={note}
                  className="rounded-full border border-white/10 px-4 py-2 text-sm font-bold text-white/70"
                >
                  {note}
                </div>
              ))}
            </div>
          </FadeInUp>

          <FadeInUp delay={0.28} className="mt-7 w-full max-w-md">
            <CTAButton className="w-full px-5 py-4 text-sm tracking-[0.02em] sm:text-base md:w-auto" />
            <p className="mt-3 text-xs font-bold text-white/38">
              Compra segura • Garantia de 7 dias
            </p>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}
