export interface FamilyText {
  HeroSection: Section;
  ProtectYourFamilySection: ProtectYourFamilySection;
  PriceTable: PriceTable;
  WhatMakesInternxtPerfectSection: WhatMakesInternxtPerfectSection;
  CtaSection: Section;
  WhyChooseInternxt: WhyChooseInternxt;
  MaximumSecuritySection: Section;
  TestimonialsSection: TestimonialsSection;
  FaqSection: FAQSection;
}

export interface Section {
  title: string;
  description: string;
  cta: string;
  subtitle?: string;
}

export interface FAQSection {
  title: string;
  faq: FAQ[];
}

export interface FAQ {
  question: string;
  answer: string[];
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

export interface ProtectYourFamilySection {
  title: string;
  description: string;
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

export interface WhatMakesInternxtPerfectSection {
  title: string;
  description: string;
  features: ProtectYourFamilySection[];
}

export interface WhyChooseInternxt {
  title: string;
  description: string;
  cards: ProtectYourFamilySection[];
}
