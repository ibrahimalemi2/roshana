import React, { useState } from 'react';
import { Gem, Leaf, Sparkles, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { VALUE_PILLARS } from '../data/furnitureData';
import { ValuePillar } from '../types';

export const ValueProposition: React.FC = () => {
  const [activePillar, setActivePillar] = useState<ValuePillar>(VALUE_PILLARS[0]);

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
    <section id="craft" className="py-20 lg:py-28 bg-[#F7F5F0] dark:bg-[#0B132B] border-b border-[#E5E1D8] dark:border-[#1D2B52] relative transition-colors duration-300 select-none">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFFFFF] dark:bg-[#0F1B3D] border border-[#C5A059]/40 text-[#C5A059] text-[11px] uppercase tracking-[0.2em] font-semibold mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Our Principles</span>
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl font-normal text-[#1F2421] dark:text-[#F7F5F0] tracking-tight">
            Crafted with Intent, <br />
            <span className="italic font-serif-heading text-[#C5A059]">Built for Generations</span>
          </h2>
          <p className="mt-4 font-sans-body text-sm sm:text-base text-[#1F2421]/75 dark:text-[#F7F5F0]/75 font-light">
            We reject the disposable cycle of fast trends. Every Roshna creation is an architectural heirloom engineered with pure sustainable integrity.
          </p>
        </div>

        {/* Value Proposition Split-Block Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUE_PILLARS.map((pillar) => {
            const isSelected = activePillar.id === pillar.id;

            return (
              <div
                key={pillar.id}
                onClick={() => setActivePillar(pillar)}
                className={`group cursor-pointer rounded-[24px] p-7 transition-all duration-300 flex flex-col justify-between border relative overflow-hidden ${
                  isSelected
                    ? 'bg-[#0B132B] text-[#F7F5F0] border-[#C5A059] shadow-xl shadow-[#0B132B]/20'
                    : 'bg-[#FFFFFF] dark:bg-[#0F1B3D] text-[#1F2421] dark:text-[#F7F5F0] border-[#E5E1D8] dark:border-[#1D2B52] hover:border-[#C5A059] dark:hover:border-[#C5A059] shadow-xs'
                }`}
              >
                {/* Top Number & Vector Icon */}
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span
                      className={`font-serif-heading text-2xl font-light tracking-tight ${
                        isSelected ? 'text-[#C5A059]' : 'text-[#C5A059]'
                      }`}
                    >
                      {pillar.number}
                    </span>

                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${
                        isSelected
                          ? 'bg-[#060B18] text-[#C5A059] border border-[#C5A059]/40'
                          : 'bg-[#F7F5F0] dark:bg-[#0B132B] text-[#1F2421] dark:text-[#F7F5F0] group-hover:text-[#C5A059]'
                      }`}
                    >
                      {renderIcon(pillar.iconName)}
                    </div>
                  </div>

                  {/* Title & Short Desc */}
                  <h3 className="font-serif-heading text-xl sm:text-2xl font-medium mb-3 leading-snug">
                    {pillar.title}
                  </h3>

                  <p
                    className={`font-sans-body text-xs sm:text-sm leading-relaxed mb-6 font-light ${
                      isSelected ? 'text-neutral-300' : 'text-[#1F2421]/70 dark:text-[#F7F5F0]/70'
                    }`}
                  >
                    {pillar.shortDesc}
                  </p>
                </div>

                {/* Bottom Highlight Seal */}
                <div
                  className={`pt-4 border-t text-[11px] font-sans-body flex items-center justify-between ${
                    isSelected
                      ? 'border-[#C5A059]/30 text-[#C5A059]'
                      : 'border-[#E5E1D8] dark:border-[#1D2B52] text-[#C5A059]'
                  }`}
                >
                  <span className="font-semibold">{pillar.highlight}</span>
                  <ArrowRight
                    className={`w-3.5 h-3.5 transform transition-transform ${
                      isSelected ? 'translate-x-1' : 'group-hover:translate-x-1'
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Deep Dive Spotlight for the active pillar */}
        <div className="mt-10 bg-[#FFFFFF] dark:bg-[#0F1B3D] rounded-[24px] p-8 sm:p-10 border border-[#E5E1D8] dark:border-[#1D2B52] shadow-md flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 transition-colors">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C5A059] font-semibold">
              <span>Detailed Commitment</span>
              <span>·</span>
              <span>Pillar {activePillar.number}</span>
            </div>
            <h3 className="font-serif-heading text-2xl sm:text-3xl text-[#1F2421] dark:text-[#F7F5F0]">
              {activePillar.title}
            </h3>
            <p className="text-sm font-sans-body text-[#1F2421]/75 dark:text-[#F7F5F0]/75 leading-relaxed">
              {activePillar.fullDesc}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
            <div className="px-4 py-3 rounded-xl bg-[#F7F5F0] dark:bg-[#0B132B] border border-[#E5E1D8] dark:border-[#1D2B52] flex items-center gap-2 text-xs text-[#1F2421] dark:text-[#F7F5F0] font-semibold">
              <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
              <span>Independent Lab Certified</span>
            </div>
            <div className="px-4 py-3 rounded-xl bg-[#F7F5F0] dark:bg-[#0B132B] border border-[#E5E1D8] dark:border-[#1D2B52] flex items-center gap-2 text-xs text-[#1F2421] dark:text-[#F7F5F0] font-semibold">
              <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
              <span>Direct Atelier Provenance</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
