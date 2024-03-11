const fileConverter = ['pptx-to-pdf', 'pdf-to-pptx', 'word-to-pdf', 'pdf-to-word', 'xlsx-to-pdf', 'pdf-to-xlsx'];
const imageConverter = ['png-to-jpg', 'jpg-to-png', 'webp-to-jpg', 'jpg-to-webp', 'webp-to-png', 'png-to-webp'];

const fileTypes = {
  docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  pdf: 'application/pdf',
  pptx: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  html: 'text/html',
  excel: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
};

export { fileConverter, imageConverter, fileTypes };
