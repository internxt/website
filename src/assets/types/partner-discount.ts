export interface PartnerDiscountText {
  HeroSection: HeroSection;
  PaymentSection: PaymentSection;
  FeatureSection: CtaSection;
  TestimonialsSection: TestimonialsSection;
  CtaSection: CtaSection;
  CtaSection1: CtaSection;
}

export interface CtaSection {
  title: string;
  description: string;
  cta: string;
  cards?: CtaSectionCard[];
}

export interface CtaSectionCard {
  title: string;
  description: string;
}

export interface HeroSection {
  header: string;
  title: HeroSectionTitle;
  description: Description;
  cta: string;
}

export interface Description {
  normal: string;
  blue: string;
  normal1: string;
}

export interface HeroSectionTitle {
  normalText: string;
  blueText: string;
}

export interface PaymentSection {
  planTitles: PlanTitles;
  planDescription: string;
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
  homePage: string;
}

export interface TestimonialsSection {
  title: TestimonialsSectionTitle;
  cards: TestimonialsSectionCard[];
}

export interface TestimonialsSectionCard {
  name: string;
  enterprise: string;
  review: string;
}

export interface TestimonialsSectionTitle {
  normal: string;
  blue: string;
}
