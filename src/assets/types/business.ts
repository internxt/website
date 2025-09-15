export interface BusinessText {
  HeroSection: HeroSection;
  SecureYourCompany: SecureYourCompany;
  InternxtProtectsYourBusiness: InternxtProtectsYourBusiness;
  WhatCanWeDo: WhatCanWeDo;
  PriceTable: PriceTable;
  WhyChooseInternxt: WhyChooseInternxt;
  EncryptedCloudSolution: EncryptedCloudSolution;
  TestimonialsSection: TestimonialsSection;
  FaqSection: FAQSection;
  ContactSales: ContactSales;
}

export interface ContactSales {
  title: string;
  description: string;
  form: Form;
}

export interface Form {
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

export interface EncryptedCloudSolution {
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

export interface HeroSection {
  title: string;
  description: string[];
  cta: string;
  separator: string;
  cta2: string;
}

export interface InternxtProtectsYourBusiness {
  title: string;
  description: string[];
}

export interface PriceTable {
  planTitles: PlanTitles;
  businessDescription2: string;
  billingFrequency: BillingFrequency;
  freePlanCard: FreePlanCard;
  features: Features;
  planStorage: PlanStorage;
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
  premiumSupport: string;
  guarantee: string;
}

export interface FreePlanCard {
  eyeBrow: string;
  description: string;
  mobileDescription: string;
  cta: string;
}

export interface PlanStorage {
  essential: string;
  premium: string;
  ultimate: string;
  standard: string;
  pro: string;
}

export interface PlanTitles {
  business: string;
}

export interface SecureYourCompany {
  title: string;
  description: string;
  cards: EncryptedCloudSolution[];
  footerText: string;
}

export interface TestimonialsSection {
  title: string;
  testimonials: Testimonial[];
}

export interface Testimonial {
  imageBrandName: string;
  brand: string;
  review: string;
}

export interface WhatCanWeDo {
  title: string;
  description: string;
  scrollableSection: WhatCanWeDoScrollableSection;
}

export interface WhatCanWeDoScrollableSection {
  imagesPathname: string[];
  titles: string[];
  descriptions: string[];
}

export interface WhyChooseInternxt {
  title: string;
  description: string;
  scrollableSection: WhyChooseInternxtScrollableSection;
}

export interface WhyChooseInternxtScrollableSection {
  titles: string[];
  descriptions: string[];
}
export interface BusinessText {
  HeroSection: HeroSection;
  SecureYourCompany: SecureYourCompany;
  InternxtProtectsYourBusiness: InternxtProtectsYourBusiness;
  WhatCanWeDo: WhatCanWeDo;
  PriceTable: PriceTable;
  WhyChooseInternxt: WhyChooseInternxt;
  EncryptedCloudSolution: EncryptedCloudSolution;
  TestimonialsSection: TestimonialsSection;
  FaqSection: FAQSection;
  ContactSales: ContactSales;
  CtaSection: CtaSection;
}

export interface ContactSales {
  title: string;
  description: string;
  form: Form;
}

export interface Form {
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

export interface CtaSection {
  title: string;
  description: string;
  cta: string;
  contactUs: string;
}

export interface EncryptedCloudSolution {
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

export interface HeroSection {
  title: string;
  description: string[];
  cta: string;
  separator: string;
  cta2: string;
}

export interface InternxtProtectsYourBusiness {
  title: string;
  description: string[];
}

export interface PriceTable {
  planTitles: PlanTitles;
  businessDescription2: string;
  billingFrequency: BillingFrequency;
  freePlanCard: FreePlanCard;
  features: Features;
  planStorage: PlanStorage;
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
  premiumSupport: string;
  guarantee: string;
}

export interface FreePlanCard {
  eyeBrow: string;
  description: string;
  mobileDescription: string;
  cta: string;
}

export interface PlanStorage {
  essential: string;
  premium: string;
  ultimate: string;
}

export interface PlanTitles {
  business: string;
}

export interface SecureYourCompany {
  title: string;
  description: string;
  cards: EncryptedCloudSolution[];
  footerText: string;
}

export interface TestimonialsSection {
  title: string;
  testimonials: Testimonial[];
}

export interface Testimonial {
  imageBrandName: string;
  brand: string;
  review: string;
}

export interface WhatCanWeDo {
  title: string;
  description: string;
  scrollableSection: WhatCanWeDoScrollableSection;
}

export interface WhatCanWeDoScrollableSection {
  imagesPathname: string[];
  titles: string[];
  descriptions: string[];
}

export interface WhyChooseInternxt {
  title: string;
  description: string;
  scrollableSection: WhyChooseInternxtScrollableSection;
}

export interface WhyChooseInternxtScrollableSection {
  titles: string[];
  descriptions: string[];
}
