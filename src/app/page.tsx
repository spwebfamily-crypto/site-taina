import { HeroSection } from "@/components/sections/Hero";
import { ProblemSection } from "@/components/sections/Problem";
import { AudienceSection } from "@/components/sections/Audience";
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
      <AudienceSection />
      <ContentSection />
      <ProductSection />
      <GuaranteeSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
}
