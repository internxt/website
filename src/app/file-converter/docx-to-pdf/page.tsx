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
      });
      console.log('POST: ', post.data);
      const blob = new Blob([post.data], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = post.data;
      link.download = selectedDocxFile[0].name.replace('.docx', '.pdf');

      document.body.appendChild(link);
      link.click();
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
