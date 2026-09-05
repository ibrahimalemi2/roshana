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
      eyebrow: 'Powering Quality. Inspiring Tomorrow.',
      title1: 'Premium Switches & Sockets —',
      title2Prefix: 'A Small Switch, ',
      title2Highlight: 'A Brighter Tomorrow',
      subtitle: 'Modern Design | Safer Homes | Brighter Lives. Experience precision engineering, ultra-thin profiles, and trusted electrical hardware.',
      cta: 'Explore Products',
      quickViewHint: 'Quick View',
      stats: {
        iecValue: '10A / 16A',
        iecLabel: '250V~ Rated Power',
        ip65Value: 'Ultra Thin',
        ip65Label: 'Luxury Profile',
        warrantyValue: '10-Year',
        warrantyLabel: 'Quality Guarantee',
        toolValue: 'Anti-Allergic',
        toolLabel: 'Antibacterial Surface'
      }
    },
    anatomy: {
      badge: 'Engineering Excellence',
      titlePart1: 'Core Design',
      titlePart2: 'Elements',
      subtitle: 'Balanced Form & Safe Engineering — Explore the key pillars of our switch and socket design.',
      ratingText: 'Verified Quality',
      materialLabel: 'Material:',
      perspectivesTitle: 'Key Design Pillars:',
      guaranteeText: 'Built with flame-retardant polymers and reinforced contacts for long-term safety.',
      quadrants: [
        {
          id: 'quad-1',
          title: 'Solid Metal Subframe',
          subtitle: 'Durability',
          category: 'Subframe Engineering',
          material: 'Cold-Rolled Steel Plate',
          description: 'Rigid steel backframe ensuring flush, zero-flex alignment on standard 86mm wall boxes.',
          tag: 'Durability'
        },
        {
          id: 'quad-2',
          title: 'Anti-Allergic Matte Surface',
          subtitle: 'Hygiene & Comfort',
          category: 'Surface Hygiene',
          material: 'Skin-Friendly Polymer',
          description: 'Premium surface materials selected to reduce skin irritation and minimize microorganism buildup.',
          tag: 'Hygiene & Comfort'
        },
        {
          id: 'quad-3',
          title: 'Tactile Rocker Mechanism',
          subtitle: 'Performance',
          category: 'Switching Control',
          material: 'Calibrated Precision Springs',
          description: 'Smooth, quiet action designed for comfortable daily operation and frequent touch.',
          tag: 'Performance'
        },
        {
          id: 'quad-4',
          title: 'Child-Safe Protection',
          subtitle: 'Safety',
          category: 'Safety Aperture',
          material: 'Flame-Retardant Polymer',
          description: 'Built with flame-retardant polymers and secure internal mechanisms for total family safety.',
          tag: 'Safety'
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
          name: '1G 1W 10A SWITCH',
          subtitle: 'سویچ تک خانه تک مسیر ۱۰ آمپر',
          description: '1G 1W 10A Switch with ultra-thin luxury design. Features an antibacterial and non-allergenic matte surface, heat-resistant engineering, and durable premium polymer construction.',
          features: [
            '10 A 250 V~ Electrical Rating',
            'Ultra Thin (بسیار نازک)',
            'Luxury Design (طراحی لوکس)',
            'Antibacterial Surface (سطح ضد باکتری)',
            'Non-Allergenic Material (مواد غیر حساسیت زا)',
            'Heat Resistant (مقاوم در برابر حرارت)',
            'Long Life Durability (عمر طولانی و دوام بالا)'
          ]
        },
        {
          id: 'roshna-sw-02',
          name: '2G 1W 10A SWITCH',
          subtitle: 'سویچ دو خانه تک مسیر ۱۰ آمپر',
          description: '2G 1W 10A Switch with independent dual-gang rocker control in an ultra-thin frame. Built for smooth daily touch, thermal resistance, and long-lasting durability.',
          features: [
            '10 A 250 V~ Electrical Rating',
            'Ultra Thin (بسیار نازک)',
            'Luxury Design (طراحی لوکس)',
            'Dual Gang 1-Way Switching',
            'Premium Polymer Material (پلیمر با کیفیت ممتاز)',
            'Heat Resistant (مقاوم در برابر حرارت)',
            'Long Life Durability (عمر طولانی و دوام بالا)'
          ]
        },
        {
          id: 'roshna-soc-01',
          name: '2P+E SOCKET',
          subtitle: 'ساکت دو پین با ارت',
          description: '2P+E 16A Grounded Wall Socket with ultra-thin luxury styling. Equipped with internal child-safe protection shutters, heat resistance, and easy installation on standard 86mm boxes.',
          features: [
            '16 A 250 V~ High-Power Rating',
            'Ultra Thin (بسیار نازک)',
            'Luxury Design (طراحی لوکس)',
            '2P+E Grounded Pin Configuration',
            'Safe & Eco-Friendly (امن و سازگار با محیط زیست)',
            'Easy Installation (نصب آسان)',
            'Heat Resistant (مقاوم در برابر حرارت)'
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
      eyebrow: 'کیفیت امروز روشنایی فردا',
      title1: 'سویچ و ساکت‌های با کیفیت ممتاز —',
      title2Prefix: 'طراحی مدرن، ',
      title2Highlight: 'خانه‌های امن‌تر، روشنایی زندگی‌ها',
      subtitle: 'طراحی مدرن | خانه‌های امن‌تر | روشنایی زندگی‌ها. تجربه کلید و پریزهای بسیار نازک با کیفیت لوکس، مقاوم در برابر حرارت و با سطح ضد باکتری.',
      cta: 'مشاهده محصولات',
      quickViewHint: 'مشخصات سریع',
      stats: {
        iecValue: '۱۰A / ۱۶A',
        iecLabel: 'ولتاژ ۲۵۰ ولت',
        ip65Value: 'بسیار نازک',
        ip65Label: 'طراحی لوکس',
        warrantyValue: '۱۰ سال',
        warrantyLabel: 'ضمانت کیفیت',
        toolValue: 'ضد باکتری',
        toolLabel: 'مواد غیر حساسیت‌زا'
      }
    },
    anatomy: {
      badge: 'ارکان مهندسی و کیفیت',
      titlePart1: 'عناصر کلیدی',
      titlePart2: 'طراحی مدرن',
      subtitle: 'تقارن مدرن و مهندسی ایمن — بررسی ارکان و اصول کلیدی در ساخت کلید و پریزهای روشنا.',
      ratingText: 'کیفیت تضمین شده',
      materialLabel: 'متریال:',
      perspectivesTitle: 'ارکان اصلی طراحی:',
      guaranteeText: 'ساخته شده از مواد ضدحریق و اتصالات فلزی مستحکم برای ایمنی و ماندگاری طولانی‌مدت.',
      quadrants: [
        {
          id: 'quad-1',
          title: 'شاسی فولادی مستحکم',
          subtitle: 'دوام و استحکام',
          category: 'دوام و استحکام',
          material: 'ورق فولادی نورد سرد',
          description: 'فریم فولادی مقاوم که تراز کامل، بدون انحراف و با ثبات را بر روی قوطی‌های استاندارد ۸۶ میلی‌متری تضمین می‌کند.',
          tag: 'دوام و استحکام'
        },
        {
          id: 'quad-2',
          title: 'سطح مات ضدحساسیت',
          subtitle: 'بهداشت و راحتی',
          category: 'بهداشت و راحتی',
          material: 'پلیمر سازگار با پوست',
          description: 'متریال سطحی باکیفیت و سازگار با پوست، برای کاهش تحریک پوستی و به حداقل رساندن تجمع میکروارگانیسم‌ها.',
          tag: 'بهداشت و راحتی'
        },
        {
          id: 'quad-3',
          title: 'مکانیزم کلیدزنی نرم و ارگونومیک',
          subtitle: 'عملکرد و دقت',
          category: 'عملکرد و دقت',
          material: 'فنرهای دقیق کالیبره شده',
          description: 'عملکرد نرم، دقیق و آرام طراحی‌شده برای استفاده مکرر و لمس روزمره با بالاترین دوام.',
          tag: 'عملکرد و دقت'
        },
        {
          id: 'quad-4',
          title: 'حفاظت و ایمنی کودک',
          subtitle: 'ایمنی کامل',
          category: 'ایمنی کامل',
          material: 'پلیمر نسوز و برنج فنری',
          description: 'ساخته‌شده از پلیمرهای نسوز و مکانیزم داخلی ایمن برای محافظت و آرامش خاطر خانواده.',
          tag: 'ایمنی کامل'
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
          name: 'سویچ تک خانه تک مسیر ۱۰ آمپر (1G 1W)',
          subtitle: '10A 250V~ · بسیار نازک · طراحی لوکس',
          description: 'سویچ تک خانه تک مسیر ۱۰ آمپر با طراحی لوکس و بسیار نازک (Ultra Thin). دارای سطح مات ضد باکتری و ضد حساسیت، مقاوم در برابر حرارت و ساخته شده از پلیمر با کیفیت ممتاز.',
          features: [
            '۱۰ آمپر ۲۵۰ ولت (10A 250V~)',
            'بسیار نازک (Ultra Thin)',
            'طراحی لوکس (Luxury Design)',
            'سطح ضد باکتری (Antibacterial Surface)',
            'مواد غیر حساسیت‌زا (Non-Allergenic)',
            'مقاوم در برابر حرارت (Heat Resistant)',
            'عمر طولانی و دوام بالا'
          ]
        },
        {
          id: 'roshna-sw-02',
          name: 'سویچ دو خانه تک مسیر ۱۰ آمپر (2G 1W)',
          subtitle: '10A 250V~ · بسیار نازک · طراحی لوکس',
          description: 'سویچ دو خانه تک مسیر ۱۰ آمپر با طراحی لوکس و بسیار نازک (Ultra Thin). دارای مکانیزم دوپل نرم و دقیق، پلیمر با کیفیت ممتاز و عمر طولانی و دوام بالا.',
          features: [
            '۱۰ آمپر ۲۵۰ ولت (10A 250V~)',
            'بسیار نازک (Ultra Thin)',
            'طراحی لوکس (Luxury Design)',
            'کنترل دوگانه تک مسیر',
            'پلیمر با کیفیت ممتاز (Premium Polymer)',
            'مقاوم در برابر حرارت (Heat Resistant)',
            'عمر طولانی و دوام بالا'
          ]
        },
        {
          id: 'roshna-soc-01',
          name: 'ساکت دو پین با ارت (2P+E SOCKET)',
          subtitle: '16A 250V~ · بسیار نازک · طراحی لوکس',
          description: 'ساکت دو پین با ارت ۱۶ آمپر ۲۵۰ ولت با طراحی لوکس و بسیار نازک (Ultra Thin). امن و سازگار با محیط زیست، دارای محافظ داخلی کودک و نصب آسان بر روی قوطی‌های استاندارد.',
          features: [
            '۱۶ آمپر ۲۵۰ ولت (16A 250V~)',
            'بسیار نازک (Ultra Thin)',
            'طراحی لوکس (Luxury Design)',
            'اتصال دو پین با ارت (2P+E)',
            'امن و سازگار با محیط زیست (Eco-Friendly)',
            'نصب آسان (Easy Installation)',
            'مقاوم در برابر حرارت (Heat Resistant)'
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
