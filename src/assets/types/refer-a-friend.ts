export interface ReferAFriendText {
  HeroSection: HeroSection;
  RewardsSection: RewardsSection;
  HowItWorks: HowItWorks;
  tableSection: TableSection;
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

export interface TableSection {
  title: string;
  subtitle: string;
  planTitles: PlanTitles;
  lifetimeDescription: string;
  planDescription: string;
  businessDescription: string;
  businessDescription2: string;
  billingFrequency: BillingFrequency;
  freePlanCard: FreePlanCard;
  features: Features;
  planStorage: PlanStorage;
}

export interface PlanTitles {
  header: string;
  individuals: string;
  homePage: string;
  lifetime: string;
  business: string;
  lifetimeCampaign: LifetimeCampaign;
}

export interface LifetimeCampaign {
  blueText: string;
  normalText: string;
}

export interface BillingFrequency {
  monthly: string;
  annually: string;
  lifetime: string;
  individual: string;
  business: string;
}

export interface FreePlanCard {
  eyeBrow: string;
  description: string;
  cta: string;
}

export interface Features {
  endToEnd: string;
  openSource: string;
  anonymousAccount: string;
  premiumSupport: string;
  guarantee: string;
}

export interface PlanStorage {
  essential: string;
  premium: string;
  ultimate: string;
}

export interface FaqSection {
  title: string;
  faq: Faq[];
}

export interface Faq {
  question: string;
  answer: string[];
}
