import { NextResponse } from 'next/server';
import mammoth from 'mammoth';
import { PDFDocument } from 'pdf-lib';

import fs from 'fs';
import path from 'path';

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

  try {
    const filePath = await copyFileToTmp(file);

    const htmlObj = await mammoth.extractRawText({ path: filePath });

    // Genera un nuevo PDF con pdf-lib
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage();
    page.drawText(htmlObj.value, { x: 50, y: 500, font: await pdfDoc.embedFont('Helvetica') });

    // Convierte el PDF a un ArrayBuffer
    const pdfBytes = await pdfDoc.saveAsBase64({ dataUri: true });

    // Envía el PDF al cliente
    return NextResponse.json(pdfBytes);
  } catch (error) {
    console.log('ERROR:', error);
    return NextResponse.json({ message: 'error' });
  }
}
