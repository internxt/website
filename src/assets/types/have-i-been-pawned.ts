export interface HaveIbeenPwnedText {
  HeroSection: HeroSection;
  InfoSection: InfoSection;
  AllGoodSection: AllGoodSection;
  PwnedSection: PwnedSection;
  CtaSection: CtaSection;
  CtaSection2: CtaSection;
  FeatureSection: FeatureSection;
  FeatureSectionV2: FeatureSectionV2;
}

export interface AllGoodSection {
  title: string;
  description: string;
  StaySecure: string;
}

export interface CtaSection {
  title: string;
  description: string;
  cta: string;
  redirect?: string;
}

export interface FeatureSection {
  title: string;
  description: string;
  description2: string;
  cards: CtaSection[];
}

export interface FeatureSectionV2 {
  title: string;
  description: string;
  cards: Card[];
}

export interface Card {
  title: string;
  description: string;
}

export interface HeroSection {
  tagline: string;
  title: string;
  subtitle: string;
  description: string;
  placeHolder: string;
  toolTip: string;
}

export interface InfoSection {
  pwnedWebsites: string;
  pwnedAccounts: string;
  pastes: string;
}

export interface PwnedSection {
  title: string;
  description: string;
  recomendation: string;
  breachesSection: BreachesSection;
}

export interface BreachesSection {
  title: string;
  description: string;
  linkToPasswordGenerator: LinkToPasswordGenerator;
}

export interface LinkToPasswordGenerator {
  linkText: string;
  otherText: string;
}
