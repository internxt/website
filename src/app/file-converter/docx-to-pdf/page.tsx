'use client';

import { Spinner } from '@phosphor-icons/react';
import { useState } from 'react';

const DocxToPdf = () => {
  const [selectedDocxFile, setSelectedDocxFile] = useState<FileList | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedDocxFile(event.target.files);
    }
  };

  const handleConvertToPdf = async () => {};

  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-4">
      <div className="flex w-full max-w-sm flex-col items-center space-y-5">
        <input type="file" accept="image/*" multiple onChange={handleFileChange} />
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
