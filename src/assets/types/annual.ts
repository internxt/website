export interface AnnualText {
  HeroSection: HeroSection;
  FeatureSection: CtaSection;
  CtaSection: CtaSection;
  CtaSection1: CtaSection;
  FeaturesSection: FeaturesSection;
  tableSection: TableSection;
}
export interface FeaturesSection {
  title: string;
  description: string;
  cards: Cards;
}
export interface Cards {
  openSource: EndToEnd;
  endToEnd: EndToEnd;
  zeroKnowledge: EndToEnd;
  gdpr: EndToEnd;
  noUnwantedAccess: EndToEnd;
  freeTools: EndToEnd;
}

export interface EndToEnd {
  title: string;
  description: string;
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
