export interface Resurrection {
  FaqSection: FAQSection;
  FirstFeaturesSection: Section;
  TestimonialsSection: TestimonialsSection;
  tableSection: TableSection;
  ChooseStorageSizeSection: Section;
  WhyComebackToInternxt: WhyComebackToInternxt;
  HeroSection: HeroSection;
  CtaSection: Section;
}

export interface Section {
  title: string;
  description: string;
  peaceOfMind?: string;
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

export interface HeroSection {
  title: string;
  subtitle: string;
  features: string[];
  cta1: string;
}

export interface TestimonialsSection {
  title: Title;
  cards: Card[];
}

export interface Card {
  name: string;
  enterprise: string;
  review: string;
}

export interface Title {
  normal: string;
  blue: string;
}

export interface WhyComebackToInternxt {
  title: string;
  description: string;
  features: Feature[];
}

export interface Feature {
  title: string;
  description: string;
}

export interface TableSection {
  planTitles: PlanTitles;
  lifetimeDescription: string;
  planDescription: string;
  businessDescription: string;
  businessDescription2: string;
  billingFrequency: BillingFrequency;
  freePlanCard: FreePlanCard;
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
  premiumSupport: string;
  guarantee: string;
}

export interface FreePlanCard {
  eyeBrow: string;
  description: string;
  cta: string;
}

export interface PlanTitles {
  individuals: string;
  homePage: string;
  lifetime: string;
  business: string;
  lifetimeCampaign: LifetimeCampaign;
}

export interface LifetimeCampaign {
  blueText: string;
  normalText: string;
}
