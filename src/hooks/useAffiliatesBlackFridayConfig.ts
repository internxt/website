import { useMemo } from 'react';
import { AffiliatesBlackFridayCampaign } from '@/assets/types/affiliatesBlackFriday';
import { PromoCodeName } from '@/lib/types';

/**
 * Which of the three Black Friday communications each affiliate landing page belongs to.
 * The campaign decides the title, the metatags and every piece of copy that names the sale,
 * all of them read from the `campaigns` block of `affiliates-black-friday.json`.
 */
export const CAMPAIGN_BY_PATH: Record<string, AffiliatesBlackFridayCampaign> = {
  // Early Black Friday / Black Month — Nov 2 to Nov 22
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

  // Black Week / Black Friday — Nov 23 to Nov 29
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

  // Cyber Week — Nov 30 to Dec 4
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
};

/**
 * Coupon applied at checkout on each page. The slug mirrors the coupon except on the three
 * TechDeals Cyber Week pages, which reuse the Black Week coupons on purpose.
 */
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

  cyberweek90: PromoCodeName.cyberweek90,
  cyberweekcn90: PromoCodeName.cyberweekcn90,
  cloudwardscm90: PromoCodeName.cloudwardscm90,
  privacycm90: PromoCodeName.privacycm90,
  heisecm90: PromoCodeName.heisecm90,
  xatakacm90: PromoCodeName.xatakacm90,
  clubiccm90: PromoCodeName.clubiccm90,
  tdescm90: PromoCodeName.tdesbf90,
  tdptcm90: PromoCodeName.tdptbf90,
  tditcm90: PromoCodeName.tditbf90,
};

/**
 * Pages built for a single-language partner. They are generated only on that locale and the
 * language picker is hidden, same behaviour as the influencer pages.
 */
export const ENFORCED_LOCALE: Record<string, string> = {
  // de
  heisebm87: 'de',
  heisebf90: 'de',
  heisecm90: 'de',

  // es
  xatakabm87: 'es',
  xatakabf90: 'es',
  xatakacm90: 'es',
  tdesbm87: 'es',
  tdesbf90: 'es',
  tdescm90: 'es',

  // fr
  clubicbm87: 'fr',
  clubicbf90: 'fr',
  clubiccm90: 'fr',

  // it
  tditbm87: 'it',
  tditbf90: 'it',
  tditcm90: 'it',

  // pt-br
  tdptbm87: 'pt-br',
  tdptbf90: 'pt-br',
  tdptcm90: 'pt-br',

  // zh
  blackmonthcn87: 'zh',
  blackfridaycn90: 'zh',
  cyberweekcn90: 'zh',
};

export const ALLOWED_PATHS = Object.keys(CAMPAIGN_BY_PATH);

export const HERO_IMAGE = '/images/black-friday/bf-cloud-storage.webp';

export const POPULAR_PLAN_SIZE = '5TB';

interface AffiliatesBlackFridayConfig {
  selectedPathname: string | null;
  campaign: AffiliatesBlackFridayCampaign | null;
  couponCode: PromoCodeName | undefined;
  heroImage: string;
  popularPlanSize: string;
}

export const useAffiliatesBlackFridayConfig = (pathname: string): AffiliatesBlackFridayConfig =>
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
