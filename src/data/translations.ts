export interface TranslationDictionary {
  nav: {
    home: string;
    collection: string;
    craft: string;
    materials: string;
    reviews: string;
    faq: string;
    search: string;
    bag: string;
    whatsapp: string;
    switchLang: string;
    lightMode: string;
    darkMode: string;
    intro: string;
  };
  hero: {
    eyebrow: string;
    title1: string;
    title2Prefix: string;
    title2Highlight: string;
    subtitle: string;
    cta: string;
    quickViewHint: string;
    stats: {
      iecValue: string;
      iecLabel: string;
      ip65Value: string;
      ip65Label: string;
      warrantyValue: string;
      warrantyLabel: string;
      toolValue: string;
      toolLabel: string;
    };
  };
  anatomy: {
    badge: string;
    titlePart1: string;
    titlePart2: string;
    subtitle: string;
    ratingText: string;
    materialLabel: string;
    perspectivesTitle: string;
    guaranteeText: string;
  };
  showcase: {
    badge: string;
    titlePart1: string;
    titlePart2: string;
    categories: {
      all: string;
      switches: string;
      sockets: string;
      modular: string;
    };
    addToBag: string;
    addedToBag: string;
    quickSpecs: string;
    consultationTitle: string;
    consultationDesc: string;
    consultationButton: string;
  };
  principles: {
    badge: string;
    titlePart1: string;
    titlePart2: string;
    subtitle: string;
    detailedCommitment: string;
    pillarLabel: string;
    labCertified: string;
    directProvenance: string;
    pillars: Array<{
      id: string;
      number: string;
      title: string;
      shortDesc: string;
      fullDesc: string;
      iconName: string;
      highlight: string;
    }>;
  };
  materials: {
    badge: string;
    titlePart1: string;
    titlePart2: string;
    subtitle: string;
    inspectTexture: string;
    selectedStudy: string;
    items: Array<{
      id: string;
      name: string;
      origin: string;
      category: string;
      description: string;
      characteristics: string[];
    }>;
  };
  reviews: {
    badge: string;
    titlePart1: string;
    titlePart2: string;
    subtitle: string;
    testimonials: Array<{
      id: string;
      name: string;
      role: string;
      location: string;
      quote: string;
      purchasedProduct: string;
      date: string;
    }>;
    metrics: {
      projectsTitle: string;
      projectsLabel: string;
      projectsDetail: string;
      warrantyTitle: string;
      warrantyLabel: string;
      warrantyDetail: string;
      ratingTitle: string;
      ratingLabel: string;
      ratingDetail: string;
      craftTitle: string;
      craftLabel: string;
      craftDetail: string;
    };
  };
  faq: {
    badge: string;
    titlePart1: string;
    titlePart2: string;
    subtitle: string;
    contactBadge: string;
    contactTitle: string;
    contactDesc: string;
    contactWhatsapp: string;
    contactEmail: string;
    items: Array<{
      question: string;
      answer: string;
      category: string;
    }>;
  };
  footer: {
    tagline: string;
    newsletterTitle: string;
    newsletterMonograph: string;
    newsletterDesc: string;
    newsletterPlaceholder: string;
    newsletterButton: string;
    subscriptionConfirmed: string;
    brandDesc: string;
    copyright: string;
    standards: string;
    links: {
      collectionTitle: string;
      specificationTitle: string;
      atelierTitle: string;
      conciergeTitle: string;
      privacy: string;
      terms: string;
      certs: string;
    };
  };
  cart: {
    title: string;
    emptyTitle: string;
    emptySubtitle: string;
    exploreBtn: string;
    freeShippingNotice: string;
    addMoreNoticePrefix: string;
    addMoreNoticeSuffix: string;
    subtotal: string;
    delivery: string;
    complimentary: string;
    totalDue: string;
    whatsappOrderBtn: string;
    whatsappOrderSuccess: string;
    dealNotice: string;
    colorLabel: string;
  };
}

export const translations: { en: TranslationDictionary; fa: TranslationDictionary } = {
  en: {
    nav: {
      home: 'Home',
      collection: 'Collection',
      craft: 'Craft & Design',
      materials: 'Materials',
      reviews: 'Reviews',
      faq: 'FAQ',
      search: 'Search electrical catalog',
      bag: 'Shopping bag',
      whatsapp: 'WhatsApp',
      switchLang: 'فارسی',
      lightMode: 'Light',
      darkMode: 'Navy Dark',
      intro: 'Intro'
    },
    hero: {
      eyebrow: 'PRECISION',
      title1: 'ENGINEERED',
      title2Prefix: 'FOR ',
      title2Highlight: 'LIFE',
      subtitle: 'Swiss-grade core, integrated smart sensors, and zero-tool assembly. Redefining your space with dynamic intelligence.',
      cta: 'Explore the Collection',
      quickViewHint: 'Quick View',
      stats: {
        iecValue: 'IEC',
        iecLabel: 'Certified',
        ip65Value: 'IP65',
        ip65Label: 'Rating',
        warrantyValue: '10-Year',
        warrantyLabel: 'Warranty',
        toolValue: '0-Tool',
        toolLabel: 'Assembly'
      }
    },
    anatomy: {
      badge: 'The Anatomy of Form',
      titlePart1: 'Sculptural Symmetry &',
      titlePart2: '360° Material Precision',
      subtitle: 'Explore our four foundational design pillars through a quadrant study of texture, volume, and timeless mineral geometry.',
      ratingText: 'Verified Craft',
      materialLabel: 'Material:',
      perspectivesTitle: 'Inspect Quadrant Perspectives:',
      guaranteeText: 'Every quadrant is precision-balanced to maintain architectural serenity from all viewing angles.'
    },
    showcase: {
      badge: 'Curated Selection',
      titlePart1: 'Product Showcase',
      titlePart2: 'The Luxe Collection',
      categories: {
        all: 'All',
        switches: 'Tactile Switches',
        sockets: 'Architectural Sockets',
        modular: 'Modular Units'
      },
      addToBag: 'Add to Bag',
      addedToBag: 'Added to Bag',
      quickSpecs: 'Quick Specs',
      consultationTitle: 'Need Architectural Multi-Gang Assemblies or Trade Specification?',
      consultationDesc: 'Our Milan and Copenhagen studios provide BIM models, custom finishes, and trade sample archive kits.',
      consultationButton: 'Request Atelier Consultation'
    },
    principles: {
      badge: 'Our Principles',
      titlePart1: 'Crafted with Intent,',
      titlePart2: 'Built for Generations',
      subtitle: 'We reject the disposable cycle of fast trends. Every Roshna creation is an architectural heirloom engineered with pure sustainable integrity.',
      detailedCommitment: 'Detailed Commitment',
      pillarLabel: 'Pillar',
      labCertified: 'Independent Lab Certified',
      directProvenance: 'Direct Atelier Provenance',
      pillars: [
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
      ]
    },
    materials: {
      badge: 'Material Provenance',
      titlePart1: 'Raw Minerals &',
      titlePart2: 'Honest Textures',
      subtitle: 'Every material in the Roshna hardware catalog is chosen for structural resilience, pure flame-retardant safety, and anti-fingerprint velvet tactile refinement.',
      inspectTexture: 'Inspect Texture',
      selectedStudy: 'Selected Material Study',
      items: [
        {
          id: 'mat-1',
          name: 'Bayer V-0 Polymer Faceplate',
          origin: 'Leverkusen, Germany',
          category: 'Tactile Polymer',
          description: 'Self-extinguishing, high-impact polycarbonate finished with an anti-glare oleophobic micro-texture that feels soft to the touch and resists marks.',
          characteristics: ['UL94 V-0 self-extinguishing safety', 'Zero-luster satin texture', 'Anti-fingerprint nano surface']
        },
        {
          id: 'mat-2',
          name: 'Cold-Rolled Steel Subframe',
          origin: 'Duisburg Metalworks',
          category: 'Structural Metal',
          description: 'Heavy-gauge electroplated steel mounting bracket engineered with multi-axis alignment slots for flush mounting on uneven stone and drywall.',
          characteristics: ['Zero torsion or bending under torque', 'Multi-point level adjustment', 'Corrosion-resistant zinc coat']
        },
        {
          id: 'mat-3',
          name: 'Phosphor Bronze Electrical Clips',
          origin: 'Milan Precision Foundry',
          category: 'Conductive Alloy',
          description: 'High-elasticity spring bronze terminals that maintain permanent clamping pressure on plugs and solid copper house wiring over decades.',
          characteristics: ['99.2% electrical conductivity', 'Fatigue-free spring retention', 'Low electrical contact resistance']
        },
        {
          id: 'mat-4',
          name: 'Silver-Nickel Contact Alloy',
          origin: 'Copenhagen Laboratories',
          category: 'Switching Contacts',
          description: 'Micro-welded AgNi contacts that prevent electric arcing and oxidation, ensuring crisp, reliable switching across high-load lighting circuits.',
          characteristics: ['Zero contact welding under surge', 'Rated for 100,000+ switchings', 'Optimized for LED load drivers']
        }
      ]
    },
    reviews: {
      badge: 'Collector & Architect Perspectives',
      titlePart1: 'Loved by Architects &',
      titlePart2: 'Discerning Specifiers',
      subtitle: 'Read authentic words from interior designers, master electricians, and private collectors who have transformed their spaces with Roshna Volt.',
      testimonials: [
        {
          id: 'test-1',
          name: 'Clarissa Montgomery',
          role: 'Principal Architect at Studio Mont',
          location: 'Geneva, Switzerland',
          quote: 'Roshna provides the missing link in contemporary architecture. The switches sit completely flush with our travertine and lime-wash walls, and the tactile click is delightfully refined.',
          purchasedProduct: 'Roshna Residence Trio Hardware Suite',
          date: 'Verified Architect · Jan 2026'
        },
        {
          id: 'test-2',
          name: 'Julian Vance-Moreau',
          role: 'Interior Design Director',
          location: 'London, UK',
          quote: 'The 3-part engineering modularity makes installation a dream for our contractors. The clean geometric lines and micro-LED indicators transform dark corridors into calm luxury.',
          purchasedProduct: 'Roshna Dual-Gang Precision Switch',
          date: 'Verified Trade Member · Feb 2026'
        },
        {
          id: 'test-3',
          name: 'Seraphina Lin',
          role: 'Residential Developer & Collector',
          location: 'Tokyo & San Francisco',
          quote: 'From the unboxing crate to the solid steel subframe, the quality is undeniable. Roshna has set the new benchmark for luxury architectural wall hardware.',
          purchasedProduct: 'Roshna Architectural Flush Socket',
          date: 'Verified Homeowner · Feb 2026'
        }
      ],
      metrics: {
        projectsTitle: '1,420+',
        projectsLabel: 'Luxury Residences Specified',
        projectsDetail: 'Across 34 countries and bespoke architectural residences',
        warrantyTitle: '25-Year',
        warrantyLabel: 'Structural Frame Warranty',
        warrantyDetail: 'Rigid cold-rolled steel subframe & internal springs',
        ratingTitle: '99.4%',
        ratingLabel: 'Architect Satisfaction Index',
        ratingDetail: 'Repeat specification by premier luxury architects',
        craftTitle: '100%',
        craftLabel: 'Laser-Calibrated In-House',
        craftDetail: 'Zero tolerance precision engineering on every unit'
      }
    },
    faq: {
      badge: 'Atelier Concierge',
      titlePart1: 'Technical &',
      titlePart2: 'Architectural Inquiries',
      subtitle: 'Everything you need to know about standard backbox installation, CE/IEC testing compliance, and commercial project support.',
      contactBadge: 'Direct Atelier Support',
      contactTitle: 'Direct Architecture & Trade Inquiries',
      contactDesc: 'Need bespoke multi-gang modular configuration or custom surface PVD finishes? Our master specifiers are available.',
      contactWhatsapp: 'Chat on WhatsApp',
      contactEmail: 'Email Concierge',
      items: [
        {
          question: 'How does Roshna’s 3-part modular engineering architecture work?',
          answer: 'Roshna separates the heavy-gauge steel subframe from the finished cosmetic faceplate. Electricians first wire and clamp the rigid steel plate onto standard 86mm or European wall backboxes. Once painting and plastering are finished, the pristine polycarbonate or brass faceplate simply snaps on tool-free with zero risk of scuffs or paint spatters.',
          category: 'Installation & Mechanism'
        },
        {
          question: 'Are Roshna switches and sockets compatible with standard existing backboxes?',
          answer: 'Yes. Every unit is engineered for full backward-compatibility with standard British BS 4662, European CEE 7, and universal 86mm architectural flush-mount wall backboxes with a minimum depth of 35mm.',
          category: 'Compatibility'
        },
        {
          question: 'What electrical safety certifications and current ratings do Roshna units carry?',
          answer: 'All Roshna wall controls and socket outlets are certified to CE, CB, RoHS, and IEC-60884 international standards. Our wall sockets are rated for 250V / 16A with integrated child-safety shutters, while switches feature silver-nickel contacts rated for 100,000+ continuous actuations under inductive LED loads.',
          category: 'Safety & Ratings'
        },
        {
          question: 'What is covered under the Roshna Lifetime Structural Guarantee?',
          answer: 'We provide an unconditional lifetime replacement guarantee on the internal mechanical rocker springs, silver-nickel contact terminals, and steel structural mounting frames. Cosmetic faceplates carry a 10-year UV and anti-fingerprint warranty.',
          category: 'Guarantee & Warranty'
        },
        {
          question: 'Do you offer custom engraved faceplates and bespoke architectural finishes for trade firms?',
          answer: 'Yes. Through our Milan and Copenhagen atelier trade concierge, registered architects and interior studios can commission bespoke laser-engraved labels, custom RAL powder-coated finishes, and solid brass patinas for high-end residential and hospitality projects.',
          category: 'Trade & Bespoke'
        }
      ]
    },
    footer: {
      tagline: 'Switch To Quality • روشنا ولت',
      newsletterTitle: 'Private Releases &',
      newsletterMonograph: 'Architectural Monographs',
      newsletterDesc: 'Receive invitations to private capsule debuts, technical specification papers, and limited edition architectural hardware suites.',
      newsletterPlaceholder: 'Enter your architecture or design studio email...',
      newsletterButton: 'Subscribe',
      subscriptionConfirmed: 'Subscription confirmed. Welcome to the private architectural registry.',
      brandDesc: 'An international design atelier devoted to minimalist wall hardware, flush architectural switches, monolithic sockets, and tactile living controls. Switch To Quality.',
      copyright: 'All rights reserved. Designed for discerning spaces worldwide.',
      standards: 'Certified to CE, CB, RoHS & IEC-60884 International Standards',
      links: {
        collectionTitle: 'Collection',
        specificationTitle: 'Specification',
        atelierTitle: 'Atelier',
        conciergeTitle: 'Concierge',
        privacy: 'Privacy Policy',
        terms: 'Terms of Atelier',
        certs: 'Certifications'
      }
    },
    cart: {
      title: 'Your Shopping Bag',
      emptyTitle: 'Your bag is currently empty',
      emptySubtitle: 'Explore our curated switches, monolithic sockets, and complete architectural suites.',
      exploreBtn: 'Explore Collection',
      freeShippingNotice: 'Complimentary delivery unlocked',
      addMoreNoticePrefix: 'Add ',
      addMoreNoticeSuffix: ' AFN more for complimentary shipping',
      subtotal: 'Subtotal',
      delivery: 'Courier Delivery (Afghanistan)',
      complimentary: 'Complimentary',
      totalDue: 'Total Due',
      whatsappOrderBtn: 'Order via WhatsApp',
      whatsappOrderSuccess: 'Opening WhatsApp...',
      dealNotice: 'Direct deal & payment via WhatsApp (No bank account needed)',
      colorLabel: 'Color:'
    }
  },
  fa: {
    nav: {
      home: 'خانه',
      collection: 'کلکسیون',
      craft: 'طراحی و ساخت',
      materials: 'متریال‌ها',
      reviews: 'دیدگاه‌ها',
      faq: 'سوالات متداول',
      search: 'جستجو در کاتالوگ الکتریکال',
      bag: 'سبد مشخصات',
      whatsapp: 'واتس‌اپ',
      switchLang: 'English',
      lightMode: 'روشن',
      darkMode: 'سرمه‌ای تیره',
      intro: 'معرفی'
    },
    hero: {
      eyebrow: 'دقت مهندسی',
      title1: 'مهندسی شده',
      title2Prefix: 'برای ',
      title2Highlight: 'یک عمر',
      subtitle: 'هسته با استاندارد سوئیسی، سنسورهای هوشمند یکپارچه و مونتاژ بدون ابزار. تعریف مجدد فضای شما با هوشمندی و ظرافت پویا.',
      cta: 'مشاهده کلکسیون',
      quickViewHint: 'مشخصات سریع',
      stats: {
        iecValue: 'IEC',
        iecLabel: 'دارای گواهینامه',
        ip65Value: 'IP65',
        ip65Label: 'درجه مقاومت',
        warrantyValue: '۱۰ سال',
        warrantyLabel: 'ضمانت ساختار',
        toolValue: 'بدون ابزار',
        toolLabel: 'نصب سریع'
      }
    },
    anatomy: {
      badge: 'آناتومی فرم',
      titlePart1: 'تقارن تندیس‌وار و',
      titlePart2: 'دقت ۳۶۰ درجه متریال',
      subtitle: 'چهار رکن بنیادین طراحی ما را در مطالعه بافت، حجم و هندسه پایدار و مینیمال کاوش کنید.',
      ratingText: 'کیفیت تایید شده',
      materialLabel: 'متریال:',
      perspectivesTitle: 'بررسی زوایای چهارگانه:',
      guaranteeText: 'هر بخش با بالاترین دقت مهندسی متوازن شده تا آرامش معماری فضا از تمام زوایا حفظ شود.'
    },
    showcase: {
      badge: 'مجموعه برگزیده',
      titlePart1: 'نمایشگاه محصولات',
      titlePart2: 'کلکسیون لوکس روشنا',
      categories: {
        all: 'همه محصولات',
        switches: 'کلیدهای لمسی و مکانیکی',
        sockets: 'پریزهای مدرن توکار',
        modular: 'واحدهای ماژولار'
      },
      addToBag: 'افزودن به سبد',
      addedToBag: 'به سبد افزوده شد',
      quickSpecs: 'مشخصات فنی',
      consultationTitle: 'نیاز به پنل‌های ترکیبی چندخانه یا مشخصات پروژه دارید؟',
      consultationDesc: 'آتلیه روشنا فایل‌های مدلسازی BIM، فینیش‌های سفارشی و نمونه‌های آرشیو پروژه‌ها را در اختیار معماران قرار می‌دهد.',
      consultationButton: 'درخواست مشاوره تخصصی'
    },
    principles: {
      badge: 'اصول بنیادین ما',
      titlePart1: 'ساخته شده با هدف،',
      titlePart2: 'ماندگار برای نسل‌ها',
      subtitle: 'ما چرخه دورریز ترندهای ناپایدار را رد می‌کنیم. هر محصول روشنا یک اثر هنری ماندگار در معماری است.',
      detailedCommitment: 'تعهد تفصیلی به کیفیت',
      pillarLabel: 'اصل شماره',
      labCertified: 'تایید شده در آزمایشگاه‌های مستقل',
      directProvenance: 'اصالت مستقیم از آتلیه روشنا',
      pillars: [
        {
          id: 'pillar-1',
          number: '۰۱',
          title: 'ساختار ماژولار ۳ لایه',
          shortDesc: 'رویه بیرونی، مکانیزم الکتریکی مرکزی، و فریم فولادی مستحکم.',
          fullDesc: 'برخلاف کلیدهای یکپارچه معمولی، روشنا فریم مهارکننده فولادی را از قاب دکوراتیو جدا می‌سازد. این کار مانع هرگونه انحنا هنگام پیچ کردن به دیوار شده و امکان تعویض سریع رویه را بدون نیاز به سیم‌کشی مجدد فراهم می‌کند.',
          iconName: 'Gem',
          highlight: 'شاسی فولادی نورد سرد بسیار مقاوم'
        },
        {
          id: 'pillar-2',
          number: '۰۲',
          title: 'پلیمر نسوز استاندارد آلمان',
          shortDesc: 'پلی‌کربنات Bayer ضدحریق گرید V0 با روکش نانو مات مخملین.',
          fullDesc: 'مقاوم در برابر تغییر رنگ ناشی از اشعه خورشید (UV)، ضربات فیزیکی و استهلاک حرارتی. دارای پرداخت نانو مات فوق‌العاده ظریف که رد اثر انگشت و بازتاب خیره‌کننده نور را به صفر می‌رساند.',
          iconName: 'Leaf',
          highlight: 'گواهی ایمنی ضدحریق UL94 V-0'
        },
        {
          id: 'pillar-3',
          number: '۰۳',
          title: 'کلیک نرم و مهندسی‌شده',
          shortDesc: 'تعادل دقیق هندسی که کلیکی آرام، دلنشین و بی‌صدا را رقم می‌زند.',
          fullDesc: 'کالیبره شده با دمپرهای ضربه‌گیر داخلی و پلاتین‌های آلیاژ نقره-نیکل برای بیش از ۱۰۰,۰۰۰ بار استفاده پیوسته. ایجاد یک حس لمسی استوار و سرشار از رضایت با هر تماس.',
          iconName: 'Sparkles',
          highlight: '+۱۰۰,۰۰۰ بار کلیدزنی تایید شده'
        },
        {
          id: 'pillar-4',
          number: '۰۴',
          title: 'ضمانت مادام‌العمر ساختار',
          shortDesc: 'ترمینال‌های دقیق برنز فسفر با فنریت ماندگار و ۲۵ سال ضمانت.',
          fullDesc: 'فراتر از استانداردهای ایمنی سخت‌گیرانه CE، CB و IEC. هر قطعه از نظر مقاومت دی‌الکتریک بالا، دفع حرارت عالی و هدایت الکتریکی پایدار به طور جامع تست شده است.',
          iconName: 'ShieldCheck',
          highlight: 'ضمانت مادام‌العمر ساختار و ایمنی'
        }
      ]
    },
    materials: {
      badge: 'اصالت متریال',
      titlePart1: 'مواد معدنی خالص و',
      titlePart2: 'بافت‌های اصیل',
      subtitle: 'تمام مواد در سخت‌افزارهای روشنا برای استحکام سازه، ایمنی ضدحریق V-0 و لطافت مخملین ضدلک انتخاب شده‌اند.',
      inspectTexture: 'بررسی بافت متریال',
      selectedStudy: 'مطالعه متریال منتخب',
      items: [
        {
          id: 'mat-1',
          name: 'رویه پلیمر ضدحریق Bayer',
          origin: 'لورکوزن، آلمان',
          category: 'پلیمر مخملین',
          description: 'پلی‌کربنات خودخاموش‌شونده و ضدضربه با بافت مات نانو که در لمس بسیار نرم بوده و اثر انگشت روی آن باقی نمی‌ماند.',
          characteristics: ['ایمنی خودخاموش‌شونده UL94 V-0', 'بافت ساتین بدون درخشش آزاردهنده', 'پوشش نانو ضد اثر انگشت']
        },
        {
          id: 'mat-2',
          name: 'شاسی زیرین فولاد نورد سرد',
          origin: 'صنایع فلزی دویسبورگ',
          category: 'فلز ساختاری',
          description: 'براکت فولادی با شیارهای تنظیم چندمحوره جهت نصب کاملاً تراز و تخت روی انواع سطوح سنگ طبیعی، بتن و گچ.',
          characteristics: ['عدم پیچیدگی یا خمش در اثر محکم کردن پیچ‌ها', 'امکان رگلاژ دقیق چندنقطه‌ای', 'پوشش گالوانیزه ضد زنگ‌زدگی']
        },
        {
          id: 'mat-3',
          name: 'ترمینال‌های برنز فسفر ارتجاعی',
          origin: 'کارگاه ریخته‌گری دقیق میلان',
          category: 'آلیاژ رسانا',
          description: 'گیره‌های فنری با ارتجاع بسیار بالا که فشار محکم اتصال را به دوشاخه‌ها و سیم‌کشی ساختمان در طول ده‌ها سال ثابت نگه می‌دارند.',
          characteristics: ['هدایت الکتریکی ۹۹.۲ درصد', 'حفظ فنریت دائمی بدون فرسودگی', 'مقاومت تماسی فوق‌العاده پایین']
        },
        {
          id: 'mat-4',
          name: 'پلاتین‌های آلیاژ نقره-نیکل',
          origin: 'آزمایشگاه‌های کپنهاگ',
          category: 'کنتاکت‌های کلید',
          description: 'پلاتین‌های جوش‌خورده با فناوری لیزر که از ایجاد جرقه و اکسیداسیون جلوگیری کرده و در بارهای سنگین LED قطع و وصل پایدار را تضمین می‌کنند.',
          characteristics: ['عدم اتصال‌کوتاه و چسبندگی پلاتین', 'تایید شده برای ۱۰۰,۰۰۰ بار قطع و وصل', 'بهینه‌شده برای درایورهای LED مدرن']
        }
      ]
    },
    reviews: {
      badge: 'دیدگاه معماران و طراحان',
      titlePart1: 'محبوب طراحان برجسته و',
      titlePart2: 'کارشناسان سخت‌پسند',
      subtitle: 'نظرات طراحان داخلی، مهندسان ارشد برق و کارفرمایانی که پروژه‌های خود را با روشنا ولت متمایز کرده‌اند.',
      testimonials: [
        {
          id: 'test-1',
          name: 'کلاریسا مونتگومری',
          role: 'معمار ارشد در استودیو مونت',
          location: 'ژنو، سوئیس',
          quote: 'روشنا قطعه گمشده معماری معاصر است. کلیدها کاملاً با دیوارهای تراورتن و گچی ما همسطح می‌شوند و حس لمس و صدای کلیک فوق‌العاده ظریف و متمایز است.',
          purchasedProduct: 'مجموعه ۳ عددی تجهیزات اقامتگاه روشنا',
          date: 'معمار تایید شده · ژانویه ۲۰۲۶'
        },
        {
          id: 'test-2',
          name: 'جولیان ونس مورو',
          role: 'مدیر طراحی داخلی',
          location: 'لندن، انگلستان',
          quote: 'ساختار ماژولار ۳ تکه، فرآیند نصب را برای پیمانکاران ما به اوج راحتی رسانده است. خطوط هندسی خالص و نشانگرهای میکرو-LED فضاهای تاریک را به اوج شکوه می‌رسانند.',
          purchasedProduct: 'کلید دوپل دقیق روشنا',
          date: 'عضو صنفی تایید شده · فوریه ۲۰۲۶'
        },
        {
          id: 'test-3',
          name: 'سرافینا لین',
          role: 'توسعه‌دهنده مسکونی و طراح',
          location: 'توکیو و سانفرانسیسکو',
          quote: 'از بسته‌بندی نفیس تا فریم فولادی مستحکم، کیفیت غیرقابل انکار است. روشنا استاندارد جدیدی برای کلید و پریزهای معماری لوکس خلق کرده است.',
          purchasedProduct: 'پریز توکار مدرن روشنا',
          date: 'کارفرمای مسکونی · فوریه ۲۰۲۶'
        }
      ],
      metrics: {
        projectsTitle: '+۱,۴۲۰',
        projectsLabel: 'پروژه لوکس اجرا شده',
        projectsDetail: 'در ۳۴ کشور جهان در برج‌ها و ویلاهای شاخص معماری',
        warrantyTitle: '۲۵ سال',
        warrantyLabel: 'ضمانت بدنه و شاسی',
        warrantyDetail: 'شاسی فولاد نورد سرد و مکانیزم فنری داخلی',
        ratingTitle: '۹۹.۴٪',
        ratingLabel: 'رضایت معماران و کارفرمایان',
        ratingDetail: 'انتخاب مجدد در پروژه‌های بعدی توسط دفاتر برجسته معماری',
        craftTitle: '۱۰۰٪',
        craftLabel: 'کالیبراسیون دقیق لیزری',
        craftDetail: 'تلرانس صفر درصد در مهندسی و مونتاژ تمامی واحدها'
      }
    },
    faq: {
      badge: 'پشتیبانی اختصاصی آتلیه',
      titlePart1: 'پرسش‌های فنی و',
      titlePart2: 'راهنمای معماری',
      subtitle: 'هر آنچه درباره قوطی‌های استاندارد، استانداردهای بین‌المللی CE/IEC و مشاوره پروژه‌های ساختمانی باید بدانید.',
      contactBadge: 'پشتیبانی مستقیم',
      contactTitle: 'مشاوره اختصاصی معماری و پروژه‌ها',
      contactDesc: 'نیاز به طراحی پنل‌های ترکیبی خاص یا فینیش‌های لوکس PVD دارید؟ مشاوران ما همراه شما هستند.',
      contactWhatsapp: 'گفتگو در واتس‌اپ',
      contactEmail: 'ارسال ایمیل',
      items: [
        {
          question: 'معماری مهندسی ماژولار ۳ لایه روشنا چگونه کار می‌کند؟',
          answer: 'روشنا فریم فولادی مستحکم را از رویه دکوراتیو جدا ساخته است. برق‌کاران ابتدا شاسی فولادی را به قوطی‌های استاندارد ۸۶ میلی‌متری یا اروپایی پیچ می‌کنند. پس از اتمام نقاشی و گچ‌کاری ساختمان، قاب پلی‌کربنات یا برنجی بدون نیاز به ابزار و بدون خطر لک رنگ روی آن چفت می‌شود.',
          category: 'نصب و مکانیزم'
        },
        {
          question: 'آیا کلید و پریزهای روشنا با قوطی‌های توکار موجود سازگار هستند؟',
          answer: 'بله، تمامی محصولات با قوطی‌های توکار استاندارد اروپایی CEE 7، بریتانیایی BS 4662 و قوطی‌های استاندارد ۸۶ میلی‌متری با حداقل عمق ۳۵ میلی‌متر کاملاً سازگار هستند.',
          category: 'سازگاری فنی'
        },
        {
          question: 'محصولات روشنا دارای چه استانداردها و مشخصات ایمنی هستند؟',
          answer: 'کلیه تجهیزات دارای گواهینامه‌های معتبر CE، CB، RoHS و استاندارد بین‌المللی IEC-60884 هستند. پریزها با جریان ۱۶ آمپر و ولتاژ ۲۵۰ ولت مجهز به محافظ خودکار کودک می‌باشند و پلاتین‌های نقره-نیکل بیش از ۱۰۰,۰۰۰ بار تست عملکرد دارند.',
          category: 'ایمنی و استانداردها'
        },
        {
          question: 'ضمانت ساختاری روشنا شامل چه مواردی می‌شود؟',
          answer: 'فنرها و مکانیزم داخلی، ترمینال‌های نقره-نیکل و شاسی فولادی دارای گارانتی مادام‌العمر تعویض هستند. قاب‌های دکوراتیو نیز دارای ۱۰ سال ضمانت ثبات رنگ در برابر اشعه UV و فرسودگی می‌باشند.',
          category: 'گارانتی و ضمانت'
        },
        {
          question: 'آیا امکان سفارش پلاک‌ها با حکاکی سفارشی و رنگ‌های اختصاصی برای پروژه‌ها وجود دارد؟',
          answer: 'بله، از طریق آتلیه معماری روشنا، دفاتر طراحی می‌توانند حک لیزری اختصاصی، رنگ‌های خاص با کد RAL و فینیش‌های آبکاری PVD را برای پروژه‌های لوکس سفارش دهند.',
          category: 'سفارشی‌سازی معماری'
        }
      ]
    },
    footer: {
      tagline: 'روشنا ولت • کلید کیفیت (Switch To Quality)',
      newsletterTitle: 'آشنایی با محصولات جدید و',
      newsletterMonograph: 'نشریات تخصصی معماری',
      newsletterDesc: 'دریافت دعوت‌نامه برای رونمایی‌های خصوصی، اسناد مشخصات فنی و کلکسیون‌های محدود سخت‌افزارهای لوکس معماری.',
      newsletterPlaceholder: 'ایمیل کاری دفتر طراحی یا معماری خود را وارد کنید...',
      newsletterButton: 'عضویت',
      subscriptionConfirmed: 'عضویت شما تایید شد. به رجیستری اختصاصی معماران روشنا خوش آمدید.',
      brandDesc: 'آتلیه بین‌المللی طراحی متمرکز بر سخت‌افزارهای مینیمال دیواری، کلیدهای تراز معماری، پریزهای یکپارچه و کنترلرهای حسی محیط زندگی. انتخاب کیفیت برتر.',
      copyright: 'تمامی حقوق محفوظ است. طراحی شده برای فضاهای اصیل و متمایز سراسر جهان.',
      standards: 'مطابق با استانداردهای بین‌المللی CE, CB, RoHS و IEC-60884',
      links: {
        collectionTitle: 'کلکسیون',
        specificationTitle: 'مشخصات فنی',
        atelierTitle: 'آتلیه روشنا',
        conciergeTitle: 'پشتیبانی',
        privacy: 'حریم خصوصی',
        terms: 'شرایط خدمات آتلیه',
        certs: 'گواهینامه‌ها'
      }
    },
    cart: {
      title: 'سبد خرید شما',
      emptyTitle: 'سبد خرید شما در حال حاضر خالی است',
      emptySubtitle: 'کلکسیون کلیدهای لوکس، پریزهای توکار و مجموعه‌های کامل روشنا ولت را کاوش کنید.',
      exploreBtn: 'مشاهده محصولات',
      freeShippingNotice: 'ارسال رایگان برای این سفارش فعال شد',
      addMoreNoticePrefix: 'با افزودن ',
      addMoreNoticeSuffix: ' افغانی دیگر، ارسال رایگان خواهد شد',
      subtotal: 'جمع اقلام',
      delivery: 'ارسال با پیک (سراسر افغانستان)',
      complimentary: 'رایگان',
      totalDue: 'مبلغ نهایی',
      whatsappOrderBtn: 'ثبت و هماهنگی سفارش در واتس‌اپ',
      whatsappOrderSuccess: 'در حال اتصال به واتس‌اپ...',
      dealNotice: 'معامله و پرداخت مستقیم در واتس‌اپ (بدون نیاز به حساب بانکی در افغانستان)',
      colorLabel: 'رنگ:'
    }
  }
};
