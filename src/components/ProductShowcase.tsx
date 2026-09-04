import React, { useState } from 'react';
import { ShoppingBag, Eye, Heart, Check, Star, Sparkles } from 'lucide-react';
import { Product } from '../types';

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
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedColors, setSelectedColors] = useState<{ [productId: string]: string }>({});
  const [addedProductId, setAddedProductId] = useState<string | null>(null);
  const [wishlist, setWishlist] = useState<string[]>([]);

  const categories = ['All', 'Tactile Switches', 'Architectural Sockets', 'Modular Units'];

  const filteredProducts = activeCategory === 'All'
    ? products
    : products.filter(p => {
        if (activeCategory === 'Tactile Switches') return p.category.toLowerCase().includes('switch');
        if (activeCategory === 'Architectural Sockets') return p.category.toLowerCase().includes('socket');
        if (activeCategory === 'Modular Units') return p.category.toLowerCase().includes('modular') || p.category.toLowerCase().includes('suite');
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
    <section id="collection" className="py-20 lg:py-28 bg-[#F7F5F0] dark:bg-[#0B132B] border-b border-[#E5E1D8] dark:border-[#1D2B52] transition-colors duration-300 select-none">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFFFFF] dark:bg-[#0F1B3D] border border-[#C5A059]/40 text-[#C5A059] text-[11px] uppercase tracking-[0.2em] font-semibold mb-3 shadow-xs">
              <Sparkles className="w-3 h-3 text-[#C5A059]" />
              <span>Curated Selection</span>
            </div>
            <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl font-normal text-[#1F2421] dark:text-[#F7F5F0] tracking-tight">
              Product Showcase <br />
              <span className="italic font-serif-heading text-[#C5A059]">The Luxe Collection</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-xs font-sans-body transition-all duration-200 cursor-pointer ${
                  activeCategory === category
                    ? 'bg-[#0B132B] text-[#C5A059] font-bold shadow-xs border border-[#C5A059]/40'
                    : 'bg-[#FFFFFF] dark:bg-[#0F1B3D] text-[#1F2421]/70 dark:text-[#F7F5F0]/70 hover:text-[#C5A059] dark:hover:text-[#C5A059] hover:bg-[#F7F5F0] dark:hover:bg-[#13224A] border border-[#E5E1D8] dark:border-[#1D2B52]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetrical Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {filteredProducts.map((product, index) => {
            const isFeatured = index === 0 || index === 4;
            const currentColor = selectedColors[product.id] || product.colorOptions[0].name;
            const isAdded = addedProductId === product.id;
            const isFavorited = wishlist.includes(product.id);

            return (
              <div
                key={product.id}
                onClick={() => onQuickView(product)}
                className={`group cursor-pointer flex flex-col justify-between bg-[#FFFFFF] dark:bg-[#0F1B3D] rounded-[24px] p-4 sm:p-5 border border-[#E5E1D8] dark:border-[#1D2B52] shadow-xs hover:shadow-xl hover:border-[#C5A059] dark:hover:border-[#C5A059] transition-all duration-500 relative overflow-hidden ${
                  isFeatured ? 'md:col-span-2 lg:col-span-1 ring-1 ring-[#C5A059]/20' : ''
                }`}
              >
                {/* Top Image Container */}
                <div className="relative aspect-[4/4.2] w-full rounded-[18px] overflow-hidden bg-[#F7F5F0] dark:bg-[#060B18] mb-5 border border-[#E5E1D8]/60 dark:border-[#1D2B52]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Badge */}
                  {product.badge && (
                    <div className="absolute top-3.5 left-3.5 z-10">
                      <span className="px-3 py-1 rounded-full bg-[#0B132B]/90 backdrop-blur-md text-[#C5A059] text-[10px] uppercase font-sans-body font-bold tracking-wider shadow-xs border border-[#C5A059]/30">
                        {product.badge}
                      </span>
                    </div>
                  )}

                  {/* Wishlist Button */}
                  <button
                    onClick={(e) => toggleWishlist(product.id, e)}
                    className="absolute top-3.5 right-3.5 z-10 w-9 h-9 rounded-full bg-[#FFFFFF]/90 dark:bg-[#0B132B]/90 hover:bg-[#FFFFFF] dark:hover:bg-[#0B132B] text-[#1F2421] dark:text-[#F7F5F0] flex items-center justify-center backdrop-blur-xs transition-colors shadow-xs border border-[#E5E1D8] dark:border-[#1D2B52]"
                    aria-label="Wishlist"
                  >
                    <Heart
                      className={`w-4 h-4 ${
                        isFavorited ? 'fill-[#C5A059] text-[#C5A059]' : 'text-[#1F2421] dark:text-[#F7F5F0]'
                      }`}
                    />
                  </button>

                  {/* Hover Quick Action Tray */}
                  <div className="absolute inset-x-3 bottom-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 z-10">
                    <button
                      onClick={(e) => handleAdd(product, e)}
                      className={`flex-1 py-3 px-4 rounded-xl text-xs font-sans-body font-semibold flex items-center justify-center gap-2 shadow-lg transition-all ${
                        isAdded
                          ? 'bg-[#0B132B] text-[#C5A059] border border-[#C5A059]'
                          : 'btn-gold-gradient'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Added to Bag</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-3.5 h-3.5 text-[#0B132B]" />
                          <span>Add to Bag</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onQuickView(product);
                      }}
                      className="p-3 rounded-xl bg-[#FFFFFF] dark:bg-[#0B132B] text-[#1F2421] dark:text-[#F7F5F0] hover:text-[#C5A059] dark:hover:text-[#C5A059] shadow-lg transition-colors border border-[#E5E1D8] dark:border-[#1D2B52]"
                      title="Quick Specs"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Card Content & Clean Typography */}
                <div className="space-y-3">
                  
                  {/* Category & Rating */}
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[11px] uppercase tracking-[0.15em] font-semibold text-[#C5A059]">
                      {product.collection}
                    </span>
                    <div className="flex items-center gap-1 text-[#1F2421] dark:text-[#F7F5F0]">
                      <Star className="w-3 h-3 fill-[#C5A059] text-[#C5A059]" />
                      <span className="font-semibold text-xs">{product.rating}</span>
                      <span className="text-neutral-400 text-[11px]">({product.reviewCount})</span>
                    </div>
                  </div>

                  {/* Product Title */}
                  <h3 className="font-serif-heading text-xl sm:text-2xl font-medium text-[#1F2421] dark:text-[#F7F5F0] group-hover:text-[#C5A059] transition-colors leading-snug">
                    {product.name}
                  </h3>

                  <p className="text-xs text-[#1F2421]/65 dark:text-[#F7F5F0]/65 font-sans-body line-clamp-1">
                    {product.subtitle}
                  </p>

                  {/* Color Swatch Selector */}
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center space-x-2">
                      {product.colorOptions.map((color) => (
                        <button
                          key={color.name}
                          onClick={(e) => handleColorSelect(product.id, color.name, e)}
                          title={color.name}
                          className={`w-5 h-5 rounded-full border transition-all ${
                            currentColor === color.name
                              ? 'ring-2 ring-[#C5A059] ring-offset-2 ring-offset-[#FFFFFF] dark:ring-offset-[#0F1B3D] scale-110'
                              : 'border-neutral-300 hover:scale-105'
                          }`}
                          style={{ backgroundColor: color.hex }}
                        />
                      ))}
                    </div>

                    {/* Price with optional original price strike */}
                    <div className="text-right">
                      <div className="flex items-baseline gap-2">
                        {product.originalPrice && (
                          <span className="text-xs line-through text-neutral-400 font-sans-body">
                            ${product.originalPrice.toLocaleString()}
                          </span>
                        )}
                        <span className="font-serif-heading text-lg font-semibold text-[#1F2421] dark:text-[#F7F5F0]">
                          ${product.price.toLocaleString()}
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
        <div className="mt-16 p-8 rounded-[24px] bg-[#0B132B] text-white border border-[#C5A059]/30 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#060B18] border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059] shadow-xs">
              <Sparkles className="w-6 h-6 text-[#C5A059]" />
            </div>
            <div>
              <h4 className="font-serif-heading text-xl font-medium text-[#F7F5F0]">
                Need Architectural Multi-Gang Assemblies or Trade Specification?
              </h4>
              <p className="text-xs sm:text-sm text-neutral-300 font-sans-body">
                Our Milan and Copenhagen studios provide BIM models, custom finishes, and trade sample archive kits.
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              const faqSection = document.getElementById('faq');
              faqSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-6 py-3.5 rounded-full btn-gold-gradient text-xs uppercase font-bold tracking-wider shrink-0 cursor-pointer"
          >
            Request Atelier Consultation
          </button>
        </div>

      </div>
    </section>
  );
};
