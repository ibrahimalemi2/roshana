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
  const isWhite = variant === 'monochrome-white';
  const logoSrc = isWhite
    ? '/assets/roshna-logo-1024-white.png'
    : '/assets/roshna-logo-1024.png';

  return (
    <div className="inline-flex flex-col items-start select-none">
      <img
        src={logoSrc}
        alt="ROSHNA"
        className={`object-contain ${className}`}
        loading="eager"
        decoding="async"
      />

      {showSubtext && (
        <div
          className={`flex items-center gap-2 mt-1 tracking-[0.25em] text-[9px] uppercase font-bold ${
            isWhite ? 'text-[#D4AF37]' : 'text-[#0A1428]'
          }`}
        >
          <span>SWITCH TO QUALITY</span>
        </div>
      )}
    </div>
  );
};
