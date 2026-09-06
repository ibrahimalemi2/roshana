import React, { useState } from 'react';
import {
  ShoppingBag,
  Eye,
  Heart,
  Check,
  Sparkles,
  Zap,
  SlidersHorizontal,
  Gem,
  ShieldPlus,
  Leaf,
  Flame,
  Layers,
  Cog,
  Wrench,
  HeartHandshake,
  ArrowRight,
  Star
} from 'lucide-react';
import { Product } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { ROSHNA_7_FEATURES, ROSHNA_CONTACT_INFO } from '../data/furnitureData';

interface ProductShowcaseProps {
  products: Product[];
  onAddToCart: (product: Product, selectedColor: string) => void;
  onQuickView: (product: Product) => void;
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({
  products,
  onAddToCart,
  onQuickView
}) => {
  const { t, isRtl } = useLanguage();
  const [activeCategoryKey, setActiveCategoryKey] = useState<string>('all');
  const [addedProductId, setAddedProductId] = useState<string | null>(null);
  const [wishlist, setWishlist] = useState<string[]>([]);

  const categoryOptions = [
    { key: 'all', label: t.showcase.categories.all },
    { key: 'switches', label: t.showcase.categories.switches },
    { key: 'sockets', label: t.showcase.categories.sockets }
  ];

  const filteredProducts =
    activeCategoryKey === 'all'
      ? products
      : products.filter((p) => {
          if (activeCategoryKey === 'switches') return p.category.toLowerCase().includes('switch');
          if (activeCategoryKey === 'sockets') return p.category.toLowerCase().includes('socket');
          return true;
        });

  const handleAdd = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product, product.colorOptions[0]?.name || 'Pure Matte White');
    setAddedProductId(product.id);
    setTimeout(() => {
      setAddedProductId(null);
    }, 1800);
  };

  const toggleWishlist = (productId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setWishlist((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
    );
  };

  const renderFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldPlus':
        return <ShieldPlus className="w-5 h-5 text-[#D4AF37]" />;
      case 'Leaf':
        return <Leaf className="w-5 h-5 text-[#D4AF37]" />;
      case 'Flame':
        return <Flame className="w-5 h-5 text-[#D4AF37]" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-[#D4AF37]" />;
      case 'Cog':
        return <Cog className="w-5 h-5 text-[#D4AF37]" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-[#D4AF37]" />;
      case 'HeartHandshake':
      default:
        return <HeartHandshake className="w-5 h-5 text-[#D4AF37]" />;
    }
  };

  return (
    <section
      id="collection"
      className="py-12 sm:py-16 bg-[#F8FAFC] dark:bg-[#0A1428] border-b border-[#E2E8F0] dark:border-[#1E293B] transition-colors duration-300 select-none"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header: Matching Reference Flyer */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4 sm:gap-6">
          <div>
            <div className="flex items-center gap-2 text-[#D4AF37] text-xs uppercase tracking-[0.2em] font-bold mb-2">
              <span>{isRtl ? 'محصولات ما' : 'OUR PRODUCTS'}</span>
              <span className="w-8 h-[2px] bg-[#D4AF37]" />
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase text-[#0A1428] dark:text-white tracking-tight">
              {isRtl ? 'سویچ‌ها و ساکت‌های ساختمانی ممتاز' : 'PREMIUM SWITCHES & SOCKETS'}
            </h2>
            <p className="font-sans text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-normal mt-1.5">
              {isRtl ? 'دیزاین شده برای تکمیل سبک زندگی عصری شما.' : 'Designed to complement your lifestyle.'}
            </p>
          </div>

          {/* Right Action: VIEW ALL PRODUCTS Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveCategoryKey('all')}
              className="px-5 py-2.5 rounded-lg bg-[#0A1428] text-white hover:bg-[#14224D] text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all shadow-sm cursor-pointer"
            >
              <span>{isRtl ? 'دیدن تمام محصولات' : 'VIEW ALL PRODUCTS'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 3 Core Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredProducts.map((product, idx) => {
            const isAdded = addedProductId === product.id;
            const isFavorited = wishlist.includes(product.id);
            const isSocket = product.id.includes('soc') || product.name.toLowerCase().includes('socket') || product.category.toLowerCase().includes('socket');
            const isDual = product.id.includes('02') || product.name.toLowerCase().includes('2g') || product.name.toLowerCase().includes('dual');
            
            // Badges
            const badgeText = idx === 0 
              ? (isRtl ? 'پرفروش‌ترین' : 'BESTSELLER')
              : idx === 1 
                ? (isRtl ? 'دیزاین انجنیری' : 'ARCHITECTURAL EDIT')
                : (isRtl ? 'مدل برتر' : 'FLAGSHIP DESIGN');

            // Titles matching reference screenshot: 1 POLE SWITCH / 2 POLE SWITCH / SOCKET OUTLET
            const displayTitle = isSocket
              ? (isRtl ? 'ساکت برق چندمنظوره' : 'SOCKET OUTLET')
              : isDual
                ? (isRtl ? 'سویچ دوگنگ (دو خانه)' : '2 POLE SWITCH')
                : (isRtl ? 'سویچ یک‌گنگ (یک خانه)' : '1 POLE SWITCH');

            // Subtitles: Single Switch / Double Switch / Universal Socket
            const displaySubtitle = isSocket
              ? (isRtl ? 'ساکت برق ارت‌دار' : 'Universal Socket')
              : isDual
                ? (isRtl ? 'سویچ دو تکمه ۱۰ آمپر' : 'Double Switch')
                : (isRtl ? 'سویچ تک تکمه ۱۰ آمپر' : 'Single Switch');

            const priceText = `${product.price === 90.01 ? '90.01' : product.price} ${isRtl ? 'افغانی' : 'AFN'}`;

            return (
              <div
                key={product.id}
                onClick={() => onQuickView(product)}
                className="group cursor-pointer flex flex-col justify-between bg-white dark:bg-[#0E1838] rounded-[24px] p-4 sm:p-5 border border-[#E2E8F0] dark:border-[#1E293B] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] dark:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.35)] hover:shadow-xl hover:border-[#D4AF37]/60 dark:hover:border-[#D4AF37]/60 transition-all duration-300 relative select-none"
              >
                <div>
                  {/* Top Image Container: Large Clear Architectural Wall Shot */}
                  <div className="relative aspect-[4/3] w-full rounded-[18px] overflow-hidden bg-[#F8FAFC] dark:bg-[#050814] mb-4 border border-slate-200/60 dark:border-slate-800/60">
                    <img
                      src={product.image}
                      alt={displayTitle}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />

                    {/* Top-Left Dark Pill Badge */}
                    <div className="absolute top-3.5 left-3.5 rtl:left-auto rtl:right-3.5 z-10">
                      <span className="px-3 py-1 rounded-full bg-[#0A1428]/90 text-white text-[10px] font-bold tracking-wider uppercase shadow-xs backdrop-blur-xs">
                        {badgeText}
                      </span>
                    </div>

                    {/* Top-Right Wishlist Heart Button */}
                    <button
                      onClick={(e) => toggleWishlist(product.id, e)}
                      className="absolute top-3.5 right-3.5 rtl:right-auto rtl:left-3.5 z-10 w-8.5 h-8.5 rounded-full bg-white/95 dark:bg-[#0A1428]/90 text-[#0A1428] dark:text-white flex items-center justify-center backdrop-blur-xs shadow-sm hover:scale-110 transition-transform cursor-pointer border border-slate-100 dark:border-slate-700"
                      aria-label="Wishlist"
                    >
                      <Heart
                        className={`w-4 h-4 ${
                          isFavorited ? 'fill-[#D4AF37] text-[#D4AF37]' : 'text-slate-700 dark:text-slate-200 stroke-[1.75]'
                        }`}
                      />
                    </button>
                  </div>

                  {/* Middle Area: Title + Subtitle + View Details (Rating removed as requested) */}
                  <div className="text-left rtl:text-right px-0.5">
                    {/* Main Title */}
                    <h3 className="font-black text-xl sm:text-2xl uppercase tracking-tight text-[#0A1428] dark:text-white leading-tight">
                      {displayTitle}
                    </h3>

                    {/* Sub-label */}
                    <p className="text-sm text-slate-500 dark:text-slate-400 font-normal mt-1">
                      {displaySubtitle}
                    </p>

                    {/* View Details Link with Arrow */}
                    <div className="pt-3 mt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0A1428] dark:text-[#D4AF37] group-hover:text-[#D4AF37] transition-colors">
                      <span>{isRtl ? 'مشخصات تخنیکی' : 'VIEW DETAILS'}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>

                {/* Bottom Row: Official Price + Gold Add to Bag Pill Button */}
                <div className="pt-3.5 mt-4 border-t border-[#E2E8F0] dark:border-[#1E293B] flex items-center justify-between gap-3 px-0.5">
                  {/* Left: Official Price */}
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider font-bold block">
                      {isRtl ? 'قیمت واحد' : 'OFFICIAL PRICE'}
                    </span>
                    <span className="font-mono text-base sm:text-lg font-bold text-[#0A1428] dark:text-white mt-0.5 block">
                      {priceText}
                    </span>
                  </div>

                  {/* Right: Gold Add To Bag Pill Button */}
                  <button
                    onClick={(e) => handleAdd(product, e)}
                    className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-sm transition-all cursor-pointer ${
                      isAdded
                        ? 'bg-[#0A1428] text-[#D4AF37] border border-[#D4AF37]'
                        : 'bg-[#D4AF37] hover:bg-[#C5A059] text-[#0A1428]'
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-4 h-4 text-[#D4AF37]" />
                        <span>{isRtl ? 'افزوده شد' : 'ADDED'}</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-4 h-4 text-[#0A1428]" />
                        <span>{isRtl ? 'خرید' : 'ADD TO BAG'}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* 7 Core Quality & Engineering Pillars Row (Direct from Flyer) */}
        <div className="mt-10 sm:mt-12 p-6 sm:p-8 rounded-2xl sm:rounded-[24px] bg-white dark:bg-[#0E1838] border border-[#E2E8F0] dark:border-[#1E293B] shadow-sm">
          <div className="text-center max-w-xl mx-auto mb-6">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-bold block mb-1">
              {isRtl ? 'معیارهای انجنیری روشنا' : 'Roshna Engineering Standards'}
            </span>
            <h3 className="font-serif-heading text-xl sm:text-2xl text-[#0A1128] dark:text-white">
              {isRtl
                ? '۷ ویژگی ممتاز سویچ و ساکت‌های ساختمانی روشنا'
                : '7 Core Engineering & Safety Features'}
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3.5 sm:gap-4">
            {ROSHNA_7_FEATURES.map((feat) => (
              <div
                key={feat.id}
                className="flex flex-col items-center text-center p-3.5 rounded-2xl bg-[#F8FAFC] dark:bg-[#050814] border border-[#E2E8F0]/60 dark:border-[#1E293B]/60 hover:border-[#D4AF37] transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-white dark:bg-[#0A1128] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] mb-2.5 shadow-xs group-hover:scale-110 transition-transform">
                  {renderFeatureIcon(feat.iconName)}
                </div>
                <p className="font-sans-body text-xs font-semibold text-[#0A1128] dark:text-white leading-snug">
                  {isRtl ? feat.titleFa : feat.titleEn}
                </p>
                <p className="font-sans-body text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 leading-tight">
                  {isRtl ? feat.titleEn : feat.titleFa}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Consultation & Project Inquiries Banner (With Direct WhatsApp Link) */}
        <div className="mt-8 p-6 sm:p-7 rounded-2xl sm:rounded-[22px] bg-[#0A1128] text-white border border-[#D4AF37]/30 shadow-xl flex flex-col md:flex-row items-center justify-between gap-5 text-left rtl:text-right">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#050814] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] shadow-xs shrink-0">
              <Sparkles className="w-6 h-6 text-[#D4AF37]" />
            </div>
            <div>
              <h4 className="font-serif-heading text-lg sm:text-xl font-medium text-white">
                {t.showcase.consultationTitle}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 font-sans-body mt-0.5 max-w-xl">
                {t.showcase.consultationDesc}
              </p>
            </div>
          </div>
          <a
            href={ROSHNA_CONTACT_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 rounded-full btn-gold-gradient text-xs uppercase font-bold tracking-wider shrink-0 cursor-pointer whitespace-nowrap shadow-md text-[#0A1128] flex items-center justify-center"
          >
            {t.showcase.consultationButton}
          </a>
        </div>
      </div>
    </section>
  );
};
