import type { PlanStorage } from './common';
export type { PlanStorage };
export interface CloudStorageForDocumentsText {
  HeroSection:             HeroSection;
  FeaturesSection:         FeaturesSection;
  CtaSection:              CtaSection;
  CoreFeatures:            CoreFeatures;
  SecureAndManage:         SecureAndManage;
  FeaturesInternxtSection: FeaturesInternxtSection;
  CtaSectionV2:            CtaSection;
  SemanticAccordion:       SemanticAccordion;
  tableSection:            TableSection;
}

export interface CtaSection {
  title:       string;
  description: string;
  cta:         string;
}

export interface CoreFeatures {
  title:          string;
  description:    string;
  accordionCards: AccordionCards;
}

export interface AccordionCards {
  titles:       string[];
  descriptions: Paragraphs[];
}

export interface Paragraphs {
  contents: string[]
}

export interface FeaturesInternxtSection {
  title:             string;
  description:       string;
  scrollableSection: AccordionCards;
}

export interface FeaturesSection {
  intro:    string;
  features: Features;
}

export interface Features {
  feature1: Feature;
  feature2: Feature;
  feature3: Feature;
}

export interface Feature {
  title:       string;
  description: string[];
}

export interface HeroSection {
  title:    string;
  features?: string[];
  subtitle: string;
  cta:      string;
}

export interface SecureAndManage {
  title:       string;
  description: string;
  cards:       Card[];
}

export interface Card {
  title:       string;
  description: string[];
  cta:         string;
}

export interface SemanticAccordion {
  title: string;
  items: Item[];
}

export interface Item {
  question: string;
  answer:   string[];
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
