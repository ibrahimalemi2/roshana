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
  ArrowRight
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
              {isRtl ? 'کلیدها و پریزهای ساختمانی ممتاز' : 'PREMIUM SWITCHES & SOCKETS'}
            </h2>
            <p className="font-sans text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-normal mt-1.5">
              {isRtl ? 'طراحی شده برای تکمیل سبک زندگی شما.' : 'Designed to complement your lifestyle.'}
            </p>
          </div>

          {/* Right Action: VIEW ALL PRODUCTS Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveCategoryKey('all')}
              className="px-5 py-2.5 rounded-lg bg-[#0A1428] text-white hover:bg-[#14224D] text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all shadow-sm cursor-pointer"
            >
              <span>{isRtl ? 'مشاهده همه محصولات' : 'VIEW ALL PRODUCTS'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 3 Core Products Grid: Matching Reference Flyer Horizontal Card Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredProducts.map((product, idx) => {
            const isAdded = addedProductId === product.id;
            const isFavorited = wishlist.includes(product.id);
            const isSocket = product.id.includes('soc') || product.name.toLowerCase().includes('socket');
            const isDual = product.id.includes('02') || product.name.toLowerCase().includes('2g');
            
            // Reference flyer titles
            const displayTitle = isSocket 
              ? (isRtl ? 'پریز برق چندمنظوره' : 'SOCKET OUTLET')
              : isDual
                ? (isRtl ? 'سویچ دو قطبی (دو خانه)' : '2 POLE SWITCH')
                : (isRtl ? 'سویچ یک قطبی (یک خانه)' : '1 POLE SWITCH');

            const displaySubtitle = isSocket
              ? (isRtl ? 'ساکت برق ارت‌دار' : 'Universal Socket')
              : isDual
                ? (isRtl ? 'سویچ دو پل ۱۰ آمپر' : 'Double Switch')
                : (isRtl ? 'سویچ تک پل ۱۰ آمپر' : 'Single Switch');

            return (
              <div
                key={product.id}
                onClick={() => onQuickView(product)}
                className="group cursor-pointer bg-white dark:bg-[#0E1838] rounded-2xl p-5 sm:p-6 border border-[#E2E8F0] dark:border-[#1E293B] shadow-sm hover:shadow-xl hover:border-[#D4AF37] dark:hover:border-[#D4AF37] transition-all duration-300 relative flex flex-col justify-between"
              >
                {/* Horizontal Card Layout: Product Left, Spec Info Right */}
                <div className="grid grid-cols-12 gap-4 sm:gap-5 items-center mb-4">
                  
                  {/* Left Column: Product Photo */}
                  <div className="col-span-6 relative aspect-square rounded-xl overflow-hidden bg-[#F8FAFC] dark:bg-[#050814] border border-[#E2E8F0]/70 dark:border-[#1E293B] flex items-center justify-center p-2">
                    <img
                      src={product.image}
                      alt={displayTitle}
                      className="w-full h-full object-contain group-hover:scale-108 transition-transform duration-500 ease-out"
                      loading="lazy"
                    />

                    {/* Quick Wishlist Button */}
                    <button
                      onClick={(e) => toggleWishlist(product.id, e)}
                      className="absolute top-2 left-2 z-10 w-7 h-7 rounded-full bg-white/90 dark:bg-[#0A1428]/90 text-[#0A1428] dark:text-white flex items-center justify-center backdrop-blur-xs transition-colors shadow-xs"
                      aria-label="Wishlist"
                    >
                      <Heart
                        className={`w-3.5 h-3.5 ${
                          isFavorited ? 'fill-[#D4AF37] text-[#D4AF37]' : 'text-[#0A1428] dark:text-white'
                        }`}
                      />
                    </button>
                  </div>

                  {/* Right Column: Icon + Title + Subtitle + View Details Link */}
                  <div className="col-span-6 flex flex-col justify-between h-full py-1">
                    <div>
                      {/* Blue Rounded Square Icon Box from Reference Design */}
                      <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-3 shadow-sm shadow-blue-600/30">
                        {isSocket ? (
                          <ShieldPlus className="w-5 h-5" />
                        ) : isDual ? (
                          <Layers className="w-5 h-5" />
                        ) : (
                          <Zap className="w-5 h-5" />
                        )}
                      </div>

                      {/* Main Title (1 POLE SWITCH / 2 POLE SWITCH / SOCKET OUTLET) */}
                      <h3 className="text-base sm:text-lg font-black uppercase text-[#0A1428] dark:text-white leading-tight">
                        {displayTitle}
                      </h3>

                      {/* Sub-label */}
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">
                        {displaySubtitle}
                      </p>
                    </div>

                    {/* View Details Link in Blue / Gold */}
                    <div className="pt-3 mt-2 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0A1428] dark:text-[#D4AF37] group-hover:text-[#D4AF37] transition-colors">
                      <span>{isRtl ? 'مشاهده جزئیات' : 'VIEW DETAILS'}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                </div>

                {/* Bottom Bar: Price & Fast Add-To-Bag Action */}
                <div className="pt-3 border-t border-[#E2E8F0] dark:border-[#1E293B] flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
                      {isRtl ? 'قیمت واحد' : 'Official Price'}
                    </span>
                    <span className="font-mono text-sm sm:text-base font-bold text-[#0A1428] dark:text-[#D4AF37]">
                      {product.price} AFN
                    </span>
                  </div>

                  <button
                    onClick={(e) => handleAdd(product, e)}
                    className={`py-2 px-3.5 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer ${
                      isAdded
                        ? 'bg-[#0A1428] text-[#D4AF37] border border-[#D4AF37]'
                        : 'btn-gold shadow-sm'
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>{isRtl ? 'افزوده شد' : 'Added'}</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-3.5 h-3.5 text-[#0A1428]" />
                        <span>{isRtl ? 'خرید' : 'Add to Bag'}</span>
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
              {isRtl ? 'استانداردهای مهندسی روشنا' : 'Roshna Engineering Standards'}
            </span>
            <h3 className="font-serif-heading text-xl sm:text-2xl text-[#0A1128] dark:text-white">
              {isRtl
                ? '۷ ویژگی ممتاز کلید و پریزهای ساختمانی روشنا'
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
