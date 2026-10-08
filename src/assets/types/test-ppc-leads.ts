export interface TestPpcLeadsText {
  HeroSection: HeroSection;
  ReviewSection: ReviewSection;
  TrustedSection: TrustedSection;
  FeaturesSection: FeaturesSection;
  ChoosePlanSection: ChoosePlanSection;
  FaqSection: FaqSection;
  CtaSection: CtaSection;
}

export interface HeroSection {
  title: string;
  subtitle: string;
  SignUp: SignUp;
}

export interface SignUp {
  fields: SignUpFields;
  info: string;
  disclaimer: TextAndLink;
  login: TextAndLink;
}

export interface SignUpFields {
  email: {
    label: string;
    placeholder: string;
  };
  password: {
    label: string;
    placeholder: string;
    show: string;
    hide: string;
    strength: PasswordStrengthLabels;
  };
  submit: string;
}

export interface PasswordStrengthLabels {
  complexity: string;
  length: string;
  weak: string;
  strong: string;
}

export interface TextAndLink {
  text: string;
  link: string;
}

export interface ReviewSection {
  forbes: string;
  deloitte: string;
  techradar: string;
  fortune: string;
  trustpilot: string;
}

export interface TrustedSection {
  description: string;
}

export interface FeaturesSection {
  title: string;
  description: string;
  cards: {
    titles: string[];
    descriptions: string[];
  };
}

export interface ChoosePlanSection {
  title: string;
  description: string;
  freeCard: PlanCard;
  premiumCard: PlanCard;
  guarantees: Guarantees;
}

export interface PlanCard {
  label: string;
  badge?: string;
  storage: string;
  price: string;
  features: string[];
  cta: string;
}

export interface Guarantees {
  premiumSupport: string;
  moneyBack: string;
  openSource: string;
}

export interface FaqSection {
  title: string;
  faq: Faq[];
}

export interface Faq {
  question: string;
  answer: string[];
}

export interface CtaSection {
  title: string;
  description: string;
  cta: string;
}
