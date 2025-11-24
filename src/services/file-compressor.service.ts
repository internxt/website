import imageCompression from 'browser-image-compression';
import JSZip from 'jszip';
import * as XLSX from 'xlsx';
import mammoth from 'mammoth';
import { compressPDFSmart } from './pdfCompressor';

function downloadBlob(url: string, fileName: string) {
  const link = document.createElement('a');
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

type CompressionType = 'image' | 'document' | 'video' | 'archive';

interface CompressionResult {
  success: boolean;
  originalSize: number;
  compressedSize: number;
  compressionRatio: number;
  method?: string;
  error?: string;
}

const formatBytes = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
};

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

const compressPDF = async (file: File): Promise<{ blob: Blob; info: any }> => {
  try {
    const result = await compressPDFSmart(file, {
      quality: 0.7,
      scale: 0.8,
      maxWidth: 1920,
    });

    return {
      blob: result.compressedBlob,
      info: result,
    };
  } catch (error) {
    throw new Error(`PDF compression failed: ${(error as Error).message}`);
  }
};

const compressExcelFile = async (file: File): Promise<Blob> => {
  try {
    const arrayBuffer = await file.arrayBuffer();
    const workbook = XLSX.read(arrayBuffer, { type: 'array' });

    workbook.SheetNames.forEach((sheetName) => {
      const worksheet = workbook.Sheets[sheetName];

      Object.keys(worksheet).forEach((key) => {
        if (key.startsWith('!')) return;
        const cell = worksheet[key];
        if (!cell || !cell.v || cell.v === '') {
          delete worksheet[key];
        }
      });
    });

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

const compressWordFile = async (file: File): Promise<Blob> => {
  try {
    const arrayBuffer = await file.arrayBuffer();

    const result = await mammoth.extractRawText({ arrayBuffer });

    const simplifiedContent = result.value
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => line.length > 0)
      .join('\n');

    return new Blob([simplifiedContent], { type: 'text/plain' });
  } catch (error) {
    throw new Error('Word compression failed');
  }
};

const compressPowerPointFile = async (file: File, fileExtension: string): Promise<Blob> => {
  try {
    const arrayBuffer = await file.arrayBuffer();

    if (fileExtension.toLowerCase() === 'pptx') {
      const zip = new JSZip();
      const zipContent = await zip.loadAsync(arrayBuffer);

      const newZip = new JSZip();

      for (const [filename, zipEntry] of Object.entries(zipContent.files)) {
        if (!zipEntry.dir) {
          const content = await zipEntry.async('uint8array');

          const skipCompression = [
            '[Content_Types].xml',
            '_rels/.rels',
            'docProps/app.xml',
            'docProps/core.xml',
            'ppt/presProps.xml',
            'ppt/viewProps.xml',
          ];

          const aggressiveCompression = [
            'ppt/slides/slide',
            'ppt/slideLayouts/slideLayout',
            'ppt/slideMasters/slideMaster',
            'ppt/theme/theme',
            'ppt/tableStyles.xml',
            'ppt/tags/tag',
          ];

          if (skipCompression.some((skip) => filename.includes(skip))) {
            newZip.file(filename, content, { compression: 'STORE' });
          } else if (aggressiveCompression.some((agg) => filename.includes(agg))) {
            newZip.file(filename, content, {
              compression: 'DEFLATE',
              compressionOptions: { level: 9 },
            });
          } else {
            newZip.file(filename, content, {
              compression: 'DEFLATE',
              compressionOptions: { level: 6 },
            });
          }
        } else {
          newZip.folder(filename);
        }
      }

      const compressedPpt = await newZip.generateAsync({
        type: 'blob',
        compression: 'DEFLATE',
        compressionOptions: { level: 9 },
      });

      return compressedPpt;
    } else if (fileExtension.toLowerCase() === 'ppt') {
      return file;
    }

    return file;
  } catch (error) {
    throw new Error(`PowerPoint compression failed: ${(error as Error).message}`);
  }
};

const compressOfficeDocument = async (file: File, fileExtension: string): Promise<Blob> => {
  try {
    if (['xls', 'xlsx'].includes(fileExtension.toLowerCase())) {
      return await compressExcelFile(file);
    }

    if (['doc', 'docx'].includes(fileExtension.toLowerCase())) {
      return await compressWordFile(file);
    }

    if (['ppt', 'pptx'].includes(fileExtension.toLowerCase())) {
      return await compressPowerPointFile(file, fileExtension);
    }

    return file;
  } catch (error) {
    throw new Error(`${fileExtension.toUpperCase()} compression failed`);
  }
};

const compressZIP = async (file: File): Promise<Blob> => {
  try {
    const zip = new JSZip();
    const zipContent = await zip.loadAsync(file);

    const newZip = new JSZip();

    for (const [filename, zipEntry] of Object.entries(zipContent.files)) {
      if (!zipEntry.dir) {
        const content = await zipEntry.async('uint8array');
        newZip.file(filename, content, { compression: 'DEFLATE', compressionOptions: { level: 9 } });
      } else {
        newZip.folder(filename);
      }
    }

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

const compressVideo = async (file: File): Promise<Blob> => {
  return new Promise((resolve, reject) => {
    const video = document.createElement('video');
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    video.onloadedmetadata = () => {
      const scale = 0.5;
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
        );
      }
    };

    video.onerror = () => {
      reject(new Error('Video compression failed'));
    };

    video.src = URL.createObjectURL(file);
  });
};

const handleFileCompression = async (
  file: File,
  compressionType: CompressionType,
  fileExtension: string,
): Promise<CompressionResult> => {
  if (!file) {
    throw new Error('No file provided');
  }

  const originalSize = file.size;
  let compressedBlob: Blob;
  let method = 'unknown';

  try {
    switch (compressionType) {
      case 'image':
        compressedBlob = await compressImage(file);
        method = 'image-compression';
        break;

      case 'document':
        if (fileExtension.toLowerCase() === 'pdf') {
          const result = await compressPDF(file);
          compressedBlob = result.blob;
          method = result.info.method;
        } else if (['doc', 'docx', 'ppt', 'pptx', 'xls', 'xlsx'].includes(fileExtension.toLowerCase())) {
          compressedBlob = await compressOfficeDocument(file, fileExtension);
          method = 'office-compression';
        } else {
          compressedBlob = file;
          method = 'no-compression';
        }
        break;

      case 'video':
        compressedBlob = await compressVideo(file);
        method = 'video-frame-extraction';
        break;

      case 'archive':
        if (fileExtension.toLowerCase() === 'zip') {
          compressedBlob = await compressZIP(file);
          method = 'zip-recompression';
        } else {
          compressedBlob = file;
          method = 'no-compression';
        }
        break;

      default:
        throw new Error('Unsupported compression type');
    }

    const compressedSize = compressedBlob.size;
    const compressionRatio = ((originalSize - compressedSize) / originalSize) * 100;

    if (compressedSize >= originalSize) {
      compressedBlob = file;
    }

    const url = window.URL.createObjectURL(compressedBlob);
    const fileName = `${file.name.split('.')[0]}-compressed.${fileExtension}`;

    downloadBlob(url, fileName);

    setTimeout(() => URL.revokeObjectURL(url), 100);

    return {
      success: true,
      originalSize,
      compressedSize: compressedBlob.size,
      compressionRatio: Math.max(0, compressionRatio),
      method,
    };
  } catch (err) {
    const error = err as Error;

    return {
      success: false,
      originalSize,
      compressedSize: originalSize,
      compressionRatio: 0,
      error: error.message,
    };
  }
};

const fileCompressorService = {
  handleFileCompression,
  formatBytes,
};

export default fileCompressorService;
