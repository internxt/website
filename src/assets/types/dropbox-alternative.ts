export interface DropboxAlternativeText {
  HeaderSection: Section;
  HeroSection: HeroSection;
  IsDropboxSafeSection: IsDropboxSafeSection;
  CtaSection: Section;
  TablesSection: TablesSection;
  UseCodeSection: UseCodeSection;
  WhyChooseInxtSection: WhyChooseInxtSection;
  tableSection: DropboxAlternativeTextTableSection;
}

export interface Section {
  title: string;
  description: string;
  cta: string;
  useCode?: UseCode;
}

export interface UseCode {
  line1: string;
  code: string;
  line2: string;
}

export interface HeroSection {
  title: string;
  description: string;
  tableSection: HeroSectionTableSection;
}

export interface HeroSectionTableSection {
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
  securityAudits: string;
  liveSupport: string;
  dataTrackers: string;
  privacyLaws: string;
}

export interface Drag {
  line1: string;
  line2: string;
}

export interface IsDropboxSafeSection {
  title: string;
  description: string;
  breaches: Breach[];
}

export interface Breach {
  title: string;
  description: string;
}

export interface TablesSection {
  title: string;
  description: string;
  tables: TableElement[];
}

export interface TableElement {
  title: string;
  inxtTable: InxtTableClass;
  table: InxtTableClass;
}

export interface InxtTableClass {
  title: string;
  features: Breach[];
}

export interface UseCodeSection {
  title: UseCode;
  cta: string;
}

export interface WhyChooseInxtSection {
  title: string;
  description: string;
  cards: Breach[];
}

export interface DropboxAlternativeTextTableSection {
  planTitles: PlanTitles;
  lifetimeDescription: string;
  planDescription: string;
  businessDescription: string;
  businessDescription2: string;
  billingFrequency: BillingFrequency;
  freePlanCard: FreePlanCard;
  features: Features;
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
