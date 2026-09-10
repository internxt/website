export interface AffiliatesText {
  HeroSection: HeroSection;
  FeatureSection: FeatureSection;
  WhatIsInternxtSection: WhatIsInternxtSection;
  WhyJoinSection: WhyJoinSection;
  WhatWeDoSection: WhatWeDoSection;
  CommissionStructureSection: CommissionStructureSection;
  DescribingPlansSection: DescribingPlansSection;
  Number1Section: Number1Section;
  FaqSection: FAQSection;
  CtaSection: CtaSection;
}

interface CommissionStructureSection {
  title: string;
  startEarning: string;
  cards: Card[];
  cta: string;
}

interface Card {
  OFF: string;
  plans: string;
}

interface CtaSection {
  title: string;
  description: string;
  cta?: string;
}

interface DescribingPlansSection {
  drive: Drive;
  s3: Drive;
  feat: Feat[];
}

interface Drive {
  title: string;
  description: string[];
}

interface Feat {
  title: string;
  description: string;
}

interface FAQSection {
  title: string;
  faq: FAQ[];
}

interface FAQ {
  question: string;
  answer: string[];
}

interface FeatureSection {
  title: string;
  cards: CtaSection[];
}

interface HeroSection {
  label: string;
  title: Title;
  description: string;
  signUp: string;
  logIn: string;
}

interface Title {
  normalText: string;
  blueText: string;
}

interface Number1Section {
  title: {
    line1: string;
    blue: string;
    line2: string;
  };
}

interface WhatIsInternxtSection {
  title: string;
  subtitle: string;
  description: string;
}

interface WhatWeDoSection {
  title: string;
  description: string;
  cards: Feat[];
  recognized: string;
}

interface WhyJoinSection {
  title: string;
  cards: string[];
  cta: string;
}