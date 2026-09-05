import React, { useState } from 'react';
import {
  Globe,
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Facebook,
  Instagram,
  Youtube,
  ArrowUpRight
} from 'lucide-react';
import { RoshnaLogo } from './RoshnaLogo';
import { RoshnaEmblem } from './RoshnaEmblem';
import { useLanguage } from '../context/LanguageContext';
import { ROSHNA_CONTACT_INFO } from '../data/furnitureData';

export const NewsletterAndFooter: React.FC = () => {
  const { t, isRtl } = useLanguage();
  const [currency, setCurrency] = useState('AFN (؋)');

  const productLinks = [
    {
      label: isRtl ? 'سویچ یکپل (Single Switch 1-Gang)' : 'Single Switch (1-Gang)',
      href: '#collection'
    },
    {
      label: isRtl ? 'سویچ دوپل (Double Switch 2-Gang)' : 'Double Switch (2-Gang)',
      href: '#collection'
    },
    {
      label: isRtl ? 'ساکت برق (Power Socket)' : 'Power Socket',
      href: '#collection'
    }
  ];

  const quickLinks = [
    {
      label: isRtl ? 'درباره ما' : 'About Us',
      href: '#hero',
      isExternal: false
    },
    {
      label: isRtl ? 'تماس با ما' : 'Contact',
      href: '#faq',
      isExternal: false
    },
    {
      label: isRtl ? 'استعلام در واتس‌اپ' : 'Inquire on WhatsApp',
      href: ROSHNA_CONTACT_INFO.whatsappUrl,
      isExternal: true
    }
  ];

  return (
    <footer className="bg-[#0A1128] text-white relative overflow-hidden border-t border-[#D4AF37]/25 select-none">
      
      {/* Main Footer Content: Brand & 2-Column Links */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16">
          
          {/* Brand Profile Column */}
          <div className="md:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <RoshnaEmblem className="w-10 h-10" />
              <div className="w-44">
                <RoshnaLogo variant="monochrome-white" className="w-full h-auto" />
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 font-sans-body font-light leading-relaxed max-w-md">
              {t.footer.brandDesc}
            </p>

            {/* Active Social Media Channels */}
            <div className="flex items-center space-x-3 rtl:space-x-reverse pt-2">
              <a
                href={ROSHNA_CONTACT_INFO.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-[#050814] hover:bg-[#D4AF37] hover:text-[#0A1128] text-slate-300 flex items-center justify-center transition-all duration-300 text-xs border border-[#D4AF37]/30 hover:scale-105 shadow-xs"
                title="LinkedIn"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={ROSHNA_CONTACT_INFO.social.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-[#050814] hover:bg-[#D4AF37] hover:text-[#0A1128] text-slate-300 flex items-center justify-center transition-all duration-300 text-xs border border-[#D4AF37]/30 hover:scale-105 shadow-xs"
                title="Instagram"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={ROSHNA_CONTACT_INFO.social.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-[#050814] hover:bg-[#D4AF37] hover:text-[#0A1128] text-slate-300 flex items-center justify-center transition-all duration-300 text-xs border border-[#D4AF37]/30 hover:scale-105 shadow-xs"
                title="Facebook"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={ROSHNA_CONTACT_INFO.social.youtube}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-[#050814] hover:bg-[#D4AF37] hover:text-[#0A1128] text-slate-300 flex items-center justify-center transition-all duration-300 text-xs border border-[#D4AF37]/30 hover:scale-105 shadow-xs"
                title="YouTube"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* 2-Column Streamlined Link Grid */}
          <div className="md:col-span-6 grid grid-cols-2 gap-8 sm:gap-12">
            
            {/* Column 1: Products */}
            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-semibold">
                {isRtl ? 'محصولات' : 'Products'}
              </h4>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                {productLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="hover:text-[#D4AF37] transition-colors inline-block font-sans-body"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Quick Links */}
            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-semibold">
                {isRtl ? 'لینک‌های سریع' : 'Quick Links'}
              </h4>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                {quickLinks.map((item) => (
                  <li key={item.label}>
                    {item.isExternal ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#D4AF37] text-[#D4AF37] transition-colors inline-flex items-center gap-1.5 font-medium"
                      >
                        <span>{item.label}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                      </a>
                    ) : (
                      <a
                        href={item.href}
                        className="hover:text-[#D4AF37] transition-colors inline-block font-sans-body"
                      >
                        {item.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>
      </div>

      {/* Official Business Details Contact Bar */}
      <div className="border-t border-b border-[#D4AF37]/20 bg-[#050814]/80 py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          
          {/* 1. Location */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#0A1128]/90 border border-[#D4AF37]/25 flex items-center gap-4 transition-all duration-300 hover:border-[#D4AF37]/60 group shadow-xs">
            <div className="w-12 h-12 rounded-xl bg-[#050814] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] shrink-0 group-hover:scale-105 group-hover:border-[#D4AF37] transition-all">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block">
                {isRtl ? 'آدرس و موقعیت' : 'Location'}
              </span>
              <p className="font-semibold text-white text-sm mt-0.5">
                {isRtl ? 'کابل، افغانستان (چهارراهی لب‌جر)' : 'Kabul, Afghanistan (Lab-e-Jar)'}
              </p>
            </div>
          </div>

          {/* 2. Direct Phones */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#0A1128]/90 border border-[#D4AF37]/25 flex items-center gap-4 transition-all duration-300 hover:border-[#D4AF37]/60 group shadow-xs">
            <div className="w-12 h-12 rounded-xl bg-[#050814] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] shrink-0 group-hover:scale-105 group-hover:border-[#D4AF37] transition-all">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block">
                {isRtl ? 'شماره‌های تماس' : 'Phone'}
              </span>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 mt-0.5 text-sm">
                <a
                  href={`tel:${ROSHNA_CONTACT_INFO.primaryPhone.replace(/\s+/g, '')}`}
                  className="font-mono font-medium text-white hover:text-[#D4AF37] transition-colors"
                  dir="ltr"
                >
                  {ROSHNA_CONTACT_INFO.primaryPhone}
                </a>
                <span className="text-slate-500">/</span>
                <a
                  href={`tel:${ROSHNA_CONTACT_INFO.secondaryPhone.replace(/\s+/g, '')}`}
                  className="font-mono font-medium text-white hover:text-[#D4AF37] transition-colors"
                  dir="ltr"
                >
                  {ROSHNA_CONTACT_INFO.secondaryPhone}
                </a>
              </div>
            </div>
          </div>

          {/* 3. Official Email */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#0A1128]/90 border border-[#D4AF37]/25 flex items-center gap-4 transition-all duration-300 hover:border-[#D4AF37]/60 group shadow-xs">
            <div className="w-12 h-12 rounded-xl bg-[#050814] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] shrink-0 group-hover:scale-105 group-hover:border-[#D4AF37] transition-all">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block">
                {isRtl ? 'ایمیل رسمی' : 'Email'}
              </span>
              <a
                href={`mailto:${ROSHNA_CONTACT_INFO.email}`}
                className="font-semibold text-white hover:text-[#D4AF37] transition-colors text-sm mt-0.5 block"
              >
                {ROSHNA_CONTACT_INFO.email}
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Copyright & Utilities Bar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-sans-body">
        <p className="text-center sm:text-left">
          © 2026 Roshna Volt. All rights reserved.
        </p>

        {/* Currency & Region Selector & Quick Legal */}
        <div className="flex items-center space-x-6 rtl:space-x-reverse">
          <div className="flex items-center space-x-2 rtl:space-x-reverse text-slate-300">
            <Globe className="w-3.5 h-3.5 text-[#D4AF37]" />
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="bg-transparent border-none text-slate-300 focus:text-white text-xs focus:outline-none cursor-pointer"
              aria-label="Select Currency"
            >
              <option value="AFN (؋)" className="bg-[#0A1128] text-white">Afghanistan (AFN ؋)</option>
              <option value="USD ($)" className="bg-[#0A1128] text-white">United States (USD $)</option>
              <option value="EUR (€)" className="bg-[#0A1128] text-white">European Union (EUR €)</option>
              <option value="GBP (£)" className="bg-[#0A1128] text-white">United Kingdom (GBP £)</option>
              <option value="AED (د.إ)" className="bg-[#0A1128] text-white">United Arab Emirates (AED)</option>
            </select>
          </div>

          <div className="flex items-center space-x-4 rtl:space-x-reverse text-xs">
            <a href="#faq" className="hover:text-[#D4AF37] transition-colors">
              {t.footer.links.privacy}
            </a>
            <span>·</span>
            <a href="#faq" className="hover:text-[#D4AF37] transition-colors">
              {t.footer.links.terms}
            </a>
          </div>
        </div>
      </div>

    </footer>
  );
};

export const Footer = NewsletterAndFooter;
