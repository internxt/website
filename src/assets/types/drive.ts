export interface DriveText {
  HeroSection: HeroSection;
  CliCard: CLICard;
  FeaturesSection: FeaturesSection;
  FaqSection: FAQSection;
  FeatureSection: Section;
  CtaSection: Section;
}

export interface CLICard {
  new: string;
  title: CLICardTitle;
  description: string;
  installCli: string;
  command: string;
  available: string;
  feeds: Feed[];
  learnMore: string;
  readme: string;
  userGuide: string;
}

export interface Feed {
  title: string;
  description: string;
}

export interface CLICardTitle {
  bold: string;
  normal: string;
}

export interface Section {
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
  section1: Section1Class;
  section2: Section2;
  section3: Section3;
  section4: Section4;
  section5: Section5;
  section6: Section1Class;
  section7: Section7;
  DownloadLinks: DownloadLinks;
}

export interface DownloadLinks {
  or: string;
  downloadFor: string;
  orDownloadFor: string;
  downloadOnThe: string;
  orDownloadOnThe: string;
  getOn: string;
  orGetOn: string;
  openDriveWeb: string;
  iPhone: string;
  iPad: string;
  Android: string;
  Windows: string;
  Linux: string;
  UNIX: string;
  MacOS: string;
}

export interface Section1Class {
  title: Section1Title;
}

export interface Section1Title {
  line1: string;
  line2: string;
}

export interface Section2 {
  title: Section4Title;
  subtitle: Section2Subtitle;
}

export interface Section2Subtitle {
  line1: string;
  line2: string;
  line3: string;
  line4?: string;
  line5?: string;
}

export interface Section4Title {
  line1: string;
  line2: string;
  line3: string;
}

export interface Section3 {
  title: Section2Subtitle;
  subtitle: Subtitle;
}

export interface Subtitle {
  line1: string;
  line2: string;
  line3: string;
  line4: string;
  line5: string;
  line6: string;
  line7: string;
  line8?: string;
}

export interface Section4 {
  title: Section4Title;
  subtitle: Subtitle;
}

export interface Section5 {
  eyebrow: string;
  title: Section1Title;
  subtitle: Section2Subtitle;
}

export interface Section7 {
  title: Section1Title;
  subtitle: Section1Title;
  cta: string;
  card1: Card;
  card2: Card;
  card3: Card;
  card4: Card;
}

export interface Card {
  title: string;
  subtitle: string;
}

export interface HeroSection {
  eyebrow: string;
  title: Section1Title;
  subtitle: Section2Subtitle;
  DownloadLinks: DownloadLinks;
}
