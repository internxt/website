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

interface BetterTomorrowSection {
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

interface FeatureSection {
  title: string;
  description: string;
  cards: Cards;
}

interface Cards {
  openSource: EndToEnd;
  endToEnd: EndToEnd;
  zeroKnowledge: EndToEnd;
  gdpr: EndToEnd;
  noUnwantedAccess: EndToEnd;
  freeTools: EndToEnd;
}

interface EndToEnd {
  title: string;
  description: string;
}

interface HeroSection {
  title: HeroSectionTitle;
  description: string;
  cta: string;
}

interface HeroSectionTitle {
  normalText: string;
  blueText: string;
}

interface InxtAppsSection {
  title: SignatureClass;
  subtitle: string;
  square1: BetterTomorrowSection;
  square2: BetterTomorrowSection;
  square3: BetterTomorrowSection;
}

interface SignatureClass {
  line1: string;
  line2: string;
}

interface ManifestoSection {
  section1: Section1;
}

interface Section1 {
  title: SubtitleClass;
  subtitle: SubtitleClass;
  signature: SignatureClass;
}

interface SubtitleClass {
  line1: string;
}

interface SecuritumSection {
  title: string;
  subtitle: string;
  links: Links;
}

interface Links {
  desk: string;
  web: string;
  mobile: string;
}
