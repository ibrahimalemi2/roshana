import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, Menu, X, ArrowRight, Sparkles, Play, Sun, Moon, Globe } from 'lucide-react';
import { CartItem } from '../types';
import { RoshnaLogo } from './RoshnaLogo';
import { RoshnaEmblem } from './RoshnaEmblem';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

interface HeaderProps {
  cart: CartItem[];
  onOpenCart: () => void;
  onOpenSearch: () => void;
  onReplaySplash?: () => void;
  onNavigate: (sectionId: string) => void;
}

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.05 24l6.348-1.665a11.838 11.838 0 005.65 1.439h.005c6.554 0 11.89-5.336 11.893-11.893a11.82 11.82 0 00-3.483-8.413z" />
  </svg>
);

export const Header: React.FC<HeaderProps> = ({
  cart,
  onOpenCart,
  onOpenSearch,
  onReplaySplash,
  onNavigate
}) => {
  const { isDark, toggleTheme } = useTheme();
  const { language, toggleLanguage, t, isRtl } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.home, target: 'hero' },
    { label: t.nav.collection, target: 'collection' },
    { label: t.nav.craft, target: 'craft' },
    { label: t.nav.materials, target: 'materials' },
    { label: t.nav.reviews, target: 'reviews' },
    { label: t.nav.faq, target: 'faq' }
  ];

  const handleLinkClick = (target: string) => {
    setActiveSection(target);
    setMobileMenuOpen(false);
    onNavigate(target);
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300 select-none">
      {/* Main Navigation Bar (Supports Light Mode & Signature Brand Dark Mode #0B132B) */}
      <nav
        className={`w-full transition-all duration-300 ${
          isDark
            ? isScrolled
              ? 'bg-[#0B132B]/95 backdrop-blur-md shadow-lg border-b border-[#1D2B52]'
              : 'bg-[#0B132B] border-b border-[#1D2B52]/80 text-[#F7F5F0]'
            : isScrolled
              ? 'bg-[#FFFFFF]/95 backdrop-blur-md shadow-xs border-b border-[#E5E1D8]'
              : 'bg-[#FFFFFF] border-b border-[#E5E1D8]/80 text-[#1F2421]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 h-20 flex items-center justify-between gap-4">
          
          {/* 1. Left Logo Brand Cluster */}
          <div className="flex items-center flex-shrink-0">
            <button
              onClick={() => handleLinkClick('hero')}
              className="group flex items-center gap-2.5 focus:outline-none"
              aria-label="Roshna Home"
            >
              {/* Monogram Emblem Badge */}
              <RoshnaEmblem className="w-8 h-8 sm:w-9 sm:h-9 group-hover:scale-105 transition-transform flex-shrink-0" />

              {/* Primary Wordmark Vector */}
              <div className="w-32 sm:w-36 pt-0.5 flex-shrink-0">
                <RoshnaLogo
                  className="w-full h-auto"
                  variant={isDark ? 'monochrome-white' : 'color'}
                />
              </div>
            </button>
          </div>

          {/* 2. Centered Navigation Links */}
          <div className="hidden md:flex items-center gap-5 lg:gap-7 xl:gap-8 flex-shrink-0">
            {navLinks.map((link) => {
              const isActive = activeSection === link.target;
              return (
                <button
                  key={link.target}
                  onClick={() => handleLinkClick(link.target)}
                  className={`text-xs xl:text-sm tracking-wide font-sans-body transition-all relative py-1.5 whitespace-nowrap flex-shrink-0 group ${
                    isActive
                      ? 'text-[#C5A059] font-bold'
                      : isDark
                        ? 'text-[#F7F5F0]/85 hover:text-[#C5A059] font-medium'
                        : 'text-[#1F2421]/80 hover:text-[#C5A059] font-medium'
                  }`}
                >
                  <span>{link.label}</span>
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] transition-all duration-300 ease-out ${
                      isActive ? 'w-full bg-[#C5A059]' : 'w-0 bg-[#C5A059] group-hover:w-full'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* 3. Right Action Icons & Prestige Concierge CTA */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 flex-shrink-0">
            
            {/* BRAND DARK MODE TOGGLE */}
            <button
              onClick={toggleTheme}
              className={`relative inline-flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-full border transition-all duration-300 flex-shrink-0 cursor-pointer select-none group ${
                isDark
                  ? 'bg-[#0F1B3D] border-[#C5A059]/50 text-[#C5A059] hover:bg-[#13224A] shadow-sm shadow-[#C5A059]/15'
                  : 'bg-[#FFFFFF] border-[#E5E1D8] text-[#1F2421] hover:border-[#C5A059] hover:text-[#C5A059] shadow-xs'
              }`}
              aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Brand Deep Navy Mode'}
              title={isDark ? 'Theme: Brand Deep Navy (#0B132B) • Click for Light Mode' : 'Theme: Light Mode • Click for Brand Deep Navy Dark (#0B132B)'}
            >
              <span className="relative w-4 h-4 flex items-center justify-center">
                {isDark ? (
                  <Sun className="w-3.5 h-3.5 text-[#C5A059] group-hover:rotate-45 transition-transform duration-300" />
                ) : (
                  <Moon className="w-3.5 h-3.5 text-[#0B132B] group-hover:-rotate-12 transition-transform duration-300" />
                )}
              </span>
              <span className="text-[11px] font-semibold tracking-wider uppercase hidden sm:inline">
                {isDark ? t.nav.darkMode : t.nav.lightMode}
              </span>
            </button>

            {/* DUAL LANGUAGE TOGGLE (EN / FA) */}
            <button
              onClick={toggleLanguage}
              className={`relative inline-flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-full border transition-all duration-300 flex-shrink-0 cursor-pointer select-none group ${
                isDark
                  ? 'bg-[#0F1B3D] border-[#C5A059]/40 text-[#C5A059] hover:bg-[#13224A] shadow-xs'
                  : 'bg-[#FFFFFF] border-[#E5E1D8] text-[#1F2421] hover:border-[#C5A059] hover:text-[#C5A059] shadow-xs'
              }`}
              aria-label={language === 'en' ? 'تغییر به زبان فارسی' : 'Switch to English'}
              title={language === 'en' ? 'تغییر زبان به فارسی' : 'Switch to English'}
            >
              <Globe className="w-3.5 h-3.5 text-[#C5A059] group-hover:rotate-45 transition-transform duration-300" />
              <span className="text-[11px] font-bold tracking-wider uppercase">
                {language === 'en' ? 'FA' : 'EN'}
              </span>
            </button>

            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              className={`p-2 sm:p-2.5 rounded-full transition-colors flex-shrink-0 cursor-pointer ${
                isDark
                  ? 'text-[#F7F5F0] hover:bg-[#0F1B3D] hover:text-[#C5A059]'
                  : 'text-[#1F2421] hover:bg-[#F7F5F0] hover:text-[#C5A059]'
              }`}
              aria-label="Search collection"
              title="Search collection"
            >
              <Search className="w-4.5 h-4.5" />
            </button>


            {/* Shopping Bag Trigger */}
            <button
              onClick={onOpenCart}
              className={`relative p-2 sm:p-2.5 rounded-full transition-colors flex items-center flex-shrink-0 cursor-pointer ${
                isDark
                  ? 'text-[#F7F5F0] hover:bg-[#0F1B3D] hover:text-[#C5A059]'
                  : 'text-[#1F2421] hover:bg-[#F7F5F0] hover:text-[#C5A059]'
              }`}
              aria-label="Shopping bag"
              title="Shopping bag"
            >
              <ShoppingBag className="w-4.5 h-4.5" />
              {totalCartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-[#0B132B] text-[#C5A059] text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#C5A059] shadow-xs">
                  {totalCartCount}
                </span>
              )}
            </button>

            {/* WhatsApp Direct Client Button */}
            <a
              href={isRtl
                ? "https://wa.me/?text=سلام%20روشنا%20ولت،%20مایل%20به%20دریافت%20مشاوره%20در%20مورد%20سویچ‌ها%20و%20ساکت‌ها%20هستم."
                : "https://wa.me/?text=Hello%20Roshna%20Volt,%20I%20would%20like%20to%20inquire%20about%20your%20switches%20and%20sockets%20collection."}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 sm:gap-2 text-xs font-semibold tracking-wider uppercase px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-full border border-[#25D366]/50 text-[#25D366] bg-[#25D366]/10 hover:bg-[#25D366] hover:text-[#0B132B] hover:border-transparent transition-all shadow-xs hover:shadow-md hover:shadow-[#25D366]/25 whitespace-nowrap flex-shrink-0 cursor-pointer group"
              title="Chat with Roshna on WhatsApp"
              aria-label="Chat on WhatsApp"
            >
              <WhatsAppIcon className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>

            {/* Hamburger Menu Toggle (Mobile & Tablet) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 sm:p-2.5 rounded-full transition-colors md:hidden focus:outline-none flex-shrink-0 ${
                isDark
                  ? 'text-[#F7F5F0] hover:bg-[#0F1B3D]'
                  : 'text-[#1F2421] hover:bg-[#F7F5F0]'
              }`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className={`fixed inset-0 top-[80px] z-50 border-t md:hidden flex flex-col justify-between p-6 sm:p-8 animate-fadeIn overflow-y-auto ${
            isDark
              ? 'bg-[#0B132B] border-[#1D2B52] text-[#F7F5F0]'
              : 'bg-[#F7F5F0] border-[#E5E1D8] text-[#1F2421]'
          }`}
        >
          <div className="flex flex-col space-y-6 pt-2">
            <div className="flex items-center justify-between pb-3 border-b border-[#E5E1D8]/40">
              <div className="flex items-center gap-2">
                <RoshnaEmblem className="w-6 h-6" />
                <span className="text-[11px] uppercase tracking-[0.25em] font-bold text-[#C5A059]">
                  {isRtl ? 'روشنا ولت • سویچ و ساکت مدرن' : 'Roshna Volt Hardware'}
                </span>
              </div>
              <div className="flex items-center gap-3">
                {/* Mobile Dark Mode Toggle */}
                <button
                  onClick={toggleTheme}
                  className={`p-1.5 rounded-full border text-xs flex items-center gap-1.5 px-2.5 ${
                    isDark
                      ? 'bg-[#0F1B3D] border-[#C5A059]/40 text-[#C5A059]'
                      : 'bg-[#FFFFFF] border-[#E5E1D8] text-[#1F2421]'
                  }`}
                >
                  {isDark ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
                  <span className="text-[10px] font-semibold">{isDark ? t.nav.lightMode : t.nav.darkMode}</span>
                </button>

                {/* Mobile Language Toggle */}
                <button
                  onClick={toggleLanguage}
                  className={`p-1.5 rounded-full border text-xs flex items-center gap-1.5 px-2.5 ${
                    isDark
                      ? 'bg-[#0F1B3D] border-[#C5A059]/40 text-[#C5A059]'
                      : 'bg-[#FFFFFF] border-[#E5E1D8] text-[#1F2421]'
                  }`}
                  title={language === 'en' ? 'تغییر به فارسی' : 'Switch to English'}
                >
                  <Globe className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span className="text-[10px] font-bold uppercase">{language === 'en' ? 'FA' : 'EN'}</span>
                </button>

                {onReplaySplash && (
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onReplaySplash();
                    }}
                    className="text-[11px] text-[#C5A059] font-semibold flex items-center gap-1"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>Intro</span>
                  </button>
                )}
              </div>
            </div>

            {navLinks.map((link) => (
              <button
                key={link.target}
                onClick={() => handleLinkClick(link.target)}
                className={`text-left font-serif-heading text-2xl hover:text-[#C5A059] transition-colors flex items-center justify-between group ${
                  isDark ? 'text-[#F7F5F0]' : 'text-[#1F2421]'
                }`}
              >
                <span>{link.label}</span>
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all text-[#C5A059]" />
              </button>
            ))}


          </div>

          <div className="border-t border-[#E5E1D8]/40 pt-6 space-y-3">
            <div className="text-xs text-[#94A3B8] font-sans-body">
              <p className="font-semibold text-[#C5A059]">{isRtl ? 'روشنا ولت • کلید و پریزهای ساختمانی' : 'Roshna Volt Hardware'}</p>
              <p>{isRtl ? 'سازگار با قوطی‌های استاندارد ۸۶ میلی‌متری • کیفیت و ایمنی مطمئن' : 'Compatible with standard 86mm wall boxes • Safe and durable'}</p>
            </div>
            <a
              href={isRtl
                ? "https://wa.me/?text=سلام%20روشنا%20ولت،%20مایل%20به%20دریافت%20مشاوره%20در%20مورد%20سویچ‌ها%20و%20ساکت‌ها%20هستم."
                : "https://wa.me/?text=Hello%20Roshna%20Volt,%20I%20would%20like%20to%20inquire%20about%20your%20switches%20and%20sockets%20collection."}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 rounded-full border border-[#25D366]/50 text-[#25D366] bg-[#25D366]/10 hover:bg-[#25D366] hover:text-[#0B132B] font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-colors shadow-xs"
            >
              <WhatsAppIcon className="w-4 h-4 fill-current" />
              <span>Chat on WhatsApp</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSearch();
              }}
              className="w-full py-3.5 px-4 bg-[#C5A059] text-[#0B132B] font-bold rounded-full text-xs tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-[#D4AF37] transition-colors"
            >
              <Search className="w-4 h-4" />
              <span>Search Electrical Catalog</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
