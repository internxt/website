export interface BusinessText {
  HeroSection: HeroSection;
  SecureYourCompany: SecureYourCompany;
  InternxtProtectsYourBusiness: InternxtProtectsYourBusiness;
  WhatCanWeDo: WhatCanWeDo;
  PriceTable: PriceTable;
  WhyChooseInternxt: SecureYourCompany;
  EncryptedCloudSolution: EncryptedCloudSolution;
  TestimonialsSection: TestimonialsSection;
  FaqSection: FAQSection;
}

export interface EncryptedCloudSolution {
  title: string;
  description: string;
}

export interface FAQSection {
  title: string;
  faq: FAQ[];
}

export interface FAQ {
  question: string;
  answer: string[];
}

export interface HeroSection {
  title: string;
  description: string[];
  cta: string;
}

export interface InternxtProtectsYourBusiness {
  title: string;
  description: string[];
}

export interface PriceTable {
  planTitles: PlanTitles;
  businessDescription2: string;
  billingFrequency: BillingFrequency;
  features: Features;
}

export interface BillingFrequency {
  monthly: string;
  annually: string;
  individual: string;
  lifetime: string;
  business: string;
}

export interface Features {
  endToEnd: string;
  openSource: string;
  anonymousAccount: string;
}

export interface PlanTitles {
  business: string;
}

export interface SecureYourCompany {
  title: string;
  description: string;
  cards: EncryptedCloudSolution[];
  footerText?: string;
  banner?: Banner;
}

export interface Banner {
  title: string;
  description: string;
  cta: string;
}

export interface TestimonialsSection {
  title: string;
  testimonials: Testimonial[];
}

export interface Testimonial {
  imageBrandName: string;

  brand: string;
  review: string;
}

export interface WhatCanWeDo {
  title: string;
  description: string;
  cards: Card[];
}

export interface Card {
  imagePathname: string;
  selectorTab: string;
  description: string;
}
