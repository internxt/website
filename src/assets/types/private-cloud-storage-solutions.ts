export interface PrivateCloudStorageSolutionsText {
  HeroSection: HeroSection;
  FeatureSection1: FeatureSection;
  FeatureSection2: FeatureSection;
  FeatureSection3: FeatureSection;
  FeatureSection4: FeatureSection;
  FeaturesSection: FeaturesSection;
  WhatWeDo: WhatWeDo;
  FaqSection: FAQSection;
  CtaSection: BetterTomorrowSection;
  WhySwitchSection: CtaSection;
}

export interface CtaSection {
  title: string;
  description: string;
  cta?: string;
  subtitle?: string;
  cards?: Array<string>;
}

export interface BetterTomorrowSection {
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
  description: string;
  cards: Cards;
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

export interface HeroSection {
  label: string;
  title: Title;
  description: string;
  cta: string;
  startFrom: StartFrom;
  TitleAndOnePlan: TitleAndOnePlan;
  TitleAndOnePlanV2: TitleAndOnePlanV2;
  guarantee: string;
}
export interface TitleAndOnePlanTitle {
  textBeforeBlueText: string;
  blueText: string;
  textAfterBlueText: string;
}
export interface TitleAndOnePlanV2 {
  saveLabel: string;
  title: string;
  cta: string;
  guarantee: string;
}
export interface TitleAndOnePlan {
  title: TitleAndOnePlanTitle;
  subtitle: string;
  description: string;
  features: string[];
  startFrom: StartFrom;
  claimDeal: string;
  guarantee: string;
}

export interface StartFrom {
  normal1: string;
  price: string;
  normal2: string;
}
export interface Title {
  line1: string;
  line2: string;
}

export interface HeroSectionTitle {
  normalText: string;
  blueText: string;
}

export interface WhatWeDo {
  title: SignatureClass;
  subtitle: string;
  square1: BetterTomorrowSection;
  square2: BetterTomorrowSection;
  square3: BetterTomorrowSection;
}

export interface SignatureClass {
  line1: string;
  line2: string;
}

export interface SubtitleClass {
  line1: string;
}

export interface Links {
  desk: string;
  web: string;
  mobile: string;
}
