import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { BrandMarquee } from './components/BrandMarquee';
import { ProductShowcase } from './components/ProductShowcase';
import { BrandVideoSection } from './components/BrandVideoSection';
import { InteractiveVisualBreak } from './components/InteractiveVisualBreak';
import { ApplicationSpaces } from './components/ApplicationSpaces';
import { ValueProposition } from './components/ValueProposition';
import { MaterialShowcase } from './components/MaterialShowcase';
import { SocialProofStats } from './components/SocialProofStats';
import { FAQSection } from './components/FAQSection';
import { BrandSignOffBanner } from './components/BrandSignOffBanner';
import { NewsletterAndFooter } from './components/NewsletterAndFooter';
import { CartDrawer } from './components/CartDrawer';
import { ProductQuickViewModal } from './components/ProductQuickViewModal';
import { SearchModal } from './components/SearchModal';
import { SplashScreen } from './components/SplashScreen';
import { PRODUCTS } from './data/furnitureData';
import { Product, CartItem } from './types';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Check } from 'lucide-react';

function MainAppContent() {
  const { isDark } = useTheme();
  const { isRtl, t } = useLanguage();
  const [showSplash, setShowSplash] = useState(true);

  const [cart, setCart] = useState<CartItem[]>([
    {
      product: PRODUCTS[0],
      quantity: 1,
      selectedColor: 'Pure Matte White'
    }
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const handleAddToCart = (product: Product, selectedColor: string) => {
    const localizedName = t.showcase.products?.find((p) => p.id === product.id)?.name || product.name;
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex(
        (item) => item.product.id === product.id && item.selectedColor === selectedColor
      );
      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex].quantity += 1;
        return updated;
      } else {
        return [...prevCart, { product, quantity: 1, selectedColor }];
      }
    });
    showToast(isRtl ? `${localizedName} به سبد فرمایشات افزوده شد.` : `Added ${localizedName} to shopping bag.`);
  };

  const handleUpdateQuantity = (productId: string, selectedColor: string, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveItem(productId, selectedColor);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId && item.selectedColor === selectedColor
          ? { ...item, quantity: newQty }
          : item
      )
    );
  };

  const handleRemoveItem = (productId: string, selectedColor: string) => {
    setCart((prev) =>
      prev.filter(
        (item) => !(item.product.id === productId && item.selectedColor === selectedColor)
      )
    );
  };

  const handleCheckout = () => {
    showToast(isRtl ? 'جزئیات فرمایش شما آماده گردید و در واتس‌اپ باز شد.' : 'Your order details have been prepared and opened in WhatsApp.');
    setCart([]);
  };

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`min-h-screen font-sans-body relative selection:bg-[#0A1428] selection:text-[#D4AF37] dark:selection:bg-[#D4AF37] dark:selection:text-[#0A1428] transition-colors duration-300 ${
        isDark ? 'bg-[#0A1428] text-white' : 'bg-[#F8FAFC] text-[#0A1428]'
      }`}
    >
      {/* Brand Splash Screen on initial launch */}
      {showSplash && (
        <SplashScreen
          onComplete={() => setShowSplash(false)}
        />
      )}

      {/* Toast Notification with Roshna Brand Identity */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#0A1428] text-white px-5 py-3.5 rounded-2xl shadow-2xl border border-[#D4AF37]/50 flex items-center gap-3 text-xs sm:text-sm animate-bounce">
          <div className="w-6 h-6 rounded-full bg-[#D4AF37] text-[#0A1428] flex items-center justify-center shrink-0">
            <Check className="w-3.5 h-3.5 stroke-[3]" />
          </div>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Header / Navigation with Top Utility Bar */}
      <Header
        cart={cart}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onReplaySplash={() => setShowSplash(true)}
        onNavigate={handleNavigate}
      />

      {/* Main Content Sections Structured Exactly Matching Reference Flyer */}
      <main>
        {/* 1. Hero Section: Powering A Brighter Tomorrow */}
        <HeroSection
          products={PRODUCTS}
          onExploreClick={() => handleNavigate('collection')}
          onQuickView={(p) => setQuickViewProduct(p)}
        />

        {/* Brand Infinite Ticker Marquee */}
        <BrandMarquee />

        {/* 2. Product Showcase Grids: Our Products - Premium Switches & Sockets */}
        <ProductShowcase
          products={PRODUCTS}
          onAddToCart={handleAddToCart}
          onQuickView={(p) => setQuickViewProduct(p)}
        />

        {/* 3. D8 Series Video Presentation & Technical Installation Guide */}
        <BrandVideoSection />

        {/* 4. Advanced Technology & Core Design Elements: Quality in Every Detail */}
        <InteractiveVisualBreak />

        {/* 4. Perfect For Every Space: Made For Modern Living (Home, Office, Hotel, Commercial) */}
        <ApplicationSpaces />

        {/* 5. Value Proposition Grid: Architecture Principles */}
        <ValueProposition />

        {/* 6. Material Showcase: Raw Minerals & Organic Textures */}
        <MaterialShowcase />

        {/* 7. Social Proof & Reviews: Testimonials & 4-Column Metric Stats */}
        <SocialProofStats />

        {/* 8. FAQ & Atelier Concierge Inquiries */}
        <FAQSection />

        {/* 9. Brand Quality Sign-Off Banner: Switch to Quality, Switch to Roshna Volt */}
        <BrandSignOffBanner />
      </main>

      {/* 10. Footer & Quick Links */}
      <NewsletterAndFooter />


      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleCheckout}
      />

      {/* Product Quick View Modal */}
      <ProductQuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        products={PRODUCTS}
        onSelectProduct={(p) => setQuickViewProduct(p)}
      />

    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <MainAppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}
