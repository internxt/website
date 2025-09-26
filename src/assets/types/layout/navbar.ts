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

export interface Links {
  products: string;
  about: string;
  ourValues: string;
  privacy: string;
  pricing: string;
  login: string;
  getStarted: string;
  chooseStorage: string;
  checkout: string;
  business: string;
}

export interface OurValues {
  privacy: string;
  openSource: string;
  sustainability: string;
}

export interface Products {
  drive: string;
  s3: string;
  webDAV: string;
  vpn: string;
  send: string;
  comingSoon: string;
  new: string;
  antivirus: string;
  cleaner: string;
  meet: string;
}
