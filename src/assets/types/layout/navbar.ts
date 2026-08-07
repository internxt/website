interface Root {
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
  mail: string;
}

export interface Auth {
  SignUp: SignUp;
  LogIn: LogIn;
  Recover: Recover;
}

interface SignUp {
  title: string;
  or: string;
  login: string;
  disclaimer: Disclaimer;
  fields: Fields;
}

interface Disclaimer {
  text: string;
  link: string;
}

interface Fields {
  email: Email;
  password: Password;
  submit: string;
}

interface Email {
  label: string;
  placeholder: string;
}

interface Password {
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

interface LogIn {
  title: string;
  or: string;
  signup: string;
  fields: Fields2;
}

interface Fields2 {
  email: Email2;
  password: Password2;
  tfa: Tfa;
  submit: string;
}

interface Email2 {
  label: string;
  placeholder: string;
}

interface Password2 {
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
  fields: Fields3;
  success: Success;
}

interface Fields3 {
  email: Email3;
  submit: string;
}

interface Email3 {
  label: string;
  placeholder: string;
}

interface Success {
  title: string;
  subtitle: string;
}
