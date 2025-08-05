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
  description: string;
  features: string[];
  offerEnds: string;
  howMuchStorage: string;
}

export interface PriceTableForAlternativePricingTitle {
  normal1: string;
  blue2: string;
  normal2: string;
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
  individuals: string;
  planStorage: PlanStorage;
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
  subtitle2: string;
  subtitle3: string;
  cta: string;
  guarantee: string;
  gift: string;
  lastCta: string;
}

export interface Features {
  endToEnd: string;
  openSource: string;
  anonymousAccount: string;
  premiumSupport: string;
  guarantee: string;
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
  lifetime: string;
  business: string;
  lifetimeCampaign: LifetimeCampaign;
  blackFriday: Cta;
}

export interface LifetimeCampaign {
  blueText: string;
  normalText: string;
}
