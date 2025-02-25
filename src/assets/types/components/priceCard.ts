export interface PriceCardText {
  planTitles: PlanTitles;
  description: string;
  lifetimeDescription: string;
  billingFrequency: BillingFrequency;
  cta: Cta;
  freePlanCard: FreePlanCard;
  features: Features;
  productFeatures: ProductFeatures;
}

export interface BillingFrequency {
  annually: string;
  lifetime: string;
}

export interface Cta {
  getStarted: string;
  signUpNow: string;
  buy: string;
  get: string;
  selectPlan: string;
  redeem: string;
  discount: string;
  claimTheDeal: string;
  freemonth: string;
}

export interface Features {
  premiumCustomerSupport: string;
  guarantee: string;
  openSource: string;
}

export interface FreePlanCard {
  eyeBrow: string;
  description: string;
  cta: string;
}

export interface PlanTitles {
  individuals: string;
  lifetime: string;
}

export interface ProductFeatures {
  Essential: string[];
  Premium: string[];
  Ultimate: string[];
}
