import React from 'react';
import { ArrowRight, Shield, Flame, Link2, Wrench, Sparkles, CheckCircle2 } from 'lucide-react';
import { Product } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface HeroSectionProps {
  products: Product[];
  onExploreClick: () => void;
  onQuickView: (product: Product) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  products,
  onExploreClick,
  onQuickView
}) => {
  const { isRtl, t } = useLanguage();
  const matchingProduct = products.find(p => p.name.toLowerCase().includes('switch')) || products[0];

  return (
    <section 
      id="hero" 
      className="relative bg-[#0A1428] text-white overflow-hidden border-b border-[#1A2B5E] transition-colors duration-300 select-none"
    >
      {/* Background Volumetric Lighting & Atmospheric Glow */}
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-[#D4AF37]/15 blur-[140px] pointer-events-none" />
      <div className="absolute top-1/4 right-0 lg:right-10 w-[650px] h-[650px] rounded-full bg-blue-600/[0.25] blur-[160px] pointer-events-none" />
      <div className="absolute -bottom-28 left-1/2 -translate-x-1/2 w-[800px] h-[320px] rounded-full bg-cyan-500/[0.12] blur-[120px] pointer-events-none" />

      {/* Main Grid Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-10 pb-12 sm:pt-14 sm:pb-16 lg:pt-16 lg:pb-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Editorial High-Contrast Typography Matching Reference Image */}
          <div className="lg:col-span-6 flex flex-col justify-center relative z-10">
            {/* Eyebrow in Signature Warm Gold */}
            <p className="text-[#D4AF37] tracking-[0.25em] text-xs sm:text-sm uppercase font-bold mb-3">
              {isRtl ? 'راهکارهای برقی روشنا ولت' : 'ROSHNA VOLT ELECTRICAL SOLUTIONS'}
            </p>

            {/* Primary Bold Uppercase Headline (POWERING / A BRIGHTER / TOMORROW) */}
            <h1 className="text-4xl sm:text-6xl lg:text-[68px] xl:text-[76px] font-black uppercase tracking-tight leading-[1.05] text-white mb-5 sm:mb-6">
              <span className="block">{isRtl ? 'روشنایی' : 'POWERING'}</span>
              <span className="block text-[#D4AF37]">{isRtl ? 'فردایی' : 'A BRIGHTER'}</span>
              <span className="block">{isRtl ? 'درخشان‌تر' : 'TOMORROW'}</span>
            </h1>

            {/* Subtitle / Product Philosophy */}
            <p className="font-sans text-sm sm:text-base lg:text-[17px] text-slate-200 font-normal leading-relaxed max-w-lg mb-8 lg:mb-10">
              {isRtl 
                ? 'کلیدها و پریزهای با کیفیت برتر طراحی شده برای ایمنی، اطمینان و زندگی مدرن. ساخته شده با فناوری پیشرفته برای هر فضا.'
                : 'Premium quality switches & sockets designed for safety, reliability and modern living. Built with advanced technology for every space.'}
            </p>

            {/* Action Buttons: Primary Gold Button & Secondary Navy Border Button */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreClick}
                className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-lg btn-gold text-xs sm:text-sm uppercase tracking-wider font-bold shadow-lg shadow-[#D4AF37]/30 hover:shadow-xl hover:shadow-[#D4AF37]/40 transition-all duration-300 cursor-pointer"
              >
                <span>{isRtl ? 'مشاهده محصولات' : 'EXPLORE PRODUCTS'}</span>
                <ArrowRight className={`w-4 h-4 text-[#0A1428] transform transition-transform duration-300 ${
                  isRtl ? 'rotate-180 group-hover:-translate-x-1.5' : 'group-hover:translate-x-1.5'
                }`} />
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById('craft');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center px-7 py-3.5 rounded-lg border border-white/40 hover:border-[#D4AF37] hover:text-[#D4AF37] text-white text-xs sm:text-sm uppercase tracking-wider font-bold transition-all duration-300 bg-white/5 backdrop-blur-sm cursor-pointer"
              >
                <span>{isRtl ? 'درباره روشنا ولت' : 'ABOUT ROSHNA VOLT'}</span>
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: 3D Pedestal Switch Plate Showcase with Electric Lightning Glow */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-end justify-center relative">
            
            <div 
              className="relative w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[520px] cursor-pointer group"
              onClick={() => onQuickView(matchingProduct)}
              title="Click for Technical Specifications"
            >
              {/* Electric Cyan & Blue Aura Behind Switch */}
              <div className="absolute inset-0 rounded-full bg-blue-500/25 blur-3xl transform group-hover:scale-110 transition-transform duration-700 pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-cyan-400/20 blur-2xl pointer-events-none animate-pulse" />

              {/* Floating Product Plate Composition */}
              <div className="relative animate-float-subtle transition-transform duration-500 group-hover:scale-[1.02]">
                <img
                  src="/images/smart_switch_feathered.png"
                  alt="Roshna Precision Engineered Switch with Neon Green LED Indicator"
                  className="w-full h-auto object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.85)] select-none"
                />

                {/* Subtle Interactive Badge on Hover */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-3 py-1 rounded-full bg-[#0A1428]/90 border border-[#D4AF37]/50 text-[10px] text-[#D4AF37] tracking-wider uppercase font-bold backdrop-blur-md shadow-md">
                  {t.hero.quickViewHint}
                </div>
              </div>

              {/* Pedestal Base Shadow */}
              <div className="w-3/4 h-5 bg-black/60 blur-xl mx-auto rounded-full mt-2 pointer-events-none" />
            </div>

          </div>

        </div>

        {/* BOTTOM FEATURE ROW: 4 Pillars Matching Reference Flyer (100% Safe, Fire Retardant, Durable, Easy Installation) */}
        <div className="pt-10 sm:pt-12 mt-10 sm:mt-12 border-t border-white/15 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          
          {/* 1. 100% SAFE */}
          <div className="flex items-center gap-3.5 bg-white/[0.04] p-3.5 rounded-xl border border-white/10 hover:border-blue-400/50 transition-all">
            <div className="w-11 h-11 rounded-full border-2 border-blue-400/80 bg-blue-500/15 flex items-center justify-center shrink-0 text-blue-400 shadow-sm shadow-blue-500/20">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                {isRtl ? '۱۰۰٪ ایمن' : '100% SAFE'}
              </h4>
              <p className="text-[11px] text-slate-300 font-light leading-tight mt-0.5">
                {isRtl ? 'محافظت کامل برای شما و خانواده' : 'Complete protection for you & your family'}
              </p>
            </div>
          </div>

          {/* 2. FIRE RETARDANT */}
          <div className="flex items-center gap-3.5 bg-white/[0.04] p-3.5 rounded-xl border border-white/10 hover:border-[#D4AF37]/50 transition-all">
            <div className="w-11 h-11 rounded-full border-2 border-[#D4AF37] bg-[#D4AF37]/15 flex items-center justify-center shrink-0 text-[#D4AF37] shadow-sm shadow-[#D4AF37]/20">
              <Flame className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                {isRtl ? 'مقاوم در برابر آتش' : 'FIRE RETARDANT'}
              </h4>
              <p className="text-[11px] text-slate-300 font-light leading-tight mt-0.5">
                {isRtl ? 'مواد مقاوم در برابر حرارت بالا' : 'Heat resistant materials'}
              </p>
            </div>
          </div>

          {/* 3. DURABLE */}
          <div className="flex items-center gap-3.5 bg-white/[0.04] p-3.5 rounded-xl border border-white/10 hover:border-blue-400/50 transition-all">
            <div className="w-11 h-11 rounded-full border-2 border-blue-400/80 bg-blue-500/15 flex items-center justify-center shrink-0 text-blue-400 shadow-sm shadow-blue-500/20">
              <Link2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                {isRtl ? 'با دوام و مستحکم' : 'DURABLE'}
              </h4>
              <p className="text-[11px] text-slate-300 font-light leading-tight mt-0.5">
                {isRtl ? 'ساختار مقاوم برای طول عمر بالا' : 'Strong structure for long life'}
              </p>
            </div>
          </div>

          {/* 4. EASY INSTALLATION */}
          <div className="flex items-center gap-3.5 bg-white/[0.04] p-3.5 rounded-xl border border-white/10 hover:border-[#D4AF37]/50 transition-all">
            <div className="w-11 h-11 rounded-full border-2 border-[#D4AF37] bg-[#D4AF37]/15 flex items-center justify-center shrink-0 text-[#D4AF37] shadow-sm shadow-[#D4AF37]/20">
              <Wrench className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                {isRtl ? 'نصب آسان و سریع' : 'EASY INSTALLATION'}
              </h4>
              <p className="text-[11px] text-slate-300 font-light leading-tight mt-0.5">
                {isRtl ? 'نصب ساده، ایمن و بدون دردسر' : 'Simple, secure and quick setup'}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
