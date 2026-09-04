import React, { useState } from 'react';
import { Star, Sparkles, ArrowUpRight, Compass, ShieldCheck } from 'lucide-react';
import { QUADRANT_ITEMS } from '../data/furnitureData';
import { QuadrantItem } from '../types';

interface InteractiveVisualBreakProps {
  onSelectQuadrant?: (item: QuadrantItem) => void;
}

export const InteractiveVisualBreak: React.FC<InteractiveVisualBreakProps> = () => {
  const [activeQuadId, setActiveQuadId] = useState<string>(QUADRANT_ITEMS[0].id);

  const activeItem = QUADRANT_ITEMS.find((q) => q.id === activeQuadId) || QUADRANT_ITEMS[0];

  return (
    <section id="craft" className="py-20 lg:py-28 bg-[#F7F5F0] dark:bg-[#0B132B] relative overflow-hidden border-b border-[#E5E1D8] dark:border-[#1D2B52] transition-colors duration-300 select-none">
      {/* Background ambient circular rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] md:w-[900px] md:h-[900px] rounded-full border border-[#C5A059]/15 pointer-events-none opacity-60" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[650px] md:h-[650px] rounded-full border border-[#C5A059]/25 pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] dark:bg-[#0F1B3D] border border-[#C5A059]/40 text-[#C5A059] text-xs font-semibold tracking-wider mb-4 shadow-xs">
            <Compass className="w-3.5 h-3.5 text-[#C5A059]" />
            <span className="uppercase tracking-[0.2em] text-[11px]">The Anatomy of Form</span>
          </div>

          <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl text-[#1F2421] dark:text-[#F7F5F0] font-normal tracking-tight">
            Sculptural Symmetry & <br />
            <span className="italic font-serif-heading text-[#C5A059]">360° Material Precision</span>
          </h2>

          <p className="mt-4 font-sans-body text-sm sm:text-base text-[#1F2421]/75 dark:text-[#F7F5F0]/75 font-light">
            Explore our four foundational design pillars through a quadrant study of texture, volume, and timeless mineral geometry.
          </p>
        </div>

        {/* Central Semi-Circular Quadrant-Split Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* LEFT/MAIN: Circular / Quadrant Split Architectural Grid */}
          <div className="lg:col-span-8 flex items-center justify-center">
            <div className="relative w-full max-w-[540px] sm:max-w-[620px] aspect-square rounded-full p-3 sm:p-4 bg-[#FFFFFF] dark:bg-[#0F1B3D] border border-[#C5A059]/30 shadow-2xl shadow-[#0B132B]/10">
              
              {/* Four Quadrants Container */}
              <div className="w-full h-full rounded-full overflow-hidden grid grid-cols-2 grid-rows-2 gap-2 sm:gap-3 p-1 bg-[#F7F5F0] dark:bg-[#060B18]">
                {QUADRANT_ITEMS.map((item, index) => {
                  const isActive = activeQuadId === item.id;
                  // Rounded corners based on quadrant position
                  const cornerRadius = 
                    index === 0 ? 'rounded-tl-full' :
                    index === 1 ? 'rounded-tr-full' :
                    index === 2 ? 'rounded-bl-full' : 'rounded-br-full';

                  return (
                    <div
                      key={item.id}
                      onClick={() => setActiveQuadId(item.id)}
                      onMouseEnter={() => setActiveQuadId(item.id)}
                      className={`relative overflow-hidden cursor-pointer group transition-all duration-500 ${cornerRadius} ${
                        isActive ? 'ring-2 ring-[#C5A059] ring-offset-2 ring-offset-[#F7F5F0] dark:ring-offset-[#060B18]' : 'opacity-85 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className={`w-full h-full object-cover transition-transform duration-700 ease-out ${
                          isActive ? 'scale-110' : 'group-hover:scale-105'
                        }`}
                      />

                      {/* Quadrant gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-300" />

                      {/* Quadrant Tag */}
                      <div className="absolute top-4 left-4 z-10">
                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-sans-body font-bold tracking-wider uppercase transition-all duration-300 ${
                          isActive 
                            ? 'bg-[#0B132B] text-[#C5A059] border border-[#C5A059]/40' 
                            : 'bg-white/90 backdrop-blur-xs text-[#1F2421]'
                        }`}>
                          {item.tag}
                        </span>
                      </div>

                      {/* Quadrant Bottom Label */}
                      <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                        <p className="text-[10px] uppercase tracking-widest text-[#C5A059] font-bold">
                          {item.subtitle}
                        </p>
                        <p className="font-serif-heading text-sm sm:text-base font-medium truncate text-[#F7F5F0]">
                          {item.title}
                        </p>
                      </div>

                      {/* Hover Arrow Indicator */}
                      <div className="absolute top-4 right-4 w-7 h-7 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#C5A059]" />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* ANCHOR: Central Circular Rating Badge in Deep Navy #0B132B & Metallic Gold */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-[#0B132B] text-[#F7F5F0] p-2.5 shadow-2xl border-4 border-[#C5A059] flex flex-col items-center justify-center text-center transform hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center space-x-0.5 text-[#C5A059] mb-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current text-[#C5A059]" />
                    ))}
                  </div>
                  <span className="font-serif-heading text-xl sm:text-2xl font-bold tracking-tight text-[#C5A059] leading-none">
                    4.9/5
                  </span>
                  <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-neutral-300 font-sans-body mt-1">
                    Verified Craft
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT: Focused Detail Inspector & Material Story */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#FFFFFF] dark:bg-[#0F1B3D] p-8 rounded-[24px] border border-[#E5E1D8] dark:border-[#1D2B52] shadow-lg shadow-black/5 relative overflow-hidden transition-colors">
              
              {/* Subtle top accent */}
              <div className="flex items-center justify-between pb-5 border-b border-[#E5E1D8] dark:border-[#1D2B52]">
                <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#C5A059]">
                  {activeItem.tag}
                </span>
                <span className="px-3 py-1 rounded-full bg-[#F7F5F0] dark:bg-[#0B132B] border border-[#E5E1D8] dark:border-[#1D2B52] text-[#1F2421] dark:text-[#F7F5F0] text-xs font-semibold">
                  {activeItem.category}
                </span>
              </div>

              {/* Title & Description */}
              <div className="py-6 space-y-3">
                <h3 className="font-serif-heading text-2xl sm:text-3xl font-medium text-[#1F2421] dark:text-[#F7F5F0]">
                  {activeItem.title}
                </h3>
                <p className="text-xs text-[#C5A059] uppercase tracking-wider font-bold">
                  Material: {activeItem.material}
                </p>
                <p className="font-sans-body text-sm text-[#1F2421]/75 dark:text-[#F7F5F0]/75 leading-relaxed">
                  {activeItem.description}
                </p>
              </div>

              {/* Interactive Quadrant Selectors */}
              <div className="space-y-2 pt-4 border-t border-[#E5E1D8] dark:border-[#1D2B52]">
                <p className="text-[11px] uppercase tracking-wider text-neutral-500 font-medium mb-3">
                  Inspect Quadrant Perspectives:
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {QUADRANT_ITEMS.map((q) => (
                    <button
                      key={q.id}
                      onClick={() => setActiveQuadId(q.id)}
                      className={`px-3 py-2 text-left rounded-xl text-xs font-sans-body transition-all flex items-center justify-between cursor-pointer ${
                        activeQuadId === q.id
                          ? 'bg-[#0B132B] text-[#C5A059] font-bold shadow-xs border border-[#C5A059]/40'
                          : 'bg-[#F7F5F0] dark:bg-[#0B132B] hover:bg-[#E5E1D8] dark:hover:bg-[#13224A] text-[#1F2421] dark:text-[#F7F5F0]'
                      }`}
                    >
                      <span className="truncate">{q.title.split(' ')[1] || q.title}</span>
                      <span className="text-[10px] opacity-60 ml-1">{q.tag.split('·')[0]}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Atelier Quality Guarantee Note */}
              <div className="mt-6 pt-4 flex items-center gap-3 text-xs text-[#1F2421]/90 dark:text-[#F7F5F0]/90 bg-[#F7F5F0] dark:bg-[#0B132B] p-3 rounded-xl border border-[#E5E1D8] dark:border-[#1D2B52]">
                <ShieldCheck className="w-5 h-5 text-[#C5A059] shrink-0" />
                <span className="leading-snug">
                  Every quadrant is precision-balanced to maintain architectural serenity from all viewing angles.
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
