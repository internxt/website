export const MAX_FILE_SIZE = 1073741824;

export type Errors = 'bigFile' | 'internalError' | 'unsupportedFormat';

// Supported compression types
export const compressionTypes = {
  imageCompression: ['jpg', 'png', 'webp'],
  documentCompression: ['pdf', 'docx', 'xlsx', 'ppt', 'doc'],
  videoCompression: ['mov'],
  allCompressionTypes: ['pdf', 'docx', 'xlsx', 'ppt', 'mov', 'jpg', 'png', 'webp', 'doc'],
};

// File MIME types for compression
export const fileMimeTypes = {
  mov: 'video/quicktime',
  pdf: 'application/pdf',
  jpg: 'image/jpeg',
  png: 'image/png',
  ppt: 'application/vnd.ms-powerpoint',
  word: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  excel: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
};

// Allowed file extensions
export const allowedExtensions = {
  mov: 'mov',
  pdf: 'pdf',
  jpg: 'jpg',
  png: 'png',
  ppt: 'ppt',
  docx: 'docx',
  xlsx: 'xlsx',
};

// Human-readable file type names
export const extensionName = {
  mov: 'MOV',
  pdf: 'PDF',
  jpg: 'JPG',
  png: 'PNG',
  ppt: 'PPT',
  word: 'Word',
  excel: 'Excel',
};

// Compression descriptions
export const compressionDescriptions = {
  mov: 'Compress MOV files for free.',
  pdf: 'Compress PDF files for free.',
  jpg: 'Compress JPG files for free.',
  png: 'Compress PNG files for free.',
  ppt: 'Compress PPT files for free.',
  word: 'Compress Word files for free.',
  excel: 'Compress Excel files for free.',
};

// Add this to src/components/file-compressor/types/index.ts
export const imageToTextConverter = ['jpg', 'png'];

// Add this to src/components/file-compressor/types/index.ts
export const imageConverter = ['jpg', 'png', 'webp'];

// Add this to src/components/file-compressor/types/index.ts
export const fileConverter = ['pdf', 'docx', 'xlsx', 'ppt', 'mov', 'jpg', 'png'];
