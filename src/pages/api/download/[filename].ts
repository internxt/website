import { NextApiRequest, NextApiResponse } from 'next';

const API_URL = process.env.STATIC_CONTENT_SERVING_URL;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(405).end('Method Not Allowed');

  const { filename } = req.query;

  if (!API_URL) {
    return res.status(500).end('API_URL is not defined');
  }

  try {
    const downloadUrl = `${API_URL}/${filename}`;

    // Return de downloadUrl
    return res.status(200).json({ downloadUrl });
  } catch (err) {
    const error = err as Error;
    return res.status(500).json({
      message: 'Internal Server Error',
      error: error.message,
    });
  }
}
