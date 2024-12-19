import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { HaveIbeenPwnedText } from '@/assets/types/have-i-been-pawned';
const CACHE_CLEAN_INTERVAL_MS = 2 * 60 * 60 * 1000;
interface BreachesProps {
  textContent: HaveIbeenPwnedText['HeroSection']['breaches'];
}

const API_URL = process.env.INXT_MONITOR_API_URL;
const API_KEY = process.env.INXT_MONITOR_API_KEY;

const cache: Map<string, any> = new Map();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
  textContent: BreachesProps['textContent'],
): Promise<void> {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: textContent.error405 });
  }

  setInterval(() => {
    cache.clear();
  }, CACHE_CLEAN_INTERVAL_MS);

  const { email } = req.query;

  if (!email || typeof email !== 'string') {
    return res.status(400).json({ error: textContent.error400 });
  }

  try {
    if (cache.has(email)) {
      return res.status(200).json(cache.get(email));
    }

    const url = `${API_URL}/breachedaccount/${encodeURIComponent(email)}?truncateResponse=false`;
    const headers = {
      'hibp-api-key': API_KEY,
    };

    const response = await axios.get(url, { headers });

    cache.set(email, response.data);
    return res.status(200).json(response.data);
  } catch (err: any) {
    if (err.response?.status === 404) {
      return res.status(200).json({ breaches: [] });
    }
    return res.status(500).json({ error: err.response?.data });
  }
}
