import React from 'react';
import { Sparkles, Zap, ShieldCheck, Gem, Layers, Flame, Box, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface MarqueeItem {
  id: string;
  isLogo?: boolean;
  textEn: string;
  textFa: string;
  highlight?: boolean;
  iconName: 'sparkles' | 'zap' | 'shield' | 'gem' | 'layers' | 'flame' | 'box' | 'check';
}

const MARQUEE_ITEMS: MarqueeItem[] = [
  // Pair 1
  {
    id: 'logo-1',
    isLogo: true,
    textEn: 'ROSHNA',
    textFa: 'روشنا',
    iconName: 'sparkles'
  },
  {
    id: 'm1',
    textEn: 'SWITCH TO QUALITY',
    textFa: 'سویچ به کیفیت برتر',
    iconName: 'zap'
  },
  {
    id: 'm2',
    textEn: '2.5MM ULTRA THIN',
    textFa: 'ضخامت ۲.۵ میلی‌متر بسیار باریک',
    highlight: true,
    iconName: 'layers'
  },

  // Pair 2
  {
    id: 'logo-2',
    isLogo: true,
    textEn: 'ROSHNA',
    textFa: 'روشنا',
    iconName: 'sparkles'
  },
  {
    id: 'm3',
    textEn: 'FLAME RETARDANT V-0',
    textFa: 'پلیمر نسوز معیاری V-0',
    iconName: 'flame'
  },
  {
    id: 'm4',
    textEn: 'STANDARD 86MM FIT',
    textFa: 'سازگاری کامل با قوطی معیاری ۸۶ میلی‌متر',
    highlight: true,
    iconName: 'box'
  },

  // Pair 3
  {
    id: 'logo-3',
    isLogo: true,
    textEn: 'ROSHNA',
    textFa: 'روشنا',
    iconName: 'sparkles'
  },
  {
    id: 'm5',
    textEn: '50,000+ TESTED ACTUATIONS',
    textFa: '+۵۰,۰۰۰ مرتبه کارکرد تضمین‌شده',
    iconName: 'check'
  },
  {
    id: 'm6',
    textEn: 'ANTI-ALLERGIC VELVET MATTE',
    textFa: 'سطح مات ضد حساسیت جلدی و پاکیزه',
    iconName: 'gem'
  },

  // Pair 4
  {
    id: 'logo-4',
    isLogo: true,
    textEn: 'ROSHNA',
    textFa: 'روشنا',
    iconName: 'sparkles'
  },
  {
    id: 'm7',
    textEn: 'SOLID BRASS TERMINALS',
    textFa: 'ترمینال‌های برنجی با هدایت برقی عالی',
    iconName: 'shield'
  },
  {
    id: 'm8',
    textEn: 'CHILD-SAFE PROTECTION',
    textFa: 'شاتر مصئون برای حفاظت اطفال',
    highlight: true,
    iconName: 'shield'
  }
];

export const BrandMarquee: React.FC = () => {
  const { isRtl } = useLanguage();

  const renderIcon = (iconName: MarqueeItem['iconName']) => {
    switch (iconName) {
      case 'sparkles':
        return <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />;
      case 'zap':
        return <Zap className="w-3.5 h-3.5 text-[#D4AF37]" />;
      case 'layers':
        return <Layers className="w-3.5 h-3.5 text-[#D4AF37]" />;
      case 'flame':
        return <Flame className="w-3.5 h-3.5 text-[#D4AF37]" />;
      case 'box':
        return <Box className="w-3.5 h-3.5 text-[#D4AF37]" />;
      case 'check':
        return <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />;
      case 'gem':
        return <Gem className="w-3.5 h-3.5 text-[#D4AF37]" />;
      case 'shield':
      default:
        return <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />;
    }
  };

  // Render list twice for a seamless infinite loop
  const duplicatedItems = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div
      className="group relative w-full overflow-hidden bg-[#0A1428] border-y border-[#D4AF37]/30 py-3.5 select-none transition-colors duration-300 shadow-md"
      aria-label="Brand Highlights Ticker"
    >
      {/* Left and Right Edge Gradient Masks for Cinematic Fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#0A1428] via-[#0A1428]/80 to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#0A1428] via-[#0A1428]/80 to-transparent z-10" />

      {/* Scrolling Track with Pause-On-Hover */}
      <div className={isRtl ? 'animate-marquee-rtl' : 'animate-marquee'}>
        {duplicatedItems.map((item, index) => {
          const text = isRtl ? item.textFa : item.textEn;

          return (
            <div
              key={`${item.id}-${index}`}
              className="inline-flex items-center gap-3 sm:gap-4 px-4 sm:px-6 shrink-0"
            >
              {item.isLogo ? (
                /* Official ROSHNA Brand Emblem & Logo Badge */
                <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 rounded-full bg-white border border-[#D4AF37]/60 shadow-sm hover:border-[#D4AF37] hover:shadow-[0_0_12px_rgba(212,175,55,0.35)] transition-all">
                  <img
                    src="/assets/roshna-volt-emblem.png"
                    alt="ROSHNA"
                    className="h-5 sm:h-6 w-auto object-contain shrink-0 select-none"
                    loading="eager"
                    onError={(e) => {
                      e.currentTarget.src = '/assets/roshna-logo-official-no-volt.png';
                    }}
                  />
                  <span className="text-xs sm:text-sm font-black tracking-wider text-[#0A1428] uppercase whitespace-nowrap">
                    {isRtl ? 'روشنا' : 'ROSHNA'}
                  </span>
                </div>
              ) : (
                <>
                  {/* Gold Icon */}
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white/5 border border-[#D4AF37]/30 shrink-0">
                    {renderIcon(item.iconName)}
                  </div>

                  {/* Ticker Text */}
                  <span
                    className={`text-xs sm:text-sm font-bold tracking-[0.18em] uppercase transition-colors whitespace-nowrap ${
                      item.highlight
                        ? 'text-[#D4AF37] group-hover:text-amber-300 drop-shadow-[0_0_8px_rgba(212,175,55,0.3)]'
                        : 'text-white/90 group-hover:text-white'
                    }`}
                  >
                    {text}
                  </span>
                </>
              )}

              {/* Decorative Gold Separator Star */}
              <span className="text-[#D4AF37]/50 text-xs font-serif pl-2 select-none">
                ✦
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
