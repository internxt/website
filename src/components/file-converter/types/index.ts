const fileConverter = [
  'pptx-to-pdf',
  'word-to-pdf',
  'xlsx-to-pdf',
  'html-to-pdf',
  'pdf-to-html',
  'excel-to-pdf',
  'word-to-html',
];
const imageConverter = ['png-to-jpg', 'jpg-to-png', 'webp-to-jpg', 'jpg-to-webp', 'webp-to-png', 'png-to-webp'];

const fileMimeTypes = {
  word: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  pdf: 'application/pdf',
  pptx: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  html: 'text/html',
  excel: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  png: 'image/png',
  jpg: 'image/jpeg',
  webp: 'image/webp',
};

const allowedExtensions = {
  pdf: 'pdf',
  html: 'html',
};

export { fileConverter, imageConverter, fileMimeTypes, allowedExtensions };

export type Errors = 'bigFile' | 'internalError' | 'unsupportedFormat';

export const MAX_FILE_SIZE = 1073741824;
