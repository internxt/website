// pages/api/convertImagesToPDF.ts
import ImagesToPDF from '@coderosh/images-to-pdf';
import { NextApiRequest, NextApiResponse } from 'next';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const images = req.body.images as string[];

  const html = images.map((image) => `<img src="${image}" />`).join('\n');
};
