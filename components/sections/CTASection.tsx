'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { ContactFormModal } from '@/components/ui/ContactFormModal';

import { useLanguage } from '@/contexts/LanguageContext';
import { getTexts } from '@/lib/translations';

export function CTASection() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const { language } = useLanguage();
  const texts = getTexts(language);

  return (
    <>
      <ContactFormModal
        isOpen={isContactFormOpen}
        onClose={() => setIsContactFormOpen(false)}
      />

      <section className="container mx-auto px-6 py-24">
        <Card className="relative overflow-hidden bg-white/5 border-white/10 p-12 text-center">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#D4AF37]">
              {texts.cta.title}
            </h2>

            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              {texts.cta.subtitle}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                onClick={() => setIsContactFormOpen(true)}
                className="bg-gradient-to-r from-[#D4AF37] to-[#FFEB3B] hover:from-[#FFEB3B] hover:to-[#D4AF3] text-[#0A0A0A] font-semibold text-lg px-8"
              >
                {texts.cta.primaryButton}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-[#D4AF37]/50 text-[#D4AF37] hover:bg-[#D4AF37]/10 text-lg px-8"
              >
                {texts.cta.secondaryButton}
              </Button>
            </div>
          </div>
        </Card>
      </section>
    </>
  );
}
