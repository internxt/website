export interface SecureFileTransferText {
    HeroSection:             HeroSection;
    FeaturesSection:         FeaturesSection;
    CtaSection:              CtaSection;
    CtaSectionV2:            CtaSection;
    HowToChooseSection:      HowToChooseSection;
    SecureAndManage:         SecureAndManage;
    SecureFeaturesSection:   SecureFeaturesSection;
    SemanticAccordion:       SemanticAccordion;
    tableSection:            TableSection;
}

interface HeroSection {
  title:    string;
  features?: string[];
  cta:      string;
}

export interface FeaturesSection {
  intro:    string;
  features: Features;
}

interface Features {
  feature1: Feature;
  feature2: Feature;
  feature3: Feature;
}

interface Feature {
  title:       string;
  description: string[];
}

interface CtaSection {
  title:       string;
  description: string;
  cta:         string;
}

interface HowToChooseSection {
  title:          string;
  accordionCards: AccordionCards;
}

interface AccordionCards {
  titles:       string[];
  descriptions: string[];
}

interface SecureAndManage {
  title:       string;
  description: string;
  cards:       Card[];
}

interface Card {
  title:       string;
  description: string[];
  cta:         string;
}

interface SecureFeaturesSection {
  title:             string;
  descriptions:      string;
  scrollableSection: AccordionCards;
}

interface SemanticAccordion {
  title: string;
  items: Item[];
}

interface Item {
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