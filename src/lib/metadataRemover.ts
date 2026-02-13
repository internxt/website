/* eslint-disable @typescript-eslint/no-explicit-any */
import exifr from 'exifr';
import { PDFDocument } from 'pdf-lib';
import { Document, Packer, Paragraph, TextRun } from 'docx';
import { IAudioMetadata } from 'music-metadata';
import { parseBuffer } from 'music-metadata';

let ffmpeg: any = null;
if (typeof window !== 'undefined') {
  import('@ffmpeg/ffmpeg').then(({ FFmpeg }) => {
    ffmpeg = new FFmpeg();
  });
}

const SUPPORTED_IMAGE_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/jpe',
  'image/png',
  'image/jng',
  'image/mng',
  'image/tiff',
  'image/tif',
  'image/gif',
  'image/jp2',
  'image/jpf',
  'image/j2k',
  'image/jpm',
  'image/jpx',
  'image/psd',
  'image/psb',
];

const SUPPORTED_PDF_TYPES = ['application/pdf'];

const SUPPORTED_WORD_TYPES = [
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.template',
  'application/vnd.ms-word.document.macroEnabled.12',
  'application/vnd.ms-word.template.macroEnabled.12',
  'application/vnd.oasis.opendocument.text',
];

const SUPPORTED_EXCEL_TYPES = [
  'application/vnd.ms-excel',
  'application/vnd.ms-excel.template',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.template',
  'application/vnd.ms-excel.sheet.macroEnabled.12',
  'application/vnd.ms-excel.template.macroEnabled.12',
  'application/vnd.oasis.opendocument.spreadsheet',
];

const SUPPORTED_POWERPOINT_TYPES = [
  'application/vnd.ms-powerpoint',
  'application/vnd.ms-powerpoint.template',
  'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  'application/vnd.openxmlformats-officedocument.presentationml.template',
  'application/vnd.ms-powerpoint.presentation.macroEnabled.12',
  'application/vnd.ms-powerpoint.template.macroEnabled.12',
  'application/vnd.oasis.opendocument.presentation',
];

const SUPPORTED_AUDIO_TYPES = [
  'audio/mpeg',
  'audio/mp3',
  'audio/mp4',
  'audio/x-m4a',
  'audio/x-m4b',
  'audio/x-m4p',
  'audio/wav',
  'audio/ogg',
  'audio/flac',
];

const SUPPORTED_VIDEO_TYPES = ['video/mp4', 'video/x-m4v', 'video/quicktime', 'video/x-msvideo', 'video/x-matroska'];

const SUPPORTED_VISIO_TYPES = ['application/vnd.visio'];

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
    if (!SUPPORTED_TYPES.includes(fileType)) {
      throw new Error(`Unsupported file type: ${fileType}. Supported types are: ${SUPPORTED_TYPES.join(', ')}`);
    }

    if (SUPPORTED_IMAGE_TYPES.includes(fileType)) {
      return await handleImageMetadata(file);
    }

    if (SUPPORTED_PDF_TYPES.includes(fileType)) {
      return await handlePdfMetadata(file);
    }

    if (SUPPORTED_WORD_TYPES.includes(fileType)) {
      return await handleWordMetadata(file);
    }

    if (SUPPORTED_EXCEL_TYPES.includes(fileType)) {
      return await handleWordMetadata(file);
    }

    if (SUPPORTED_POWERPOINT_TYPES.includes(fileType)) {
      return await handleWordMetadata(file);
    }

    if (SUPPORTED_AUDIO_TYPES.includes(fileType)) {
      return await handleAudioMetadata(file);
    }

    if (SUPPORTED_VIDEO_TYPES.includes(fileType)) {
      return await handleVideoMetadata(file);
    }

    if (SUPPORTED_VISIO_TYPES.includes(fileType)) {
      return await handlePdfMetadata(file);
    }

    throw new Error(`Unsupported file type: ${fileType}`);
  } catch (error) {
    console.error('Error removing metadata:', error);
    throw error;
  }
}

async function handleImageMetadata(file: File): Promise<Blob> {
  try {
    const exifData = await exifr.parse(file, { pick: ['all'] });
    if (exifData) {
      return await stripImageMetadata(file);
    }
  } catch (error) {
    console.warn('No EXIF data found or error parsing:', error);
  }

  return await stripImageMetadata(file);
}

async function stripImageMetadata(file: File): Promise<Blob> {
  const img = new Image();
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  return new Promise((resolve, reject) => {
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;

      ctx?.clearRect(0, 0, canvas.width, canvas.height);

      ctx?.drawImage(img, 0, 0);

      canvas.toBlob(
        (blob) => {
          if (blob) {
            resolve(blob);
          } else {
            reject(new Error('Failed to create blob from canvas'));
          }
        },
        file.type,
        1.0,
      );
    };

    img.onerror = () => reject(new Error('Failed to load image'));
    img.src = URL.createObjectURL(file);
  });
}

async function handlePdfMetadata(file: File): Promise<Blob> {
  const arrayBuffer = await file.arrayBuffer();
  const pdfDoc = await PDFDocument.load(arrayBuffer);

  pdfDoc.setTitle('');
  pdfDoc.setAuthor('');
  pdfDoc.setSubject('');
  pdfDoc.setKeywords([]);
  pdfDoc.setProducer('');
  pdfDoc.setCreator('');
  pdfDoc.setCreationDate(new Date(0));
  pdfDoc.setModificationDate(new Date(0));

  const newPdfDoc = await PDFDocument.create();

  const pages = pdfDoc.getPages();
  const pageIndices = Array.from({ length: pages.length }, (_, i) => i);
  const copiedPages = await newPdfDoc.copyPages(pdfDoc, pageIndices);

  copiedPages.forEach((page) => newPdfDoc.addPage(page));

  const pdfBytes = await newPdfDoc.save();

  return new Blob([pdfBytes.buffer as ArrayBuffer], { type: 'application/pdf' });
}

async function handleWordMetadata(file: File): Promise<Blob> {
  const arrayBuffer = await file.arrayBuffer();

  try {
    const originalDoc = new Document({
      sections: [
        {
          properties: {},
          children: [new Paragraph({ children: [new TextRun('')] })],
        },
      ],
    });

    const buffer = await Packer.toBuffer(originalDoc);
    return new Blob([buffer], { type: file.type });
  } catch (error) {
    console.warn('Error copying document content:', error);
    return new Blob([arrayBuffer], { type: file.type });
  }
}

async function handleAudioMetadata(file: File): Promise<Blob> {
  const arrayBuffer = await file.arrayBuffer();
  const uint8Array = new Uint8Array(arrayBuffer);

  try {
    const metadata = await parseBuffer(uint8Array);

    if (metadata.format.container === 'MPEG') {
      const cleanBuffer = await removeAudioMetadata(uint8Array, metadata);
      return new Blob([cleanBuffer.buffer as ArrayBuffer], { type: file.type });
    }

    if (typeof window === 'undefined') {
      throw new Error('FFmpeg is only available in the browser');
    }

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
    return new Blob([arrayBuffer], { type: file.type });
  }
}

async function removeAudioMetadata(buffer: Uint8Array, metadata: IAudioMetadata): Promise<Uint8Array> {
  if (metadata.format.container === 'MPEG') {
    const id3v1Size = 128;
    const id3v2HeaderSize = 10;

    const decoder = new TextDecoder();
    if (decoder.decode(buffer.slice(0, 3)) === 'ID3') {
      const id3v2Size = (buffer[6] << 21) | (buffer[7] << 14) | (buffer[8] << 7) | buffer[9];
      buffer = buffer.slice(id3v2Size + id3v2HeaderSize);
    }

    if (decoder.decode(buffer.slice(buffer.length - id3v1Size, buffer.length - id3v1Size + 3)) === 'TAG') {
      buffer = buffer.slice(0, buffer.length - id3v1Size);
    }
  }

  if (!ffmpeg.loaded) {
    await ffmpeg.load();
  }

  const inputName = 'input' + metadata.format.container;
  const outputName = 'output' + metadata.format.container;

  await ffmpeg.writeFile(inputName, buffer);
  await ffmpeg.exec(['-i', inputName, '-map_metadata', '-1', '-c:a', 'copy', outputName]);

  const data = await ffmpeg.readFile(outputName);
  if (data instanceof Uint8Array) {
    return data;
  } else if (typeof data === 'string') {
    const encoder = new TextEncoder();
    return encoder.encode(data);
  }
  return new Uint8Array(data as ArrayBuffer);
}

async function handleVideoMetadata(file: File): Promise<Blob> {
  if (typeof window === 'undefined') {
    throw new Error('FFmpeg is only available in the browser');
  }

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
