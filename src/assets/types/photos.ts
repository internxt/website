export interface PhotoText {
    HeroSection:             HeroSection;
    PhotoSection:            PhotoSection;
    CtaSectionV2:            CtaSection;
    PhotoFeatureSection:     PhotoFeatureSection;
    CoreFeatures:            CoreFeatures;
    DesignedSection:         DesignedSection;
    SemanticAccordion:       SemanticAccordion;
    MadeInEuropeSection:     MadeInEuropeSection;
    RelationalLinksText:     RelationalLinksText;
    TableSection:            TableSection;

}

export interface HeroSection {
  label:          string;
  title:          string;
  description:    string;
  cta:            string;
  garantee:       string;
}

export interface PhotoSection {
  title:         string;
  description:  string[];
}

export interface CtaSection {
  title:       string;
  description: string;
  cta:         string;
}

export interface PhotoFeatureSection {
  title:             string;
  description:       string;
  scrollableSection: AccordionCards;
}

export interface CoreFeatures {
  title:          string;
  description:    string;
  accordionCards: AccordionCards;
  cards:          AccordionCards;
}

export interface DesignedSection {
  title: string;
  scrollableSection: ScrollableSection;
}

export interface ScrollableSection {
  images: string[];
  titles: string[];
  descriptions: string[];
}

export interface AccordionCards {
  titles:       string[];
  descriptions: string[];
}

export interface SemanticAccordion {
  title: string;
  items: Item[];
}

export interface Item {
  question: string;
  answer:   string[];
}

export interface MadeInEuropeSection {
  title: string;
  description: string;
  cards: Cards;
}

export interface Cards {
  images: string[];
  imagesMobile: string[];
  titles: string[];
  descriptions: string[];
  cta: string[];
  links: string[];
}

export interface RelationalLinksText {
  title: string;
  links: Link[];
}

export interface Link {
  cta: string;
  link: string;
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
  lifetime: string;
  individual: string;
  business: string;
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

export interface Features {
  endToEnd: string;
  openSource: string;
  anonymousAccount: string;
  premiumSupport: string;
  guarantee: string;
}