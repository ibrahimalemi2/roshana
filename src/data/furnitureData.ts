import { Product, HeroSlide, QuadrantItem, ValuePillar, Testimonial, MetricStat } from '../types';
import { IMAGES } from './imageAssets';

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'hero-1',
    title: 'Roshna Pure Minimal Switch',
    headline: 'Architectural Luminescence',
    category: 'Wall Controls',
    tagline: 'Precision-engineered seamless rocker switch with soft tactile feedback and illuminated subtle micro-LED indicator.',
    price: 145,
    image: IMAGES.SINGLE_SWITCH_WARM_CREAM,
    material: 'Ultra-Matte German Polymer & Solid Brass Terminals',
    origin: 'Handcrafted in Milan Atelier',
    designer: 'Studio Roshna Milan'
  },
  {
    id: 'hero-2',
    title: 'Roshna Dual-Gang Marble Plate Switch',
    headline: 'Monolithic Symmetry',
    category: 'Luxe Switch Collection',
    tagline: 'Dual balanced tactile plates engineered to blend harmoniously into organic travertine and dark marble surfaces.',
    price: 185,
    image: IMAGES.DUAL_SWITCH_DARK_MARBLE,
    material: 'High-Density Flame-Retardant PC with Gold Leaf Contacts',
    origin: 'Tivoli & Copenhagen',
    designer: 'Elena Rossi & Kasper Thomsen'
  },
  {
    id: 'hero-3',
    title: 'Roshna Sculptural Fluted Wall Socket',
    headline: 'Pure Flush Integration',
    category: 'Architectural Sockets',
    tagline: 'Child-safe internal shutter mechanism encased in a minimalist bevel-free architectural wall enclosure.',
    price: 160,
    image: IMAGES.WALL_SOCKET_CREAM_FLUTED,
    material: 'Solid Steel Subframe & Satin Matte Faceplate',
    origin: 'Copenhagen, Denmark',
    designer: 'Kasper Thomsen'
  },
  {
    id: 'hero-4',
    title: 'Roshna Trio Master Atelier Collection',
    headline: 'Harmonious Trio Suite',
    category: 'Full Residence System',
    tagline: 'Cohesive architectural suite containing single, dual, and socket assemblies for unified modern residence interiors.',
    price: 460,
    image: IMAGES.TRIO_COUNTER_SHOWCASE,
    material: 'Reinforced Metal Mounting & Multi-Coated Matte Polycarbonate',
    origin: 'Milan Atelier, Italy',
    designer: 'Studio Roshna Milan'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'roshna-sw-01',
    name: 'Roshna Pure Minimal 1-Gang Switch',
    subtitle: 'Ultra-Slim Tactile Rocker Switch',
    category: 'Switches',
    collection: 'Luxe Collection',
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
    material: 'Flame-Retardant German Bayer PC, Phosphor Bronze Clips, Heavy-Duty Steel Mounting Plate',
    description: 'An architectural statement for discerning interiors. The Roshna 1-Gang switch combines an ultra-slim flush profile with a dampened tactile click mechanism and soft ambient LED guide light.',
    badge: 'Bestseller',
    colorOptions: [
      { name: 'Pure Matte White', hex: '#F7F7F7' },
      { name: 'Champagne Brass Accent', hex: '#F59E0B' },
      { name: 'Architectural Charcoal', hex: '#262626' },
      { name: 'Warm Cream Satin', hex: '#FFFFFF' }
    ],
    features: [
      'Zero-wobble precision snap-fit front plate with concealed mounting screws',
      'Ultra-dampened acoustic mechanism engineered for whisper-quiet actuation',
      'Silver-nickel electric contact alloy certified for 100,000+ continuous cycles',
      'Integrated soft 2700K micro-illumination beacon for ambient nighttime guidance'
    ],
    inStock: true
  },
  {
    id: 'roshna-sw-02',
    name: 'Roshna Dual-Gang Precision Switch',
    subtitle: 'Independent 2-Way Architectural Wall Control',
    category: 'Switches',
    collection: 'Luxe Collection',
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
    material: 'High-Impact Polycarbonate, Solid Phosphor Bronze Terminals, Black Electroplated Steel Base',
    description: 'Designed for dual-zone lighting control. Each rocker switch is mathematically balanced to maintain perfect alignment even when actuated independently, preserving clean architectural lines.',
    badge: 'Architectural Edit',
    colorOptions: [
      { name: 'Pure Matte White', hex: '#F7F7F7' },
      { name: 'Warm Cream Satin', hex: '#FFFFFF' },
      { name: 'Deep Espresso', hex: '#1F1E1D' }
    ],
    features: [
      'Dual independent circuit control with smooth 1-way and 2-way cross-switching',
      'Bevel-free minimalist front plate engineered to sit flush against marble or drywall',
      'Anti-fingerprint oleophobic nano-matte coating',
      'Universal European and International standard box compatibility'
    ],
    inStock: true
  },
  {
    id: 'roshna-soc-01',
    name: 'Roshna Architectural Flush Socket',
    subtitle: '16A Grounded Safety Wall Socket with Internal Shutter',
    category: 'Sockets',
    collection: 'Sculptural Hardware',
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
    material: 'V0 Fire-Resistant PC Polymer, Solid Brass Earth Clips, Cold-Rolled Steel Frame',
    description: 'Elevates everyday power delivery into a sculptural element. Features internal child-protection automatic safety shutters, high-conductivity brass spring contacts, and an ultra-clean circular aperture.',
    badge: 'Flagship Design',
    colorOptions: [
      { name: 'Pure Matte White', hex: '#F7F7F7' },
      { name: 'Warm Cream Satin', hex: '#FFFFFF' },
      { name: 'Architectural Charcoal', hex: '#262626' }
    ],
    features: [
      'Self-closing automatic child safety shutters inside plug terminals',
      'High-elasticity phosphor bronze contact springs that never loosen over time',
      'Reinforced cold-rolled steel mounting subframe with multi-axis alignment slots',
      'Rated for 250V / 16A with CE, CB, and IEC-60884 international safety certifications'
    ],
    inStock: true
  },
  {
    id: 'roshna-eng-01',
    name: 'Roshna 3-Tier Modular Engineering Unit',
    subtitle: 'Exploded Triple-Layer Modular Assembly',
    category: 'Engineering',
    collection: 'Precision Engineering',
    price: 295,
    rating: 4.98,
    reviewCount: 74,
    image: IMAGES.EXPLODED_3PARTS,
    gallery: [
      IMAGES.EXPLODED_3PARTS,
      IMAGES.EXPLODED_SWITCH_COMPONENTS,
      IMAGES.TRIO_COUNTER_SHOWCASE,
      IMAGES.WALL_PLATE_ARCHITECTURAL_ISO
    ],
    dimensions: 'Universal Standard 86mm Modular Chassis',
    material: '1. Front Cover (Bayer PC) + 2. Core Socket Mechanism + 3. Anti-Corrosive Metal Mounting Frame',
    description: 'An engineering masterwork showcasing Roshna’s 3-part modular architecture. Separation of the structural mounting frame from the finished cosmetic cover ensures lifetime tool-free faceplate swapability.',
    badge: 'Masterpiece',
    colorOptions: [
      { name: 'Signature White & Steel', hex: '#F2EFEB' },
      { name: 'Champagne Brass Core', hex: '#F59E0B' }
    ],
    features: [
      'Part 1: Premium German PC front cover with smooth velvet finish for everyday durability',
      'Part 2: High-density internal socket module ensuring safe connection & reliable power delivery',
      'Part 3: Strong steel mounting frame for secure installation and permanent level alignment',
      'Tool-free modular front snap-lock allowing rapid renovation color changes'
    ],
    inStock: true
  },
  {
    id: 'roshna-line-01',
    name: 'Roshna Residence Trio Hardware Suite',
    subtitle: 'Curated 3-Piece Living Room & Master Suite Bundle',
    category: 'Living Systems',
    collection: 'Luxe Collection',
    price: 460,
    originalPrice: 520,
    rating: 4.95,
    reviewCount: 142,
    image: IMAGES.TRIO_COUNTER_SHOWCASE,
    gallery: [
      IMAGES.TRIO_COUNTER_SHOWCASE,
      IMAGES.STUDIO_PRODUCT_TRIO,
      IMAGES.SINGLE_SWITCH_WARM_CREAM,
      IMAGES.WALL_SOCKET_DARK_TIMBER
    ],
    dimensions: 'Contains 1x Single Switch, 1x Dual-Gang Switch, 1x Architectural Socket (86mm each)',
    material: 'Uniform Velvet-Matte Polymer, Precision Brass Terminals, Solid Mounting Frames',
    description: 'The definitive bundle for complete interior harmony. Includes our signature single switch, dual-gang lighting controller, and high-amp grounded wall socket in matching finish and profile height.',
    badge: 'Curated Bundle',
    colorOptions: [
      { name: 'Pure Matte White', hex: '#F7F7F7' },
      { name: 'Warm Cream Satin', hex: '#FFFFFF' },
      { name: 'Champagne Gold Tone', hex: '#F59E0B' }
    ],
    features: [
      'Complete unified tactile feel and aesthetic consistency across all wall fixtures',
      'Includes complimentary Roshna flush mounting backbox kit and alignment spacers',
      'Save 15% compared to purchasing individual architectural units',
      'White-glove priority shipping with serialized certification plaque'
    ],
    inStock: true
  },
  {
    id: 'roshna-soc-02',
    name: 'Roshna Dark Timber & Slate Edition Socket',
    subtitle: 'Rich Contrast Architectural Socket for Wood & Stone Walls',
    category: 'Sockets',
    collection: 'Sculptural Hardware',
    price: 175,
    rating: 4.88,
    reviewCount: 63,
    image: IMAGES.WALL_SOCKET_DARK_TIMBER,
    gallery: [
      IMAGES.WALL_SOCKET_DARK_TIMBER,
      IMAGES.WALL_SOCKET_MACRO_DETAIL,
      IMAGES.WALL_PLATE_AMBIENT_CORNER,
      IMAGES.WALL_PLATE_LIVING_PERSPECTIVE
    ],
    dimensions: 'W 86mm × H 86mm × D 32mm',
    material: 'Reinforced PC with Carbon Underlay & Gold Grounding Contacts',
    description: 'Engineered specifically for dark acoustic slatted wall paneling, walnut cabinetry, and smoked oak millwork. Delivers striking visual depth with crisp geometric contrast.',
    badge: 'Studio Pick',
    colorOptions: [
      { name: 'Pure Matte White', hex: '#F7F7F7' },
      { name: 'Smoked Charcoal', hex: '#242424' },
      { name: 'Brushed Brass', hex: '#F59E0B' }
    ],
    features: [
      'Ultra-clean seamless perimeter bevel that sits perfectly against textured wall slats',
      'Heavy-duty 16A continuous current rating with zero thermal buildup',
      'Pre-assembled quick-wire lever connectors for rapid electricians installation',
      'Scratch-resistant matte micro-texture'
    ],
    inStock: true
  }
];

export const QUADRANT_ITEMS: QuadrantItem[] = [
  {
    id: 'quad-1',
    title: '3-Part Modular Precision',
    subtitle: 'Structural Engineering',
    category: 'Component Architecture',
    image: IMAGES.EXPLODED_3PARTS,
    material: 'Polycarbonate & Solid Steel Base',
    description: 'Separation of the front cover, core mechanism, and metal subframe guarantees effortless installation and lifelong structural stability.',
    tag: 'Q1 · Engineering'
  },
  {
    id: 'quad-2',
    title: 'Warm Mineral Harmony',
    subtitle: 'Seamless Wall Flow',
    category: 'Living Integration',
    image: IMAGES.SINGLE_SWITCH_WARM_CREAM,
    material: 'Velvet Satin Polymer',
    description: 'Tuned to complement warm cream lime-wash, travertine stone, and bespoke plaster walls with zero glaring reflections.',
    tag: 'Q2 · Harmony'
  },
  {
    id: 'quad-3',
    title: 'Dual-Zone Symmetry',
    subtitle: 'Tactile Ergonomics',
    category: 'Wall Controls',
    image: IMAGES.DUAL_SWITCH_DARK_MARBLE,
    material: 'High-Density PC & Silver Alloy',
    description: 'Micro-calibrated spring rockers provide instant, dampened acoustic feedback without visual disruption.',
    tag: 'Q3 · Precision'
  },
  {
    id: 'quad-4',
    title: 'Architectural Power Delivery',
    subtitle: 'Safety & Utility',
    category: 'High-Amp Sockets',
    image: IMAGES.WALL_SOCKET_CREAM_FLUTED,
    material: 'Phosphor Bronze & Steel Frame',
    description: 'Child-proof automated internal shutters and high-elasticity contacts deliver uncompromised safety wrapped in minimalist form.',
    tag: 'Q4 · Safety'
  }
];

export const VALUE_PILLARS: ValuePillar[] = [
  {
    id: 'pillar-1',
    number: '01',
    title: '3-Tier Modular Construction',
    shortDesc: 'Front cover, core electrical module, and solid metal mounting frame.',
    fullDesc: 'Unlike cheap monolithic switches, Roshna separates the steel anchor frame from the cosmetic faceplate. This guarantees zero flexing during wall clamping and allows instant faceplate updates without rewiring.',
    iconName: 'Gem',
    highlight: 'Rigid Cold-Rolled Steel Frame'
  },
  {
    id: 'pillar-2',
    number: '02',
    title: 'Flame-Retardant German Polymer',
    shortDesc: 'Bayer V0-rated high-impact polycarbonate with oleophobic velvet matte finish.',
    fullDesc: 'Resistant to ultraviolet discoloration, physical impact, and thermal fatigue. Finished with an ultra-fine matte texture that naturally repels fingerprints and reflections under sunlight.',
    iconName: 'Leaf',
    highlight: 'UL94 V-0 Certified & UV-Stable'
  },
  {
    id: 'pillar-3',
    number: '03',
    title: 'Acoustically Dampened Click',
    shortDesc: 'Mathematical balance delivering a soothing, whisper-quiet tactile switch click.',
    fullDesc: 'Calibrated with internal micro-dampeners and silver-nickel contact points rated for over 100,000 cycles. Creates a deeply satisfying, solid sensory experience with every touch.',
    iconName: 'Sparkles',
    highlight: '100,000+ Verified Actuations'
  },
  {
    id: 'pillar-4',
    number: '04',
    title: 'Lifetime Structural Integrity',
    shortDesc: 'Precision phosphor bronze terminals and 25-year manufacturer guarantee.',
    fullDesc: 'Built to exceed CE, CB, and IEC safety standards. Every piece is rigorously tested for high dielectric strength, thermal dissipation, and permanent electrical conductivity.',
    iconName: 'ShieldCheck',
    highlight: 'Lifetime Safety & Structural Warranty'
  }
];

export const MATERIALS_DATA = [
  {
    id: 'mat-1',
    name: 'Bayer V-0 Polymer Faceplate',
    origin: 'Leverkusen, Germany',
    category: 'Tactile Polymer',
    description: 'Self-extinguishing, high-impact polycarbonate finished with an anti-glare oleophobic micro-texture that feels soft to the touch and resists marks.',
    image: IMAGES.WALL_SOCKET_MACRO_DETAIL,
    characteristics: ['UL94 V-0 self-extinguishing safety', 'Zero-luster satin texture', 'Anti-fingerprint nano surface']
  },
  {
    id: 'mat-2',
    name: 'Cold-Rolled Steel Subframe',
    origin: 'Duisburg Metalworks',
    category: 'Structural Metal',
    description: 'Heavy-gauge electroplated steel mounting bracket engineered with multi-axis alignment slots for flush mounting on uneven stone and drywall.',
    image: IMAGES.EXPLODED_3PARTS,
    characteristics: ['Zero torsion or bending under torque', 'Multi-point level adjustment', 'Corrosion-resistant zinc coat']
  },
  {
    id: 'mat-3',
    name: 'Phosphor Bronze Electrical Clips',
    origin: 'Milan Precision Foundry',
    category: 'Conductive Alloy',
    description: 'High-elasticity spring bronze terminals that maintain permanent clamping pressure on plugs and solid copper house wiring over decades.',
    image: IMAGES.EXPLODED_SWITCH_COMPONENTS,
    characteristics: ['99.2% electrical conductivity', 'Fatigue-free spring retention', 'Low electrical contact resistance']
  },
  {
    id: 'mat-4',
    name: 'Silver-Nickel Contact Alloy',
    origin: 'Copenhagen Laboratories',
    category: 'Switching Contacts',
    description: 'Micro-welded AgNi contacts that prevent electric arcing and oxidation, ensuring crisp, reliable switching across high-load lighting circuits.',
    image: IMAGES.DUAL_SWITCH_PERSPECTIVE,
    characteristics: ['Zero contact welding under surge', 'Rated for 100,000+ switchings', 'Optimized for LED load drivers']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Clarissa Montgomery',
    role: 'Principal Architect at Studio Mont',
    location: 'Geneva, Switzerland',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    rating: 5,
    quote: 'Roshna provides the missing link in contemporary architecture. The switches sit completely flush with our travertine and lime-wash walls, and the tactile click is delightfully refined.',
    purchasedProduct: 'Roshna Residence Trio Hardware Suite',
    date: 'Verified Architect · Jan 2026'
  },
  {
    id: 'test-2',
    name: 'Julian Vance-Moreau',
    role: 'Interior Design Director',
    location: 'London, UK',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    rating: 5,
    quote: 'The 3-part engineering modularity makes installation a dream for our contractors. The clean geometric lines and micro-LED indicators transform dark corridors into calm luxury.',
    purchasedProduct: 'Roshna Dual-Gang Precision Switch',
    date: 'Verified Trade Member · Feb 2026'
  },
  {
    id: 'test-3',
    name: 'Seraphina Lin',
    role: 'Residential Developer & Collector',
    location: 'Tokyo & San Francisco',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80',
    rating: 5,
    quote: 'From the unboxing crate to the solid steel subframe, the quality is undeniable. Roshna has set the new benchmark for luxury architectural wall hardware.',
    purchasedProduct: 'Roshna Architectural Flush Socket',
    date: 'Verified Homeowner · Feb 2026'
  }
];

export const METRIC_STATS: MetricStat[] = [
  {
    value: '4.9/5',
    label: 'Verified Reviews',
    detail: 'From over 4,800 architects & homeowners worldwide'
  },
  {
    value: '20K+',
    label: 'Spaces Transformed',
    detail: 'Across 34 countries and bespoke architectural residences'
  },
  {
    value: '99.4%',
    label: 'Client Satisfaction',
    detail: 'Repeat specification by premier luxury architects'
  },
  {
    value: '15+',
    label: 'Years of Experience',
    detail: 'Pioneering slow-craft minimalist living hardware'
  }
];
