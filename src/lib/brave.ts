export interface BraveText {
  HeroSection: HeroSection;
  PriceTable: PriceTable;
  FeatureSection: FeatureSection;
  SecureCloudSection: SecureCloudSection;
  CtaSection: CtaSection;
  CtaSection2: CtaSection;
  tableSection: TableSection;
  FaqSection: FAQSection;
}

export interface CtaSection {
  title: string;
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
  description: string;
  cta: string;
}

export interface HeroSection {
  title: string;
  subtitle: string;
  description: string;
  info: string;
  infoHighlight: string;
  cta: string;
}

export interface PriceTable {
  header: string;
  title: string;
  subtitle: string;
  billingFrequency: PriceTableBillingFrequency;
  priceCard: PriceCard;
  features: Features;
}

export interface PriceTableBillingFrequency {
  individual: string;
  lifetime: string;
}

export interface Features {
  endToEnd: string;
  openSource: string;
  anonymousAccount: string;
}

export interface PriceCard {
  mostPopular: string;
  billedAnnually: string;
  cta: string;
  features: { [key: string]: string[] };
}

export interface SecureCloudSection {
  title: string;
  description: string;
  cards: Card[];
}

export interface Card {
  title: string;
  description: string;
}

export interface TableSection {
  planTitles: PlanTitles;
  header: string;
  lifetimeDescription: string;
  planDescription: string;
  billingFrequency: TableSectionBillingFrequency;
  freePlanCard: FreePlanCard;
  features: Features;
}

export interface TableSectionBillingFrequency {
  monthly: string;
  annually: string;
  individual: string;
  lifetime: string;
  business: string;
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
