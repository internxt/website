export interface PrivateCloudStorageForVideoText {
  HeroSection: HeroSection;
  FeaturesSection: FeaturesSection;
  FeaturesSectionV2: FeaturesSectionV2;
  cta: HeroSection;
  cta2: HeroSection;
  FaqSection: FAQSection;
}

export interface FAQSection {
  title: string;
  faq: FAQ[];
}

export interface FAQ {
  question: string;
  answer: string[];
}

export interface FeaturesSection {
  intro: string;
  features: Features;
}

export interface Features {
  feature1: Feature;
  feature2: Feature;
  feature3: Feature;
}

export interface Feature {
  title: string;
  description: string[];
}

export interface FeaturesSectionV2 {
  title: string;
  subtitle: string;
  featuresForVideos: FeaturesForVideos;
}

export interface FeaturesForVideos {
  video1: Video;
  video2: Video;
  video3: Video;
  video4: Video;
}

export interface Video {
  title: string;
  description: string;
}

export interface HeroSection {
  title: string;
  features?: string[];
  subtitle: string;
  cta: string;
}
