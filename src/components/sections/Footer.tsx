export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#FFF0E0] to-[#FFE8D0] px-6 py-10 text-center">
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-coral via-gold via-green via-yellow to-orange" />
      <p className="text-2xl mb-2">🌟 ✝️ 💛</p>
      <p className="text-sm font-bold text-foreground/50">
        © {new Date().getFullYear()} Família Pequenos Corações. Todos os direitos reservados.
      </p>
      <p className="mt-1 text-xs text-foreground/35 font-semibold">
        Feito com muito amor para famílias que amam a Deus 💖
      </p>
    </footer>
  );
}
