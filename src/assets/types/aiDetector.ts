export interface AiDetectorText {
  HeroSection: HeroSection;
  FeaturesSection: FeaturesSection;
  CtaSection: CtaSection;
  FaqSection: FAQSection;
  ToolsSection: ToolsSection;
  FeaturesSliderImg: FeaturesSliderImg;
  FeaturesSlider: FeaturesSlider;
}

export interface FeaturesSliderImg {
  title: string;
  description: string;
  info: Cards;
}

export interface FeaturesSlider {
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

export interface CtaSectionCard {
  title: string;
  description: string;
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
  mainTitle: string;
  sybtitle: string;
  title: string;
  subtitle: string;
  placeholder: string;
  uploadButton: string;
  scanButton: string;
  scanningText: string;
  detectionScore: string;
  humanGeneratedText: string;
  minChars: string;
  maxChars: string;
  error: {
    minChars: string;
    apiError: string;
    invalidPdf: string;
    emptyPdf: string;
    emptyFile: string;
    pdfProcessingError: string;
    fileReadError: string;
    unsupportedFile: string;
  };
  likelyHumanText: string;
  likelyAiText: string;
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
