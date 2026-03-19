"use client";

import { motion } from "framer-motion";

interface CTAButtonProps {
  className?: string;
}

const KIWIFY_URL = "https://pay.kiwify.com.br/UukFSXB";

export function CTAButton({ className = "" }: CTAButtonProps) {
  return (
    <motion.a
      href={KIWIFY_URL}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className={`cta-pulse inline-flex items-center justify-center rounded-full bg-gradient-to-r from-coral to-coral-dark px-10 py-5 text-lg font-extrabold tracking-wide text-white shadow-lg transition-all hover:shadow-xl hover:shadow-coral/30 ${className}`}
      aria-label="Comprar Devocional Pequenos Corações"
    >
      QUERO COMEÇAR AGORA
    </motion.a>
  );
}
