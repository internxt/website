export interface PrivacyText {
  HeroSection: HeroSection;
  ManifestoSection: ManifestoSection;
  FeatureSection: FeatureSection;
  InxtAppsSection: InxtAppsSection;
  FaqSection: FAQSection;
  SecuritumSection: SecuritumSection;
  BetterTomorrowSection: BetterTomorrowSection;
  CtaSection: BetterTomorrowSection;
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
  title: HeroSectionTitle;
  description: string;
  cta: string;
}

export interface HeroSectionTitle {
  normalText: string;
  blueText: string;
}

export interface InxtAppsSection {
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

export interface ManifestoSection {
  section1: Section1;
}

export interface Section1 {
  title: SubtitleClass;
  subtitle: SubtitleClass;
  signature: SignatureClass;
}

export interface SubtitleClass {
  line1: string;
}

export interface SecuritumSection {
  title: string;
  subtitle: string;
  links: Links;
}

export interface Links {
  desk: string;
  web: string;
  mobile: string;
}
