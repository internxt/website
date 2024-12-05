export interface CloudObjectStorageText {
  HeroSection: HeroSection;
  PredictablePricingSection: PredictablePricingSection;
  PriceCardSection: PriceCardSection;
  HowMuchYouNeedSection: HowMuchYouNeedSection;
  WhyChooseInternxtSection: WhyChooseInternxtSection;
  FaqSection: FAQSection;
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
  title: {
    line1: string;
    line2: string;
  };
  description: string;
  cta: string;
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
  info: Info[];
}

export interface Info {
  title: string;
  description: string;
}

export interface PriceCardSection {
  title: string;
  description: string;
  payAsYouGoCard: PayAsYouGoCardText;
  cardText: CardText;
  oneTimePayment: string;
}

export interface PayAsYouGoCardText {
  title: string;
  description: string;
}

export interface CardText {
  label: string;
  perTB: string;
  price: string;
  whatsIncluded: WhatsIncluded;
  cta: string;
}

export interface WhatsIncluded {
  title: string;
  features: string[];
}

export interface WhyChooseInternxtSection {
  title: string;
  description: string;
  cards: Info[];
  bannerText: {
    title: string;
    description: string;
    cta: string;
  };
}
