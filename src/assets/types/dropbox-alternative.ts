export interface DropboxAlternativeText {
  HeaderSection: HeaderSection;
  HeroSection: HeroSection;
  IsDropboxSafeSection: IsDropboxSafeSection;
  CtaSection: CtaSection;
  TablesSection: TablesSection;
  UseCodeSection: UseCodeSection;
  WhyChooseInxtSection: WhyChooseInxtSection;
}

export interface CtaSection {
  title: string;
  description: string;
  cta: string;
}

export interface HeaderSection {
  title: string;
  description: string;
  useCode: UseCode;
  cta: string;
}

export interface Title {
  line1: string;
  line2: string;
}

export interface UseCode {
  line1: string;
  code: string;
  line2: string;
}

export interface HeroSection {
  title: string;
  description: string;
  tableSection: TableSection;
}

export interface TableSection {
  comparisons: Comparisons;
  internxtFeatures: Comparisons;
  features: Comparisons;
  drag: Title;
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
