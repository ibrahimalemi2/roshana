import React from 'react';

export interface RoshnaSunburstProps {
  className?: string;
  animate?: boolean;
  glow?: boolean;
}

export const RoshnaSunburst: React.FC<RoshnaSunburstProps> = ({
  className = 'w-24 h-24 sm:w-28 sm:h-28',
  animate = true,
  glow = true
}) => {
  // 12 inner circular beads orbiting around the central solar ring (radius = 33)
  const innerBeads = Array.from({ length: 12 }, (_, i) => {
    const angle = (i * 30 * Math.PI) / 180;
    return {
      cx: Number((33 * Math.cos(angle)).toFixed(2)),
      cy: Number((33 * Math.sin(angle)).toFixed(2)),
      r: 2.8
    };
  });

  // 16 middle circular beads (radius = 46)
  const middleBeads = Array.from({ length: 16 }, (_, i) => {
    const angle = (i * 22.5 * Math.PI) / 180;
    return {
      cx: Number((46 * Math.cos(angle)).toFixed(2)),
      cy: Number((46 * Math.sin(angle)).toFixed(2)),
      r: 3.2
    };
  });

  // 16 triangular radiant solar flares (radius = 54 to 68) with 4 cardinal points (74)
  const solarFlares = Array.from({ length: 16 }, (_, i) => {
    const angle = (i * 22.5 * Math.PI) / 180;
    const isCardinal = i % 4 === 0; // 0, 90, 180, 270 degrees
    const rTip = isCardinal ? 73 : 66;
    const rBase = 53;
    const halfWidthAngle = (2.2 * Math.PI) / 180;

    const xTip = Number((rTip * Math.cos(angle)).toFixed(2));
    const yTip = Number((rTip * Math.sin(angle)).toFixed(2));
    const xBase1 = Number((rBase * Math.cos(angle - halfWidthAngle)).toFixed(2));
    const yBase1 = Number((rBase * Math.sin(angle - halfWidthAngle)).toFixed(2));
    const xBase2 = Number((rBase * Math.cos(angle + halfWidthAngle)).toFixed(2));
    const yBase2 = Number((rBase * Math.sin(angle + halfWidthAngle)).toFixed(2));

    return `${xBase1},${yBase1} ${xTip},${yTip} ${xBase2},${yBase2}`;
  });

  // 16 outer delicate satellite points (radius = 61, offset by 11.25 deg)
  const satelliteDots = Array.from({ length: 16 }, (_, i) => {
    const angle = ((i * 22.5 + 11.25) * Math.PI) / 180;
    return {
      cx: Number((60 * Math.cos(angle)).toFixed(2)),
      cy: Number((60 * Math.sin(angle)).toFixed(2)),
      r: 1.8
    };
  });

  return (
    <div className={`relative inline-flex items-center justify-center select-none ${className}`}>
      {/* Ambient Gold Aura Backdrop */}
      {glow && (
        <div className="absolute -inset-8 sm:-inset-10 rounded-full bg-radial from-[#D4AF37]/35 via-[#D4AF37]/10 to-transparent blur-2xl animate-pulse pointer-events-none" />
      )}

      {/* Radiant Sunburst SVG */}
      <svg
        viewBox="-80 -80 160 160"
        className={`w-full h-full relative z-10 filter drop-shadow-[0_0_18px_rgba(212,175,55,0.45)] ${
          animate ? 'animate-[spin_40s_linear_infinite]' : ''
        }`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Roshna Sunburst Emblem"
      >
        <defs>
          {/* Metallic Gold Gradients */}
          <linearGradient id="roshnaSunburstGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF4D0" />
            <stop offset="25%" stopColor="#F5B942" />
            <stop offset="65%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#996D17" />
          </linearGradient>

          <linearGradient id="roshnaSunburstSpecular" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E5A93C" />
            <stop offset="50%" stopColor="#FFF8E7" />
            <stop offset="100%" stopColor="#D4AF37" />
          </linearGradient>

          <radialGradient id="roshnaSunburstCoreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFF9E6" stopOpacity="0.85" />
            <stop offset="45%" stopColor="#D4AF37" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Central Solar Core Soft Ambient Glow */}
        <circle cx="0" cy="0" r="30" fill="url(#roshnaSunburstCoreGlow)" />

        {/* Central Solid Solar Beveled Ring */}
        <circle
          cx="0"
          cy="0"
          r="18"
          fill="none"
          stroke="url(#roshnaSunburstGold)"
          strokeWidth="6.5"
        />

        {/* Inner Specular Highlight Rim */}
        <circle
          cx="0"
          cy="0"
          r="14.5"
          fill="none"
          stroke="url(#roshnaSunburstSpecular)"
          strokeWidth="1.2"
          opacity="0.9"
        />

        {/* Layer 1: 12 Inner Radiant Beads */}
        <g fill="url(#roshnaSunburstGold)">
          {innerBeads.map((bead, i) => (
            <circle key={`inner-${i}`} cx={bead.cx} cy={bead.cy} r={bead.r} />
          ))}
        </g>

        {/* Layer 2: 16 Middle Radiant Beads */}
        <g fill="url(#roshnaSunburstSpecular)">
          {middleBeads.map((bead, i) => (
            <circle key={`mid-${i}`} cx={bead.cx} cy={bead.cy} r={bead.r} />
          ))}
        </g>

        {/* Layer 3: 16 Triangular Radiant Solar Flares */}
        <g fill="url(#roshnaSunburstGold)">
          {solarFlares.map((points, i) => (
            <polygon key={`flare-${i}`} points={points} />
          ))}
        </g>

        {/* Layer 4: 16 Outer Orbital Satellite Star-Points */}
        <g fill="url(#roshnaSunburstSpecular)" opacity="0.85">
          {satelliteDots.map((dot, i) => (
            <circle key={`dot-${i}`} cx={dot.cx} cy={dot.cy} r={dot.r} />
          ))}
        </g>
      </svg>
    </div>
  );
};
