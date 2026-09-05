import { Product, HeroSlide, QuadrantItem, ValuePillar, Testimonial, MetricStat } from '../types';
import { IMAGES } from './imageAssets';

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'hero-1',
    title: 'سویچ یکپل (Single Switch)',
    headline: 'Comfort, Safety & Style',
    category: 'Switches',
    tagline: 'Modern 1-gang switch with velvet-matte tactile surface, skin-friendly anti-allergic materials, and whisper-quiet performance.',
    price: 145,
    image: IMAGES.SINGLE_SWITCH_WARM_CREAM,
    material: 'Flame-Retardant Polymer & Solid Brass Terminals',
    origin: 'Standard 86mm Fit',
    designer: 'Roshna Volt'
  },
  {
    id: 'hero-2',
    title: 'سویچ دوپل (Double Switch)',
    headline: 'Modern Dual Control',
    category: 'Switches',
    tagline: 'Dual-gang wall switch crafted for balanced aesthetics, robust internal construction, and smooth daily switching.',
    price: 185,
    image: IMAGES.DUAL_SWITCH_DARK_MARBLE,
    material: 'Reinforced PC with Anti-Allergic Surface',
    origin: 'Standard 86mm Fit',
    designer: 'Roshna Volt'
  },
  {
    id: 'hero-3',
    title: 'ساکت برق (Power Socket)',
    headline: 'Safe & Reliable Power',
    category: 'Sockets',
    tagline: 'High-safety wall socket equipped with automatic child-safe shutters and firm brass contacts for long-lasting use.',
    price: 160,
    image: IMAGES.WALL_SOCKET_CREAM_FLUTED,
    material: 'Flame-Retardant Body & High-Elasticity Brass',
    origin: 'Standard 86mm Fit',
    designer: 'Roshna Volt'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'roshna-sw-01',
    name: 'سویچ یکپل (Single Switch)',
    subtitle: 'Modern 1-Gang Matte Wall Switch',
    category: 'Switches',
    collection: 'Roshna Modern Series',
    price: 145,
    originalPrice: 175,
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
    description: 'سویچ یکپل با طراحی مدرن و سطح مات، ساخته‌شده از مواد باکیفیت و مناسب برای تماس مکرر با دست. مواد سطحی آن برای کاهش احتمال تحریک و حساسیت پوستی انتخاب شده و ویژگی‌های بهداشتی سطح نیز به کاهش ماندگاری و رشد میکروارگانیسم‌ها کمک می‌کند.',
    badge: 'Bestseller',
    colorOptions: [
      { name: 'Pure Matte White', hex: '#F7F7F7' }
    ],
    features: [
      'طراحی مدرن و لوکس',
      'سطح مات و خوش‌لمس',
      'مناسب برای تماس مکرر با پوست',
      'کاهش رشد و ماندگاری میکروارگانیسم‌ها',
      'عملکرد نرم و بادوام'
    ],
    inStock: true
  },
  {
    id: 'roshna-sw-02',
    name: 'سویچ دوپل (Double Switch)',
    subtitle: 'Modern 2-Gang Tactile Wall Switch',
    category: 'Switches',
    collection: 'Roshna Modern Series',
    price: 185,
    originalPrice: 220,
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
    description: 'سویچ دوپل برای فضاهایی طراحی شده است که زیبایی، کیفیت و عملکرد مطمئن باید در کنار یکدیگر قرار گیرند. طراحی مینیمال و سطح مات آن جلوه‌ای مدرن به دیوار می‌دهد، در حالی که ساختار داخلی مقاوم برای استفاده مکرر ساخته شده است.',
    badge: 'Popular',
    colorOptions: [
      { name: 'Pure Matte White', hex: '#F7F7F7' }
    ],
    features: [
      'طراحی لوکس و مینیمال',
      'سطح مات',
      'ساختار مقاوم',
      'عملکرد نرم و دقیق',
      'مواد ضدحساسیت پوستی و بهداشتی'
    ],
    inStock: true
  },
  {
    id: 'roshna-soc-01',
    name: 'ساکت برق (Power Socket)',
    subtitle: 'Modern Safe Wall Power Socket',
    category: 'Sockets',
    collection: 'Roshna Modern Series',
    price: 160,
    originalPrice: 190,
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
    description: 'ساکت برق مدرن با تمرکز بر سه اصل ایمنی، دوام و زیبایی. طراحی مدرن و سطح مات آن با دکوراسیون‌های امروزی هماهنگ شده و ساختار داخلی مقاوم برای اتصال مطمئن و استفاده مداوم در محیط‌های مسکونی و تجاری در نظر گرفته شده است.',
    badge: 'Safety Certified',
    colorOptions: [
      { name: 'Pure Matte White', hex: '#F7F7F7' }
    ],
    features: [
      'طراحی لوکس و مدرن',
      'سطح مات و باکیفیت',
      'ساختار مقاوم برای استفاده طولانی‌مدت',
      'مناسب برای تماس روزمره و بهداشتی'
    ],
    inStock: true
  }
];

export const QUADRANT_ITEMS: QuadrantItem[] = [
  {
    id: 'quad-1',
    title: 'Solid Metal Subframe',
    subtitle: 'Structural Strength',
    category: 'Subframe Engineering',
    image: IMAGES.EXPLODED_3PARTS,
    material: 'Cold-Rolled Steel Plate',
    description: 'A rigid steel backframe ensures flush, zero-flex alignment on standard 86mm wall boxes.',
    tag: 'Q1 · Durability'
  },
  {
    id: 'quad-2',
    title: 'Anti-Allergic Matte Surface',
    subtitle: 'Touch Comfort',
    category: 'Surface Hygiene',
    image: IMAGES.SINGLE_SWITCH_WARM_CREAM,
    material: 'Skin-Friendly Polymer',
    description: 'Smooth velvet-matte texture that resists skin irritation, fingerprints, and microbial retention.',
    tag: 'Q2 · Hygiene'
  },
  {
    id: 'quad-3',
    title: 'Tactile Rocker Mechanism',
    subtitle: 'Smooth Actuation',
    category: 'Switching Control',
    image: IMAGES.DUAL_SWITCH_DARK_MARBLE,
    material: 'Calibrated Precision Springs',
    description: 'Smooth, whisper-quiet tactile switching tested for over 50,000 smooth cycles.',
    tag: 'Q3 · Performance'
  },
  {
    id: 'quad-4',
    title: 'Child-Safe Power Socket',
    subtitle: 'Electrical Protection',
    category: 'Safety Aperture',
    image: IMAGES.WALL_SOCKET_CREAM_FLUTED,
    material: 'High-Elasticity Brass',
    description: 'Automated internal safety shutters prevent accidental foreign object insertion for total peace of mind.',
    tag: 'Q4 · Safety'
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
