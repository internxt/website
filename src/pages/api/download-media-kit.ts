import { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
const archiver = require('archiver');

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(405).end('method not allowed');

  try {
    // Get the folder path thorough the query string
    const { relativePath } = req.query as { relativePath: string };
    const namePath = relativePath.split('/').pop();

    const folderPath = path.join(process.cwd(), 'public', relativePath as string);
    const zipFileName = `${namePath}.zip`;

    // Crear un archivo ZIP de la carpeta
    const archive = archiver('zip', { zlib: { level: 9 } });

    res.setHeader('Content-Type', 'application/zip');
    res.setHeader('Content-Disposition', `attachment; filename=${zipFileName}`);

    archive.pipe(res);

    archive.directory(folderPath, false);
    archive.finalize();
  } catch (err) {
    const error = err as Error;
    return res.status(500).json({
      error: error.message,
    });
  }
}
