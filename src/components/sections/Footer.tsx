"use client";

import { motion } from "framer-motion";

const footerLinks = [
  { label: "Política de Privacidade", href: "#" },
  { label: "Termos de Uso", href: "#" },
  { label: "Contato", href: "#" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#FFF8F0] to-[#FFF3E6] px-6 py-12 md:py-16">
      {/* Top gradient divider */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#E5D8C4] to-transparent" />


      <div className="relative z-10 mx-auto max-w-4xl">
        {/* Brand */}
        <div className="text-center">
          <motion.p
            className="text-lg font-black text-foreground/60"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            💛 Pequenos Corações
          </motion.p>
          <p className="mt-2 text-sm font-semibold text-foreground/40">
            Devocionais infantis feitos com carinho para famílias que amam a Deus.
          </p>
        </div>

        {/* Links */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {footerLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              className="text-xs font-bold text-foreground/35 transition-colors hover:text-foreground/60"
              whileHover={{ y: -1 }}
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        {/* Divider */}
        <div className="mt-8 h-px bg-gradient-to-r from-transparent via-[#E5D8C4]/60 to-transparent" />

        {/* Bottom */}
        <div className="mt-6 flex flex-col items-center gap-3 md:flex-row md:justify-between">
          <p className="text-xs font-bold text-foreground/30">
            © {new Date().getFullYear()} Família Pequenos Corações. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-xs font-bold text-foreground/30">
              🔒 Compra Segura
            </span>
            <span className="h-3 w-px bg-foreground/15" />
            <span className="flex items-center gap-1.5 text-xs font-bold text-foreground/30">
              🛡️ Garantia 7 Dias
            </span>
          </div>
        </div>

        {/* Made with love */}
        <p className="mt-4 text-center text-[0.65rem] font-semibold text-foreground/20">
          Feito com ❤️ para famílias que amam a Deus
        </p>
      </div>
    </footer>
  );
}
