"use client";

import { FadeInUp } from "../AnimatedSection";

function ShieldIcon() {
  return (
    <svg
      className="h-16 w-16 text-green"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
      />
    </svg>
  );
}

export function GuaranteeSection() {
  return (
    <section className="bg-white px-6 py-16 md:px-12 md:py-20" aria-labelledby="guarantee-heading">
      <FadeInUp className="mx-auto max-w-2xl text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green/10">
          <ShieldIcon />
        </div>

        <h2
          id="guarantee-heading"
          className="mt-6 text-2xl font-extrabold md:text-3xl"
        >
          Você pode testar com tranquilidade
        </h2>

        <p className="mt-4 text-lg leading-relaxed text-foreground/60">
          Caso não fique satisfeito, é possível solicitar{" "}
          <strong className="text-foreground">reembolso em até 7 dias</strong>.
          Sem perguntas, sem complicação.
        </p>
      </FadeInUp>
    </section>
  );
}
