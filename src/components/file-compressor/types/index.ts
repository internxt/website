export const MAX_FILE_SIZE = 1073741824;

export type Errors = 'bigFile' | 'internalError' | 'unsupportedFormat';

// Supported compression types
export const compressionTypes = {
  imageCompression: ['jpg', 'png', 'webp'],
  documentCompression: ['pdf', 'doc', 'docx', 'ppt', 'pptx', 'xls', 'xlsx'],
  videoCompression: ['mov'],
  archiveCompression: ['zip'],
  allCompressionTypes: ['pdf', 'doc', 'docx', 'ppt', 'pptx', 'xls', 'xlsx', 'mov', 'jpg', 'png', 'webp', 'zip'],
};

// File MIME types for compression
export const fileMimeTypes = {
  mov: 'video/quicktime',
  pdf: 'application/pdf',
  jpg: 'image/jpeg',
  png: 'image/png',
  ppt: 'application/vnd.ms-powerpoint',
  pptx: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  word: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  doc: 'application/msword',
  docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  excel: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  xls: 'application/vnd.ms-excel',
  xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  zip: 'application/zip',
};

// Allowed file extensions
export const allowedExtensions = {
  mov: 'mov',
  pdf: 'pdf',
  jpg: 'jpg',
  png: 'png',
  ppt: 'ppt',
  pptx: 'pptx',
  doc: 'doc',
  docx: 'docx',
  xls: 'xls',
  xlsx: 'xlsx',
  zip: 'zip',
};

// Human-readable file type names
export const extensionName = {
  mov: 'MOV',
  pdf: 'PDF',
  jpg: 'JPG',
  png: 'PNG',
  ppt: 'PPT',
  pptx: 'PPTX',
  word: 'Word',
  doc: 'DOC',
  docx: 'DOCX',
  excel: 'Excel',
  xls: 'XLS',
  xlsx: 'XLSX',
  zip: 'ZIP',
};

// Compression descriptions
export const compressionDescriptions = {
  mov: 'Compress MOV files for free.',
  pdf: 'Compress PDF files for free.',
  jpg: 'Compress JPG files for free.',
  png: 'Compress PNG files for free.',
  ppt: 'Compress PPT files for free.',
  pptx: 'Compress PPTX files for free.',
  word: 'Compress Word files for free.',
  doc: 'Compress DOC files for free.',
  docx: 'Compress DOCX files for free.',
  excel: 'Compress Excel files for free.',
  xls: 'Compress XLS files for free.',
  xlsx: 'Compress XLSX files for free.',
  zip: 'Compress ZIP files for free.',
};

// Add this to src/components/file-compressor/types/index.ts
export const imageToTextConverter = ['jpg', 'png'];

// Add this to src/components/file-compressor/types/index.ts
export const imageConverter = ['jpg', 'png', 'webp'];

// Add this to src/components/file-compressor/types/index.ts
export const fileConverter = ['pdf', 'docx', 'xlsx', 'ppt', 'mov', 'jpg', 'png'];
