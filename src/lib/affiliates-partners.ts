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
}

export interface PriceCard {
  mostPopular: string;
  billedAnnually: string;
  cta: string;
  features: { [key: string]: string[] };
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
