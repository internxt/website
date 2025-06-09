export interface AffiliatesPartnersText {
  recommendedBy: string;
  HeroSectionV2: HeroSectionV2;
  HeroSection: HeroSection;
  FeaturesSectionForOnePlan: FeaturesSectionForOnePlan;
  WhyChooseInternxtForOneplan: FeatureSection;
  WhatWeDoForOneplan: WhatWeDoForOneplan;
  SecondFeaturesSection: SecondFeaturesSection;
  DevicesSection: DevicesSection;
  CtaSection: CtaSection;
  PriceTable: PriceTable;
  tableSection: TableSection;
  FeatureSection: FeatureSection;
  FeatureSectionV2: FeatureSectionV2;
}

export interface CtaSection {
  all: FeatureSectionV2;
  one: FeatureSectionV2;
  two: FeatureSectionV2;
}

export interface FeatureSectionV2 {
  title: string;
  description: string;
  cta: string;
}

export interface DevicesSection {
  title: string;
  cta: string;
}

export interface FeatureSection {
  title: string;
  description: string;
  cards: CardElement[];
}

export interface CardElement {
  title: string;
  description: string;
}

export interface FeaturesSectionForOnePlan {
  title: string;
  description: string[];
  cta: string;
}

export interface HeroSection {
  exclusiveLabel: ExclusiveLabel;
  all: All;
  one: One;
}

export interface All {
  title: string;
  description: string[];
  choosePlanLabel: string;
}

export interface ExclusiveLabel {
  pcmag: string;
  cloudwards: string;
}

export interface One {
  title: string;
  description: string[];
}

export interface HeroSectionV2 {
  title: string;
  subtitle: string;
  info: string;
  infoHighlight: string;
  cta: string;
}

export interface PriceTable {
  header: string;
  features: Features;
  title: string;
  subtitle: string;
  priceCard: PriceCard;
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
  commingSoon: string;
  discount: string;
  billedAnnually: string;
  cta: string;
  stPatricksFeatures: StPatricksFeatures;
  worldCloudSecurityDay: StPatricksFeatures;
  IdentityManagementDay: IdentityManagementDay;
  features: { [key: string]: string[] };
}

export interface IdentityManagementDay {
  title: string;
  gift1: string;
  gift2: string;
}

export interface StPatricksFeatures {
  title: string;
  gift: string;
}

export interface SecondFeaturesSection {
  title: string;
  description: string;
  info: CardElement[];
}

export interface WhatWeDoForOneplan {
  title: string;
  description: string;
  card: WhatWeDoForOneplanCard;
}

export interface WhatWeDoForOneplanCard {
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
