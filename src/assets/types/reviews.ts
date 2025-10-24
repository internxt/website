export interface ReviewsTextPage {
  heroSection: HeroSection;
  ReviewSection: ReviewSection;
  ReviewFromIndustrySection: ReviewFromIndustrySection;
  videoSection: VideoSection;
  supportSection: SupportSection;
  ctaSection: CtaSection;
  FaqSection: FAQSection;
}

export interface FAQSection {
  title: string;
  faq: FAQ[];
}

export interface FAQ {
  question: string;
  answer: string[];
}

export interface ReviewFromIndustrySection {
  title: string;
  description: string;
  underStars: string;
  reviewers: ReviewFromIndustrySectionReviewers;
  TechReviews: TechReviews;
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
  pcMag: string;
  mashable: string;
  pcWorld: string;
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
