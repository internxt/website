import type { FAQ, FAQSection, PlanStorage } from './common';
export type { FAQ, FAQSection, PlanStorage };
export interface ReviewsTextPage {
  heroSection: HeroSection;
  ReviewSection: ReviewSection;
  ReviewFromIndustrySection: ReviewFromIndustrySection;
  videoSection: VideoSection;
  supportSection: SupportSection;
  ctaSection: CtaSection;
  FaqSection: FAQSection;
  tableSection: TableSection;
}

export interface ReviewFromIndustrySection {
  title: string;
  description: string;
  underStars: string;
  reviewers: ReviewFromIndustrySectionReviewers;
  TechReviews: TechReviews;
  readMore: string;
}

export interface TechReviews {
  titles: string[];
  description: string[];
  authors: string[];
}

export interface ReviewFromIndustrySectionReviewers {
  reviewers: ReviewersReviewers;
  TruspilotReviews: TruspilotReviews;
}

export interface TruspilotReviews {
  reviews: string[];
  authors: string[];
}

export interface ReviewersReviewers {
  Trustpilot: string;
  Techexperts: string;
}

export interface ReviewSection {
  forbes: string;
  deloitte: string;
  techradar: string;
  fortune: string;
  trustpilot: string;
}

export interface CtaSection {
  title: string;
  description: string;
  cta: string;
}

export interface HeroSection {
  title: string;
  subtitle: string;
  features: string[];
  cta: string;
}

export interface SupportSection {
  title: string;
  description: string;
  cards: Cards;
}

export interface Cards {
  card1: Card;
  card2: Card;
}

export interface Card {
  title: string;
  description: string;
}

export interface VideoSection {
  company: string;
  description: string;
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

export interface FreePlanCard {
  eyeBrow: string;
  description: string;
  cta: string;
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

export interface Features {
  endToEnd: string;
  openSource: string;
  anonymousAccount: string;
  premiumSupport: string;
  guarantee: string;
}
