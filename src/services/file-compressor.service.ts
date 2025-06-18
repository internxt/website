import imageCompression from 'browser-image-compression';
import { PDFDocument } from 'pdf-lib';
import JSZip from 'jszip';
import * as XLSX from 'xlsx';
import mammoth from 'mammoth';

function downloadBlob(url: string, fileName: string) {
  const link = document.createElement('a');
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

type CompressionType = 'image' | 'document' | 'video' | 'archive';

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
 * Compresses Excel files using xlsx library
 */
const compressExcelFile = async (file: File): Promise<Blob> => {
  try {
    const arrayBuffer = await file.arrayBuffer();
    const workbook = XLSX.read(arrayBuffer, { type: 'array' });

    // Optimize the workbook by removing unnecessary data
    workbook.SheetNames.forEach((sheetName) => {
      const worksheet = workbook.Sheets[sheetName];

      // Remove empty rows and columns
      const range = XLSX.utils.decode_range(worksheet['!ref'] || 'A1');

      // Clean up the worksheet by removing empty cells
      Object.keys(worksheet).forEach((key) => {
        if (key.startsWith('!')) return; // Skip special keys
        const cell = worksheet[key];
        if (!cell || !cell.v || cell.v === '') {
          delete worksheet[key];
        }
      });
    });

    // Generate optimized Excel file
    const optimizedBuffer = XLSX.write(workbook, {
      type: 'array',
      bookType: 'xlsx',
      compression: true,
    });

    return new Blob([optimizedBuffer], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    });
  } catch (error) {
    throw new Error('Excel compression failed');
  }
};

/**
 * Compresses Word documents using mammoth library
 */
const compressWordFile = async (file: File): Promise<Blob> => {
  try {
    const arrayBuffer = await file.arrayBuffer();

    // Extract text content from Word document
    const result = await mammoth.extractRawText({ arrayBuffer });

    // Create a simplified document structure
    const simplifiedContent = result.value
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => line.length > 0)
      .join('\n');

    // For now, we'll create a simple text file as compressed version
    // In a real implementation, you might want to recreate a Word document
    return new Blob([simplifiedContent], { type: 'text/plain' });
  } catch (error) {
    throw new Error('Word compression failed');
  }
};

/**
 * Compresses Office documents (DOC, PPT, XLS) by optimizing their internal structure
 * Note: This is a basic implementation that works with the ZIP-based Office formats
 */
const compressOfficeDocument = async (file: File, fileExtension: string): Promise<Blob> => {
  try {
    const arrayBuffer = await file.arrayBuffer();

    // Handle Excel files with xlsx library
    if (['xls', 'xlsx'].includes(fileExtension.toLowerCase())) {
      return await compressExcelFile(file);
    }

    // Handle Word files with mammoth library
    if (['doc', 'docx'].includes(fileExtension.toLowerCase())) {
      return await compressWordFile(file);
    }

    // For Office documents (PPTX), they are essentially ZIP files
    // We can compress them by re-compressing their internal contents
    if (['pptx'].includes(fileExtension.toLowerCase())) {
      const zip = new JSZip();
      const zipContent = await zip.loadAsync(arrayBuffer);

      // Create a new ZIP with maximum compression
      const newZip = new JSZip();

      // Process each file in the Office document
      for (const [filename, zipEntry] of Object.entries(zipContent.files)) {
        if (!zipEntry.dir) {
          const content = await zipEntry.async('uint8array');

          // Skip certain files that shouldn't be compressed or are already optimized
          const skipCompression = ['[Content_Types].xml', '_rels/.rels', 'docProps/app.xml', 'docProps/core.xml'];

          if (skipCompression.some((skip) => filename.includes(skip))) {
            newZip.file(filename, content, { compression: 'STORE' });
          } else {
            // Compress content files with maximum compression
            newZip.file(filename, content, {
              compression: 'DEFLATE',
              compressionOptions: { level: 9 },
            });
          }
        } else {
          newZip.folder(filename);
        }
      }

      // Generate compressed Office document
      const compressedDoc = await newZip.generateAsync({
        type: 'blob',
        compression: 'DEFLATE',
        compressionOptions: { level: 9 },
      });

      return compressedDoc;
    }

    // For older formats (PPT), we'll use a different approach
    // These are binary formats that we can't easily compress without parsing
    if (['ppt'].includes(fileExtension.toLowerCase())) {
      // For these formats, we'll try to optimize by removing unnecessary metadata
      // This is a simplified approach - in production you might want to use specific libraries

      const uint8Array = new Uint8Array(arrayBuffer);

      // Basic optimization: try to reduce file size by removing trailing zeros
      let optimizedLength = uint8Array.length;
      while (optimizedLength > 0 && uint8Array[optimizedLength - 1] === 0) {
        optimizedLength--;
      }

      const optimizedArray = uint8Array.slice(0, optimizedLength);
      return new Blob([optimizedArray], { type: file.type });
    }

    // Fallback: return original file
    return file;
  } catch (error) {
    throw new Error(`${fileExtension.toUpperCase()} compression failed`);
  }
};

/**
 * Compresses a ZIP file using JSZip library
 */
const compressZIP = async (file: File): Promise<Blob> => {
  try {
    const zip = new JSZip();
    const zipContent = await zip.loadAsync(file);

    // Create a new ZIP with compression
    const newZip = new JSZip();

    // Process each file in the ZIP
    for (const [filename, zipEntry] of Object.entries(zipContent.files)) {
      if (!zipEntry.dir) {
        const content = await zipEntry.async('uint8array');
        newZip.file(filename, content, { compression: 'DEFLATE', compressionOptions: { level: 9 } });
      } else {
        newZip.folder(filename);
      }
    }

    // Generate compressed ZIP
    const compressedZip = await newZip.generateAsync({
      type: 'blob',
      compression: 'DEFLATE',
      compressionOptions: { level: 9 },
    });

    return compressedZip;
  } catch (error) {
    throw new Error('ZIP compression failed');
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
 * @param compressionType - The type of compression to apply (image, document, video, archive)
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
        } else if (['doc', 'docx', 'ppt', 'pptx', 'xls', 'xlsx'].includes(fileExtension.toLowerCase())) {
          compressedBlob = await compressOfficeDocument(file, fileExtension);
        } else {
          // For other document types, we'll return the original file
          compressedBlob = file;
        }
        break;
      case 'video':
        compressedBlob = await compressVideo(file);
        break;
      case 'archive':
        if (fileExtension.toLowerCase() === 'zip') {
          compressedBlob = await compressZIP(file);
        } else {
          compressedBlob = file;
        }
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
