export interface BlackFridayText {
  HeroSection: HeroSection;
  DontMissSection: DontMissSection;
  MoreDealsSection: MoreDealsSection;
  TableSection: TableSection;
  WhyChooseSection: WhyChooseSection;
  CtaSection: CtaSection;
  HorizontalScrollableSection: HorizontalScrollableSection;
  CtaSectionV2: CtaSection;
  FaqSection: FAQSection;
}

interface CtaSection {
  title: string;
  description: string;
  cta: string;
}

interface DontMissSection {
  title: string;
  description: string[];
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
  description: string;
  features: string[];
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

interface HorizontalScrollableSection {
  title: string;
  description: string;
  features: string[];
  scrollableSection: ScrollableSection;
}

interface ScrollableSection {
  titles: string[];
  descriptions: string[];
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

interface TableSection {
  title: string;
  hotLabel: string;
  planTitles: PlanTitles;
  billingFrequency: BillingFrequency;
  freePlanCard: FreePlanCard;
  features: Features;
  planStorage: PlanStorage;
}

interface BillingFrequency {
  annually: string;
  lifetime: string;
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
  individuals: string;
  lifetime: string;
  business: string;
}

interface WhyChooseSection {
  title: string;
  cards: ScrollableSection;
}
