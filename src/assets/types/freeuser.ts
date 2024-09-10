export interface FreeUserText {
  HeroSection: HeroSection;
  tableSection: TableSection;
  FeatureSection: FeatureSection;
  InxtFeaturesSection: InxtFeaturesSection;
  CtaSection: CtaSection;
  WhatWeDoSection: WhatWeDoSection;
  FaqSection: FAQSection;
}

export interface CtaSection {
  title: string;
  description: string;
  cta: string;
}

export interface FAQSection {
  title: string;
  faq: FAQ[];
}

export interface FAQ {
  question: string;
  answer: string[];
}

export interface FeatureSection {
  title: string;
  description: string[];
  cta: string;
}

export interface HeroSection {
  title: Title;
  description: string;
  cta: string;
  recommendedBy: string;
}

export interface Title {
  blue: string;
  normal: string;
}

export interface InxtFeaturesSection {
  title: string;
  description: string;
  cards: CardElement[];
}

export interface CardElement {
  title: string;
  description: string;
}

export interface WhatWeDoSection {
  title: string;
  description: string;
  card: WhatWeDoSectionCard;
}

export interface WhatWeDoSectionCard {
  features: string[];
  cta: string;
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
}

export interface FreePlanCard {
  getStarted: string;
  enjoy10gb: string;
  upTo: string;
  freeForever: string;
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
