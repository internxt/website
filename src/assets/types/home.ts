import type { FAQ, FAQSection, PlanStorage, StartFrom } from './common';
export type { FAQ, FAQSection, PlanStorage, StartFrom };
export interface HomeText {
  HeroSection: HeroSection;
  tableSection: TableSection;
  FaqSection: FAQSection;
  EncryptedStorageSeoSection: FAQSection;
  TestimonialsSection: TestimonialsSection;
  ReviewSection: ReviewSection;
  OfficalCloudProvider: OfficalCloudProvider;
  AwardWinningSection: Section;
  NextGenSection: Section;
  TrustedBySection: TrustedBySection;
}

export interface Section {
  title: string;
  description: string;
  subtitle?: string;
  cta: string;
  cardDescriptions?: CardDescriptions;
}

export interface CardDescriptions {
  titles: string[];
  descriptions: string[];
}

export interface HeroSection {
  products: Products;
  SignUp: SignUp;
  title: string;
  subtitle: Subtitle;
  description: string;
  descriptionNormal: string;
  features: string[];
  giftDescription: GiftDescription;
  startFrom: StartFrom;
  claimDeal: string;
  guarantee: string;
}

export interface SignUp {
  cta: Cta;
  disclaimer: Disclaimer;
  fields: Fields;
}

export interface Cta {
  title: string;
  subtitle: string;
}

export interface Disclaimer {
  text: string;
  link: string;
}

export interface Fields {
  email: Email;
  password: Password;
  submit: Submit;
}

export interface Email {
  label: string;
  placeholder: string;
}

export interface Password {
  label: string;
  placeholder: string;
  strength: Strength;
}

export interface Strength {
  complexity: string;
  length: string;
  weak: string;
  strong: string;
}

export interface Submit {
  get: string;
  free: string;
}

export interface GiftDescription {
  line1: string;
  line2: string;
}

export interface Products {
  drive: string;
  antivirus: string;
  cleaner: string;
  vpn: string;
  meet: string;
  mail: string;
  photos: string;
}

export interface Subtitle {
  part1: string;
  part2: string;
}

export interface OfficalCloudProvider {
  title: string;
  description: string[];
  cta: string;
}

export interface ReviewSection {
  forbes: string;
  deloitte: string;
  techradar: string;
  fortune: string;
  trustpilot: string;
}

export interface TestimonialsSection {
  title: Title;
  cards: Card[];
}

export interface Card {
  name: string;
  enterprise: string;
  review: string;
}

export interface Title {
  normal: string;
  blue: string;
}

export interface TrustedBySection {
  description: string;
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
