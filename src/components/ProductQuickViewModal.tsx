import React, { useState, useEffect } from 'react';
import { X, Check, ShoppingBag, CheckCircle2 } from 'lucide-react';
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

  const handleAdd = () => {
    onAddToCart(product, product.colorOptions[0]?.name || 'Pure Matte White');
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
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
        className="relative bg-[#FFFFFF] dark:bg-[#0F1B3D] rounded-[24px] max-w-2xl w-full shadow-2xl border border-[#E5E1D8] dark:border-[#1D2B52] z-10 grid grid-cols-1 md:grid-cols-2 overflow-hidden transition-colors max-h-[90vh] overflow-y-auto"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 rtl:right-auto rtl:left-4 z-20 w-9 h-9 rounded-full bg-[#FFFFFF]/90 dark:bg-[#0B132B]/90 border border-[#E5E1D8] dark:border-[#1D2B52] text-[#1F2421] dark:text-[#F7F5F0] hover:text-[#C5A059] flex items-center justify-center shadow-xs transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Product Visual Column */}
        <div className="bg-[#F7F5F0] dark:bg-[#060B18] p-6 flex flex-col justify-center items-center border-b md:border-b-0 md:border-r rtl:md:border-r-0 rtl:md:border-l border-[#E5E1D8] dark:border-[#1D2B52]">
          <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-[#FFFFFF] dark:bg-[#0B132B] shadow-xs border border-[#E5E1D8] dark:border-[#1D2B52]">
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
                      ? 'border-[#C5A059] ring-2 ring-[#C5A059]/30'
                      : 'border-[#E5E1D8] dark:border-[#1D2B52] opacity-60 hover:opacity-100'
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
            <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#C5A059] block">
              {productSubtitle}
            </span>

            {/* Product Title */}
            <h2 className="font-serif-heading text-2xl sm:text-3xl font-medium text-[#1F2421] dark:text-[#F7F5F0] tracking-tight leading-snug">
              {productName}
            </h2>

            {/* Price */}
            <div className="font-serif-heading text-2xl sm:text-3xl font-semibold text-[#1F2421] dark:text-[#F7F5F0]">
              {product.price.toLocaleString()} {isRtl ? 'افغانی' : 'AFN'}
            </div>

            {/* Description */}
            <p className="text-xs font-sans-body text-[#1F2421]/75 dark:text-[#F7F5F0]/75 leading-relaxed">
              {productDescription}
            </p>

            {/* Features List */}
            {productFeatures.length > 0 && (
              <div className="pt-2 space-y-1.5">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-[#C5A059] block">
                  {isRtl ? 'ویژگی‌های کلیدی:' : 'Key Features:'}
                </span>
                <ul className="space-y-1 text-xs text-[#1F2421]/80 dark:text-[#F7F5F0]/80 font-sans-body">
                  {productFeatures.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Add to Bag Button */}
          <div className="pt-3 border-t border-[#E5E1D8] dark:border-[#1D2B52]">
            <button
              onClick={handleAdd}
              className={`w-full py-3.5 px-6 rounded-full text-xs uppercase font-bold tracking-wider flex items-center justify-center gap-2 transition-all duration-300 shadow-md cursor-pointer ${
                isAdded
                  ? 'bg-[#0B132B] text-[#C5A059] border border-[#C5A059]'
                  : 'btn-gold-gradient'
              }`}
            >
              {isAdded ? (
                <>
                  <Check className="w-4 h-4 text-[#C5A059]" />
                  <span>{t.showcase.addedToBag}</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4 text-[#0B132B]" />
                  <span>{t.showcase.addToBag} — {product.price.toLocaleString()} {isRtl ? 'افغانی' : 'AFN'}</span>
                </>
              )}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
