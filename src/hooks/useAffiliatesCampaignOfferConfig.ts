import { useMemo } from 'react';
import { PromoCodeName } from '@/lib/types';

export type AffiliatesBlackFridayCampaign = 'black-month' | 'black-week' | 'cyber-week';

export const CAMPAIGN_BY_PATH: Record<string, AffiliatesBlackFridayCampaign> = {
  blackmonth87: 'black-month',
  blackmonthcn87: 'black-month',
  cloudwardsbm87: 'black-month',
  privacybm87: 'black-month',
  heisebm87: 'black-month',
  xatakabm87: 'black-month',
  clubicbm87: 'black-month',
  tdesbm87: 'black-month',
  tdptbm87: 'black-month',
  tditbm87: 'black-month',
  gpesbm87: 'black-month',
  gpitbm87: 'black-month',
  chollobm87: 'black-month',

  blackfriday90: 'black-week',
  blackfridaycn90: 'black-week',
  cloudwardsbf90: 'black-week',
  privacybf90: 'black-week',
  heisebf90: 'black-week',
  xatakabf90: 'black-week',
  clubicbf90: 'black-week',
  tdesbf90: 'black-week',
  tdptbf90: 'black-week',
  tditbf90: 'black-week',
  gpesbf90: 'black-week',
  gpitbf90: 'black-week',
  chollobf90: 'black-week',

  cyberweek90: 'cyber-week',
  cyberweekcn90: 'cyber-week',
  cloudwardscm90: 'cyber-week',
  privacycm90: 'cyber-week',
  heisecm90: 'cyber-week',
  xatakacm90: 'cyber-week',
  clubiccm90: 'cyber-week',
  tdescm90: 'cyber-week',
  tdptcm90: 'cyber-week',
  tditcm90: 'cyber-week',
  gpescw90: 'cyber-week',
  gpitcw90: 'cyber-week',
  chollocw90: 'cyber-week',
  tdescw90: 'cyber-week',
  tdptcw90: 'cyber-week',
  tditcw90: 'cyber-week',
};

export const COUPON_CODES: Record<string, PromoCodeName> = {
  blackmonth87: PromoCodeName.blackmonth87,
  blackmonthcn87: PromoCodeName.blackmonthcn87,
  cloudwardsbm87: PromoCodeName.cloudwardsbm87,
  privacybm87: PromoCodeName.privacybm87,
  heisebm87: PromoCodeName.heisebm87,
  xatakabm87: PromoCodeName.xatakabm87,
  clubicbm87: PromoCodeName.clubicbm87,
  tdesbm87: PromoCodeName.tdesbm87,
  tdptbm87: PromoCodeName.tdptbm87,
  tditbm87: PromoCodeName.tditbm87,
  gpesbm87: PromoCodeName.gpesbm87,
  gpitbm87: PromoCodeName.gpitbm87,
  chollobm87: PromoCodeName.chollobm87,

  blackfriday90: PromoCodeName.blackfriday90,
  blackfridaycn90: PromoCodeName.blackfridaycn90,
  cloudwardsbf90: PromoCodeName.cloudwardsbf90,
  privacybf90: PromoCodeName.privacybf90,
  heisebf90: PromoCodeName.heisebf90,
  xatakabf90: PromoCodeName.xatakabf90,
  clubicbf90: PromoCodeName.clubicbf90,
  tdesbf90: PromoCodeName.tdesbf90,
  tdptbf90: PromoCodeName.tdptbf90,
  tditbf90: PromoCodeName.tditbf90,
  gpesbf90: PromoCodeName.gpesbf90,
  gpitbf90: PromoCodeName.gpitbf90,
  chollobf90: PromoCodeName.chollobf90,

  cyberweek90: PromoCodeName.cyberweek90,
  cyberweekcn90: PromoCodeName.cyberweekcn90,
  cloudwardscm90: PromoCodeName.cloudwardscm90,
  privacycm90: PromoCodeName.privacycm90,
  heisecm90: PromoCodeName.heisecm90,
  xatakacm90: PromoCodeName.xatakacm90,
  clubiccm90: PromoCodeName.clubiccm90,
  gpescw90: PromoCodeName.gpescw90,
  gpitcw90: PromoCodeName.gpitcw90,
  chollocw90: PromoCodeName.chollocw90,
  tdescw90: PromoCodeName.tdescw90,
  tditcw90: PromoCodeName.tditcw90,
  tdptcw90: PromoCodeName.tdptcw90,
};

export const ENFORCED_LOCALE: Record<string, string> = {
  heisebm87: 'de',
  heisebf90: 'de',
  heisecm90: 'de',

  xatakabm87: 'es',
  xatakabf90: 'es',
  xatakacm90: 'es',
  tdesbm87: 'es',
  tdesbf90: 'es',
  tdescm90: 'es',
  gpesbm87: 'es',
  gpesbf90: 'es',
  gpescw90: 'es',
  chollobm87: 'es',
  chollobf90: 'es',
  chollocw90: 'es',
  tdescw90: 'es',

  clubicbm87: 'fr',
  clubicbf90: 'fr',
  clubiccm90: 'fr',

  tditbm87: 'it',
  tditbf90: 'it',
  tditcm90: 'it',
  gpitbm87: 'it',
  gpitbf90: 'it',
  gpitcw90: 'it',
  tditcw90: 'it',

  tdptbm87: 'pt-br',
  tdptbf90: 'pt-br',
  tdptcm90: 'pt-br',
  tdptcw90: 'pt-br',
};

export const METATAGS_ID_BY_CAMPAIGN: Record<AffiliatesBlackFridayCampaign, string> = {
  'black-month': 'black-month',
  'black-week': 'black-friday',
  'cyber-week': 'cyber-week',
};

export const ALLOWED_PATHS = Object.keys(CAMPAIGN_BY_PATH);

export const HERO_IMAGE = '/images/black-friday/bf-cloud-storage.webp';

export const POPULAR_PLAN_SIZE = '5TB';

interface AffiliatesCampaignOfferConfig {
  selectedPathname: string | null;
  campaign: AffiliatesBlackFridayCampaign | null;
  couponCode: PromoCodeName | undefined;
  heroImage: string;
  popularPlanSize: string;
}

export const useAffiliatesCampaignOfferConfig = (pathname: string): AffiliatesCampaignOfferConfig =>
  useMemo(() => {
    const campaign = CAMPAIGN_BY_PATH[pathname];

    if (!campaign) {
      return {
        selectedPathname: null,
        campaign: null,
        couponCode: undefined,
        heroImage: HERO_IMAGE,
        popularPlanSize: POPULAR_PLAN_SIZE,
      };
    }

    return {
      selectedPathname: pathname,
      campaign,
      couponCode: COUPON_CODES[pathname],
      heroImage: HERO_IMAGE,
      popularPlanSize: POPULAR_PLAN_SIZE,
    };
  }, [pathname]);
