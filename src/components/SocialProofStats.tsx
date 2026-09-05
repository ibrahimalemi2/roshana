import React from 'react';
import { Star, Quote, CheckCircle2, User } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const SocialProofStats: React.FC = () => {
  const { t } = useLanguage();

  const metricItems = [
    {
      value: t.reviews.metrics.projectsTitle,
      label: t.reviews.metrics.projectsLabel,
      detail: t.reviews.metrics.projectsDetail
    },
    {
      value: t.reviews.metrics.warrantyTitle,
      label: t.reviews.metrics.warrantyLabel,
      detail: t.reviews.metrics.warrantyDetail
    },
    {
      value: t.reviews.metrics.ratingTitle,
      label: t.reviews.metrics.ratingLabel,
      detail: t.reviews.metrics.ratingDetail
    },
    {
      value: t.reviews.metrics.craftTitle,
      label: t.reviews.metrics.craftLabel,
      detail: t.reviews.metrics.craftDetail
    }
  ];

  return (
    <section id="reviews" className="py-6 sm:py-8 lg:py-10 bg-[#F8FAFC] dark:bg-[#0A1128] border-b border-[#E2E8F0] dark:border-[#1E293B] relative overflow-hidden transition-colors duration-300 select-none">
      
      {/* Background ambient gold accents */}
      <div className="absolute -top-40 right-0 w-96 h-96 rounded-full bg-[#D4AF37]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-bold block mb-2">
            {t.reviews.badge}
          </span>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase text-[#0A1428] dark:text-white tracking-tight">
            <span>{t.reviews.titlePart1} </span>
            <span className="text-[#D4AF37]">{t.reviews.titlePart2}</span>
          </h2>

          <p className="mt-2.5 font-sans text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-300 font-normal">
            {t.reviews.subtitle}
          </p>
        </div>

        {/* Testimonials 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-6 sm:mb-8">
          {t.reviews.testimonials.map((test) => (
            <div
              key={test.id}
              className="bg-white dark:bg-[#0E1838] rounded-[22px] p-5 sm:p-6 border border-[#E2E8F0] dark:border-[#1E293B] shadow-xs hover:shadow-xl hover:border-[#D4AF37] dark:hover:border-[#D4AF37] transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div className="space-y-3">
                {/* Rating Stars & Quote Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 rtl:space-x-reverse text-[#D4AF37]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current text-[#D4AF37]" />
                    ))}
                  </div>
                  <Quote className="w-7 h-7 text-[#D4AF37]/30 group-hover:text-[#D4AF37] transition-colors" />
                </div>

                {/* Quote text */}
                <p className="font-sans text-sm sm:text-base text-slate-700 dark:text-slate-200 font-normal leading-relaxed">
                  "{test.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 mt-4 border-t border-[#E2E8F0] dark:border-[#1E293B] flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4AF37]/15 to-[#D4AF37]/5 dark:from-[#D4AF37]/20 dark:to-[#D4AF37]/5 border-2 border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] shrink-0 group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37]/20 transition-all duration-300 shadow-xs">
                  <User className="w-5 h-5 text-[#D4AF37]" strokeWidth={1.8} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-xs font-bold text-[#0A1128] dark:text-white truncate">
                      {test.name}
                    </h3>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                  </div>
                  <p className="text-[11px] text-[#D4AF37] font-sans font-semibold truncate">
                    {test.role}
                  </p>
                  <p className="text-[10px] text-slate-400 font-sans mt-0.5 truncate">
                    {test.location} · {test.purchasedProduct}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 4-Column Metrics Counter Grid (Deep Navy #0A1128 with Warm Metallic Gold #D4AF37) */}
        <div className="bg-[#0A1128] text-white rounded-[24px] p-6 sm:p-8 border border-[#D4AF37]/30 shadow-2xl relative overflow-hidden">
          {/* Subtle metallic gold top border line */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#D4AF37] via-[#E5A93C] to-[#B8860B]" />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 divide-y lg:divide-y-0 lg:divide-x rtl:lg:divide-x-reverse divide-[#D4AF37]/20">
            {metricItems.map((metric, idx) => (
              <div
                key={idx}
                className={`flex flex-col justify-center text-center px-4 ${
                  idx > 0 ? 'pt-6 lg:pt-0' : ''
                }`}
              >
                {/* Metric Value in Warm Metallic Gold */}
                <span className="font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#D4AF37] mb-2 font-sans">
                  {metric.value}
                </span>

                {/* Metric Label */}
                <h4 className="text-xs sm:text-sm font-bold tracking-wider uppercase text-neutral-200 mb-1">
                  {metric.label}
                </h4>

                {/* Metric Sub-detail */}
                <p className="text-[11px] text-slate-400 font-normal font-sans">
                  {metric.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
