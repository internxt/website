import {
  CtaSection,
  FaqSection,
  Products,
  ReviewSection,
  TableSection,
  WhyChooseSection,
} from './blackFridayPpc';
import { DriveText } from './drive';

export type AffiliatesBlackFridayCampaign = 'black-month' | 'black-week' | 'cyber-week';

/**
 * Sections that read the same on the three campaigns. Written once per locale.
 */
export interface AffiliatesBlackFridayShared {
  HeroSection: {
    products: Products;
    subtitle: string;
    features: string[];
    claimDeal: string;
  };
  TableSection: TableSection;
  ReviewSection: ReviewSection;
  CoreFeatures: DriveText['CoreFeatures'];
}

/**
 * Sections whose copy names the campaign, so each one carries its own version.
 */
export interface AffiliatesBlackFridayCampaignText {
  metatags: {
    title: string;
    description: string;
  };
  HeroSection: {
    title: string;
    description: string;
  };
  WhyChooseSection: WhyChooseSection;
  CtaSection: CtaSection;
  FaqSection: FaqSection;
}

export interface AffiliatesBlackFridayText {
  shared: AffiliatesBlackFridayShared;
  campaigns: Record<AffiliatesBlackFridayCampaign, AffiliatesBlackFridayCampaignText>;
}
