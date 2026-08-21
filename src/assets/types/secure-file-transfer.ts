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

interface HeroSection {
  title:    string;
  features?: string[];
  cta:      string;
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

interface CtaSection {
  title:       string;
  description: string;
  cta:         string;
}

interface HowToChooseSection {
  title:          string;
  accordionCards: AccordionCards;
}

interface AccordionCards {
  titles:       string[];
  descriptions: string[];
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

interface SecureFeaturesSection {
  title:             string;
  descriptions:      string;
  scrollableSection: AccordionCards;
}

interface SemanticAccordion {
  title: string;
  items: Item[];
}

interface Item {
  question: string;
  answer:   string[];
}