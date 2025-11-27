export interface DegooAlternativePageText {
  HeroSection: HeroSection;
  HeaderSection: HeaderSection;
  VersusSection: VersusSection;
  CtaSection: CtaSection;
  CtaSection2: CtaSection;
  tableSection: DegooAlternativePageTextTableSection;
  HorizontalScrollableSection: HorizontalScrollableSection;
  HorizontalScrollableSectionV2: HorizontalScrollableSectionV2;
  FaqSection: FAQSection;
}

export interface CtaSection {
  title: string;
  description: string;
  cta: string;
}

export interface FAQSection {
  title: string;
  faq: FAQ[];
}

export interface FAQ {
  question: string;
  answer: string[];
}

export interface HeaderSection {
  title: string;
  description: string;
  tableSection: HeaderSectionTableSection;
}

export interface HeaderSectionTableSection {
  comparisons: string[];
  internxtFeatures: string[];
  competitorFeatures: string[];
}

export interface HeroSection {
  title: string;
  description: string;
  features: string[];
  getPrivacy: string;
  cta: string;
}

export interface HorizontalScrollableSection {
  title: string;
  description: string;
  tile2: string;
  description2: string;
  scrollableSection: ScrollableSection;
}

export interface ScrollableSection {
  titles: string[];
  descriptions: string[];
}

export interface HorizontalScrollableSectionV2 {
  title: string;
  description: string;
  scrollableSection: ScrollableSection;
}

export interface VersusSection {
  title: string;
  description: string;
  mainTable: MainTable;
  costAndValue: CostAndValue;
}

export interface CostAndValue {
  title: string;
  inxtTable: Table;
  competitorTable: Table;
}

export interface Table {
  title: string;
  features: Feature[];
}

export interface Feature {
  title: string;
  description: string;
}

export interface MainTable {
  inxtTable: InxtTable;
  competitorTable: Table;
}

export interface InxtTable {
  title: string;
  description: string;
  features: Feature[];
}

export interface DegooAlternativePageTextTableSection {
  title: string;
  hotLabel: string;
  planTitles: PlanTitles;
  billingFrequency: BillingFrequency;
  freePlanCard: FreePlanCard;
  features: Features;
  planStorage: PlanStorage;
}

export interface BillingFrequency {
  annually: string;
  lifetime: string;
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
