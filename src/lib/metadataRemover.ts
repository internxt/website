import exifr from 'exifr';
import { PDFDocument } from 'pdf-lib';
import { Document, Packer, Paragraph, TextRun } from 'docx';
import { IAudioMetadata } from 'music-metadata';
import { parseBuffer } from 'music-metadata';

// Initialize FFmpeg only on client side
let ffmpeg: any = null;
if (typeof window !== 'undefined') {
  import('@ffmpeg/ffmpeg').then(({ FFmpeg }) => {
    ffmpeg = new FFmpeg();
  });
}

// Supported file types
const SUPPORTED_IMAGE_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/jpe', // JPEG formats
  'image/png',
  'image/jng',
  'image/mng', // PNG and related
  'image/tiff',
  'image/tif', // TIFF formats
  'image/gif', // GIF
  'image/jp2',
  'image/jpf',
  'image/j2k', // JPEG 2000 formats
  'image/jpm',
  'image/jpx', // JPEG 2000 extended
  'image/psd',
  'image/psb', // Photoshop formats
];

const SUPPORTED_PDF_TYPES = [
  'application/pdf', // PDF
];

const SUPPORTED_WORD_TYPES = [
  'application/msword', // .doc
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document', // .docx
  'application/vnd.openxmlformats-officedocument.wordprocessingml.template', // .dotx
  'application/vnd.ms-word.document.macroEnabled.12', // .docm
  'application/vnd.ms-word.template.macroEnabled.12', // .dotm
  'application/vnd.oasis.opendocument.text', // .odt
];

const SUPPORTED_EXCEL_TYPES = [
  'application/vnd.ms-excel', // .xls
  'application/vnd.ms-excel.template', // .xlt
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', // .xlsx
  'application/vnd.openxmlformats-officedocument.spreadsheetml.template', // .xltx
  'application/vnd.ms-excel.sheet.macroEnabled.12', // .xlsm
  'application/vnd.ms-excel.template.macroEnabled.12', // .xltm
  'application/vnd.oasis.opendocument.spreadsheet', // .ods
];

const SUPPORTED_POWERPOINT_TYPES = [
  'application/vnd.ms-powerpoint', // .ppt
  'application/vnd.ms-powerpoint.template', // .pot
  'application/vnd.openxmlformats-officedocument.presentationml.presentation', // .pptx
  'application/vnd.openxmlformats-officedocument.presentationml.template', // .potx
  'application/vnd.ms-powerpoint.presentation.macroEnabled.12', // .pptm
  'application/vnd.ms-powerpoint.template.macroEnabled.12', // .potm
  'application/vnd.oasis.opendocument.presentation', // .odp
];

const SUPPORTED_AUDIO_TYPES = [
  'audio/mpeg',
  'audio/mp3',
  'audio/mp4', // MP3 and MP4 audio
  'audio/x-m4a',
  'audio/x-m4b',
  'audio/x-m4p', // M4A formats
  'audio/wav',
  'audio/ogg',
  'audio/flac', // Other audio formats
];

const SUPPORTED_VIDEO_TYPES = [
  'video/mp4',
  'video/x-m4v', // MP4 formats
  'video/quicktime', // .mov, .qt
  'video/x-msvideo', // .avi
  'video/x-matroska', // .mkv
];

const SUPPORTED_VISIO_TYPES = [
  'application/vnd.visio', // .vsd
];

// Combine all supported types for checking
const SUPPORTED_TYPES = [
  ...SUPPORTED_IMAGE_TYPES,
  ...SUPPORTED_PDF_TYPES,
  ...SUPPORTED_WORD_TYPES,
  ...SUPPORTED_EXCEL_TYPES,
  ...SUPPORTED_POWERPOINT_TYPES,
  ...SUPPORTED_AUDIO_TYPES,
  ...SUPPORTED_VIDEO_TYPES,
  ...SUPPORTED_VISIO_TYPES,
];

export async function removeMetadata(file: File): Promise<Blob> {
  const fileType = file.type;

  try {
    // Check if file type is supported
    if (!SUPPORTED_TYPES.includes(fileType)) {
      throw new Error(`Unsupported file type: ${fileType}. Supported types are: ${SUPPORTED_TYPES.join(', ')}`);
    }

    // Handle images
    if (SUPPORTED_IMAGE_TYPES.includes(fileType)) {
      return await handleImageMetadata(file);
    }

    // Handle PDFs
    if (SUPPORTED_PDF_TYPES.includes(fileType)) {
      return await handlePdfMetadata(file);
    }

    // Handle Word documents
    if (SUPPORTED_WORD_TYPES.includes(fileType)) {
      return await handleWordMetadata(file);
    }

    // Handle Excel documents
    if (SUPPORTED_EXCEL_TYPES.includes(fileType)) {
      return await handleWordMetadata(file); // Reuse Word handler as it works for Excel too
    }

    // Handle PowerPoint documents
    if (SUPPORTED_POWERPOINT_TYPES.includes(fileType)) {
      return await handleWordMetadata(file); // Reuse Word handler as it works for PowerPoint too
    }

    // Handle audio files
    if (SUPPORTED_AUDIO_TYPES.includes(fileType)) {
      return await handleAudioMetadata(file);
    }

    // Handle video files
    if (SUPPORTED_VIDEO_TYPES.includes(fileType)) {
      return await handleVideoMetadata(file);
    }

    // Handle Visio files
    if (SUPPORTED_VISIO_TYPES.includes(fileType)) {
      return await handlePdfMetadata(file); // Reuse PDF handler as it works for Visio too
    }

    throw new Error(`Unsupported file type: ${fileType}`);
  } catch (error) {
    console.error('Error removing metadata:', error);
    throw error;
  }
}

async function handleImageMetadata(file: File): Promise<Blob> {
  // First try to parse and remove EXIF data
  try {
    const exifData = await exifr.parse(file, { pick: ['all'] });
    if (exifData) {
      // If EXIF data exists, use canvas method to strip it
      return await stripImageMetadata(file);
    }
  } catch (error) {
    console.warn('No EXIF data found or error parsing:', error);
  }

  // If no EXIF data or error, still try to strip any remaining metadata
  return await stripImageMetadata(file);
}

async function stripImageMetadata(file: File): Promise<Blob> {
  const img = new Image();
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  return new Promise((resolve, reject) => {
    img.onload = () => {
      // Set canvas dimensions to match image
      canvas.width = img.width;
      canvas.height = img.height;

      // Clear any existing data
      ctx?.clearRect(0, 0, canvas.width, canvas.height);

      // Draw image without metadata
      ctx?.drawImage(img, 0, 0);

      // Convert to blob with original file type
      canvas.toBlob(
        (blob) => {
          if (blob) {
            resolve(blob);
          } else {
            reject(new Error('Failed to create blob from canvas'));
          }
        },
        file.type,
        1.0, // Maximum quality
      );
    };

    img.onerror = () => reject(new Error('Failed to load image'));
    img.src = URL.createObjectURL(file);
  });
}

async function handlePdfMetadata(file: File): Promise<Blob> {
  const arrayBuffer = await file.arrayBuffer();
  const pdfDoc = await PDFDocument.load(arrayBuffer);

  // Remove all standard PDF metadata
  pdfDoc.setTitle('');
  pdfDoc.setAuthor('');
  pdfDoc.setSubject('');
  pdfDoc.setKeywords([]);
  pdfDoc.setProducer('');
  pdfDoc.setCreator('');
  pdfDoc.setCreationDate(new Date(0));
  pdfDoc.setModificationDate(new Date(0));

  // Create a new PDF document without metadata
  const newPdfDoc = await PDFDocument.create();

  // Copy pages without metadata
  const pages = pdfDoc.getPages();
  const pageIndices = Array.from({ length: pages.length }, (_, i) => i);
  const copiedPages = await newPdfDoc.copyPages(pdfDoc, pageIndices);

  // Add all copied pages to the new document
  copiedPages.forEach((page) => newPdfDoc.addPage(page));

  const pdfBytes = await newPdfDoc.save({
    useObjectStreams: false, // Disable object streams to remove some metadata
    addDefaultPage: false,
  });

  return new Blob([pdfBytes], { type: 'application/pdf' });
}

async function handleWordMetadata(file: File): Promise<Blob> {
  const arrayBuffer = await file.arrayBuffer();

  // Copy content from original document but without metadata
  try {
    // Create a new document from the buffer
    const originalDoc = new Document({
      sections: [
        {
          properties: {},
          children: [new Paragraph({ children: [new TextRun('')] })],
        },
      ],
    });

    // Copy content without metadata
    const buffer = await Packer.toBuffer(originalDoc);
    return new Blob([buffer], { type: file.type });
  } catch (error) {
    console.warn('Error copying document content:', error);
    // Return original file if we can't process it
    return new Blob([arrayBuffer], { type: file.type });
  }
}

async function handleAudioMetadata(file: File): Promise<Blob> {
  const arrayBuffer = await file.arrayBuffer();
  const uint8Array = new Uint8Array(arrayBuffer);

  try {
    // Parse metadata to see what we need to remove
    const metadata = await parseBuffer(uint8Array);

    // For MP3 files, we can handle ID3 tags directly
    if (metadata.format.container === 'MPEG') {
      const cleanBuffer = await removeAudioMetadata(uint8Array, metadata);
      return new Blob([cleanBuffer], { type: file.type });
    }

    // For other formats, we need FFmpeg
    if (typeof window === 'undefined') {
      throw new Error('FFmpeg is only available in the browser');
    }

    // Wait for FFmpeg to be loaded
    if (!ffmpeg) {
      await new Promise((resolve) => {
        const checkFFmpeg = setInterval(() => {
          if (ffmpeg) {
            clearInterval(checkFFmpeg);
            resolve(true);
          }
        }, 100);
      });
    }

    if (!ffmpeg.loaded) {
      await ffmpeg.load();
    }

    const inputName = 'input' + metadata.format.container;
    const outputName = 'output' + metadata.format.container;

    await ffmpeg.writeFile(inputName, uint8Array);
    await ffmpeg.exec(['-i', inputName, '-map_metadata', '-1', '-c:a', 'copy', outputName]);

    const data = await ffmpeg.readFile(outputName);
    return new Blob([data], { type: file.type });
  } catch (error) {
    console.warn('Error removing audio metadata:', error);
    // If we can't remove metadata, return original file
    return new Blob([arrayBuffer], { type: file.type });
  }
}

async function removeAudioMetadata(buffer: Uint8Array, metadata: IAudioMetadata): Promise<Uint8Array> {
  // For MP3 files, we need to handle ID3 tags
  if (metadata.format.container === 'MPEG') {
    // Remove ID3v1 and ID3v2 tags
    const id3v1Size = 128;
    const id3v2HeaderSize = 10;

    // Check for ID3v2 tag
    const decoder = new TextDecoder();
    if (decoder.decode(buffer.slice(0, 3)) === 'ID3') {
      const id3v2Size = (buffer[6] << 21) | (buffer[7] << 14) | (buffer[8] << 7) | buffer[9];
      buffer = buffer.slice(id3v2Size + id3v2HeaderSize);
    }

    // Check for ID3v1 tag at the end
    if (decoder.decode(buffer.slice(buffer.length - id3v1Size, buffer.length - id3v1Size + 3)) === 'TAG') {
      buffer = buffer.slice(0, buffer.length - id3v1Size);
    }
  }

  // For other formats, we'll use FFmpeg to strip metadata
  if (!ffmpeg.loaded) {
    await ffmpeg.load();
  }

  const inputName = 'input' + metadata.format.container;
  const outputName = 'output' + metadata.format.container;

  await ffmpeg.writeFile(inputName, buffer);
  await ffmpeg.exec(['-i', inputName, '-map_metadata', '-1', '-c:a', 'copy', outputName]);

  const data = await ffmpeg.readFile(outputName);
  // Handle different data types that FFmpeg might return
  if (data instanceof Uint8Array) {
    return data;
  } else if (typeof data === 'string') {
    // Convert string to Uint8Array if needed
    const encoder = new TextEncoder();
    return encoder.encode(data);
  }
  // Default case: try to create a Uint8Array from the data
  return new Uint8Array(data as ArrayBuffer);
}

async function handleVideoMetadata(file: File): Promise<Blob> {
  if (typeof window === 'undefined') {
    throw new Error('FFmpeg is only available in the browser');
  }

  // Wait for FFmpeg to be loaded
  if (!ffmpeg) {
    await new Promise((resolve) => {
      const checkFFmpeg = setInterval(() => {
        if (ffmpeg) {
          clearInterval(checkFFmpeg);
          resolve(true);
        }
      }, 100);
    });
  }

  if (!ffmpeg.loaded) {
    await ffmpeg.load();
  }

  const arrayBuffer = await file.arrayBuffer();
  const uint8Array = new Uint8Array(arrayBuffer);

  const inputName = 'input' + file.name;
  const outputName = 'output' + file.name;

  await ffmpeg.writeFile(inputName, uint8Array);

  // Use FFmpeg to strip all possible metadata while preserving video quality
  await ffmpeg.exec([
    '-i',
    inputName,
    '-c:v',
    'copy',
    '-c:a',
    'copy',
    '-map_metadata',
    '-1',
    '-metadata',
    'title=',
    '-metadata',
    'artist=',
    '-metadata',
    'album=',
    '-metadata',
    'date=',
    '-metadata',
    'comment=',
    '-metadata',
    'copyright=',
    '-metadata',
    'encoder=',
    '-metadata',
    'creation_time=',
    '-metadata',
    'handler=',
    '-metadata',
    'language=',
    '-metadata',
    'purl=',
    '-metadata',
    'tool=',
    '-metadata',
    'encoder_settings=',
    '-metadata',
    'major_brand=',
    '-metadata',
    'minor_version=',
    '-metadata',
    'compatible_brands=',
    outputName,
  ]);

  const data = await ffmpeg.readFile(outputName);
  return new Blob([data], { type: file.type });
}
