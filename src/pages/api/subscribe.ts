import axios, { AxiosError } from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

const KLAVIYO_PRIVATE_API_KEY = process.env.KLAVIYO_PRIVATE_API_KEY;
const ALLOWED_LIST_ID = process.env.NEXT_PUBLIC_KLAVIYO_LIST_ID;
const KLAVIYO_API_URL = 'https://a.klaviyo.com/api';
const KLAVIYO_API_REVISION = '2024-10-15';

if (!KLAVIYO_PRIVATE_API_KEY) {
  throw new Error('KLAVIYO_PRIVATE_API_KEY environment variable must be configured');
}
if (!ALLOWED_LIST_ID) {
  throw new Error('NEXT_PUBLIC_KLAVIYO_LIST_ID environment variable must be configured');
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

async function createUser(email: string, firstName?: string) {
  const profilePayload: any = {
    data: {
      type: 'profile',
      attributes: {
        email: email,
      },
    },
  };

  if (firstName) {
    profilePayload.data.attributes.first_name = firstName;
  }

  const profileResponse = await klaviyoAxios.post('/profiles/', profilePayload);
  const profileId = profileResponse.data.data.id;

  const subscribePayload = {
    data: [
      {
        type: 'profile',
        id: profileId,
      },
    ],
  };

  const subscribeResponse = await klaviyoAxios.post(
    `/lists/${ALLOWED_LIST_ID}/relationships/profiles/`,
    subscribePayload,
  );

  return subscribeResponse.data;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ status: 'Error', message: 'Method not allowed' });
  }

  const { email, firstName } = req.body;

  if (!email || !email.includes('@')) {
    return res.status(400).json({ status: 'Error', message: 'Invalid email address' });
  }

  try {
    await createUser(email, firstName);
    res.status(200).json({ status: 'OK', email: email });
  } catch (error) {
    const axiosError = error as AxiosError;

    if (axiosError.response?.status === 409) {
      return res.status(409).json({
        status: 'Error',
        message: 'Email already subscribed',
      });
    }

    const klaviyoDetail = (axiosError.response?.data as any)?.errors?.[0]?.detail;
    const errorMessage = klaviyoDetail || axiosError.message || 'Subscription failed';

    res.status(500).json({
      status: 'Error',
      message: errorMessage,
    });
  }
}
