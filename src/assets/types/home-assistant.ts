export interface HomeAssistantText {
    HeroSection: HeroSection;
    MadeInEuropeSection: MadeInEuropeSection;
    TableSection: TableSection;
    TrustedBySection: TrustedBySection;
    ThreeCardsSection: ThreeCardsSection;
    CoreFeatures: CoreFeatures;
    ReviewSection: ReviewSection;
}

interface HeroSection {
  title: string;
  description: string;
  features: string[];
  guarantee: string;
  claimDeal: string;
}

interface ReviewSection {
  forbes: string;
  deloitte: string;
  techradar: string;
  fortune: string;
  trustpilot: string;
}

interface MadeInEuropeSection {
  title: string;
  description: string;
  cards: Sections;
}

interface Sections {
  images: string[];
  imagesMobile: string[];
  titles: string[];
  descriptions: string[];
  cta: string[];
}

interface ThreeCardsSection {
  title: string;
  description: string;
  cards: Cards;
}

interface Cards {
  titles: string[];
  descriptions: string[];
}

interface CoreFeatures {
  title: string;
  description: string;
  accordionCards: ScrollableSection;
  cards: ScrollableSection;
}

interface ScrollableSection {
  titles: string[];
  descriptions: string[];
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

interface PlanTitles {
  header: string;
  individuals: string;
  homePage: string;
  lifetime: string;
  business: string;
  lifetimeCampaign: LifetimeCampaign;
}

interface BillingFrequency {
  monthly: string;
  annually: string;
  lifetime: string;
  individual: string;
  business: string;
}
interface FreePlanCard {
  eyeBrow: string;
  description: string;
  cta: string;
}

interface Features {
  endToEnd: string;
  openSource: string;
  anonymousAccount: string;
  premiumSupport: string;
  guarantee: string;
}

interface PlanStorage {
  essential: string;
  premium: string;
  ultimate: string;
}

interface LifetimeCampaign {
  blueText: string;
  normalText: string;
}

interface TrustedBySection {
  description: string;
}