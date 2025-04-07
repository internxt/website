export interface BraveText {
  HeroSection: HeroSection;
  MostSecureSection: CtaSection2;
  ScrollableSection: ScrollableSection;
  PriceTable: PriceTable;
  FeatureSection: CtaSection2;
  CtaSection: CtaSection;
  CtaSection2: CtaSection2;
  tableSection: TableSection;
  FaqSection: FAQSection;
}

export interface CtaSection {
  title: string;
}

export interface CtaSection2 {
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

export interface HeroSection {
  title: string;
  subtitle: string;
  description: string;
  info: string;
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
  premiumSupport: string;
  guarantee: string;
}

export interface PriceCard {
  mostPopular: string;
  billedAnnually: string;
  cta: string;
  features: { [key: string]: string[] };
}

export interface ScrollableSection {
  title: string;
  description: string;
  elements: Element[];
}

export interface Element {
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
