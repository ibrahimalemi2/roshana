import React from 'react';
import { Shield, Sparkles, Sliders, ShieldCheck, CheckCircle2, Compass, Thermometer, Gem } from 'lucide-react';
import { QUADRANT_ITEMS } from '../data/furnitureData';
import { QuadrantItem } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface InteractiveVisualBreakProps {
  onSelectQuadrant?: (item: QuadrantItem) => void;
}

export const InteractiveVisualBreak: React.FC<InteractiveVisualBreakProps> = () => {
  const { t, isRtl } = useLanguage();

  const getPillarIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Shield className="w-3.5 h-3.5 text-[#D4AF37]" />;
      case 1:
        return <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />;
      case 2:
        return <Sliders className="w-3.5 h-3.5 text-[#D4AF37]" />;
      case 3:
      default:
        return <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />;
    }
  };

  return (
    <>
      {/* 1. ADVANCED TECHNOLOGY ROW: Exact match to Reference Flyer (#EBF3FA Ice Blue Background) */}
      <section className="py-12 sm:py-16 bg-[#EBF3FA] dark:bg-[#0E1838] border-b border-[#D8E6F3] dark:border-[#1E293B] transition-colors duration-300 select-none">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Text Block */}
            <div className="lg:col-span-4">
              <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-bold block mb-2">
                {isRtl ? 'فناوری پیشرفته' : 'ADVANCED TECHNOLOGY'}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-[#0A1428] dark:text-white leading-tight">
                {isRtl ? 'کیفیت در تمام جزئیات' : 'QUALITY IN EVERY DETAIL'}
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                {isRtl 
                  ? 'محصولات روشنا ولت با استفاده از مواد پلی‌کربنات مرغوب با مقاومت بالا در برابر حرارت و آتش‌سوزی تولید شده و از شیوع باکتری‌ها جلوگیری می‌کنند.'
                  : 'Roshna Volt products are manufactured using high quality polycarbonate materials that are heat resistant, flame retardant and prevent the spread of bacteria.'}
              </p>
            </div>

            {/* Right 4 Circular Feature Icons (Directly on #EBF3FA with thin dividers, NO white boxes) */}
            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-2 text-center divide-y sm:divide-y-0 sm:divide-x divide-blue-200/80 dark:divide-slate-800 rtl:sm:divide-x-reverse">
              
              {/* 1. SAFE MATERIAL */}
              <div className="px-3 py-2 flex flex-col items-center">
                <div className="w-14 h-14 rounded-full border-2 border-blue-600 dark:border-blue-400 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-3 shadow-xs">
                  <ShieldCheck className="w-6 h-6 stroke-[1.8]" />
                </div>
                <h4 className="text-xs font-black uppercase tracking-wider text-[#0A1428] dark:text-white">
                  {isRtl ? 'مواد کاملاً ایمن' : 'SAFE MATERIAL'}
                </h4>
                <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-1 max-w-[140px] leading-tight font-normal">
                  {isRtl ? 'غیر سمی و ایمن برای تمام سنین' : 'Non-toxic & safe for all ages'}
                </p>
              </div>

              {/* 2. ANTI BACTERIAL */}
              <div className="px-3 py-2 flex flex-col items-center">
                <div className="w-14 h-14 rounded-full border-2 border-blue-600 dark:border-blue-400 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-3 shadow-xs">
                  <Sparkles className="w-6 h-6 stroke-[1.8]" />
                </div>
                <h4 className="text-xs font-black uppercase tracking-wider text-[#0A1428] dark:text-white">
                  {isRtl ? 'آنتی باکتریال' : 'ANTI BACTERIAL'}
                </h4>
                <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-1 max-w-[140px] leading-tight font-normal">
                  {isRtl ? 'سطح بهداشتی با تمیزکاری آسان' : 'Hygienic surface & easy to clean'}
                </p>
              </div>

              {/* 3. HEAT RESISTANT */}
              <div className="px-3 py-2 flex flex-col items-center">
                <div className="w-14 h-14 rounded-full border-2 border-blue-600 dark:border-blue-400 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-3 shadow-xs">
                  <Thermometer className="w-6 h-6 stroke-[1.8]" />
                </div>
                <h4 className="text-xs font-black uppercase tracking-wider text-[#0A1428] dark:text-white">
                  {isRtl ? 'مقاوم به حرارت' : 'HEAT RESISTANT'}
                </h4>
                <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-1 max-w-[140px] leading-tight font-normal">
                  {isRtl ? 'تحمل دمای بسیار بالا' : 'Withstands high temperature'}
                </p>
              </div>

              {/* 4. PREMIUM FINISH */}
              <div className="px-3 py-2 flex flex-col items-center">
                <div className="w-14 h-14 rounded-full border-2 border-blue-600 dark:border-blue-400 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-3 shadow-xs">
                  <Gem className="w-6 h-6 stroke-[1.8]" />
                </div>
                <h4 className="text-xs font-black uppercase tracking-wider text-[#0A1428] dark:text-white">
                  {isRtl ? 'پوشش لوکس' : 'PREMIUM FINISH'}
                </h4>
                <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-1 max-w-[140px] leading-tight font-normal">
                  {isRtl ? 'طراحی شیک برای فضاهای مدرن' : 'Elegant design perfect for modern spaces'}
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 2. CORE DESIGN ELEMENTS: Clean White / Slate Background */}
      <section
        id="craft"
        className="py-12 sm:py-16 bg-[#F8FAFC] dark:bg-[#0A1428] relative overflow-hidden border-b border-[#E2E8F0] dark:border-[#1E293B] transition-colors duration-300 select-none"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-bold block mb-2">
              {isRtl ? 'ستون‌های مهندسی' : 'CORE DESIGN ELEMENTS'}
            </span>
            <h3 className="text-2xl sm:text-4xl font-black uppercase text-[#0A1428] dark:text-white tracking-tight">
              {isRtl ? 'طراحی متعادل و مهندسی ایمن' : 'BALANCED FORM & SAFE ENGINEERING'}
            </h3>
            <p className="mt-2.5 font-sans text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-normal max-w-xl mx-auto leading-relaxed">
              {t.anatomy.subtitle}
            </p>
          </div>

        <div className="grid grid-cols-1 min-[520px]:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {QUADRANT_ITEMS.map((item, index) => {
            const localized = t.anatomy.quadrants?.find((q) => q.id === item.id);
            const title = localized?.title || item.title;
            const description = localized?.description || item.description;
            const tag = localized?.tag || item.tag;
            const material = localized?.material || item.material;

            return (
              <div
                key={item.id}
                className="group relative flex flex-col justify-between bg-white dark:bg-[#0E1838] rounded-2xl sm:rounded-[22px] p-5 sm:p-6 border border-[#E2E8F0] dark:border-[#1E293B] hover:border-[#D4AF37] dark:hover:border-[#D4AF37] transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-[#0A1128]/5 dark:hover:shadow-black/30 hover:-translate-y-1 overflow-hidden"
              >
                {/* Ambient Gold Glow On Hover */}
                <div className="absolute -top-16 -right-16 w-32 h-32 bg-[#D4AF37]/10 rounded-full blur-2xl group-hover:bg-[#D4AF37]/20 transition-all duration-500 pointer-events-none" />

                <div>
                  {/* Card Visual Media Window */}
                  <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden mb-4 sm:mb-5 bg-[#F8FAFC] dark:bg-[#050814] border border-[#E2E8F0]/70 dark:border-[#1E293B]/70">
                    <img
                      src={item.image}
                      alt={title}
                      className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-75 group-hover:opacity-45 transition-opacity duration-300" />

                    {/* Pillar Tag Overlay */}
                    <div className="absolute top-2.5 left-2.5 rtl:left-auto rtl:right-2.5 z-10">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-sans-body font-bold tracking-wider uppercase bg-[#0A1128]/90 backdrop-blur-md text-[#D4AF37] border border-[#D4AF37]/40 shadow-xs">
                        {getPillarIcon(index)}
                        <span>{tag}</span>
                      </span>
                    </div>

                    {/* Index Number Watermark */}
                    <div className="absolute bottom-2.5 right-2.5 rtl:right-auto rtl:left-2.5 z-10">
                      <span className="font-mono text-[11px] font-semibold text-white/90 bg-black/50 px-2 py-0.5 rounded backdrop-blur-xs">
                        0{index + 1}
                      </span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-base sm:text-lg font-bold text-[#0A1128] dark:text-white group-hover:text-[#D4AF37] transition-colors mb-2 leading-snug uppercase tracking-wide">
                    {title}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
                    {description}
                  </p>
                </div>

                {/* Card Footer: Technical Spec / Material */}
                <div className="mt-5 pt-3.5 border-t border-[#E2E8F0]/70 dark:border-[#1E293B]/70 flex items-center justify-between text-[11px] font-sans-body">
                  <span className="font-semibold tracking-wide uppercase text-[10px] text-[#D4AF37] truncate max-w-[70%]">
                    {material}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400 shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>{t.anatomy.ratingText}</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Assurance Banner */}
        <div className="mt-8 sm:mt-10 max-w-2xl mx-auto flex items-center justify-center gap-2.5 text-xs text-[#0A1128]/80 dark:text-slate-200 bg-white dark:bg-[#0E1838] py-3 px-5 rounded-full border border-[#E2E8F0] dark:border-[#1E293B] shadow-xs text-center">
          <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0" />
          <span className="leading-snug text-xs sm:text-sm font-sans-body font-light">
            {t.anatomy.guaranteeText}
          </span>
        </div>
      </div>
    </section>
    </>
  );
};
