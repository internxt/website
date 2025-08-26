export interface PrivateCloudStorageForVideoText {
  HeroSection: HeroSection;
  HowToChooseSection: HowToChooseSection;
  FeaturesSection: FeaturesSection;
  SecureAndManage: SecureAndManage;
  FeaturesSectionV2: FeaturesSectionV2;
  cta: HeroSection;
  cta2: HeroSection;
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

export interface FeaturesSection {
  intro: string;
  features: Features;
}

export interface Features {
  feature1: Feature;
  feature2: Feature;
  feature3: Feature;
}

export interface Feature {
  title: string;
  description: string[];
}

export interface FeaturesSectionV2 {
  title: string;
  description: string;
  scrollableSection: ScrollableSection;
}

export interface ScrollableSection {
  titles: string[];
  descriptions: string[];
  imagesPathname: string[];
}

export interface HeroSection {
  title: string;
  features?: string[];
  subtitle: string;
  cta: string;
}

export interface HowToChooseSection {
  title: string;
  description: string;
  cardDescriptions: CardDescriptions;
}

export interface CardDescriptions {
  titles: string[];
  descriptions: string[];
}

export interface SecureAndManage {
  title: string;
  description: string;
  cards: Card[];
}

export interface Card {
  title: string;
  description: string[];
  cta: string;
}
