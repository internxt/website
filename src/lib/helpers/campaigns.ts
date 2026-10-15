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

const CAMPAIGN_EXCEPTIONS: ReadonlySet<PromoCodeName> = new Set([]);

export const isCampaign = (value: unknown): value is Campaign =>
  typeof value === 'string' && (Object.values(Campaign) as string[]).includes(value);

export const applyCampaign = (name: PromoCodeName, campaign?: Campaign): ResolvedPromoCode => {
  if (!campaign || CAMPAIGN_EXCEPTIONS.has(name)) return name;

  return `${name}${CAMPAIGN_SUFFIXES[campaign]}`;
};
