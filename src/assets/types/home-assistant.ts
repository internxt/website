export interface HomeAssistantText {
    HeroSection: HeroSection;
    TableSection: TableSection;
    ConfigurationSection: ConfigurationSection;
    ThreeCardsSection: ThreeCardsSection;
    NextGenSection: NextGenSection;
}

export interface HeroSection {
  products: Products;
  title: string;
  description: string;
  subtitle: string;
  subtitle2: string;
  claimDeal: string;
}

export interface Products {
  drive: string;
  antivirus: string;
  cleaner: string;
  vpn: string;
  meet: string;
  mail: string;
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

export interface PlanTitles {
  header: string;
  individuals: string;
  homePage: string;
  lifetime: string;
  business: string;
  lifetimeCampaign: LifetimeCampaign;
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

export interface Features {
  endToEnd: string;
  openSource: string;
  anonymousAccount: string;
  premiumSupport: string;
  guarantee: string;
}

export interface PlanStorage {
  essential: string;
  premium: string;
  ultimate: string;
}

export interface LifetimeCampaign {
  blueText: string;
  normalText: string;
}

export interface ConfigurationSection {
    title: string;
    description: string;
    accordionCard: AccordionCards;
    features: string[];
}

export interface AccordionCards {
  titles: string[];
  descriptions: string[];
}

export interface ThreeCardsSection {
  title: string;
  description: string;
  cards: Cards;
}

export interface Cards {
  titles: string[];
  descriptions: string[];
}

export interface NextGenSection {
  title: string;
  description: string;
  cta: string;
  scrollableSection?: ScrollableSection;
  titleWithoutDiscount?: string;
  descriptionWithoutDisocunt?: string;
}

export interface ScrollableSection {
  titles: string[];
  descriptions: string[];
}