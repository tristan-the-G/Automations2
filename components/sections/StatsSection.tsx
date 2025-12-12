'use client';

import { Card } from '@/components/ui/card';
import { Zap, Target, Rocket, BarChart3 } from 'lucide-react';

import { useLanguage } from '@/contexts/LanguageContext';
import { getTexts } from '@/lib/translations';

export function StatsSection() {
  const { language } = useLanguage();
  const texts = getTexts(language);

  return (
    <section className="container mx-auto px-6 py-24">
      <div className="grid md:grid-cols-4 gap-6">

        {/* Productivity */}
        <Card className="bg-white/5 border-white/10 hover:border-[#D4AF37]/50 transition-all duration-300 p-6 text-center">
          <Zap className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
          <div className="text-4xl font-bold text-[#D4AF37] mb-2">
            {texts.stats.productivity.value}
          </div>
          <div className="text-white/70">
            {texts.stats.productivity.label}
          </div>
        </Card>

        {/* Cost Reduction */}
        <Card className="bg-white/5 border-white/10 hover:border-[#D4AF37]/50 transition-all duration-300 p-6 text-center">
          <Target className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
          <div className="text-4xl font-bold text-[#D4AF37] mb-2">
            {texts.stats.costReduction.value}
          </div>
          <div className="text-white/70">
            {texts.stats.costReduction.label}
          </div>
        </Card>

        {/* Deployment Time */}
        <Card className="bg-white/5 border-white/10 hover:border-[#D4AF37]/50 transition-all duration-300 p-6 text-center">
          <Rocket className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
          <div className="text-4xl font-bold text-[#D4AF37] mb-2">
            {texts.stats.deployment.value}
          </div>
          <div className="text-white/70">
            {texts.stats.deployment.label}
          </div>
        </Card>

        {/* ROI */}
        <Card className="bg-white/5 border-white/10 hover:border-[#D4AF37]/50 transition-all duration-300 p-6 text-center">
          <BarChart3 className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
          <div className="text-4xl font-bold text-[#D4AF37] mb-2">
            {texts.stats.roi.value}
          </div>
          <div className="text-white/70">
            {texts.stats.roi.label}
          </div>
        </Card>

      </div>
    </section>
  );
}
