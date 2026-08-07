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

interface CtaSection {
  title:       string;
  description: string;
  cta:         string;
}

interface CoreFeatures {
  title:          string;
  description:    string;
  accordionCards: AccordionCards;
}

interface AccordionCards {
  titles:       string[];
  descriptions: Paragraphs[];
}

interface Paragraphs {
  contents: string[]
}

interface FeaturesInternxtSection {
  title:             string;
  description:       string;
  scrollableSection: AccordionCards;
}

export interface FeaturesSection {
  intro:    string;
  features: Features;
}

interface Features {
  feature1: Feature;
  feature2: Feature;
  feature3: Feature;
}

interface Feature {
  title:       string;
  description: string[];
}

interface HeroSection {
  title:    string;
  features?: string[];
  subtitle: string;
  cta:      string;
}

interface SecureAndManage {
  title:       string;
  description: string;
  cards:       Card[];
}

interface Card {
  title:       string;
  description: string[];
  cta:         string;
}

interface SemanticAccordion {
  title: string;
  items: Item[];
}

interface Item {
  question: string;
  answer:   string[];
}
