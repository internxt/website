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
 * Compresses PowerPoint files using enhanced techniques
 */
const compressPowerPointFile = async (file: File, fileExtension: string): Promise<Blob> => {
  try {
    const arrayBuffer = await file.arrayBuffer();

    if (fileExtension.toLowerCase() === 'pptx') {
      // PPTX files are ZIP-based, use enhanced ZIP compression
      const zip = new JSZip();
      const zipContent = await zip.loadAsync(arrayBuffer);

      // Create a new ZIP with maximum compression
      const newZip = new JSZip();

      // Process each file in the PowerPoint document
      for (const [filename, zipEntry] of Object.entries(zipContent.files)) {
        if (!zipEntry.dir) {
          const content = await zipEntry.async('uint8array');

          // Files that should not be compressed (essential metadata)
          const skipCompression = [
            '[Content_Types].xml',
            '_rels/.rels',
            'docProps/app.xml',
            'docProps/core.xml',
            'ppt/presProps.xml',
            'ppt/viewProps.xml',
          ];

          // Files that can be aggressively compressed
          const aggressiveCompression = [
            'ppt/slides/slide',
            'ppt/slideLayouts/slideLayout',
            'ppt/slideMasters/slideMaster',
            'ppt/theme/theme',
            'ppt/tableStyles.xml',
            'ppt/tags/tag',
          ];

          if (skipCompression.some((skip) => filename.includes(skip))) {
            // Store essential files without compression
            newZip.file(filename, content, { compression: 'STORE' });
          } else if (aggressiveCompression.some((agg) => filename.includes(agg))) {
            // Apply maximum compression to content files
            newZip.file(filename, content, {
              compression: 'DEFLATE',
              compressionOptions: { level: 9 },
            });
          } else {
            // Apply standard compression to other files
            newZip.file(filename, content, {
              compression: 'DEFLATE',
              compressionOptions: { level: 6 },
            });
          }
        } else {
          newZip.folder(filename);
        }
      }

      // Generate compressed PowerPoint file
      const compressedPpt = await newZip.generateAsync({
        type: 'blob',
        compression: 'DEFLATE',
        compressionOptions: { level: 9 },
      });

      return compressedPpt;
    } else if (fileExtension.toLowerCase() === 'ppt') {
      // For legacy PPT files, use binary optimization
      const uint8Array = new Uint8Array(arrayBuffer);

      // PPT files are OLE compound documents
      // We'll try to optimize by removing unnecessary data

      // Find the end of the actual content
      let contentEnd = uint8Array.length;

      // Look for common PPT file endings and remove trailing data

      // Remove trailing zeros and padding
      while (contentEnd > 0) {
        const lastByte = uint8Array[contentEnd - 1];
        if (lastByte === 0x00 || lastByte === 0xff || lastByte === 0x20) {
          contentEnd--;
        } else {
          break;
        }
      }

      // Also try to find the actual end of PPT content
      // Look for PPT file structure markers
      const pptMarkers = [
        [0xd0, 0xcf, 0x11, 0xe0], // OLE header
        [0x50, 0x50, 0x54], // PPT marker
        [0x50, 0x6f, 0x77, 0x65, 0x72, 0x50, 0x6f, 0x69, 0x6e, 0x74], // "PowerPoint"
      ];

      // Find the last occurrence of PPT content
      for (let i = contentEnd - 1; i >= 0; i--) {
        let found = false;
        for (const marker of pptMarkers) {
          if (i + marker.length <= contentEnd) {
            let match = true;
            for (let j = 0; j < marker.length; j++) {
              if (uint8Array[i + j] !== marker[j]) {
                match = false;
                break;
              }
            }
            if (match) {
              contentEnd = i + marker.length;
              found = true;
              break;
            }
          }
        }
        if (found) break;
      }

      // Create optimized PPT file
      const optimizedArray = uint8Array.slice(0, contentEnd);

      // If the optimization didn't reduce size significantly, try alternative approach
      if (optimizedArray.length > uint8Array.length * 0.95) {
        // Try to compress the entire file using a different approach
        // Create a simple compression by removing redundant data
        const compressed = new Uint8Array(Math.ceil(optimizedArray.length * 0.8));
        let compressedIndex = 0;

        for (let i = 0; i < optimizedArray.length; i++) {
          // Simple run-length encoding for repeated bytes
          let count = 1;
          while (i + 1 < optimizedArray.length && optimizedArray[i] === optimizedArray[i + 1] && count < 255) {
            count++;
            i++;
          }

          if (count > 3) {
            // Use run-length encoding
            compressed[compressedIndex++] = 0xff; // Marker for run-length
            compressed[compressedIndex++] = count;
            compressed[compressedIndex++] = optimizedArray[i];
          } else {
            // Copy bytes directly
            for (let j = 0; j < count; j++) {
              compressed[compressedIndex++] = optimizedArray[i - j];
            }
          }
        }

        // Trim the compressed array to actual size
        const finalCompressed = compressed.slice(0, compressedIndex);
        return new Blob([finalCompressed], { type: file.type });
      }

      return new Blob([optimizedArray], { type: file.type });
    }

    // Fallback: return original file
    return file;
  } catch (error) {
    throw new Error(`PowerPoint compression failed: ${error.message}`);
  }
};

/**
 * Compresses Office documents (DOC, PPT, XLS) by optimizing their internal structure
 * Note: This is a basic implementation that works with the ZIP-based Office formats
 */
const compressOfficeDocument = async (file: File, fileExtension: string): Promise<Blob> => {
  try {
    // Handle Excel files with xlsx library
    if (['xls', 'xlsx'].includes(fileExtension.toLowerCase())) {
      return await compressExcelFile(file);
    }

    // Handle Word files with mammoth library
    if (['doc', 'docx'].includes(fileExtension.toLowerCase())) {
      return await compressWordFile(file);
    }

    // Handle PowerPoint files with enhanced compression
    if (['ppt', 'pptx'].includes(fileExtension.toLowerCase())) {
      return await compressPowerPointFile(file, fileExtension);
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
