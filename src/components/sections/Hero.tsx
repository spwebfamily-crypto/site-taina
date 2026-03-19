"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CTAButton } from "../CTAButton";
import { FloatingShapes } from "../Decorations";

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-background px-6 pb-16 pt-12 md:px-12 md:pb-24 md:pt-20"
      aria-labelledby="hero-heading"
    >
      <FloatingShapes />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 md:flex-row md:gap-16">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-1 flex-col items-center text-center md:items-start md:text-left"
        >
          <span className="mb-4 inline-block rounded-full bg-pink-light px-4 py-1.5 text-sm font-bold text-coral">
            Para crianças de 2 a 5 anos
          </span>

          <h1
            id="hero-heading"
            className="mb-6 text-4xl font-black leading-tight tracking-tight md:text-5xl lg:text-6xl"
          >
            Ensine seu filho sobre{" "}
            <span className="text-coral">Deus</span> de forma{" "}
            <span className="text-gold">simples</span>
            <br />
            <span className="text-foreground/70">— mesmo na correria</span>
          </h1>

          <p className="mb-8 max-w-lg text-lg leading-relaxed text-foreground/70 md:text-xl">
            Momentos simples com <strong>Deus</strong> de forma leve, prática e
            cheia de significado.
          </p>

          <CTAButton />

          <p className="mt-4 text-sm text-foreground/50">
            Acesso imediato • Formato digital (PDF)
          </p>
        </motion.div>

        {/* Product Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="flex flex-1 items-center justify-center"
        >
          <div className="float-animation relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-gold/20 via-pink/10 to-coral/10 blur-2xl" />
            <Image
              src="/images/capa-livro.png"
              alt="Devocional Pequenos Corações - Capa do livro com ilustrações coloridas de histórias bíblicas para crianças"
              width={420}
              height={420}
              priority
              className="relative drop-shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
