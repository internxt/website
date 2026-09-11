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

interface PhotoSection {
  title:         string;
  description:  string[];
}

interface CtaSection {
  title:       string;
  description: string;
  cta:         string;
}

interface PhotoFeatureSection {
  title:             string;
  description:       string;
  scrollableSection: AccordionCards;
}

interface CoreFeatures {
  title:          string;
  description:    string;
  accordionCards: AccordionCards;
  cards:          AccordionCards;
}

interface DesignedSection {
  title: string;
  scrollableSection: ScrollableSection;
}

interface ScrollableSection {
  images: string[];
  titles: string[];
  descriptions: string[];
}

interface AccordionCards {
  titles:       string[];
  descriptions: string[];
}

interface SemanticAccordion {
  title: string;
  items: Item[];
}

interface Item {
  question: string;
  answer:   string[];
}

interface MadeInEuropeSection {
  title: string;
  description: string;
  cards: Cards;
}

interface Cards {
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

interface Link {
  cta: string;
  link: string;
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
}

interface BillingFrequency {
  monthly: string;
  annually: string;
  lifetime: string;
  individual: string;
  business: string;
}

interface FreePlanCard {
  eyeBrow: string;
  description: string;
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
  homePage: string;
  lifetime: string;
  business: string;
  lifetimeCampaign: LifetimeCampaign;
}

interface LifetimeCampaign {
  blueText: string;
  normalText: string;
}

interface Features {
  endToEnd: string;
  openSource: string;
  anonymousAccount: string;
  premiumSupport: string;
  guarantee: string;
}