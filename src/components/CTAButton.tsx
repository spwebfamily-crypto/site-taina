"use client";

import { motion } from "framer-motion";

const KIWIFY_URL = "https://pay.kiwify.com.br/UukFSXB";
const ariaLabel = "Comprar Devocional Pequenos Cora\u00E7\u00F5es";
const buttonLabel = "QUERO COME\u00C7AR AGORA";

export function CTAButton({ className = "" }: { className?: string }) {
  return (
    <motion.a
      href={KIWIFY_URL}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`cta-pulse cta-shimmer relative inline-flex items-center justify-center gap-2.5 rounded-full border border-white/75 px-9 py-4 text-base font-black tracking-[0.05em] text-white shadow-[0_18px_38px_rgba(195,129,104,0.24)] backdrop-blur-sm transition-transform focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/60 md:px-10 md:py-5 md:text-lg ${className}`}
      aria-label={ariaLabel}
    >
      {buttonLabel}
    </motion.a>
  );
}
