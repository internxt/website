import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

// API endpoint to allow the client to download the app from any component without getServerSideProps
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'OPTIONS') {
    res.status(200).json({});
  }
  if (req.method === 'GET') {
    try {
      const { data } = await axios.get(`${process.env.NEXT_PUBLIC_COUNTRY_API_URL}`);
      res.status(200).json({ country: data.country });
    } catch (error) {
      throw new Error(error);
    }
  } else {
    res.status(405).end(); // Método no permitido
  }
}
