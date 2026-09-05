const sharp = require('sharp');
const fs = require('fs');

const cx = 155, cy = 60;
let sunDots = '';
let sunRays = '';

for (let i = 0; i < 12; i++) {
  const angle = (i * 30 - 90) * Math.PI / 180;
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  
  // Dot at radius 27.5
  const rDot = 27.5;
  const dx = cx + rDot * cos;
  const dy = cy + rDot * sin;
  sunDots += `      <circle cx="${dx.toFixed(2)}" cy="${dy.toFixed(2)}" r="2.8" />\n`;
  
  // Ray from radius 33 to 42.5 (top ray at 12 o'clock reaches 47)
  const r1 = 33;
  const r2 = (i === 0) ? 47 : 42.5;
  const perpAngle = angle + Math.PI / 2;
  const halfW = 2.4;
  
  const x1 = cx + r1 * cos - halfW * Math.cos(perpAngle);
  const y1 = cy + r1 * sin - halfW * Math.sin(perpAngle);
  const x2 = cx + r1 * cos + halfW * Math.cos(perpAngle);
  const y2 = cy + r1 * sin + halfW * Math.sin(perpAngle);
  const tipX = cx + r2 * cos;
  const tipY = cy + r2 * sin;
  
  sunRays += `      <polygon points="${x1.toFixed(2)},${y1.toFixed(2)} ${x2.toFixed(2)},${y2.toFixed(2)} ${tipX.toFixed(2)},${tipY.toFixed(2)}" />\n`;
}

// Beacon dot for top ray
const topBeacon = `      <circle cx="${cx}" cy="${(cy - 53).toFixed(2)}" r="2.2" />\n`;

function buildSvg(letterColor, sunColor) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 120" width="100%" height="100%" fill="none">
  <!-- Roshna Official Logo Vector -->
  <!-- LETTER R: Iconic Dual Dynamic Waves -->
  <g fill="${letterColor}">
    <!-- Upper Stream of R -->
    <path d="M 16 33 C 24 33, 50 32, 68 33 C 86 34, 98 44, 98 56 C 98 67, 86 76, 68 76 C 54 76, 42 75, 34 74 C 30 73, 31 66, 37 66 C 46 65, 58 66, 68 66 C 78 66, 84 61, 84 55 C 84 48, 77 44, 65 44 C 48 44, 28 44, 16 44 Z" />
    
    <!-- Lower Stream & Leg of R -->
    <path d="M 14 59 C 24 59, 44 65, 54 74 C 64 83, 76 92, 102 94 C 92 94, 76 89, 66 82 C 55 74, 42 68, 26 68 C 18 68, 14 65, 14 59 Z" />
  </g>

  <!-- LETTER O: Golden Radiant Sun -->
  <g fill="${sunColor}">
    <!-- Central Ring -->
    <path d="M ${cx} ${cy - 17.5} A 17.5 17.5 0 1 1 ${cx - 0.01} ${cy - 17.5} M ${cx} ${cy - 10.5} A 10.5 10.5 0 1 0 ${cx + 0.01} ${cy - 10.5} Z" fill-rule="evenodd" />
${sunDots}${sunRays}${topBeacon}  </g>

  <!-- LETTERS S, H, N, A in Clean Bold Geometric Sans -->
  <g fill="${letterColor}">
    <!-- LETTER S -->
    <path d="M 252 46 C 246 36, 235 32, 222 32 C 205 32, 195 42, 195 54 C 195 67, 206 74, 222 78 C 240 82, 248 88, 248 97 C 248 108, 236 116, 220 116 C 203 116, 192 107, 187 96 L 199 91 C 203 99, 210 105, 220 105 C 229 105, 236 100, 236 94 C 236 86, 229 81, 214 77 C 197 72, 184 65, 184 53 C 184 40, 196 22, 222 22 C 237 22, 248 29, 254 40 Z" transform="matrix(0.85 0 0 0.85 52 14)" />

    <!-- LETTER H -->
    <path d="M 282 33 L 295 33 L 295 57 L 331 57 L 331 33 L 344 33 L 344 94 L 331 94 L 331 69 L 295 69 L 295 94 L 282 94 Z" />

    <!-- LETTER N -->
    <path d="M 368 33 L 381 33 L 420 81 L 420 33 L 433 33 L 433 94 L 420 94 L 381 46 L 381 94 L 368 94 Z" />

    <!-- LETTER A with Stylized Extended Crossbar -->
    <path d="M 474 33 L 452 94 L 466 94 L 473 73 L 499 73 L 506 94 L 520 94 L 498 33 Z M 486 38 L 495 62 L 477 62 Z" />
    <!-- Dynamic crossbar swoosh on A -->
    <path d="M 458 68 C 463 67, 468 66, 473 64 L 474 71 L 458 72 Z" />
  </g>
</svg>`;
}

const colorSvg = buildSvg('#0B3C7B', '#EAA023');
const whiteSvg = buildSvg('#FFFFFF', '#EAA023');

fs.writeFileSync('public/assets/roshna-brand-vector.svg', colorSvg);
fs.writeFileSync('public/assets/roshna-brand-vector-white.svg', whiteSvg);

sharp(Buffer.from(colorSvg))
  .png()
  .toFile('public/assets/test-roshna-logo.png')
  .then(() => console.log('Vector logo generated successfully!'));
