"use client";

import { motion } from "framer-motion";
import { FadeInUp } from "../AnimatedSection";

const guaranteeItems = [
  { icon: "✅", label: "Reembolso total", delay: 0 },
  { icon: "🤝", label: "Sem perguntas", delay: 0.15 },
  { icon: "⚡", label: "Processo simples", delay: 0.3 },
];

export function GuaranteeSection() {
  return (
    <section
      className="relative overflow-hidden bg-[#FFFCF7] px-6 py-20 md:px-12 md:py-24"
      aria-labelledby="guarantee-heading"
    >

      {/* Decorative sparkles */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <span className="absolute top-10 left-[15%] text-sm opacity-30 sparkle sparkle-delay-1">✨</span>
        <span className="absolute top-20 right-[20%] text-sm opacity-20 sparkle sparkle-delay-3">⭐</span>
        <span className="absolute bottom-16 left-[25%] text-sm opacity-25 sparkle sparkle-delay-5">🌟</span>
        <span className="absolute bottom-10 right-[15%] text-sm opacity-20 sparkle sparkle-delay-2">✨</span>
      </div>

      <FadeInUp className="relative z-10 mx-auto max-w-3xl">
        <div className="gradient-border-animated">
          <div className="relative overflow-hidden rounded-[calc(1.25rem-2px)] bg-gradient-to-br from-[#F2F8EE] to-[#F8FCF5] p-8 text-center shadow-[0_16px_50px_rgba(88,72,55,0.1)] md:p-12">
            <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#97C69B] via-[#6D9A70] to-[#97C69B]" />

            <motion.div
              className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-white/80 bg-white/80 text-4xl shadow-[0_10px_30px_rgba(88,72,55,0.1)]"
              animate={{ rotate: [-3, 3, -3], scale: [1, 1.05, 1] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              aria-hidden="true"
            >
              🛡️
            </motion.div>

            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#BED3B8] bg-white/70 px-4 py-1.5 text-xs font-black uppercase tracking-[0.14em] text-[#6F8E68]">
              Garantia tranquila
            </span>

            <h2
              id="guarantee-heading"
              className="mt-5 text-3xl font-black leading-tight tracking-tight text-foreground md:text-4xl"
            >
              7 dias para experimentar{" "}
              <span className="text-[#6D9A70]">sem risco.</span>
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-foreground/60 md:text-lg">
              Se o material não fizer sentido para a sua família, devolvemos o
              valor em até 7 dias. A compra continua simples, segura e sem
              burocracia.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {guaranteeItems.map((item) => (
                <motion.div
                  key={item.label}
                  className="card-glow flex items-center gap-2 rounded-xl border border-white/85 bg-white/75 px-4 py-2.5 text-sm font-extrabold text-foreground/60 shadow-sm"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: item.delay, duration: 0.5, ease: "easeOut" }}
                  whileHover={{ y: -3, scale: 1.03 }}
                >
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: item.delay + 0.2, type: "spring", stiffness: 400 }}
                  >
                    {item.icon}
                  </motion.span>
                  <span>{item.label}</span>
                </motion.div>
              ))}
            </div>

            {/* Trust indicators */}
            <motion.div
              className="mt-6 flex items-center justify-center gap-4 text-xs font-bold text-foreground/35"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <span>🔒 Compra segura</span>
              <span className="h-3 w-px bg-foreground/15" />
              <span>📧 Suporte por email</span>
              <span className="h-3 w-px bg-foreground/15" />
              <span>💯 Satisfação garantida</span>
            </motion.div>
          </div>
        </div>
      </FadeInUp>
    </section>
  );
}
