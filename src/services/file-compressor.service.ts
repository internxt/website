import imageCompression from 'browser-image-compression';
import { PDFDocument } from 'pdf-lib';

function downloadBlob(url: string, fileName: string) {
  const link = document.createElement('a');
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

type CompressionType = 'image' | 'document' | 'video';

/**
 * Compresses an image file using browser-image-compression library
 */
const compressImage = async (file: File): Promise<Blob> => {
  const options = {
    maxSizeMB: 1,
    maxWidthOrHeight: 1920,
    useWebWorker: true,
  };

  try {
    const compressedFile = await imageCompression(file, options);
    return compressedFile;
  } catch (error) {
    throw new Error('Image compression failed');
  }
};

/**
 * Compresses a PDF document using pdf-lib library
 */
const compressPDF = async (file: File): Promise<Blob> => {
  try {
    const arrayBuffer = await file.arrayBuffer();
    const pdfDoc = await PDFDocument.load(arrayBuffer);

    // For PDF compression, we'll optimize the document
    // This is a basic implementation - you might want to add more optimization
    const compressedPdfBytes = await pdfDoc.save({
      useObjectStreams: true,
      addDefaultPage: false,
    });

    return new Blob([compressedPdfBytes], { type: 'application/pdf' });
  } catch (error) {
    throw new Error('PDF compression failed');
  }
};

/**
 * Compresses a video file using Web APIs
 * Note: Video compression is limited in browsers, this is a basic implementation
 */
const compressVideo = async (file: File): Promise<Blob> => {
  return new Promise((resolve, reject) => {
    const video = document.createElement('video');
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    video.onloadedmetadata = () => {
      // Set canvas size to a smaller resolution for compression
      const scale = 0.5; // Reduce quality by 50%
      canvas.width = video.videoWidth * scale;
      canvas.height = video.videoHeight * scale;
    };

    video.oncanplay = () => {
      if (ctx) {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        canvas.toBlob(
          (blob) => {
            if (blob) {
              resolve(blob);
            } else {
              reject(new Error('Video compression failed'));
            }
          },
          'video/webm',
          0.7,
        ); // Reduce quality to 70%
      }
    };

    video.onerror = () => {
      reject(new Error('Video compression failed'));
    };

    video.src = URL.createObjectURL(file);
  });
};

/**
 * Handles file compression based on the file type using client-side libraries
 * @param file - The file to compress
 * @param compressionType - The type of compression to apply (image, document, or video)
 * @param fileExtension - The original file extension
 */
const handleFileCompression = async (file: File, compressionType: CompressionType, fileExtension: string) => {
  if (!file) {
    throw new Error('No file provided');
  }

  try {
    let compressedBlob: Blob;

    switch (compressionType) {
      case 'image':
        compressedBlob = await compressImage(file);
        break;
      case 'document':
        if (fileExtension.toLowerCase() === 'pdf') {
          compressedBlob = await compressPDF(file);
        } else {
          // For other document types, we'll return the original file
          // as client-side compression for these formats is complex
          compressedBlob = file;
        }
        break;
      case 'video':
        compressedBlob = await compressVideo(file);
        break;
      default:
        throw new Error('Unsupported compression type');
    }

    const url = window.URL.createObjectURL(compressedBlob);
    const fileName = `${file.name.split('.')[0]}-compressed.${fileExtension}`;

    downloadBlob(url, fileName);
  } catch (err) {
    const error = err as Error;
    throw new Error(error.message);
  }
};

const fileCompressorService = {
  handleFileCompression,
};

export default fileCompressorService;
