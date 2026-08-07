export interface VPNText {
  HeroSection: HeroSection;
  EncryptedVPNSection: CtaSection;
  SecureVPNSection: CtaSection;
  HowItWorksSection: CtaSection;
  WhenUseVPNSection: CtaSection;
  CtaSection: CtaSection;
  CtaSection2: CtaSection;
  FaqSection: FAQSection;
}

interface CtaSection {
  title: string;
  description: string;
  cta?: string;
  subtitle?: string;
  cards?: Array<CardClass | string>;
  download?: string;
}

interface CardClass {
  title: string;
  description: string;
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
  label: string;
  title: Title;
  description: string;
  cta: string;
  download: string;
}

interface Title {
  line1: string;
  line2: string;
}
