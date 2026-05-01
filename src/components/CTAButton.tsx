"use client";

import { motion } from "framer-motion";
import type { MouseEvent } from "react";
import { getBrowserRegionalOffer, useRegionalOffer } from "@/hooks/useRegionalOffer";

const ariaLabel = "Comprar Devocional Pequenos Cora\u00E7\u00F5es";
const buttonLabel = "💛 QUERO COME\u00C7AR AGORA";

export function CTAButton({ className = "" }: { className?: string }) {
  const offer = useRegionalOffer();

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    const checkoutUrl =
      offer.country === null ? getBrowserRegionalOffer().checkoutUrl : offer.checkoutUrl;

    window.open(checkoutUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <motion.a
      href={offer.checkoutUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.97 }}
      className={`cta-pulse cta-shimmer relative inline-flex items-center justify-center gap-2.5 rounded-full border border-white/80 px-7 py-4 text-center text-sm font-black tracking-[0.04em] text-white shadow-[0_16px_34px_rgba(151,102,84,0.2)] backdrop-blur-sm transition-transform focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#F1D7C7]/70 sm:px-9 sm:text-base md:px-10 md:py-5 md:text-lg ${className}`}
      aria-label={ariaLabel}
      style={{ background: 'linear-gradient(135deg, #D87E72 0%, #B65F55 100%)' }}
    >
      {buttonLabel}
    </motion.a>
  );
}
