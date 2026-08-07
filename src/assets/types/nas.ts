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
  Breadcrumbs: Breadcrumbs;
}

interface Breadcrumbs {
  home: string;
  drive: string;
  nas: string;
  qnap: string;
  synology: string;
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
  label: string;
  title: string;
  subtitle: string;
  features: string[];
  cta: string;
}

interface InternxtNASIntegrations {
  title: string;
  description: string;
  synologyBox: Box;
  QNAPBox: Box;
}

interface Box {
  title: string;
  description: string;
  image: string;
}

interface WhatIsNASSection {
  title: string;
  description: string[];
}

interface CtaSection {
  title: string;
  description: string;
  cta: string;
}

interface HorizontalScrollableSection {
  title: string;
  description: string;
  scrollableSection: ScrollableSection;
}

interface ScrollableSection {
  titles: string[];
  descriptions: string[];
}

interface HowSetupSection {
  title: string;
  description: string;
  cards: Cards;
}

interface Cards {
  titles: string[];
  descriptions: string[];
  cta: string[];
}

interface WhatInternxtOffersSection {
  title: string;
  description: string;
  cards: ScrollableSection;
}
