import React, { useState, useEffect } from 'react';
import { RoshnaEmblem } from './RoshnaEmblem';
import { RoshnaLogo } from './RoshnaLogo';
import { Zap, Sparkles, ArrowRight } from 'lucide-react';

interface SplashScreenProps {
  onComplete: () => void;
  isReplay?: boolean;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete, isReplay = false }) => {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 2400; // 2.4s luxury intro

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const currentProgress = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(currentProgress);

      if (elapsed >= duration) {
        clearInterval(timer);
        setIsFadingOut(true);
        setTimeout(() => {
          onComplete();
        }, 500); // 500ms fade transition
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
      className={`fixed inset-0 z-50 flex flex-col items-center justify-between bg-[#0A1128] text-white transition-opacity duration-500 overflow-hidden select-none ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background Gold & Navy Ambient Aura */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-radial from-[#D4AF37]/20 via-[#0A1128]/30 to-transparent blur-3xl animate-pulse" />
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#D4AF37]/15 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#E5A93C]/10 blur-3xl" />
      </div>

      {/* Top Status Bar */}
      <div className="w-full max-w-7xl px-8 py-6 flex items-center justify-between z-10">
        <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
          <Sparkles className="w-3.5 h-3.5 animate-spin text-[#D4AF37]" style={{ animationDuration: '6s' }} />
          <span>Modern Switches & Sockets</span>
        </div>

        <button
          onClick={handleSkip}
          className="text-xs text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#D4AF37]/30 hover:border-[#D4AF37] bg-[#050814]/60 backdrop-blur-sm cursor-pointer"
        >
          <span>Skip</span>
          <ArrowRight className="w-3 h-3 text-[#D4AF37]" />
        </button>
      </div>

      {/* Main Centerpiece Logo Animation */}
      <div className="flex flex-col items-center justify-center text-center z-10 px-4 max-w-xl">
        {/* Emblem with animated gold aura */}
        <div className="relative mb-6 transform transition-transform duration-700 hover:scale-105">
          <div className="absolute -inset-4 rounded-full bg-radial from-[#D4AF37]/30 via-[#E5A93C]/20 to-transparent blur-xl animate-pulse" />
          <RoshnaEmblem className="w-24 h-24 sm:w-28 sm:h-28" animate={true} />
        </div>

        {/* Wordmark Logo */}
        <div className="w-64 sm:w-80 mb-3 filter drop-shadow-xl">
          <RoshnaLogo className="w-full h-auto" variant="monochrome-white" />
        </div>

        {/* Brand Tagline & Arabic Emblem Typography in Metallic Gold */}
        <div className="flex items-center gap-3 text-xs tracking-widest uppercase font-semibold text-slate-300 mt-2">
          <span className="text-[#D4AF37] flex items-center gap-1 font-bold">
            <Zap className="w-3.5 h-3.5 fill-[#D4AF37]" />
            ROSHNA VOLT
          </span>
          <span className="text-slate-500">•</span>
          <span className="tracking-wider text-white">Switch To Quality</span>
          <span className="text-slate-500">•</span>
          <span className="text-[#D4AF37] font-bold text-sm">روشنا ولت</span>
        </div>

        <p className="mt-4 text-xs text-slate-300 font-serif-heading italic max-w-sm tracking-wide">
          Modern switches and sockets crafted for comfort, safety, and style.
        </p>
      </div>

      {/* Bottom Progress & Manifest Bar */}
      <div className="w-full max-w-md px-8 pb-10 z-10 flex flex-col items-center">
        <div className="w-full bg-[#050814] rounded-full h-1.5 overflow-hidden backdrop-blur-sm border border-[#D4AF37]/30">
          <div
            className="h-full bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#E5A93C] transition-all duration-75 ease-out rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="w-full flex items-center justify-between text-[10px] uppercase tracking-widest text-slate-400 mt-3 font-mono">
          <span>LOADING COLLECTION</span>
          <span className="text-[#D4AF37] font-bold">{progress}%</span>
        </div>
      </div>
    </aside>
  );
};
