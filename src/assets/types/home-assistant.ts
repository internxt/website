import type { PlanStorage } from './common';
export type { PlanStorage };
export interface HomeAssistantText {
    HeroSection: HeroSection;
    MadeInEuropeSection: MadeInEuropeSection;
    TableSection: TableSection;
    TrustedBySection: TrustedBySection;
    ThreeCardsSection: ThreeCardsSection;
    CoreFeatures: CoreFeatures;
    ReviewSection: ReviewSection;
}

export interface HeroSection {
  title: string;
  description: string;
  features: string[];
  guarantee: string;
  claimDeal: string;
}

export interface ReviewSection {
  forbes: string;
  deloitte: string;
  techradar: string;
  fortune: string;
  trustpilot: string;
}

export interface MadeInEuropeSection {
  title: string;
  description: string;
  cards: Sections;
}

export interface Sections {
  images: string[];
  imagesMobile: string[];
  titles: string[];
  descriptions: string[];
  cta: string[];
}

export interface ThreeCardsSection {
  title: string;
  description: string;
  cards: Cards;
}

export interface Cards {
  titles: string[];
  descriptions: string[];
}

export interface CoreFeatures {
  title: string;
  description: string;
  accordionCards: ScrollableSection;
  cards: ScrollableSection;
}

export interface ScrollableSection {
  titles: string[];
  descriptions: string[];
}

export interface TableSection {
  title: string;
  hotLabel: string;
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

export interface LifetimeCampaign {
  blueText: string;
  normalText: string;
}

export interface TrustedBySection {
  description: string;
}