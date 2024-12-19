export interface AffiliatesText {
  HeroSection: HeroSection;
  FeatureSection: FeatureSection;
  WhatIsInternxtSection: WhatIsInternxtSection;
  WhyJoinSection: WhyJoinSection;
  WhatWeDoSection: WhatWeDoSection;
  CommissionStructureSection: CommissionStructureSection;
  DescribingPlansSection: DescribingPlansSection;
  Number1Section: Number1Section;
  FaqSection: FAQSection;
  CtaSection: CtaSection;
}

export interface CommissionStructureSection {
  title: string;
  startEarning: string;
  cards: Card[];
  cta: string;
}

export interface Card {
  OFF: string;
  plans: string;
}

export interface CtaSection {
  title: string;
  description: string;
  cta?: string;
}

export interface DescribingPlansSection {
  drive: Drive;
  s3: Drive;
  feat: Feat[];
}

export interface Drive {
  title: string;
  description: string[];
}

export interface Feat {
  title: string;
  description: string;
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
  cards: CtaSection[];
}

export interface HeroSection {
  label: string;
  title: Title;
  description: string;
  signUp: string;
  logIn: string;
}

export interface Title {
  normalText: string;
  blueText: string;
}

export interface Number1Section {
  title: {
    line1: string;
    blue: string;
    line2: string;
  };
}

export interface WhatIsInternxtSection {
  title: string;
  subtitle: string;
  description: string;
}

export interface WhatWeDoSection {
  title: string;
  description: string;
  cards: Feat[];
  recognized: string;
}

export interface WhyJoinSection {
  title: string;
  cards: Number1Section[];
  cta: string;
}
