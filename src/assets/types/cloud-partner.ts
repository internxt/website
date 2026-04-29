export interface CloudPartnerText {
  HeroSection: HeroSection;
  FeatureSection: FeatureSection;
  AccordionSection: AccordionSection;
  ThreeCardsSection: ThreeCardsSection;
  TrustedSection: TrustedSection;
  ContactSales: ContactSales;
}

export interface HeroSection {
  title: string;
  description: string;
  cta: string;
}

export interface FeatureSection {
  title: string;
  description: string;
}

export interface AccordionSection {
  title: string;
  description: string;
  accordionSection: AccordionSection2;
}

export interface AccordionSection2 {
  titles: string[];
  descriptions: string[];
}

export interface ThreeCardsSection {
  title: string;
  description: string;
  cards: Cards;
}

export interface Cards {
  titles: string[];
  descriptions: string[];
}

export interface TrustedSection {
  title: string;
  description: string;
}

export interface ContactSales {
  title: string;
  description: string;
  form: Form;
}

export interface Form {
  name: string;
  email: string;
  company: string;
  phone: string;
  howMuchStorage: string;
  totalCharacters: string;
  options: string[];
  howWeCanHelp: string;
  howWeCanHelpPlaceHolder: string;
  cta: string;
  ctaSending: string;
  successMessage: string;
  errorMessage: string;
}
