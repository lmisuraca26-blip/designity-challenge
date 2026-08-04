import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { StatsLogosSection } from "./components/StatsLogosSection";
import { ComparisonSection } from "./components/ComparisonSection";
import { ServicesSection } from "./components/ServicesSection";
import { TeamSection } from "./components/TeamSection";
import { CaseStudiesSection } from "./components/CaseStudiesSection";
import { ProcessSection } from "./components/ProcessSection";
import { TechStackSection } from "./components/TechStackSection";
import { IndustriesSection } from "./components/IndustriesSection";
import { CtaDemoSection } from "./components/CtaDemoSection";
import { FaqSection } from "./components/FaqSection";
import { SiteFooter } from "./components/SiteFooter";
import { TrialModal } from "./components/TrialModal";

export default function App() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [demoCallStep, setDemoCallStep] = useState(1);

  function openDemoModal() {
    setDemoModalOpen(true);
  }

  function closeDemoModal() {
    setDemoModalOpen(false);
  }

  return (
    <div className="w-full bg-white font-inter">
      <Navbar />

      <main>
        <HeroSection step={demoCallStep} setStep={setDemoCallStep} onComplete={openDemoModal} />
        <StatsLogosSection />
        <ComparisonSection />
        <ServicesSection />
        <TeamSection />
        <CaseStudiesSection />
        <ProcessSection />
        <TechStackSection />
        <IndustriesSection />
        <CtaDemoSection step={demoCallStep} setStep={setDemoCallStep} onComplete={openDemoModal} />
        <FaqSection />
      </main>

      <SiteFooter />

      {demoModalOpen && <TrialModal onClose={closeDemoModal} />}
    </div>
  );
}
