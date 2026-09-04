import React, { useState } from 'react';
import { X, Star, Check, ShoppingBag, Truck, ShieldCheck, Sparkles } from 'lucide-react';
import { Product } from '../types';

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
  if (!product) return null;

  const [selectedColor, setSelectedColor] = useState(product.colorOptions[0].name);
  const [selectedImage, setSelectedImage] = useState(product.image);
  const [isAdded, setIsAdded] = useState(false);

  const handleAdd = () => {
    onAddToCart(product, selectedColor);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 animate-fadeIn">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity" 
        onClick={onClose} 
      />

      {/* Modal Content Container */}
      <div className="relative bg-[#FFFFFF] dark:bg-[#0F1B3D] rounded-[28px] max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#E5E1D8] dark:border-[#1D2B52] z-10 grid grid-cols-1 md:grid-cols-12 overflow-hidden transition-colors">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-[#FFFFFF] dark:bg-[#0B132B] border border-[#E5E1D8] dark:border-[#1D2B52] text-[#1F2421] dark:text-[#F7F5F0] hover:text-[#C5A059] flex items-center justify-center shadow-md transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* LEFT COLUMN: Gallery View */}
        <div className="md:col-span-6 bg-[#F7F5F0] dark:bg-[#060B18] p-6 sm:p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#E5E1D8] dark:border-[#1D2B52]">
          <div className="relative aspect-[4/4] rounded-2xl overflow-hidden bg-[#FFFFFF] dark:bg-[#0B132B] shadow-sm border border-[#E5E1D8] dark:border-[#1D2B52]">
            <img
              src={selectedImage}
              alt={product.name}
              className="w-full h-full object-cover object-center"
            />
            {product.badge && (
              <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-[#0B132B]/90 text-[#C5A059] text-[10px] uppercase font-semibold tracking-wider backdrop-blur-xs border border-[#C5A059]/30">
                {product.badge}
              </span>
            )}
          </div>

          {/* Gallery Thumbnails */}
          {product.gallery && product.gallery.length > 0 && (
            <div className="flex items-center gap-3 mt-4 overflow-x-auto pb-1">
              {[product.image, ...product.gallery].map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className={`w-16 h-16 rounded-xl overflow-hidden border-2 transition-all shrink-0 ${
                    selectedImage === img
                      ? 'border-[#C5A059] ring-2 ring-[#C5A059]/30'
                      : 'border-[#E5E1D8] dark:border-[#1D2B52] opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT COLUMN: Product Specs & CTAs */}
        <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6">
          
          <div className="space-y-4">
            {/* Collection Subtitle */}
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C5A059]">
                {product.collection}
              </span>
              <div className="flex items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-[#C5A059] text-[#C5A059]" />
                <span className="text-xs font-semibold text-[#1F2421]">{product.rating}</span>
                <span className="text-xs text-neutral-400">({product.reviewCount})</span>
              </div>
            </div>

            {/* Product Title */}
            <h2 className="font-serif-heading text-2xl sm:text-3xl font-medium text-[#1F2421] dark:text-[#F7F5F0] tracking-tight">
              {product.name}
            </h2>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="font-serif-heading text-2xl sm:text-3xl font-semibold text-[#1F2421] dark:text-[#F7F5F0]">
                ${product.price.toLocaleString()} USD
              </span>
              {product.originalPrice && (
                <span className="text-sm line-through text-neutral-400 font-sans-body">
                  ${product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>

            {/* Editorial Description */}
            <p className="text-xs sm:text-sm text-[#1F2421]/75 dark:text-[#F7F5F0]/75 font-sans-body font-light leading-relaxed">
              {product.description}
            </p>

            {/* Color Selector */}
            <div className="space-y-2 pt-2">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#1F2421] dark:text-[#F7F5F0]">
                Finish / Material: <strong className="text-[#C5A059]">{selectedColor}</strong>
              </span>
              <div className="flex items-center space-x-3">
                {product.colorOptions.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs transition-all cursor-pointer ${
                      selectedColor === color.name
                        ? 'border-[#C5A059] bg-[#F7F5F0] dark:bg-[#13224A] font-bold text-[#0B132B] dark:text-[#C5A059]'
                        : 'border-[#E5E1D8] dark:border-[#1D2B52] bg-transparent text-[#1F2421]/70 dark:text-[#F7F5F0]/70 hover:bg-[#F7F5F0] dark:hover:bg-[#0B132B]'
                    }`}
                  >
                    <span
                      className="w-3.5 h-3.5 rounded-full border border-neutral-300"
                      style={{ backgroundColor: color.hex }}
                    />
                    <span>{color.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div className="space-y-1.5 pt-1">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#1F2421] dark:text-[#F7F5F0]">
                Engineering Specifications:
              </span>
              <ul className="space-y-1 text-xs text-[#1F2421]/80 dark:text-[#F7F5F0]/80">
                {product.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Bottom Actions */}
          <div className="space-y-3 pt-4 border-t border-[#E5E1D8] dark:border-[#1D2B52]">
            <button
              onClick={handleAdd}
              className={`w-full py-4 px-6 rounded-full text-xs uppercase font-bold tracking-wider flex items-center justify-center gap-2 transition-all duration-300 shadow-md cursor-pointer ${
                isAdded
                  ? 'bg-[#0B132B] text-[#C5A059] border border-[#C5A059]'
                  : 'btn-gold-gradient'
              }`}
            >
              {isAdded ? (
                <>
                  <Check className="w-4 h-4 text-[#C5A059]" />
                  <span>Added to Shopping Bag</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4 text-[#0B132B]" />
                  <span>Add to Bag — ${product.price.toLocaleString()}</span>
                </>
              )}
            </button>

            <div className="flex items-center justify-center gap-6 text-[11px] text-neutral-500 font-sans-body">
              <span className="flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>White-Glove Insured Delivery</span>
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Lifetime Guarantee</span>
              </span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
