export interface HomeText {
  HeroSection: HeroSection;
  FeatureSectionV2: ChooseStorageSizeSection;
  tableSection: TableSection;
  ChooseStorageSizeSection: ChooseStorageSizeSection;
  FirstFeaturesSection: ChooseStorageSizeSection;
  InfoSection: ChooseStorageSizeSection;
  SecondFeaturesSection: ChooseStorageSizeSection;
  ThirdFeaturesSection: ChooseStorageSizeSection;
  FirstWhatWeDoSection: FirstWhatWeDoSection;
  SecondWhatWeDoSection: SecondWhatWeDoSection;
  FaqSection: FAQSection;
  InvestorsSection: InvestorsSection;
  TestimonialsSection: TestimonialsSection;
  CtaSection: ChooseStorageSizeSection;
  GetStartedSection: GetStartedSection;
}

export interface ChooseStorageSizeSection {
  title: string;
  description: string;
  peaceOfMind?: string;
  cta: string;
  cards?: InfoElement[];
  subtitle?: string;
  info?: InfoElement[];
}

export interface InfoElement {
  title: string;
  description: string;
}

export interface FAQSection {
  title: string;
  faq: FAQ[];
}

export interface FAQ {
  question: string;
  answer: string[];
}

export interface FirstWhatWeDoSection {
  card1: ChooseStorageSizeSection;
  card2: ChooseStorageSizeSection;
  card3: ChooseStorageSizeSection;
}

export interface GetStartedSection {
  title: SubtitleClass;
  subtitle: SubtitleClass;
  cta1: string;
}

export interface SubtitleClass {
  line1: string;
  line2: string;
}

export interface HeroSection {
  label: string;
  title: TitleAndOnePlanTitle;
  subtitle: string;
  cta: Cta;
  featuredIn: string;
  SignUp: SignUp;
  TitleAndSurvey: TitleAndSurvey;
  TitleAndOnePlan: TitleAndOnePlan;
  TitleAndOnePlanV2: TitleAndOnePlan;
  youKnow: string;
}

export interface SignUp {
  cta: Cta;
  disclaimer: Disclaimer;
  fields: Fields;
}

export interface Cta {
  title: string;
  subtitle: string;
}

export interface Disclaimer {
  text: string;
  link: string;
}

export interface Fields {
  email: Email;
  password: Password;
  submit: Submit;
}

export interface Email {
  label: string;
  placeholder: string;
}

export interface Password {
  label: string;
  placeholder: string;
  strength: Strength;
}

export interface Strength {
  complexity: string;
  length: string;
  weak: string;
  strong: string;
}

export interface Submit {
  get: string;
  free: string;
}

export interface TitleAndOnePlan {
  title: TitleAndOnePlanTitle;
  description: TitleAndOnePlanDescription;
  features: string[];
  startFrom: StartFrom;
  claimDeal: string;
  guarantee: string;
}

export interface TitleAndOnePlanDescription {
  normal1: string;
  blue: string;
  normal2: string;
}

export interface StartFrom {
  normal1: string;
  price: string;
  normal2: string;
}

export interface TitleAndOnePlanTitle {
  line1: string;
  line2?: string;
  blueText: string;
  normal1?: string;
  normal2?: string;
  blue1?: string;
  blue2?: string;
}

export interface TitleAndSurvey {
  title: TitleAndOnePlanTitle;
  trustedBy: string;
  description: TitleAndSurveyDescription;
  howMuchYouNeed: string;
  upTo: string;
  buttonLabel: string[];
}

export interface TitleAndSurveyDescription {
  normal1: string;
  bold: string;
  normal2: string;
}

export interface InvestorsSection {
  title: string;
}

export interface SecondWhatWeDoSection {
  title: string;
  description: string;
  square1: ChooseStorageSizeSection;
  square2: ChooseStorageSizeSection;
  square3: ChooseStorageSizeSection;
}

export interface TestimonialsSection {
  title: TestimonialsSectionTitle;
  cards: TestimonialsSectionCard[];
}

export interface TestimonialsSectionCard {
  name: string;
  enterprise: string;
  review: string;
}

export interface TestimonialsSectionTitle {
  normal: string;
  blue: string;
}

export interface TableSection {
  planTitles: PlanTitles;
  lifetimeDescription: string;
  planDescription: string;
  businessDescription: string;
  businessDescription2: string;
  billingFrequency: BillingFrequency;
  freePlanCard: FreePlanCard;
  features: Features;
}

export interface BillingFrequency {
  monthly: string;
  annually: string;
  individual: string;
  lifetime: string;
  business: string;
}

export interface Features {
  endToEnd: string;
  openSource: string;
  anonymousAccount: string;
}

export interface FreePlanCard {
  getStarted: string;
  enjoy10gb: string;
  upTo: string;
  freeForever: string;
  cta: string;
}

export interface PlanTitles {
  individuals: string;
  homePage: string;
  lifetime: string;
  business: string;
  lifetimeCampaign: LifetimeCampaign;
}

export interface LifetimeCampaign {
  blueText: string;
  normalText: string;
}
