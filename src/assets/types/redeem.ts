export interface RedeemText {
  HeroSection: HeroSection;
  Auth: Auth;
  PaymentSection: PaymentSection;
  GetLifetimeSection: Section;
  FeatureSection: Section;
  CtaSection: Section;
  MostSecureSection: Section;
}

export interface Auth {
  SignUp: SignUp;
  LogIn: LogIn;
  Recover: Recover;
}

export interface LogIn {
  title: string;
  or: string;
  signup: string;
  fields: LogInFields;
}

export interface LogInFields {
  email: Email;
  password: PurplePassword;
  tfa: Tfa;
  submit: string;
}

export interface Email {
  label: string;
  placeholder: string;
}

export interface PurplePassword {
  label: string;
  placeholder: string;
  helper: string;
}

export interface Tfa {
  label: string;
  placeholder: string;
  hint: string;
}

export interface Recover {
  title: string;
  back: string;
  disclaimer: string;
  fields: RecoverFields;
  success: Success;
}

export interface RecoverFields {
  email: Email;
  submit: string;
}

export interface Success {
  title: string;
  subtitle: string;
}

export interface SignUp {
  title: string;
  or: string;
  login: string;
  disclaimer: Disclaimer;
  fields: SignUpFields;
}

export interface Disclaimer {
  text: string;
  link: string;
}

export interface SignUpFields {
  email: Email;
  password: FluffyPassword;
  submit: string;
}

export interface FluffyPassword {
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

export interface Section {
  title: string;
  description: string;
  cta: string;
  cards?: NormalSection[];
}

export interface NormalSection {
  title: string;
  description: string;
}

export interface HeroSection {
  title: string;
  subtitle: string;
  description: string;
  info: string;
  cta: string;
}

export interface PaymentSection {
  limitedOffer: string;
  title: Title;
  title2: Title;
  description: string;
  description2: string;
  normalSection: NormalSection;
  securePayment: string;
  features: Features;
}

export interface Features {
  endToEnd: string;
  openSource: string;
  anonymousAccount: string;
}

export interface Title {
  blueText: string;
  normalText: string;
}
