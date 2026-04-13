"use client";

import { FadeInUp, StaggerContainer, StaggerItem } from "../AnimatedSection";

const painPoints = [
  { emoji: "😔", text: "\"Quero ensinar meu filho sobre Deus, mas não sei por onde começar\"", color: "from-pink-light to-white border-pink/20" },
  { emoji: "⏰", text: "\"A rotina é corrida e o tempo para momentos espirituais é curto\"",   color: "from-sky-light to-white border-sky/30" },
  { emoji: "🤔", text: "\"Como explicar a Bíblia de um jeito que uma criança entenda?\"",      color: "from-yellow/30 to-white border-gold/30" },
];

export function ProblemSection() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-16 md:px-12 md:py-24" aria-labelledby="problem-heading">
      {/* Rainbow top border */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-pink via-gold via-green to-sky" />

      <div className="relative z-10 mx-auto max-w-4xl">
        <FadeInUp className="text-center">
          <motion-span className="text-5xl inline-block">🙏</motion-span>
          <h2 id="problem-heading" className="mt-4 text-3xl font-extrabold leading-snug md:text-4xl">
            Você já se perguntou...
          </h2>
          <p className="mt-3 text-lg text-foreground/55 max-w-xl mx-auto">
            Muitos pais sentem o mesmo. Você não está sozinho!
          </p>
        </FadeInUp>

        <StaggerContainer className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {painPoints.map((p) => (
            <StaggerItem key={p.text}>
              <div className={`shine-card flex flex-col items-center gap-4 rounded-3xl bg-gradient-to-b ${p.color} border-2 p-7 text-center shadow-md h-full transition-all hover:-translate-y-1 hover:shadow-xl`}>
                <span className="text-5xl">{p.emoji}</span>
                <p className="text-base font-semibold text-foreground/70 italic leading-relaxed">{p.text}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bible verse card */}
        <FadeInUp delay={0.3} className="mt-12">
          <div className="relative overflow-hidden rounded-3xl p-[3px]"
            style={{ background: "linear-gradient(135deg, #FFD93D, #FF6B6B, #FFAA00, #FF8C42, #FFE566)" }}
          >
            <div className="relative rounded-[22px] bg-gradient-to-br from-[#7a4a00] to-[#5a3000] p-8 text-center text-white">
              <div className="absolute inset-0 opacity-10 rounded-[22px]"
                style={{ backgroundImage: "radial-gradient(circle at 20% 50%, #F9B84E 0%, transparent 50%), radial-gradient(circle at 80% 50%, #F4A4B8 0%, transparent 50%)" }}
              />
              <span className="relative text-4xl">✦</span>
              <p className="relative mt-4 text-xl font-bold italic leading-relaxed md:text-2xl">
                "Instrua a criança no caminho em que deve andar,
                <br />
                <span className="text-yellow">e quando envelhecer, não se desviará dele."</span>
              </p>
              <p className="relative mt-3 text-sm font-bold text-white/50 uppercase tracking-widest">— Provérbios 22:6</p>
            </div>
          </div>
        </FadeInUp>

        <FadeInUp delay={0.4} className="mt-10 text-center">
          <p className="text-xl leading-relaxed text-foreground/70 max-w-2xl mx-auto">
            O <strong className="text-coral">Devocional Pequenos Corações</strong> foi criado exatamente para isso —
            tornar o ensino bíblico <strong className="text-foreground">simples, divertido e constante</strong> mesmo na correria! 🎉
          </p>
        </FadeInUp>
      </div>
    </section>
  );
}
