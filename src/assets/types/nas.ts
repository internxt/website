import type { FAQ, FAQSection, PlanStorage } from './common';
export type { FAQ, FAQSection, PlanStorage };
export interface NASPageText {
  HeroSection: HeroSection;
  WhatIsNASSection: WhatIsNASSection;
  InternxtNASIntegrations: InternxtNASIntegrations;
  ctaSection: CtaSection;
  horizontalScrollableSection: HorizontalScrollableSection;
  whatInternxtOffersSection: WhatInternxtOffersSection;
  howSetupSection: HowSetupSection;
  ctaSectionV2: CtaSection;
  FaqSection: FAQSection;
  Breadcrumbs: Breadcrumbs;
  tableSection: TableSection;
}

export interface Breadcrumbs {
  home: string;
  drive: string;
  nas: string;
  qnap: string;
  synology: string;
}

export interface HeroSection {
  label: string;
  title: string;
  subtitle: string;
  features: string[];
  cta: string;
}

export interface InternxtNASIntegrations {
  title: string;
  description: string;
  synologyBox: Box;
  QNAPBox: Box;
}

export interface Box {
  title: string;
  description: string;
  image: string;
}

export interface WhatIsNASSection {
  title: string;
  description: string[];
}

export interface CtaSection {
  title: string;
  description: string;
  cta: string;
}

export interface HorizontalScrollableSection {
  title: string;
  description: string;
  scrollableSection: ScrollableSection;
}

export interface ScrollableSection {
  titles: string[];
  descriptions: string[];
}

export interface HowSetupSection {
  title: string;
  description: string;
  cards: Cards;
}

export interface Cards {
  titles: string[];
  descriptions: string[];
  cta: string[];
}

export interface WhatInternxtOffersSection {
  title: string;
  description: string;
  cards: ScrollableSection;
}

export interface TableSection {
  title: string;
  hotLabel: string;
  planTitles: PlanTitles;
  lifetimeDescription: string;
  planDescription: string;
  businessDescription: string;
  businessDescription2: string;
  billingFrequency: BillingFrequency;
  freePlanCard: FreePlanCard;
  features: Features;
  planStorage: PlanStorage;
}

export interface FreePlanCard {
  eyeBrow: string;
  description: string;
  cta: string;
}

export interface PlanTitles {
  header: string;
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

export interface BillingFrequency {
  monthly: string;
  annually: string;
  lifetime: string;
  individual: string;
  business: string;
}

export interface Features {
  endToEnd: string;
  openSource: string;
  anonymousAccount: string;
  premiumSupport: string;
  guarantee: string;
}
