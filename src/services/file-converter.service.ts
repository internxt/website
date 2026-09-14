import { PDFDocument } from 'pdf-lib';

import Tesseract from 'tesseract.js';

import { allowedExtensions } from '@/components/file-converter/types';
import { convertFileToPdf, convertImagesToPdf, imageConverter } from '@/components/utils/converter';

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
    throw new Error(error.message);
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

const handleImageConverter = async (fileToConvert: File, fromExtension: string, toExtension: string) => {
  if (!fileToConvert) {
    return;
  }

  try {
    const response = await imageConverter(fileToConvert, fromExtension, toExtension);

    const url = window.URL.createObjectURL(response as Blob);
    const fileName = `${fileToConvert.name.split('.')[0]}.${toExtension}`;

    downloadBlob(url, fileName);
  } catch (err) {
    const error = err as Error;
    throw new Error(error.message);
  }
};

const handleImageToTextConverter = async (imageToConvert: File) => {
  const fontSize = 12;
  const filename = imageToConvert.name.split('.')[0];
  const file = imageToConvert;

  if (!file) return;
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

      downloadBlob(url, filename);
    };
  } catch (err) {
    const error = err as Error;
    console.error(`ERROR WHILE EXTRACTING THE TEXT FROM AN IMAGE: ${error.stack ?? error.message}`);
  }
};

const fileConverterService = {
  handleFileConverter,
  handleImagesToPdfConverter,
  handleImageConverter,
  handleImageToTextConverter,
};

export default fileConverterService;
