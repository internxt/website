import type { FAQ, FAQSection } from './common';
export type { FAQ, FAQSection };
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

export interface CtaSection {
  title: string;
  description: string;
  cta?: string;
  subtitle?: string;
  cards?: Array<CardClass | string>;
  download?: string;
}

export interface CardClass {
  title: string;
  description: string;
}

export interface HeroSection {
  label: string;
  title: Title;
  description: string;
  cta: string;
  download: string;
}

export interface Title {
  line1: string;
  line2: string;
}
