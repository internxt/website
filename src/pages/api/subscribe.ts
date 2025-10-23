import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ status: 'Error', message: 'Method not allowed' });
  }

  const { email, firstName, groups } = req.body;

  if (!email || !email.includes('@')) {
    return res.status(400).json({ status: 'Error', message: 'Invalid email address' });
  }

  try {
    await createUser(email, groups, firstName);
    res.status(200).json({ status: 'OK', email: email });
  } catch (error: any) {
    if (error.response?.status === 409) {
      return res.status(409).json({
        status: 'Error',
        message: 'Email already subscribed',
      });
    }

    res.status(500).json({
      status: 'Error',
      message: error.response?.data?.errors?.[0]?.detail || error.message || 'Subscription failed',
    });
  }
}

async function createUser(email: string, groups: string[], firstName?: string) {
  const listId = groups?.[0] || process.env.NEXT_PUBLIC_KLAVIYO_LIST_ID;

  if (!listId) {
    throw new Error('No list ID provided');
  }

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

  const profileResponse = await axios.post('https://a.klaviyo.com/api/profiles/', profilePayload, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Klaviyo-API-Key ${process.env.KLAVIYO_PRIVATE_API_KEY}`,
      revision: '2024-10-15',
    },
  });

  const profileId = profileResponse.data.data.id;

  const subscribePayload = {
    data: [
      {
        type: 'profile',
        id: profileId,
      },
    ],
  };

  const subscribeResponse = await axios.post(
    `https://a.klaviyo.com/api/lists/${listId}/relationships/profiles/`,
    subscribePayload,
    {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Klaviyo-API-Key ${process.env.KLAVIYO_PRIVATE_API_KEY}`,
        revision: '2024-10-15',
      },
    },
  );

  return subscribeResponse.data;
}
