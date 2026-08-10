import { TableSection } from '@/assets/types/home';

export interface ReferAFriendText {
  HeroSection: HeroSection;
  RewardsSection: RewardsSection;
  HowItWorks: HowItWorks;
  tableSection: TableSection;
  FaqSection: FaqSection;
}

interface HeroSection {
  title: string;
  subtitle: string;
  features: string[];
  cta: string;
}

interface RewardsSection {
  title: string;
  subtitle: string;
  features: string[];
}

interface HowItWorks {
  title: string;
  subtitle: string;
  cards: Card[];
}

interface Card {
  title: string;
  description: string;
}

interface FaqSection {
  title: string;
  faq: Faq[];
}

interface Faq {
  question: string;
  answer: string[];
}
