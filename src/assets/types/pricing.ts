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

interface BestStorageSection {
  title: string;
  description: string;
  card1: Card1Class;
  card2: Card1Class;
  card3: Card1Class;
  card4: Card1Class;
  card5: Card1Class;
}

interface Card1Class {
  title: string;
}

interface ComparisonTable {
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
  hideIcons?: boolean;
}

export interface Feature {
  id: string;
  name: string;
  avalability: Avalability;
  group?: string;
  hideIcons?: boolean;
}

interface Avalability {
  [key: string]: boolean;
  Essential: boolean;
  Premium: boolean;
  Ultimate: boolean;
}

interface Plan {
  id: string;
  name: string;
  order: number;
}

interface FAQSection {
  title: string;
  faq: FAQ[];
}

interface FAQ {
  question: string;
  answer: string[];
}

interface InfoSection {
  title: string;
  description: string;
  cta: string;
  scrollableSection?: ScrollableSection;
  cards?: CardElement[];
}

interface CardElement {
  title: string;
  description: string;
}

interface ScrollableSection {
  titles: string[];
  descriptions: string[];
}

interface SchemaMarkupQuestions {
  faq: FAQ[];
}

interface TableSection {
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
  ctaCompare?: string;
}

interface BillingFrequency {
  monthly: string;
  annually: string;
  individual: string;
  lifetime: string;
  business: string;
}

interface Features {
  endToEnd: string;
  openSource: string;
  anonymousAccount: string;
  premiumSupport: string;
  guarantee: string;
}

interface FreePlanCard {
  eyeBrow: string;
  description: string;
  mobileDescription: string;
  cta: string;
}

interface PlanStorage {
  essential: string;
  premium: string;
  ultimate: string;
}

interface PlanTitles {
  header: string;
  individuals: string;
  lifetime: string;
  business: string;
}
