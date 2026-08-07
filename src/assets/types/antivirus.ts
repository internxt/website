export interface AntivirusText {
  HeroSection: HeroSection;
  cta1: Cta;
  cta2: Cta;
  FaqSection: FAQSection;
  ComponentsInColumn: ComponentsInColumn;
  FeatureSection: ComponentsInColumn;
  FeatureSectionV2: FeatureSectionV2;
  InfoSection: InfoSection;
  InfoSectionV2: InfoSectionV2;
}

interface ComponentsInColumn {
  title: string;
  titleLine2: string;
  description: string;
  cta: string;
  cards: ComponentsInColumnCards;
}

interface ComponentsInColumnCards {
  element1: Element4Class;
  element2: Element4Class;
  element3: Element4Class;
  element4: Element4Class;
}

interface Element4Class {
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

interface FeatureSectionV2 {
  title: string;
  description: string;
  cards: FeatureSectionV2Cards;
}

interface FeatureSectionV2Cards {
  element1: PurpleElement;
  element2: PurpleElement;
  element3: PurpleElement;
}

interface PurpleElement {
  description: string;
}

interface HeroSection {
  title: string;
  blueText: string;
  description: string;
  eyeBrow: string;
  DownloadLinks: DownloadLinks;
}

interface DownloadLinks {
  downloadTitle: string;
  downloadForMac: string;
  downloadForWindows: string;
  downloadForLinux: string;
}

interface InfoSection {
  Percentage: string;
  PercentageText: string;
  MalwareRegisteredDaily: string;
  MalwareRegisteredDailyText: string;
  MalwareAttacks: string;
  MalwareAttacksText: string;
}

interface InfoSectionV2 {
  AntivirusProtection: string;
  RemoveMalware: string;
  DeviceProtection: string;
}

interface Cta {
  title: string;
  subtitle: string;
  cta: string;
}
