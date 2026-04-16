import axios, { AxiosError } from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

const KLAVIYO_PRIVATE_API_KEY = process.env.KLAVIYO_PRIVATE_API_KEY;
const KLAVIYO_S3_LIST_ID = process.env.KLAVIYO_S3_CONTACT_LIST_ID;
const KLAVIYO_API_URL = 'https://a.klaviyo.com/api';
const KLAVIYO_API_REVISION = '2024-10-15';

const THROTTLE_TIME = 60 * 1000;
const requestTimestamps = new Map<string, number>();

const VALID_STORAGE_OPTIONS = ['Less than 10TB', '10TB - 50TB', '50TB - 100 TB', 'More than 100TB'];

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

  const now = Date.now();
  const lastRequest = requestTimestamps.get(ip) || 0;

  if (now - lastRequest < THROTTLE_TIME) {
    return res.status(429).json({ status: 'Error' });
  }

  requestTimestamps.set(ip, now);

  const { email, name, company, phone, storage, help, locale } = req.body;

  if (!email || !name || !company || !phone || !storage) {
    return res.status(400).json({ status: 'Error', message: 'Missing required fields' });
  }

  if (!email.includes('@') || email.length > 254) {
    return res.status(400).json({ status: 'Error', message: 'Invalid email' });
  }

  if (!VALID_STORAGE_OPTIONS.includes(storage)) {
    return res.status(400).json({ status: 'Error', message: 'Invalid storage option' });
  }

  if (name.length > 100 || company.length > 100 || phone.length > 30 || (help && help.length > 1000)) {
    return res.status(400).json({ status: 'Error', message: 'Field too long' });
  }

  try {
    await createS3Contact({ email, name, company, phone, storage, help: help || '', locale });
    res.status(200).json({ status: 'Success' });
  } catch (error) {
    const axiosError = error as AxiosError;
    res.status(500).json({ status: 'Error', message: axiosError.message });
  }
}

const profileAttributes = (
  email: string,
  name: string,
  company: string,
  phone: string,
  storage: string,
  help: string,
  locale: string,
) => ({
  email,
  first_name: name,
  locale,
  properties: { company, phone, storage, help, origin_contact: 'S3' },
});

async function getOrCreateProfile(
  email: string,
  name: string,
  company: string,
  phone: string,
  storage: string,
  help: string,
  locale: string,
): Promise<string> {
  try {
    const response = await klaviyoAxios.post<{ data: { id: string } }>('/profiles/', {
      data: {
        type: 'profile',
        attributes: profileAttributes(email, name, company, phone, storage, help, locale),
      },
    });
    return response.data.data.id;
  } catch (error) {
    const axiosError = error as AxiosError<any>;
    if (axiosError.response?.status === 409) {
      const duplicateId = axiosError.response.data?.errors?.[0]?.meta?.duplicate_profile_id;
      if (duplicateId) {
        await klaviyoAxios.patch(`/profiles/${duplicateId}/`, {
          data: {
            type: 'profile',
            id: duplicateId,
            attributes: profileAttributes(email, name, company, phone, storage, help, locale),
          },
        });
        return duplicateId;
      }
    }
    throw error;
  }
}

async function createS3Contact({
  email,
  name,
  company,
  phone,
  storage,
  help,
  locale,
}: {
  email: string;
  name: string;
  company: string;
  phone: string;
  storage: string;
  help: string;
  locale: string;
}) {
  const profileId = await getOrCreateProfile(email, name, company, phone, storage, help, locale);

  await klaviyoAxios.post(`/lists/${KLAVIYO_S3_LIST_ID}/relationships/profiles/`, {
    data: [{ type: 'profile', id: profileId }],
  });
}
