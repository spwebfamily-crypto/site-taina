export function Footer() {
  return (
    <footer className="bg-foreground/5 px-6 py-8 text-center">
      <p className="text-sm text-foreground/40">
        © {new Date().getFullYear()} Família Pequenos Corações. Todos os
        direitos reservados.
      </p>
    </footer>
  );
}
