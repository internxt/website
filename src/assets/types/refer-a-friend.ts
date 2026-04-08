export interface ReferAFriendText {
  HeroSection: HeroSection;
  RewardsSection: RewardsSection;
  HowItWorks: HowItWorks;
  FaqSection: FaqSection;
}

export interface HeroSection {
  title: string;
  subtitle: string;
  features: string[];
  cta: string;
}

export interface RewardsSection {
  title: string;
  subtitle: string;
  features: string[];
}

export interface HowItWorks {
  title: string;
  subtitle: string;
  cards: Card[];
}

export interface Card {
  title: string;
  description: string;
}

export interface FaqSection {
  title: string;
  faq: Faq[];
}

export interface Faq {
  question: string;
  answer: string[];
}
