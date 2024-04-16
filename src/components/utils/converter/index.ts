import ImagesToPDF from '@coderosh/images-to-pdf';

/**
 * @param file The file we want to convert
 * @param format The format we want to convert it to
 * @returns The blob of the file to download
 */
async function convertFileToPdf(file: File, format: string): Promise<Blob | Error> {
  const formData = new FormData();
  formData.append('file', file);

  const response = await fetch(`/api/convert?format=${format.toLowerCase()}`, {
    method: 'POST',
    body: formData,
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

  try {
    const response = await fetch(
      `/api/convert/image?from=${fromExtension.toLowerCase()}&to=${toExtension.toLowerCase()}`,
      {
        method: 'POST',
        body: formData,
      },
    );

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

/**
 * @param image The image file we want to convert
 * @param newFormat The format we want to convert it to
 * @returns The blob of the image or null if the conversion fails
 */

export { convertFileToPdf, imageConverter, convertImagesToPdf };
