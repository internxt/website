export interface CouponPageText {
  HeroSection: HeroSection;
  ReviewSection: ReviewSection;
  tableSection: TableSection;
  howToRedeemSection: HowToRedeemSection;
  NextGenSection: NextGenSection;
  WhatsIncludedSection: WhatsIncludedSection;
  ctaSection: NextGenSection;
  ctaSectionV2: NextGenSection;
  FaqSection: FAQSection;
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
  descriptionNormal: string;
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
  ai: string;
}

export interface StartFrom {
  normal1: string;
  price: string;
  normal2: string;
}

export interface NextGenSection {
  title: string;
  description: string;
  cta: string;
  scrollableSection?: ScrollableSection;
}

export interface ScrollableSection {
  titles: string[];
  descriptions: string[];
}

export interface ReviewSection {
  pcMag: string;
  mashable: string;
  pcWorld: string;
}

export interface WhatsIncludedSection {
  title: string;
  description: string;
  cta: string;
  scrollableSection: WhatsIncludedSectionScrollableSection;
}

export interface WhatsIncludedSectionScrollableSection {
  imagesPathname: string[];
  titles: string[];
  descriptions: string[];
}

export interface HowToRedeemSection {
  title: string;
  description: string;
  cards: ScrollableSection;
}

export interface TableSection {
  title: string;
  hotLabel: string;
  planTitles: PlanTitles;
  appliedCupon: string;
  billingFrequency: BillingFrequency;
  discountLabel: string;
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
  openSource: string;
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
}
