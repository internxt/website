export interface RedeemText {
  HeroSection: HeroSection;
  Auth: Auth;
  PaymentSection: PaymentSection;
  GetLifetimeSection: Section;
  FeatureSection: Section;
  CtaSection: Section;
  MostSecureSection: Section;
}

interface Auth {
  SignUp: SignUp;
  LogIn: LogIn;
  Recover: Recover;
}

interface LogIn {
  title: string;
  or: string;
  signup: string;
  fields: LogInFields;
}

interface LogInFields {
  email: Email;
  password: PurplePassword;
  tfa: Tfa;
  submit: string;
}

interface Email {
  label: string;
  placeholder: string;
}

interface PurplePassword {
  label: string;
  placeholder: string;
  helper: string;
}

interface Tfa {
  label: string;
  placeholder: string;
  hint: string;
}

interface Recover {
  title: string;
  back: string;
  disclaimer: string;
  fields: RecoverFields;
  success: Success;
}

interface RecoverFields {
  email: Email;
  submit: string;
}

interface Success {
  title: string;
  subtitle: string;
}

interface SignUp {
  title: string;
  or: string;
  login: string;
  disclaimer: Disclaimer;
  fields: SignUpFields;
}

interface Disclaimer {
  text: string;
  link: string;
}

interface SignUpFields {
  email: Email;
  password: FluffyPassword;
  submit: string;
}

interface FluffyPassword {
  label: string;
  placeholder: string;
  strength: Strength;
}

interface Strength {
  complexity: string;
  length: string;
  weak: string;
  strong: string;
}

interface Section {
  title: string;
  description: string;
  cta: string;
  cards?: NormalSection[];
}

interface NormalSection {
  title: string;
  description: string;
}

interface HeroSection {
  title: string;
  subtitle: string;
  description: string;
  info: string;
  cta: string;
}

interface PaymentSection {
  limitedOffer: string;
  title: Title;
  title2: Title;
  description: string;
  description2: string;
  normalSection: NormalSection;
  securePayment: string;
  features: Features;
}

interface Features {
  endToEnd: string;
  openSource: string;
  anonymousAccount: string;
}

interface Title {
  blueText: string;
  normalText: string;
}
