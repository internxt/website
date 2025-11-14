export interface CloudDataCentersPageText {
  HeroSection: HeroSection;
  WhatIsDataCenterSection: WhatIsDataCenterSection;
  HorizontalScrllableSection: HorizontalScrllableSection;
  CtaSection: CtaSection;
  CompilanceAndCertificationsSection: CompilanceAndCertificationsSection;
  SecureCloudStorgaeSection: SecureCloudStorgaeSection;
  CtaSection2: CtaSection;
  FaqSection: FAQSection;
}

export interface CompilanceAndCertificationsSection {
  title: string;
  description: string;
  features: Cards;
  cards: Cards;
}

export interface Cards {
  titles: string[];
  description: string[];
}

export interface CtaSection {
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
  description: string;
  features: string[];
}

export interface HorizontalScrllableSection {
  title: string;
  description: string;
  cards: Cards;
}

export interface SecureCloudStorgaeSection {
  title: string;
  description: string;
  card: Card;
}

export interface Card {
  title: string;
  description: string[];
  cta: string;
}

export interface WhatIsDataCenterSection {
  title: string;
  description: string[];
}
