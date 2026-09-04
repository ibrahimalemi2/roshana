import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, Menu, X, ArrowRight, Sparkles, User, LogOut, Play, Sun, Moon } from 'lucide-react';
import { CartItem } from '../types';
import { RoshnaLogo } from './RoshnaLogo';
import { RoshnaEmblem } from './RoshnaEmblem';
import { useTheme } from '../context/ThemeContext';

interface HeaderProps {
  cart: CartItem[];
  onOpenCart: () => void;
  onOpenSearch: () => void;
  onOpenAuth: () => void;
  onReplaySplash?: () => void;
  currentUser: { name: string; role: string; email: string } | null;
  onLogout?: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  cart,
  onOpenCart,
  onOpenSearch,
  onOpenAuth,
  onReplaySplash,
  currentUser,
  onLogout,
  onNavigate
}) => {
  const { isDark, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showAnnouncement, setShowAnnouncement] = useState(true);
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
    { label: 'Home', target: 'hero' },
    { label: 'Collection', target: 'collection' },
    { label: 'Craft & Design', target: 'craft' },
    { label: 'Materials', target: 'materials' },
    { label: 'Reviews', target: 'reviews' },
    { label: 'FAQ', target: 'faq' }
  ];

  const handleLinkClick = (target: string) => {
    setActiveSection(target);
    setMobileMenuOpen(false);
    onNavigate(target);
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300 select-none">
      {/* Top Luxury Announcement Bar (Deep Navy #0B132B with Warm Metallic Gold #C5A059) */}
      {showAnnouncement && (
        <div className="bg-[#0B132B] text-[#F7F5F0] py-2 px-4 text-xs font-sans-body border-b border-[#C5A059]/25 relative overflow-hidden">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex-1 flex items-center justify-center gap-3 tracking-wider text-[11px] sm:text-xs">
              <span className="inline-flex items-center gap-1.5 text-[#C5A059] font-semibold whitespace-nowrap">
                <Sparkles className="w-3.5 h-3.5 animate-pulse text-[#D4AF37]" />
                <span>ROSHNA VOLT • Switch To Quality</span>
              </span>
              <span className="hidden md:inline text-[#C5A059]/40">|</span>
              <span className="text-neutral-300 hidden sm:inline whitespace-nowrap">
                Complimentary Architectural Consultation & Insured Delivery
              </span>
              {onReplaySplash && (
                <>
                  <span className="hidden lg:inline text-[#C5A059]/40">|</span>
                  <button
                    onClick={onReplaySplash}
                    className="hidden lg:inline-flex items-center gap-1 text-[#C5A059] hover:text-[#D4AF37] transition-colors cursor-pointer text-[11px] font-medium"
                    title="Replay brand intro splash"
                  >
                    <Play className="w-2.5 h-2.5 fill-current" />
                    <span>Replay Intro</span>
                  </button>
                </>
              )}
            </div>
            <button
              onClick={() => setShowAnnouncement(false)}
              className="text-neutral-400 hover:text-white text-xs p-1 ml-2 transition-colors flex-shrink-0"
              aria-label="Dismiss announcement"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

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
              title={isDark ? 'Theme: Brand Deep Navy (#0B132B) • Click for Light Mode' : 'Theme: Atelier Light • Click for Brand Deep Navy Dark (#0B132B)'}
            >
              <span className="relative w-4 h-4 flex items-center justify-center">
                {isDark ? (
                  <Sun className="w-3.5 h-3.5 text-[#C5A059] group-hover:rotate-45 transition-transform duration-300" />
                ) : (
                  <Moon className="w-3.5 h-3.5 text-[#0B132B] group-hover:-rotate-12 transition-transform duration-300" />
                )}
              </span>
              <span className="text-[11px] font-semibold tracking-wider uppercase hidden sm:inline">
                {isDark ? 'Navy Dark' : 'Light'}
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

            {/* Authentication / User Profile */}
            {currentUser ? (
              <div
                className={`flex items-center gap-1.5 border rounded-full pl-2.5 pr-2 py-1 flex-shrink-0 ${
                  isDark
                    ? 'bg-[#0F1B3D] border-[#C5A059]/30 text-[#F7F5F0]'
                    : 'bg-[#F7F5F0] border-[#C5A059]/30 text-[#1F2421]'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse" />
                <span className="text-xs font-semibold hidden sm:inline max-w-[110px] truncate whitespace-nowrap">
                  {currentUser.name}
                </span>
                <span className="text-[9px] uppercase px-1.5 py-0.5 rounded bg-gradient-to-r from-[#C5A059] to-[#9E7B36] text-[#0B132B] font-bold tracking-wider">
                  VIP
                </span>
                {onLogout && (
                  <button
                    onClick={onLogout}
                    className="p-1 rounded-full text-neutral-400 hover:text-red-600 hover:bg-white/10 transition-colors ml-1 flex-shrink-0"
                    title="Sign Out"
                    aria-label="Sign out"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            ) : (
              <button
                onClick={onOpenAuth}
                className={`p-2 sm:px-3 sm:py-2 rounded-full transition-colors flex items-center gap-1.5 flex-shrink-0 cursor-pointer ${
                  isDark
                    ? 'text-[#F7F5F0] hover:bg-[#0F1B3D] hover:text-[#C5A059]'
                    : 'text-[#1F2421] hover:bg-[#F7F5F0] hover:text-[#C5A059]'
                }`}
                aria-label="Sign in to Trade Portal"
                title="Trade Portal Sign In"
              >
                <User className="w-4.5 h-4.5 flex-shrink-0" />
                <span className="text-xs font-semibold tracking-wide hidden sm:inline whitespace-nowrap">
                  Sign In
                </span>
              </button>
            )}

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

            {/* Anchored Prestige Concierge Button (Warm Gold Accent) */}
            <button
              onClick={() => handleLinkClick('faq')}
              className="hidden lg:inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase px-4 py-2 rounded-full border border-[#C5A059] text-[#C5A059] bg-[#C5A059]/5 hover:bg-gradient-to-r hover:from-[#C5A059] hover:to-[#9E7B36] hover:text-[#0B132B] hover:border-transparent transition-all shadow-xs hover:shadow-md hover:shadow-[#C5A059]/20 whitespace-nowrap flex-shrink-0 cursor-pointer"
            >
              <span>Concierge</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

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
                  Roshna Volt Atelier
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
                  <span className="text-[10px] font-semibold">{isDark ? 'Light' : 'Dark'}</span>
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

            {/* Auth in mobile drawer */}
            <div className="pt-2">
              {currentUser ? (
                <div
                  className={`p-4 rounded-2xl border flex items-center justify-between shadow-xs ${
                    isDark
                      ? 'bg-[#0F1B3D] border-[#C5A059]/30'
                      : 'bg-[#FFFFFF] border-[#C5A059]/30'
                  }`}
                >
                  <div>
                    <p className={`text-sm font-semibold ${isDark ? 'text-[#F7F5F0]' : 'text-[#0B132B]'}`}>
                      {currentUser.name}
                    </p>
                    <p className="text-xs text-[#C5A059] font-medium">{currentUser.role}</p>
                  </div>
                  {onLogout && (
                    <button
                      onClick={onLogout}
                      className="px-3 py-1.5 rounded-lg text-xs bg-[#F7F5F0] text-[#1F2421] font-medium border border-[#E5E1D8]"
                    >
                      Sign Out
                    </button>
                  )}
                </div>
              ) : (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAuth();
                  }}
                  className="w-full py-3 px-4 rounded-xl btn-gold-gradient text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <User className="w-4 h-4 text-[#0B132B]" />
                  <span>Trade Portal Sign In</span>
                </button>
              )}
            </div>
          </div>

          <div className="border-t border-[#E5E1D8]/40 pt-6 space-y-4">
            <div className="text-xs text-[#94A3B8] font-sans-body">
              <p className="font-semibold text-[#C5A059]">Roshna Volt Flagship Engineering</p>
              <p>Certified to CE, CB, RoHS & IEC-60884 Standards</p>
            </div>
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
