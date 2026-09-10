export interface MeetPageText {
  HeroSection: HeroSection;
  enjoyPrivacySection: EnjoyPrivacySection;
  ctaSection: HeroSection;
  accordionSection: AccordionSection;
  desginedSection: DesginedSection;
  ctaSectionV2: HeroSection;
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

interface HeroSection {
  label?: string;
  title: string;
  description: string;
  cta: string;
}

interface AccordionSection {
  title: string;
  description: string;
  accordionSection: Section;
}

interface Section {
  titles: string[];
  descriptions: string[];
}

interface DesginedSection {
  title: string;
  subtitle?: string;
  description: string;
  scrollableSection: ScrollableSection;
}

interface ScrollableSection {
  images: string[];
  titles: string[];
  descriptions: string[];
}

interface EnjoyPrivacySection {
  title: string;
  description: string;
  scrollableSection: Section;
}
