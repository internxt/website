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

const handleImageConverterV2 = async (fileToConvert: File, fromExtension: string, toExtension: string) => {
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

const fileConverterService = {
  handleFileConverter,
  handleImagesToPdfConverter,
  handleImageConverterV2,
};

export default fileConverterService;
