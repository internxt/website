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
  label: string;
  title: string;
  subtitle: string;
  features: string[];
  cta: string;
}

export interface InternxtNASIntegrations {
  title: string;
  description: string;
  synologyBox: Box;
  QNAPBox: Box;
}

export interface Box {
  title: string;
  description: string;
  image: string;
}

export interface WhatIsNASSection {
  title: string;
  description: string[];
}

export interface CtaSection {
  title: string;
  description: string;
  cta: string;
}

export interface HorizontalScrollableSection {
  title: string;
  description: string;
  scrollableSection: ScrollableSection;
}

export interface ScrollableSection {
  titles: string[];
  descriptions: string[];
}

export interface HowSetupSection {
  title: string;
  description: string;
  cards: Cards;
}

export interface Cards {
  titles: string[];
  descriptions: string[];
  cta: string[];
}

export interface WhatInternxtOffersSection {
  title: string;
  description: string;
  cards: ScrollableSection;
}
