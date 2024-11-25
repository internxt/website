export interface HaveIbeenPwnedText {
  HeroSection: HeroSection;
  InfoSection: InfoSection;
  CtaSection: CtaSection;
  CtaSection2: CtaSection;
  FeatureSection: FeatureSection;
  FeatureSectionV2: FeatureSectionV2;
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
  AllGoodSection: AllGoodSection;
  EmailToolBar: EmailToolBar;
  breaches: Breaches;
  PwnedSection: PwnedSection;
}

export interface AllGoodSection {
  title: string;
  description: string;
  StaySecure: string;
}

export interface EmailToolBar {
  placeHolder: string;
  toolTip: string;
  toolTipEmergent: string;
  pleaseEnterEmail: string;
  noBreachesFound: string;
  errorPwned: string;
  check: string;
  checking: string;
}

export interface PwnedSection {
  title: string;
  description: string;
  recomendation: string;
  breachesSection: BreachesSection;
  pwnedElement: PwnedElement;
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

export interface PwnedElement {
  compromisedData: string;
  name: string;
  title: string;
  domain: string;
  BreachDate: Date;
  addedDate: Date;
  modifiedDate: Date;
  pwnCount: number;
  description: string;
  logoPath: string;
  dataClasses: string[];
  isVerified: boolean;
  isFabricated: boolean;
  isSensitive: boolean;
  isRetired: boolean;
  isSpamList: boolean;
  isMalware: boolean;
  isSubscriptionFree: boolean;
}

export interface Breaches {
  error405: string;
  error400: string;
  error500: string;
}

export interface InfoSection {
  pwnedWebsites: string;
  pwnedWebsitesData: string;
  pwnedAccounts: string;
  pwnedAccountsData: string;
  pastes: string;
  pastesData: string;
}
