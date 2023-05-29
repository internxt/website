import { downloadDriveLinks } from '../../lib/get-download-url';

// API endpoint to allow the client to download the app from any component without getServerSideProps
export default async function handler(req, res) {
  if (req.method === 'GET') {
    const platforms = await downloadDriveLinks();

    res.status(200).json({ platforms });
  } else {
    res.status(405).end(); // Método no permitido
  }
}
