import React, { useState } from 'react';
import { ArrowRight, Check, Instagram, Globe, Sparkles, Shield, Heart } from 'lucide-react';
import { RoshnaLogo } from './RoshnaLogo';
import { RoshnaEmblem } from './RoshnaEmblem';

export const NewsletterAndFooter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [currency, setCurrency] = useState('USD ($)');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setIsSubscribed(true);
    setTimeout(() => {
      setEmail('');
    }, 2500);
  };

  const footerLinks = {
    Collection: [
      { label: 'Tactile Rocker Switches', href: '#collection' },
      { label: 'Architectural Flush Sockets', href: '#collection' },
      { label: 'Multi-Gang Wall Controls', href: '#collection' },
      { label: 'Engineering 3-Tier Units', href: '#collection' },
      { label: 'Residence Trio Suites', href: '#collection' }
    ],
    Services: [
      { label: 'Architect Specification Program', href: '#faq' },
      { label: '3-Part Modular Installation Guide', href: '#craft' },
      { label: 'Trade Physical Swatch Kit', href: '#materials' },
      { label: 'BIM & CAD File Archive', href: '#faq' },
      { label: 'Concierge Advisory', href: '#faq' }
    ],
    Atelier: [
      { label: 'About Roshna Volt', href: '#hero' },
      { label: 'Precision Switch Engineering', href: '#craft' },
      { label: 'Bayer Polymer & Alloy Provenance', href: '#materials' },
      { label: 'Press & Architectural Monographs', href: '#reviews' },
      { label: 'International Certifications (CE/IEC)', href: '#faq' }
    ],
    Concierge: [
      { label: 'Client Assistance', href: '#faq' },
      { label: 'Order Tracking & Freight', href: '#faq' },
      { label: 'Lifetime Structural Guarantee', href: '#faq' },
      { label: 'Schedule Trade Consultation', href: '#faq' }
    ]
  };

  return (
    <footer className="bg-[#0B132B] text-[#F7F5F0] relative overflow-hidden border-t border-[#C5A059]/25 select-none">
      
      {/* Upper Newsletter Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-16 border-b border-[#C5A059]/20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-6 space-y-3">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#C5A059] font-semibold">
              The Roshna Volt Gazette
            </span>
            <h3 className="font-serif-heading text-3xl sm:text-4xl text-white font-normal">
              Private Releases & <br />
              <span className="italic font-serif-heading text-[#D4AF37]">Architectural Monographs</span>
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 font-sans-body font-light max-w-md">
              Receive invitations to private capsule debuts, technical specification papers, and limited edition architectural hardware suites.
            </p>
          </div>

          <div className="lg:col-span-6">
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="relative flex items-center">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your professional email address"
                  required
                  className="w-full bg-[#060B18] text-[#F7F5F0] placeholder-neutral-400 text-xs sm:text-sm px-6 py-4 rounded-full border border-[#C5A059]/30 focus:border-[#C5A059] focus:ring-2 focus:ring-[#C5A059]/20 focus:outline-none transition-all pr-14"
                />
                <button
                  type="submit"
                  aria-label="Subscribe to newsletter"
                  className="absolute right-2 w-11 h-11 rounded-full btn-gold-gradient text-[#0B132B] flex items-center justify-center transition-all duration-300 shadow-md cursor-pointer"
                >
                  {isSubscribed ? <Check className="w-5 h-5 text-[#0B132B]" /> : <ArrowRight className="w-5 h-5" />}
                </button>
              </div>

              {isSubscribed && (
                <div className="flex items-center gap-2 text-xs text-[#C5A059] animate-fadeIn">
                  <Check className="w-3.5 h-3.5" />
                  <span>Subscription confirmed. Welcome to the private architectural registry.</span>
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
              An international design atelier devoted to minimalist wall hardware, flush architectural switches, monolithic sockets, and tactile living controls. Switch To Quality.
            </p>

            {/* Social Media Icons */}
            <div className="flex items-center space-x-3 pt-2">
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
          <div className="col-span-1 md:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#C5A059] font-semibold">
              Collection
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-300">
              {footerLinks.Collection.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-[#C5A059] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#C5A059] font-semibold">
              Specification
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-300">
              {footerLinks.Services.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-[#C5A059] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#C5A059] font-semibold">
              Atelier
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-300">
              {footerLinks.Atelier.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-[#C5A059] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#C5A059] font-semibold">
              Concierge
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-300">
              {footerLinks.Concierge.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-[#C5A059] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Copyright & Legal Links */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8 border-t border-[#C5A059]/20 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-neutral-400 font-sans-body">
        <div>
          © {new Date().getFullYear()} Roshna Volt Systems S.r.l. All rights reserved. Switch To Quality.
        </div>

        {/* Currency & Region Selector */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2 text-neutral-300">
            <Globe className="w-3.5 h-3.5 text-[#C5A059]" />
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="bg-transparent border-none text-neutral-300 focus:text-white text-[11px] focus:outline-none cursor-pointer"
            >
              <option value="USD ($)" className="bg-[#0B132B] text-white">United States (USD $)</option>
              <option value="EUR (€)" className="bg-[#0B132B] text-white">European Union (EUR €)</option>
              <option value="GBP (£)" className="bg-[#0B132B] text-white">United Kingdom (GBP £)</option>
              <option value="AED (د.إ)" className="bg-[#0B132B] text-white">United Arab Emirates (AED)</option>
            </select>
          </div>

          <div className="flex items-center space-x-4">
            <a href="#faq" className="hover:text-[#C5A059] transition-colors">Privacy Policy</a>
            <span>·</span>
            <a href="#faq" className="hover:text-[#C5A059] transition-colors">Terms of Atelier</a>
            <span>·</span>
            <a href="#faq" className="hover:text-[#C5A059] transition-colors">Certifications</a>
          </div>
        </div>
      </div>

    </footer>
  );
};
