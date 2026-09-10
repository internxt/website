export interface DealsPageText {
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

interface CtaSection {
  title: string;
  description: string;
  cta: string;
  scrollableSection?: CtaSectionScrollableSection;
}

interface CtaSectionScrollableSection {
  titles: string[];
  descriptions: string[];
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
}

interface StartFrom {
  normal1: string;
  price: string;
  normal2: string;
}

interface MoreDealsSection {
  title: string;
  description: string;
  cards: Cards;
}

interface Cards {
  card1: CtaSection;
  card2: CtaSection;
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
  scrollableSection: WhatsIncludedSectionScrollableSection;
}

interface WhatsIncludedSectionScrollableSection {
  imagesPathname: string[];
  titles: string[];
  descriptions: string[];
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

interface Features {
  endToEnd: string;
  openSource: string;
  anonymousAccount: string;
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
