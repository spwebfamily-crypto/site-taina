"use client";

import { motion } from "framer-motion";
import { FadeInUp } from "../AnimatedSection";

export function GuaranteeSection() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-16 md:px-12 md:py-20" aria-labelledby="guarantee-heading">
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-green via-gold to-yellow" />

      {/* Soft glow */}
      <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "radial-gradient(circle at 50% 50%, #D6F5E0 0%, transparent 60%)" }} aria-hidden="true" />

      <FadeInUp className="relative z-10 mx-auto max-w-2xl">
        {/* Rainbow border wrapper */}
        <div className="relative overflow-hidden rounded-[32px] p-[3px]"
          style={{ background: "linear-gradient(135deg, #6BCB77, #FFD93D, #FFAA00, #FF8C42, #6BCB77)" }}
        >
          <div className="shine-card rounded-[30px] bg-gradient-to-br from-[#F0FFF5] to-white p-10 text-center">
            <motion.div
              className="mx-auto flex h-28 w-28 items-center justify-center rounded-full text-6xl shadow-lg"
              style={{ background: "linear-gradient(135deg, #D6F5E0, #B8F0C8)" }}
              animate={{ scale: [1, 1.08, 1], rotate: [0, 5, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              🛡️
            </motion.div>

            <h2 id="guarantee-heading" className="mt-6 text-2xl font-extrabold md:text-3xl">
              Garantia de 7 dias
            </h2>
            <p className="mt-1 text-sm font-extrabold uppercase tracking-widest text-green">
              ✅ Risco zero para você
            </p>

            <p className="mt-5 text-lg leading-relaxed text-foreground/65">
              Experimente com total tranquilidade. Se por qualquer motivo não ficar satisfeito,{" "}
              <strong className="text-foreground">devolvemos 100% do seu dinheiro</strong>{" "}
              em até 7 dias. Sem perguntas, sem burocracia. Prometemos! 🤝
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-3">
              {[
                { icon: "✅", label: "Reembolso total",  bg: "bg-green/10 text-green border-green/20" },
                { icon: "🤐", label: "Sem perguntas",    bg: "bg-sky/20 text-[#2980B9] border-sky/30" },
                { icon: "⚡", label: "Processo simples", bg: "bg-gold/15 text-[#B8860B] border-gold/30" },
              ].map((b) => (
                <span key={b.label} className={`flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-bold ${b.bg}`}>
                  {b.icon} {b.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </FadeInUp>
    </section>
  );
}
