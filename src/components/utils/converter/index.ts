import { allowedExtensions } from '@/components/file-converter/types';
import ImagesToPDF from '@coderosh/images-to-pdf';

const isProduction = process.env.NODE_ENV == 'production';
const API_HOSTNAME = isProduction ? process.env.NEXT_PUBLIC_FILE_CONVERTER_API : 'http://localhost:3000';

/**
 * @param file The file we want to convert
 * @param format The format we want to convert it to
 * @returns The blob of the file to download
 */
async function convertFileToPdf(file: File, format: string): Promise<Blob | Error> {
  const formData = new FormData();
  formData.append('file', file);

  if (!(format in allowedExtensions) || !file) {
    throw new Error('Extensions not allowed');
  }

  const response = await fetch(`${API_HOSTNAME}/api/convert/stream?format=${format}`, {
    method: 'POST',
    body: file,
  });

  if (!response.ok || !response.body) {
    if (response.status === 413) {
      throw new Error('File too large');
    } else if (response.status === 500) {
      throw new Error('Something went wrong');
    }
  }

  const blob = await response.blob();

  return blob;
}

async function imageConverter(file: File, fromExtension: string, toExtension: string): Promise<Blob | Error> {
  const formData = new FormData();
  formData.append('file', file);

  if (!(toExtension in allowedExtensions) || fromExtension === toExtension) {
    throw new Error('Extensions not allowed');
  }

  try {
    const response = await fetch(`${API_HOSTNAME}/api/convert/stream/image?from=${fromExtension}&to=${toExtension}`, {
      method: 'POST',
      body: file,
    });

    console.log('response', response);

    if (!response.ok || !response.body) {
      if (response.status === 413) {
        throw new Error('File too large');
      } else if (response.status === 500) {
        throw new Error('Something went wrong');
      }
    }

    const blob = await response.blob();

    return blob;
  } catch (err) {
    console.log('error', err);
    const error = new Error(err);
    throw new Error(error.message);
  }
}

/**
 * @param files - Array of all images that we need to add to a PDF
 * @returns the url to download the PDF from the client side
 */
async function convertImagesToPdf(files: File[]) {
  try {
    if (!files || files.length === 0) {
      console.error('No images selected.');
      return;
    }

    const imgArrayBuffer = await Promise.all(Array.from(files).map((image) => image.arrayBuffer()));

    const imgToPdf = new ImagesToPDF();

    imgArrayBuffer.forEach((image) => {
      imgToPdf.addImage(image);
    });

    const pdf = await imgToPdf.createPdf();

    const dataUrl = pdf.dataUrl();

    return dataUrl;
  } catch (err) {
    const error = err as Error;
    console.error('Error converting images to PDF:', error);
    throw new Error(error.message);
  }
}

export { convertFileToPdf, imageConverter, convertImagesToPdf };
