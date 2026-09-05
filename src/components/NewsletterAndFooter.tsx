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
    { label: isRtl ? 'سویچ تک پل (1 Pole Switch)' : '1 Pole Switch', href: '#collection' },
    { label: isRtl ? 'سویچ دو پل (2 Pole Switch)' : '2 Pole Switch', href: '#collection' },
    { label: isRtl ? 'پریز برق چند منظوره' : 'Socket Outlet', href: '#collection' },
    { label: isRtl ? 'تجهیزات جانبی و فریم' : 'Accessories', href: '#collection' }
  ];

  const quickLinks = [
    { label: isRtl ? 'صفحه نخست' : 'Home', href: '#hero' },
    { label: isRtl ? 'محصولات' : 'Products', href: '#collection' },
    { label: isRtl ? 'فناوری و استاندارها' : 'Technology', href: '#craft' },
    { label: isRtl ? 'درباره روشنا ولت' : 'About Us', href: '#hero' },
    { label: isRtl ? 'گالری فضاها' : 'Gallery', href: '#gallery' },
    { label: isRtl ? 'تماس با ما' : 'Contact', href: '#faq' }
  ];

  const supportLinks = [
    { label: isRtl ? 'راهنمای نصب و سیم‌کشی' : 'Installation Guide', href: '#craft' },
    { label: isRtl ? 'شرایط گارانتی ۱۰ ساله' : 'Warranty', href: '#faq' },
    { label: isRtl ? 'سوالات متداول (FAQs)' : 'FAQs', href: '#faq' },
    { label: isRtl ? 'استعلام واتس‌اپ' : 'Download Catalog', href: ROSHNA_CONTACT_INFO.whatsappUrl, isExternal: true }
  ];

  return (
    <footer className="bg-[#0A1428] text-white relative overflow-hidden border-t border-[#D4AF37]/30 select-none">
      
      {/* Main Footer Content: 4 Columns Matching Reference Flyer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Brand Profile Column (Left 4 cols) */}
          <div className="md:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-44">
                <RoshnaLogo variant="monochrome-white" className="w-full h-auto" />
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed max-w-sm">
              {isRtl
                ? 'روشنا ولت نامی معتبر در ارائه راهکارهای برقی با کیفیت بالا، طراحی شده برای ایمنی، قابلیت اطمینان و فردایی بهتر.'
                : 'Roshna is a trusted name delivering high quality electrical solutions designed for safety, reliability and a better tomorrow.'}
            </p>

            {/* Social Icons in Circular Badges */}
            <div className="flex items-center space-x-3 rtl:space-x-reverse pt-1">
              <a
                href={ROSHNA_CONTACT_INFO.social.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#D4AF37] hover:text-[#0A1428] text-white flex items-center justify-center transition-all text-xs border border-white/20 hover:border-[#D4AF37]"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={ROSHNA_CONTACT_INFO.social.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#D4AF37] hover:text-[#0A1428] text-white flex items-center justify-center transition-all text-xs border border-white/20 hover:border-[#D4AF37]"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={ROSHNA_CONTACT_INFO.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#D4AF37] hover:text-[#0A1428] text-white flex items-center justify-center transition-all text-xs border border-white/20 hover:border-[#D4AF37]"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={ROSHNA_CONTACT_INFO.social.youtube}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#D4AF37] hover:text-[#0A1428] text-white flex items-center justify-center transition-all text-xs border border-white/20 hover:border-[#D4AF37]"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 1: QUICK LINKS */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-bold">
              {isRtl ? 'لینک‌های سریع' : 'QUICK LINKS'}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-[#D4AF37] transition-colors inline-block font-sans">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: PRODUCTS */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-bold">
              {isRtl ? 'محصولات' : 'PRODUCTS'}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              {productLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-[#D4AF37] transition-colors inline-block font-sans">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: SUPPORT */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-bold">
              {isRtl ? 'پشتیبانی و اسناد' : 'SUPPORT'}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              {supportLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-[#D4AF37] transition-colors inline-block font-sans">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: CONTACT US (Matching Reference Flyer) */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-bold">
              {isRtl ? 'ارتباط با ما' : 'CONTACT US'}
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <Phone className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <a href="tel:+93780880007" className="hover:text-[#D4AF37] transition-colors block font-mono" dir="ltr">
                    +93 780 88000 7
                  </a>
                  <a href="tel:+93702141616" className="hover:text-[#D4AF37] transition-colors block font-mono" dir="ltr">
                    +93 702 1416 16
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                <a href="mailto:info@roshna.co" className="hover:text-[#D4AF37] transition-colors truncate">
                  info@roshna.co
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>
                  {isRtl ? 'کابل، افغانستان (چهارراهی لب‌جر)' : 'Kabul, Afghanistan (Lab-e-Jar)'}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Copyright & Utilities Bar */}
      <div className="border-t border-white/10 py-5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-sans">
          <p className="text-center sm:text-left">
            © 2026 Roshna Volt. All Rights Reserved.
          </p>

          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <div className="flex items-center space-x-2 rtl:space-x-reverse text-slate-300">
              <Globe className="w-3.5 h-3.5 text-[#D4AF37]" />
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="bg-transparent border-none text-slate-300 focus:text-white text-xs focus:outline-none cursor-pointer"
                aria-label="Select Currency"
              >
                <option value="AFN (؋)" className="bg-[#0A1428] text-white">Afghanistan (AFN ؋)</option>
                <option value="USD ($)" className="bg-[#0A1428] text-white">United States (USD $)</option>
                <option value="EUR (€)" className="bg-[#0A1428] text-white">European Union (EUR €)</option>
                <option value="AED (د.إ)" className="bg-[#0A1428] text-white">United Arab Emirates (AED)</option>
              </select>
            </div>

            <div className="flex items-center space-x-4 rtl:space-x-reverse text-xs">
              <a href="#faq" className="hover:text-white text-slate-400 transition-colors">
                {t.footer.links.privacy}
              </a>
              <span>·</span>
              <a href="#faq" className="hover:text-white text-slate-400 transition-colors">
                {t.footer.links.terms}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const Footer = NewsletterAndFooter;
