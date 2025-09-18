export interface PricingText {
  tableSection: TableSection;
  ComparisonTable: ComparisonTable;
  FaqSection: FAQSection;
  FaqSectionForBusiness: FAQSection;
  SchemaMarkupQuestions: SchemaMarkupQuestions;
  InfoSectionForBusiness: InfoSection;
  InfoSection: InfoSection;
  BestStorageSection: BestStorageSection;
  lastCtaSection: InfoSection;
}

export interface BestStorageSection {
  title: string;
  description: string;
  card1: Card1Class;
  card2: Card1Class;
  card3: Card1Class;
  card4: Card1Class;
  card5: Card1Class;
}

export interface Card1Class {
  title: string;
}

export interface ComparisonTable {
  title: string;
  cta: string;
  billedAnnualy: string;
  billedOnce: string;
  plans: Plan[];
  categories: Category[];
}

export interface Category {
  name: string;
  features: Feature[];
}

export interface Feature {
  id: string;
  name: string;
  avalability: Avalability;
}

export interface Avalability {
  Essential: boolean;
  Premium: boolean;
  Ultimate: boolean;
}

export interface Plan {
  id: string;
  name: string;
  order: number;
}

export interface FAQSection {
  title: string;
  faq: FAQ[];
}

export interface FAQ {
  question: string;
  answer: string[];
}

export interface InfoSection {
  title: string;
  description: string;
  cta: string;
  scrollableSection?: ScrollableSection;
  cards?: CardElement[];
}

export interface CardElement {
  title: string;
  description: string;
}

export interface ScrollableSection {
  titles: string[];
  descriptions: string[];
}

export interface SchemaMarkupQuestions {
  faq: FAQ[];
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

export interface BillingFrequency {
  monthly: string;
  annually: string;
  individual: string;
  lifetime: string;
  business: string;
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
  mobileDescription: string;
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
}
