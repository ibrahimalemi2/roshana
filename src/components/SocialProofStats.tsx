import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TESTIMONIALS } from '../data/furnitureData';

export const SocialProofStats: React.FC = () => {
  const { t } = useLanguage();

  const getAvatar = (id: string) => {
    return TESTIMONIALS.find((item) => item.id === id)?.avatar || '';
  };

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
    <section id="reviews" className="py-6 sm:py-8 lg:py-10 bg-[#F7F5F0] dark:bg-[#0B132B] border-b border-[#E5E1D8] dark:border-[#1D2B52] relative overflow-hidden transition-colors duration-300 select-none">
      
      {/* Background ambient gold accents */}
      <div className="absolute -top-40 right-0 w-96 h-96 rounded-full bg-[#C5A059]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFFFFF] dark:bg-[#0F1B3D] border border-[#C5A059]/40 text-[#C5A059] text-[11px] uppercase tracking-[0.2em] font-semibold mb-2.5 shadow-xs">
            <Star className="w-3.5 h-3.5 fill-current text-[#C5A059]" />
            <span>{t.reviews.badge}</span>
          </div>

          <h2 className="font-serif-heading text-2xl sm:text-4xl md:text-5xl font-normal text-[#1F2421] dark:text-[#F7F5F0] tracking-tight">
            {t.reviews.titlePart1} <br />
            <span className="italic font-serif-heading text-[#C5A059]">{t.reviews.titlePart2}</span>
          </h2>

          <p className="mt-2.5 font-sans-body text-xs sm:text-sm md:text-base text-[#1F2421]/75 dark:text-[#F7F5F0]/75 font-light">
            {t.reviews.subtitle}
          </p>
        </div>

        {/* Testimonials 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-6 sm:mb-8">
          {t.reviews.testimonials.map((test) => (
            <div
              key={test.id}
              className="bg-[#FFFFFF] dark:bg-[#0F1B3D] rounded-[22px] p-5 sm:p-6 border border-[#E5E1D8] dark:border-[#1D2B52] shadow-xs hover:shadow-xl hover:border-[#C5A059] dark:hover:border-[#C5A059] transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div className="space-y-3">
                {/* Rating Stars & Quote Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 rtl:space-x-reverse text-[#C5A059]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current text-[#C5A059]" />
                    ))}
                  </div>
                  <Quote className="w-7 h-7 text-[#C5A059]/30 group-hover:text-[#C5A059] transition-colors" />
                </div>

                {/* Quote text */}
                <p className="font-serif-heading text-base sm:text-lg text-[#1F2421] dark:text-[#F7F5F0] font-normal leading-relaxed italic">
                  "{test.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 mt-4 border-t border-[#E5E1D8] dark:border-[#1D2B52] flex items-center gap-3">
                <img
                  src={getAvatar(test.id)}
                  alt={test.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-[#C5A059]/40 shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-xs font-semibold text-[#1F2421] dark:text-[#F7F5F0] truncate">
                      {test.name}
                    </h3>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                  </div>
                  <p className="text-[11px] text-[#C5A059] font-sans-body font-medium truncate">
                    {test.role}
                  </p>
                  <p className="text-[10px] text-neutral-400 font-sans-body mt-0.5 truncate">
                    {test.location} · {test.purchasedProduct}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 4-Column Metrics Counter Grid (Deep Navy #0B132B with Warm Metallic Gold #C5A059) */}
        <div className="bg-[#0B132B] text-[#F7F5F0] rounded-[24px] p-6 sm:p-8 border border-[#C5A059]/30 shadow-2xl relative overflow-hidden">
          {/* Subtle metallic gold top border line */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#9E7B36]" />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 divide-y lg:divide-y-0 lg:divide-x rtl:lg:divide-x-reverse divide-[#C5A059]/20">
            {metricItems.map((metric, idx) => (
              <div
                key={idx}
                className={`flex flex-col justify-center text-center px-4 ${
                  idx > 0 ? 'pt-6 lg:pt-0' : ''
                }`}
              >
                {/* Metric Value in Warm Metallic Gold */}
                <span className="font-serif-heading text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white mb-2">
                  <span className="text-[#C5A059]">{metric.value}</span>
                </span>

                {/* Metric Label */}
                <h4 className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-neutral-200 mb-1">
                  {metric.label}
                </h4>

                {/* Metric Sub-detail */}
                <p className="text-[11px] text-neutral-400 font-light font-sans-body">
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
