import React from 'react';

interface RoshnaLogoProps {
  className?: string;
  variant?: 'color' | 'monochrome-dark' | 'monochrome-white';
  showSubtext?: boolean;
}

export const RoshnaLogo: React.FC<RoshnaLogoProps> = ({
  className = 'h-8 w-auto',
  variant = 'color',
  showSubtext = false
}) => {
  const navyColor = variant === 'monochrome-white' ? '#FFFFFF' : '#0B132B';
  const goldColor = variant === 'monochrome-white' ? '#D4AF37' : '#C5A059';
  const goldRing = variant === 'monochrome-white' ? '#D4AF37' : '#C5A059';
  const goldOuter = variant === 'monochrome-white' ? '#E6CA65' : '#9E7B36';

  return (
    <div className="inline-flex flex-col items-start select-none">
      <svg
        viewBox="0 0 760 170"
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Roshna Logo"
      >
        <defs>
          <linearGradient id={`roshnaNavy_${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color={variant === 'monochrome-white' ? '#FFFFFF' : '#1F2421'} />
            <stop offset="100%" stop-color={variant === 'monochrome-white' ? '#F7F5F0' : '#0B132B'} />
          </linearGradient>

          <linearGradient id={`roshnaGold_${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#D4AF37" />
            <stop offset="50%" stop-color="#C5A059" />
            <stop offset="100%" stop-color="#9E7B36" />
          </linearGradient>

          <radialGradient id={`sunCoreGlow_${variant}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#FBF7EE" stop-opacity="0.9" />
            <stop offset="60%" stop-color="#D4AF37" stop-opacity="0.3" />
            <stop offset="100%" stop-color="#C5A059" stop-opacity="0" />
          </radialGradient>
        </defs>

        {/* LETTER 'R' with signature wave curve */}
        <g id="letter-R">
          <path
            d="M 42 38 L 104 38 C 126 38, 140 48, 140 70 C 140 90, 125 100, 104 100 L 78 100 L 78 138 L 42 138 Z M 78 64 L 100 64 C 108 64, 114 67, 114 70 C 114 73, 108 76, 100 76 L 78 76 Z"
            fill={`url(#roshnaNavy_${variant})`}
          />
          <path
            d="M 96 95 C 110 95, 128 107, 140 124 C 146 132, 155 138, 168 138 L 144 138 C 130 138, 120 128, 110 114 C 103 104, 96 100, 88 98 Z"
            fill={`url(#roshnaNavy_${variant})`}
          />
          {/* Wave baseline accent */}
          <path
            d="M 36 132 C 48 132, 60 135, 74 142 C 86 148, 104 150, 126 147 C 100 148, 82 144, 70 138 C 58 133, 48 131, 36 132 Z"
            fill={`url(#roshnaNavy_${variant})`}
            opacity="0.9"
          />
        </g>

        {/* LETTER 'O' : RADIANT METALLIC GOLD SUN */}
        <g id="letter-O" transform="translate(230, 88)">
          <circle cx="0" cy="0" r="46" fill={`url(#sunCoreGlow_${variant})`} />
          <circle cx="0" cy="0" r="17.5" fill="none" stroke={`url(#roshnaGold_${variant})`} strokeWidth="6.5" />

          {/* Inner 8 dots */}
          <g fill={goldColor}>
            <circle cx="0" cy="-29" r="2.8" />
            <circle cx="20.5" cy="-20.5" r="2.8" />
            <circle cx="29" cy="0" r="2.8" />
            <circle cx="20.5" cy="20.5" r="2.8" />
            <circle cx="0" cy="29" r="2.8" />
            <circle cx="-20.5" cy="20.5" r="2.8" />
            <circle cx="-29" cy="0" r="2.8" />
            <circle cx="-20.5" cy="-20.5" r="2.8" />
          </g>

          {/* Middle 12 dots */}
          <g fill={goldRing}>
            <circle cx="0" cy="-38" r="3.2" />
            <circle cx="19" cy="-32.9" r="3.2" />
            <circle cx="32.9" cy="-19" r="3.2" />
            <circle cx="38" cy="0" r="3.2" />
            <circle cx="32.9" cy="19" r="3.2" />
            <circle cx="19" cy="32.9" r="3.2" />
            <circle cx="0" cy="38" r="3.2" />
            <circle cx="-19" cy="32.9" r="3.2" />
            <circle cx="-32.9" cy="19" r="3.2" />
            <circle cx="-38" cy="0" r="3.2" />
            <circle cx="-32.9" cy="-19" r="3.2" />
            <circle cx="-19" cy="-32.9" r="3.2" />
          </g>

          {/* Outer 16 solar dots */}
          <g fill={goldOuter}>
            <circle cx="0" cy="-48" r="2.6" />
            <circle cx="18.4" cy="-44.3" r="2.6" />
            <circle cx="33.9" cy="-33.9" r="2.6" />
            <circle cx="44.3" cy="-18.4" r="2.6" />
            <circle cx="48" cy="0" r="2.6" />
            <circle cx="44.3" cy="18.4" r="2.6" />
            <circle cx="33.9" cy="33.9" r="2.6" />
            <circle cx="18.4" cy="44.3" r="2.6" />
            <circle cx="0" cy="48" r="2.6" />
            <circle cx="-18.4" cy="44.3" r="2.6" />
            <circle cx="-33.9" cy="33.9" r="2.6" />
            <circle cx="-44.3" cy="18.4" r="2.6" />
            <circle cx="-48" cy="0" r="2.6" />
            <circle cx="-44.3" cy="-18.4" r="2.6" />
            <circle cx="-33.9" cy="-33.9" r="2.6" />
            <circle cx="-18.4" cy="-44.3" r="2.6" />
          </g>
        </g>

        {/* LETTER 'S' */}
        <g id="letter-S">
          <path
            d="M 378 64 C 370 48, 355 42, 336 42 C 313 42, 298 55, 298 72 C 298 88, 310 97, 334 103 C 358 109, 368 116, 368 128 C 368 141, 354 148, 335 148 C 314 148, 298 138, 291 120 L 267 130 C 278 156, 303 169, 335 169 C 372 169, 396 151, 396 127 C 396 108, 381 97, 357 91 C 334 85, 325 79, 325 68 C 325 58, 336 52, 351 52 C 364 52, 375 58, 380 67 Z"
            fill={`url(#roshnaNavy_${variant})`}
          />
        </g>

        {/* LETTER 'H' */}
        <g id="letter-H">
          <path
            d="M 425 40 L 452 40 L 452 83 L 497 83 L 497 40 L 524 40 L 524 142 L 497 142 L 497 105 L 452 105 L 452 142 L 425 142 Z"
            fill={`url(#roshnaNavy_${variant})`}
          />
        </g>

        {/* LETTER 'N' */}
        <g id="letter-N">
          <path
            d="M 552 40 L 579 40 L 622 108 L 622 40 L 648 40 L 648 142 L 621 142 L 578 74 L 578 142 L 552 142 Z"
            fill={`url(#roshnaNavy_${variant})`}
          />
        </g>

        {/* LETTER 'A' with swoosh crossbar */}
        <g id="letter-A">
          <path
            d="M 708 38 L 670 142 L 698 142 L 709 112 L 736 112 L 747 142 L 775 142 L 736 38 Z M 722 71 L 731 96 L 713 96 Z"
            fill={`url(#roshnaNavy_${variant})`}
          />
          <path
            d="M 686 110 C 700 118, 722 120, 744 112 C 756 108, 768 112, 776 118 C 762 122, 742 123, 726 119 C 712 116, 698 114, 686 110 Z"
            fill={`url(#roshnaNavy_${variant})`}
          />
        </g>
      </svg>

      {showSubtext && (
        <div className="flex items-center gap-2 mt-0.5 tracking-[0.25em] text-[9px] uppercase font-semibold text-[#0B132B]/80">
          <span>Architectural Hardware</span>
          <span className="w-1 h-1 rounded-full bg-[#C5A059]" />
          <span className="text-[#C5A059]">Volt</span>
        </div>
      )}
    </div>
  );
};
