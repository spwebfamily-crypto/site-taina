import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Script from "next/script";
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
      <head>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=2037432647120401&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
      <Script id="meta-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '2037432647120401');
          fbq('track', 'PageView');
        `}
      </Script>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
