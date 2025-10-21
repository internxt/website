export interface BlackFridayText {
  HeroSection: HeroSection;
  DontMissSection: DontMissSection;
  TableSection: TableSection;
  WhyChooseSection: WhyChooseSection;
  CtaSection: CtaSection;
  HorizontalScrollableSection: HorizontalScrollableSection;
  CtaSectionV2: CtaSection;
  MoreDealsSection: MoreDealsSection;
  FaqSection: FAQSection;
}

export interface CtaSection {
  title: string;
  description: string;
  cta: string;
}

export interface DontMissSection {
  title: string;
  description: string[];
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
  products: Products;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  claimDeal: string;
}

export interface Products {
  drive: string;
  antivirus: string;
  cleaner: string;
  vpn: string;
  meet: string;
  mail: string;
}

export interface HorizontalScrollableSection {
  title: string;
  description: string;
  features: string[];
  scrollableSection: ScrollableSection;
}

export interface ScrollableSection {
  titles: string[];
  descriptions: string[];
}

export interface MoreDealsSection {
  title: string;
  description: string;
  cards: Cards;
}

export interface Cards {
  card1: CtaSection;
  card2: CtaSection;
}

export interface TableSection {
  title: string;
  hotLabel: string;
  planTitles: PlanTitles;
  billingFrequency: BillingFrequency;
  freePlanCard: FreePlanCard;
  features: Features;
  planStorage: PlanStorage;
}

export interface BillingFrequency {
  annually: string;
  lifetime: string;
}

export interface Features {
  openSource: string;
  premiumSupport: string;
  guarantee: string;
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

export interface WhyChooseSection {
  title: string;
  cards: ScrollableSection;
}
