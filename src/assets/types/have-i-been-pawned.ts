export interface HaveIbeenPwnedText {
  HeroSection: HeroSection;
  InfoSection: InfoSection;
  CtaSection: CtaSection;
  CtaSection2: CtaSection;
  FeatureSection: FeatureSection;
  FeatureSectionV2: FeatureSectionV2;
  Pastes: Paste;
  Breaches: Breach;
}

interface CtaSection {
  title: string;
  description: string;
  cta: string;
  redirect: string;
}

interface FeatureSection {
  title: string;
  description: string;
  description2: string;
  cards: CtaSection;
}

interface FeatureSectionV2 {
  title: string;
  description: string;
  cards: Card[];
}

interface Card {
  title: string;
  description: string;
}

interface HeroSection {
  title: string;
  subtitle: string;
  description: string;
  AllGoodSection: AllGoodSection;
  EmailToolBar: EmailToolBar;
  breaches: Breaches;
  PwnedSection: PwnedSection;
}

interface AllGoodSection {
  title: string;
  description: string;
  StaySecure: string;
}

interface EmailToolBar {
  placeHolder: string;
  toolTip: string;
  toolTipEmergent: string;
  pleaseEnterEmail: string;
  noBreachesFound: string;
  errorPwned: string;
  check: string;
  checking: string;
}

interface PwnedSection {
  title: string;
  description: string;
  breaches: string;
  breach: string;
  paste: string;
  pastes: string;
  recomendation: string;
  breachesSection: BreachesSection;
  compromisedData: string;
}

interface BreachesSection {
  title: string;
  description: string;
  linkToPasswordGenerator: LinkToPasswordGenerator;
}

interface LinkToPasswordGenerator {
  previousText: string;
  linkText: string;
  otherText: string;
}

interface Breaches {
  error405: string;
  error400: string;
  error500: string;
}

interface InfoSection {
  pwnedWebsites: string;
  pwnedWebsitesData: string;
  pwnedAccounts: string;
  pwnedAccountsData: string;
  pastes: string;
  pastesData: string;
}

export interface Paste {
  Source:
    | 'Pastebin'
    | 'Pastie'
    | 'Slexy'
    | 'Ghostbin'
    | 'QuickLeak'
    | 'JustPaste'
    | 'AdHocUrl'
    | 'PermanentOptOut'
    | 'OptOut';
  Id: string;
  Title?: string | null;
  Date?: string | null;
  EmailCount: number;
}

export interface Breach {
  Name: string;
  Title: string;
  Domain: string;
  BreachDate: string;
  AddedDate: string;
  ModifiedDate: string;
  PwnCount: number;
  Description: string;
  DataClasses: string[];
  IsVerified: boolean;
  IsFabricated: boolean;
  IsSensitive: boolean;
  IsRetired: boolean;
  IsSpamList: boolean;
  IsMalware: boolean;
  IsSubscriptionFree: boolean;
  LogoPath: string;
}
