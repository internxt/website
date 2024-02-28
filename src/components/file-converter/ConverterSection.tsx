import { createRef, useState } from 'react';

import Header from '../shared/Header';
import { notificationService } from '../Snackbar';
import { usePathname } from 'next/navigation';
import { fileConverter, imageConverter } from './types';

import InitialState from './states/InitialState';
import SelectedFile from './states/SelectedFile';

const ConverterSection = ({ textContent }) => {
  const [files, setFiles] = useState<FileList | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const uploadFileRef = createRef<HTMLInputElement>();
  const pathname = usePathname();
  const borderStyle = isDragging ? 'border border-dashed border-primary' : 'border-4 border-primary/8 bg-primary/2';

  const handleFileDrop = (files: FileList) => {
    setFiles(files);
  };

  const handleFileConverterWorker = (filesToConvert) => {
    setIsLoading(true);
    if (filesToConvert) {
      try {
        const worker = new Worker(new URL('/file-converter.worker', import.meta.url), { type: 'module' });

        worker.addEventListener('message', (event) => {
          const { buffer, filename } = event.data;

          const fileBuffer = Buffer.from(buffer);

          const blob = new Blob([fileBuffer], { type: 'application/pdf' });

          const link = document.createElement('a');
          link.href = window.URL.createObjectURL(blob);
          link.download = filename.replace('.docx', '.pdf');

          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);

          setIsLoading(false);
        });

        worker.postMessage({ file: filesToConvert[0], filename: filesToConvert[0].name, type: 'convert' });
      } catch (error) {
        console.error('Error converting docx to PDF:', error);
        notificationService.openErrorToast('Error while converting file');
      }
    }
  };

  const handleImageConverterWorker = async (filesToConvert) => {
    if (!filesToConvert) return;

    const worker = new Worker(new URL('/image-converter.worker', import.meta.url), { type: 'module' });

    // Escuchar mensajes del Web Worker
    worker.onmessage = (event) => {
      const { blob, newFormat } = event.data;

      // Descargar el archivo
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = `${filesToConvert[0].name.split('.')[0]}.${newFormat.toLowerCase()}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
  };

  const handleWorker = (files: FileList | null) => {
    if (!pathname || !files) return;
    const relevantPath = pathname.split('/').pop();

    if (!relevantPath) return;

    if (fileConverter.includes(relevantPath)) {
      handleFileConverterWorker(files);
      console.log('fileConverter');
    } else if (imageConverter.includes(relevantPath)) {
      handleImageConverterWorker(files);
      console.log('imageConverter');
    } else {
      console.log('No converter found');
    }
  };

  const handleOpenFileExplorer = () => {
    (document.querySelector('input[type=file]') as any).click();
  };

  const handleFileInput = () => {
    const fileInput = uploadFileRef.current;
    if (fileInput?.files) {
      setFiles(fileInput.files);
    }
  };

  return (
    <section className="overflow-hidden bg-gray-1 pt-32 pb-20">
      <label className="pointer-events-none absolute h-0 w-0 overflow-hidden">
        <input type="file" id="uploadFile" ref={uploadFileRef} tabIndex={-1} onChange={() => handleFileInput()} />
      </label>
      <div className="flex flex-col items-center space-y-12 px-5">
        <div className="flex flex-col items-center space-y-5 text-center">
          <Header>Lorem ipsum</Header>
          <h2 className="text-xl text-gray-80">Lorem ipsum</h2>
          <p className="text-sm font-medium text-gray-80">Lorem ipsum</p>
        </div>
        <div
          className={`flex w-full max-w-screen-lg flex-col items-center space-y-8 rounded-2xl ${borderStyle}  py-12`}
        >
          {files ? (
            <SelectedFile files={files} onFileConvert={handleWorker} />
          ) : (
            <InitialState
              handleFileDrop={handleFileDrop}
              isDragging={isDragging}
              setIsDragging={setIsDragging}
              handleOpenFileExplorer={handleOpenFileExplorer}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default ConverterSection;
