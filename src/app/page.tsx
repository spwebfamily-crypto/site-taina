import { HeroSection } from "@/components/sections/Hero";
import { ProblemSection } from "@/components/sections/Problem";
import { ContentSection } from "@/components/sections/Content";
import { ProductSection } from "@/components/sections/Product";
import { GuaranteeSection } from "@/components/sections/Guarantee";
import { FinalCTASection } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <ProblemSection />
      <ContentSection />
      <ProductSection />
      <GuaranteeSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
}
