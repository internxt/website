export interface AntivirusText {
  HeroSection: HeroSection;
  cta1: Cta;
  cta2: Cta;
  FaqSection: FAQSection;
  ComponentsInColumn: ComponentsInColumn;
  FeatureSection: ComponentsInColumn;
  FeatureSectionV2: FeatureSectionV2;
  InfoSection: InfoSection;
  InfoSectionV2: InfoSectionV2;
}

export interface ComponentsInColumn {
  title: string;
  description: string;
  cards: ComponentsInColumnCards;
}

export interface ComponentsInColumnCards {
  element1: Element4Class;
  element2: Element4Class;
  element3: Element4Class;
  element4: Element4Class;
}

export interface Element4Class {
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

export interface FeatureSectionV2 {
  title: string;
  description: string;
  cards: FeatureSectionV2Cards;
}

export interface FeatureSectionV2Cards {
  element1: PurpleElement;
  element2: PurpleElement;
  element3: PurpleElement;
}

export interface PurpleElement {
  description: string;
}

export interface HeroSection {
  title: string;
  blueText: string;
  description: string;
  eyeBrow: string;
}

export interface InfoSection {
  Percentage: string;
  PercentageText: string;
  MalwareRegisteredDaily: string;
  MalwareRegisteredDailyText: string;
  MalwareAttacks: string;
  MalwareAttacksText: string;
}

export interface InfoSectionV2 {
  AntivirusProtection: string;
  RemoveMalware: string;
  DeviceProtection: string;
}

export interface Cta {
  title: string;
  subtitle: string;
  cta: string;
}
