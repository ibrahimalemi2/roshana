import React from 'react';

interface RoshnaEmblemProps {
  className?: string;
  size?: number;
  animate?: boolean;
}

export const RoshnaEmblem: React.FC<RoshnaEmblemProps> = ({
  className = 'w-10 h-10',
  animate = false
}) => {
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      {/* Ambient gold glow when animated */}
      {animate && (
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#0B132B]/30 via-[#C5A059]/30 to-[#D4AF37]/30 blur-md animate-pulse" />
      )}
      
      <svg
        viewBox="0 0 500 500"
        className="w-full h-full relative z-10 drop-shadow-sm"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Roshna Volt Emblem"
      >
        <defs>
          <linearGradient id="emblemRoshnaBlue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#1E3264" />
            <stop offset="50%" stop-color="#132247" />
            <stop offset="100%" stop-color="#0B132B" />
          </linearGradient>

          <linearGradient id="emblemRoshnaDark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#0F1B3D" />
            <stop offset="100%" stop-color="#060B18" />
          </linearGradient>

          <linearGradient id="emblemRoshnaHighlight" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#2D4685" />
            <stop offset="100%" stop-color="#5577C2" />
          </linearGradient>

          <linearGradient id="emblemRoshnaGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#D4AF37" />
            <stop offset="40%" stop-color="#C5A059" />
            <stop offset="100%" stop-color="#9E7B36" />
          </linearGradient>

          <linearGradient id="emblemRoshnaNeedle" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#C5A059" />
            <stop offset="100%" stop-color="#F3E5AB" />
          </linearGradient>
        </defs>

        {/* Deep Navy 'R' Upper Arch & Body */}
        <path
          d="M 180 110 L 320 110 C 365 110, 395 135, 395 170 C 395 205, 360 230, 320 230 L 280 230 L 255 270 L 205 270 L 235 220 L 165 220 L 200 160 L 285 160 C 305 160, 320 165, 320 170 C 320 175, 305 180, 285 180 L 230 180 L 210 210 L 170 210 Z"
          fill="url(#emblemRoshnaBlue)"
        />

        {/* Deep Navy 'R' Left Dynamic Wing */}
        <path
          d="M 165 220 L 245 220 L 190 320 L 230 320 L 155 410 L 185 305 L 140 305 Z"
          fill="url(#emblemRoshnaDark)"
        />

        {/* 3D Bevel Top Edge */}
        <path
          d="M 180 110 L 320 110 C 345 110, 370 120, 385 135 L 365 150 C 350 138, 335 130, 315 130 L 190 130 Z"
          fill="url(#emblemRoshnaHighlight)"
          opacity="0.8"
        />

        {/* Metallic Gold Lightning Bolt */}
        <path
          d="M 285 190 L 235 275 L 290 275 L 240 410 L 310 300 L 265 300 L 325 190 Z"
          fill="url(#emblemRoshnaGold)"
        />

        {/* High Needle Bolt Flare */}
        <path
          d="M 270 295 L 305 295 L 420 85 L 330 255 L 300 255 Z"
          fill="url(#emblemRoshnaNeedle)"
        />
      </svg>
    </div>
  );
};
