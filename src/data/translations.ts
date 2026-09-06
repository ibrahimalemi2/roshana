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
      switchLang: 'دری',
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
          subtitle: 'سویچ تک تکمه (یک‌گنگ) ۱۰ آمپر',
          description: '1G 1W 10A Switch with ultra-thin luxury design. Features an antibacterial and non-allergenic matte surface, heat-resistant engineering, and durable premium polymer construction.',
          features: [
            '10 A 250 V~ Electrical Rating',
            'Ultra Thin (بسیار باریک)',
            'Luxury Design (دیزاین لوکس)',
            'Antibacterial Surface (سطح ضد باکتری)',
            'Non-Allergenic Material (ضد حساسیت جلدی)',
            'Heat Resistant (مقاوم در برابر حرارت)',
            'Long Life Durability (طول عمر و دوام بلند)'
          ]
        },
        {
          id: 'roshna-sw-02',
          name: '2G 1W 10A SWITCH',
          subtitle: 'سویچ دو تکمه (دوگنگ) ۱۰ آمپر',
          description: '2G 1W 10A Switch with independent dual-gang rocker control in an ultra-thin frame. Built for smooth daily touch, thermal resistance, and long-lasting durability.',
          features: [
            '10 A 250 V~ Electrical Rating',
            'Ultra Thin (بسیار باریک)',
            'Luxury Design (دیزاین لوکس)',
            'Dual Gang 1-Way Switching',
            'Premium Polymer Material (پلیمر با کیفیت ممتاز)',
            'Heat Resistant (مقاوم در برابر حرارت)',
            'Long Life Durability (طول عمر و دوام بلند)'
          ]
        },
        {
          id: 'roshna-soc-01',
          name: '2P+E SOCKET',
          subtitle: 'ساکت دو پین با ارت',
          description: '2P+E 16A Grounded Wall Socket with ultra-thin luxury styling. Equipped with internal child-safe protection shutters, heat resistance, and easy installation on standard 86mm boxes.',
          features: [
            '16 A 250 V~ High-Power Rating',
            'Ultra Thin (بسیار باریک)',
            'Luxury Design (دیزاین لوکس)',
            '2P+E Grounded Pin Configuration',
            'Safe & Eco-Friendly (مصئون و سازگار با محیط زیست)',
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
      materials: 'مواد ساخت',
      reviews: 'نظریات',
      faq: 'سوالات متداول',
      search: 'جستجوی سویچ و ساکت',
      bag: 'سبد فرمایشات',
      whatsapp: 'واتس‌اپ',
      switchLang: 'English',
      lightMode: 'روشن',
      darkMode: 'سرمه‌ای تیره',
      intro: 'معرفی'
    },
    hero: {
      eyebrow: 'کیفیت امروز روشنایی فردا',
      title1: 'سویچ و ساکت‌های با کیفیت ممتاز —',
      title2Prefix: 'دیزاین عصری، ',
      title2Highlight: 'خانه‌های مصئون‌تر، زندگی‌های روشن‌تر',
      subtitle: 'دیزاین عصری | خانه‌های مصئون‌تر | زندگی‌های روشن‌تر. تجربه سویچ و ساکت‌های بسیار باریک با کیفیت لوکس، مقاوم در برابر حرارت و با سطح ضد باکتری.',
      cta: 'دیدن محصولات',
      quickViewHint: 'مشخصات سریع',
      stats: {
        iecValue: '۱۰A / ۱۶A',
        iecLabel: 'ولتاژ ۲۵۰ ولت',
        ip65Value: 'بسیار باریک',
        ip65Label: 'دیزاین لوکس',
        warrantyValue: '۱۰ سال',
        warrantyLabel: 'تضمین کیفیت',
        toolValue: 'ضد باکتری',
        toolLabel: 'ضد حساسیت جلدی'
      }
    },
    anatomy: {
      badge: 'ارکان انجنیری و کیفیت',
      titlePart1: 'عناصر کلیدی',
      titlePart2: 'دیزاین عصری',
      subtitle: 'تقارن عصری و ساختار مصئون — بررسی ارکان و اصول عمده در ساخت سویچ و ساکت‌های روشنا.',
      ratingText: 'کیفیت تضمین شده',
      materialLabel: 'مواد ساخت:',
      perspectivesTitle: 'ارکان اصلی دیزاین:',
      guaranteeText: 'ساخته شده از مواد ضدحریق و اتصالات فلزی مستحکم برای مصئونیت و ماندگاری طولانی‌مدت.',
      quadrants: [
        {
          id: 'quad-1',
          title: 'شاسی فولادی مستحکم',
          subtitle: 'دوام و استحکام',
          category: 'دوام و استحکام',
          material: 'ورق فولادی نورد سرد',
          description: 'فریم فولادی مقاوم که تراز کامل، بدون انحراف و با ثبات را بر روی قوطی‌های معیاری ۸۶ میلی‌متری تضمین می‌کند.',
          tag: 'دوام و استحکام'
        },
        {
          id: 'quad-2',
          title: 'سطح مات ضدحساسیت',
          subtitle: 'بهداشت و راحتی',
          category: 'بهداشت و راحتی',
          material: 'پلیمر سازگار با جلد',
          description: 'مواد سطحی باکیفیت و سازگار با جلد، برای کاهش حساسیت جلدی و به حداقل رساندن تجمع باکتری‌ها و مکروب‌ها.',
          tag: 'بهداشت و راحتی'
        },
        {
          id: 'quad-3',
          title: 'مکانیزم سویچ‌کاری نرم و دقیق',
          subtitle: 'عملکرد و دقت',
          category: 'عملکرد و دقت',
          material: 'فنرهای دقیق کالیبره شده',
          description: 'عملکرد نرم، دقیق و آرام دیزاین‌شده برای استفاده دوامدار و لمس روزمره با بالاترین دوام.',
          tag: 'عملکرد و دقت'
        },
        {
          id: 'quad-4',
          title: 'حفاظت و مصئونیت اطفال',
          subtitle: 'مصئونیت کامل',
          category: 'مصئونیت کامل',
          material: 'پلیمر نسوز و برنج فنری',
          description: 'ساخته‌شده از پلیمرهای نسوز و مکانیزم داخلی مصئون برای محافظت و آرامش خاطر خانواده.',
          tag: 'مصئونیت کامل'
        }
      ]
    },
    showcase: {
      badge: 'محصولات ما',
      titlePart1: 'مجموعه اصلی',
      titlePart2: 'سویچ‌ها و ساکت‌های عصری',
      categories: {
        all: 'تمام محصولات',
        switches: 'سویچ‌ها',
        sockets: 'ساکت‌های برق',
        modular: 'پرزه‌جات و ملحقات'
      },
      addToBag: 'افزودن به سبد',
      addedToBag: 'به سبد افزوده شد',
      quickSpecs: 'مشخصات تخنیکی',
      consultationTitle: 'نیاز به فرمایش عمده یا مشوره پروژه دارید؟',
      consultationDesc: 'تیم روشنا آماده ارائه مشوره مستقیم، بررسی تعداد و مناسب‌ترین نرخ برای پروژه‌های رهایشی و تجارتی شماست.',
      consultationButton: 'مشوره در واتس‌اپ',
      products: [
        {
          id: 'roshna-sw-01',
          name: 'سویچ تک تکمه یک‌مسیره ۱۰ آمپر (1G 1W)',
          subtitle: '10A 250V~ · بسیار باریک · دیزاین لوکس',
          description: 'سویچ تک تکمه یک‌مسیره ۱۰ آمپر با دیزاین لوکس و بسیار باریک (Ultra Thin). دارای رویه مات ضد باکتری و ضد حساسیت جلدی، مقاوم در برابر حرارت و ساخته شده از پلیمر با کیفیت ممتاز.',
          features: [
            '۱۰ آمپر ۲۵۰ ولت (10A 250V~)',
            'بسیار باریک (Ultra Thin)',
            'دیزاین لوکس (Luxury Design)',
            'سطح ضد باکتری (Antibacterial Surface)',
            'مواد ضد حساسیت جلدی (Non-Allergenic)',
            'مقاوم در برابر حرارت (Heat Resistant)',
            'عمر طولانی و دوام بالا'
          ]
        },
        {
          id: 'roshna-sw-02',
          name: 'سویچ دو تکمه یک‌مسیره ۱۰ آمپر (2G 1W)',
          subtitle: '10A 250V~ · بسیار باریک · دیزاین لوکس',
          description: 'سویچ دو تکمه یک‌مسیره ۱۰ آمپر با دیزاین لوکس و بسیار باریک (Ultra Thin). دارای مکانیزم دوپله نرم و دقیق، پلیمر با کیفیت ممتاز و عمر طولانی و دوام بالا.',
          features: [
            '۱۰ آمپر ۲۵۰ ولت (10A 250V~)',
            'بسیار باریک (Ultra Thin)',
            'دیزاین لوکس (Luxury Design)',
            'کنترل دوگانه تک‌مسیره',
            'پلیمر با کیفیت ممتاز (Premium Polymer)',
            'مقاوم در برابر حرارت (Heat Resistant)',
            'عمر طولانی و دوام بالا'
          ]
        },
        {
          id: 'roshna-soc-01',
          name: 'ساکت دو پین ارت‌دار (2P+E SOCKET)',
          subtitle: '16A 250V~ · بسیار باریک · دیزاین لوکس',
          description: 'ساکت دو پین ارت‌دار ۱۶ آمپر ۲۵۰ ولت با دیزاین لوکس و بسیار باریک (Ultra Thin). مصئون و سازگار با محیط زیست، دارای محافظ داخلی اطفال و نصب آسان بر روی قوطی‌های معیاری.',
          features: [
            '۱۶ آمپر ۲۵۰ ولت (16A 250V~)',
            'بسیار باریک (Ultra Thin)',
            'دیزاین لوکس (Luxury Design)',
            'اتصال دو پین ارت‌دار (2P+E)',
            'مصئون و سازگار با محیط زیست (Eco-Friendly)',
            'نصب آسان (Easy Installation)',
            'مقاوم در برابر حرارت (Heat Resistant)'
          ]
        }
      ]
    },
    principles: {
      badge: 'اصول و معیارهای ما',
      titlePart1: 'ساخته شده برای مصئونیت،',
      titlePart2: 'ماندگار برای استفاده دوامدار',
      subtitle: 'تمرکز ما بر نیازمندی‌های واقعی زندگی روزمره است: مصئونیت در برابر آتش، عملکرد نرم و بی‌صدا، سطوح ضدحساسیت و نصب آسان.',
      detailedCommitment: 'تعهد به کیفیت عالی',
      pillarLabel: 'اصل شماره',
      labCertified: 'معیار مصئونیت تایید شده',
      directProvenance: 'تضمین مستقیم اصالت جنس',
      pillars: [
        {
          id: 'pillar-1',
          number: '۰۱',
          title: 'شاسی فلزی مستحکم',
          shortDesc: 'فریم فولادی مقاوم برای نصب محکم و بدون خمیدگی روی دیوار.',
          fullDesc: 'پایه فلزی مستحکم تضمین می‌نماید که سویچ با فشار دوامدار دست در طول سال‌ها سست نشده و همیشه کاملاً هموار روی دیوار باقی می‌ماند.',
          iconName: 'Gem',
          highlight: 'شاسی فولادی مقاوم'
        },
        {
          id: 'pillar-2',
          number: '۰۲',
          title: 'پلیمر مات ضدحریق و ضدحساسیت',
          shortDesc: 'پلی‌کربنات نسوز V-0 با بافت مات نرم و ضدحساسیت جلدی.',
          fullDesc: 'مقاوم در برابر حرارت و خودخاموش‌شونده. بافت مات آن اثر انگشت را جذب نکرده و به دلیل بهداشتی بودن، مانع رشد باکتری و مکروب می‌شود.',
          iconName: 'Leaf',
          highlight: 'مصئون، ضدحریق و ضدحساسیت'
        },
        {
          id: 'pillar-3',
          number: '۰۳',
          title: 'عملکرد نرم و بی‌صدا',
          shortDesc: 'فنرها و مکانیزم دقیق که صدای تک‌تک نرم، دلنشین و روانی ایجاد می‌کنند.',
          fullDesc: 'مکانیزم داخلی برای بیشتر از ۵۰,۰۰۰ مرتبه استفاده تست گردیده تا با هر بار فشردن، حس اطمینان و کیفیت عالی را انتقال دهد.',
          iconName: 'Sparkles',
          highlight: '+۵۰,۰۰۰ بار استفاده تست شده'
        },
        {
          id: 'pillar-4',
          number: '۰۴',
          title: 'مصئونیت برقی و تضمین کیفیت',
          shortDesc: 'ترمینال‌های برنجی با محافظ خودکار برای آرامش خاطر کامل.',
          fullDesc: 'ساکت‌ها مجهز به شاتر محافظتی اطفال بوده و اتصالات برنجی با هدایت برقی بالا از داغ شدن لین‌ها در زیر بار دوامدار جلوگیری می‌کنند.',
          iconName: 'ShieldCheck',
          highlight: '۱۰ سال تضمین کیفیت'
        }
      ]
    },
    materials: {
      badge: 'اصالت و کیفیت مواد ساخت',
      titlePart1: 'مواد اولیه باکیفیت و',
      titlePart2: 'سطوح بهداشتی',
      subtitle: 'تمام اجزای این محصولات برای مصئونیت در برابر آتش، لمس راحت جلد و طول عمر میخانیکی بالا انتخاب گردیده‌اند.',
      inspectTexture: 'بررسی ویژگی',
      selectedStudy: 'معرفی بخش منتخب',
      items: [
        {
          id: 'mat-1',
          name: 'رویه مات ضدحریق و ضدحساسیت',
          origin: 'پلیمر مرغوب',
          category: 'سطح بهداشتی',
          description: 'پلی‌کربنات نسوز خودخاموش‌شونده با بافت مات مخملی که حساسیت جلدی ایجاد نکرده و مانع ماندگاری کثافات و اثر انگشت می‌شود.',
          characteristics: ['مصئونیت ضدحریق V-0', 'بافت مات بدون انعکاس نور', 'ضد حساسیت جلدی و بهداشتی']
        },
        {
          id: 'mat-2',
          name: 'شاسی فولادی مقاوم',
          origin: 'فلز گالوانیزه',
          category: 'پایه ساختاری',
          description: 'فریم فلزی مستحکم با شیارهای معیاری پیچ، جهت نصب کاملاً هموار و مطمئن بر روی قوطی‌های توکار ۸۶ میلی‌متری.',
          characteristics: ['عدم خمیدگی زیر فشار پیچ', 'امکان تراز دقیق', 'پوشش مقاوم در برابر زنگ‌زدگی']
        },
        {
          id: 'mat-3',
          name: 'گیره‌های برنجی با هدایت برقی بالا',
          origin: 'آلیاژ برنج فنری',
          category: 'وصلت برقی',
          description: 'ترمینال‌های برنجی فنری که تماس محکم به دوشاخه و لین‌های برق تعمیر را در طول سال‌ها حفظ می‌کنند.',
          characteristics: ['هدایت برقی بالای ۹۹٪', 'حفظ خاصیت فنری', 'عدم داغ شدن تحت بار دوامدار']
        },
        {
          id: 'mat-4',
          name: 'پلاتین‌های ضدجرقه و بادوام',
          origin: 'آلیاژ نقره',
          category: 'مکانیزم سویچ',
          description: 'کنتاکت‌های برقی مقاوم که از ایجاد جرقه و ساییدگی جلوگیری کرده و قطع و وصل مصئون گروپ‌های LED را تضمین می‌نمایند.',
          characteristics: ['جلوگیری از جرقه و ساییدگی', 'تست شده برای ۵۰ هزار مرتبه سویچ‌کاری', 'بهینه‌شده برای انواع بار برقی']
        }
      ]
    },
    reviews: {
      badge: 'نظریات خریداران و مستری‌های برق',
      titlePart1: 'مورد اعتماد مستری‌های برق و',
      titlePart2: 'مشتریان محترم',
      subtitle: 'نظریات واقعی برق‌کاران، قراردادی‌های ساختمانی و خانواده‌هایی که از سویچ و ساکت‌های روشنا ولت استفاده می‌نمایند.',
      testimonials: [
        {
          id: 'test-1',
          name: 'احمد رشاد',
          role: 'استادکار تاسیسات برقی',
          location: 'کابل، افغانستان',
          quote: 'نصب این سویچ‌ها واقعاً راحت و پاکیزه است. فریم فلزی پشتی روی قوطی‌های معیاری ۸۶ میلی‌متری بدون هیچ خمیدگی محکم می‌شود و ترمینال‌های لین به خوبی سفت می‌گردند.',
          purchasedProduct: 'سویچ‌های یک‌گنگ و دوگنگ',
          date: 'مستری مجرب برق'
        },
        {
          id: 'test-2',
          name: 'مریم سادات',
          role: 'مشتری خانگی',
          location: 'هرات، افغانستان',
          quote: 'رویه مات این سویچ‌ها در لمس بسیار نرم و ملایم است، اثر دست روی آن باقی نمی‌ماند و نمای خانه را نسبت به سویچ‌های براق سابقه بسیار شیک‌تر و منظم‌تر ساخته است.',
          purchasedProduct: 'ساکت‌های برق عصری',
          date: 'مشتری خانگی'
        },
        {
          id: 'test-3',
          name: 'فرهاد نوابی',
          role: 'مسئول پروژه ساختمانی',
          location: 'مزارشریف، افغانستان',
          quote: 'برای یک تعمیر تجارتی بیشتر از ۲۰۰ عدد از طریق واتس‌اپ فرمایش دادیم. انتقال سریع بود، قیمت‌ها مناسب و کیفیت جنسیت فوق‌العاده قناعت‌بخش است.',
          purchasedProduct: 'فرمایش کلی پروژه',
          date: 'قراردادی ساختمانی'
        }
      ],
      metrics: {
        projectsTitle: '۹۹٪',
        projectsLabel: 'رضایت خریداران',
        projectsDetail: 'مورد تایید استادکاران و مشتریان خانگی',
        warrantyTitle: '۱۰ سال',
        warrantyLabel: 'تضمین کیفیت',
        warrantyDetail: 'تضمین تعویض مستقیم مکانیزم داخلی',
        ratingTitle: '+۵۰K',
        ratingLabel: 'مرتبه کارکرد تست شده',
        ratingDetail: 'عملکرد نرم، دقیق و بادوام',
        craftTitle: '۸۶mm',
        craftLabel: 'اندازه معیاری قوطی',
        craftDetail: 'سازگار با انواع قوطی‌های برقی معیاری'
      }
    },
    faq: {
      badge: 'سوالات متداول',
      titlePart1: 'پرسش‌های متداول و',
      titlePart2: 'رهنمای خرید',
      subtitle: 'پاسخ به سوالات مهم در باره اندازه قوطی توکار، طریقه نصب، فرمایش عمده و انتقال مستقیم در سراسر افغانستان.',
      contactBadge: 'رهنمایی مستقیم',
      contactTitle: 'مشوره برای فرمایشات عمده و پروژه‌ها',
      contactDesc: 'به رهنمایی در باره اندازه قوطی‌ها، تعداد یا نرخ عمده برای پروژه‌تان ضرورت دارید؟ در واتس‌اپ با ما در تماس شوید.',
      contactWhatsapp: 'تماس در واتس‌اپ',
      contactEmail: 'ارسال ایمیل',
      items: [
        {
          question: 'آیا این سویچ و ساکت‌ها با قوطی‌های معیاری موجود در بازار سازگار اند؟',
          answer: 'بلی، تمامی سویچ‌ها و ساکت‌های روشنا بر اساس معیار بین‌المللی سایز ۸۶ میلی‌متر ساخته شده‌اند و با انواع قوطی‌های توکار مروجه بازار کاملاً سازگار بوده و به آسانی توسط هر مستری برقی نصب می‌گردند.',
          category: 'نصب و سازگاری'
        },
        {
          question: 'طریقه ثبت فرمایش و پرداخت پول در افغانستان چگونه است؟',
          answer: 'شما می‌توانید با فشار دادن تکمه "ثبت فرمایش در واتس‌اپ"، لست محصولات مورد نظرتان را مستقیماً بفرستید. هماهنگی پرداخت به صورت نقدی هنگام تحویل یا از طریق حواله صرافی صورت گرفته و ارسال جنسیت به کابل و تمامی ولایات به سرعت انجام می‌شود.',
          category: 'فرمایش و پرداخت'
        },
        {
          question: 'آیا برای پروژه‌ها و فرمایشات عمده تخفیف در نظر گرفته شده است؟',
          answer: 'بلی، برای قراردادی‌ها، مهندسان و شرکت‌های ساختمانی، نرخ‌های ویژه و تخفیف‌دار همکاری مد نظر است. جهت اخذ نرخ پروژه‌ای کافیست در واتس‌اپ پیام بگذارید.',
          category: 'فرمایش عمده'
        },
        {
          question: 'خاصیت سطح مات ضدحساسیت و بهداشتی چیست؟',
          answer: 'پوشش این اجناس از پلیمر مرغوب ساخته شده که در تماس مکرر دست باعث حساسیت جلدی نمی‌شود، اثر چربی و لکه را نمی‌گیرد و ضد باکتری بودن آن از تجمع مکروب روی سویچ جلوگیری می‌نماید.',
          category: 'مواد ساخت و بهداشت'
        },
        {
          question: 'شرایط تضمین و خدمات بعد از فروش چگونه است؟',
          answer: 'تمامی محصولات روشنا دارای ۱۰ سال تضمین کیفیت کارکرد مکانیزم داخلی و فریم فلزی می‌باشند تا با اطمینان کامل خرید نمایید.',
          category: 'تضمین و خدمات'
        }
      ]
    },
    footer: {
      tagline: 'روشنا ولت • سویچ و ساکت‌های عصری و مصئون',
      newsletterTitle: 'آگاهی از موجودی و',
      newsletterMonograph: 'خدمات اختصاصی به مشتریان',
      newsletterDesc: 'جهت اطلاع از محصولات جدید، نرخ‌های همکاری و تخفیف‌های ویژه، شماره واتس‌اپ یا ایمیل تان را درج نمایید.',
      newsletterPlaceholder: 'شماره واتس‌اپ یا ایمیل آدرس تان را بنویسید...',
      newsletterButton: 'ثبت',
      subscriptionConfirmed: 'معلومات شما ثبت گردید. به جمع مشترکین روشنا خوش آمدید.',
      brandDesc: 'روشنا ولت عرضه‌کننده سویچ و ساکت‌های عصری با دیزاین لوکس، مصئون، باکیفیت و سطوح مات ضدحساسیت برای پروژه‌های رهایشی و تجارتی.',
      copyright: 'تمامی حقوق محفوظ است. انتخاب کیفیت و مصئونیت برای فضاهای عصری.',
      standards: 'سازگار با انواع قوطی‌های برقی معیاری ۸۶ میلی‌متر',
      links: {
        collectionTitle: 'محصولات',
        specificationTitle: 'خدمات',
        atelierTitle: 'در باره روشنا',
        conciergeTitle: 'پشتیبانی و تماس',
        privacy: 'حفظ معلومات شخصی',
        terms: 'شرایط همکاری',
        certs: 'شرایط تضمین'
      }
    },
    cart: {
      title: 'سبد فرمایشات شما',
      emptyTitle: 'سبد فرمایشات شما در حال حاضر خالی است',
      emptySubtitle: 'سویچ‌ها و ساکت‌های عصری و مصئون روشنا را ملاحظه و انتخاب فرمایید.',
      exploreBtn: 'دیدن محصولات',
      freeShippingNotice: 'ارسال و انتقال رایگان برای این فرمایش فعال گردید',
      addMoreNoticePrefix: 'با افزودن ',
      addMoreNoticeSuffix: ' افغانی دیگر، ارسال رایگان خواهد شد',
      subtotal: 'مجموع اقلام',
      delivery: 'انتقال و تحویل در کابل و ولایات',
      complimentary: 'رایگان',
      totalDue: 'مبلغ مجموعی',
      whatsappOrderBtn: 'ثبت و هماهنگی فرمایش در واتس‌اپ',
      whatsappOrderSuccess: 'در حال وصل شدن به واتس‌اپ...',
      dealNotice: 'خرید و معامله مستقیم در واتس‌اپ (بدون نیاز به کارت یا حساب بانکی)',
      colorLabel: 'رنگ:'
    }
  }
};
