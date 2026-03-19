import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Devocional Pequenos Corações | Ensine seu filho sobre Deus",
  description:
    "Devocional infantil para crianças de 2 a 5 anos. 25 histórias bíblicas curtas, versículos, atividades e desenhos para colorir. Momentos simples com Deus de forma leve e prática.",
  keywords: [
    "devocional infantil",
    "devocional para crianças",
    "histórias bíblicas infantis",
    "ensino bíblico para crianças",
    "devocional pequenos corações",
    "devocional 2 a 5 anos",
  ],
  openGraph: {
    title: "Devocional Pequenos Corações | Ensine seu filho sobre Deus",
    description:
      "25 histórias bíblicas curtas e adaptadas para crianças de 2 a 5 anos. Momentos simples com Deus de forma leve, prática e cheia de significado.",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/images/capa-livro.png",
        width: 600,
        height: 600,
        alt: "Devocional Pequenos Corações - Capa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Devocional Pequenos Corações",
    description:
      "Ensine seu filho sobre Deus de forma simples — mesmo na correria.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${nunito.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
