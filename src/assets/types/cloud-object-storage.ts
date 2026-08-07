export interface CloudObjectStorageText {
  HeroSection: HeroSection;
  PredictablePricingSection: PredictablePricingSection;
  PriceCardSection: PriceCardSection;
  PartnersSection: PartnersSection;
  HowMuchYouNeedSection: HowMuchYouNeedSection;
  WhyChooseInternxtSection: WhyChooseInternxtSection;
  ContactSales: ContactSales;
  CtaSection: CtaSection;
  CtaSectionV2: CtaSection;
  SemanticAccordion: SemanticAccordion;
  FaqSection: FaqSection;
  HowInternxtComparesSection?: HowInternxtComparesSection;
}

interface HowInternxtComparesSection {
  title: string;
  description: string;
  scrollableSection: ScrollableSection;
}

interface FaqSection {
  title: string;
  faq: FaqItem[];
}

interface FaqItem {
  question: string;
  answer: string[];
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

interface CtaSection {
  title: string;
  description: string;
  cta: string;
}

interface HeroSection {
  label: string;
  title: Title;
  description: string;
  cta: string;
  cta2: string;
}

interface Title {
  line1: string;
  line2: string;
}

interface HowMuchYouNeedSection {
  title: string;
  description: string;
  'pay-as-you-go': string;
  perMonth: string;
  perYear: string;
  storageAmount: string;
  percentDownloadPerMonth: string;
  companies: string[];
}

interface PartnersSection {
  title: string;
  description: string;
  companies: string[];
  companiesInformation: CompaniesInformation[];
}

interface CompaniesInformation {
  logo: string;
  image: string;
  title: string;
  description: string;
  cta: string;
}

interface PredictablePricingSection {
  title: string;
  description: string;
  info: PayAsYouGoCard[];
}

interface PayAsYouGoCard {
  title: string;
  description: string;
}

interface PriceCardSection {
  title: string;
  description: string;
  payAsYouGoCard: PayAsYouGoCard;
  cardText: CardText;
  oneTimePayment: string;
}

interface CardText {
  label: string;
  perTB: string;
  price: string;
  cta: string;
  whatsIncluded: WhatsIncluded;
}

interface WhatsIncluded {
  title: string;
  features: string[];
}

interface SemanticAccordion {
  title: string;
  items: Item[];
}

interface Item {
  question: string;
  answer: string[];
}

interface WhyChooseInternxtSection {
  title: string;
  description: string;
  scrollableSection: ScrollableSection;
  bannerText: BannerText;
}

interface BannerText {
  title: string;
  description: string;
  cta: string;
  separator: string;
  cta2: string;
}

interface ScrollableSection {
  titles: string[];
  descriptions: string[];
}
