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
    res.status(405).json({ error: textContent.error405 });
    return;
  }

  setInterval(() => {
    cache.clear();
  }, CACHE_CLEAN_INTERVAL_MS);

  const { email } = req.query;

  if (!email || typeof email !== 'string') {
    res.status(400).json({ error: textContent.error400 });
    return;
  }

  try {
    if (cache.has(email)) {
      res.status(200).json(cache.get(email));
      return;
    }

    const url = `${API_URL}/${encodeURIComponent(email)}?truncateResponse=false`;
    const headers = {
      'hibp-api-key': API_KEY,
    };

    const response = await axios.get(url, { headers });

    cache.set(email, response.data);
    res.status(200).json(response.data);
  } catch (err: any) {
    res.status(500).json({ error: textContent.error500, details: err.response?.data });
  }
}
