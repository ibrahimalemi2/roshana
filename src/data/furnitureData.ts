import { Product, HeroSlide, QuadrantItem, ValuePillar, Testimonial, MetricStat, RoshnaFeature } from '../types';
import { IMAGES } from './imageAssets';

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'hero-1',
    title: '1G 1W 10A SWITCH (سویچ تک خانه تک مسیر)',
    headline: 'Powering Quality. Inspiring Tomorrow.',
    category: 'Switches',
    tagline: '10A 250V~ | Ultra Thin (بسیار نازک) | Luxury Design (طراحی لوکس). Velvet-matte tactile touch.',
    price: 90.01,
    image: IMAGES.SINGLE_SWITCH_WARM_CREAM,
    material: 'Flame-Retardant Polymer & Solid Brass Terminals',
    origin: 'Standard 86mm Fit',
    designer: 'Roshna Volt'
  },
  {
    id: 'hero-2',
    title: '2G 1W 10A SWITCH (سویچ دو خانه تک مسیر)',
    headline: 'Modern Dual Gang Control',
    category: 'Switches',
    tagline: '10A 250V~ | Ultra Thin (بسیار نازک) | Luxury Design (طراحی لوکس). Dual rocker control.',
    price: 110,
    image: IMAGES.DUAL_SWITCH_DARK_MARBLE,
    material: 'Reinforced PC with Anti-Allergic Surface',
    origin: 'Standard 86mm Fit',
    designer: 'Roshna Volt'
  },
  {
    id: 'hero-3',
    title: '2P+E SOCKET (ساکت دو پین با ارت)',
    headline: 'Safe & Reliable Power',
    category: 'Sockets',
    tagline: '16A 250V~ | Ultra Thin (بسیار نازک) | Luxury Design (طراحی لوکس). Grounded child protection.',
    price: 125,
    image: IMAGES.WALL_SOCKET_CREAM_FLUTED,
    material: 'Flame-Retardant Body & High-Elasticity Brass',
    origin: 'Standard 86mm Fit',
    designer: 'Roshna Volt'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'roshna-sw-01',
    name: '1G 1W 10A SWITCH',
    subtitle: 'سویچ تک خانه تک مسیر ۱۰ آمپر',
    category: 'Switches',
    collection: 'Roshna Modern Series',
    price: 90.01,
    originalPrice: 115,
    rating: 4.95,
    reviewCount: 184,
    image: IMAGES.SINGLE_SWITCH_WARM_CREAM,
    gallery: [
      IMAGES.SINGLE_SWITCH_WARM_CREAM,
      IMAGES.SINGLE_SWITCH_STUDIO_ANGLED,
      IMAGES.SINGLE_SWITCH_MINIMAL_FLAT,
      IMAGES.EXPLODED_SWITCH_COMPONENTS
    ],
    dimensions: 'W 86mm × H 86mm × D 9.2mm (Mounting Depth: 25mm)',
    material: 'Flame-Retardant Polymer, Phosphor Bronze Clips, Heavy-Duty Steel Mounting Subframe',
    description: 'سویچ تک خانه تک مسیر ۱۰ آمپر با طراحی لوکس و بسیار نازک (Ultra Thin). دارای سطح مات ضد باکتری و ضد حساسیت، مقاوم در برابر حرارت و ساخته شده از پلیمر با کیفیت ممتاز.',
    badge: 'AFN 90.01',
    colorOptions: [
      { name: 'Pure Matte White', hex: '#F7F7F7' }
    ],
    features: [
      '10 A 250 V~',
      'بسیار نازک (Ultra Thin)',
      'طراحی لوکس (Luxury Design)',
      'سطح ضد باکتری (Antibacterial Surface)',
      'مواد غیر حساسیت زا (Non-Allergenic)',
      'مقاوم در برابر حرارت (Heat Resistant)',
      'عمر طولانی و دوام بالا'
    ],
    inStock: true,
    modelCode: '1G 1W 10A SWITCH',
    ratedPower: '10 A 250 V~',
    profile: 'Ultra Thin (بسیار نازک)',
    designStyle: 'Luxury Design (طراحی لوکس)'
  },
  {
    id: 'roshna-sw-02',
    name: '2G 1W 10A SWITCH',
    subtitle: 'سویچ دو خانه تک مسیر ۱۰ آمپر',
    category: 'Switches',
    collection: 'Roshna Modern Series',
    price: 110,
    originalPrice: 135,
    rating: 4.9,
    reviewCount: 128,
    image: IMAGES.DUAL_SWITCH_DARK_MARBLE,
    gallery: [
      IMAGES.DUAL_SWITCH_DARK_MARBLE,
      IMAGES.DUAL_SWITCH_PERSPECTIVE,
      IMAGES.DUAL_SWITCH_MINIMAL_WALL,
      IMAGES.DUAL_SWITCH_ELEVATION
    ],
    dimensions: 'W 86mm × H 86mm × D 9.2mm',
    material: 'High-Impact Flame-Retardant PC, Solid Brass Terminals, Reinforced Steel Base',
    description: 'سویچ دو خانه تک مسیر ۱۰ آمپر با طراحی لوکس و بسیار نازک (Ultra Thin). دارای مکانیزم دوپل نرم و دقیق، پلیمر با کیفیت ممتاز و عمر طولانی و دوام بالا.',
    badge: 'AFN 110',
    colorOptions: [
      { name: 'Pure Matte White', hex: '#F7F7F7' }
    ],
    features: [
      '10 A 250 V~',
      'بسیار نازک (Ultra Thin)',
      'طراحی لوکس (Luxury Design)',
      'کنترل دوگانه تک مسیر',
      'پلیمر با کیفیت ممتاز (Premium Polymer)',
      'مقاوم در برابر حرارت (Heat Resistant)',
      'عمر طولانی و دوام بالا'
    ],
    inStock: true,
    modelCode: '2G 1W 10A SWITCH',
    ratedPower: '10 A 250 V~',
    profile: 'Ultra Thin (بسیار نازک)',
    designStyle: 'Luxury Design (طراحی لوکس)'
  },
  {
    id: 'roshna-soc-01',
    name: '2P+E SOCKET',
    subtitle: 'ساکت دو پین با ارت',
    category: 'Sockets',
    collection: 'Roshna Modern Series',
    price: 125,
    originalPrice: 150,
    rating: 5.0,
    reviewCount: 96,
    image: IMAGES.WALL_SOCKET_CREAM_FLUTED,
    gallery: [
      IMAGES.WALL_SOCKET_CREAM_FLUTED,
      IMAGES.WALL_SOCKET_DARK_TIMBER,
      IMAGES.WALL_SOCKET_PROFILE_STUDIO,
      IMAGES.WALL_SOCKET_FRONTAL_STUDIO,
      IMAGES.WALL_SOCKET_MACRO_DETAIL
    ],
    dimensions: 'W 86mm × H 86mm × D 32mm (Recessed Depth: 24mm)',
    material: 'V-0 Fire-Resistant Polymer, Solid Brass Earth Clips, Cold-Rolled Steel Frame',
    description: 'ساکت دو پین با ارت ۱۶ آمپر ۲۵۰ ولت با طراحی لوکس و بسیار نازک (Ultra Thin). امن و سازگار با محیط زیست، دارای محافظ داخلی کودک و نصب آسان بر روی قوطی‌های استاندارد.',
    badge: 'AFN 125',
    colorOptions: [
      { name: 'Pure Matte White', hex: '#F7F7F7' }
    ],
    features: [
      '16 A 250 V~',
      'بسیار نازک (Ultra Thin)',
      'طراحی لوکس (Luxury Design)',
      'اتصال دو پین با ارت (2P+E)',
      'امن و سازگار با محیط زیست (Eco-Friendly)',
      'نصب آسان (Easy Installation)',
      'مقاوم در برابر حرارت (Heat Resistant)'
    ],
    inStock: true,
    modelCode: '2P+E SOCKET',
    ratedPower: '16 A 250 V~',
    profile: 'Ultra Thin (بسیار نازک)',
    designStyle: 'Luxury Design (طراحی لوکس)'
  }
];

export const QUADRANT_ITEMS: QuadrantItem[] = [
  {
    id: 'quad-1',
    title: 'Solid Metal Subframe',
    subtitle: 'Durability',
    category: 'Subframe Engineering',
    image: IMAGES.EXPLODED_3PARTS,
    material: 'Cold-Rolled Steel Plate',
    description: 'Rigid steel backframe ensuring flush, zero-flex alignment on standard 86mm wall boxes.',
    tag: 'Durability'
  },
  {
    id: 'quad-2',
    title: 'Anti-Allergic Matte Surface',
    subtitle: 'Hygiene & Comfort',
    category: 'Surface Hygiene',
    image: IMAGES.SINGLE_SWITCH_WARM_CREAM,
    material: 'Skin-Friendly Polymer',
    description: 'Premium surface materials selected to reduce skin irritation and minimize microorganism buildup.',
    tag: 'Hygiene & Comfort'
  },
  {
    id: 'quad-3',
    title: 'Tactile Rocker Mechanism',
    subtitle: 'Performance',
    category: 'Switching Control',
    image: IMAGES.DUAL_SWITCH_DARK_MARBLE,
    material: 'Calibrated Precision Springs',
    description: 'Smooth, quiet action designed for comfortable daily operation and frequent touch.',
    tag: 'Performance'
  },
  {
    id: 'quad-4',
    title: 'Child-Safe Protection',
    subtitle: 'Safety',
    category: 'Safety Aperture',
    image: IMAGES.WALL_SOCKET_CREAM_FLUTED,
    material: 'Flame-Retardant Polymer',
    description: 'Built with flame-retardant polymers and secure internal mechanisms for total family safety.',
    tag: 'Safety'
  }
];

export const VALUE_PILLARS: ValuePillar[] = [
  {
    id: 'pillar-1',
    number: '01',
    title: 'Reinforced Metal Subframe',
    shortDesc: 'Solid steel mounting frame for zero bending and permanent flat wall alignment.',
    fullDesc: 'The sturdy metal base ensures the switch stays firmly anchored to the wall box without warping or loosening over years of daily pressing.',
    iconName: 'Gem',
    highlight: 'Heavy-Duty Steel Base'
  },
  {
    id: 'pillar-2',
    number: '02',
    title: 'Anti-Allergic & Flame-Retardant Polymer',
    shortDesc: 'V-0 fire-resistant polycarbonate with skin-safe velvet matte texture.',
    fullDesc: 'Specially chosen for high thermal resistance and self-extinguishing safety. The matte texture resists fingerprints and helps reduce microbial buildup.',
    iconName: 'Leaf',
    highlight: 'Flame-Retardant & Skin-Friendly'
  },
  {
    id: 'pillar-3',
    number: '03',
    title: 'Smooth & Quiet Operation',
    shortDesc: 'Micro-calibrated springs delivering smooth, tactile, whisper-quiet clicks.',
    fullDesc: 'Internal mechanisms are tested for over 50,000 actuations, offering solid, reassuring tactile feedback with every switch.',
    iconName: 'Sparkles',
    highlight: '+50,000 Tested Actuations'
  },
  {
    id: 'pillar-4',
    number: '04',
    title: 'Electrical Safety & Protection',
    shortDesc: 'High-grade brass terminals and automatic safety shutters for peace of mind.',
    fullDesc: 'Socket apertures feature child-protection safety shutters, and high-conductivity brass terminals prevent overheating under continuous load.',
    iconName: 'ShieldCheck',
    highlight: '10-Year Quality Guarantee'
  }
];

export const MATERIALS_DATA = [
  {
    id: 'mat-1',
    name: 'Flame-Retardant Matte Cover',
    origin: 'High-Grade Polymer',
    category: 'Anti-Allergic Surface',
    description: 'Self-extinguishing V-0 polycarbonate with a smooth matte texture that prevents skin irritation and reduces the buildup of microorganisms.',
    image: IMAGES.WALL_SOCKET_MACRO_DETAIL,
    characteristics: ['Flame-retardant safety', 'Velvet matte anti-glare finish', 'Anti-fingerprint and hygienic']
  },
  {
    id: 'mat-2',
    name: 'Reinforced Steel Subframe',
    origin: 'Galvanized Metal',
    category: 'Structural Base',
    description: 'Rigid steel mounting bracket with universal alignment screw slots, ensuring flush installation on all standard 86mm wall boxes.',
    image: IMAGES.EXPLODED_3PARTS,
    characteristics: ['Zero torsion or bending', 'Multi-point leveling slots', 'Rust-resistant protective coating']
  },
  {
    id: 'mat-3',
    name: 'High-Conductivity Brass Clips',
    origin: 'Spring Brass Alloy',
    category: 'Electrical Terminal',
    description: 'Heavy-duty brass terminals that maintain high elasticity and firm clamping pressure on plugs and house wiring over decades.',
    image: IMAGES.EXPLODED_SWITCH_COMPONENTS,
    characteristics: ['99%+ electrical conductivity', 'Fatigue-resistant spring retention', 'Low contact resistance & heat dissipation']
  },
  {
    id: 'mat-4',
    name: 'Spark-Resistant Contacts',
    origin: 'Silver Alloy',
    category: 'Switching Mechanism',
    description: 'Durable contact points engineered to prevent arcing and electrical wear, ensuring smooth, safe switching for all lighting loads.',
    image: IMAGES.DUAL_SWITCH_PERSPECTIVE,
    characteristics: ['Spark & arc prevention', 'Tested for 50,000+ switches', 'Optimized for modern LED loads']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Ahmad Reshad',
    role: 'Master Electrical Contractor',
    location: 'Kabul, Afghanistan',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    rating: 5,
    quote: 'Installation is straightforward and clean. The steel backplate fits standard 86mm boxes perfectly without flexing, and the wire terminals clamp firmly.',
    purchasedProduct: 'Single & Double Switches',
    date: 'Verified Electrician'
  },
  {
    id: 'test-2',
    name: 'Maryam Sadat',
    role: 'Residential Client',
    location: 'Herat, Afghanistan',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    rating: 5,
    quote: 'The matte finish feels very smooth to the touch, does not leave fingerprints, and looks significantly more modern and clean than ordinary glossy switches.',
    purchasedProduct: 'Modern Power Sockets',
    date: 'Verified Homeowner'
  },
  {
    id: 'test-3',
    name: 'Farhad Nawabi',
    role: 'Commercial Project Supervisor',
    location: 'Mazar-i-Sharif, Afghanistan',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80',
    rating: 5,
    quote: 'We ordered over 200 units for an office renovation via WhatsApp. Delivery was prompt, prices were reasonable, and the quality has been reliable.',
    purchasedProduct: 'Full Facility Order',
    date: 'Commercial Contractor'
  }
];

export const METRIC_STATS: MetricStat[] = [
  {
    value: '99%',
    label: 'Customer Satisfaction',
    detail: 'Trusted by homeowners and electricians nationwide'
  },
  {
    value: '10-Year',
    label: 'Quality Guarantee',
    detail: 'Direct store replacement for internal mechanisms'
  },
  {
    value: '50K+',
    label: 'Tested Actuations',
    detail: 'Smooth and reliable switching performance'
  },
  {
    value: '86mm',
    label: 'Standard Box Fit',
    detail: 'Compatible with standard electrical wall boxes'
  }
];

export const ROSHNA_7_FEATURES: RoshnaFeature[] = [
  {
    id: 'feat-1',
    titleEn: 'Antibacterial Surface',
    titleFa: 'سطح ضد باکتری',
    iconName: 'ShieldPlus'
  },
  {
    id: 'feat-2',
    titleEn: 'Non-Allergenic Material',
    titleFa: 'مواد غیر حساسیت زا',
    iconName: 'Leaf'
  },
  {
    id: 'feat-3',
    titleEn: 'Heat Resistant',
    titleFa: 'مقاوم در برابر حرارت',
    iconName: 'Flame'
  },
  {
    id: 'feat-4',
    titleEn: 'Premium Polymer Material',
    titleFa: 'پلیمر با کیفیت ممتاز',
    iconName: 'Layers'
  },
  {
    id: 'feat-5',
    titleEn: 'Long Life Durability',
    titleFa: 'عمر طولانی و دوام بالا',
    iconName: 'Cog'
  },
  {
    id: 'feat-6',
    titleEn: 'Easy Installation',
    titleFa: 'نصب آسان',
    iconName: 'Wrench'
  },
  {
    id: 'feat-7',
    titleEn: 'Safe & Eco-Friendly',
    titleFa: 'امن و سازگار با محیط زیست',
    iconName: 'HeartHandshake'
  }
];

export const ROSHNA_CONTACT_INFO = {
  city: 'Kabul, Afghanistan',
  cityFa: 'کابل، افغانستان',
  address: 'Lab-e-Jar., Kabul',
  addressFa: 'چهارراهی لب‌جر، کابل',
  primaryPhone: '+93 780 88000 7',
  secondaryPhone: '+93 702 1416 16',
  whatsappNumber: '93780880007',
  whatsappUrl: 'https://wa.me/93780880007',
  email: 'info@roshna.co',
  website: 'www.roshna.co',
  social: {
    linkedin: 'https://www.linkedin.com/company/roshna',
    instagram: 'https://www.instagram.com/roshna',
    facebook: 'https://www.facebook.com/roshna',
    youtube: 'https://www.youtube.com/@roshna'
  },
  slogans: {
    en: {
      powering: 'Powering Quality. Inspiring Tomorrow.',
      motto: 'A SMALL SWITCH A BRIGHTER TOMORROW',
      headline: 'Premium Switches & Sockets',
      tagline: 'Modern Design | Safer Homes | Brighter Lives',
      brandSub: 'SWITCH TO QUALITY'
    },
    fa: {
      powering: 'کیفیت امروز روشنایی فردا',
      headline: 'سویچ و ساکت های با کیفیت ممتاز',
      tagline: 'طراحی مدرن | خانه های امن تر | روشنایی زندگی ها',
      brandSub: 'کیفیت برتر، زندگی روشن‌تر'
    }
  }
};

