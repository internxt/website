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

interface FAQSection {
  title: string;
  faq: FAQ[];
}

interface FAQ {
  question: string;
  answer: string[];
}

interface ReviewFromIndustrySection {
  title: string;
  description: string;
  underStars: string;
  reviewers: ReviewFromIndustrySectionReviewers;
  TechReviews: TechReviews;
  readMore: string;
}

interface TechReviews {
  titles: string[];
  description: string[];
  authors: string[];
}

interface ReviewFromIndustrySectionReviewers {
  reviewers: ReviewersReviewers;
  TruspilotReviews: TruspilotReviews;
}

interface TruspilotReviews {
  reviews: string[];
  authors: string[];
}

interface ReviewersReviewers {
  Trustpilot: string;
  Techexperts: string;
}

interface ReviewSection {
  forbes: string;
  deloitte: string;
  techradar: string;
  fortune: string;
  trustpilot: string;
}

interface CtaSection {
  title: string;
  description: string;
  cta: string;
}

interface HeroSection {
  title: string;
  subtitle: string;
  features: string[];
  cta: string;
}

interface SupportSection {
  title: string;
  description: string;
  cards: Cards;
}

interface Cards {
  card1: Card;
  card2: Card;
}

interface Card {
  title: string;
  description: string;
}

interface VideoSection {
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

export interface PlanStorage {
  essential: string;
  premium: string;
  ultimate: string;
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
