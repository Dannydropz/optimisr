import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import IntroSection from "@/components/IntroSection";
import SkillsSection from "@/components/SkillsSection";
import IntegrationsSection from "@/components/IntegrationsSection";
import PricingSection from "@/components/PricingSection";
import FunctionsSection from "@/components/FunctionsSection";
import FinalCTA from "@/components/FinalCTA";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <IntroSection />
        <SkillsSection />
        <IntegrationsSection />
        <PricingSection />
        <FunctionsSection />
        <FinalCTA />
      </main>
      <SiteFooter />
    </>
  );
}
