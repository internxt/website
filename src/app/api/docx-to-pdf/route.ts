import { NextResponse } from 'next/server';

import fs from 'fs';
import path from 'path';

const libre = require('libreoffice-convert');
libre.convertAsync = require('util').promisify(libre.convert);

async function copyFileToTmp(file: File) {
  const fileName = file.name;
  const tmpDir = '/tmp';
  const fileBuffer = await file.arrayBuffer();

  const destinationPath = path.join(tmpDir, fileName);

  fs.writeFile(
    destinationPath,
    Buffer.from(fileBuffer),
    {
      flag: 'a',
    },
    () => {},
  );

  return destinationPath;
}

export async function POST(req: Request, res: Response) {
  const formData = await req.formData();
  const file = formData.get('file') as unknown as File;
  const fileName = file.name.split('.').shift();

  try {
    const tmpFilePath = await copyFileToTmp(file);

    const docxBuf = fs.readFileSync(tmpFilePath);

    let pdfBuf = await libre.convertAsync(docxBuf, '.pdf', undefined);

    fs.unlink(tmpFilePath, () => {});

    return NextResponse.json({
      buffer: pdfBuf,
      filename: fileName,
    });
  } catch (error) {
    console.log('ERROR:', error);
    return NextResponse.json({ message: 'error' });
  }
}
