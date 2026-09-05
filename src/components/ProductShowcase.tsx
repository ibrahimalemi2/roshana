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
  HeartHandshake
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
      className="py-10 sm:py-14 lg:py-16 bg-[#F8FAFC] dark:bg-[#0A1128] border-b border-[#E2E8F0] dark:border-[#1E293B] transition-colors duration-300 select-none"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4 sm:gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white dark:bg-[#0E1838] border border-[#D4AF37]/40 text-[#D4AF37] text-[11px] uppercase tracking-[0.2em] font-semibold mb-2.5 shadow-xs">
              <Sparkles className="w-3 h-3 text-[#D4AF37]" />
              <span>{t.showcase.badge}</span>
            </div>
            <h2 className="font-serif-heading text-2xl sm:text-4xl md:text-5xl font-normal text-[#0A1128] dark:text-white tracking-tight">
              {t.showcase.titlePart1} <br />
              <span className="italic font-serif-heading text-[#D4AF37]">
                {t.showcase.titlePart2}
              </span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categoryOptions.map((category) => (
              <button
                key={category.key}
                onClick={() => setActiveCategoryKey(category.key)}
                className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-sans-body transition-all duration-200 cursor-pointer ${
                  activeCategoryKey === category.key
                    ? 'bg-[#0A1128] text-[#D4AF37] font-bold shadow-xs border border-[#D4AF37]/40'
                    : 'bg-white dark:bg-[#0E1838] text-slate-700 dark:text-slate-300 hover:text-[#D4AF37] dark:hover:text-[#D4AF37] hover:bg-[#F8FAFC] dark:hover:bg-[#14224D] border border-[#E2E8F0] dark:border-[#1E293B]'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3 Core Products Grid (Matching Flyer Layout & Technical Specs) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
          {filteredProducts.map((product) => {
            const isAdded = addedProductId === product.id;
            const isFavorited = wishlist.includes(product.id);
            const localizedProduct = t.showcase.products?.find((p) => p.id === product.id);
            const productName = localizedProduct?.name || product.name;
            const productSubtitle = localizedProduct?.subtitle || product.subtitle;
            const isSocket = product.id === 'roshna-soc-01';

            return (
              <div
                key={product.id}
                onClick={() => onQuickView(product)}
                className="group cursor-pointer flex flex-col justify-between bg-white dark:bg-[#0E1838] rounded-2xl sm:rounded-[24px] p-5 sm:p-6 border border-[#E2E8F0] dark:border-[#1E293B] shadow-sm hover:shadow-xl hover:border-[#D4AF37] dark:hover:border-[#D4AF37] transition-all duration-300 relative overflow-hidden"
              >
                <div>
                  {/* Flyer Top Header: Technical Model & Dari Name */}
                  <div className="text-center pb-3 border-b border-[#E2E8F0]/60 dark:border-[#1E293B]/60 mb-4">
                    <span className="font-mono text-sm sm:text-base font-bold tracking-wider text-[#D4AF37] block uppercase">
                      {product.modelCode || productName}
                    </span>
                    <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans-body block mt-0.5">
                      {productSubtitle}
                    </span>
                  </div>

                  {/* Product Image Window */}
                  <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-[#F8FAFC] dark:bg-[#050814] mb-4 border border-[#E2E8F0]/70 dark:border-[#1E293B]">
                    <img
                      src={product.image}
                      alt={productName}
                      className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />

                    {/* Wishlist Button */}
                    <button
                      onClick={(e) => toggleWishlist(product.id, e)}
                      className="absolute top-3 right-3 rtl:right-auto rtl:left-3 z-10 w-8 h-8 rounded-full bg-white/90 dark:bg-[#0A1128]/90 hover:bg-white dark:hover:bg-[#0A1128] text-[#0A1128] dark:text-white flex items-center justify-center backdrop-blur-xs transition-colors shadow-xs border border-[#E2E8F0] dark:border-[#1E293B]"
                      aria-label="Wishlist"
                    >
                      <Heart
                        className={`w-3.5 h-3.5 ${
                          isFavorited
                            ? 'fill-[#D4AF37] text-[#D4AF37]'
                            : 'text-[#0A1128] dark:text-white'
                        }`}
                      />
                    </button>

                    {/* Hover Quick Action Tray */}
                    <div className="absolute inset-x-3 bottom-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 z-10">
                      <button
                        onClick={(e) => handleAdd(product, e)}
                        className={`flex-1 py-2.5 px-3.5 rounded-xl text-xs font-sans-body font-semibold flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer ${
                          isAdded
                            ? 'bg-[#0A1128] text-[#D4AF37] border border-[#D4AF37]'
                            : 'btn-gold-gradient'
                        }`}
                      >
                        {isAdded ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>{t.showcase.addedToBag}</span>
                          </>
                        ) : (
                          <>
                            <ShoppingBag className="w-3.5 h-3.5 text-[#0A1128]" />
                            <span>{t.showcase.addToBag}</span>
                          </>
                        )}
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onQuickView(product);
                        }}
                        className="p-2.5 rounded-xl bg-white dark:bg-[#0A1128] text-[#0A1128] dark:text-white hover:text-[#D4AF37] dark:hover:text-[#D4AF37] shadow-lg transition-colors border border-[#E2E8F0] dark:border-[#1E293B] cursor-pointer"
                        title={t.showcase.quickSpecs}
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* 3 Micro-Specs Row From Flyer: Electrical Rating | Ultra Thin | Luxury Design */}
                  <div className="grid grid-cols-3 gap-1 py-2.5 px-1.5 rounded-xl bg-[#F8FAFC] dark:bg-[#050814] border border-[#E2E8F0]/70 dark:border-[#1E293B]/70 text-center mb-4">
                    {/* 1. Electrical Power */}
                    <div className="px-1 border-r border-[#E2E8F0] dark:border-[#1E293B] rtl:border-r-0 rtl:border-l">
                      <Zap className="w-4 h-4 text-[#D4AF37] mx-auto mb-1" />
                      <p className="text-[11px] font-bold text-[#0A1128] dark:text-white font-mono leading-tight">
                        {isSocket ? '16 A' : '10 A'}
                      </p>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight">
                        250 V~
                      </p>
                    </div>

                    {/* 2. Profile */}
                    <div className="px-1 border-r border-[#E2E8F0] dark:border-[#1E293B] rtl:border-r-0 rtl:border-l">
                      <SlidersHorizontal className="w-4 h-4 text-[#D4AF37] mx-auto mb-1" />
                      <p className="text-[11px] font-bold text-[#0A1128] dark:text-white leading-tight">
                        Ultra Thin
                      </p>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight">
                        بسیار نازک
                      </p>
                    </div>

                    {/* 3. Luxury Design */}
                    <div className="px-1">
                      <Gem className="w-4 h-4 text-[#D4AF37] mx-auto mb-1" />
                      <p className="text-[11px] font-bold text-[#0A1128] dark:text-white leading-tight">
                        Luxury Design
                      </p>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight">
                        طراحی لوکس
                      </p>
                    </div>
                  </div>
                </div>

                {/* Flyer-Styled Navy Price Banner */}
                <div className="rounded-xl overflow-hidden bg-[#0A1128] text-white flex items-stretch border border-[#D4AF37]/40 shadow-sm group-hover:border-[#D4AF37] transition-all">
                  <div className="w-2.5 bg-[#D4AF37]" />
                  <div className="flex-1 py-2.5 px-4 flex items-center justify-between">
                    <span className="font-mono text-base sm:text-lg font-bold text-[#D4AF37] tracking-wider">
                      AFN {product.price === 90.01 ? '90.01' : product.price}
                    </span>
                    <span className="text-xs text-slate-300 font-sans-body">
                      {product.price === 90.01 ? '۹۰.۰۱' : product.price}{' '}
                      {isRtl ? 'افغانی' : 'AFN'}
                    </span>
                  </div>
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
