import React, { useState } from 'react';
import { Layers, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { MATERIALS_DATA } from '../data/furnitureData';

export const MaterialShowcase: React.FC = () => {
  const [activeMaterial, setActiveMaterial] = useState(MATERIALS_DATA[0]);

  return (
    <section id="materials" className="py-20 lg:py-28 bg-[#F7F5F0] dark:bg-[#0B132B] border-b border-[#E5E1D8] dark:border-[#1D2B52] relative overflow-hidden transition-colors duration-300 select-none">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFFFFF] dark:bg-[#0F1B3D] border border-[#C5A059]/40 text-[#C5A059] text-[11px] uppercase tracking-[0.2em] font-semibold mb-3 shadow-xs">
              <Sparkles className="w-3 h-3 text-[#C5A059]" />
              <span>Material Provenance</span>
            </div>
            <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl font-normal text-[#1F2421] dark:text-[#F7F5F0] tracking-tight">
              Raw Minerals & <br />
              <span className="italic font-serif-heading text-[#C5A059]">Honest Textures</span>
            </h2>
          </div>
          <p className="font-sans-body text-sm text-[#1F2421]/75 dark:text-[#F7F5F0]/75 max-w-md font-light leading-relaxed">
            Every material in the Roshna hardware catalog is chosen for structural resilience, pure flame-retardant safety, and anti-fingerprint velvet tactile refinement.
          </p>
        </div>

        {/* 4 Materials Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MATERIALS_DATA.map((mat) => {
            const isSelected = activeMaterial.id === mat.id;

            return (
              <div
                key={mat.id}
                onClick={() => setActiveMaterial(mat)}
                className={`cursor-pointer group rounded-[24px] overflow-hidden transition-all duration-300 border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#FFFFFF] dark:bg-[#0F1B3D] border-[#C5A059] ring-2 ring-[#C5A059] ring-offset-2 ring-offset-[#F7F5F0] dark:ring-offset-[#0B132B] shadow-xl'
                    : 'bg-[#FFFFFF] dark:bg-[#0F1B3D] border-[#E5E1D8] dark:border-[#1D2B52] hover:border-[#C5A059] dark:hover:border-[#C5A059] shadow-xs'
                }`}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F7F5F0] dark:bg-[#060B18] border-b border-[#E5E1D8]/60 dark:border-[#1D2B52]">
                  <img
                    src={mat.image}
                    alt={mat.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-[#0B132B]/90 backdrop-blur-xs text-[#C5A059] text-[10px] uppercase tracking-wider font-bold border border-[#C5A059]/30">
                      {mat.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-[#C5A059] font-bold">
                      {mat.origin}
                    </p>
                    <h3 className="font-serif-heading text-xl font-medium text-[#1F2421] dark:text-[#F7F5F0] mt-1">
                      {mat.name}
                    </h3>
                    <p className="text-xs text-[#1F2421]/70 dark:text-[#F7F5F0]/70 font-sans-body mt-2 line-clamp-2">
                      {mat.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#E5E1D8] dark:border-[#1D2B52] flex items-center justify-between text-xs text-[#C5A059] font-semibold">
                    <span>Inspect Texture</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Deep Dive Material Spotlight */}
        <div className="mt-10 bg-[#FFFFFF] dark:bg-[#0F1B3D] rounded-[24px] p-8 sm:p-10 border border-[#E5E1D8] dark:border-[#1D2B52] shadow-md flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 transition-colors">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C5A059] font-semibold">
              <span>Selected Material Study</span>
              <span>·</span>
              <span>{activeMaterial.name}</span>
            </div>
            <h3 className="font-serif-heading text-2xl sm:text-3xl text-[#1F2421] dark:text-[#F7F5F0]">
              {activeMaterial.name}
            </h3>
            <p className="text-sm font-sans-body text-[#1F2421]/75 dark:text-[#F7F5F0]/75 leading-relaxed">
              {activeMaterial.description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
            {activeMaterial.characteristics.map((char, i) => (
              <div key={i} className="px-4 py-3 rounded-xl bg-[#F7F5F0] dark:bg-[#0B132B] border border-[#E5E1D8] dark:border-[#1D2B52] flex items-center gap-2 text-xs text-[#1F2421] dark:text-[#F7F5F0] font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>{char}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
