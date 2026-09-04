import fs from 'fs';
import path from 'path';

const files = [
  'src/data/furnitureData.ts',
  'src/data/imageAssets.ts',
  'src/components/FAQSection.tsx',
  'src/components/ValueProposition.tsx',
  'src/components/SocialProofStats.tsx',
  'src/components/MaterialShowcase.tsx',
  'src/components/InteractiveVisualBreak.tsx',
  'src/components/ProductShowcase.tsx',
  'src/components/ProductQuickViewModal.tsx',
  'src/components/CartDrawer.tsx',
  'src/components/SearchModal.tsx'
];

for (const file of files) {
  const filePath = path.resolve(file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replaceAll('Rova', 'Roshna');
    content = content.replaceAll('rova-', 'roshna-');
    content = content.replaceAll('rova-atelier', 'roshna-volt');
    
    // Also replace placeholder brass accents with Roshna color tokens
    content = content.replaceAll('#C5A880', '#F59E0B'); // radiant amber
    content = content.replaceAll('#8C7355', '#163B72'); // brand navy
    content = content.replaceAll('#B8977E', '#D97706'); // warm volt amber
    content = content.replaceAll('#F9F6F0', '#F8FAFC'); // light canvas
    content = content.replaceAll('#EFE9DE', '#EEF4FB'); // soft navy tint
    content = content.replaceAll('#EDE6DD', '#FFFFFF'); // clean card surface
    content = content.replaceAll('#E6DFD5', '#E2E8F0'); // crisp border
    content = content.replaceAll('#D9D2C7', '#CBD5E1'); // subtle border
    content = content.replaceAll('#DDD6CB', '#E2E8F0');
    content = content.replaceAll('#1A1A1A', '#0F172A'); // deep navy text

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated brand identity in: ${file}`);
  }
}
