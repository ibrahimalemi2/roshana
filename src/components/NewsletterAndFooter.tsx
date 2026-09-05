import React, { useState } from 'react';
import { ArrowRight, Check, Instagram, Globe } from 'lucide-react';
import { RoshnaLogo } from './RoshnaLogo';
import { RoshnaEmblem } from './RoshnaEmblem';
import { useLanguage } from '../context/LanguageContext';

export const NewsletterAndFooter: React.FC = () => {
  const { t, isRtl } = useLanguage();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [currency, setCurrency] = useState('AFN (؋)');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setIsSubscribed(true);
    setTimeout(() => {
      setEmail('');
    }, 2500);
  };

  const footerSections = [
    {
      title: t.footer.links.collectionTitle,
      links: isRtl
        ? [
            { label: 'سویچ یکپل مدرن', href: '#collection' },
            { label: 'سویچ دوپل مدرن', href: '#collection' },
            { label: 'ساکت برق با محافظ کودک', href: '#collection' },
            { label: 'سازگار با قوطی‌های ۸۶ میلی‌متری', href: '#materials' },
            { label: 'پروژه‌های مسکونی و تجاری', href: '#collection' }
          ]
        : [
            { label: 'Single Switch (1-Gang)', href: '#collection' },
            { label: 'Double Switch (2-Gang)', href: '#collection' },
            { label: 'Child-Safe Power Socket', href: '#collection' },
            { label: 'Standard 86mm Wall Box Fit', href: '#materials' },
            { label: 'Residential & Commercial', href: '#collection' }
          ]
    },
    {
      title: t.footer.links.specificationTitle,
      links: isRtl
        ? [
            { label: 'سفارش‌های عمده و همکاری', href: '#faq' },
            { label: 'راهنمای نصب و اتصالات', href: '#craft' },
            { label: 'مشخصات فنی قطعات', href: '#materials' },
            { label: 'کیفیت و دوام متریال', href: '#materials' },
            { label: 'مشاوره سفارش در واتس‌اپ', href: '#faq' }
          ]
        : [
            { label: 'Wholesale & Bulk Orders', href: '#faq' },
            { label: 'Installation & Wiring Guide', href: '#craft' },
            { label: 'Technical Specifications', href: '#materials' },
            { label: 'Material Science & Safety', href: '#materials' },
            { label: 'WhatsApp Project Advisory', href: '#faq' }
          ]
    },
    {
      title: t.footer.links.atelierTitle,
      links: isRtl
        ? [
            { label: 'درباره برند روشنا ولت', href: '#hero' },
            { label: 'مکانیزم دقیق و تست شده', href: '#craft' },
            { label: 'پلیمر نسوز و سطح بهداشتی', href: '#materials' },
            { label: 'دیدگاه مشتریان و برق‌کاران', href: '#reviews' },
            { label: 'استانداردهای ایمنی الکتریکی', href: '#faq' }
          ]
        : [
            { label: 'About Roshna Volt', href: '#hero' },
            { label: 'Tested Switch Mechanics', href: '#craft' },
            { label: 'Flame-Retardant Polymer', href: '#materials' },
            { label: 'Customer & Electrician Reviews', href: '#reviews' },
            { label: 'Electrical Safety Standards', href: '#faq' }
          ]
    },
    {
      title: t.footer.links.conciergeTitle,
      links: isRtl
        ? [
            { label: 'پشتیبانی مشتریان روشنا', href: '#faq' },
            { label: 'ارسال با پیک در افغانستان', href: '#faq' },
            { label: '۱۰ سال ضمانت کیفیت', href: '#faq' },
            { label: 'استعلام قیمت و موجودی', href: '#faq' }
          ]
        : [
            { label: 'Customer Assistance', href: '#faq' },
            { label: 'Courier Delivery (Afghanistan)', href: '#faq' },
            { label: '10-Year Quality Guarantee', href: '#faq' },
            { label: 'Inquire on WhatsApp', href: '#faq' }
          ]
    }
  ];

  return (
    <footer className="bg-[#0B132B] text-[#F7F5F0] relative overflow-hidden border-t border-[#C5A059]/25 select-none">
      
      {/* Upper Newsletter Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-16 border-b border-[#C5A059]/20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-6 space-y-3">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#C5A059] font-semibold">
              {isRtl ? 'اطلاع‌رسانی روشنا ولت' : 'Roshna Volt Updates'}
            </span>
            <h3 className="font-serif-heading text-3xl sm:text-4xl text-white font-normal">
              {t.footer.newsletterTitle} <br />
              <span className="italic font-serif-heading text-[#D4AF37]">{t.footer.newsletterMonograph}</span>
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 font-sans-body font-light max-w-md">
              {t.footer.newsletterDesc}
            </p>
          </div>

          <div className="lg:col-span-6">
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="relative flex items-center">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.footer.newsletterPlaceholder}
                  required
                  className="w-full bg-[#060B18] text-[#F7F5F0] placeholder-neutral-400 text-xs sm:text-sm px-6 py-4 rounded-full border border-[#C5A059]/30 focus:border-[#C5A059] focus:ring-2 focus:ring-[#C5A059]/20 focus:outline-none transition-all pr-14 rtl:pr-6 rtl:pl-14"
                />
                <button
                  type="submit"
                  aria-label={t.footer.newsletterButton}
                  className="absolute right-2 rtl:right-auto rtl:left-2 w-11 h-11 rounded-full btn-gold-gradient text-[#0B132B] flex items-center justify-center transition-all duration-300 shadow-md cursor-pointer"
                >
                  {isSubscribed ? (
                    <Check className="w-5 h-5 text-[#0B132B]" />
                  ) : (
                    <ArrowRight className={`w-5 h-5 ${isRtl ? 'rotate-180' : ''}`} />
                  )}
                </button>
              </div>

              {isSubscribed && (
                <div className="flex items-center gap-2 text-xs text-[#C5A059] animate-fadeIn">
                  <Check className="w-3.5 h-3.5 shrink-0" />
                  <span>{t.footer.subscriptionConfirmed}</span>
                </div>
              )}
            </form>
          </div>

        </div>
      </div>

      {/* Main Footer Links & Brand Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-10">
          
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <RoshnaEmblem className="w-9 h-9" />
              <div className="w-40">
                <RoshnaLogo variant="monochrome-white" className="w-full h-auto" />
              </div>
            </div>

            <p className="text-xs text-neutral-300 font-sans-body font-light leading-relaxed max-w-sm">
              {t.footer.brandDesc}
            </p>

            {/* Social Media Icons */}
            <div className="flex items-center space-x-3 rtl:space-x-reverse pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#060B18] hover:bg-[#C5A059] hover:text-[#0B132B] text-neutral-300 flex items-center justify-center transition-colors text-xs border border-[#C5A059]/30"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#060B18] hover:bg-[#C5A059] hover:text-[#0B132B] text-neutral-300 flex items-center justify-center transition-colors text-xs font-serif-heading font-bold border border-[#C5A059]/30"
                title="Pinterest"
              >
                P
              </a>
            </div>
          </div>

          {/* Navigation Columns */}
          {footerSections.map((section, idx) => (
            <div key={idx} className="col-span-1 md:col-span-2 space-y-4">
              <h4 className="text-xs uppercase tracking-[0.2em] text-[#C5A059] font-semibold">
                {section.title}
              </h4>
              <ul className="space-y-2.5 text-xs text-neutral-300">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="hover:text-[#C5A059] transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </div>

      {/* Bottom Copyright & Legal Links */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8 border-t border-[#C5A059]/20 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-neutral-400 font-sans-body">
        <div>
          © {new Date().getFullYear()} Roshna Volt. {t.footer.copyright}
        </div>

        {/* Currency & Region Selector */}
        <div className="flex items-center space-x-6 rtl:space-x-reverse">
          <div className="flex items-center space-x-2 rtl:space-x-reverse text-neutral-300">
            <Globe className="w-3.5 h-3.5 text-[#C5A059]" />
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="bg-transparent border-none text-neutral-300 focus:text-white text-[11px] focus:outline-none cursor-pointer"
            >
              <option value="AFN (؋)" className="bg-[#0B132B] text-white">Afghanistan (AFN ؋)</option>
              <option value="USD ($)" className="bg-[#0B132B] text-white">United States (USD $)</option>
              <option value="EUR (€)" className="bg-[#0B132B] text-white">European Union (EUR €)</option>
              <option value="GBP (£)" className="bg-[#0B132B] text-white">United Kingdom (GBP £)</option>
              <option value="AED (د.إ)" className="bg-[#0B132B] text-white">United Arab Emirates (AED)</option>
            </select>
          </div>

          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <a href="#faq" className="hover:text-[#C5A059] transition-colors">{t.footer.links.privacy}</a>
            <span>·</span>
            <a href="#faq" className="hover:text-[#C5A059] transition-colors">{t.footer.links.terms}</a>
            <span>·</span>
            <a href="#faq" className="hover:text-[#C5A059] transition-colors">{t.footer.links.certs}</a>
          </div>
        </div>
      </div>

    </footer>
  );
};
