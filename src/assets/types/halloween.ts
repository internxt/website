export interface Halloween {
    featuresBanner: FeaturesBanner;
    tableSection:   TableSection;
}

export interface FeaturesBanner {
    label:     string;
    title:     string;
    subtitle:  string;
    cta:       string;
    guarantee: string;
    titleMbl:  string;
    titleMbl1: string;
    titleMbl2: string;
    titleMbl3: string;
    ctaMbl:    string;
}

export interface TableSection {
    planTitles:           PlanTitles;
    lifetimeDescription:  string;
    planDescription:      string;
    businessDescription:  string;
    businessDescription2: string;
    billingFrequency:     BillingFrequency;
    features:             Features;
}

export interface BillingFrequency {
    monthly:    string;
    annually:   string;
    individual: string;
    lifetime:   string;
    business:   string;
}

export interface Features {
    endToEnd:         string;
    openSource:       string;
    anonymousAccount: string;
}

export interface PlanTitles {
    individuals:      string;
    homePage:         string;
    lifetime:         string;
    business:         string;
    lifetimeCampaign: LifetimeCampaign;
}

export interface LifetimeCampaign {
    blueText:   string;
    normalText: string;
}
