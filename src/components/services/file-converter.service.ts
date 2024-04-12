import { PDFDocument } from 'pdf-lib';

import Tesseract from 'tesseract.js';

import { allowedExtensions } from '@/components/file-converter/types';
import { convertFileToPdf, convertImage, convertImagesToPdf } from '@/components/utils/converter';

function downloadBlob(url: string, fileName: string) {
  const link = document.createElement('a');
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/**
 *
 * @param files - File that we want to convert
 * @param lastExtensionInPathname - Extension we want to convert it to
 * Downloads de blob directly or returns the message error got from the server side
 */
const handleFileConverter = async (files: FileList, lastExtensionInPathname: string) => {
  if (!files) {
    throw new Error('Something went wrong');
  }

  const file = files[0] as unknown as File;

  try {
    const response = await convertFileToPdf(file, allowedExtensions[lastExtensionInPathname]);

    const url = window.URL.createObjectURL(response as Blob);
    const fileName = `${file.name.split('.')[0]}.${lastExtensionInPathname}`;

    downloadBlob(url, fileName);
  } catch (err) {
    const error = err as Error;
    return error.message;
  }
};

/**
 *
 * @param files - Images we want to add to a PDF
 */
const handleImagesToPdfConverter = async (files: FileList) => {
  const pdfUrl = await convertImagesToPdf(files as unknown as File[]);

  if (!pdfUrl) {
    throw new Error('Something went wrong');
  }

  downloadBlob(pdfUrl, 'pdfWithImages.pdf');
};

/**
 *
 * @param filesToConvert - The image we want to convert
 * @param lastExtensionInPathname - The format we want to convert it to
 * Downloads the image directly using the blob got from the conversion
 */
const handleImageConverter = async (filesToConvert, lastExtensionInPathname) => {
  if (!filesToConvert) return;

  return new Promise((resolve, reject) => {
    try {
      const image = new Image();
      image.src = URL.createObjectURL(filesToConvert[0]);

      image.onerror = (error) => {
        console.log('[ERROR]: ', error);
        reject(new Error('Failed to load image'));
      };

      image.onload = async () => {
        const blob = await convertImage(image, lastExtensionInPathname);

        if (!blob) {
          reject(new Error('Failed to convert image'));
        }

        const fileName = `${filesToConvert[0].name.split('.')[0]}.${lastExtensionInPathname.toLowerCase()}`;
        const url = window.URL.createObjectURL(blob);

        downloadBlob(url, fileName);
        resolve('Image Downloaded Successfully');
      };
    } catch (err) {
      reject(err);
    }
  });
};

const handleImageToTextConverter = async (imageToConvert: File) => {
  const fontSize = 12;
  const filename = imageToConvert.name.split('.')[0];
  const file = imageToConvert;

  if (!file) return;

  return new Promise(async (resolve, reject) => {
    try {
      const pdfDoc = await PDFDocument.create();
      const reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onload = async () => {
        const {
          data: { text },
        } = await Tesseract.recognize(file, 'eng', {
          logger: (m) => {
            // you can add a console.log for debug purposes.
          },
        });

        const page = pdfDoc.addPage();

        const { height } = page.getSize();

        page.drawText(text, {
          x: 50,
          y: height - 4 * fontSize,
          size: fontSize,
        });

        const pdfBytes = await pdfDoc.save();
        const blob = new Blob([pdfBytes], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);

        resolve('The image has been converted');

        downloadBlob(url, filename);
      };
    } catch (err) {
      const error = err as Error;
      reject(error.message);
    }
  });
};

const fileConverterService = {
  handleFileConverter,
  handleImagesToPdfConverter,
  handleImageConverter,
  handleImageToTextConverter,
};

export default fileConverterService;
