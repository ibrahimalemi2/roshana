import React from 'react';
import { Zap, ShieldCheck, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const BrandSignOffBanner: React.FC = () => {
  const { isRtl } = useLanguage();

  return (
    <section className="bg-white dark:bg-[#0A1428] border-t border-b border-[#E2E8F0] dark:border-[#1E293B] py-8 sm:py-10 transition-colors duration-300 select-none">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-8">
          
          {/* 1. Left: Official Brand Logo */}
          <div className="shrink-0 flex items-center justify-center">
            <img
              src="/images/WhatsApp Image 2026-09-02 at 9.23.41 AM.jpeg"
              alt="Roshna Volt — Switch To Quality"
              className="h-16 sm:h-20 w-auto object-contain select-none mix-blend-multiply dark:mix-blend-normal dark:bg-white dark:p-1.5 dark:rounded-xl"
              loading="eager"
            />
          </div>

          {/* Vertical Divider: Logo to Pillars */}
          <div className="hidden lg:block h-14 w-px bg-slate-200 dark:bg-slate-800 shrink-0" />

          {/* 2. Center: 3 Quality Seals with Balanced Symmetrical Spacing */}
          <div className="flex-1 max-w-2xl grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-2 text-center divide-y sm:divide-y-0 sm:divide-x divide-slate-200 dark:divide-slate-800 rtl:sm:divide-x-reverse">
            
            {/* 1. Optimal Performance */}
            <div className="px-4 py-1 flex flex-col items-center">
              <div className="w-10 h-10 rounded-full border border-blue-500/30 bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-2 shadow-xs">
                <Zap className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#0A1428] dark:text-white">
                {isRtl ? 'عملکرد بهینه' : 'OPTIMAL PERFORMANCE'}
              </h4>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-normal mt-0.5 max-w-[170px] leading-tight">
                {isRtl ? 'مهندسی برای بازدهی کامل' : 'Engineered for perfect performance'}
              </p>
            </div>

            {/* 2. Reliable Connection */}
            <div className="px-4 py-1 flex flex-col items-center">
              <div className="w-10 h-10 rounded-full border border-blue-500/30 bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-2 shadow-xs">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#0A1428] dark:text-white">
                {isRtl ? 'اتصال مطمئن' : 'RELIABLE CONNECTION'}
              </h4>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-normal mt-0.5 max-w-[170px] leading-tight">
                {isRtl ? 'اتصال برقی پایدار و ایمن' : 'Stable & secure electrical connection'}
              </p>
            </div>

            {/* 3. Long Lifespan */}
            <div className="px-4 py-1 flex flex-col items-center">
              <div className="w-10 h-10 rounded-full border border-blue-500/30 bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-2 shadow-xs">
                <Clock className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#0A1428] dark:text-white">
                {isRtl ? 'طول عمر بالا' : 'LONG LIFESPAN'}
              </h4>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-normal mt-0.5 max-w-[170px] leading-tight">
                {isRtl ? 'ساخته شده برای سال‌ها کارکرد' : 'Built to last, reliable for years'}
              </p>
            </div>

          </div>

          {/* Vertical Divider: Pillars to Slogan */}
          <div className="hidden lg:block h-14 w-px bg-slate-200 dark:bg-slate-800 shrink-0" />

          {/* 3. Right: Signature Brand Slogan */}
          <div className="shrink-0 text-center lg:text-left rtl:lg:text-right border-t lg:border-t-0 pt-4 lg:pt-0">
            <h3 className="text-sm sm:text-base font-black uppercase text-[#0A1428] dark:text-white tracking-tight leading-snug">
              <span>{isRtl ? 'به سوی کیفیت بروید،' : 'SWITCH TO QUALITY,'}</span><br />
              <span className="text-[#0A1428] dark:text-[#D4AF37]">{isRtl ? 'به روشنا ولت بپیوندید.' : 'SWITCH TO ROSHNA VOLT.'}</span>
            </h3>
          </div>

        </div>
      </div>
    </section>
  );
};
