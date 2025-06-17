export interface SpecialOfferText {
  HeroSection: HeroSection;
  MostSecureSection: CtaSection1;
  ScrollableSection: ScrollableSection;
  PaymentSection: PaymentSection;
  CtaSection1: CtaSection1;
}

export interface CtaSection1 {
  title: string;
  description: string;
  cta: string;
}

export interface HeroSection {
  title: string;
  subtitle: string;
  description: string;
  info: string;
  cta: string;
}

export interface PaymentSection {
  planTitles: PlanTitles;
  header: string;
  lifetimeDescription: string;
  planDescription: string;
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

export interface PlanTitles {
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

export interface ScrollableSection {
  title: string;
  description: string;
  elements: Element[];
}

export interface Element {
  title: string;
  description: string;
}
