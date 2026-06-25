export interface CloudStorageForDocumentsText {
  HeroSection:             HeroSection;
  FeaturesSection:         FeaturesSection;
  CtaSection:              CtaSection;
  CoreFeatures:            CoreFeatures;
  SecureAndManage:         SecureAndManage;
  FeaturesInternxtSection: FeaturesInternxtSection;
  CtaSectionV2:            CtaSection;
  SemanticAccordion:       SemanticAccordion;
}

export interface CtaSection {
  title:       string;
  description: string;
  cta:         string;
}

export interface CoreFeatures {
  title:          string;
  description:    string;
  accordionCards: AccordionCards;
  cards:          AccordionCards;
}

export interface AccordionCards {
  titles:       string[];
  descriptions: string[];
}

export interface FeaturesInternxtSection {
  title:             string;
  description:       string;
  scrollableSection: AccordionCards;
}

export interface FeaturesSection {
  intro:    string;
  title:    string;
  h2Intro:  string;
  features: Features;
}

export interface Features {
  feature1: Feature;
  feature2: Feature;
  feature3: Feature;
}

export interface Feature {
  title:       string;
  description: string[];
}

export interface HeroSection {
  title:    string;
  features?: string[];
  subtitle: string;
  cta:      string;
}

export interface SecureAndManage {
  title:       string;
  description: string;
  cards:       Card[];
}

export interface Card {
  title:       string;
  description: string[];
  cta:         string;
}

export interface SemanticAccordion {
  title: string;
  items: Item[];
}

export interface Item {
  question: string;
  answer:   string[];
}
