import { NextApiRequest, NextApiResponse } from 'next';
import { AxiosError } from 'axios';

import jwt from 'jsonwebtoken';
import { checkIfUserHasSubscription, getUser } from '../../lib/utils';
import { UserData } from '../../lib/types/types';

const JWT_SECRET = process.env.JWT_DRIVE_SERVER;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  if (method !== 'POST') return res.status(405).end();

  const { userEmail } = req.body;
  try {
    const userData = await getUser(userEmail);

    // Check if userData is an error
    if ((userData as AxiosError).isAxiosError) {
      if (
        (userData as any).response?.status === 500 &&
        (userData as AxiosError).response?.data.error === 'Failed to get user'
      )
        return res.status(404).json({ message: 'User not found' });
    }

    const { uuid, email, name, lastname, username, sharedWorkspace, bridgeUser, userId } = userData as UserData;

    const payload = {
      uuid,
      email,
      name,
      lastname,
      username,
      sharedWorkspace,
      networkCredentials: {
        user: bridgeUser,
        pass: userId,
      },
    };

    const token = jwt.sign(
      {
        payload,
      },
      JWT_SECRET,
    );

    const userSubscription = await checkIfUserHasSubscription(email, token);

    if (!userSubscription) return res.status(404).json({ message: 'User not found' });

    const { user, hasSubscriptions } = userSubscription;

    if (!hasSubscriptions) return res.status(403).json({ message: 'User has no subscription' });

    return res.status(200).json({
      userEmail: user.email,
      hasSubscriptions: hasSubscriptions,
    });
  } catch (err) {
    const error = new Error(err);

    return res.status(500).json(error.message);
  }
}
