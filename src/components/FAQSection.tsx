import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Mail, Clock, ArrowRight, Sparkles } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQS: FAQItem[] = [
  {
    question: 'How does Roshna’s 3-part modular engineering architecture work?',
    answer: 'Roshna separates the heavy-gauge steel subframe from the finished cosmetic faceplate. Electricians first wire and clamp the rigid steel plate onto standard standard 86mm or European wall backboxes. Once painting and plastering are finished, the pristine polycarbonate or brass faceplate simply snaps on tool-free with zero risk of scuffs or paint spatters.',
    category: 'Installation & Mechanism'
  },
  {
    question: 'Are Roshna switches and sockets compatible with standard existing backboxes?',
    answer: 'Yes. Every unit is engineered for full backward-compatibility with standard British BS 4662, European CEE 7, and universal 86mm architectural flush-mount wall backboxes with a minimum depth of 35mm.',
    category: 'Compatibility'
  },
  {
    question: 'What electrical safety certifications and current ratings do Roshna units carry?',
    answer: 'All Roshna wall controls and socket outlets are certified to CE, CB, RoHS, and IEC-60884 international standards. Our wall sockets are rated for 250V / 16A with integrated child-safety shutters, while switches feature silver-nickel contacts rated for 100,000+ continuous actuations under inductive LED loads.',
    category: 'Safety & Ratings'
  },
  {
    question: 'What is covered under the Roshna Lifetime Structural Guarantee?',
    answer: 'We provide an unconditional lifetime replacement guarantee on the internal mechanical rocker springs, silver-nickel contact terminals, and steel structural mounting frames. Cosmetic faceplates carry a 10-year UV and anti-fingerprint warranty.',
    category: 'Guarantee & Warranty'
  },
  {
    question: 'Do you offer custom engraved faceplates and bespoke architectural finishes for trade firms?',
    answer: 'Yes. Through our Milan and Copenhagen atelier trade concierge, registered architects and interior studios can commission bespoke laser-engraved labels, custom RAL powder-coated finishes, and solid brass patinas for high-end residential and hospitality projects.',
    category: 'Trade & Bespoke'
  }
];

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#F7F5F0] dark:bg-[#0B132B] border-b border-[#E5E1D8] dark:border-[#1D2B52] transition-colors duration-300 select-none">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Title and Concierge Card (Deep Navy #0B132B with Warm Amber #C5A059) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFFFFF] dark:bg-[#0F1B3D] border border-[#C5A059]/40 text-[#C5A059] text-[11px] uppercase tracking-[0.2em] font-semibold mb-3 shadow-xs">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Atelier Inquiries</span>
              </div>
              <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl font-normal text-[#1F2421] dark:text-[#F7F5F0] tracking-tight">
                Frequently Asked <br />
                <span className="italic font-serif-heading text-[#C5A059]">Questions</span>
              </h2>
              <p className="mt-4 font-sans-body text-sm text-[#1F2421]/75 dark:text-[#F7F5F0]/75 font-light leading-relaxed">
                Clear answers regarding our 3-part modular engineering, backbox compatibility, lifetime guarantee, and trade architect specification programs.
              </p>
            </div>

            {/* Concierge Box in Deep Navy #0B132B with Metallic Gold Accents */}
            <div className="bg-[#0B132B] text-white p-8 rounded-[24px] border border-[#C5A059]/30 shadow-xl space-y-6">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#C5A059]" />
                <h3 className="font-serif-heading text-2xl text-[#F7F5F0]">
                  Dedicated Client Concierge
                </h3>
              </div>
              <p className="text-xs text-neutral-300 font-sans-body leading-relaxed">
                Need guidance on circuit loads, multi-gang layout configurations, or trade volume discounts? Our Milan engineering advisory team is available for direct consultation.
              </p>

              <div className="space-y-3 pt-2 text-xs">
                <a
                  href="mailto:concierge@roshna-volt.com"
                  className="flex items-center gap-3 text-neutral-200 hover:text-[#C5A059] font-medium transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#C5A059]" />
                  <span>concierge@roshna-volt.com</span>
                </a>
                <div className="flex items-center gap-3 text-neutral-400">
                  <Clock className="w-4 h-4 text-[#C5A059]" />
                  <span>Mon–Sat: 9:00 AM – 7:00 PM CET</span>
                </div>
              </div>

              <a
                href="mailto:concierge@roshna-volt.com?subject=Roshna%20Architectural%20Hardware%20Consultation"
                className="block w-full text-center py-3.5 px-4 btn-gold-gradient rounded-full text-xs uppercase font-bold tracking-wider cursor-pointer"
              >
                Schedule Trade Consultation
              </a>
            </div>
          </div>

          {/* Right Column: FAQ Accordion */}
          <div className="lg:col-span-7 space-y-4">
            {FAQS.map((faq, index) => {
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
                    className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
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
