import React, { useState } from 'react';
import { ShoppingBag, Eye, Heart, Check, Star, Sparkles } from 'lucide-react';
import { Product } from '../types';
import { useLanguage } from '../context/LanguageContext';

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
  const [selectedColors, setSelectedColors] = useState<{ [productId: string]: string }>({});
  const [addedProductId, setAddedProductId] = useState<string | null>(null);
  const [wishlist, setWishlist] = useState<string[]>([]);

  const categoryOptions = [
    { key: 'all', label: t.showcase.categories.all },
    { key: 'switches', label: t.showcase.categories.switches },
    { key: 'sockets', label: t.showcase.categories.sockets },
    { key: 'modular', label: t.showcase.categories.modular }
  ];

  const filteredProducts = activeCategoryKey === 'all'
    ? products
    : products.filter(p => {
        if (activeCategoryKey === 'switches') return p.category.toLowerCase().includes('switch');
        if (activeCategoryKey === 'sockets') return p.category.toLowerCase().includes('socket');
        if (activeCategoryKey === 'modular') return p.category.toLowerCase().includes('modular') || p.category.toLowerCase().includes('suite');
        return true;
      });

  const handleColorSelect = (productId: string, colorName: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedColors(prev => ({ ...prev, [productId]: colorName }));
  };

  const handleAdd = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    const currentColor = selectedColors[product.id] || product.colorOptions[0].name;
    onAddToCart(product, currentColor);
    setAddedProductId(product.id);
    setTimeout(() => {
      setAddedProductId(null);
    }, 1800);
  };

  const toggleWishlist = (productId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setWishlist(prev =>
      prev.includes(productId) ? prev.filter(id => id !== productId) : [...prev, productId]
    );
  };

  return (
    <section id="collection" className="py-6 sm:py-8 lg:py-10 bg-[#F7F5F0] dark:bg-[#0B132B] border-b border-[#E5E1D8] dark:border-[#1D2B52] transition-colors duration-300 select-none">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 gap-4 sm:gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFFFFF] dark:bg-[#0F1B3D] border border-[#C5A059]/40 text-[#C5A059] text-[11px] uppercase tracking-[0.2em] font-semibold mb-2.5 shadow-xs">
              <Sparkles className="w-3 h-3 text-[#C5A059]" />
              <span>{t.showcase.badge}</span>
            </div>
            <h2 className="font-serif-heading text-2xl sm:text-4xl md:text-5xl font-normal text-[#1F2421] dark:text-[#F7F5F0] tracking-tight">
              {t.showcase.titlePart1} <br />
              <span className="italic font-serif-heading text-[#C5A059]">{t.showcase.titlePart2}</span>
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
                    ? 'bg-[#0B132B] text-[#C5A059] font-bold shadow-xs border border-[#C5A059]/40'
                    : 'bg-[#FFFFFF] dark:bg-[#0F1B3D] text-[#1F2421]/70 dark:text-[#F7F5F0]/70 hover:text-[#C5A059] dark:hover:text-[#C5A059] hover:bg-[#F7F5F0] dark:hover:bg-[#13224A] border border-[#E5E1D8] dark:border-[#1D2B52]'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetrical Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredProducts.map((product, index) => {
            const isFeatured = index === 0 || index === 4;
            const currentColor = selectedColors[product.id] || product.colorOptions[0].name;
            const isAdded = addedProductId === product.id;
            const isFavorited = wishlist.includes(product.id);

            return (
              <div
                key={product.id}
                onClick={() => onQuickView(product)}
                className={`group cursor-pointer flex flex-col justify-between bg-[#FFFFFF] dark:bg-[#0F1B3D] rounded-[22px] p-3.5 sm:p-4.5 border border-[#E5E1D8] dark:border-[#1D2B52] shadow-xs hover:shadow-xl hover:border-[#C5A059] dark:hover:border-[#C5A059] transition-all duration-500 relative overflow-hidden ${
                  isFeatured ? 'md:col-span-2 lg:col-span-1 ring-1 ring-[#C5A059]/20' : ''
                }`}
              >
                {/* Top Image Container */}
                <div className="relative aspect-[4/4.2] w-full rounded-[16px] overflow-hidden bg-[#F7F5F0] dark:bg-[#060B18] mb-3.5 border border-[#E5E1D8]/60 dark:border-[#1D2B52]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Badge */}
                  {product.badge && (
                    <div className="absolute top-3 left-3 z-10">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#0B132B]/90 backdrop-blur-md text-[#C5A059] text-[10px] uppercase font-sans-body font-bold tracking-wider shadow-xs border border-[#C5A059]/30">
                        {product.badge}
                      </span>
                    </div>
                  )}

                  {/* Wishlist Button */}
                  <button
                    onClick={(e) => toggleWishlist(product.id, e)}
                    className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-[#FFFFFF]/90 dark:bg-[#0B132B]/90 hover:bg-[#FFFFFF] dark:hover:bg-[#0B132B] text-[#1F2421] dark:text-[#F7F5F0] flex items-center justify-center backdrop-blur-xs transition-colors shadow-xs border border-[#E5E1D8] dark:border-[#1D2B52]"
                    aria-label="Wishlist"
                  >
                    <Heart
                      className={`w-3.5 h-3.5 ${
                        isFavorited ? 'fill-[#C5A059] text-[#C5A059]' : 'text-[#1F2421] dark:text-[#F7F5F0]'
                      }`}
                    />
                  </button>

                  {/* Hover Quick Action Tray */}
                  <div className="absolute inset-x-2.5 bottom-2.5 flex items-center gap-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 z-10">
                    <button
                      onClick={(e) => handleAdd(product, e)}
                      className={`flex-1 py-2.5 px-3.5 rounded-xl text-xs font-sans-body font-semibold flex items-center justify-center gap-2 shadow-lg transition-all ${
                        isAdded
                          ? 'bg-[#0B132B] text-[#C5A059] border border-[#C5A059]'
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
                          <ShoppingBag className="w-3.5 h-3.5 text-[#0B132B]" />
                          <span>{t.showcase.addToBag}</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onQuickView(product);
                      }}
                      className="p-2.5 rounded-xl bg-[#FFFFFF] dark:bg-[#0B132B] text-[#1F2421] dark:text-[#F7F5F0] hover:text-[#C5A059] dark:hover:text-[#C5A059] shadow-lg transition-colors border border-[#E5E1D8] dark:border-[#1D2B52]"
                      title={t.showcase.quickSpecs}
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Card Content & Clean Typography */}
                <div className="space-y-2">
                  
                  {/* Category & Rating */}
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[10px] uppercase tracking-[0.15em] font-semibold text-[#C5A059]">
                      {product.collection}
                    </span>
                    <div className="flex items-center gap-1 text-[#1F2421] dark:text-[#F7F5F0]">
                      <Star className="w-3 h-3 fill-[#C5A059] text-[#C5A059]" />
                      <span className="font-semibold text-xs">{product.rating}</span>
                      <span className="text-neutral-400 text-[11px]">({product.reviewCount})</span>
                    </div>
                  </div>

                  {/* Product Title */}
                  <h3 className="font-serif-heading text-lg sm:text-xl font-medium text-[#1F2421] dark:text-[#F7F5F0] group-hover:text-[#C5A059] transition-colors leading-snug">
                    {product.name}
                  </h3>

                  <p className="text-xs text-[#1F2421]/65 dark:text-[#F7F5F0]/65 font-sans-body line-clamp-1">
                    {product.subtitle}
                  </p>

                  {/* Color Swatch Selector */}
                  <div className="flex items-center justify-between pt-1.5">
                    <div className="flex items-center space-x-1.5">
                      {product.colorOptions.map((color) => (
                        <button
                          key={color.name}
                          onClick={(e) => handleColorSelect(product.id, color.name, e)}
                          title={color.name}
                          className={`w-4.5 h-4.5 rounded-full border transition-all ${
                            currentColor === color.name
                              ? 'ring-2 ring-[#C5A059] ring-offset-2 ring-offset-[#FFFFFF] dark:ring-offset-[#0F1B3D] scale-110'
                              : 'border-neutral-300 hover:scale-105'
                          }`}
                          style={{ backgroundColor: color.hex }}
                        />
                      ))}
                    </div>

                    {/* Price with optional original price strike */}
                    <div className="text-right rtl:text-left">
                      <div className="flex items-baseline gap-1.5">
                        {product.originalPrice && (
                          <span className="text-xs line-through text-neutral-400 font-sans-body">
                            {product.originalPrice.toLocaleString()} {isRtl ? 'افغانی' : 'AFN'}
                          </span>
                        )}
                        <span className="font-serif-heading text-base sm:text-lg font-semibold text-[#1F2421] dark:text-[#F7F5F0]">
                          {product.price.toLocaleString()} {isRtl ? 'افغانی' : 'AFN'}
                        </span>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Bespoke Commission Banner (Deep Navy #0B132B with Warm Gold Border & CTA) */}
        <div className="mt-6 sm:mt-8 p-5 sm:p-6 lg:p-7 rounded-[22px] bg-[#0B132B] text-white border border-[#C5A059]/30 shadow-xl flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#060B18] border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059] shadow-xs shrink-0">
              <Sparkles className="w-5 h-5 text-[#C5A059]" />
            </div>
            <div>
              <h4 className="font-serif-heading text-lg sm:text-xl font-medium text-[#F7F5F0]">
                {t.showcase.consultationTitle}
              </h4>
              <p className="text-xs sm:text-sm text-neutral-300 font-sans-body mt-0.5">
                {t.showcase.consultationDesc}
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              const faqSection = document.getElementById('faq');
              faqSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-5 py-3 rounded-full btn-gold-gradient text-xs uppercase font-bold tracking-wider shrink-0 cursor-pointer whitespace-nowrap"
          >
            {t.showcase.consultationButton}
          </button>
        </div>

      </div>
    </section>
  );
};
