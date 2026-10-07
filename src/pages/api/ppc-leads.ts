import axios, { AxiosError } from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

import { getClientIp } from '@/utils/get-client-ip';

const KLAVIYO_PRIVATE_API_KEY = process.env.KLAVIYO_PRIVATE_API_KEY;
const KLAVIYO_PPC_LEADS_LIST_ID = process.env.KLAVIYO_PPC_LEADS_LIST_ID;
const KLAVIYO_API_URL = 'https://a.klaviyo.com/api';
const KLAVIYO_API_REVISION = '2024-10-15';

const THROTTLE_TIME = 2 * 1000;
const MAX_EMAIL_LENGTH = 254;
const MAX_LANDING_LENGTH = 100;
const requestTimestamps = new Map<string, number>();

interface KlaviyoErrorResponse {
  errors?: {
    meta?: {
      duplicate_profile_id?: string;
    };
  }[];
}

const klaviyoAxios = axios.create({
  baseURL: KLAVIYO_API_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Klaviyo-API-Key ${KLAVIYO_PRIVATE_API_KEY}`,
    revision: KLAVIYO_API_REVISION,
  },
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ status: 'Error' });
  }

  if (!KLAVIYO_PRIVATE_API_KEY || !KLAVIYO_PPC_LEADS_LIST_ID) {
    return res.status(500).json({ status: 'Error', message: 'Klaviyo is not configured' });
  }

  const ip = getClientIp(req);
  const now = Date.now();
  const lastRequest = requestTimestamps.get(ip) || 0;

  if (now - lastRequest < THROTTLE_TIME) {
    return res.status(429).json({ status: 'Error' });
  }

  requestTimestamps.set(ip, now);

  const { email, locale, landing } = req.body;

  if (!email?.includes('@') || email.length > MAX_EMAIL_LENGTH) {
    return res.status(400).json({ status: 'Error', message: 'Invalid email' });
  }

  if (landing && landing.length > MAX_LANDING_LENGTH) {
    return res.status(400).json({ status: 'Error', message: 'Field too long' });
  }

  try {
    await createPpcLead({ email, locale, landing: landing || '' });
    res.status(200).json({ status: 'Success' });
  } catch (error) {
    const axiosError = error as AxiosError;
    res.status(500).json({ status: 'Error', message: axiosError.message });
  }
}

const profileAttributes = (email: string, locale: string, landing: string) => ({
  email,
  locale,
  properties: { landing, origin_contact: 'PPC' },
});

async function getOrCreateProfile(email: string, locale: string, landing: string): Promise<string> {
  try {
    const response = await klaviyoAxios.post<{ data: { id: string } }>('/profiles/', {
      data: {
        type: 'profile',
        attributes: profileAttributes(email, locale, landing),
      },
    });
    return response.data.data.id;
  } catch (error) {
    const axiosError = error as AxiosError<KlaviyoErrorResponse>;
    if (axiosError.response?.status === 409) {
      const duplicateId = axiosError.response.data?.errors?.[0]?.meta?.duplicate_profile_id;
      if (duplicateId) {
        await klaviyoAxios.patch(`/profiles/${duplicateId}/`, {
          data: {
            type: 'profile',
            id: duplicateId,
            attributes: profileAttributes(email, locale, landing),
          },
        });
        return duplicateId;
      }
    }
    throw error;
  }
}

async function createPpcLead({ email, locale, landing }: { email: string; locale: string; landing: string }) {
  const profileId = await getOrCreateProfile(email, locale, landing);

  await klaviyoAxios.post(`/lists/${KLAVIYO_PPC_LEADS_LIST_ID}/relationships/profiles/`, {
    data: [{ type: 'profile', id: profileId }],
  });
}
