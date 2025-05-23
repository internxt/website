export interface MetadataRemoverText {
  HeroSection: HeroSection;
  FeaturesSection: FeaturesSection;
  FeaturesSlider: FeaturesSlider;
  FeaturesSliderImg: FeaturesSliderImg;
  CtaSection1: CtaSection1;
  CtaSection2: CtaSection2;
  FaqSection: FAQSection;
  ToolsSection: ToolsSection;
}
export interface FeaturesSlider {
  title: string;
  description: string;
  cards: Cards;
}
export interface FeaturesSliderImg {
  title: string;
  description: string;
  cards: Cards;
}
export interface Cards {
  openSource: EndToEnd;
  endToEnd: EndToEnd;
  zeroKnowledge: EndToEnd;
  gdpr: EndToEnd;
  noUnwantedAccess: EndToEnd;
  freeTools: EndToEnd;
}

export interface EndToEnd {
  title: string;
  description: string;
}
export interface CtaSection1 {
  title: string;
  description: string;
  cta: string;
  cards?: CtaSectionCard[];
}

export interface CtaSection2 {
  title: string;
  description: string;
  cta: string;
  cards?: CtaSectionCard[];
}

export interface CtaSectionCard {
  title: string;
  description: string;
}

export interface FAQSection {
  title: string;
  faq: FAQ[];
}

export interface FAQ {
  question: string;
  answer: string[];
}

export interface FeaturesSection {
  whyToScan: FreeOnlineScanner;
  virusesHatePrivacy: FreeOnlineScanner;
  stopMalware: FreeOnlineScanner;
  freeOnlineScanner: FreeOnlineScanner;
  scanFiles: FreeOnlineScanner;
}

export interface FreeOnlineScanner {
  title: string;
  description: string;
}

export interface HeroSection {
  title: string;
  subtitle1: string;
  subtitle2: string;
  secure: string;
  footer: string;
  dropFile: DropFile;
  fileSelected: string;
  download: string;
  cancel: string;
  close: string;
  scanNow: string;
  selectFile: string;
  dropHere: string;
  scanAgain: string;
  loading: string;
  maxFileSize: FreeOnlineScanner;
  table: Table;
  error: FreeOnlineScanner;
}

export interface DropFile {
  line1: string;
}

export interface Table {
  loading: string;
  virusDetected: string;
  noVirusDetected: string;
  detected: string;
  undetected: string;
  unableToProcess: string;
  noVirusesDetected: NoVirusesDetected;
  analyzing: string;
  scanTime: string;
  name: string;
  detection: string;
  metadataRemoved: string;
  automaticDownload: string;
}

export interface NoVirusesDetected {
  message: string;
  title: string;
  subtitle: string;
  cta: string;
}

export interface ToolsSection {
  title: string;
  toolsCard: ToolsCard[];
}

export interface ToolsCard {
  url: string;
  UrlRedirectName: string;
  width: number;
  title: string;
  description: string;
}
