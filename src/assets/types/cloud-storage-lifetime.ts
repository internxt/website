export interface CloudStorageLifetimeText {
  HeroSection: HeroSection;
  ReviewSection: ReviewSection;
  MoreDealsSection: MoreDealsSection;
  tableSection: TableSection;
  CtaSection: CtaSection;
  WhatsIncludedSection: WhatsIncludedSection;
  WhyChooseInternxtSection: CtaSection;
  CtaSectionV2: CtaSection;
  FaqSection: FAQSection;
}

export interface CtaSection {
  title: string;
  description: string;
  cta: string;
  scrollableSection?: CtaSectionScrollableSection;
}

export interface CtaSectionScrollableSection {
  titles: string[];
  descriptions: string[];
}

export interface FAQSection {
  title: string;
  faq: FAQ[];
}

export interface FAQ {
  question: string;
  answer: string[];
}

export interface HeroSection {
  products: Products;
  title: string;
  subtitle: string;
  features: string[];
  startFrom: StartFrom;
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

export interface StartFrom {
  normal1: string;
  price: string;
  normal2: string;
}

export interface MoreDealsSection {
  title: string;
  description: string;
  links: Link[];
}

export interface Link {
  text: string;
  url: string;
}

export interface ReviewSection {
  pcMag: string;
  mashable: string;
  pcWorld: string;
}

export interface WhatsIncludedSection {
  title: string;
  description: string;
  scrollableSection: WhatsIncludedSectionScrollableSection;
}

export interface WhatsIncludedSectionScrollableSection {
  imagesPathname: string[];
  titles: string[];
  descriptions: string[];
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
