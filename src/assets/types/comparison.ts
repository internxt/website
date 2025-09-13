export interface ComparisonText {
  HeroSection: HeroSection;
  HeaderSection: HeaderSection;
  VersusSection: VersusSection;
  UseCodeSection: UseCodeSection;
  isPCloudSafeSection: Section;
  CtaSection: CtaSection;
  CtaSection2: CtaSection;
  WhyChooseInxtSection: Section;
  tableSection: ComparisonTextTableSection;
  HorizontalScrollableSection: HorizontalScrollableSection;
  HorizontalScrollableSectionV2: HorizontalScrollableSection;
}

export interface CtaSection {
  title: string;
  description: string;
  cta: string;
}

export interface HeaderSection {
  title: string;
  description: string;
  tableSection: HeaderSectionTableSection;
}

export interface HeaderSectionTableSection {
  comparisons: Comparisons;
  internxtFeatures: Comparisons;
  features: Comparisons;
  drag: Drag;
}

export interface Comparisons {
  codeTransparency: string;
  encryption: string;
  postQuantumEncryption: string;
  pricing: string;
  features: string;
  comunityAudits: string;
  liveSupport: string;
  dataTrackers: string;
  privacyLaws: string;
}

export interface Drag {
  line1: string;
  line2: string;
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
  scrollableSection: ScrollableSection;
}

export interface ScrollableSection {
  titles: string[];
  descriptions: string[];
}

export interface UseCodeSection {
  title: Title;
  cta: string;
}

export interface Title {
  line1: string;
  code: string;
  line2: string;
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

export interface ComparisonTextTableSection {
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
