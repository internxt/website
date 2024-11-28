export interface SustainabilityText {
  HeroSection: HeroSection;
  CtaSection: CtaSection;
  CtaSection2: CtaSection;
  CtaSection3: CtaSection;
  FeatureSection: FeatureSection;
  FeatureSectionV2: FeatureSectionV2;
  FeatureSectionV3: FeatureSectionV3;
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
  reducedEnviromentalImpact: FocusOnRenewableEnergy;
  increasedSavings: FocusOnRenewableEnergy;
  innovation: FocusOnRenewableEnergy;
  focusOnRenewableEnergy: FocusOnRenewableEnergy;
}

export interface FocusOnRenewableEnergy {
  title: string;
  description: string;
}

export interface FeatureSectionV2 {
  title: string;
  description: string;
  cards: FeatureSectionV2Cards;
}

export interface FeatureSectionV2Cards {
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

export interface FeatureSectionV3 {
  title: string;
  description: string;
  cards: FeatureSectionV3Cards;
}

export interface FeatureSectionV3Cards {
  reduceCarbonEnergy: GlobalNetZero;
  globalNetZero: GlobalNetZero;
  zeroWaste: GlobalNetZero;
}

export interface GlobalNetZero {
  number: string;
  title: string;
  description: string;
}

export interface HeroSection {
  title: Title;
  description: string;
}

export interface Title {
  normalText: string;
  blueText: string;
}
