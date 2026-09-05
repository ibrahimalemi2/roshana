import React, { useState } from 'react';
import { ArrowRight, Shield, Flame, Link2, Wrench, Sparkles, CheckCircle2, SlidersHorizontal } from 'lucide-react';
import { Product } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { IMAGES } from '../data/imageAssets';

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
  const [selectedAsset, setSelectedAsset] = useState<'dual' | 'single'>('dual');
  const matchingProduct = products.find(p => p.name.toLowerCase().includes('switch')) || products[0];

  const heroAsset = selectedAsset === 'dual' 
    ? {
        image: IMAGES.DUAL_SWITCH_DARK_MARBLE,
        title: isRtl ? 'کلید دو پل مدرن — سنگ مرمر تیره' : 'Dual-Gang Minimalist Switch',
        subtitle: isRtl ? 'روکش پلی‌کربنات مات مخملی با رگه‌های طلایی' : 'Dark Marble Texture with Warm Gold Accents',
        tag: isRtl ? 'پروفیل باریک ۶.۵ میلی‌متر' : 'Ultra-Thin 6.5mm Profile'
      }
    : {
        image: IMAGES.SINGLE_SWITCH_WARM_CREAM,
        title: isRtl ? 'کلید تک پل مدرن — سفید کرم' : 'Single-Gang Architectural Switch',
        subtitle: isRtl ? 'سطح مات ضد حساسیت و ضد لک' : 'Velvet Matte Anti-Allergic Surface',
        tag: isRtl ? 'پروفیل باریک ۶.۵ میلی‌متر' : 'Ultra-Thin 6.5mm Profile'
      };

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

          {/* RIGHT COLUMN: Architectural Switch Showcase with Ambient Gold Glow */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-end justify-center relative">
            
            <div 
              className="relative w-full max-w-[440px] sm:max-w-[490px] lg:max-w-[530px] cursor-pointer group"
              onClick={() => onQuickView(matchingProduct)}
              title="Click for Technical Specifications"
            >
              {/* Electric Cyan & Warm Gold Aura Behind Switch */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#D4AF37]/25 via-blue-600/20 to-[#D4AF37]/15 blur-2xl transform group-hover:scale-105 transition-transform duration-700 pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-cyan-400/15 blur-3xl pointer-events-none animate-pulse" />

              {/* Architectural Frame with Chamfered Precision Border */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#D4AF37]/40 shadow-[0_25px_60px_rgba(0,0,0,0.85)] bg-[#070D1E]">
                <img
                  src={heroAsset.image}
                  alt={heroAsset.title}
                  className="w-full h-[360px] sm:h-[420px] lg:h-[460px] object-cover transform transition-transform duration-700 ease-out group-hover:scale-105 select-none"
                  loading="eager"
                />

                {/* Floating Architectural Spec Badges */}
                <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 z-10 flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-mono font-bold tracking-wider uppercase bg-[#0A1428]/90 backdrop-blur-md text-[#D4AF37] border border-[#D4AF37]/40 shadow-sm">
                    <Sparkles className="w-3 h-3 text-[#D4AF37]" />
                    <span>{heroAsset.tag}</span>
                  </span>
                </div>

                <div className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-3 py-1 rounded-full bg-[#0A1428]/90 border border-[#D4AF37]/60 text-[10px] text-[#D4AF37] tracking-wider uppercase font-bold backdrop-blur-md shadow-md">
                  {t.hero.quickViewHint}
                </div>

                {/* Bottom Architectural Caption Overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0A1428] via-[#0A1428]/80 to-transparent pt-12 pb-4 px-4 sm:px-5 flex items-end justify-between text-white">
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-widest text-[#D4AF37] font-semibold">
                      ARCHITECTURAL HARDWARE
                    </p>
                    <p className="text-xs sm:text-sm font-bold text-white tracking-wide">
                      {heroAsset.title}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-950/70 border border-emerald-500/40 px-2.5 py-1 rounded-full backdrop-blur-sm shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>LED Active</span>
                  </div>
                </div>
              </div>

              {/* Pedestal Base Shadow */}
              <div className="w-3/4 h-5 bg-black/80 blur-xl mx-auto rounded-full mt-2 pointer-events-none" />
            </div>

            {/* Quick Architectural Asset Switcher Pill */}
            <div className="mt-3.5 inline-flex items-center bg-[#0D1832] p-1 rounded-full border border-[#D4AF37]/30 shadow-md">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedAsset('dual');
                }}
                className={`px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                  selectedAsset === 'dual'
                    ? 'bg-[#D4AF37] text-[#0A1428] font-bold shadow-xs'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Dual Gang · Dark Marble
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedAsset('single');
                }}
                className={`px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                  selectedAsset === 'single'
                    ? 'bg-[#D4AF37] text-[#0A1428] font-bold shadow-xs'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Single Gang · Warm Cream
              </button>
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
