import React from 'react';
import { ArrowRight } from 'lucide-react';
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
  // Find primary switch product for quick view interaction
  const matchingProduct = products.find(p => p.name.toLowerCase().includes('switch')) || products[0];

  return (
    <section 
      id="hero" 
      className="relative bg-[#0A1128] text-white overflow-hidden border-b border-[#1A2B5E] transition-colors duration-300 select-none"
    >
      {/* Background Volumetric Lighting & Atmospheric Glow */}
      <div className="absolute -top-32 -left-32 w-[550px] h-[550px] rounded-full bg-[#D4AF37]/15 blur-[130px] pointer-events-none" />
      <div className="absolute top-1/4 right-0 lg:right-20 w-[600px] h-[600px] rounded-full bg-teal-500/[0.12] blur-[150px] pointer-events-none" />
      <div className="absolute -bottom-28 left-1/2 -translate-x-1/2 w-[750px] h-[300px] rounded-full bg-cyan-600/[0.08] blur-[110px] pointer-events-none" />

      {/* Main Grid Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pt-14 lg:pb-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Editorial Typography & Call to Action */}
          <div className="lg:col-span-6 flex flex-col justify-center relative z-10">
            {/* Top Eyebrow */}
            <p className="font-serif text-[#D4AF37] tracking-[0.25em] text-xs sm:text-sm uppercase font-semibold mb-2 sm:mb-3">
              {t.hero.eyebrow}
            </p>

            {/* Primary Editorial Headline */}
            <h1 className="font-serif-heading text-4xl sm:text-6xl lg:text-[68px] xl:text-[76px] font-normal leading-[1.05] tracking-tight text-white mb-5 sm:mb-6">
              <span className="block font-serif">{t.hero.title1}</span>
              <span className="block font-serif">
                {t.hero.title2Prefix}
                <span className="italic font-serif text-[#D4AF37]">{t.hero.title2Highlight}</span>
              </span>
            </h1>

            {/* Subtitle / Product Philosophy */}
            <p className="font-sans-body text-sm sm:text-base lg:text-[17px] text-slate-300 font-light leading-relaxed max-w-lg mb-8 lg:mb-10">
              {t.hero.subtitle}
            </p>

            {/* Primary Gold CTA Button */}
            <div>
              <button
                onClick={onExploreClick}
                className="group inline-flex items-center gap-3.5 px-8 py-4 rounded-full btn-gold-gradient text-sm font-sans-body text-[#0A1128] font-bold shadow-lg shadow-[#D4AF37]/25 hover:shadow-xl hover:shadow-[#D4AF37]/40 transition-all duration-300 cursor-pointer"
              >
                <span className="font-bold tracking-wide">{t.hero.cta}</span>
                <ArrowRight className={`w-4 h-4 text-[#0A1128] transform transition-transform duration-300 ${
                  isRtl ? 'rotate-180 group-hover:-translate-x-1.5' : 'group-hover:translate-x-1.5'
                }`} />
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: Floating Smart Switch Plate & Glassmorphic Stats */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-end justify-center relative">
            
            {/* 3D Smart Switch Plate Showcase */}
            <div 
              className="relative w-full max-w-[380px] sm:max-w-[440px] lg:max-w-[480px] cursor-pointer group"
              onClick={() => onQuickView(matchingProduct)}
              title="Click for Technical Specifications"
            >
              {/* Cyan Volumetric Glow Behind Switch */}
              <div className="absolute inset-0 rounded-full bg-teal-400/20 blur-3xl transform group-hover:scale-110 transition-transform duration-700 pointer-events-none" />

              {/* Floating Switch Image */}
              <div className="relative animate-float-subtle transition-transform duration-500 group-hover:scale-[1.02]">
                <img
                  src="/images/smart_switch_feathered.png"
                  alt="Roshna Precision Engineered Switch with Neon Green LED and Glowing Cyan Power Orb"
                  className="w-full h-auto object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.7)] select-none"
                />

                {/* Subtle Interactive Badge on Hover */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-3 py-1 rounded-full bg-[#0A1128]/90 border border-[#D4AF37]/50 text-[10px] text-[#D4AF37] tracking-wider uppercase font-semibold backdrop-blur-md shadow-md">
                  {t.hero.quickViewHint}
                </div>
              </div>
            </div>

            {/* Bottom Glassmorphic Stats Card */}
            <div className="w-full max-w-xl mt-4 lg:mt-6">
              <div className="relative rounded-2xl border border-white/15 bg-white/[0.04] backdrop-blur-xl px-4 py-4 sm:px-7 sm:py-4.5 shadow-2xl overflow-hidden">
                {/* Top specular glint highlight line */}
                <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />

                <div className="grid grid-cols-4 gap-2 sm:gap-4 text-center divide-x divide-white/10 rtl:divide-x-reverse">
                  <div className="px-1.5 sm:px-2">
                    <div className="text-base sm:text-2xl font-serif-heading font-bold text-white tracking-wide">
                      {t.hero.stats.iecValue}
                    </div>
                    <div className="text-[10px] sm:text-xs text-neutral-400 font-sans-body font-light mt-0.5">
                      {t.hero.stats.iecLabel}
                    </div>
                  </div>

                  <div className="px-1.5 sm:px-2">
                    <div className="text-base sm:text-2xl font-serif-heading font-bold text-white tracking-wide">
                      {t.hero.stats.ip65Value}
                    </div>
                    <div className="text-[10px] sm:text-xs text-neutral-400 font-sans-body font-light mt-0.5">
                      {t.hero.stats.ip65Label}
                    </div>
                  </div>

                  <div className="px-1.5 sm:px-2">
                    <div className="text-base sm:text-2xl font-serif-heading font-bold text-white tracking-wide">
                      {t.hero.stats.warrantyValue}
                    </div>
                    <div className="text-[10px] sm:text-xs text-neutral-400 font-sans-body font-light mt-0.5">
                      {t.hero.stats.warrantyLabel}
                    </div>
                  </div>

                  <div className="px-1.5 sm:px-2">
                    <div className="text-base sm:text-2xl font-serif-heading font-bold text-white tracking-wide">
                      {t.hero.stats.toolValue}
                    </div>
                    <div className="text-[10px] sm:text-xs text-neutral-400 font-sans-body font-light mt-0.5">
                      {t.hero.stats.toolLabel}
                    </div>
                  </div>
                </div>
              </div>

              {/* Cyan specular glow reflection beneath stats card */}
              <div className="w-40 sm:w-60 h-3.5 bg-teal-400/35 blur-md mx-auto rounded-full mt-1 pointer-events-none" />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
