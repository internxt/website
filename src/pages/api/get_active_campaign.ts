import { NextApiRequest, NextApiResponse } from 'next';
import { Campaign, EARLY_RELEASE_CAMPAIGNS, EARLY_RELEASE_DAYS } from '@/lib/helpers/campaigns';

interface ActiveCampaignResponse {
  campaign: Campaign | null;
  earlyReleaseCampaign: Campaign | null;
}

const CAMPAIGN_PERIODS: { campaign: Campaign; from: string; to: string }[] = [
  { campaign: Campaign.Campaign2, from: '2026-11-02', to: '2026-11-23' },
  { campaign: Campaign.BlackFriday, from: '2026-11-23', to: '2026-11-30' },
  { campaign: Campaign.CyberWeek, from: '2026-11-30', to: '2026-12-05' },
];

const DEFAULT_TIME_ZONE = 'UTC';

const toTimeZone = (value: NextApiRequest['query'][string]): string => {
  if (typeof value !== 'string') return DEFAULT_TIME_ZONE;

  try {
    new Intl.DateTimeFormat('en-CA', { timeZone: value });

    return value;
  } catch {
    return DEFAULT_TIME_ZONE;
  }
};

const getLocalDate = (now: Date, timeZone: string): string =>
  new Intl.DateTimeFormat('en-CA', { timeZone, year: 'numeric', month: '2-digit', day: '2-digit' }).format(now);

const subtractDays = (date: string, days: number): string => {
  const shifted = new Date(`${date}T00:00:00Z`);
  shifted.setUTCDate(shifted.getUTCDate() - days);

  return shifted.toISOString().slice(0, 10);
};

const getActiveCampaign = (today: string): Campaign | undefined =>
  CAMPAIGN_PERIODS.find(({ from, to }) => today >= from && today < to)?.campaign;

const getEarlyReleaseCampaign = (today: string): Campaign | undefined => {
  const active = getActiveCampaign(today);

  if (active && EARLY_RELEASE_CAMPAIGNS.has(active)) return active;

  const upcoming = CAMPAIGN_PERIODS.find(
    ({ campaign, from }) =>
      EARLY_RELEASE_CAMPAIGNS.has(campaign) && today >= subtractDays(from, EARLY_RELEASE_DAYS) && today < from,
  )?.campaign;

  return upcoming ?? active;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<ActiveCampaignResponse | void>): void {
  if (req.method !== 'GET') {
    res.status(405).end();
    return;
  }

  const timeZone = toTimeZone(req.query.timeZone);
  const today = getLocalDate(new Date(), timeZone);

  res.setHeader('Cache-Control', 'no-store');
  res.status(200).json({
    campaign: getActiveCampaign(today) ?? null,
    earlyReleaseCampaign: getEarlyReleaseCampaign(today) ?? null,
  });
}
