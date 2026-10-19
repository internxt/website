import { NextApiRequest, NextApiResponse } from 'next';
import { Campaign } from '@/lib/helpers/campaigns';

interface ActiveCampaign {
  campaign: Campaign | null;
}

const CAMPAIGN_PERIODS: { campaign: Campaign; from: string; to: string }[] = [
  { campaign: Campaign.Test, from: '2026-10-19', to: '2026-10-20' },
  { campaign: Campaign.Campaign2, from: '2026-11-01', to: '2026-11-23' },
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

const getActiveCampaign = (timeZone: string, now: Date = new Date()): Campaign | undefined => {
  const today = getLocalDate(now, timeZone);

  return CAMPAIGN_PERIODS.find(({ from, to }) => today >= from && today < to)?.campaign;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<ActiveCampaign | void>): void {
  if (req.method !== 'GET') {
    res.status(405).end();
    return;
  }

  const timeZone = toTimeZone(req.query.timeZone);

  res.setHeader('Cache-Control', 'no-store');
  res.status(200).json({ campaign: getActiveCampaign(timeZone) ?? null });
}
