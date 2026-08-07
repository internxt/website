export interface PrivateCloudStorageForVideoText {
  HeroSection: HeroSection;
  HowToChooseSection: HowToChooseSection;
  FeaturesSection: FeaturesSection;
  SecureAndManage: SecureAndManage;
  HorizontalScrollableSection: HorizontalScrollableSection;
  cta: HeroSection;
  cta2: HeroSection;
  FaqSection: FAQSection;
}

interface FAQSection {
  title: string;
  faq: FAQ[];
}

interface FAQ {
  question: string;
  answer: string[];
}

export interface FeaturesSection {
  intro: string;
  title: string;
  h2Intro?: string;
  features: Features;
}

interface Features {
  feature1: Feature;
  feature2: Feature;
  feature3: Feature;
}

interface Feature {
  title: string;
  description: string[];
}

interface HeroSection {
  title: string;
  features?: string[];
  subtitle: string;
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
  imagesPathname: string[];
}

interface HowToChooseSection {
  title: string;
  description: string;
  cardDescriptions: CardDescriptions;
}

interface CardDescriptions {
  titles: string[];
  descriptions: string[];
}

interface SecureAndManage {
  title: string;
  description: string;
  cards: Card[];
}

interface Card {
  title: string;
  description: string[];
  cta: string;
}
