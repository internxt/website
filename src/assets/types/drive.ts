export interface DriveText {
  HeroSection: HeroSection;
  tableSection: TableSection;
  DriveSection: DriveSection;
  EncryptedCloudStorageSection: EncryptedCloudStorageSection;
  CoreFeatures: CoreFeatures;
  AllInOnePrivacySection: AllInOnePrivacySection;
  MadeInEuropeSection: MadeInEuropeSection;
  OfficalCloudProvider: OfficalCloudProvider;
  CtaSection: CtaSection;
  DownloadSection: DownloadSection;
  AdvancedToolsSection: AdvancedToolsSection;
  ReviewSection: ReviewSection;
  FaqSection: FAQSection;
}

export interface AdvancedToolsSection {
  title: string;
  description: string;
  powerUsers: PowerUsers;
  webDAV: CtaSection;
  Rclone: NAS;
  NAS: NAS;
}

export interface NAS {
  title: string;
  comingSoon: string;
  description: string;
}

export interface PowerUsers {
  title: string;
  description: string;
  install: Install;
  available: string;
  learnMore: LearnMore;
}

export interface Install {
  title: string;
  command: string;
}

export interface LearnMore {
  title: string;
  GitHub: string;
  learnMore: string;
}

export interface CtaSection {
  title: string;
  description: string;
  cta: string;
}

export interface AllInOnePrivacySection {
  title: string;
  scrollableSection: ScrollableSection;
}

export interface ScrollableSection {
  titles: string[];
  descriptions: string[];
}

export interface CoreFeatures {
  title: string;
  description: string;
  accordionCards: ScrollableSection;
  cards: ScrollableSection;
}

export interface DownloadSection {
  downloadTitle: string;
  Desktop: string;
  Web: string;
  Mobile: string;
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

export interface DriveSection {
  title: string;
  description: string[];
}

export interface EncryptedCloudStorageSection {
  title: string;
  description: string;
  scrollableSection: ScrollableSection;
}

export interface FAQSection {
  title: string;
  faq: FAQ[];
}

export interface FAQ {
  question: string;
  answer: string[];
}

export interface HeroSection {
  eyebrow: string;
  title: string;
  subtitle: string;
  features: string[];
  cta: string;
  DownloadSection: DownloadSection;
}

export interface MadeInEuropeSection {
  title: string;
  description: string;
  cards: Cards;
}

export interface Cards {
  images: string[];
  imagesMobile: string[];
  titles: string[];
  descriptions: string[];
  cta: string[];
}

export interface OfficalCloudProvider {
  title: string;
  description: string[];
  cta: string;
}

export interface ReviewSection {
  pcMag: string;
  mashable: string;
  pcWorld: string;
}

export interface TableSection {
  title: string;
  hotLabel: string;
  planTitles: PlanTitles;
  lifetimeDescription: string;
  planDescription: string;
  businessDescription: string;
  businessDescription2: string;
  billingFrequency: BillingFrequency;
  freePlanCard: FreePlanCard;
  features: Features;
  planStorage: PlanStorage;
}

export interface BillingFrequency {
  monthly: string;
  annually: string;
  lifetime: string;
  individual: string;
  business: string;
}

export interface Features {
  endToEnd: string;
  openSource: string;
  anonymousAccount: string;
  premiumSupport: string;
  guarantee: string;
}

export interface FreePlanCard {
  eyeBrow: string;
  description: string;
  cta: string;
}

export interface PlanStorage {
  essential: string;
  premium: string;
  ultimate: string;
}

export interface PlanTitles {
  header: string;
  individuals: string;
  homePage: string;
  lifetime: string;
  business: string;
  lifetimeCampaign: LifetimeCampaign;
}

export interface LifetimeCampaign {
  blueText: string;
  normalText: string;
}
