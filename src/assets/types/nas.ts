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

interface Breadcrumbs {
  home: string;
  drive: string;
  nas: string;
  qnap: string;
  synology: string;
}

interface FAQSection {
  title: string;
  faq: FAQ[];
}

interface FAQ {
  question: string;
  answer: string[];
}

interface HeroSection {
  label: string;
  title: string;
  subtitle: string;
  features: string[];
  cta: string;
}

interface InternxtNASIntegrations {
  title: string;
  description: string;
  synologyBox: Box;
  QNAPBox: Box;
}

interface Box {
  title: string;
  description: string;
  image: string;
}

interface WhatIsNASSection {
  title: string;
  description: string[];
}

interface CtaSection {
  title: string;
  description: string;
  cta: string;
}

interface HorizontalScrollableSection {
  title: string;
  description: string;
  scrollableSection: ScrollableSection;
}

interface ScrollableSection {
  titles: string[];
  descriptions: string[];
}

interface HowSetupSection {
  title: string;
  description: string;
  cards: Cards;
}

interface Cards {
  titles: string[];
  descriptions: string[];
  cta: string[];
}

interface WhatInternxtOffersSection {
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

export interface PlanStorage {
  essential: string;
  premium: string;
  ultimate: string;
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
