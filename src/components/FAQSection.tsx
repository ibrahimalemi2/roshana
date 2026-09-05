import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Mail, Clock, Sparkles, MessageSquare } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const FAQSection: React.FC = () => {
  const { t, isRtl } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const whatsappFaqUrl = isRtl
    ? 'https://wa.me/?text=سلام%20روشنا%20ولت،%20سوالی%20درباره%20کلید%20و%20پریزها%20دارم.'
    : 'https://wa.me/?text=Hello%20Roshna%20Volt,%20I%20have%20an%20inquiry%20regarding%20switches%20and%20sockets.';

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#F7F5F0] dark:bg-[#0B132B] border-b border-[#E5E1D8] dark:border-[#1D2B52] transition-colors duration-300 select-none">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Title and Support Card */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFFFFF] dark:bg-[#0F1B3D] border border-[#C5A059]/40 text-[#C5A059] text-[11px] uppercase tracking-[0.2em] font-semibold mb-3 shadow-xs">
                <HelpCircle className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>{t.faq.badge}</span>
              </div>
              <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl font-normal text-[#1F2421] dark:text-[#F7F5F0] tracking-tight">
                {t.faq.titlePart1} <br />
                <span className="italic font-serif-heading text-[#C5A059]">{t.faq.titlePart2}</span>
              </h2>
              <p className="mt-4 font-sans-body text-sm text-[#1F2421]/75 dark:text-[#F7F5F0]/75 font-light leading-relaxed">
                {t.faq.subtitle}
              </p>
            </div>

            {/* Support Box in Deep Navy #0B132B with Metallic Gold Accents */}
            <div className="bg-[#0B132B] text-white p-8 rounded-[24px] border border-[#C5A059]/30 shadow-xl space-y-6">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#C5A059]" />
                <h3 className="font-serif-heading text-2xl text-[#F7F5F0]">
                  {t.faq.contactTitle}
                </h3>
              </div>
              <p className="text-xs text-neutral-300 font-sans-body leading-relaxed">
                {t.faq.contactDesc}
              </p>

              <div className="space-y-3 pt-2 text-xs">
                <a
                  href="mailto:info@roshna-volt.com"
                  className="flex items-center gap-3 text-neutral-200 hover:text-[#C5A059] font-medium transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <span>info@roshna-volt.com</span>
                </a>
                <div className="flex items-center gap-3 text-neutral-400">
                  <Clock className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <span>{isRtl ? 'شنبه تا پنج‌شنبه: ۸:۳۰ صبح تا ۶:۳۰ عصر' : 'Sat–Thu: 8:30 AM – 6:30 PM'}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={whatsappFaqUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 text-center py-3 px-4 btn-gold-gradient rounded-full text-xs uppercase font-bold tracking-wider cursor-pointer flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{t.faq.contactWhatsapp}</span>
                </a>
                <a
                  href={`mailto:info@roshna-volt.com?subject=${encodeURIComponent(
                    isRtl ? 'مشاوره سفارش کلید و پریز روشنا ولت' : 'Roshna Volt Switches & Sockets Consultation'
                  )}`}
                  className="flex-1 text-center py-3 px-4 bg-[#060B18] hover:bg-[#101B38] text-[#C5A059] border border-[#C5A059]/40 rounded-full text-xs uppercase font-bold tracking-wider cursor-pointer transition-colors"
                >
                  {t.faq.contactEmail}
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: FAQ Accordion */}
          <div className="lg:col-span-7 space-y-4">
            {t.faq.items.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className={`rounded-[20px] border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'bg-[#FFFFFF] dark:bg-[#0F1B3D] border-[#C5A059] shadow-md'
                      : 'bg-[#FFFFFF]/70 dark:bg-[#0F1B3D]/70 border-[#E5E1D8] dark:border-[#1D2B52] hover:bg-[#FFFFFF] dark:hover:bg-[#0F1B3D]'
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left rtl:text-right p-6 sm:p-7 flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  >
                    <span className="font-serif-heading text-lg sm:text-xl font-medium text-[#1F2421] dark:text-[#F7F5F0]">
                      {faq.question}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen ? 'bg-[#0B132B] text-[#C5A059] rotate-180' : 'bg-[#F7F5F0] dark:bg-[#0B132B] text-[#1F2421] dark:text-[#F7F5F0]'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 sm:px-7 pb-6 pt-0 border-t border-[#E5E1D8] dark:border-[#1D2B52] animate-fadeIn">
                      <p className="font-sans-body text-xs sm:text-sm text-[#1F2421]/75 dark:text-[#F7F5F0]/75 font-light leading-relaxed pt-4">
                        {faq.answer}
                      </p>
                      <div className="mt-4 inline-block px-3 py-1 rounded-full bg-[#F7F5F0] dark:bg-[#0B132B] text-[10px] uppercase tracking-wider font-bold text-[#C5A059] border border-[#C5A059]/30">
                        {faq.category}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
