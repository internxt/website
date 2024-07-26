export interface PricingText {
  HeroSection: HeroSection;
  HeroSectionAlternative: CtaSection;
  PriceTableForAlternativePricing: PriceTableForAlternativePricing;
  tableSection: TableSection;
  FaqSection: FAQSection;
  FaqSectionForBusiness: FAQSection;
  SchemaMarkupQuestions: SchemaMarkupQuestions;
  CtaSection: CtaSection;
  FirstWhatWeDoSection: FirstWhatWeDoSection;
  InfoSectionForBusiness: CtaSection;
  InfoSection: CtaSection;
  BestStorageSection: BestStorageSection;
  lastCtaSection: CtaSection;
}

export interface BestStorageSection {
  title: string;
  description: string;
  card1: Card;
  card2: Card;
  card3: Card;
  card4: Card;
  card5: Card;
}

export interface Card {
  title: string;
}

export interface CtaSection {
  title: string;
  description: string;
  cta: string;
  features?: string[];
  cards?: Cta[];
}

export interface Cta {
  title: string;
  description: string;
}

export interface FAQSection {
  title: string;
  faq: FAQ[];
}

export interface FAQ {
  question: string;
  answer: string[];
}

export interface FirstWhatWeDoSection {
  card1: CtaSection;
  card2: CtaSection;
  card3: CtaSection;
}

export interface HeroSection {
  title: HeroSectionTitle;
  lifetimeTitle: LifetimeTitle;
  feeds: Feeds;
  cta: Cta;
}

export interface Feeds {
  firstFeed: string;
  secondFeed: string;
  thirdFeed: string;
}

export interface LifetimeTitle {
  line1: string;
  blueText: string;
  line2: string;
}

export interface HeroSectionTitle {
  line1: string;
  line2: string;
}

export interface PriceTableForAlternativePricing {
  title: PriceTableForAlternativePricingTitle;
  offerEnds: string;
}

export interface PriceTableForAlternativePricingTitle {
  normal1: string;
  blue1: string;
  normal2: string;
  blue2: string;
}

export interface SchemaMarkupQuestions {
  faq: FAQ[];
}

export interface TableSection {
  ctaBanner: CtaBanner;
  planTitles: PlanTitles;
  lifetimeDescription: string;
  planDescription: string;
  businessDescription: string;
  businessDescription2: string;
  billingFrequency: BillingFrequency;
  freePlanCard: FreePlanCard;
  features: Features;
}

export interface BillingFrequency {
  monthly: string;
  annually: string;
  individual: string;
  lifetime: string;
  business: string;
}

export interface CtaBanner {
  label: string;
  title: string;
  subtitle: string;
  cta: string;
  cta2: string;
  guarantee: string;
  lastCta: string;
}

export interface Features {
  endToEnd: string;
  openSource: string;
  anonymousAccount: string;
}

export interface FreePlanCard {
  getStarted: string;
  enjoy10gb: string;
  upTo: string;
  freeForever: string;
  cta: string;
}

export interface PlanTitles {
  individuals: string;
  lifetime: string;
  business: string;
  lifetimeCampaign: LifetimeCampaign;
}

export interface LifetimeCampaign {
  blueText: string;
  normalText: string;
}
