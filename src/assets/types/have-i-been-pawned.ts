export interface HaveIbeenPwnedText {
  HeroSection: HeroSection;
  CtaSection: CtaSection;
  CtaSection2: CtaSection;
  FeatureSection: FeatureSection;
  FeatureSectionV2: FeatureSectionV2;
  InfoSection: InfoSection;
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
  toolTipEmergent: string;
  AllGoodSection: AllGoodSection;
  PwnedSection: PwnedSection;
}

export interface AllGoodSection {
  title: string;
  description: string;
  StaySecure: string;
}

export interface InfoSection {
  pwnedWebsites: string;
  pwnedWebsitesData: string;
  pwnedAccounts: string;
  pwnedAccountsData: string;
  pastes: string;
  pastesData: string;
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
