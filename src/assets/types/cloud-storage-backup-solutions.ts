export interface CloudStorageBackupSolutionsText {
  HeroSection: HeroSection;
  FeatureSection: ComponentsInColumn;
  FeaturesSection: FeaturesSection;
  WhatWeDo: WhatWeDo;
  FaqSection: FAQSection;
  CtaSection1: BetterTomorrowSection;
  CtaSection2: BetterTomorrowSection;
  WhySwitchSection: CtaSection;
  NewBlock1?: NewBlock;
  NewBlock2?: NewBlock;
  tableSection: TableSection;
}

interface NewBlock {
  title: string;
  intro: string;
}
interface ComponentsInColumn {
  title: string;
  titleLine2: string;
  description: string;
  cta: string;
  cards: ComponentsInColumnCards;
}

interface ComponentsInColumnCards {
  element1: Element4Class;
  element2: Element4Class;
  element3: Element4Class;
  element4: Element4Class;
}

interface Element4Class {
  title: string;
  description: string;
}
interface CtaSection {
  title: string;
  description: string;
  cta?: string;
  subtitle?: string;
  cards?: Array<string>;
}

interface BetterTomorrowSection {
  title: string;
  description: string;
  cta: string;
}

interface FAQSection {
  title: string;
  faq: FAQ[];
}

interface FAQ {
  question: string;
  answer: string[];
}


interface FeaturesSection {
  title: string;
  description: string;
  info: EndToEnd[];
}

interface Cards {
  openSource: EndToEnd;
  endToEnd: EndToEnd;
  zeroKnowledge: EndToEnd;
  gdpr: EndToEnd;
  noUnwantedAccess: EndToEnd;
  freeTools: EndToEnd;
}

interface EndToEnd {
  title: string;
  description: string;
}

interface HeroSection {
  label: string;
  title: Title;
  description: string;
  cta: string;
  startFrom: StartFrom;
  TitleAndOnePlan: TitleAndOnePlan;
  TitleAndOnePlanV2: TitleAndOnePlanV2;
  guarantee: string;
}
interface TitleAndOnePlanTitle {
  textBeforeBlueText: string;
  blueText: string;
  textAfterBlueText: string;
}
interface TitleAndOnePlanV2 {
  saveLabel: string;
  title: string;
  cta: string;
  guarantee: string;
}
interface TitleAndOnePlan {
  title: TitleAndOnePlanTitle;
  subtitle: string;
  description: string;
  features: string[];
  startFrom: StartFrom;
  claimDeal: string;
  guarantee: string;
}

interface StartFrom {
  normal1: string;
  price: string;
  normal2: string;
}
interface Title {
  line1: string;
  line2: string;
}

interface HeroSectionTitle {
  normalText: string;
  blueText: string;
}

interface WhatWeDo {
  title: SignatureClass;
  subtitle: string;
  square1: BetterTomorrowSection;
  square2: BetterTomorrowSection;
  square3: BetterTomorrowSection;
}

interface SignatureClass {
  line1: string;
  line2: string;
}

interface SubtitleClass {
  line1: string;
}

interface Links {
  desk: string;
  web: string;
  mobile: string;
}

interface Position {
  top: string;
  left: string;
  bottom?: string;
}

interface ImageConfig {
  src: string;
  alt: string;
  animationDelay: number;
  size: { width: number; height: number };
  position: Position;
  boxShadow?: string;
  filter?: string;
  borderRadius?: string;
  className?: string;
}


interface AnimationProps {
  images: ImageConfig[];
}

export interface TableSection {
  title: string;
  hotLabel: string;
  planTitles: PlanTitles;
  lifetimeDescription: string;
  planDescription: string;
  businessDescription: string;
  businessDescription2: string;
  billingFrequency: BillingFrequency;
  freePlanCard: FreePlanCard;
  features: Features;
  planStorage: PlanStorage;
}

export interface FreePlanCard {
  eyeBrow: string;
  description: string;
  cta: string;
}

export interface PlanStorage {
  essential: string;
  premium: string;
  ultimate: string;
}

export interface PlanTitles {
  header: string;
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

export interface BillingFrequency {
  monthly: string;
  annually: string;
  lifetime: string;
  individual: string;
  business: string;
}

export interface Features {
  endToEnd: string;
  openSource: string;
  anonymousAccount: string;
  premiumSupport: string;
  guarantee: string;
}