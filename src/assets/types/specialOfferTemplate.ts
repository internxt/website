export interface SpecialOfferText {
  HeroSection: HeroSection;
  ReviewSection: ReviewSection;
  TrustedBySection: TrustedBySection;
  NextGenSection: NextGenSection;
  ctaSection: NextGenSection;
  ctaSection2: NextGenSection;
  tableSection: TableSection;
  FeaturesSection: FeaturesSection;
}

export interface FeaturesSection {
  section1: Section;
  section2: Section2;
  section3: Section3;
  section4: Section4;
  section5: Section5;
  section6: Section;
  section7: Section7;
}

export interface Section {
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
  line4: string;
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
  products: Products;
  title: string;
  description: string;
  subtitle: string;
  claimDeal: string;
}

export interface Products {
  drive: string;
  antivirus: string;
  cleaner: string;
  vpn: string;
  meet: string;
  mail: string;
}

export interface NextGenSection {
  title: string;
  description: string;
  cta: string;
  cardDescriptions?: CardDescriptions;
  titleWithoutDiscount?: string;
  descriptionWithoutDisocunt?: string;
}

export interface CardDescriptions {
  titles: string[];
  descriptions: string[];
}

export interface ReviewSection {
  pcMag: string;
  mashable: string;
  pcWorld: string;
}

export interface TrustedBySection {
  title: string;
  review: string;
  author: string;
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
