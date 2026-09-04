import React, { useState, useEffect } from 'react';
import { ArrowRight, Eye, ChevronLeft, ChevronRight, Sparkles, ShieldCheck, Zap } from 'lucide-react';
import { Product } from '../types';
import { IMAGES } from '../data/imageAssets';

interface HeroSectionProps {
  products: Product[];
  onExploreClick: () => void;
  onQuickView: (product: Product) => void;
}

interface HeroSlide {
  id: string;
  title: string;
  tagline: string;
  category: string;
  price: number;
  image: string;
  headline: string;
  origin: string;
  material: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'hero-1',
    title: 'Roshna Pure Minimal 1-Gang Switch',
    tagline: 'Ultra-slim flush profile featuring dampened tactile rocker actuation and soft ambient LED guide glow.',
    category: 'Architectural Wall Control',
    price: 48,
    image: IMAGES.SINGLE_SWITCH_WARM_CREAM,
    headline: 'Signature Flush Collection',
    origin: 'Milan & Geneva Engineering',
    material: 'Bayer Flame-Retardant Polycarbonate & Silver Contacts'
  },
  {
    id: 'hero-2',
    title: 'Roshna Dual-Gang Precision Switch',
    tagline: 'Independent bilateral rocker plate engineered with precision-weighted click dynamics for luxury living.',
    category: 'Dual-Gang Controls',
    price: 68,
    image: IMAGES.DUAL_SWITCH_PERSPECTIVE,
    headline: 'Modular Tactile Series',
    origin: 'Atelier Roshna Studio',
    material: 'Matte Frosted Polymer & Solid Steel Subframe'
  },
  {
    id: 'hero-3',
    title: 'Roshna Sculptural Fluted Wall Socket',
    tagline: 'Architectural flush-mount grounded outlet with subtle fluted perimeter relief and integrated child-safety shutters.',
    category: 'Flush Outlets',
    price: 58,
    image: IMAGES.WALL_SOCKET_CREAM_FLUTED,
    headline: 'Artisanal Wall Hardware',
    origin: 'Certified to IEC-60884 / CE',
    material: 'Anti-Fingerprint Velvet Finish & Phosphor Bronze'
  },
  {
    id: 'hero-4',
    title: 'Roshna Residence Trio Master Suite',
    tagline: 'Complete 3-unit unified wall arrangement combining dual tactile switches with center grounded safety socket.',
    category: 'Master Wall Suites',
    price: 185,
    image: IMAGES.STUDIO_PRODUCT_TRIO,
    headline: 'Unified Living Architecture',
    origin: 'Switch To Quality • روشنا ولت',
    material: 'Monolithic Backplate & Interchangeable Trim'
  }
];

export const HeroSection: React.FC<HeroSectionProps> = ({
  products,
  onExploreClick,
  onQuickView
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6500);
    return () => clearInterval(interval);
  }, [isHovered]);

  const currentSlide = HERO_SLIDES[currentSlideIndex];

  const nextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  // Find corresponding product for quick view
  const matchingProduct = products.find(p => p.name.toLowerCase().includes('switch')) || products[0];

  return (
    <section id="hero" className="relative min-h-[90vh] lg:min-h-[94vh] bg-[#F7F5F0] dark:bg-[#0B132B] flex items-center overflow-hidden border-b border-[#E5E1D8] dark:border-[#1D2B52] transition-colors duration-300 select-none">
      {/* Ambient background gold glow & vertical rule */}
      <div className="absolute inset-0 ambient-glow pointer-events-none" />
      <div className="absolute top-0 right-1/2 w-px h-full bg-[#E5E1D8]/70 dark:bg-[#1D2B52]/70 hidden lg:block" />

      <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 py-12 lg:py-20 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Editorial Typography & Brand Watermark */}
          <div className="lg:col-span-6 flex flex-col justify-between relative z-10">
            {/* Top pill */}
            <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-[#FFFFFF] dark:bg-[#0F1B3D] border border-[#C5A059]/40 text-[#0B132B] dark:text-[#F7F5F0] text-xs font-medium tracking-wider mb-6 shadow-xs transition-colors">
              <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-ping" />
              <span className="uppercase tracking-[0.2em] text-[11px] font-bold text-[#1F2421] dark:text-[#F7F5F0]">ROSHNA VOLT • 2026 ARCHITECTURAL CAPSULE</span>
            </div>

            {/* Primary Editorial Heading */}
            <div className="space-y-4 mb-8">
              <h1 className="font-serif-heading text-4xl sm:text-5xl md:text-6xl lg:text-[68px] leading-[1.08] text-[#1F2421] dark:text-[#F7F5F0] font-normal tracking-tight">
                Controls That <br />
                <span className="italic font-normal font-serif-heading text-[#C5A059] hover:text-[#D4AF37] transition-colors">
                  Elevate
                </span>{' '}
                every space.
              </h1>

              <p className="font-sans-body text-base sm:text-lg text-[#1F2421]/75 dark:text-[#F7F5F0]/75 font-light leading-relaxed max-w-lg">
                Where Swiss-grade electrical engineering meets tactile perfection. Minimalist flush switches, monolithic wall sockets, and modular 3-part architectures engineered for discerning living.
              </p>
            </div>

            {/* CTA Buttons & Micro specs */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-12">
              {/* Signature Metallic Gold Gradient Button */}
              <button
                onClick={onExploreClick}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 btn-gold-gradient rounded-full text-sm uppercase tracking-wider active:scale-95 focus:outline-none cursor-pointer"
              >
                <span>Explore The Collection</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform text-[#0B132B]" />
              </button>

              <button
                onClick={() => onQuickView(matchingProduct)}
                className="inline-flex items-center gap-2 text-sm font-medium text-[#1F2421] dark:text-[#F7F5F0] hover:text-[#C5A059] dark:hover:text-[#C5A059] transition-colors py-3 px-2 border-b border-transparent hover:border-[#C5A059]"
              >
                <Eye className="w-4 h-4 text-[#C5A059]" />
                <span>Quick Specification</span>
              </button>
            </div>

            {/* Subtle Brand Watermark */}
            <div className="relative pt-4 overflow-hidden select-none pointer-events-none">
              <div className="font-serif-heading text-[110px] sm:text-[140px] md:text-[170px] font-bold tracking-tighter text-[#0B132B]/[0.04] dark:text-[#F7F5F0]/[0.05] leading-none uppercase -ml-3">
                roshna
              </div>
            </div>

            {/* Quality Seals */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#E5E1D8] dark:border-[#1D2B52] text-xs font-sans-body text-[#1F2421]/80 dark:text-[#F7F5F0]/80">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                <span>Silver-Nickel Contacts</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                <span>Bayer Polycarbonate</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                <span>IEC-60884 Certified</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Product Highlight Card with Deep Navy #0B132B & Warm Amber Borders */}
          <div 
            className="lg:col-span-6 relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Main Showcase Card in Deep Navy #0B132B with Warm Amber #C5A059 Border */}
            <div className="relative bg-[#0B132B] rounded-[24px] lg:rounded-[32px] overflow-hidden p-3.5 sm:p-5 shadow-2xl shadow-[#0B132B]/30 border border-[#C5A059]/40 transition-all duration-500">
              
              {/* Product Visual Container with Aspect Ratio */}
              <div className="relative aspect-[4/5] sm:aspect-[4/4.5] w-full rounded-[20px] lg:rounded-[26px] overflow-hidden bg-[#060B18] group border border-[#C5A059]/20">
                <img
                  src={currentSlide.image}
                  alt={currentSlide.title}
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Ambient vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-[#0B132B]/40 to-transparent" />

                {/* Top Badge Overlay */}
                <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
                  <span className="px-3.5 py-1.5 rounded-full bg-[#0B132B]/90 backdrop-blur-md text-[11px] uppercase tracking-wider font-semibold text-[#C5A059] border border-[#C5A059]/40 shadow-xs flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-[#D4AF37]" />
                    {currentSlide.category}
                  </span>

                  <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-[#C5A059] to-[#9E7B36] text-xs font-serif-heading font-bold text-[#0B132B] tracking-wide shadow-md">
                    ${currentSlide.price.toLocaleString()} USD
                  </span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[#C5A059] font-semibold mb-1">
                    {currentSlide.headline}
                  </p>
                  <h2 className="font-serif-heading text-2xl sm:text-3xl font-medium tracking-tight mb-2 text-[#F7F5F0]">
                    {currentSlide.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-neutral-300 font-sans-body font-light line-clamp-2 mb-4 max-w-md">
                    {currentSlide.tagline}
                  </p>

                  <div className="flex items-center justify-between pt-3 border-t border-[#C5A059]/30 text-xs">
                    <span className="text-neutral-300">{currentSlide.material}</span>
                    <button
                      onClick={() => onQuickView(matchingProduct)}
                      className="inline-flex items-center gap-1.5 text-[#C5A059] hover:text-[#D4AF37] font-semibold transition-colors"
                    >
                      <span>View Specifications</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Prev / Next Slide Arrows */}
                <button
                  onClick={prevSlide}
                  aria-label="Previous slide"
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#0B132B]/85 hover:bg-[#C5A059] text-[#C5A059] hover:text-[#0B132B] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-md backdrop-blur-xs border border-[#C5A059]/40"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  onClick={nextSlide}
                  aria-label="Next slide"
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#0B132B]/85 hover:bg-[#C5A059] text-[#C5A059] hover:text-[#0B132B] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-md backdrop-blur-xs border border-[#C5A059]/40"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Bottom Carousel Controls & Pagination Dots */}
              <div className="pt-4 pb-2 px-3 flex items-center justify-between">
                {/* Numbered slide indicator */}
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-serif-heading font-semibold text-[#C5A059]">
                    0{currentSlideIndex + 1}
                  </span>
                  <span className="text-xs text-neutral-500">/</span>
                  <span className="text-xs font-serif-heading text-neutral-500">
                    0{HERO_SLIDES.length}
                  </span>
                </div>

                {/* Pagination Dots */}
                <div className="flex items-center space-x-2.5">
                  {HERO_SLIDES.map((slide, idx) => (
                    <button
                      key={slide.id}
                      onClick={() => setCurrentSlideIndex(idx)}
                      aria-label={`Go to slide ${idx + 1}`}
                      className={`transition-all duration-300 rounded-full ${
                        currentSlideIndex === idx
                          ? 'w-8 h-2 bg-[#C5A059]'
                          : 'w-2 h-2 bg-neutral-600 hover:bg-[#C5A059]/50'
                      }`}
                    />
                  ))}
                </div>

                {/* Origin label */}
                <span className="text-[11px] text-[#C5A059] font-sans-body tracking-wider uppercase font-semibold hidden sm:inline-block">
                  {currentSlide.origin}
                </span>
              </div>
            </div>

            {/* Decorative Offset Floating Card with Warm Amber Border */}
            <div className="hidden sm:flex absolute -bottom-6 -left-8 bg-[#FFFFFF] dark:bg-[#0F1B3D] border border-[#C5A059]/40 rounded-2xl p-4 shadow-xl items-center gap-3.5 z-20 max-w-xs transition-colors duration-300">
              <div className="w-10 h-10 rounded-xl bg-[#F7F5F0] dark:bg-[#0B132B] border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059]">
                <ShieldCheck className="w-5 h-5 text-[#C5A059]" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-[#C5A059] font-bold">Switch To Quality</p>
                <p className="text-xs font-medium text-[#1F2421] dark:text-[#F7F5F0]">Lifetime Structural Frame Guarantee</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
