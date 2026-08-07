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

interface FAQSection {
  title: string;
  faq: FAQ[];
}

interface FAQ {
  question: string;
  answer: string[];
}

interface HeroSection {
  products: Products;
  title: string;
  subtitle: string;
  descriptionNormal: string;
  features: string[];
  startFrom: StartFrom;
  claimDeal: string;
}

interface Products {
  drive: string;
  antivirus: string;
  cleaner: string;
  vpn: string;
  meet: string;
  mail: string;
  ai: string;
}

interface StartFrom {
  normal1: string;
  price: string;
  normal2: string;
}

interface NextGenSection {
  title: string;
  description: string;
  cta: string;
  scrollableSection?: ScrollableSection;
}

interface ScrollableSection {
  titles: string[];
  descriptions: string[];
}

interface ReviewSection {
  forbes: string;
  deloitte: string;
  techradar: string;
  fortune: string;
  trustpilot: string;
}

interface WhatsIncludedSection {
  title: string;
  description: string;
  cta: string;
  scrollableSection: WhatsIncludedSectionScrollableSection;
}

interface WhatsIncludedSectionScrollableSection {
  imagesPathname: string[];
  titles: string[];
  descriptions: string[];
}

interface HowToRedeemSection {
  title: string;
  description: string;
  cards: ScrollableSection;
}

interface TableSection {
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

interface BillingFrequency {
  monthly: string;
  annually: string;
  lifetime: string;
  individual: string;
  business: string;
}

interface Features {
  openSource: string;
  premiumSupport: string;
  guarantee: string;
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
}
