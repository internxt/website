export interface PriceCardText {
  mostPopular: string;
  mostPopularPlan: string;
  valentines: string;
  onlyForNewClients: string;
  redeemCode: string;
  save: string;
  planTitles: PlanTitles;
  lifetimeDescription: string;
  planDescription: string;
  businessDescription: string;
  billingFrequency: BillingFrequency;
  businessLabels: BusinessLabels;
  billingFrequencyLabel: BillingFrequencyLabel;
  billingFrequencyLabelSmall: BillingFrequencyLabelSmall;
  perUserSlash: string;
  perUser: string;
  users: string;
  freePlan: string;
  price: Price;
  perMonth: string;
  firstMonth: string;
  cta: Cta;
  freePlanCard: FreePlanCard;
  features: Features;
  productFeatures: ProductFeatures;
}

export interface BillingFrequency {
  monthly: string;
  annually: string;
  individual: string;
  lifetime: string;
  business: string;
}

export interface BillingFrequencyLabel {
  lifetime: string;
  monthly: string;
  semiannually: string;
  annually: string;
  afterMonth: string;
}

export interface BillingFrequencyLabelSmall {
  monthly: string;
  semiannually: string;
  annually: string;
}

export interface BusinessLabels {
  '1TB': string;
  '2TB': string;
  family: Family;
}

export interface Family {
  '1TB': string;
  '2TB': string;
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
  enjoyForever: EnjoyForever;
  moneyBack: string;
  encryptedFiles: string;
  accessFromAnywhere: string;
  allServices: string;
  dataAccess: string;
  premiumCustomerSupport: string;
  openSource: string;
}

export interface EnjoyForever {
  enjoy: string;
  enjoyUpTo: string;
  forFree: string;
  forever: string;
}

export interface FreePlanCard {
  getStarted: string;
  enjoy10gb: string;
  upTo: string;
  freeForever: string;
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

export interface Price {
  freeForever: string;
  free: string;
}

export interface ProductFeatures {
  cheaperThan: CheaperThan;
  individuals: { [key: string]: string[] };
  business: { [key: string]: string[] };
}

export interface CheaperThan {
  lifetime: Lifetime;
  year: Lifetime;
  month: Lifetime;
}

export interface Lifetime {
  normal: string;
  bold: string;
  normal2: string;
}
