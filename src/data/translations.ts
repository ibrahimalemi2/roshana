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
    quadrants: Array<{
      id: string;
      title: string;
      subtitle: string;
      category: string;
      material: string;
      description: string;
      tag: string;
    }>;
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
    products: Array<{
      id: string;
      name: string;
      subtitle: string;
      description: string;
      features: string[];
    }>;
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
      collection: 'Products',
      craft: 'Quality & Craft',
      materials: 'Materials',
      reviews: 'Reviews',
      faq: 'FAQ',
      search: 'Search switches and sockets',
      bag: 'Shopping bag',
      whatsapp: 'WhatsApp',
      switchLang: 'فارسی',
      lightMode: 'Light',
      darkMode: 'Navy Dark',
      intro: 'Intro'
    },
    hero: {
      eyebrow: 'PREMIUM ELECTRICAL HARDWARE',
      title1: 'Modern Switches & Sockets —',
      title2Prefix: 'Crafted for ',
      title2Highlight: 'Comfort, Safety & Style',
      subtitle: 'Experience luxury design, matte anti-allergic surfaces, and smooth, reliable performance for residential and commercial spaces.',
      cta: 'Explore Products',
      quickViewHint: 'Quick View',
      stats: {
        iecValue: 'Standard',
        iecLabel: '86mm Box Fit',
        ip65Value: 'Safety',
        ip65Label: 'Flame Retardant',
        warrantyValue: '10-Year',
        warrantyLabel: 'Quality Guarantee',
        toolValue: 'Smooth',
        toolLabel: 'Anti-Allergic Touch'
      }
    },
    anatomy: {
      badge: 'Core Design Elements',
      titlePart1: 'Balanced Form &',
      titlePart2: 'Safe Engineering',
      subtitle: 'Explore the key pillars of our switch and socket design: tactile comfort, robust internal contacts, fire-retardant safety, and clean aesthetics.',
      ratingText: 'Verified Quality',
      materialLabel: 'Material:',
      perspectivesTitle: 'Inspect Key Features:',
      guaranteeText: 'Built with flame-retardant polymers and reinforced contacts for long-term safety.',
      quadrants: [
        {
          id: 'quad-1',
          title: 'Solid Metal Subframe',
          subtitle: 'Structural Strength',
          category: 'Subframe Engineering',
          material: 'Cold-Rolled Steel Plate',
          description: 'A rigid steel backframe ensures flush, zero-flex alignment on standard 86mm wall boxes.',
          tag: 'Q1 · Durability'
        },
        {
          id: 'quad-2',
          title: 'Anti-Allergic Matte Surface',
          subtitle: 'Touch Comfort',
          category: 'Surface Hygiene',
          material: 'Skin-Friendly Polymer',
          description: 'Smooth velvet-matte texture that resists skin irritation, fingerprints, and microbial retention.',
          tag: 'Q2 · Hygiene'
        },
        {
          id: 'quad-3',
          title: 'Tactile Rocker Mechanism',
          subtitle: 'Smooth Actuation',
          category: 'Switching Control',
          material: 'Calibrated Precision Springs',
          description: 'Smooth, whisper-quiet tactile switching tested for over 50,000 smooth cycles.',
          tag: 'Q3 · Performance'
        },
        {
          id: 'quad-4',
          title: 'Child-Safe Power Socket',
          subtitle: 'Electrical Protection',
          category: 'Safety Aperture',
          material: 'High-Elasticity Brass',
          description: 'Automated internal safety shutters prevent accidental foreign object insertion for total peace of mind.',
          tag: 'Q4 · Safety'
        }
      ]
    },
    showcase: {
      badge: 'Our Products',
      titlePart1: 'Core Collection',
      titlePart2: 'Modern Switches & Sockets',
      categories: {
        all: 'All Products',
        switches: 'Switches',
        sockets: 'Power Sockets',
        modular: 'Accessories'
      },
      addToBag: 'Add to Bag',
      addedToBag: 'Added to Bag',
      quickSpecs: 'View Details',
      consultationTitle: 'Need Bulk Orders or Project Consultation?',
      consultationDesc: 'Our team provides direct consultation, project volume pricing, and reliable switch & socket supply for homes and commercial buildings.',
      consultationButton: 'Inquire on WhatsApp',
      products: [
        {
          id: 'roshna-sw-01',
          name: 'Single Switch',
          subtitle: 'Modern 1-Gang Matte Wall Switch',
          description: 'Single switch with a modern design and matte surface, crafted from high-quality materials suited for frequent touch. Surface materials are specifically selected to reduce skin irritation, while hygienic surface properties help minimize the retention and growth of microorganisms.',
          features: [
            'Modern luxury design',
            'Tactile velvet-matte finish',
            'Suitable for frequent skin touch',
            'Minimizes microbial retention',
            'Smooth and durable performance'
          ]
        },
        {
          id: 'roshna-sw-02',
          name: 'Double Switch',
          subtitle: 'Modern 2-Gang Tactile Wall Switch',
          description: 'Double switch designed for spaces where aesthetics, quality, and dependable performance unite. Its minimal profile and matte surface bring contemporary elegance to walls, paired with a reinforced internal structure built for intensive daily use.',
          features: [
            'Luxury minimal design',
            'Velvet-matte surface',
            'Durable reinforced structure',
            'Smooth and precise operation',
            'Hygienic anti-allergic materials'
          ]
        },
        {
          id: 'roshna-soc-01',
          name: 'Power Socket',
          subtitle: 'Modern Safe Wall Power Socket',
          description: 'Modern power socket centered on safety, longevity, and aesthetics. Its contemporary matte profile matches modern decor, while the heavy-duty internal architecture ensures reliable connection and continuous use in residential and commercial environments.',
          features: [
            'Modern luxury design',
            'High-grade matte finish',
            'Heavy-duty durable structure',
            'Hygienic and safe for daily touch'
          ]
        }
      ]
    },
    principles: {
      badge: 'Our Standards',
      titlePart1: 'Built for Safety,',
      titlePart2: 'Engineered to Last',
      subtitle: 'We focus on what truly matters in daily life: fire safety, smooth tactile feel, skin-safe surfaces, and effortless installation.',
      detailedCommitment: 'Quality Commitment',
      pillarLabel: 'Principle',
      labCertified: 'Safety Certified Standards',
      directProvenance: 'Direct Store Warranty',
      pillars: [
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
      ]
    },
    materials: {
      badge: 'Material Quality',
      titlePart1: 'Durable Materials &',
      titlePart2: 'Hygienic Surfaces',
      subtitle: 'Every component is selected for fire safety, comfortable skin contact, and long-lasting mechanical durability.',
      inspectTexture: 'Inspect Feature',
      selectedStudy: 'Component Highlight',
      items: [
        {
          id: 'mat-1',
          name: 'Flame-Retardant Matte Cover',
          origin: 'High-Grade Polymer',
          category: 'Anti-Allergic Surface',
          description: 'Self-extinguishing V-0 polycarbonate with a smooth matte texture that prevents skin irritation and reduces the buildup of microorganisms.',
          characteristics: ['Flame-retardant safety', 'Velvet matte anti-glare finish', 'Anti-fingerprint and hygienic']
        },
        {
          id: 'mat-2',
          name: 'Reinforced Steel Subframe',
          origin: 'Galvanized Metal',
          category: 'Structural Base',
          description: 'Rigid steel mounting bracket with universal alignment screw slots, ensuring flush installation on all standard 86mm wall boxes.',
          characteristics: ['Zero torsion or bending', 'Multi-point leveling slots', 'Rust-resistant protective coating']
        },
        {
          id: 'mat-3',
          name: 'High-Conductivity Brass Clips',
          origin: 'Spring Brass Alloy',
          category: 'Electrical Terminal',
          description: 'Heavy-duty brass terminals that maintain high elasticity and firm clamping pressure on plugs and house wiring over decades.',
          characteristics: ['99%+ electrical conductivity', 'Fatigue-resistant spring retention', 'Low contact resistance & heat dissipation']
        },
        {
          id: 'mat-4',
          name: 'Spark-Resistant Contacts',
          origin: 'Silver Alloy',
          category: 'Switching Mechanism',
          description: 'Durable contact points engineered to prevent arcing and electrical wear, ensuring smooth, safe switching for all lighting loads.',
          characteristics: ['Spark & arc prevention', 'Tested for 50,000+ switches', 'Optimized for modern LED loads']
        }
      ]
    },
    reviews: {
      badge: 'Customer & Electrician Feedback',
      titlePart1: 'Trusted by Electricians &',
      titlePart2: 'Homeowners',
      subtitle: 'Read genuine feedback from master electricians, interior contractors, and homeowners who rely on Roshna Volt hardware.',
      testimonials: [
        {
          id: 'test-1',
          name: 'Ahmad Reshad',
          role: 'Master Electrical Contractor',
          location: 'Kabul, Afghanistan',
          quote: 'Installation is straightforward and clean. The steel backplate fits standard 86mm boxes perfectly without flexing, and the wire terminals clamp firmly.',
          purchasedProduct: 'Single & Double Switches',
          date: 'Verified Electrician'
        },
        {
          id: 'test-2',
          name: 'Maryam Sadat',
          role: 'Residential Client',
          location: 'Herat, Afghanistan',
          quote: 'The matte finish feels very smooth to the touch, does not leave fingerprints, and looks significantly more modern and clean than ordinary glossy switches.',
          purchasedProduct: 'Modern Power Sockets',
          date: 'Verified Homeowner'
        },
        {
          id: 'test-3',
          name: 'Farhad Nawabi',
          role: 'Commercial Project Supervisor',
          location: 'Mazar-i-Sharif, Afghanistan',
          quote: 'We ordered over 200 units for an office renovation via WhatsApp. Delivery was prompt, prices were reasonable, and the quality has been reliable.',
          purchasedProduct: 'Full Facility Order',
          date: 'Commercial Contractor'
        }
      ],
      metrics: {
        projectsTitle: '99%',
        projectsLabel: 'Customer Satisfaction',
        projectsDetail: 'Trusted by homeowners and electricians nationwide',
        warrantyTitle: '10-Year',
        warrantyLabel: 'Quality Guarantee',
        warrantyDetail: 'Direct store replacement for internal mechanisms',
        ratingTitle: '50K+',
        ratingLabel: 'Tested Actuations',
        ratingDetail: 'Smooth and reliable switching performance',
        craftTitle: '86mm',
        craftLabel: 'Standard Box Fit',
        craftDetail: 'Compatible with standard electrical wall boxes'
      }
    },
    faq: {
      badge: 'Frequently Asked Questions',
      titlePart1: 'Questions &',
      titlePart2: 'Customer Support',
      subtitle: 'Common questions about wall box compatibility, installation, bulk orders, and WhatsApp delivery in Afghanistan.',
      contactBadge: 'Direct Customer Service',
      contactTitle: 'Direct Inquiries & Wholesale Orders',
      contactDesc: 'Need assistance with box sizing, quantities, or wholesale project pricing? Contact us directly on WhatsApp.',
      contactWhatsapp: 'Chat on WhatsApp',
      contactEmail: 'Email Us',
      items: [
        {
          question: 'Are these switches and sockets compatible with standard existing wall boxes?',
          answer: 'Yes. All Roshna switches and sockets are engineered to fit standard 86mm flush-mount wall boxes commonly used in homes and commercial buildings. They can be installed quickly by any qualified electrician.',
          category: 'Installation & Sizing'
        },
        {
          question: 'How do I place an order and how does payment work in Afghanistan?',
          answer: 'You can order directly through our website by clicking "Order via WhatsApp". We will confirm your items, total in AFN, and coordinate convenient payment (Cash on Delivery or Sarafi/Hawala) and courier delivery.',
          category: 'Ordering & Payment'
        },
        {
          question: 'Do you offer wholesale pricing for construction projects and contractors?',
          answer: 'Yes. We provide special wholesale pricing and dedicated assistance for building contractors, electricians, and interior developers. Contact our team on WhatsApp for project quotes.',
          category: 'Bulk & Wholesale'
        },
        {
          question: 'What are the benefits of the anti-allergic matte surface?',
          answer: 'The faceplates are crafted from high-grade matte polymer that feels soft to the touch, does not absorb fingerprints, and uses skin-safe materials that minimize microbial retention from frequent daily contact.',
          category: 'Material & Hygiene'
        },
        {
          question: 'What warranty is included with the switches and sockets?',
          answer: 'We provide a 10-year quality guarantee on internal mechanical switch contacts and solid metal subframes, ensuring worry-free performance for years to come.',
          category: 'Warranty & Support'
        }
      ]
    },
    footer: {
      tagline: 'Roshna Volt • Modern Switches & Sockets',
      newsletterTitle: 'Catalog Updates &',
      newsletterMonograph: 'Direct Customer Care',
      newsletterDesc: 'Stay updated on product availability, new electrical hardware arrivals, and wholesale project offers.',
      newsletterPlaceholder: 'Enter your email or phone number...',
      newsletterButton: 'Submit',
      subscriptionConfirmed: 'Thank you! Our customer care team will keep you informed.',
      brandDesc: 'Roshna Volt supplies modern, safe, and durable switches & sockets with luxury design and matte anti-allergic touch for homes and businesses.',
      copyright: 'All rights reserved. Reliable switches & sockets for modern spaces.',
      standards: 'Compatible with Standard 86mm Wall Boxes',
      links: {
        collectionTitle: 'Products',
        specificationTitle: 'Services',
        atelierTitle: 'About Roshna',
        conciergeTitle: 'Support',
        privacy: 'Privacy Policy',
        terms: 'Terms of Sale',
        certs: 'Warranty Details'
      }
    },
    cart: {
      title: 'Your Shopping Bag',
      emptyTitle: 'Your bag is currently empty',
      emptySubtitle: 'Explore our modern switches and power sockets designed for safety and style.',
      exploreBtn: 'Explore Products',
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
      collection: 'محصولات',
      craft: 'کیفیت و ساختار',
      materials: 'متریال‌ها',
      reviews: 'دیدگاه‌ها',
      faq: 'سوالات متداول',
      search: 'جستجوی کلید و پریز',
      bag: 'سبد خرید',
      whatsapp: 'واتس‌اپ',
      switchLang: 'English',
      lightMode: 'روشن',
      darkMode: 'سرمه‌ای تیره',
      intro: 'معرفی'
    },
    hero: {
      eyebrow: 'کلید و پریزهای ساختمانی باکیفیت',
      title1: 'سویچ‌ها و ساکت‌های مدرن —',
      title2Prefix: 'ساخته شده برای ',
      title2Highlight: 'راحتی، ایمنی و زیبایی',
      subtitle: 'تجربه طراحی لوکس، سطوح مات ضدحساسیت و عملکردی نرم و مطمئن برای فضاهای مسکونی و تجاری.',
      cta: 'مشاهده محصولات',
      quickViewHint: 'مشخصات سریع',
      stats: {
        iecValue: '۸۶ میلی‌متر',
        iecLabel: 'قوطی استاندارد',
        ip65Value: 'ایمنی بالا',
        ip65Label: 'پلیمر نسوز',
        warrantyValue: '۱۰ سال',
        warrantyLabel: 'ضمانت کیفیت',
        toolValue: 'ضدحساسیت',
        toolLabel: 'سطح مات و بهداشتی'
      }
    },
    anatomy: {
      badge: 'اصول طراحی و ساختار',
      titlePart1: 'تقارن مدرن و',
      titlePart2: 'مهندسی ایمن و مقاوم',
      subtitle: 'ویژگی‌های کلیدی محصولات روشنا: لمس نرم و راحت، اتصالات برنجی محکم، ایمنی در برابر حرارت و زیبایی هماهنگ با دکوراسیون.',
      ratingText: 'کیفیت تضمین شده',
      materialLabel: 'متریال:',
      perspectivesTitle: 'بررسی ویژگی‌های کلیدی:',
      guaranteeText: 'ساخته شده از مواد ضدحریق و اتصالات فلزی مستحکم برای ایمنی و ماندگاری طولانی‌مدت.',
      quadrants: [
        {
          id: 'quad-1',
          title: 'شاسی فولادی مستحکم',
          subtitle: 'استحکام ساختاری',
          category: 'مهندسی فریم',
          material: 'ورق فولادی نورد سرد',
          description: 'فریم فلزی مقاوم تراز شدن کامل و بدون لرزش را بر روی قوطی‌های استاندارد ۸۶ میلی‌متری تضمین می‌کند.',
          tag: 'بخش ۱ · دوام بالا'
        },
        {
          id: 'quad-2',
          title: 'سطح مات ضدحساسیت',
          subtitle: 'راحتی لمس',
          category: 'بهداشت سطح',
          material: 'پلیمر سازگار با پوست',
          description: 'بافت مخملی مات که مانع تحریک پوست، لک انگشتان و تجمع باکتری و میکروارگانیسم‌ها می‌شود.',
          tag: 'بخش ۲ · بهداشت'
        },
        {
          id: 'quad-3',
          title: 'مکانیزم نرم و بی‌صدا',
          subtitle: 'عملکرد دقیق',
          category: 'کنترل کلیدزنی',
          material: 'فنرهای دقیق کالیبره شده',
          description: 'عملکرد نرم، آرام و مطمئن که برای بیش از ۵۰,۰۰۰ بار کلیدزنی مداوم تست شده است.',
          tag: 'بخش ۳ · عملکرد'
        },
        {
          id: 'quad-4',
          title: 'ساکت برق با محافظ کودک',
          subtitle: 'حفاظت الکتریکی',
          category: 'ایمنی پریز',
          material: 'برنج فنری مرغوب',
          description: 'درپوش‌های خودکار داخلی مانع از ورود اجسام خارجی به پریز شده و ایمنی کامل خانواده را فراهم می‌کنند.',
          tag: 'بخش ۴ · ایمنی'
        }
      ]
    },
    showcase: {
      badge: 'محصولات ما',
      titlePart1: 'مجموعه اصلی',
      titlePart2: 'سویچ‌ها و ساکت‌های مدرن',
      categories: {
        all: 'همه محصولات',
        switches: 'سویچ‌ها',
        sockets: 'ساکت‌های برق',
        modular: 'لوازم جانبی'
      },
      addToBag: 'افزودن به سبد',
      addedToBag: 'به سبد افزوده شد',
      quickSpecs: 'مشاهده جزئیات',
      consultationTitle: 'نیاز به سفارش عمده یا مشاوره پروژه دارید؟',
      consultationDesc: 'تیم روشنا آماده ارائه مشاوره مستقیم، بررسی تعداد و بهترین قیمت برای پروژه‌های مسکونی و تجاری شماست.',
      consultationButton: 'مشاوره در واتس‌اپ',
      products: [
        {
          id: 'roshna-sw-01',
          name: 'سویچ یکپل',
          subtitle: 'کلید تک‌پل مدرن با سطح مات',
          description: 'سویچ یکپل با طراحی مدرن و سطح مات، ساخته‌شده از مواد باکیفیت و مناسب برای تماس مکرر با دست. مواد سطحی آن برای کاهش احتمال تحریک و حساسیت پوستی انتخاب شده و ویژگی‌های بهداشتی سطح نیز به کاهش ماندگاری و رشد میکروارگانیسم‌ها کمک می‌کند.',
          features: [
            'طراحی مدرن و لوکس',
            'سطح مات و خوش‌لمس',
            'مناسب برای تماس مکرر با پوست',
            'کاهش رشد و ماندگاری میکروارگانیسم‌ها',
            'عملکرد نرم و بادوام'
          ]
        },
        {
          id: 'roshna-sw-02',
          name: 'سویچ دوپل',
          subtitle: 'کلید دوپل مدرن و بادوام',
          description: 'سویچ دوپل برای فضاهایی طراحی شده است که زیبایی، کیفیت و عملکرد مطمئن باید در کنار یکدیگر قرار گیرند. طراحی مینیمال و سطح مات آن جلوه‌ای مدرن به دیوار می‌دهد، در حالی که ساختار داخلی مقاوم برای استفاده مکرر ساخته شده است.',
          features: [
            'طراحی لوکس و مینیمال',
            'سطح مات',
            'ساختار مقاوم',
            'عملکرد نرم و دقیق',
            'مواد ضدحساسیت پوستی و بهداشتی'
          ]
        },
        {
          id: 'roshna-soc-01',
          name: 'ساکت برق',
          subtitle: 'پریز برق مدرن و ایمن',
          description: 'ساکت برق مدرن با تمرکز بر سه اصل ایمنی، دوام و زیبایی. طراحی مدرن و سطح مات آن با دکوراسیون‌های امروزی هماهنگ شده و ساختار داخلی مقاوم برای اتصال مطمئن و استفاده مداوم در محیط‌های مسکونی و تجاری در نظر گرفته شده است.',
          features: [
            'طراحی لوکس و مدرن',
            'سطح مات و باکیفیت',
            'ساختار مقاوم برای استفاده طولانی‌مدت',
            'مناسب برای تماس روزمره و بهداشتی'
          ]
        }
      ]
    },
    principles: {
      badge: 'اصول و استانداردهای ما',
      titlePart1: 'ساخته شده برای ایمنی،',
      titlePart2: 'ماندگار برای استفاده مداوم',
      subtitle: 'تمرکز ما بر نیازهای واقعی زندگی روزمره است: ایمنی در برابر آتش، عملکرد نرم و بی‌صدا، سطوح ضدحساسیت و نصب آسان.',
      detailedCommitment: 'تعهد به کیفیت',
      pillarLabel: 'اصل شماره',
      labCertified: 'استاندارد ایمنی تایید شده',
      directProvenance: 'ضمانت مستقیم فروشگاه',
      pillars: [
        {
          id: 'pillar-1',
          number: '۰۱',
          title: 'شاسی فلزی مستحکم',
          shortDesc: 'فریم فولادی مقاوم برای اتصال محکم و بدون انحنا روی دیوار.',
          fullDesc: 'پایه فلزی مستحکم تضمین می‌کند که کلید با فشار مداوم دست در طول سال‌ها استفاده شل نشده و همیشه کاملاً صاف روی دیوار باقی می‌ماند.',
          iconName: 'Gem',
          highlight: 'شاسی فولادی مقاوم'
        },
        {
          id: 'pillar-2',
          number: '۰۲',
          title: 'پلیمر مات ضدحریق و ضدحساسیت',
          shortDesc: 'پلی‌کربنات نسوز V-0 با بافت مات نرم و ضدحساسیت پوستی.',
          fullDesc: 'مقاوم در برابر حرارت و خودخاموش‌شونده. بافت مات آن اثر انگشت را جذب نکرده و به دلیل بهداشتی بودن، مانع رشد باکتری و آلودگی می‌شود.',
          iconName: 'Leaf',
          highlight: 'ایمن، ضدحریق و ضدحساسیت'
        },
        {
          id: 'pillar-3',
          number: '۰۳',
          title: 'عملکرد نرم و بی‌صدا',
          shortDesc: 'فنرها و مکانیزم دقیق که کلیکی آرام، دلنشین و روان ایجاد می‌کنند.',
          fullDesc: 'مکانیزم داخلی برای بیش از ۵۰,۰۰۰ بار استفاده تست شده تا با هر بار فشردن، حس اطمینان و نرمی را منتقل کند.',
          iconName: 'Sparkles',
          highlight: '+۵۰,۰۰۰ بار استفاده تست شده'
        },
        {
          id: 'pillar-4',
          number: '۰۴',
          title: 'ایمنی الکتریکی و ضمانت',
          shortDesc: 'ترمینال‌های برنجی با محافظ خودکار برای آرامش خاطر کامل.',
          fullDesc: 'پریزها مجهز به محافظ خودکار کودک هستند و اتصالات برنجی با رسانایی بالا از داغ شدن سیم‌ها در زیر بار مداوم جلوگیری می‌کنند.',
          iconName: 'ShieldCheck',
          highlight: '۱۰ سال ضمانت کیفیت'
        }
      ]
    },
    materials: {
      badge: 'اصالت و کیفیت متریال',
      titlePart1: 'مواد اولیه باکیفیت و',
      titlePart2: 'سطوح بهداشتی',
      subtitle: 'تمام اجزای این محصولات برای ایمنی در برابر آتش، لمس راحت پوست و طول عمر مکانیکی بالا انتخاب شده‌اند.',
      inspectTexture: 'بررسی ویژگی',
      selectedStudy: 'معرفی بخش منتخب',
      items: [
        {
          id: 'mat-1',
          name: 'رویه مات ضدحریق و ضدحساسیت',
          origin: 'پلیمر مرغوب',
          category: 'سطح بهداشتی',
          description: 'پلی‌کربنات نسوز خودخاموش‌شونده با بافت مات مخملین که تحریک پوستی ایجاد نکرده و مانع ماندگاری آلودگی و اثر انگشت می‌شود.',
          characteristics: ['ایمنی ضدحریق V-0', 'بافت مات بدون بازتاب نور', 'ضد حساسیت و بهداشتی']
        },
        {
          id: 'mat-2',
          name: 'شاسی فولادی مقاوم',
          origin: 'فلز گالوانیزه',
          category: 'پایه ساختاری',
          description: 'فریم فلزی مستحکم با شیارهای استاندارد پیچ، جهت نصب کاملاً صاف و مطمئن روی قوطی‌های توکار ۸۶ میلی‌متری.',
          characteristics: ['عدم خمیدگی زیر فشار پیچ', 'امکان تراز دقیق', 'پوشش مقاوم در برابر زنگ‌زدگی']
        },
        {
          id: 'mat-3',
          name: 'گیره‌های برنجی با رسانایی بالا',
          origin: 'آلیاژ برنج فنری',
          category: 'اتصال الکتریکی',
          description: 'ترمینال‌های برنجی ارتجاعی که فشار محکم اتصال به دوشاخه و سیم‌های برق ساختمان را در طول سال‌ها حفظ می‌کنند.',
          characteristics: ['رسانایی الکتریکی بالای ۹۹٪', 'حفظ خاصیت فنری', 'عدم داغ شدن تحت بار مداوم']
        },
        {
          id: 'mat-4',
          name: 'پلاتین‌های ضدجرقه و بادوام',
          origin: 'آلیاژ نقره',
          category: 'مکانیزم کلید',
          description: 'کنتاکت‌های الکتریکی مقاوم که از ایجاد جرقه و فرسودگی جلوگیری کرده و قطع و وصل ایمن لامپ‌های LED را تضمین می‌کنند.',
          characteristics: ['جلوگیری از جرقه و فرسودگی', 'تست شده برای ۵۰ هزار بار کلیدزنی', 'بهینه‌شده برای انواع بار الکتریکی']
        }
      ]
    },
    reviews: {
      badge: 'دیدگاه مشتریان و برق‌کاران',
      titlePart1: 'مورد اعتماد برق‌کاران و',
      titlePart2: 'مشتریان خانگی',
      subtitle: 'نظرات واقعی برق‌کاران، پیمانکاران ساختمانی و خانواده‌هایی که از کلید و پریزهای روشنا ولت استفاده می‌کنند.',
      testimonials: [
        {
          id: 'test-1',
          name: 'احمد رشاد',
          role: 'استادکار تاسیسات برق',
          location: 'کابل، افغانستان',
          quote: 'نصب این کلیدها واقعاً راحت و تمیز است. فریم فلزی پشت آن روی قوطی‌های استاندارد ۸۶ میلی‌متری بدون هیچ خمیدگی محکم می‌شود و ترمینال‌های سیم به خوبی سفت می‌شوند.',
          purchasedProduct: 'سویچ‌های یکپل و دوپل',
          date: 'برق‌کار مجرب'
        },
        {
          id: 'test-2',
          name: 'مریم سادات',
          role: 'مشتری مسکونی',
          location: 'هرات، افغانستان',
          quote: 'رویه مات این کلیدها در لمس بسیار لطیف است، جای انگشت روی آن نمی‌ماند و ظاهر خانه را نسبت به کلیدهای براق معمولی خیلی شیک‌تر و تمیزتر کرده است.',
          purchasedProduct: 'ساکت‌های برق مدرن',
          date: 'مشتری خانگی'
        },
        {
          id: 'test-3',
          name: 'فرهاد نوابی',
          role: 'مسئول پروژه ساختمانی',
          location: 'مزارشریف، افغانستان',
          quote: 'برای یک ساختمان اداری بیش از ۲۰۰ عدد از طریق واتس‌اپ سفارش دادیم. ارسال سریع بود، قیمت‌ها مناسب بود و کیفیت ساخت بسیار رضایت‌بخش است.',
          purchasedProduct: 'سفارش کلی پروژه',
          date: 'پیمانکار ساختمانی'
        }
      ],
      metrics: {
        projectsTitle: '۹۹٪',
        projectsLabel: 'رضایت خریداران',
        projectsDetail: 'مورد تایید استادکاران و مشتریان خانگی',
        warrantyTitle: '۱۰ سال',
        warrantyLabel: 'ضمانت کیفیت',
        warrantyDetail: 'گارانتی تعویض مستقیم مکانیزم داخلی',
        ratingTitle: '+۵۰K',
        ratingLabel: 'بار کارکرد تست شده',
        ratingDetail: 'عملکرد نرم، دقیق و بادوام',
        craftTitle: '۸۶mm',
        craftLabel: 'سایز استاندارد قوطی',
        craftDetail: 'سازگار با انواع قوطی‌های برق استاندارد'
      }
    },
    faq: {
      badge: 'سوالات متداول',
      titlePart1: 'پرسش‌های متداول و',
      titlePart2: 'راهنمای خرید',
      subtitle: 'پاسخ به سوالات متداول درباره سایز قوطی توکار، نحوه نصب، سفارش عمده و ارسال مستقیم در افغانستان.',
      contactBadge: 'پشتیبانی مستقیم',
      contactTitle: 'مشاوره سفارش‌های عمده و پروژه‌ای',
      contactDesc: 'نیاز به راهنمایی در مورد سایز قوطی‌ها، تعداد یا قیمت عمده برای پروژه‌تان دارید؟ در واتس‌اپ با ما در ارتباط باشید.',
      contactWhatsapp: 'گفتگو در واتس‌اپ',
      contactEmail: 'ارسال ایمیل',
      items: [
        {
          question: 'آیا این کلید و پریزها با قوطی‌های استاندارد موجود در بازار سازگار هستند؟',
          answer: 'بله، تمامی سویچ‌ها و ساکت‌های روشنا بر اساس استاندارد جهانی سایز ۸۶ میلی‌متر ساخته شده‌اند و با انواع قوطی‌های توکار استاندارد بازار کاملاً سازگار هستند و به سادگی توسط هر برق‌کاری نصب می‌شوند.',
          category: 'نصب و سازگاری'
        },
        {
          question: 'نحوه ثبت سفارش و پرداخت در افغانستان چگونه است؟',
          answer: 'شما می‌توانید با کلیک روی دکمه "ثبت سفارش در واتس‌اپ"، لیست محصولات انتخابی‌تان را مستقیماً ارسال کنید. هماهنگی پرداخت به صورت نقدی هنگام تحویل یا حواله صرافی و ارسال با پیک در سراسر افغانستان انجام می‌شود.',
          category: 'سفارش و پرداخت'
        },
        {
          question: 'آیا برای پروژه‌ها و سفارش‌های عمده تخفیف در نظر گرفته‌اید؟',
          answer: 'بله، برای پیمانکاران، مهندسان و دفاتر تجاری، قیمت‌های ویژه همکاری و عمده در نظر گرفته شده است. جهت دریافت قیمت پروژه‌ای کافیست در واتس‌اپ به ما پیام دهید.',
          category: 'سفارش عمده'
        },
        {
          question: 'خاصیت سطح مات ضدحساسیت و بهداشتی چیست؟',
          answer: 'روکش این محصولات از پلیمری مرغوب ساخته شده که در تماس مکرر دست تحریک پوستی ایجاد نمی‌کند، اثر چربی و لک را جذب نمی‌کند و خاصیت ضدباکتریایی آن مانع تجمع آلودگی روی کلید می‌شود.',
          category: 'متریال و بهداشت'
        },
        {
          question: 'ضمانت و خدمات پس از فروش محصولات چگونه است؟',
          answer: 'تمامی محصولات روشنا دارای ۱۰ سال ضمانت کیفیت کارکرد مکانیزم داخلی و فریم فلزی هستند تا خریدی با آرامش خاطر کامل داشته باشید.',
          category: 'گارانتی و خدمات'
        }
      ]
    },
    footer: {
      tagline: 'روشنا ولت • سویچ و ساکت‌های مدرن و ایمن',
      newsletterTitle: 'اطلاع از موجودی و',
      newsletterMonograph: 'پشتیبانی اختصاصی مشتریان',
      newsletterDesc: 'برای اطلاع از محصولات جدید، قیمت‌های همکاری و تخفیف‌های ویژه شماره یا ایمیل خود را ثبت کنید.',
      newsletterPlaceholder: 'شماره واتس‌اپ یا ایمیل خود را وارد کنید...',
      newsletterButton: 'ثبت',
      subscriptionConfirmed: 'اطلاعات شما ثبت شد. به جمع مشتریان روشنا خوش آمدید.',
      brandDesc: 'روشنا ولت عرضه کننده کلید و پریزهای مدرن با طراحی لوکس، ایمن، باکیفیت و سطوح مات ضدحساسیت برای پروژه‌های مسکونی و تجاری.',
      copyright: 'تمامی حقوق محفوظ است. انتخاب کیفیت و ایمنی برای فضاهای مدرن.',
      standards: 'سازگار با انواع قوطی‌های برق استاندارد ۸۶ میلی‌متر',
      links: {
        collectionTitle: 'محصولات',
        specificationTitle: 'خدمات',
        atelierTitle: 'درباره روشنا',
        conciergeTitle: 'پشتیبانی',
        privacy: 'حریم خصوصی',
        terms: 'شرایط همکاری',
        certs: 'شرایط ضمانت'
      }
    },
    cart: {
      title: 'سبد خرید شما',
      emptyTitle: 'سبد خرید شما در حال حاضر خالی است',
      emptySubtitle: 'سویچ‌ها و ساکت‌های مدرن و ایمن روشنا را مشاهده و انتخاب کنید.',
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
