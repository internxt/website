export interface SpecialOfferText {
  HeroSection: HeroSection;
  ReviewSection: ReviewSection;
  TrustedBySection: TrustedBySection;
  NextGenSection: NextGenSection;
  ctaSection: NextGenSection;
  ctaSection2: NextGenSection;
  tableSection: TableSection;
}

export interface HeroSection {
  products: Products;
  title: string;
  description: string;
  subtitle: string;
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

export interface NextGenSection {
  title: string;
  description: string;
  cta: string;
  cardDescriptions?: CardDescriptions;
  titleWithoutDiscount?: string;
  descriptionWithoutDisocunt?: string;
}

export interface CardDescriptions {
  titles: string[];
  descriptions: string[];
}

export interface ReviewSection {
  pcMag: string;
  mashable: string;
  pcWorld: string;
}

export interface TrustedBySection {
  title: string;
  review: string;
  author: string;
}

export interface TableSection {
  title: string;
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
