import React from 'react';
import { Star, Quote, CheckCircle2, Award, Sparkles, Building2, Globe2 } from 'lucide-react';
import { TESTIMONIALS, METRIC_STATS } from '../data/furnitureData';

export const SocialProofStats: React.FC = () => {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-[#F7F5F0] dark:bg-[#0B132B] border-b border-[#E5E1D8] dark:border-[#1D2B52] relative overflow-hidden transition-colors duration-300 select-none">
      
      {/* Background ambient gold accents */}
      <div className="absolute -top-40 right-0 w-96 h-96 rounded-full bg-[#C5A059]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFFFFF] dark:bg-[#0F1B3D] border border-[#C5A059]/40 text-[#C5A059] text-[11px] uppercase tracking-[0.2em] font-semibold mb-3 shadow-xs">
            <Star className="w-3.5 h-3.5 fill-current text-[#C5A059]" />
            <span>Collector & Architect Perspectives</span>
          </div>

          <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl font-normal text-[#1F2421] dark:text-[#F7F5F0] tracking-tight">
            Loved by Architects & <br />
            <span className="italic font-serif-heading text-[#C5A059]">Discerning Specifiers</span>
          </h2>

          <p className="mt-4 font-sans-body text-sm sm:text-base text-[#1F2421]/75 dark:text-[#F7F5F0]/75 font-light">
            Read authentic words from interior designers, master electricians, and private collectors who have transformed their spaces with Roshna Volt.
          </p>
        </div>

        {/* Testimonials 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {TESTIMONIALS.map((test) => (
            <div
              key={test.id}
              className="bg-[#FFFFFF] dark:bg-[#0F1B3D] rounded-[24px] p-8 border border-[#E5E1D8] dark:border-[#1D2B52] shadow-xs hover:shadow-xl hover:border-[#C5A059] dark:hover:border-[#C5A059] transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div className="space-y-4">
                {/* Rating Stars & Quote Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-[#C5A059]">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current text-[#C5A059]" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-[#C5A059]/30 group-hover:text-[#C5A059] transition-colors" />
                </div>

                {/* Quote text */}
                <p className="font-serif-heading text-lg sm:text-xl text-[#1F2421] dark:text-[#F7F5F0] font-normal leading-relaxed italic">
                  "{test.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-6 mt-6 border-t border-[#E5E1D8] dark:border-[#1D2B52] flex items-center gap-4">
                <img
                  src={test.avatar}
                  alt={test.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#C5A059]/40"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-xs font-semibold text-[#1F2421] dark:text-[#F7F5F0]">
                      {test.name}
                    </h3>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059]" />
                  </div>
                  <p className="text-[11px] text-[#C5A059] font-sans-body font-medium">
                    {test.role}
                  </p>
                  <p className="text-[10px] text-neutral-400 font-sans-body mt-0.5">
                    {test.location} · {test.purchasedProduct}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 4-Column Metrics Counter Grid (Deep Navy #0B132B with Warm Metallic Gold #C5A059) */}
        <div className="bg-[#0B132B] text-[#F7F5F0] rounded-[28px] p-8 sm:p-12 border border-[#C5A059]/30 shadow-2xl relative overflow-hidden">
          {/* Subtle metallic gold top border line */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#9E7B36]" />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 divide-y lg:divide-y-0 lg:divide-x divide-[#C5A059]/20">
            {METRIC_STATS.map((metric, idx) => (
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
