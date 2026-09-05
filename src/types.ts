export interface Product {
  id: string;
  name: string;
  subtitle?: string;
  category: string;
  collection: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  gallery: string[];
  dimensions: string;
  material: string;
  description: string;
  badge?: string;
  colorOptions: {
    name: string;
    hex: string;
    image?: string;
  }[];
  features: string[];
  inStock: boolean;
  modelCode?: string;
  ratedPower?: string;
  profile?: string;
  designStyle?: string;
}

export interface RoshnaFeature {
  id: string;
  titleEn: string;
  titleFa: string;
  iconName: 'ShieldPlus' | 'Leaf' | 'Flame' | 'Layers' | 'Cog' | 'Wrench' | 'HeartHandshake';
}

export interface HeroSlide {
  id: string;
  title: string;
  headline: string;
  category: string;
  tagline: string;
  price: number;
  image: string;
  material: string;
  origin: string;
  designer: string;
}

export interface QuadrantItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  material: string;
  description: string;
  tag: string;
}

export interface ValuePillar {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: 'Sparkles' | 'Leaf' | 'Gem' | 'Compass' | 'ShieldCheck';
  highlight: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  avatar: string;
  rating: number;
  quote: string;
  purchasedProduct: string;
  date: string;
}

export interface MetricStat {
  value: string;
  label: string;
  detail: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor: string;
}
