import { HeroSection } from "@/components/sections/Hero";
import { ProblemSection } from "@/components/sections/Problem";
import { ContentSection } from "@/components/sections/Content";
import { ProductSection } from "@/components/sections/Product";
import { GuaranteeSection } from "@/components/sections/Guarantee";
import { FinalCTASection } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";
import { ScrollProgressCTA } from "@/components/ScrollProgressCTA";
import { WaveDivider } from "@/components/WaveDivider";

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <WaveDivider color="#FFFCF7" />
      <ProblemSection />
      <WaveDivider color="#FFFFFF" />
      <ContentSection />
      <WaveDivider color="#FFFDF9" />
      <WaveDivider color="#FFF8F0" />
      <ProductSection />
      <WaveDivider color="#FFFCF7" />
      <GuaranteeSection />
      <WaveDivider color="#FFF9F1" />
      <FinalCTASection />
      <Footer />
      <ScrollProgressCTA />
    </main>
  );
}
