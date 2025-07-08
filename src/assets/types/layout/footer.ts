export interface Cookies {
  title: string;
  link: string;
  close: string;
}

export interface DownloadApp {
  title: string;
  description: string;
}

export interface FooterSection {
  description: string;
  copyright: Copyright;
  independentPromotion: string;
  comingSoon: string;
  new: string;
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
  openSource: string;
  mediaArea: string;
  security: string;
  legal: string;
  whyInternxt: string;
  sustainability: string;
}

export interface Join {
  title: string;
  newsletter: string;
  affiliates: string;
  storageForEducation: string;
  signup: string;
  support: string;
  login: string;
  community: string;
  github: string;
  whitePaper: string;
  twitter: string;
  facebook: string;
  linkedin: string;
  youtube: string;
  instagram: string;
  mastodon: string;
}

export interface Products {
  title: string;
  drive: string;
  photos: string;
  send: string;
  objStorage: string;
  vpn: string;
  antivirus: string;
  token: string;
  business: string;
  pricing: string;
  family: string;
}

export interface Resources {
  title: string;
  blog: string;
  comparison: string;
  pCloudAlternative: string;
  dropboxAlternative: string;
  directoryOfPrivacyOrganizations: string;
  cyberAwareness: string;
  whatGoogleKnowsAboutMe: string;
}

export interface Tools {
  title: string;
  temporaryEmail: string;
  fileVirusScan: string;
  passwordChecker: string;
  byteConverter: string;
  passwordGenerator: string;
  fileConverter: string;
  vpn: string;
  haveIBeenPwned: string;
  metadataRemover: string;
  aiDetector: string;
  fileCompressor: string;
}

export interface Features {
  title: string;
  privateCloud: string;
  cloudBakcup: string;
  GDPRCloud: string;
  cloudPhotos: string;
}

export interface NewsletterSection {
  title: string;
  description: string;
  input: string;
  info: string;
  cta: string;
  privacy: string;
  privacyLink: string;
}
