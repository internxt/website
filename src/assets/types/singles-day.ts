

export interface SinglesDay {
    PaymentSection:      PaymentSection;
    FaqSection:          FAQSection;
    TestimonialsSection: TestimonialsSection;
    CtaSection1:         CtaSection;
    CtaSection2:         CtaSection;
    FeatureSection:      FeatureSection;
    HeroSection:         HeroSection;
}

export interface CtaSection {
    title:       string;
    description: string;
    cta:         string;
}

export interface FAQSection {
    title: string;
    faq:   FAQ[];
}

export interface FAQ {
    question: string;
    answer:   string[];
}

export interface FeatureSection {
    title:           string;
    description:     string;
    PlatformSection: PlatformSection;
    cards:           FeatureSectionCard[];
}

export interface PlatformSection {
    title:    string;
    subtitle: string;
    web:      string;
    linux:    string;
    windows:  string;
    mac:      string;
    android:  string;
    iOS:      string;
}

export interface FeatureSectionCard {
    title:       string;
    description: string;
}

export interface HeroSection {
    offer:       string;
    title:       HeroSectionTitle;
    subtitle:    string;
    description: string;
    cta:         string;
}
export interface HeroSectionTitle {
    previousBlueText: string;
    blueText:         string;
    postBlueText:     string;
}

export interface PaymentSection {
    title:       PaymentSectionTitle;
    description: string;
    features:    Features;
}

export interface Features {
    endToEnd:         string;
    openSource:       string;
    anonymousAccount: string;
}

export interface PaymentSectionTitle {
    previousBlueText: string;
    blueText:         string;
    postBlueText:     string;
}

export interface TestimonialsSection {
    title: TestimonialsSectionTitle;
    cards: TestimonialsSectionCard[];
}

export interface TestimonialsSectionCard {
    name:       string;
    enterprise: string;
    review:     string;
}

export interface TestimonialsSectionTitle {
    normal: string;
}
