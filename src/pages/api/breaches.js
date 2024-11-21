import checkEmail from '@/lib/emailChecker';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405);
  }

  const { email } = req.query;

  if (!email) {
    return res.status(400);
  }

  try {
    const result = await checkEmail(email);
    res.status(200).json(result);
  } catch (error) {
    res.status(500);
  }
}
