'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, CircuitBoard, Languages } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function Navigation() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <nav className="container mx-auto px-6 py-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="relative w-10 h-10">
            <div className="absolute inset-0 bg-[#D4AF37] rounded-lg rotate-6 blur-sm"></div>
            <div className="relative bg-gradient-to-br from-[#D4AF37] to-[#FFEB3B] rounded-lg p-2 flex items-center justify-center">
              <CircuitBoard className="w-6 h-6 text-[#0A0A0A]" />
            </div>
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-[#D4AF37] to-[#FFEB3B] bg-clip-text text-transparent">
            NeuralSync
          </span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-white/80 hover:text-[#D4AF37] transition-colors">Services</a>
          <a href="#tech" className="text-white/80 hover:text-[#D4AF37] transition-colors">Technology</a>
          <a href="#process" className="text-white/80 hover:text-[#D4AF37] transition-colors">Process</a>

          <Button
            variant="outline"
            size="sm"
            onClick={toggleLanguage}
            className="border-[#D4AF37]/50 text-[#D4AF37] hover:bg-[#D4AF37]/10 font-semibold"
          >
            <Languages className="mr-2 w-4 h-4" />
            {language === 'en' ? 'DE' : 'EN'}
          </Button>

          <Button className="bg-gradient-to-r from-[#D4AF37] to-[#FFEB3B] hover:from-[#FFEB3B] hover:to-[#D4AF37] text-[#0A0A0A] font-semibold">
            Get Started <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </nav>
  );
}
