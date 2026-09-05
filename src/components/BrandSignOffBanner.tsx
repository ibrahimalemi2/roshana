import React from 'react';
import { Zap, ShieldCheck, Clock } from 'lucide-react';
import { RoshnaEmblem } from './RoshnaEmblem';
import { useLanguage } from '../context/LanguageContext';

export const BrandSignOffBanner: React.FC = () => {
  const { isRtl } = useLanguage();

  return (
    <section className="bg-white dark:bg-[#0E1838] border-t border-b border-[#E2E8F0] dark:border-[#1E293B] py-8 sm:py-10 transition-colors duration-300 select-none">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Official Brand Emblem & Logo */}
          <div className="lg:col-span-3 flex items-center gap-3.5 justify-center lg:justify-start">
            <RoshnaEmblem className="w-12 h-12 shrink-0" />
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-sans font-bold text-lg text-[#0A1428] dark:text-white leading-none">
                  روشنا ولت
                </span>
              </div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#D4AF37] mt-0.5">
                ROSHNA VOLT
              </div>
              <div className="text-[9px] text-slate-500 dark:text-slate-400 font-sans tracking-wide">
                — Switch To Quality —
              </div>
            </div>
          </div>

          {/* Center: 3 Quality Seals with Vertical Dividers */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-2 text-center divide-y sm:divide-y-0 sm:divide-x divide-slate-200 dark:divide-slate-800 rtl:sm:divide-x-reverse">
            
            {/* 1. Optimal Performance */}
            <div className="px-3 py-2 flex flex-col items-center">
              <div className="w-9 h-9 rounded-full border border-blue-500/40 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-1.5">
                <Zap className="w-4 h-4" />
              </div>
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#0A1428] dark:text-white">
                {isRtl ? 'عملکرد بهینه' : 'OPTIMAL PERFORMANCE'}
              </h4>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 font-light mt-0.5">
                {isRtl ? 'مهندسی برای بازدهی کامل' : 'Engineered for perfect performance'}
              </p>
            </div>

            {/* 2. Reliable Connection */}
            <div className="px-3 py-2 flex flex-col items-center">
              <div className="w-9 h-9 rounded-full border border-blue-500/40 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-1.5">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#0A1428] dark:text-white">
                {isRtl ? 'اتصال مطمئن' : 'RELIABLE CONNECTION'}
              </h4>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 font-light mt-0.5">
                {isRtl ? 'اتصال برقی پایدار و ایمن' : 'Stable & secure electrical connection'}
              </p>
            </div>

            {/* 3. Long Lifespan */}
            <div className="px-3 py-2 flex flex-col items-center">
              <div className="w-9 h-9 rounded-full border border-blue-500/40 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-1.5">
                <Clock className="w-4 h-4" />
              </div>
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#0A1428] dark:text-white">
                {isRtl ? 'طول عمر بالا' : 'LONG LIFESPAN'}
              </h4>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 font-light mt-0.5">
                {isRtl ? 'ساخته شده برای سال‌ها کارکرد' : 'Built to last, reliable for years'}
              </p>
            </div>

          </div>

          {/* Right: Signature Brand Slogan */}
          <div className="lg:col-span-3 text-center lg:text-right rtl:lg:text-left border-t lg:border-t-0 pt-4 lg:pt-0">
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
