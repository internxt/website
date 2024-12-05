export interface BlackFridayText {
  blackFriday: BlackFridayClass;
  cta: Cta;
  cta2: Cta;
}

export interface BlackFridayClass {
  HeroSection: HeroSection;
  BestStorage: BestStorage;
  SuiteSection: SuiteSection;
  FeatureSection: FeatureSection;
  PlatformSection: PlatformSection;
  TestimonialsSection: TestimonialsSection;
  faq: BlackFridayFAQ;
  FooterSection: FooterSection;
}

export interface BestStorage {
  title: string;
  subtitle: string;
}

export interface FeatureSection {
  title: string;
  subtitle: string;
  feature1: Feature;
  feature2: Feature;
  feature3: Feature;
  feature4: Feature;
}

export interface Feature {
  title: string;
  subtitle1: string;
}

export interface FooterSection {
  title: string;
  subtitle: string;
  subtitle1: string;
  only: string;
  priceNow: string;
  month: string;
}

export interface HeroSection {
  title: Title;
  description: string;
  guarantee: string;
  pricingTable: PricingTable;
  timer: Timer;
  features: string[];
}

export interface PricingTable {
  only: string;
  priceNow: string;
  month: string;
  priceBefore: string;
  footer: Footer;
}

export interface Footer {
  line1: string;
  line2: string;
  line3: string;
}

export interface Timer {
  timeTitle: string;
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

export interface Title {
  line1: string;
  line2: string;
}

export interface PlatformSection {
  title: string;
  subtitle: string;
  web: string;
  linux: string;
  windows: string;
  mac: string;
  android: string;
  iOS: string;
}

export interface SuiteSection {
  title: string;
  subtitle: string;
  drive: Drive;
  photos: Drive;
  send: Drive;
}

export interface Drive {
  title: string;
  subtitle: string;
  cta: string;
  image: string;
  alt: string;
}

export interface TestimonialsSection {
  title: string;
  cards: Card[];
}

export interface Card {
  name: string;
  enterprise: string;
  review: string;
}

export interface BlackFridayFAQ {
  title: string;
  faq: FAQElement[];
}

export interface FAQElement {
  question: string;
  answer: string[];
}

export interface Cta {
  title: string;
  subtitle: string;
  cta: string;
  guarantee: string;
}
