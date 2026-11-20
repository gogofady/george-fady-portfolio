import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { Scene3DBackground } from './components/3d/Scene3DBackground';
import { HeroSection } from './components/ui/HeroSection';
import { OfferSection } from './components/ui/OfferSection';
import { ProjectsSection } from './components/ui/ProjectsSection';
import { SecurityExperienceSection } from './components/ui/SecurityExperienceSection';
import { TechStackSection } from './components/ui/TechStackSection';
import { ContactDock } from './components/ui/ContactDock';
import { Footer } from './components/ui/Footer';

export const App: React.FC = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 2.0,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const reqId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(reqId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9] to-[#edf2f7] text-slate-900 selection:bg-sky-500/20 selection:text-sky-900">
      <Scene3DBackground />
      <main className="relative z-10 flex flex-col">
        <HeroSection />
        <OfferSection />
        <ProjectsSection />
        <SecurityExperienceSection />
        <TechStackSection />
      </main>
      <ContactDock />
      <Footer />
    </div>
  );
};
export default App;