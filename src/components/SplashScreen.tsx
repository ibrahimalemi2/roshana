import React, { useState, useEffect } from 'react';
import { RoshnaSunburst } from './RoshnaSunburst';
import { RoshnaLogo } from './RoshnaLogo';
import { Sparkles, ArrowRight } from 'lucide-react';

interface SplashScreenProps {
  onComplete: () => void;
  isReplay?: boolean;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 2400; // 2.4s luxury brand intro

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const currentProgress = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(currentProgress);

      if (elapsed >= duration) {
        clearInterval(timer);
        setIsFadingOut(true);
        setTimeout(() => {
          onComplete();
        }, 500); // 500ms smooth fade transition
      }
    }, 25);

    return () => clearInterval(timer);
  }, [onComplete]);

  const handleSkip = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      onComplete();
    }, 300);
  };

  return (
    <aside
      aria-label="Brand Splash Screen"
      className={`fixed inset-0 z-50 flex flex-col items-center justify-between bg-[#F8FAFC] text-[#0A1428] transition-opacity duration-500 overflow-hidden select-none ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background Soft Porcelain & Ambient Gold Aura (#F8FAFC) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Central Ambient Gold Spotlight */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[620px] h-[620px] rounded-full bg-radial from-[#D4AF37]/15 via-[#F1F5F9]/50 to-transparent blur-3xl pointer-events-none" />
        {/* Soft Corner Atmospheric Accents */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#D4AF37]/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-blue-100/40 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.025] bg-[radial-gradient(#0A1428_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      {/* Top Status Bar with Eyebrow and Skip Action */}
      <div className="w-full max-w-7xl px-6 sm:px-10 py-6 sm:py-8 flex items-center justify-between z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E2E8F0] text-[11px] uppercase tracking-[0.25em] text-[#0A1428] font-bold shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>Architectural Electrical Hardware</span>
        </div>

        <button
          type="button"
          onClick={handleSkip}
          className="text-xs text-slate-600 hover:text-[#0A1428] transition-all flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-[#E2E8F0] hover:border-[#D4AF37] bg-white hover:bg-slate-50 shadow-xs cursor-pointer"
        >
          <span className="uppercase tracking-wider text-[11px] font-bold">Skip</span>
          <ArrowRight className="w-3 h-3 text-[#D4AF37]" />
        </button>
      </div>

      {/* Main Centerpiece: Focal Sunburst Emblem, Wordmark, and Streamlined Subtitle */}
      <div className="flex-1 flex flex-col items-center justify-center text-center z-10 px-4 max-w-xl my-auto">
        {/* Glowing Roshna Sunburst Emblem backed by Warm Gold Ambient Halo */}
        <div className="relative mb-6 sm:mb-8 transform transition-transform duration-700 hover:scale-105">
          <div className="absolute -inset-6 sm:-inset-8 rounded-full bg-radial from-[#D4AF37]/25 via-[#D4AF37]/8 to-transparent blur-2xl animate-pulse pointer-events-none" />
          <RoshnaSunburst className="w-24 h-24 sm:w-32 sm:h-32" animate={true} glow={true} />
        </div>

        {/* Wordmark Logo in Full Color (Deep Navy Lettering with Radiant Gold Sun) */}
        <div className="w-60 sm:w-76 mb-3 filter drop-shadow-[0_4px_12px_rgba(10,20,40,0.08)]">
          <RoshnaLogo className="w-full h-auto" variant="color" />
        </div>

        {/* Single Sophisticated Subtitle Line */}
        <p className="mt-3 sm:mt-4 text-xs sm:text-[13px] tracking-[0.26em] uppercase font-semibold">
          <span className="text-[#D4AF37] font-black">SWITCH TO QUALITY</span>
          <span className="mx-2.5 text-slate-400">·</span>
          <span className="text-[#0A1428] font-bold">ARCHITECTURAL HARDWARE</span>
        </p>
      </div>

      {/* Bottom Progress & Manifest Bar */}
      <div className="w-full max-w-md px-6 pb-8 sm:pb-12 z-10 flex flex-col items-center">
        {/* Elevated Luxury Progress Bar Track */}
        <div className="w-full bg-[#E2E8F0] rounded-full h-2 overflow-hidden border border-[#CBD5E1] shadow-inner p-[1px]">
          <div
            className="h-full bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#F6E09D] transition-all duration-75 ease-out rounded-full relative"
            style={{ width: `${progress}%` }}
          >
            {/* Soft Leading Light Edge */}
            <div className="absolute right-0 top-0 bottom-0 w-2.5 bg-white/90 blur-[0.5px] rounded-full" />
          </div>
        </div>

        {/* Loading Meta Row */}
        <div className="w-full flex items-center justify-between text-[11px] font-mono tracking-[0.2em] text-slate-600 mt-3.5">
          <span className="flex items-center gap-1.5 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
            <span>INITIALIZING EXPERIENCE</span>
          </span>
          <span className="text-[#0A1428] font-bold tabular-nums">{progress}%</span>
        </div>
      </div>
    </aside>
  );
};
