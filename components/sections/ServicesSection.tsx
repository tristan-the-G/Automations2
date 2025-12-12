'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  Brain,
  Workflow,
  Bot,
  BarChart3,
  Code2,
  Target,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTexts } from '@/lib/translations';

const serviceIcons = [Brain, Workflow, Bot, BarChart3, Code2, Target];

export function ServicesSection() {
  const { language } = useLanguage();
  const texts = getTexts(language);
  return (
    <section id="services" className="container mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <Badge className="bg-[#D4AF37]/10 text-[#D4AF37] border-[#D4AF37]/30 mb-4">
          {texts.services.badge}
        </Badge>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          {texts.services.title}
          <span className="block bg-gradient-to-r from-[#D4AF37] to-[#FFEB3B] bg-clip-text text-transparent">
            {texts.services.titleGradient}
          </span>
        </h2>
        <p className="text-white/70 text-lg max-w-2xl mx-auto">
          {texts.services.subtitle}
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {texts.services.items.map((service, index) => {
          const IconComponent = serviceIcons[index];
          return (
            <Card
              key={index}
              className="group bg-white/5 border-white/10 hover:border-[#D4AF37]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/20 backdrop-blur-sm p-6"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37]/20 to-[#FFEB3B]/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <IconComponent className="w-6 h-6 text-[#D4AF37]" />
              </div>

              <h3 className="text-xl font-bold mb-3 group-hover:text-[#D4AF37] transition-colors">
                {service.title}
              </h3>

              <p className="text-white/70 mb-4 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-2">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-sm text-white/50">
                    <CheckCircle2 className="w-4 h-4 mr-2 text-[#D4AF37]" />
                    {feature}
                  </div>
                ))}
              </div>

              <Link href={`/case-studies#${service.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`} className="block">
                <Button variant="ghost" className="mt-4 text-[#D4AF37] hover:text-[#FFEB3B] hover:bg-[#D4AF37]/10 w-full group">
                  {service.learnMore}
                  <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
