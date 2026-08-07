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

interface Section {
  title: string;
  description: string;
  subtitle?: string;
  cta: string;
  cardDescriptions?: CardDescriptions;
}

interface CardDescriptions {
  titles: string[];
  descriptions: string[];
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

interface SignUp {
  cta: Cta;
  disclaimer: Disclaimer;
  fields: Fields;
}

interface Cta {
  title: string;
  subtitle: string;
}

interface Disclaimer {
  text: string;
  link: string;
}

interface Fields {
  email: Email;
  password: Password;
  submit: Submit;
}

interface Email {
  label: string;
  placeholder: string;
}

interface Password {
  label: string;
  placeholder: string;
  strength: Strength;
}

interface Strength {
  complexity: string;
  length: string;
  weak: string;
  strong: string;
}

interface Submit {
  get: string;
  free: string;
}

interface GiftDescription {
  line1: string;
  line2: string;
}

interface Products {
  drive: string;
  antivirus: string;
  cleaner: string;
  vpn: string;
  meet: string;
  mail: string;
  ai: string;
}

interface StartFrom {
  normal1: string;
  price: string;
  normal2: string;
}

interface Subtitle {
  part1: string;
  part2: string;
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

interface TestimonialsSection {
  title: Title;
  cards: Card[];
}

interface Card {
  name: string;
  enterprise: string;
  review: string;
}

interface Title {
  normal: string;
  blue: string;
}

interface TrustedBySection {
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
