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

interface CtaSection {
  title: string;
  description: string;
  cta: string;
}

interface FAQSection {
  title: string;
  faq: FAQ[];
}

interface FAQ {
  question: string;
  answer: string[];
}

interface FeatureSection {
  title: string;
  description: string;
}

interface HeroSection {
  topLabel: string;
  cta: string;
  title: string;
  features: string[];
  subTitle: string;
}

interface HowItWorksSection {
  title: string;
  description: string;
  features: Features;
}

interface Features {
  titles: string[];
  descriptions: string[];
}

interface WhenToUseSection {
  title: string;
  description: string;
  features: string[];
}

interface WhyUseSection {
  title: string;
  description: string;
  scrollableSection: Features;
}
