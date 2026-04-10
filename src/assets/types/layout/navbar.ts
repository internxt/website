export interface Root {
  links: Links;
  ourValues: OurValues;
  solutions: Solutions;
  products: Products;
  Auth: Auth;
}

export interface Links {
  products: string;
  about: string;
  ourValues: string;
  pricing: string;
  login: string;
  blackFriday: string;
  getStarted: string;
  chooseStorage: string;
  checkout: string;
  business: string;
  solutions: string;
}

export interface OurValues {
  openSource: string;
  privacy: string;
  sustainability: string;
  certifications: string;
  about: string;
}

export interface Solutions {
  secureCloudStorage: string;
  lifetimeCloudStorage: string;
  privateCloudStorage: string;
  cloudStorageForPhotos: string;
  cloudStorageForVideos: string;
  cloudStorageForBackup: string;
  cloudNASBackup: string;
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
  ai: string;
}

export interface Auth {
  SignUp: SignUp;
  LogIn: LogIn;
  Recover: Recover;
}

export interface SignUp {
  title: string;
  or: string;
  login: string;
  disclaimer: Disclaimer;
  fields: Fields;
}

export interface Disclaimer {
  text: string;
  link: string;
}

export interface Fields {
  email: Email;
  password: Password;
  submit: string;
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

export interface LogIn {
  title: string;
  or: string;
  signup: string;
  fields: Fields2;
}

export interface Fields2 {
  email: Email2;
  password: Password2;
  tfa: Tfa;
  submit: string;
}

export interface Email2 {
  label: string;
  placeholder: string;
}

export interface Password2 {
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
  fields: Fields3;
  success: Success;
}

export interface Fields3 {
  email: Email3;
  submit: string;
}

export interface Email3 {
  label: string;
  placeholder: string;
}

export interface Success {
  title: string;
  subtitle: string;
}
