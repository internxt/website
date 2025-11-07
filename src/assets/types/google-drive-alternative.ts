export interface GooglDriveAlternativePageText {
  HeroSection: CtaSection;
  HeaderSection: HeaderSection;
  PrivacyViolationsSection: PrivacyViolationsSection;
  WhyNeedAlternativeSection: WhyNeedAlternativeSection;
  VersusSection: VersusSection;
  WhyBestAlternativeSection: WhyBestAlternativeSection;
  CtaSection: CtaSection;
  CtaSection2: CtaSection;
  tableSection: GooglDrivePageTextTableSection;
  FaqSection: FAQSection;
}

export interface CtaSection {
  title: string;
  description: string;
  cta: string;
  getPrivacy?: string;
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

export interface PrivacyViolationsSection {
  title: string;
  description: string;
  scrollableSection: ScrollableSection;
}

export interface ScrollableSection {
  titles: string[];
  descriptions: string[];
}

export interface VersusSection {
  title: string;
  description: string;
  mainTable: MainTable;
}

export interface MainTable {
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

export interface WhyBestAlternativeSection {
  title: string;
  description: string;
  scrollableSection: WhyBestAlternativeSectionScrollableSection;
}

export interface WhyBestAlternativeSectionScrollableSection {
  imagesPathname: string[];
  titles: string[];
  descriptions: string[];
}

export interface WhyNeedAlternativeSection {
  title: string;
  description: string;
  cards: ScrollableSection;
}

export interface GooglDrivePageTextTableSection {
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
