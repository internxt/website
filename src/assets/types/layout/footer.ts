export interface DownloadApp {
  title: string;
  description: string;
}

export interface FooterSection {
  comingSoon: string;
  new: string;
  copyright: Copyright;
  sections: Sections;
  financialProject: string;
}

export interface Copyright {
  line1: string;
  line2: string;
}

export interface Sections {
  products: Products;
  company: Company;
  join: Join;
  resources: Resources;
  tools: Tools;
  features: Features;
}

export interface Company {
  title: string;
  about: string;
  privacy: string;
  security: string;
  openSource: string;
  legal: string;
  sustainability: string;
}

export interface Features {
  title: string;
  privateCloud: string;
  cloudBakcup: string;
  GDPRCloud: string;
  cloudPhotos: string;
  cloudVideo: string;
}

export interface Join {
  title: string;
  signup: string;
  login: string;
  support: string;
  whitePaper: string;
  github: string;
  affiliates: string;
}

export interface Products {
  title: string;
  drive: string;
  objStorage: string;
  antivirus: string;
  send: string;
  vpn: string;
  cleaner: string;
  meet: string;
  ai: string;
  business: string;
  family: string;
  pricing: string;
}

export interface Resources {
  title: string;
  blog: string;
  comparison: string;
  pCloudAlternative: string;
  dropboxAlternative: string;
  megaAlternative: string;
  koofrAlternative: string;
  icedriveAlternative: string;
  onedriveAlternative: string;
  googleDriveAlternative: string;
  drimeAlternative: string;
  degooAlternative: string;
  fileJumpAlternative: string;
  elephantDriveAlternative: string;
  whatGoogleKnowsAboutMe: string;
  WebDAV: string;
  nas: string;
  coupons: string;
  reviews: string;
}

export interface Tools {
  title: string;
  byteConverter: string;
  temporaryEmail: string;
  passwordChecker: string;
  fileVirusScan: string;
  passwordGenerator: string;
  fileConverter: string;
  haveIBeenPwned: string;
  metadataRemover: string;
  aiDetector: string;
  fileCompressor: string;
}

export interface NewsletterSection {
  title: string;
  description: string;
  input: string;
  cta: string;
  privacy: string;
  privacyLink: string;
}
