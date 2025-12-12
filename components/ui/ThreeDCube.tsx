import { Bot } from 'lucide-react';

export function ThreeDCube() {
  return (
    <div className="relative w-64 h-64 animate-float">
      <div className="absolute inset-0 perspective-1000">
        <div className="relative w-full h-full animate-spin-slow preserve-3d">
          <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/30 to-[#FFEB3B]/30 border border-[#D4AF37]/50 backdrop-blur-sm rounded-lg rotate-x-45 rotate-y-45"></div>
          <div className="absolute inset-4 bg-gradient-to-br from-[#FFEB3B]/20 to-[#D4AF37]/20 border border-[#FFEB3B]/50 backdrop-blur-sm rounded-lg rotate-x-30 rotate-y-60"></div>
          <div className="absolute inset-8 bg-gradient-to-br from-[#D4AF37]/20 to-[#FFEB3B]/20 border border-[#D4AF37]/50 backdrop-blur-sm rounded-lg rotate-x-60 rotate-y-30"></div>
        </div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <Bot className="w-20 h-20 text-[#D4AF37] animate-pulse" />
      </div>
    </div>
  );
}
