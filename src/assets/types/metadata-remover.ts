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
interface FeaturesSlider {
  title: string;
  description: string;
  cards: Cards;
}
interface FeaturesSliderImg {
  title: string;
  description: string;
  cards: Cards;
}
interface Cards {
  openSource: EndToEnd;
  endToEnd: EndToEnd;
  zeroKnowledge: EndToEnd;
  gdpr: EndToEnd;
  noUnwantedAccess: EndToEnd;
  freeTools: EndToEnd;
}

interface EndToEnd {
  title: string;
  description: string;
}
interface CtaSection1 {
  title: string;
  description: string;
  cta: string;
  cards?: CtaSectionCard[];
}

interface CtaSection2 {
  title: string;
  description: string;
  cta: string;
  cards?: CtaSectionCard[];
}

interface CtaSectionCard {
  title: string;
  description: string;
}

interface FAQSection {
  title: string;
  faq: FAQ[];
}

interface FAQ {
  question: string;
  answer: string[];
}

interface FeaturesSection {
  whyToScan: FreeOnlineScanner;
  virusesHatePrivacy: FreeOnlineScanner;
  stopMalware: FreeOnlineScanner;
  freeOnlineScanner: FreeOnlineScanner;
  scanFiles: FreeOnlineScanner;
}

interface FreeOnlineScanner {
  title: string;
  description: string;
}

interface HeroSection {
  title: string;
  subtitle1: string;
  subtitle2: string;
  secure: string;
  footer: string;
  dropFile: DropFile;
  fileSelected: string;
  download: string;
  cancel: string;
  removeMetadata: string;
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

interface DropFile {
  line1: string;
}

interface Table {
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

interface NoVirusesDetected {
  message: string;
  title: string;
  subtitle: string;
  cta: string;
}

interface ToolsSection {
  title: string;
  toolsCard: ToolsCard[];
}

interface ToolsCard {
  url: string;
  UrlRedirectName: string;
  width: number;
  title: string;
  description: string;
}
