export interface PrivateCloudStorageForVideoText {
  HeroSection: HeroSection;
  HowToChooseSection: HowToChooseSection;
  FeaturesSection: FeaturesSection;
  SecureAndManage: SecureAndManage;
  HorizontalScrollableSection: HorizontalScrollableSection;
  cta: HeroSection;
  cta2: HeroSection;
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

export interface FeaturesSection {
  intro: string;
  title: string;
  h2Intro?: string;
  features: Features;
}

export interface Features {
  feature1: Feature;
  feature2: Feature;
  feature3: Feature;
}

interface Feature {
  title: string;
  description: string[];
}

interface HeroSection {
  title: string;
  features?: string[];
  subtitle: string;
  cta: string;
}

interface HorizontalScrollableSection {
  title: string;
  description: string;
  scrollableSection: ScrollableSection;
}

interface ScrollableSection {
  titles: string[];
  descriptions: string[];
  imagesPathname: string[];
}

interface HowToChooseSection {
  title: string;
  description: string;
  cardDescriptions: CardDescriptions;
}

interface CardDescriptions {
  titles: string[];
  descriptions: string[];
}

interface SecureAndManage {
  title: string;
  description: string;
  cards: Card[];
}

interface Card {
  title: string;
  description: string[];
  cta: string;
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
