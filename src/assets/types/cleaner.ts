export interface CleanerText {
  HeroSection: HeroSection;
  FeatureSection: FeatureSection;
  WhyUseSection: WhyUseSection;
  CtaSection: CtaSection;
  HowItWorksSection: HowItWorksSection;
  WhenToUseSection: WhenToUseSection;
  CtaSection2: CtaSection;
  FaqSection: FAQSection;
}

export interface CtaSection {
  title: string;
  description: string;
  cta: string;
}

export interface FAQSection {
  title: string;
  faq: FAQ[];
}

export interface FAQ {
  question: string;
  answer: string[];
}

export interface FeatureSection {
  title: string;
  description: string;
}

export interface HeroSection {
  topLabel: string;
  cta: string;
  title: string;
  features: string[];
  subTitle: string;
}

export interface HowItWorksSection {
  title: string;
  description: string;
  features: Features;
}

export interface Features {
  titles: string[];
  descriptions: string[];
}

export interface WhenToUseSection {
  title: string;
  description: string;
  features: string[];
}

export interface WhyUseSection {
  title: string;
  description: string;
  scrollableSection: Features;
}
