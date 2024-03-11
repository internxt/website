import { NextResponse } from 'next/server';

const API_HOSTNAME = process.env.FILE_CONVERTER_HOSTNAME;

export async function POST(req: Request, res: Response) {
  try {
    const format = req.url.split('format=')[1];
    console.log(format);

    const formData = await req.formData();
    const file = formData.get('file');

    const response = await fetch(`${API_HOSTNAME}/api/convert/stream?format=${format}`, {
      method: 'POST',
      body: file,
    });

    if (!response.ok || !response.body) {
      return NextResponse.json({ message: 'error', error: response.text() });
    }

    const chunks: Uint8Array[] = [];
    const reader = response.body.getReader();

    console.log('Reading response body...');

    while (true) {
      const { done, value } = await reader.read();

      if (done) {
        break;
      }

      chunks.push(value);
    }

    const blob = new Blob(chunks);
    return new NextResponse(blob);
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ message: 'error', error: error.message });
  }
}
