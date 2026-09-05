import React from 'react';
import { Shield, Sparkles, Sliders, ShieldCheck, CheckCircle2, Compass } from 'lucide-react';
import { QUADRANT_ITEMS } from '../data/furnitureData';
import { QuadrantItem } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface InteractiveVisualBreakProps {
  onSelectQuadrant?: (item: QuadrantItem) => void;
}

export const InteractiveVisualBreak: React.FC<InteractiveVisualBreakProps> = () => {
  const { t } = useLanguage();

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
    <section
      id="craft"
      className="py-10 sm:py-14 lg:py-16 bg-[#F8FAFC] dark:bg-[#0A1128] relative overflow-hidden border-b border-[#E2E8F0] dark:border-[#1E293B] transition-colors duration-300 select-none"
    >
      {/* Background Decorative Ambient Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-[#0E1838] border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-semibold tracking-wider mb-3 shadow-xs">
            <Compass className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="uppercase tracking-[0.2em] text-[11px]">{t.anatomy.badge}</span>
          </div>

          <h2 className="font-serif-heading text-2xl sm:text-4xl md:text-5xl text-[#0A1128] dark:text-white font-normal tracking-tight">
            {t.anatomy.titlePart1}{' '}
            <span className="italic font-serif-heading text-[#D4AF37]">{t.anatomy.titlePart2}</span>
          </h2>

          <p className="mt-3.5 font-sans-body text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
            {t.anatomy.subtitle}
          </p>
        </div>

        {/* Modern 4-Column Feature Grid (2x2 on Mobile/Tablet) */}
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
                  <h3 className="font-serif-heading text-lg sm:text-xl font-medium text-[#0A1128] dark:text-white group-hover:text-[#D4AF37] transition-colors mb-2 leading-snug">
                    {title}
                  </h3>

                  <p className="font-sans-body text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-light leading-relaxed">
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
  );
};
