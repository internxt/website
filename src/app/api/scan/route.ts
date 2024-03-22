import { NextResponse } from 'next/server';

const API_HOSTNAME = process.env.FILE_SCANNER_URL;

export async function POST(req: Request, res: Response) {
  try {
    const formData = await req.formData();
    const file = formData.get('file');

    const requestOptions = {
      method: 'POST',
      body: formData,
    };

    const response = await fetch(`${API_HOSTNAME}/filescan`, requestOptions);

    if (!response.ok || !response.body) {
      return new NextResponse('Something went wrong', {
        status: response.status,
      });
    }

    const { isInfected } = await response.json();

    return new NextResponse(isInfected);
  } catch (err) {
    const error = err as Error;

    if (error.message.includes('File too large')) {
      return new NextResponse(error.message, {
        status: 413,
      });
    }

    return new NextResponse(error.message, {
      status: 500,
    });
  }
}
