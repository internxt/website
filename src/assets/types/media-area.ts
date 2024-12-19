export interface MediaAreaText {
  HeroSection: FeatureSection;
  StandForPrivacySection: StandForPrivacySection;
  KitSection: KitSection;
  CtaSection: CtaSection;
  ProductsSection: ProductsSection;
  InvestorsSection: InvestorsSection;
  FeatureSection: FeatureSection;
  InternxtInTheNewsSection: InternxtInTheNewsSection;
  AnalysisSection: AnalysisSection;
}

export interface AnalysisSection {
  title: string;
  description: string;
  cards: string[];
}

export interface CtaSection {
  title: string;
  cta: string;
}

export interface FeatureSection {
  title: string;
  description: string;
  cta: string;
  subtitle?: string;
}

export interface InternxtInTheNewsSection {
  title: string;
  cards: Card[];
}

export interface Card {
  img: string;
  title: string;
  width: string;
}

export interface InvestorsSection {
  title: string;
}

export interface KitSection {
  title: string;
  description: string;
  cta: string;
  firstSection: FeatureSection;
  secondSection: FeatureSection;
  footer: Footer;
}

export interface Footer {
  boldText: string;
  normalText: string;
}

export interface ProductsSection {
  title: string;
  description: string;
  drive: FeatureSection;
  photos: FeatureSection;
  send: FeatureSection;
}

export interface StandForPrivacySection {
  title: string;
  description: string[];
}
