import React, { useState } from 'react';
import { Gem, Leaf, Sparkles, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const ValueProposition: React.FC = () => {
  const { t, isRtl } = useLanguage();
  const [activePillarId, setActivePillarId] = useState<string>('pillar-1');

  const activePillar =
    t.principles.pillars.find((p) => p.id === activePillarId) || t.principles.pillars[0];

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Gem':
        return <Gem className="w-6 h-6" strokeWidth={1.5} />;
      case 'Leaf':
        return <Leaf className="w-6 h-6" strokeWidth={1.5} />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6" strokeWidth={1.5} />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6" strokeWidth={1.5} />;
      default:
        return <Sparkles className="w-6 h-6" strokeWidth={1.5} />;
    }
  };

  return (
    <section id="craft" className="py-6 sm:py-8 lg:py-10 bg-[#F8FAFC] dark:bg-[#0A1128] border-b border-[#E2E8F0] dark:border-[#1E293B] relative transition-colors duration-300 select-none">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white dark:bg-[#0E1838] border border-[#D4AF37]/40 text-[#D4AF37] text-[11px] uppercase tracking-[0.2em] font-semibold mb-2.5 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>{t.principles.badge}</span>
          </div>
          <h2 className="font-serif-heading text-2xl sm:text-4xl md:text-5xl font-normal text-[#0A1128] dark:text-white tracking-tight">
            {t.principles.titlePart1} <br />
            <span className="italic font-serif-heading text-[#D4AF37]">{t.principles.titlePart2}</span>
          </h2>
          <p className="mt-2.5 font-sans-body text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-300 font-light leading-relaxed">
            {t.principles.subtitle}
          </p>
        </div>

        {/* Value Proposition Split-Block Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {t.principles.pillars.map((pillar) => {
            const isSelected = activePillar.id === pillar.id;

            return (
              <div
                key={pillar.id}
                onClick={() => setActivePillarId(pillar.id)}
                className={`group cursor-pointer rounded-[22px] p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between border relative overflow-hidden ${
                  isSelected
                    ? 'bg-[#0A1128] text-white border-[#D4AF37] shadow-xl shadow-[#0A1128]/25'
                    : 'bg-white dark:bg-[#0E1838] text-[#0A1128] dark:text-white border-[#E2E8F0] dark:border-[#1E293B] hover:border-[#D4AF37] dark:hover:border-[#D4AF37] shadow-xs'
                }`}
              >
                {/* Top Number & Vector Icon */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span
                      className={`font-serif-heading text-2xl font-light tracking-tight ${
                        isSelected ? 'text-[#D4AF37]' : 'text-[#D4AF37]'
                      }`}
                    >
                      {pillar.number}
                    </span>

                    <div
                      className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-colors ${
                        isSelected
                          ? 'bg-[#050814] text-[#D4AF37] border border-[#D4AF37]/40'
                          : 'bg-[#F8FAFC] dark:bg-[#0A1128] text-[#0A1128] dark:text-white group-hover:text-[#D4AF37]'
                      }`}
                    >
                      {renderIcon(pillar.iconName)}
                    </div>
                  </div>

                  {/* Title & Short Desc */}
                  <h3 className="font-serif-heading text-lg sm:text-xl font-medium mb-2 leading-snug">
                    {pillar.title}
                  </h3>

                  <p
                    className={`font-sans-body text-xs sm:text-sm leading-relaxed mb-4 font-light ${
                      isSelected ? 'text-slate-300' : 'text-slate-600 dark:text-slate-300'
                    }`}
                  >
                    {pillar.shortDesc}
                  </p>
                </div>

                {/* Bottom Highlight Seal */}
                <div
                  className={`pt-3 border-t text-[11px] font-sans-body flex items-center justify-between ${
                    isSelected
                      ? 'border-[#D4AF37]/30 text-[#D4AF37]'
                      : 'border-[#E2E8F0] dark:border-[#1E293B] text-[#D4AF37]'
                  }`}
                >
                  <span className="font-semibold">{pillar.highlight}</span>
                  <ArrowRight
                    className={`w-3.5 h-3.5 transform transition-transform ${
                      isRtl ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Deep Dive Spotlight for the active pillar */}
        <div className="mt-6 sm:mt-7 bg-white dark:bg-[#0E1838] rounded-[22px] p-5 sm:p-7 border border-[#E2E8F0] dark:border-[#1E293B] shadow-md flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 transition-colors">
          <div className="space-y-1.5 max-w-2xl">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
              <span>{t.principles.detailedCommitment}</span>
              <span>·</span>
              <span>{t.principles.pillarLabel} {activePillar.number}</span>
            </div>
            <h3 className="font-serif-heading text-xl sm:text-2xl text-[#0A1128] dark:text-white">
              {activePillar.title}
            </h3>
            <p className="text-xs sm:text-sm font-sans-body text-slate-600 dark:text-slate-300 leading-relaxed">
              {activePillar.fullDesc}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2.5 w-full lg:w-auto shrink-0">
            <div className="px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] dark:bg-[#0A1128] border border-[#E2E8F0] dark:border-[#1E293B] flex items-center gap-2 text-xs text-[#0A1128] dark:text-white font-semibold">
              <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <span>{t.principles.labCertified}</span>
            </div>
            <div className="px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] dark:bg-[#0A1128] border border-[#E2E8F0] dark:border-[#1E293B] flex items-center gap-2 text-xs text-[#0A1128] dark:text-white font-semibold">
              <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <span>{t.principles.directProvenance}</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
