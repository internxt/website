import { PDFDocument } from 'pdf-lib';
import imageCompression from 'browser-image-compression';

interface CompressionOptions {
  quality?: number;
  maxWidth?: number;
  scale?: number;
  usePNG?: boolean;
  superSampling?: number;
}

interface CompressionResult {
  compressedBlob: Blob;
  originalSize: number;
  compressedSize: number;
  compressionRatio: number;
  pageCount: number;
  method: string;
  hasSelectableText: boolean;
  warning?: string;
}

const hasSelectableText = async (file: File): Promise<boolean> => {
  try {
    const pdfjsLib = await loadPDFJS();
    const arrayBuffer = await file.arrayBuffer();
    const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
    const pdfDocument = await loadingTask.promise;

    const page = await pdfDocument.getPage(1);
    const textContent = await page.getTextContent();

    const totalChars = textContent.items.reduce((sum: number, item: any) => sum + (item.str?.length || 0), 0);

    return totalChars > 50;
  } catch {
    return false;
  }
};

const analyzePDFContent = async (
  file: File,
): Promise<{
  type: 'image-heavy' | 'text-heavy';
  sizePerPage: number;
  hasText: boolean;
}> => {
  try {
    const arrayBuffer = await file.arrayBuffer();
    const pdfDoc = await PDFDocument.load(arrayBuffer);
    const pageCount = pdfDoc.getPageCount();
    const sizePerPage = file.size / pageCount;
    const hasText = await hasSelectableText(file);

    if (sizePerPage > 300 * 1024) {
      return { type: 'image-heavy', sizePerPage, hasText };
    }

    return { type: 'text-heavy', sizePerPage, hasText };
  } catch {
    return { type: 'text-heavy', sizePerPage: 0, hasText: false };
  }
};

const loadPDFJS = async (): Promise<any> => {
  if ((window as any).pdfjsLib) {
    return (window as any).pdfjsLib;
  }

  const script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js';

  await new Promise((resolve, reject) => {
    script.onload = () => resolve(true);
    script.onerror = () => reject(new Error('Failed to load PDF.js'));
    document.head.appendChild(script);
  });

  const pdfjsLib = (window as any).pdfjsLib;
  pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

  return pdfjsLib;
};

const renderPDFPage = async (
  page: any,
  scale: number,
  maxWidth: number,
  superSampling: number = 1.0,
): Promise<HTMLCanvasElement> => {
  const effectiveScale = scale * superSampling;
  const viewport = page.getViewport({ scale: effectiveScale });

  const desiredWidth = Math.min(viewport.width, maxWidth * superSampling);
  const scaleRatio = desiredWidth / viewport.width;

  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d', {
    alpha: false,
    willReadFrequently: false,
  });

  if (!context) {
    throw new Error('No 2D context for canvas');
  }

  canvas.width = viewport.width * scaleRatio;
  canvas.height = viewport.height * scaleRatio;

  context.imageSmoothingEnabled = true;
  context.imageSmoothingQuality = 'high';

  const renderContext = {
    canvasContext: context,
    viewport: page.getViewport({ scale: effectiveScale * scaleRatio }),
  };

  await page.render(renderContext).promise;

  if (superSampling > 1.0) {
    const downscaledCanvas = document.createElement('canvas');
    downscaledCanvas.width = canvas.width / superSampling;
    downscaledCanvas.height = canvas.height / superSampling;

    const downscaledContext = downscaledCanvas.getContext('2d', {
      alpha: false,
      willReadFrequently: false,
    });

    if (downscaledContext) {
      downscaledContext.imageSmoothingEnabled = true;
      downscaledContext.imageSmoothingQuality = 'high';
      downscaledContext.drawImage(canvas, 0, 0, downscaledCanvas.width, downscaledCanvas.height);

      canvas.width = 0;
      canvas.height = 0;

      return downscaledCanvas;
    }
  }

  return canvas;
};

const canvasToPNG = async (canvas: HTMLCanvasElement): Promise<Blob> => {
  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (blob) {
          resolve(blob);
        } else {
          reject(new Error('Cannot convert canvas to blob'));
        }
      },
      'image/png',
      1.0,
    );
  });
};

const canvasToJPEG = async (canvas: HTMLCanvasElement, quality: number): Promise<Blob> => {
  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (blob) {
          resolve(blob);
        } else {
          reject(new Error('Cannot convert canvas to blob'));
        }
      },
      'image/jpeg',
      quality,
    );
  });
};

const compressJPEG = async (blob: Blob, maxSizeMB: number): Promise<Blob> => {
  const file = new File([blob], 'page.jpg', { type: 'image/jpeg' });

  const options = {
    maxSizeMB,
    maxWidthOrHeight: 4096,
    useWebWorker: true,
    fileType: 'image/jpeg' as const,
    initialQuality: 0.98,
  };

  try {
    const compressed = await imageCompression(file, options);
    return compressed;
  } catch {
    return blob;
  }
};

const compressCanvasToImage = async (
  canvas: HTMLCanvasElement,
  usePNG: boolean = true,
  quality: number = 0.98,
): Promise<Blob> => {
  if (usePNG) {
    return await canvasToPNG(canvas);
  } else {
    const jpegBlob = await canvasToJPEG(canvas, quality);
    const compressedBlob = await compressJPEG(jpegBlob, 3.0);
    return compressedBlob;
  }
};

const compressPDFWithRendering = async (file: File, options: CompressionOptions = {}): Promise<Blob> => {
  const { scale = 1.5, maxWidth = 6000, usePNG = true, quality = 0.98, superSampling = 2.0 } = options;

  const pdfjsLib = await loadPDFJS();

  const arrayBuffer = await file.arrayBuffer();
  const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
  const pdfDocument = await loadingTask.promise;

  const numPages = pdfDocument.numPages;

  const newPdfDoc = await PDFDocument.create();

  for (let pageNum = 1; pageNum <= numPages; pageNum++) {
    const page = await pdfDocument.getPage(pageNum);
    const canvas = await renderPDFPage(page, scale, maxWidth, superSampling);
    const imageBlob = await compressCanvasToImage(canvas, usePNG, quality);
    const imageBytes = await imageBlob.arrayBuffer();

    let image;
    if (usePNG) {
      image = await newPdfDoc.embedPng(imageBytes);
    } else {
      image = await newPdfDoc.embedJpg(imageBytes);
    }

    const newPage = newPdfDoc.addPage([canvas.width, canvas.height]);

    newPage.drawImage(image, {
      x: 0,
      y: 0,
      width: canvas.width,
      height: canvas.height,
    });

    canvas.width = 0;
    canvas.height = 0;
  }

  const pdfBytes = await newPdfDoc.save({
    useObjectStreams: true,
  });

  return new Blob([pdfBytes], { type: 'application/pdf' });
};

const compressPDFBasic = async (file: File): Promise<Blob> => {
  const arrayBuffer = await file.arrayBuffer();
  const pdfDoc = await PDFDocument.load(arrayBuffer);

  pdfDoc.setTitle('');
  pdfDoc.setAuthor('');
  pdfDoc.setSubject('');
  pdfDoc.setKeywords([]);
  pdfDoc.setProducer('');
  pdfDoc.setCreator('');

  const pdfBytes = await pdfDoc.save({
    useObjectStreams: true,
    addDefaultPage: false,
    objectsPerTick: 50,
  });

  return new Blob([pdfBytes], { type: 'application/pdf' });
};

export const compressPDFSmart = async (file: File, options: CompressionOptions = {}): Promise<CompressionResult> => {
  const originalSize = file.size;
  const { usePNG = true, superSampling = 2.0 } = options;

  try {
    const analysis = await analyzePDFContent(file);

    let compressedBlob: Blob;
    let method: string;
    let maintainsText = true;
    let warning: string | undefined;

    if (analysis.hasText) {
      method = 'text-preserving-optimization';
      compressedBlob = await compressPDFBasic(file);
      maintainsText = true;

      const compressionTest = ((originalSize - compressedBlob.size) / originalSize) * 100;

      if (compressionTest < 5) {
        warning = 'Minimal compression achieved while preserving text. PDF is already optimized.';
      }
    } else {
      method = usePNG ? 'png-ultra-quality' : 'jpeg-ultra-quality';
      compressedBlob = await compressPDFWithRendering(file, { ...options, usePNG, superSampling });
      maintainsText = false;
      warning = 'PDF appears to be a scanned document. Text is not selectable in the output.';
    }

    const compressedSize = compressedBlob.size;
    const compressionRatio = ((originalSize - compressedSize) / originalSize) * 100;

    if (compressedSize >= originalSize * 0.98) {
      compressedBlob = file;
      method = 'no-compression-needed';
      maintainsText = analysis.hasText;
    }

    const arrayBuffer = await file.arrayBuffer();
    const pdfDoc = await PDFDocument.load(arrayBuffer);
    const pageCount = pdfDoc.getPageCount();

    return {
      compressedBlob,
      originalSize,
      compressedSize: compressedBlob.size,
      compressionRatio: Math.max(0, compressionRatio),
      pageCount,
      method,
      hasSelectableText: maintainsText,
      warning,
    };
  } catch (error) {
    throw new Error(`PDF compression failed: ${(error as Error).message}`);
  }
};

export const compressPDF = async (file: File, usePNG: boolean = true, superSampling: number = 2.0): Promise<Blob> => {
  const result = await compressPDFSmart(file, { usePNG, superSampling });
  return result.compressedBlob;
};
