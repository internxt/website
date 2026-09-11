export interface CloudPartnerText {
  HeroSection: HeroSection;
  FeatureSection: FeatureSection;
  AccordionSection: AccordionSection;
  ThreeCardsSection: ThreeCardsSection;
  TrustedSection: TrustedSection;
  ContactSales: ContactSales;
}

interface HeroSection {
  title: string;
  description: string;
  cta: string;
}

interface FeatureSection {
  title: string;
  description: string;
}

interface AccordionSection {
  title: string;
  description: string;
  accordionSection: AccordionSection2;
}

interface AccordionSection2 {
  titles: string[];
  descriptions: string[];
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

interface TrustedSection {
  title: string;
  description: string;
}

interface ContactSales {
  title: string;
  description: string;
  form: Form;
}

interface Form {
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
