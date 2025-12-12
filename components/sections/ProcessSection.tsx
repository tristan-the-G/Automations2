'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTexts } from '@/lib/translations';

export function ProcessSection() {
  const { language } = useLanguage();
  const texts = getTexts(language);

  return (
    <section id="process" className="container mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <Badge className="bg-[#D4AF37]/10 text-[#D4AF37] border-[#D4AF37]/30 mb-4">
          {texts.process.badge}
        </Badge>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          {texts.process.title}
          <span className="block bg-gradient-to-r from-[#D4AF37] to-[#FFEB3B] bg-clip-text text-transparent">
            {texts.process.titleGradient}
          </span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {texts.process.steps.map((step, index) => (
          <div key={index} className="relative">
            <Card className="relative bg-white/5 border-white/10 hover:border-[#D4AF37]/50 transition-all duration-300 p-6 h-full">
              <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#FFEB3B] rounded-full flex items-center justify-center mb-4 text-xl font-bold text-[#0A0A0A]">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#D4AF37]">{step.title}</h3>
              <p className="text-white/70 leading-relaxed">{step.description}</p>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
