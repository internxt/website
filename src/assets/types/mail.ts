export interface MailText {
    HeroSection:             HeroSection;
    DriveSection:            DriveSection;
    CtaSection:              CtaSection;
    CtaSectionV2:            CtaSection;
    MailFeatureSection:      MailFeatureSection;
    CoreFeatures:            CoreFeatures;
    DesignedSection:         DesignedSection;
    SemanticAccordion:       SemanticAccordion;
}

export interface HeroSection {
  label:          string;
  title:          string;
  description:    string;
  cta:            string;
  garantee:       string;
}

export interface DriveSection {
  title:         string;
  description:  string[];
}

export interface CtaSection {
  title:       string;
  description: string;
  cta:         string;
}

export interface MailFeatureSection {
  title:             string;
  descriptions:      string;
  scrollableSection: AccordionCards;
}

export interface CoreFeatures {
  title:          string;
  descriptions:    string[];
  accordionCards: AccordionCards;
}

export interface DesignedSection {
  title: string;
  description: string;
  scrollableSection: ScrollableSection;
}

export interface ScrollableSection {
  images: string[];
  titles: string[];
  descriptions: string[];
}

export interface AccordionCards {
  titles:       string[];
  descriptions: string[];
}

export interface SemanticAccordion {
  title: string;
  items: Item[];
}

export interface Item {
  question: string;
  answer:   string[];
}

export interface ImageConfig {
  src: string;
  alt: string;
  animationDelay: number;
  size: { width: number; height: number };
  position: Position;
  boxShadow?: string;
  filter?: string;
  borderRadius?: string;
  className?: string;
}

export interface Position {
  top: string;
  left: string;
  bottom?: string;
}

export interface AnimationProps {
  images: ImageConfig[];
}