import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { IMAGES } from '../data/imageAssets';

export const ApplicationSpaces: React.FC = () => {
  const { isRtl } = useLanguage();

  const spaces = [
    {
      id: 'space-home',
      title: isRtl ? 'منزل مسکونی' : 'HOME',
      subtitle: isRtl ? 'پذیرایی و اتاق‌های خواب' : 'Living & Bedrooms',
      image: IMAGES.WALL_PLATE_LIVING_PERSPECTIVE
    },
    {
      id: 'space-office',
      title: isRtl ? 'دفاتر کاری' : 'OFFICE',
      subtitle: isRtl ? 'اتاق جلسات و شرکت‌ها' : 'Corporate Workspaces',
      image: IMAGES.TRIO_COUNTER_SHOWCASE
    },
    {
      id: 'space-hotel',
      title: isRtl ? 'هتل‌ها' : 'HOTEL',
      subtitle: isRtl ? 'اتاق‌های لوکس و لابی' : 'Luxury Hospitality',
      image: IMAGES.WALL_PLATE_AMBIENT_CORNER
    },
    {
      id: 'space-commercial',
      title: isRtl ? 'مراکز تجاری' : 'COMMERCIAL',
      subtitle: isRtl ? 'فروشگاه‌ها و سالن‌ها' : 'Retail & Showrooms',
      image: IMAGES.WALL_PLATE_ARCHITECTURAL_ISO
    }
  ];

  return (
    <section 
      id="gallery" 
      className="py-12 sm:py-16 bg-white dark:bg-[#0A1428] border-b border-[#E2E8F0] dark:border-[#1E293B] transition-colors duration-300 select-none"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header: Matching Reference Flyer */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4 sm:gap-6">
          <div>
            <div className="flex items-center gap-2 text-[#D4AF37] text-xs uppercase tracking-[0.2em] font-bold mb-2">
              <span>{isRtl ? 'مناسب برای هر فضا' : 'PERFECT FOR EVERY SPACE'}</span>
              <span className="w-8 h-[2px] bg-[#D4AF37]" />
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase text-[#0A1428] dark:text-white tracking-tight">
              {isRtl ? 'طراحی شده برای زندگی مدرن' : 'MADE FOR MODERN LIVING'}
            </h2>
            <p className="font-sans text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-normal mt-1.5 max-w-xl">
              {isRtl 
                ? 'از خانه‌ها تا دفاتر کاری و فضاهای تجاری، روشنا ولت زیبایی، ایمنی و کارایی را در همه جا به ارمغان می‌آورد.'
                : 'From homes to offices and commercial spaces, Roshna Volt brings elegance, safety and performance everywhere.'}
            </p>
          </div>

          <div>
            <button
              onClick={() => {
                const el = document.getElementById('collection');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-5 py-2.5 rounded-lg bg-[#0A1428] text-white hover:bg-[#14224D] text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all shadow-sm cursor-pointer"
            >
              <span>{isRtl ? 'مشاهده گالری' : 'VIEW GALLERY'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 4 Photo Cards Grid with Deep Navy Bottom Caption Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {spaces.map((space) => (
            <div
              key={space.id}
              className="group rounded-2xl overflow-hidden border border-[#E2E8F0] dark:border-[#1E293B] shadow-sm hover:shadow-xl hover:border-[#D4AF37] transition-all duration-300 flex flex-col justify-between bg-white dark:bg-[#0E1838]"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
                <img
                  src={space.image}
                  alt={space.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
              </div>

              {/* Deep Navy Bottom Caption Bar Matching Reference Design */}
              <div className="bg-[#0A1428] py-3.5 px-4 text-center border-t border-[#D4AF37]/30 transition-colors group-hover:bg-[#14224D]">
                <h3 className="text-xs sm:text-sm font-black uppercase tracking-wider text-white">
                  {space.title}
                </h3>
                <p className="text-[10px] text-slate-300 font-light mt-0.5">
                  {space.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
