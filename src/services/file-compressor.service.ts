/* eslint-disable @typescript-eslint/no-explicit-any */
import { FFmpeg } from '@ffmpeg/ffmpeg';
import { fetchFile, toBlobURL } from '@ffmpeg/util';
import imageCompression from 'browser-image-compression';
import JSZip from 'jszip';
import { PDFDocument } from 'pdf-lib';
import * as pdfjs from 'pdfjs-dist';

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

class FileCompressorService {
  private ffmpeg: FFmpeg | null = null;

  /**
   * Main handler that detects the file type and applies the corresponding compression logic.
   * @param {File} file - The source file to be compressed.
   * @param {'image' | 'document' | 'video' | 'archive'} type - The category of the file.
   * @param {string} extension - The specific file extension.
   * @returns {Promise<void>} - Initiates a file download once processing is finished.
   */
  async handleFileCompression(
    file: File,
    type: 'image' | 'document' | 'video' | 'archive',
    extension: string,
  ): Promise<void> {
    let compressedBlob: Blob;

    switch (type) {
      case 'image':
        compressedBlob = await this.compressImage(file);
        break;
      case 'video':
        compressedBlob = await this.compressVideo(file);
        break;
      case 'archive':
        compressedBlob = await this.compressArchive(file);
        break;
      case 'document':
        if (['docx', 'pptx', 'xlsx'].includes(extension)) {
          compressedBlob = await this.compressOfficeDocument(file);
        } else {
          compressedBlob = await this.compressDocument(file, extension);
        }
        break;
      default:
        compressedBlob = file;
    }

    this.downloadFile(compressedBlob, file.name);
  }

  /**
   * Processes PDF files using a hybrid approach: first attempts structural optimization,
   * then applies rasterization only if it results in a smaller file size.
   * @param {File} file - The original PDF file.
   * @param {string} extension - The file extension string.
   * @returns {Promise<Blob>} - The smallest version of the PDF found during processing.
   */
  private async compressDocument(file: File, extension: string): Promise<Blob> {
    if (extension !== 'pdf') return file;

    try {
      const arrayBuffer = await file.arrayBuffer();

      const structuralPdf = await PDFDocument.load(arrayBuffer);
      const structuralBytes = await structuralPdf.save({
        useObjectStreams: true,
        addDefaultPage: false,
      });
      const structuralBlob = new Blob([structuralBytes as any], { type: 'application/pdf' });

      const loadingTask = pdfjs.getDocument({ data: arrayBuffer });
      const pdf = await loadingTask.promise;
      const outPdf = await PDFDocument.create();

      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const scale = 2.0;
        const viewport = page.getViewport({ scale });
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');

        if (!context) continue;
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        await page.render({ canvasContext: context, viewport }).promise;

        const imageData = canvas.toDataURL('image/jpeg', 0.55);
        const imageBytes = await fetch(imageData).then((res) => res.arrayBuffer());
        const pdfImage = await outPdf.embedJpg(imageBytes);

        const newPage = outPdf.addPage([viewport.width, viewport.height]);
        newPage.drawImage(pdfImage, {
          x: 0,
          y: 0,
          width: viewport.width,
          height: viewport.height,
        });
      }

      const rasterBytes = await outPdf.save({ useObjectStreams: true });
      const rasterBlob = new Blob([rasterBytes as any], { type: 'application/pdf' });

      const candidates = [
        { blob: file, size: file.size },
        { blob: structuralBlob, size: structuralBlob.size },
        { blob: rasterBlob, size: rasterBlob.size },
      ];

      candidates.sort((a, b) => a.size - b.size);

      return candidates[0].blob;
    } catch (error) {
      console.error('Error during PDF compression:', error);
      return file;
    }
  }

  /**
   * Compresses image files using the browser-image-compression utility.
   * @param {File} file - The image file.
   * @returns {Promise<Blob>} - The compressed image as a blob.
   */
  private async compressImage(file: File): Promise<Blob> {
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
      initialQuality: 0.6,
    };
    return await imageCompression(file, options);
  }

  /**
   * Uses FFmpeg WebAssembly to transcode and reduce video file size without logs.
   * @param {File} file - The video file.
   * @returns {Promise<Blob>} - The transcoded MP4 blob.
   */
  private async compressVideo(file: File): Promise<Blob> {
    if (!this.ffmpeg) this.ffmpeg = new FFmpeg();

    if (!this.ffmpeg.loaded) {
      const baseURL = 'https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd';
      await this.ffmpeg.load({
        coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, 'text/javascript'),
        wasmURL: await toBlobURL(`${baseURL}/ffmpeg-core.wasm`, 'application/wasm'),
      });
    }

    const inputName = `input_${Date.now()}_${file.name.replaceAll(' ', '_')}`;
    const outputName = `output_${Date.now()}.mp4`;

    await this.ffmpeg.writeFile(inputName, await fetchFile(file));

    await this.ffmpeg.exec([
      '-i',
      inputName,
      '-vcodec',
      'libx264',
      '-crf',
      '32',
      '-preset',
      'ultrafast',
      '-movflags',
      'faststart',
      '-acodec',
      'aac',
      outputName,
    ]);

    const data = await this.ffmpeg.readFile(outputName);

    await this.ffmpeg.deleteFile(inputName);
    await this.ffmpeg.deleteFile(outputName);

    return new Blob([data as any], { type: 'video/mp4' });
  }

  /**
   * Deeply compresses Office documents by extracting internal media files,
   * optimizing them using canvas-based compression, and rebuilding the archive.
   * @param {File} file - The Office document (docx, pptx, xlsx).
   * @returns {Promise<Blob>} - The optimized document with compressed internal assets.
   */
  private async compressOfficeDocument(file: File): Promise<Blob> {
    try {
      const zip = new JSZip();
      const content = await zip.loadAsync(file);
      const imageOptions = {
        maxSizeMB: 0.2,
        maxWidthOrHeight: 1024,
        useWebWorker: true,
        initialQuality: 0.5,
        fileType: 'image/jpeg' as any,
      };

      const filePromises: Promise<void>[] = [];

      content.forEach((relativePath, zipEntry) => {
        const isImage = /\.(jpg|jpeg|png|tif|tiff)$/i.test(relativePath);

        if (isImage) {
          const promise = (async () => {
            const imageBuffer = await zipEntry.async('blob');
            const originalName = relativePath.split('/').pop() || 'image.jpg';
            const imageFile = new File([imageBuffer], originalName, { type: 'image/jpeg' });

            try {
              const compressedBlob = await imageCompression(imageFile, imageOptions);
              content.file(relativePath, compressedBlob);
            } catch (e) {
              //
            }
          })();
          filePromises.push(promise);
        }
      });

      await Promise.all(filePromises);

      const finalBlob = await content.generateAsync({
        type: 'blob',
        compression: 'DEFLATE',
        compressionOptions: { level: 9 },
      });

      return finalBlob.size < file.size ? finalBlob : file;
    } catch (error) {
      return file;
    }
  }

  /**
   * Compresses archive files by repackaging them with max DEFLATE level.
   * @param {File} file - The ZIP file.
   * @returns {Promise<Blob>} - The newly compressed archive blob.
   */
  private async compressArchive(file: File): Promise<Blob> {
    const zip = new JSZip();
    const content = await zip.loadAsync(file);
    return await content.generateAsync({
      type: 'blob',
      compression: 'DEFLATE',
      compressionOptions: { level: 9 },
    });
  }

  /**
   * Utility to trigger a file download in the browser.
   * @param {Blob} blob - The file data.
   * @param {string} originalName - The name to use for the downloaded file.
   */
  private downloadFile(blob: Blob, originalName: string): void {
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    const nameWithoutExt = originalName.split('.').slice(0, -1).join('.');
    link.download = `compressed_${nameWithoutExt}.${originalName.split('.').pop()}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }
}

const fileCompressorService = new FileCompressorService();
export default fileCompressorService;
