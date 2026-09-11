import { CloudObjectStorageText } from './cloud-object-storage';

export interface AlternativePageText {
  HeroSection: Section;
  HeaderSection: HeaderSection;
  PrivacyViolationsSection: PrivacyViolationsSection;
  WhyNeedAlternativeSection: WhyNeedAlternativeSection;
  VersusSection: VersusSection;
  WhyBestAlternativeSection: WhyBestAlternativeSection;
  CtaSection: Section;
  tableSection: IcedriveAlternativePageTextTableSection;
  FaqSection: FAQSection;
  PriceCardSection?: CloudObjectStorageText['PriceCardSection'];
}

interface Section {
  title: string;
  description: string;
  cta: string;
  getPrivacy?: string;
}

interface FAQSection {
  title: string;
  faq: FAQ[];
}

interface FAQ {
  question: string;
  answer: string[];
}

interface HeaderSection {
  title: string;
  description: string;
  tableSection: HeaderSectionTableSection;
}

interface HeaderSectionTableSection {
  comparisons: string[];
  internxtFeatures: string[];
  competitorFeatures: string[];
}

interface PrivacyViolationsSection {
  title: string;
  description: string;
  scrollableSection: ScrollableSection;
}

interface ScrollableSection {
  titles: string[];
  descriptions: string[];
}

interface VersusSection {
  title: string;
  description: string;
  mainTable: MainTable;
}

interface MainTable {
  inxtTable: Table;
  competitorTable: Table;
}

interface Table {
  title: string;
  features: Feature[];
}

interface Feature {
  title: string;
  description: string;
}

interface WhyBestAlternativeSection {
  title: string;
  description: string;
  scrollableSection: WhyBestAlternativeSectionScrollableSection;
}

interface WhyBestAlternativeSectionScrollableSection {
  imagesPathname: string[];
  titles: string[];
  descriptions: string[];
}

interface WhyNeedAlternativeSection {
  title: string;
  description: string;
  cards: ScrollableSection;
}

interface IcedriveAlternativePageTextTableSection {
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
}
