export interface SustainabilityText {
  HeroSection: HeroSection;
  CtaSection: CtaSection;
  CtaSection2: CtaSection;
  FeatureSectionV2: FeatureSectionV2;
  FeatureSectionV3: FeatureSectionV3;
  FeatureSection: FeatureSection;
}

export interface CtaSection {
  title: string;
  cta: string;
}

export interface FeatureSection {
  title: string;
  description: string;
  cards: FeatureSectionCards;
}

export interface FeatureSectionCards {
  reduceCarbonEnergy: GlobalNetZero;
  globalNetZero: GlobalNetZero;
  zeroWaste: GlobalNetZero;
}

export interface GlobalNetZero {
  number: string;
  title: string;
  description: string;
}

export interface FeatureSectionV2 {
  title: string;
  description: string;
  cards: FeatureSectionV2Cards;
}

export interface FeatureSectionV2Cards {
  element1: Element;
  element2: Element;
  element3: Element;
  element4: Element;
}

export interface Element {
  title: string;
  description: string;
}

export interface FeatureSectionV3 {
  title: string;
  description: string;
  cards: FeatureSectionV3Cards;
}

export interface FeatureSectionV3Cards {
  power: Carbon;
  water: Carbon;
  carbon: Carbon;
  renewables: Carbon;
}

export interface Carbon {
  title: string;
  description: string;
  value: string;
  unit: string;
}

export interface HeroSection {
  title: Title;
  description: string;
  goals: Goals;
}

export interface Goals {
  element1: string;
  element2: string;
  element3: string;
  element4: string;
  element5: string;
}

export interface Title {
  normalText: string;
  greenText: string;
}
