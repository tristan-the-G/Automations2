'use client';

import { CircuitBoard } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTexts } from '@/lib/translations';

export function Footer() {
  const { language } = useLanguage();
  const texts = getTexts(language);

  return (
    <footer className="container mx-auto px-6 py-12 border-t border-white/10">
      <div className="grid md:grid-cols-2 gap-8 justify-center mb-8">
        {/* Column 1 – Branding */}
        <div className="flex flex-col items-center">
          <div className="flex items-center space-x-2 mb-4">
            <CircuitBoard className="w-6 h-6 text-[#D4AF37]" />
            <span className="text-xl font-bold">{texts.footer.logo}</span>
          </div>
          <p className="text-white/60 text-sm text-center">
            {texts.footer.tagline}
          </p>
        </div>

        {/* Column 2 – Services */}
        <div className="flex flex-col items-center">
          <h4 className="font-bold mb-4">{texts.footer.services.title}</h4>
          <ul className="space-y-2 text-white/60 text-sm text-center">
            {texts.footer.services.links.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="hover:text-[#D4AF37] transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-white/10 pt-8 text-center text-white/60 text-sm">
        {texts.footer.copyright}
      </div>
    </footer>
  );
}
