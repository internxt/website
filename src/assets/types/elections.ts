export interface ElectionsText {
  elections: Elections;
}

interface Elections {
  CtaSection: CtaSection;
  FeatureSection: FeatureSection;
  TestimonialsSection: TestimonialsSection;
  GetLifetimeSection: GetLifetimeSection;
  HeroSection: HeroSection;
  PaymentSection: PaymentSection;
}

interface CtaSection {
  title: string;
  description: string;
  cta: string;
}

interface FeatureSection {
  title: string;
  description: string;
  cta: string;
  feature1: GetLifetimeSection;
  feature2: GetLifetimeSection;
  feature3: GetLifetimeSection;
  feature4: GetLifetimeSection;
}

interface GetLifetimeSection {
  title: string;
  description: string;
}

interface HeroSection {
  title: string;
  description: string;
  maintenance: string;
  cta1: string;
  cta2: string;
}

interface PaymentSection {
  limitedOffer: string;
  title: Title;
  description: Description;
  normalSection: GetLifetimeSection;
  securePayment: string;
  features: Features;
  PlanSelector: PlanSelector;
}

interface PlanSelector {
  Trump: string;
  Kamala: string;
}

interface Description {
  blueText: string;
  normalText: string;
  normalText2: string;
}

interface Features {
  endToEnd: string;
  openSource: string;
  anonymousAccount: string;
}

interface Title {
  blueText: string;
  normalText: string;
}

interface TestimonialsSection {
  title: string;
  cards: Card[];
}

interface Card {
  name: string;
  enterprise: string;
  review: string;
}
