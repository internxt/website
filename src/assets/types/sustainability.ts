export interface SustainabilityText {
  HeroSection: HeroSection;
  CtaSection: CtaSection;
  CtaSection2: CtaSection;
  FeatureSectionV2: FeatureSectionV2;
  FeatureSectionV3: FeatureSectionV3;
  FeatureSection: FeatureSection;
}

interface CtaSection {
  title: string;
  cta: string;
}

interface FeatureSection {
  title: string;
  description: string;
  cards: FeatureSectionCards;
}

interface FeatureSectionCards {
  reduceCarbonEnergy: GlobalNetZero;
  globalNetZero: GlobalNetZero;
  zeroWaste: GlobalNetZero;
}

interface GlobalNetZero {
  number: string;
  title: string;
  description: string;
}

interface FeatureSectionV2 {
  title: string;
  description: string;
  cards: FeatureSectionV2Cards;
}

interface FeatureSectionV2Cards {
  element1: Element;
  element2: Element;
  element3: Element;
  element4: Element;
}

interface Element {
  title: string;
  description: string;
}

interface FeatureSectionV3 {
  title: string;
  description: string;
  cards: FeatureSectionV3Cards;
}

interface FeatureSectionV3Cards {
  power: Carbon;
  water: Carbon;
  carbon: Carbon;
  renewables: Carbon;
}

interface Carbon {
  title: string;
  description: string;
  value: string;
  unit: string;
}

interface HeroSection {
  title: Title;
  description: string;
  goals: Goals;
}

interface Goals {
  element1: string;
  element2: string;
  element3: string;
  element4: string;
  element5: string;
}

interface Title {
  normalText: string;
  greenText: string;
}
