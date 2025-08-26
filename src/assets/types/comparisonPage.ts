export interface ComparisonPageText {
  HeroSection: HeroSection;
  HeaderSection: HeaderSection;
  VersusSection: VersusSection;
  isPCloudSafeSection: Section;
  CtaSection: CtaSection;
  CtaSection2: CtaSection;
  WhyChooseInxtSection: Section;
  tableSection: ComparisonPageTextTableSection;
  HorizontalScrollableSection: HorizontalScrollableSection;
  HorizontalScrollableSectionV2: HorizontalScrollableSectionV2;
}

export interface CtaSection {
  title: string;
  description: string;
  cta: string;
}

export interface HeaderSection {
  title: string;
  pCloudDescription: string;
  dropboxDescription: string;
  megaDescription: string;
  tableSection: HeaderSectionTableSection;
}

export interface HeaderSectionTableSection {
  comparisons: Comparisons;
  internxtFeatures: Comparisons;
  pcloudFeatures: Comparisons;
  megaFeatures: Comparisons;
  dropboxFeatures: Comparisons;
  drag: Drag;
}

export interface Comparisons {
  codeTransparency: string;
  encryption: string;
  postQuantumEncryption: string;
  pricing: string;
  features: string;
  securityAudits?: string;
  comunityAudits?: string;
  liveSupport: string;
  dataTrackers?: string;
  privacyPolicy?: string;
  privacyLaws: string;
}

export interface Drag {
  line1: string;
  line2: string;
}

export interface HeroSection {
  title: string;
  pCloudDescription: string;
  dropboxDescription: string;
  megaDescription: string;
  features: string[];
  getPrivacy: string;
  cta: string;
}

export interface HorizontalScrollableSection {
  HorizontalpCloudScrollableSection: HorizontalDropboxScrollableSectionClass;
  HorizontalDropboxScrollableSection: HorizontalDropboxScrollableSectionClass;
  HorizontalMegaScrollableSection: HorizontalMegaScrollableSection;
}

export interface HorizontalDropboxScrollableSectionClass {
  title: string;
  description: string;
  scrollableSection: ScrollableSection;
}

export interface ScrollableSection {
  titles: string[];
  descriptions: string[];
}

export interface HorizontalMegaScrollableSection {
  title: string;
  description: string;
  tile2: string;
  description2: string;
  scrollableSection: ScrollableSection;
}

export interface HorizontalScrollableSectionV2 {
  HorizontalpCloudScrollableSection: HorizontalDropboxScrollableSectionClass;
  HorizontalDropboxScrollableSection: HorizontalDropboxScrollableSectionClass;
  HorizontalMegaScrollableSection: HorizontalDropboxScrollableSectionClass;
}

export interface VersusSection {
  title: string;
  description: string;
  drag: Drag;
  mainTable: MainTable;
  costAndValue: CostAndValue;
  transparencyAndTrust: CostAndValue;
  userExpAndFeatures: CostAndValue;
  switchToInternxt: SwitchToInternxt;
}

export interface CostAndValue {
  title: string;
  inxtTable: Table;
  pCloudTable: Table;
}

export interface Table {
  title: string;
  features: Card[];
}

export interface Card {
  title: string;
  description: string;
}

export interface MainTable {
  inxtTable: Table;
  pCloudTable: Table;
}

export interface SwitchToInternxt {
  title: string;
  cta: string;
}

export interface Section {
  title: string;
  description: string;
  cards: Card[];
}

export interface ComparisonPageTextTableSection {
  title: string;
  planTitles: PlanTitles;
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
  individual: string;
  lifetime: string;
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
  getStarted: string;
  enjoy10gb: string;
  upTo: string;
  freeForever: string;
  cta: string;
}

export interface PlanStorage {
  essential: string;
  premium: string;
  ultimate: string;
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
