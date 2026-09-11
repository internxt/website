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

interface CompilanceAndCertificationsSection {
  title: string;
  description: string;
  features: Cards;
  cards: Cards;
}

interface Cards {
  titles: string[];
  description: string[];
}

interface CtaSection {
  title: string;
  description: string;
  cta: string;
}

interface FAQSection {
  title: string;
  faq: FAQ[];
}

interface FAQ {
  question: string;
  answer: string[];
}

interface HeroSection {
  title: string;
  description: string;
  features: string[];
}

interface HorizontalScrllableSection {
  title: string;
  description: string;
  cards: Cards;
}

interface SecureCloudStorgaeSection {
  title: string;
  description: string;
  card: Card;
}

interface Card {
  title: string;
  description: string[];
  cta: string;
}

interface WhatIsDataCenterSection {
  title: string;
  description: string[];
}
