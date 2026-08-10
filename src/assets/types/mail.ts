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

interface HeroSection {
  label:          string;
  title:          string;
  description:    string;
  cta:            string;
  garantee:       string;
}

interface DriveSection {
  title:         string;
  description:  string[];
}

interface CtaSection {
  title:       string;
  description: string;
  cta:         string;
}

interface MailFeatureSection {
  title:             string;
  descriptions:      string;
  scrollableSection: AccordionCards;
}

interface CoreFeatures {
  title:          string;
  descriptions:    string[];
  accordionCards: AccordionCards;
}

interface DesignedSection {
  title: string;
  description: string;
  scrollableSection: ScrollableSection;
}

interface ScrollableSection {
  images: string[];
  titles: string[];
  descriptions: string[];
}

interface AccordionCards {
  titles:       string[];
  descriptions: string[];
}

interface SemanticAccordion {
  title: string;
  items: Item[];
}

interface Item {
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

interface Position {
  top: string;
  left: string;
  bottom?: string;
}

interface AnimationProps {
  images: ImageConfig[];
}