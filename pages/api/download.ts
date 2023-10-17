import { downloadDriveLinks } from '../../lib/get-download-url';
import { NextApiRequest, NextApiResponse } from 'next';

// API endpoint to allow the client to download the app from any component without getServerSideProps
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'OPTIONS') {
    res.status(200).json({});
  }
  if (req.method === 'GET') {
    const platforms = await downloadDriveLinks();

    res.status(200).json({ platforms });
  } else {
    res.status(405).end(); // Método no permitido
  }
}
