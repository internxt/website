export interface SecureFileTransferText {
    HeroSection:             HeroSection;
    FeaturesSection:         FeaturesSection;
    CtaSection:              CtaSection;
    CtaSectionV2:            CtaSection;
    HowToChooseSection:      HowToChooseSection;
    SecureAndManage:         SecureAndManage;
    SecureFeaturesSection:   SecureFeaturesSection;
    SemanticAccordion:       SemanticAccordion;
}

export interface HeroSection {
  title:    string;
  features?: string[];
  cta:      string;
}

export interface FeaturesSection {
  intro:    string;
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

export interface CtaSection {
  title:       string;
  description: string;
  cta:         string;
}

export interface HowToChooseSection {
  title:          string;
  accordionCards: AccordionCards;
}

export interface AccordionCards {
  titles:       string[];
  descriptions: string[];
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

export interface SecureFeaturesSection {
  title:             string;
  descriptions:      string;
  scrollableSection: AccordionCards;
}

export interface SemanticAccordion {
  title: string;
  items: Item[];
}

export interface Item {
  question: string;
  answer:   string[];
}