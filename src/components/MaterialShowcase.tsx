import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { MATERIALS_DATA } from '../data/furnitureData';

export const MaterialShowcase: React.FC = () => {
  const { t, isRtl } = useLanguage();
  const [activeMaterialId, setActiveMaterialId] = useState<string>('mat-1');

  const activeMaterial =
    t.materials.items.find((m) => m.id === activeMaterialId) || t.materials.items[0];

  const getMaterialImage = (id: string) => {
    return MATERIALS_DATA.find((m) => m.id === id)?.image || '';
  };

  return (
    <section id="materials" className="py-6 sm:py-8 lg:py-10 bg-[#F8FAFC] dark:bg-[#0A1128] border-b border-[#E2E8F0] dark:border-[#1E293B] relative overflow-hidden transition-colors duration-300 select-none">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 gap-4 sm:gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white dark:bg-[#0E1838] border border-[#D4AF37]/40 text-[#D4AF37] text-[11px] uppercase tracking-[0.2em] font-semibold mb-2.5 shadow-xs">
              <Sparkles className="w-3 h-3 text-[#D4AF37]" />
              <span>{t.materials.badge}</span>
            </div>
            <h2 className="font-serif-heading text-2xl sm:text-4xl md:text-5xl font-normal text-[#0A1128] dark:text-white tracking-tight">
              {t.materials.titlePart1} <br />
              <span className="italic font-serif-heading text-[#D4AF37]">{t.materials.titlePart2}</span>
            </h2>
          </div>
          <p className="font-sans-body text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md font-light leading-relaxed">
            {t.materials.subtitle}
          </p>
        </div>

        {/* 4 Materials Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {t.materials.items.map((mat) => {
            const isSelected = activeMaterial.id === mat.id;
            const imgUrl = getMaterialImage(mat.id);

            return (
              <div
                key={mat.id}
                onClick={() => setActiveMaterialId(mat.id)}
                className={`cursor-pointer group rounded-[22px] overflow-hidden transition-all duration-300 border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white dark:bg-[#0E1838] border-[#D4AF37] ring-2 ring-[#D4AF37] ring-offset-2 ring-offset-[#F8FAFC] dark:ring-offset-[#0A1128] shadow-xl'
                    : 'bg-white dark:bg-[#0E1838] border-[#E2E8F0] dark:border-[#1E293B] hover:border-[#D4AF37] dark:hover:border-[#D4AF37] shadow-xs'
                }`}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F8FAFC] dark:bg-[#050814] border-b border-[#E2E8F0]/60 dark:border-[#1E293B]">
                  <img
                    src={imgUrl}
                    alt={mat.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2.5 left-2.5 rtl:left-auto rtl:right-2.5">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#0A1128]/90 backdrop-blur-xs text-[#D4AF37] text-[10px] uppercase tracking-wider font-bold border border-[#D4AF37]/35">
                      {mat.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-2.5">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-[#D4AF37] font-bold">
                      {mat.origin}
                    </p>
                    <h3 className="font-serif-heading text-lg sm:text-xl font-medium text-[#0A1128] dark:text-white mt-1">
                      {mat.name}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 font-sans-body mt-1.5 line-clamp-2 leading-relaxed">
                      {mat.description}
                    </p>
                  </div>

                  <div className="pt-2.5 border-t border-[#E2E8F0] dark:border-[#1E293B] flex items-center justify-between text-xs text-[#D4AF37] font-semibold">
                    <span>{t.materials.inspectTexture}</span>
                    <ArrowRight className={`w-3.5 h-3.5 transform transition-transform ${isRtl ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Deep Dive Material Spotlight */}
        <div className="mt-6 sm:mt-7 bg-white dark:bg-[#0E1838] rounded-[22px] p-5 sm:p-7 border border-[#E2E8F0] dark:border-[#1E293B] shadow-md flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 transition-colors">
          <div className="space-y-1.5 max-w-2xl">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
              <span>{t.materials.selectedStudy}</span>
              <span>·</span>
              <span>{activeMaterial.name}</span>
            </div>
            <h3 className="font-serif-heading text-xl sm:text-2xl text-[#0A1128] dark:text-white">
              {activeMaterial.name}
            </h3>
            <p className="text-xs sm:text-sm font-sans-body text-slate-600 dark:text-slate-300 leading-relaxed">
              {activeMaterial.description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2.5 w-full lg:w-auto shrink-0">
            {activeMaterial.characteristics.map((char, i) => (
              <div key={i} className="px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] dark:bg-[#0A1128] border border-[#E2E8F0] dark:border-[#1E293B] flex items-center gap-2 text-xs text-[#0A1128] dark:text-white font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>{char}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
