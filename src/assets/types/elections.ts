export interface ElectionsText {
  elections: Elections;
}

export interface Elections {
  CtaSection: CtaSection;
  FeatureSection: FeatureSection;
  TestimonialsSection: TestimonialsSection;
  GetLifetimeSection: GetLifetimeSection;
  HeroSection: HeroSection;
  PaymentSection: PaymentSection;
}

export interface CtaSection {
  title: string;
  description: string;
  cta: string;
}

export interface FeatureSection {
  title: string;
  description: string;
  cta: string;
  feature1: GetLifetimeSection;
  feature2: GetLifetimeSection;
  feature3: GetLifetimeSection;
  feature4: GetLifetimeSection;
}

export interface GetLifetimeSection {
  title: string;
  description: string;
}

export interface HeroSection {
  title: string;
  description: string;
  maintenance: string;
  cta1: string;
  cta2: string;
}

export interface PaymentSection {
  limitedOffer: string;
  title: Title;
  description: Description;
  normalSection: GetLifetimeSection;
  securePayment: string;
  features: Features;
  PlanSelector: PlanSelector;
}

export interface PlanSelector {
  Trump: string;
  Kamala: string;
}

export interface Description {
  blueText: string;
  normalText: string;
  normalText2: string;
}

export interface Features {
  endToEnd: string;
  openSource: string;
  anonymousAccount: string;
}

export interface Title {
  blueText: string;
  normalText: string;
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
