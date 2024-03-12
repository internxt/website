import ImagesToPDF from '@coderosh/images-to-pdf';

/**
 *
 * @param file The file we want to convert
 * @param format The format we want to convert it to
 * @returns The blob of the file to download
 */
async function convertFileToPdf(file: File, format: string) {
  const formData = new FormData();
  formData.append('file', file);
  console.log(format);

  try {
    const response = await fetch(`/api/convert?format=${format.toLowerCase()}`, {
      method: 'POST',
      body: formData,
    });

    return response.ok ? await response.blob() : null;
  } catch (err) {
    console.error('Error converting file:', err);
    return null;
  }
}

function downloadBlob(url: string, fileName: string) {
  const link = document.createElement('a');
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
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
  } catch (error) {
    console.error('Error converting images to PDF:', error);
  }
}

/**
 *
 * @param image The image file we want to convert
 * @param newFormat The format we want to convert it to
 * @returns The blob of the image or null if the conversion fails
 */
async function convertImage(image, newFormat: string): Promise<Blob | null> {
  return new Promise((resolve) => {
    const canvas = new OffscreenCanvas(image.width, image.height);
    const context = canvas.getContext('2d');

    if (!context) {
      console.error('Canvas context not supported.');
      resolve(null);
      return;
    }

    try {
      context.drawImage(image, 0, 0);

      canvas.convertToBlob({ type: `image/${newFormat.toLowerCase()}` }).then((blob) => {
        if (!blob) {
          console.error('Conversion to blob failed.');
          resolve(null);
          return;
        }

        resolve(blob);
      });
    } catch (error) {
      console.error('Error during image conversion:', error);
      resolve(null);
    }
  });
}

const fileConverterService = {
  convertFileToPdf,
  downloadBlob,
  convertImagesToPdf,
  convertImage,
};

export default fileConverterService;
