'use client';

import { useState, useEffect } from 'react';
import { Navigation } from '@/components/sections/Navigation';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { TechStackSection } from '@/components/sections/TechStackSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { StatsSection } from '@/components/sections/StatsSection';
import { CTASection } from '@/components/sections/CTASection';
import { Footer } from '@/components/sections/Footer';
import { FloatingOrbs } from '@/components/ui/FloatingOrbs';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {   
    setMounted(true);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0A0A0A] text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#D4AF37]/10 via-[#0A0A0A] to-[#0A0A0A]"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>

      <FloatingOrbs />

      <div className="relative z-10">
        <Navigation />
        <HeroSection mounted={mounted} />
        <ServicesSection />
        <TechStackSection />
        <ProcessSection />
        <StatsSection />
        <CTASection />
        <Footer />
      </div>
    </div>
  );
}
