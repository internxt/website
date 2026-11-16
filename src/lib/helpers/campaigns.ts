import { PromoCodeName } from '@/lib/types';

export enum Campaign {
  Campaign2 = 'campaign2',
  BlackFriday = 'blackFriday',
  CyberWeek = 'cyberWeek',
}

const CAMPAIGN_SUFFIXES = {
  [Campaign.Campaign2]: 'CM87',
  [Campaign.BlackFriday]: 'BF90',
  [Campaign.CyberWeek]: 'CW90',
} as const;

type CampaignSuffix = typeof CAMPAIGN_SUFFIXES[Campaign];

export type ResolvedPromoCode = `${PromoCodeName}` | `${PromoCodeName}${CampaignSuffix}`;

export interface ActiveCampaigns {
  campaign?: Campaign;
  earlyReleaseCampaign?: Campaign;
}

const CAMPAIGN_EXCEPTIONS: ReadonlySet<PromoCodeName> = new Set([
  PromoCodeName.blackmonth87,
  PromoCodeName.blackmonthcn87,
  PromoCodeName.cloudwardsbm87,
  PromoCodeName.privacybm87,
  PromoCodeName.heisebm87,
  PromoCodeName.xatakabm87,
  PromoCodeName.clubicbm87,
  PromoCodeName.tdesbm87,
  PromoCodeName.tdptbm87,
  PromoCodeName.tditbm87,
  PromoCodeName.gpesbm87,
  PromoCodeName.gpitbm87,
  PromoCodeName.chollobm87,

  PromoCodeName.blackfriday90,
  PromoCodeName.blackfridaycn90,
  PromoCodeName.cloudwardsbf90,
  PromoCodeName.privacybf90,
  PromoCodeName.heisebf90,
  PromoCodeName.xatakabf90,
  PromoCodeName.clubicbf90,
  PromoCodeName.tdesbf90,
  PromoCodeName.tdptbf90,
  PromoCodeName.tditbf90,
  PromoCodeName.gpesbf90,
  PromoCodeName.gpitbf90,
  PromoCodeName.chollobf90,

  PromoCodeName.cyberweek90,
  PromoCodeName.cyberweekcn90,
  PromoCodeName.cloudwardscm90,
  PromoCodeName.privacycm90,
  PromoCodeName.heisecm90,
  PromoCodeName.xatakacm90,
  PromoCodeName.clubiccm90,
  PromoCodeName.gpescw90,
  PromoCodeName.gpitcw90,
  PromoCodeName.chollocw90,
]);

export const EARLY_RELEASE_CAMPAIGNS: ReadonlySet<Campaign> = new Set([
  Campaign.BlackFriday,
]);

export const EARLY_RELEASE_DAYS = 1;

const EARLY_RELEASE_CODES: ReadonlySet<PromoCodeName> = new Set([PromoCodeName.simon42]);

export const isCampaign = (value: unknown): value is Campaign =>
  typeof value === 'string' && (Object.values(Campaign) as string[]).includes(value);

export const hasEarlyRelease = (name: PromoCodeName): boolean => EARLY_RELEASE_CODES.has(name);

export const isCampaignException = (name: PromoCodeName): boolean => CAMPAIGN_EXCEPTIONS.has(name);

export const applyCampaign = (name: PromoCodeName, campaign?: Campaign): ResolvedPromoCode => {
  if (!campaign || isCampaignException(name)) return name;

  return `${name}${CAMPAIGN_SUFFIXES[campaign]}`;
};
