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
    ? 'https://wa.me/93780880007?text=سلام%20روشنا%20ولت،%20سوالی%20درباره%20سویچ‌ها%20و%20ساکت‌ها%20دارم.'
    : 'https://wa.me/93780880007?text=Hello%20Roshna%20Volt,%20I%20have%20an%20inquiry%20regarding%20switches%20and%20sockets.';

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#F8FAFC] dark:bg-[#0A1128] border-b border-[#E2E8F0] dark:border-[#1E293B] transition-colors duration-300 select-none">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Title and Support Card */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="flex items-center gap-2 text-[#D4AF37] text-xs uppercase tracking-[0.2em] font-bold mb-2">
                <span>{t.faq.badge}</span>
                <span className="w-8 h-[2px] bg-[#D4AF37]" />
              </div>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase text-[#0A1428] dark:text-white tracking-tight">
                <span>{t.faq.titlePart1} </span>
                <span className="text-[#D4AF37]">{t.faq.titlePart2}</span>
              </h2>
              <p className="mt-4 font-sans text-sm text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
                {t.faq.subtitle}
              </p>
            </div>

            {/* Support Box in Deep Navy #0A1128 with Metallic Gold Accents */}
            <div className="bg-[#0A1128] text-white p-8 rounded-[24px] border border-[#D4AF37]/30 shadow-xl space-y-6">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#D4AF37]" />
                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white">
                  {t.faq.contactTitle}
                </h3>
              </div>
              <p className="text-xs text-slate-300 font-sans leading-relaxed font-normal">
                {t.faq.contactDesc}
              </p>

              <div className="space-y-3 pt-2 text-xs">
                <a
                  href="mailto:info@roshna.co"
                  className="flex items-center gap-3 text-neutral-200 hover:text-[#D4AF37] font-medium transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>info@roshna.co</span>
                </a>
                <div className="flex items-center gap-3 text-slate-400">
                  <Clock className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>{isRtl ? 'شنبه الی پنج‌شنبه: ۸:۳۰ صبح الی ۶:۳۰ شام' : 'Sat–Thu: 8:30 AM – 6:30 PM'}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={whatsappFaqUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 text-center py-3 px-4 btn-gold-gradient rounded-full text-xs uppercase font-bold tracking-wider cursor-pointer flex items-center justify-center gap-2 text-[#0A1128]"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{t.faq.contactWhatsapp}</span>
                </a>
                <a
                  href={`mailto:info@roshna.co?subject=${encodeURIComponent(
                    isRtl ? 'مشوره و فرمایش سویچ و ساکت روشنا ولت' : 'Roshna Volt Switches & Sockets Consultation'
                  )}`}
                  className="flex-1 text-center py-3 px-4 bg-[#050814] hover:bg-[#14224D] text-[#D4AF37] border border-[#D4AF37]/40 rounded-full text-xs uppercase font-bold tracking-wider cursor-pointer transition-colors"
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
                      ? 'bg-white dark:bg-[#0E1838] border-[#D4AF37] shadow-md'
                      : 'bg-white/80 dark:bg-[#0E1838]/80 border-[#E2E8F0] dark:border-[#1E293B] hover:bg-white dark:hover:bg-[#0E1838]'
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left rtl:text-right p-6 sm:p-7 flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  >
                    <span className="text-base sm:text-lg font-bold text-[#0A1428] dark:text-white">
                      {faq.question}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen ? 'bg-[#0A1128] text-[#D4AF37] rotate-180' : 'bg-[#F8FAFC] dark:bg-[#0A1128] text-[#0A1128] dark:text-white'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 sm:px-7 pb-6 pt-0 border-t border-[#E2E8F0] dark:border-[#1E293B] animate-fadeIn">
                      <p className="font-sans-body text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-light leading-relaxed pt-4">
                        {faq.answer}
                      </p>
                      <div className="mt-4 inline-block px-3 py-1 rounded-full bg-[#F8FAFC] dark:bg-[#0A1128] text-[10px] uppercase tracking-wider font-bold text-[#D4AF37] border border-[#D4AF37]/30">
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
