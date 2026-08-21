export interface VirusScannerText {
  HeroSection: HeroSection;
  FeaturesSection: FeaturesSection;
  CtaSection: CtaSection;
  FaqSection: FAQSection;
  ToolsSection: ToolsSection;
}

interface CtaSection {
  title: string;
  description: string;
  cta: string;
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
  footer: string;
  dropFile: DropFile;
  fileSelected: string;
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
