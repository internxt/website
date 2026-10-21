import { PromoCodeName } from '@/lib/types';

export enum Campaign {
  Campaign2 = 'campaign2',
  BlackFriday = 'blackFriday',
  CyberWeek = 'cyberWeek',
  Test = 'test',
}

const CAMPAIGN_SUFFIXES = {
  [Campaign.Campaign2]: 'CM87',
  [Campaign.BlackFriday]: 'BF90',
  [Campaign.CyberWeek]: 'CW90',
  [Campaign.Test]: 'TEST',
} as const;

type CampaignSuffix = typeof CAMPAIGN_SUFFIXES[Campaign];

export type ResolvedPromoCode = `${PromoCodeName}` | `${PromoCodeName}${CampaignSuffix}`;

export interface ActiveCampaigns {
  campaign?: Campaign;
  earlyReleaseCampaign?: Campaign;
}

const CAMPAIGN_EXCEPTIONS: ReadonlySet<PromoCodeName> = new Set([]);

export const EARLY_RELEASE_CAMPAIGNS: ReadonlySet<Campaign> = new Set([
  Campaign.BlackFriday,
  Campaign.CyberWeek,
  Campaign.Test,
]);

export const EARLY_RELEASE_DAYS = 1;

const EARLY_RELEASE_CODES: ReadonlySet<PromoCodeName> = new Set([PromoCodeName.simon42]);

export const isCampaign = (value: unknown): value is Campaign =>
  typeof value === 'string' && (Object.values(Campaign) as string[]).includes(value);

export const hasEarlyRelease = (name: PromoCodeName): boolean => EARLY_RELEASE_CODES.has(name);

export const applyCampaign = (name: PromoCodeName, campaign?: Campaign): ResolvedPromoCode => {
  if (!campaign || CAMPAIGN_EXCEPTIONS.has(name)) return name;

  return `${name}${CAMPAIGN_SUFFIXES[campaign]}`;
};
