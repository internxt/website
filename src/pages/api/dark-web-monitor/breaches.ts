import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const CACHE_TTL_MS = 2 * 60 * 60 * 1000;

const API_URL = process.env.INXT_MONITOR_API_URL;
const API_KEY = process.env.INXT_MONITOR_API_KEY;

const cache: Map<string, { data: any; timestamp: number }> = new Map();

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.query;

  if (!email || typeof email !== 'string') {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    const cachedEntry = cache.get(email);
    const now = Date.now();

    if (cachedEntry && now - cachedEntry.timestamp < CACHE_TTL_MS) {
      return res.status(200).json(cachedEntry.data);
    }

    if (cachedEntry) {
      cache.delete(email);
    }

    const url = `${API_URL}/breachedaccount/${encodeURIComponent(email)}?truncateResponse=false`;
    const headers = {
      'hibp-api-key': API_KEY,
      'user-agent': 'NextJS-App',
    };

    const response = await axios.get(url, { headers });

    cache.set(email, { data: response.data, timestamp: Date.now() });

    return res.status(200).json(response.data);
  } catch (err: any) {
    if (err.response?.status === 404) {
      const cleanData = [];
      cache.set(email, { data: cleanData, timestamp: Date.now() });
      return res.status(200).json(cleanData);
    }

    console.error('HIBP Error:', err.message);
    return res.status(500).json({ error: 'External API Error' });
  }
}
