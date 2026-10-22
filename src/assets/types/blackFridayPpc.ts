import { DriveText } from './drive';

export interface BlackFridayPpcText {
  HeroSection: HeroSection;
  TableSection: TableSection;
  ReviewSection: ReviewSection;
  WhyChooseSection: WhyChooseSection;
  CoreFeatures: DriveText['CoreFeatures'];
  CtaSection: CtaSection;
  FaqSection: FaqSection;
}

export interface HeroSection {
  products: Products;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  claimDeal: string;
}

export interface Products {
  drive: string;
  antivirus: string;
  cleaner: string;
  vpn: string;
  meet: string;
  photos: string;
  mail: string;
}

export interface TableSection {
  title: string;
  hotLabel: string;
  planTitles: PlanTitles;
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
}

export interface BillingFrequency {
  annually: string;
  lifetime: string;
}

export interface FreePlanCard {
  eyeBrow: string;
  description: string;
  cta: string;
}

export interface Features {
  openSource: string;
  premiumSupport: string;
  guarantee: string;
}

export interface PlanStorage {
  essential: string;
  premium: string;
  ultimate: string;
}

export interface ReviewSection {
  forbes: string;
  deloitte: string;
  techradar: string;
  fortune: string;
  trustpilot: string;
}

export interface WhyChooseSection {
  title: string;
  cards: Cards;
}

export interface Cards {
  titles: string[];
  descriptions: string[];
}

export interface CtaSection {
  title: string;
  description: string;
  cta: string;
  guarantee: string;
}

export interface FaqSection {
  title: string;
  faq: Faq[];
}

export interface Faq {
  question: string;
  answer: string[];
}
