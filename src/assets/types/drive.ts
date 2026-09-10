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
  SecureStorageSeoSection: FAQSection;
}

interface AdvancedToolsSection {
  title: string;
  description: string;
  powerUsers: PowerUsers;
  webDAV: CtaSection;
  Rclone: CtaSection;
  NAS: CtaSection;
}

interface CtaSection {
  title: string;
  cta: string;
  description: string;
}

interface PowerUsers {
  title: string;
  description: string;
  install: Install;
  available: string;
  learnMore: LearnMore;
}

interface Install {
  title: string;
  command: string;
}

interface LearnMore {
  title: string;
  GitHub: string;
  learnMore: string;
}

interface AllInOnePrivacySection {
  title: string;
  scrollableSection: ScrollableSection;
}

interface ScrollableSection {
  titles: string[];
  descriptions: string[];
}

interface CoreFeatures {
  title: string;
  description: string;
  accordionCards: ScrollableSection;
  cards: ScrollableSection;
}

interface DownloadSection {
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

interface DriveSection {
  title: string;
  description: string[];
}

interface EncryptedCloudStorageSection {
  title: string;
  description: string;
  scrollableSection: ScrollableSection;
}

interface FAQSection {
  title: string;
  faq: FAQ[];
}

interface FAQ {
  question: string;
  answer: string[];
}

interface HeroSection {
  eyebrow: string;
  title: string;
  subtitle: string;
  features: string[];
  cta: string;
  DownloadSection: DownloadSection;
}

interface MadeInEuropeSection {
  title: string;
  description: string;
  cards: Cards;
}

interface Cards {
  images: string[];
  imagesMobile: string[];
  titles: string[];
  descriptions: string[];
  cta: string[];
}

interface OfficalCloudProvider {
  title: string;
  description: string[];
  cta: string;
}

interface ReviewSection {
  forbes: string;
  deloitte: string;
  techradar: string;
  fortune: string;
  trustpilot: string;
}

interface TableSection {
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

interface BillingFrequency {
  monthly: string;
  annually: string;
  lifetime: string;
  individual: string;
  business: string;
}

interface Features {
  endToEnd: string;
  openSource: string;
  anonymousAccount: string;
  premiumSupport: string;
  guarantee: string;
}

interface FreePlanCard {
  eyeBrow: string;
  description: string;
  cta: string;
}

interface PlanStorage {
  essential: string;
  premium: string;
  ultimate: string;
}

interface PlanTitles {
  header: string;
  individuals: string;
  homePage: string;
  lifetime: string;
  business: string;
  lifetimeCampaign: LifetimeCampaign;
}

interface LifetimeCampaign {
  blueText: string;
  normalText: string;
}
