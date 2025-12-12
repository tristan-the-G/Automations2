'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { getTexts } from '@/lib/translations';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Rocket } from 'lucide-react';
import { ThreeDCube } from '@/components/ui/ThreeDCube';
import { ContactFormModal } from '@/components/ui/ContactFormModal';
import Link from 'next/link';

interface HeroSectionProps {
  mounted: boolean;
}

export function HeroSection({ mounted }: HeroSectionProps) {
  const { language } = useLanguage();
  const texts = getTexts(language);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  return (
    <>
      <ContactFormModal isOpen={isContactFormOpen} onClose={() => setIsContactFormOpen(false)} />
      <section className="container mx-auto px-6 pt-20 pb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-8 transition-all duration-1000 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <Badge className="bg-[#D4AF37]/10 text-[#D4AF37] border-[#D4AF37]/30 hover:bg-[#D4AF37]/20">
              <Sparkles className="w-3 h-3 mr-1" />
              {texts.hero.badge}
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              {texts.hero.mainTitle}
              <span className="block bg-gradient-to-r from-[#D4AF37] via-[#FFEB3B] to-[#D4AF37] bg-clip-text text-transparent">
                {texts.hero.titleGradient}
              </span>
            </h1>

            <p className="text-xl text-white/70 leading-relaxed">
              {texts.hero.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" onClick={() => setIsContactFormOpen(true)} className="bg-gradient-to-r from-[#D4AF37] to-[#FFEB3B] hover:from-[#FFEB3B] hover:to-[#D4AF37] text-[#0A0A0A] font-semibold text-lg px-8">
                {texts.hero.primaryButton}
                <Rocket className="ml-2 w-5 h-5" />
              </Button>
              <Link href="/case-studies">
                <Button size="lg" variant="outline" className="border-[#D4AF37]/50 text-[#D4AF37] hover:bg-[#D4AF37]/10 text-lg px-8">
                  {texts.hero.secondaryButton}
                </Button>
              </Link>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-[#D4AF37]">{texts.hero.stats.projectsDeployed.value}</div>
                <div className="text-sm text-white/50">{texts.hero.stats.projectsDeployed.label}</div>
              </div>
              <div className="h-12 w-px bg-white/10"></div>
              <div>
                <div className="text-3xl font-bold text-[#D4AF37]">{texts.hero.stats.satisfaction.value}</div>
                <div className="text-sm text-white/50">{texts.hero.stats.satisfaction.label}</div>
              </div>
              <div className="h-12 w-px bg-white/10"></div>
              <div>
                <div className="text-3xl font-bold text-[#D4AF37]">{texts.hero.stats.operations.value}</div>
                <div className="text-sm text-white/50">{texts.hero.stats.operations.label}</div>
              </div>
            </div>
          </div>

          <div className={`relative transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative w-full aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/20 to-[#FFEB3B]/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="relative w-full h-full flex items-center justify-center">
                <ThreeDCube />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
