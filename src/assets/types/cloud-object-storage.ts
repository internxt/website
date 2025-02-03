export interface CloudObjectStorageText {
  HeroSection: HeroSection;
  PredictablePricingSection: PredictablePricingSection;
  PriceCardSection: PriceCardSection;
  HowMuchYouNeedSection: HowMuchYouNeedSection;
  WhyChooseInternxtSection: WhyChooseInternxtSection;
  FaqSection: FAQSection;
  ContactSales: ContactSales;
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
  cta: string;
  successMessage: string;
  errorMessage: string;
}

export interface FAQSection {
  title: string;
  faq: FAQ[];
}

export interface FAQ {
  question: string;
  answer: string[];
}

export interface HeroSection {
  title: Title;
  description: string;
  cta: string;
  separator: string;
  cta2: string;
}

export interface Title {
  line1: string;
  line2: string;
}

export interface HowMuchYouNeedSection {
  title: string;
  description: string;
  'pay-as-you-go': string;
  perMonth: string;
  perYear: string;
  storageAmount: string;
  percentDownloadPerMonth: string;
  companies: string[];
}

export interface PredictablePricingSection {
  title: string;
  description: string;
  info: PayAsYouGoCard[];
}

export interface PayAsYouGoCard {
  title: string;
  description: string;
}

export interface PriceCardSection {
  title: string;
  description: string;
  payAsYouGoCard: PayAsYouGoCard;
  cardText: CardText;
  oneTimePayment: string;
}

export interface CardText {
  label: string;
  perTB: string;
  price: string;
  cta: string;
  whatsIncluded: WhatsIncluded;
}

export interface WhatsIncluded {
  title: string;
  features: string[];
}

export interface WhyChooseInternxtSection {
  title: string;
  description: string;
  cards: PayAsYouGoCard[];
  bannerText: BannerText;
}

export interface BannerText {
  title: string;
  description: string;
  cta: string;
}
