import React, { useState, useEffect } from 'react';
import { X, Check, ShoppingBag, CheckCircle2, Zap, SlidersHorizontal, Gem } from 'lucide-react';
import { Product } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface ProductQuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, selectedColor: string) => void;
}

export const ProductQuickViewModal: React.FC<ProductQuickViewModalProps> = ({
  product,
  onClose,
  onAddToCart
}) => {
  const { t, isRtl } = useLanguage();

  const [selectedImage, setSelectedImage] = useState<string>('');
  const [isAdded, setIsAdded] = useState(false);

  // Sync state whenever the active product opens
  useEffect(() => {
    if (product) {
      setSelectedImage(product.image);
      setIsAdded(false);
    }
  }, [product]);

  if (!product) return null;

  const localizedProduct = t.showcase.products?.find((p) => p.id === product.id);
  const productName = localizedProduct?.name || product.name;
  const productSubtitle = localizedProduct?.subtitle || product.subtitle;
  const productDescription = localizedProduct?.description || product.description;
  const productFeatures = localizedProduct?.features || product.features || [];
  const isSocket = product.id === 'roshna-soc-01';

  const handleAdd = () => {
    onAddToCart(product, product.colorOptions[0]?.name || 'Pure Matte White');
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-fadeIn select-none">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity" 
        onClick={onClose} 
      />

      {/* Modal Container */}
      <div 
        dir={isRtl ? 'rtl' : 'ltr'}
        className="relative bg-white dark:bg-[#0E1838] rounded-[24px] max-w-2xl w-full shadow-2xl border border-[#E2E8F0] dark:border-[#1E293B] z-10 grid grid-cols-1 md:grid-cols-2 overflow-hidden transition-colors max-h-[90vh] overflow-y-auto"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 rtl:right-auto rtl:left-4 z-20 w-9 h-9 rounded-full bg-white/90 dark:bg-[#0A1128]/90 border border-[#E2E8F0] dark:border-[#1E293B] text-[#0A1128] dark:text-white hover:text-[#D4AF37] flex items-center justify-center shadow-xs transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Product Visual Column */}
        <div className="bg-[#F8FAFC] dark:bg-[#050814] p-6 flex flex-col justify-center items-center border-b md:border-b-0 md:border-r rtl:md:border-r-0 rtl:md:border-l border-[#E2E8F0] dark:border-[#1E293B]">
          <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-white dark:bg-[#0A1128] shadow-xs border border-[#E2E8F0] dark:border-[#1E293B]">
            <img
              src={selectedImage || product.image}
              alt={productName}
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Minimal Thumbnails */}
          {product.gallery && product.gallery.length > 0 && (
            <div className="flex items-center gap-2 mt-3 overflow-x-auto max-w-full pb-1">
              {[product.image, ...product.gallery.slice(0, 3)].map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className={`w-12 h-12 rounded-xl overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
                    (selectedImage || product.image) === img
                      ? 'border-[#D4AF37] ring-2 ring-[#D4AF37]/30'
                      : 'border-[#E2E8F0] dark:border-[#1E293B] opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Details Column */}
        <div className="p-6 sm:p-7 flex flex-col justify-between text-left rtl:text-right space-y-4">
          <div className="space-y-3">
            {/* Category / Subtitle */}
            <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#D4AF37] block">
              {productSubtitle}
            </span>

            {/* Product Title */}
            <h2 className="font-serif-heading text-2xl sm:text-3xl font-medium text-[#0A1128] dark:text-white tracking-tight leading-snug">
              {productName}
            </h2>

            {/* Flyer Micro-Specs Grid */}
            <div className="grid grid-cols-3 gap-1 py-2 px-1 rounded-xl bg-[#F8FAFC] dark:bg-[#050814] border border-[#E2E8F0] dark:border-[#1E293B] text-center my-2">
              <div className="px-1 border-r border-[#E2E8F0] dark:border-[#1E293B] rtl:border-r-0 rtl:border-l">
                <Zap className="w-3.5 h-3.5 text-[#D4AF37] mx-auto mb-0.5" />
                <p className="text-[10px] font-bold text-[#0A1128] dark:text-white font-mono leading-tight">
                  {isSocket ? '16 A' : '10 A'}
                </p>
                <p className="text-[9px] text-slate-400 leading-tight">250 V~</p>
              </div>

              <div className="px-1 border-r border-[#E2E8F0] dark:border-[#1E293B] rtl:border-r-0 rtl:border-l">
                <SlidersHorizontal className="w-3.5 h-3.5 text-[#D4AF37] mx-auto mb-0.5" />
                <p className="text-[10px] font-bold text-[#0A1128] dark:text-white leading-tight">Ultra Thin</p>
                <p className="text-[9px] text-slate-400 leading-tight">بسیار نازک</p>
              </div>

              <div className="px-1">
                <Gem className="w-3.5 h-3.5 text-[#D4AF37] mx-auto mb-0.5" />
                <p className="text-[10px] font-bold text-[#0A1128] dark:text-white leading-tight">Luxury Design</p>
                <p className="text-[9px] text-slate-400 leading-tight">طراحی لوکس</p>
              </div>
            </div>

            {/* Price Banner */}
            <div className="rounded-xl overflow-hidden bg-[#0A1128] text-white flex items-stretch border border-[#D4AF37]/40 shadow-xs">
              <div className="w-2 bg-[#D4AF37]" />
              <div className="flex-1 py-2 px-3 flex items-center justify-between">
                <span className="font-mono text-base font-bold text-[#D4AF37] tracking-wider">
                  AFN {product.price === 90.01 ? '90.01' : product.price}
                </span>
                <span className="text-[11px] text-slate-300 font-sans-body">
                  {product.price === 90.01 ? '۹۰.۰۱' : product.price} {isRtl ? 'افغانی' : 'AFN'}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-xs font-sans-body text-slate-600 dark:text-slate-300 leading-relaxed">
              {productDescription}
            </p>

            {/* Features List */}
            {productFeatures.length > 0 && (
              <div className="pt-2 space-y-1.5">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-[#D4AF37] block">
                  {isRtl ? 'ویژگی‌های کلیدی:' : 'Key Features:'}
                </span>
                <ul className="space-y-1 text-xs text-slate-700 dark:text-slate-300 font-sans-body">
                  {productFeatures.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Add to Bag Button */}
          <div className="pt-3 border-t border-[#E2E8F0] dark:border-[#1E293B]">
            <button
              onClick={handleAdd}
              className={`w-full py-3.5 px-6 rounded-full text-xs uppercase font-bold tracking-wider flex items-center justify-center gap-2 transition-all duration-300 shadow-md cursor-pointer ${
                isAdded
                  ? 'bg-[#0A1128] text-[#D4AF37] border border-[#D4AF37]'
                  : 'btn-gold-gradient text-[#0A1128]'
              }`}
            >
              {isAdded ? (
                <>
                  <Check className="w-4 h-4 text-[#D4AF37]" />
                  <span>{t.showcase.addedToBag}</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4 text-[#0A1128]" />
                  <span>{t.showcase.addToBag} — {product.price === 90.01 ? '90.01' : product.price.toLocaleString()} {isRtl ? 'افغانی' : 'AFN'}</span>
                </>
              )}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
