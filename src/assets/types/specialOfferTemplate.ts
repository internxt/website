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

interface FeaturesSection {
  section1: Section;
  section2: Section2;
  section3: Section3;
  section4: Section4;
  section5: Section5;
  section6: Section;
  section7: Section7;
}

interface Section {
  title: Section1Title;
}

interface Section1Title {
  line1: string;
  line2: string;
}

interface Section2 {
  title: Section4Title;
  subtitle: Section2Subtitle;
}

interface Section2Subtitle {
  line1: string;
  line2: string;
  line3: string;
  line4: string;
  line5?: string;
}

interface Section4Title {
  line1: string;
  line2: string;
  line3: string;
}

interface Section3 {
  title: Section2Subtitle;
  subtitle: Subtitle;
}

interface Subtitle {
  line1: string;
  line2: string;
  line3: string;
  line4: string;
  line5: string;
  line6: string;
  line7: string;
  line8?: string;
}

interface Section4 {
  title: Section4Title;
  subtitle: Subtitle;
}

interface Section5 {
  eyebrow: string;
  title: Section1Title;
  subtitle: Section2Subtitle;
}

interface Section7 {
  title: Section1Title;
  subtitle: Section1Title;
  cta: string;
  card1: Card;
  card2: Card;
  card3: Card;
  card4: Card;
}

interface Card {
  title: string;
  subtitle: string;
}

interface HeroSection {
  products: Products;
  title: string;
  description: string;
  subtitle: string;
  subtitle2: string;
  claimDeal: string;
}

interface Products {
  drive: string;
  antivirus: string;
  cleaner: string;
  vpn: string;
  meet: string;
  mail: string;
}

interface NextGenSection {
  title: string;
  description: string;
  cta: string;
  cardDescriptions?: CardDescriptions;
  titleWithoutDiscount?: string;
  descriptionWithoutDisocunt?: string;
}

interface CardDescriptions {
  titles: string[];
  descriptions: string[];
}

interface ReviewSection {
  forbes: string;
  deloitte: string;
  techradar: string;
  fortune: string;
  trustpilot: string;
}

interface TrustedBySection {
  description: string;
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
