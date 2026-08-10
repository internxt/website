export interface ReviewsTextPage {
  heroSection: HeroSection;
  ReviewSection: ReviewSection;
  ReviewFromIndustrySection: ReviewFromIndustrySection;
  videoSection: VideoSection;
  supportSection: SupportSection;
  ctaSection: CtaSection;
  FaqSection: FAQSection;
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
