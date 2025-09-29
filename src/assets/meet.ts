export interface MeetPageText {
  HeroSection: HeroSection;
  enjoyPrivacySection: EnjoyPrivacySection;
  ctaSection: HeroSection;
  accordionSection: AccordionSection;
  desginedSection: DesginedSection;
  ctaSectionV2: HeroSection;
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

export interface HeroSection {
  label?: string;
  title: string;
  description: string;
  cta: string;
}

export interface AccordionSection {
  title: string;
  description: string;
  accordionSection: Section;
}

export interface Section {
  titles: string[];
  descriptions: string[];
}

export interface DesginedSection {
  title: string;
  description: string;
  scrollableSection: ScrollableSection;
}

export interface ScrollableSection {
  images: string[];
  titles: string[];
  descriptions: string[];
}

export interface EnjoyPrivacySection {
  title: string;
  description: string;
  scrollableSection: Section;
}
