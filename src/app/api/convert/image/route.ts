import { allowedExtensions } from '@/components/file-converter/types';
import { NextResponse } from 'next/server';

const isProduction = process.env.NODE_ENV == 'production';

const API_HOSTNAME = isProduction ? process.env.FILE_CONVERTER_API : 'http://localhost:3000';

export async function POST(req: Request, res: Response) {
  const fromExtension = req.url.split('from=')[1].split('&')[0];
  const toExtension = req.url.split('to=')[1];

  console.log('[FROM EXTENSION]: ', fromExtension, '[TO EXTENSION]: ', toExtension);

  try {
    const formData = await req.formData();
    const file = formData.get('file');

    if (!(toExtension in allowedExtensions) || fromExtension === toExtension) {
      return new NextResponse('Extensions not allowed', {
        status: 405,
      });
    }

    const response = await fetch(`${API_HOSTNAME}/api/convert/stream/image?from=${fromExtension}&to=${toExtension}`, {
      method: 'POST',
      body: file,
    });

    if (!response.ok || !response.body) {
      const message = await response.text();
      return new NextResponse(message, {
        status: response.status,
      });
    }

    const chunks: Uint8Array[] = [];
    const reader = response.body.getReader();

    while (true) {
      const { done, value } = await reader.read();

      if (done) {
        break;
      }

      chunks.push(value);
    }

    const blob = new Blob(chunks);
    return new NextResponse(blob);
  } catch (err) {
    const error = err as Error;
    console.error('[ERROR CONVERTING AN IMAGE]: ', error.stack ?? error.message);
  }
}
