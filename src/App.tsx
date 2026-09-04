import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { InteractiveVisualBreak } from './components/InteractiveVisualBreak';
import { ProductShowcase } from './components/ProductShowcase';
import { ValueProposition } from './components/ValueProposition';
import { MaterialShowcase } from './components/MaterialShowcase';
import { SocialProofStats } from './components/SocialProofStats';
import { FAQSection } from './components/FAQSection';
import { NewsletterAndFooter } from './components/NewsletterAndFooter';
import { CartDrawer } from './components/CartDrawer';
import { ProductQuickViewModal } from './components/ProductQuickViewModal';
import { SearchModal } from './components/SearchModal';
import { SplashScreen } from './components/SplashScreen';
import { PRODUCTS } from './data/furnitureData';
import { Product, CartItem } from './types';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { Check } from 'lucide-react';

function MainAppContent() {
  const { isDark } = useTheme();
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
    showToast(`Added ${product.name} (${selectedColor}) to specification bag.`);
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
    showToast('Your order details have been prepared and opened in WhatsApp.');
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
      className={`min-h-screen font-sans-body relative selection:bg-[#0B132B] selection:text-[#C5A059] dark:selection:bg-[#C5A059] dark:selection:text-[#0B132B] transition-colors duration-300 ${
        isDark ? 'bg-[#0B132B] text-[#F7F5F0]' : 'bg-[#F7F5F0] text-[#1F2421]'
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
        <div className="fixed bottom-6 right-6 z-50 bg-[#0B132B] text-[#F7F5F0] px-5 py-3.5 rounded-2xl shadow-2xl border border-[#C5A059]/50 flex items-center gap-3 text-xs sm:text-sm animate-bounce">
          <div className="w-6 h-6 rounded-full bg-[#C5A059] text-[#0B132B] flex items-center justify-center shrink-0">
            <Check className="w-3.5 h-3.5 stroke-[3]" />
          </div>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Header / Navigation */}
      <Header
        cart={cart}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onReplaySplash={() => setShowSplash(true)}
        onNavigate={handleNavigate}
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <HeroSection
          products={PRODUCTS}
          onExploreClick={() => handleNavigate('collection')}
          onQuickView={(p) => setQuickViewProduct(p)}
        />

        {/* 2. Interactive Visual Break: Semi-circular Quadrant-Split Grid */}
        <InteractiveVisualBreak />

        {/* 3. Product Showcase Grids */}
        <ProductShowcase
          products={PRODUCTS}
          onAddToCart={handleAddToCart}
          onQuickView={(p) => setQuickViewProduct(p)}
        />

        {/* 4. Value Proposition Grid */}
        <ValueProposition />

        {/* 5. Material Showcase: Raw Minerals & Organic Textures */}
        <MaterialShowcase />

        {/* 6. Social Proof & 4-Column Metric Stats */}
        <SocialProofStats />

        {/* 7. FAQ & Atelier Concierge Inquiries */}
        <FAQSection />
      </main>

      {/* 8. Footer & Newsletter */}
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
