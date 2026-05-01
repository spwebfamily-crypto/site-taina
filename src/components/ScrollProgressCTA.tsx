"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { MouseEvent } from "react";
import { useEffect, useState } from "react";
import {
  getBrowserRegionalOffer,
  useRegionalOffer,
} from "@/hooks/useRegionalOffer";

const persuasionSteps = [
  { label: "Histórias", hint: "25 histórias bíblicas prontas" },
  { label: "Conteúdo", hint: "Leitura, conversa e atividade" },
  { label: "Oferta", hint: "Acesso imediato por apenas" },
  { label: "Garantia", hint: "7 dias sem risco" },
];

const urgencyMessages = [
  "Mais de 500 famílias já começaram.",
  "Acesso imediato após a compra.",
  "Garantia de 7 dias sem perguntas.",
  "Preço especial por tempo limitado.",
];

export function ScrollProgressCTA() {
  const offer = useRegionalOffer();
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [msgIndex, setMsgIndex] = useState(0);

  useEffect(() => {
    function updateScrollState() {
      const scrollTop = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = maxScroll > 0 ? scrollTop / maxScroll : 0;
      setProgress(Math.min(Math.max(nextProgress, 0), 1));
      setIsVisible(scrollTop > window.innerHeight * 0.62);
    }

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      window.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setMsgIndex((i) => (i + 1) % urgencyMessages.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [isVisible]);

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    const checkoutUrl =
      offer.country === null
        ? getBrowserRegionalOffer().checkoutUrl
        : offer.checkoutUrl;
    window.open(checkoutUrl, "_blank", "noopener,noreferrer");
  }

  const activeStep = Math.min(
    Math.floor(progress * persuasionSteps.length),
    persuasionSteps.length - 1,
  );
  const percent = Math.round(progress * 100);

  return (
    <>
      {/* Barra de progresso no topo */}
      <div className="fixed left-0 top-0 z-50 h-1 w-full bg-black/8">
        <motion.div
          className="h-full origin-left bg-gradient-to-r from-[#D87E72] via-[#E6BF78] to-[#87B985]"
          style={{ scaleX: progress, transformOrigin: "left" }}
        />
      </div>

      <AnimatePresence>
        {isVisible && (
          <>
            {/* Sidebar desktop */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="fixed left-4 top-1/2 z-40 hidden -translate-y-1/2 lg:block"
            >
              <div className="flex flex-col gap-1.5 rounded-2xl border border-[#F1E5D9]/90 bg-[#FFFCF9]/90 p-3 shadow-[0_20px_50px_-12px_rgba(82,66,52,0.18)] backdrop-blur-md">
                {persuasionSteps.map((step, index) => (
                  <div
                    key={step.label}
                    className={`flex items-center gap-2.5 rounded-xl px-3 py-2.5 transition-all duration-300 ${
                      index === activeStep
                        ? "bg-[#FDF2E9]"
                        : index < activeStep
                          ? "opacity-50"
                          : "opacity-30"
                    }`}
                  >
                    <span
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[0.7rem] font-black transition-colors ${
                        index < activeStep
                          ? "bg-[#87B985] text-white"
                          : index === activeStep
                            ? "bg-[#B65F55] text-white"
                            : "bg-[#F1EAE0] text-[#9F8A80]"
                      }`}
                    >
                      {index < activeStep ? "✓" : index + 1}
                    </span>
                    <div>
                      <p
                        className={`text-[0.75rem] font-black leading-none ${index === activeStep ? "text-[#704235]" : "text-[#9F8A80]"}`}
                      >
                        {step.label}
                      </p>
                      {index === activeStep && (
                        <p className="mt-0.5 text-[0.6rem] font-bold text-[#A58B7E] leading-tight">
                          {step.hint}
                        </p>
                      )}
                    </div>
                  </div>
                ))}

                <div className="mt-1 border-t border-[#F1E5D9] pt-2">
                  <motion.a
                    href={offer.checkoutUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleClick}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="cta-shimmer flex w-full items-center justify-center bg-gradient-to-br from-[#D87E72] to-[#B65F55] rounded-xl px-3 py-3 text-xs font-black uppercase tracking-[0.06em] text-white shadow-[0_8px_24px_rgba(182,95,85,0.25)]"
                    aria-label="Comprar Devocional Pequenos Corações"
                  >
                    Quero por {offer.priceFormatted}
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Barra mobile/tablet */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 24 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="fixed inset-x-3 bottom-3 z-40 mx-auto max-w-lg rounded-2xl border border-white/90 bg-white/95 shadow-[0_20px_60px_rgba(82,66,52,0.2)] backdrop-blur lg:hidden"
            >
              {/* Barra de progresso interna */}
              <div className="h-1 w-full overflow-hidden rounded-t-2xl bg-[#EFE4D5]">
                <div
                  className="h-full bg-gradient-to-r from-[#D87E72] via-[#E6BF78] to-[#87B985] transition-all duration-300"
                  style={{ width: `${percent}%` }}
                />
              </div>

              <div className="flex items-center gap-3 p-3">
                {/* Preço */}
                <div className="shrink-0 text-center">
                  <p className="text-[0.55rem] font-black uppercase tracking-[0.1em] text-foreground/38">
                    apenas
                  </p>
                  <p className="text-lg font-black leading-none text-[#B65F55]">
                    {offer.priceFormatted}
                  </p>
                </div>

                {/* Mensagem rotativa */}
                <div className="min-w-0 flex-1 overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={msgIndex}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.28 }}
                      className="truncate text-xs font-bold text-foreground/60"
                    >
                      {urgencyMessages[msgIndex]}
                    </motion.p>
                  </AnimatePresence>
                  <p className="mt-0.5 text-[0.6rem] font-semibold text-foreground/35">
                    🛡️ Garantia de 7 dias · ⚡ Acesso imediato
                  </p>
                </div>

                {/* Botão */}
                <motion.a
                  href={offer.checkoutUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleClick}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="cta-shimmer shrink-0 rounded-xl px-4 py-3 text-xs font-black uppercase tracking-[0.05em] text-white shadow-[0_10px_28px_rgba(151,102,84,0.28)]"
                  aria-label="Comprar Devocional Pequenos Corações"
                >
                  Comprar
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
