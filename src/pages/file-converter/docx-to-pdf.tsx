'use client';

import { Spinner } from '@phosphor-icons/react';
import axios from 'axios';
import { useState } from 'react';

const DocxToPdf = () => {
  const [selectedDocxFile, setSelectedDocxFile] = useState<FileList | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedDocxFile(event.target.files);
    }
  };

  const handleConvertToPdf = async () => {
    const formData = new FormData();
    if (!selectedDocxFile) {
      console.error('No docx file selected.');
      return;
    }

    formData.append('file', selectedDocxFile[0]);

    try {
      const post = await axios.post('/api/docx-to-pdf', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        responseType: 'json',
      });

      const postData = post.data;
      const buffer = Buffer.from(postData.buffer);

      const blob = new Blob([buffer], { type: 'application/pdf' });

      // Create a link element
      const link = document.createElement('a');

      // Set the href attribute with the Blob data
      link.href = window.URL.createObjectURL(blob);

      // Set the download attribute with the desired file name
      link.download = postData.filename;

      // Append the link to the document body
      document.body.appendChild(link);

      // Trigger a click event on the link to start the download
      link.click();

      // Remove the link from the document body
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error converting docx to PDF:', error);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-4">
      <div className="flex w-full max-w-sm flex-col items-center space-y-5">
        <input type="file" accept=".docx" multiple onChange={handleFileChange} />
      </div>

      <button
        className="flex flex-col items-center rounded-lg bg-primary py-3 px-5 text-lg font-medium text-white"
        onClick={handleConvertToPdf}
      >
        {isLoading ? <Spinner className="animate-spin" /> : 'Convert to PDF'}
      </button>
    </div>
  );
};

export default DocxToPdf;
