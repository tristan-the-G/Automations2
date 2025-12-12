'use client';

import { useEffect } from 'react';
import { Navigation } from '@/components/sections/Navigation';
import { Footer } from '@/components/sections/Footer';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTexts } from '@/lib/translations';

const caseStudyImages = [
  'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/6804581/pexels-photo-6804581.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800'
];

export default function CaseStudies() {
  const { language } = useLanguage();
  const texts = getTexts(language);
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0A0A0A] text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#D4AF37]/10 via-[#0A0A0A] to-[#0A0A0A]"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>

      <div className="relative z-10">
        <Navigation />

        <section className="container mx-auto px-6 pt-20 pb-12">
          <Link href="/">
            <Button variant="ghost" className="text-[#D4AF37] hover:text-[#FFEB3B] hover:bg-[#D4AF37]/10 mb-8">
              <ArrowLeft className="mr-2 w-4 h-4" />
              {texts.caseStudies.backButton}
            </Button>
          </Link>

          <div className="text-center mb-16">
            <Badge className="bg-[#D4AF37]/10 text-[#D4AF37] border-[#D4AF37]/30 mb-4">
              {texts.caseStudies.badge}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {texts.caseStudies.title}
              <span className="block bg-gradient-to-r from-[#D4AF37] to-[#FFEB3B] bg-clip-text text-transparent">
                {texts.caseStudies.titleGradient}
              </span>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              {texts.caseStudies.subtitle}
            </p>
          </div>
        </section>

        <section className="container mx-auto px-6 pb-24">
          <div className="mb-12 max-w-2xl mx-auto">
            <Card className="group bg-white/5 border-white/10 hover:border-[#D4AF37]/50 transition-all duration-300 p-8">
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">
                  <span className="bg-gradient-to-r from-[#D4AF37] to-[#FFEB3B] bg-clip-text text-transparent">
                    {texts.caseStudies.featuredCard.title}
                  </span>
                </h2>
                <Button className="bg-gradient-to-r from-[#D4AF37] to-[#FFEB3B] hover:from-[#FFEB3B] hover:to-[#D4AF37] text-[#0A0A0A] font-semibold mt-4">
                  {texts.caseStudies.featuredCard.button}
                </Button>
              </div>
            </Card>
          </div>

          <section className="container mx-auto px-6 pt-20 pb-12">
            <div className="text-center mb-16">
              <Badge className="bg-[#D4AF37]/10 text-[#D4AF37] border-[#D4AF37]/30 mb-4">
                {texts.caseStudies.servicesExplained.badge}
              </Badge>
                            <h2 className="text-4xl md:text-6xl font-bold mb-4">
                <span className="text-white">{texts.caseStudies.servicesExplained.title}</span>
                <span className="block bg-gradient-to-r from-[#D4AF37] to-[#FFEB3B] bg-clip-text text-transparent">
                  {texts.caseStudies.servicesExplained.titleGradient}
                </span>
              </h2>

            </div>
          </section>

          <div className="grid md:grid-cols-2 gap-8">
            {texts.caseStudies.items.map((study, index) => (
              <Card
                key={index}
                id={study.category.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}
                className="group bg-white/5 border-white/10 hover:border-[#D4AF37]/50 transition-all duration-300 overflow-hidden scroll-mt-24"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={caseStudyImages[index]}
                    alt={study.category}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent"></div>
                  <Badge className="absolute top-4 left-4 bg-[#D4AF37]/90 text-[#0A0A0A]">
                    {study.category}
                  </Badge>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-[#D4AF37] transition-colors">
                    {study.category}
                  </h3>
                  <p className="text-white/70 mb-4 leading-relaxed">
                    {study.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="flex items-center text-sm text-white/80">
                        <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mr-2"></div>
                        {result}
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
