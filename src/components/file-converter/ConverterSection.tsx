import { createRef, useCallback, useState } from 'react';

import Header from '../shared/Header';

import { fileConverter, fileTypes, imageConverter } from './types';

import InitialState from './states/InitialState';
import SelectedFile from './states/SelectedFile';
import EmptyFile from '../shared/icons/EmptyFile';
import DownloadFileState from './states/DownloadFileState';

type Views = 'initialState' | 'selectedFileState' | 'convertingState' | 'downloadFileState';

interface ConverterSectionProps {
  textContent: any;
  pathname: string;
}

interface ViewProps {
  view: Views;
}

const ConverterSection = ({ textContent, pathname }: ConverterSectionProps) => {
  const [files, setFiles] = useState<FileList | null>(null);
  const [views, setViews] = useState<Views>('initialState');
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const uploadFileRef = createRef<HTMLInputElement>();
  const borderStyle = isDragging ? 'border border-dashed border-primary' : 'border-4 border-primary/8 bg-primary/2';
  const pathnameSegments = pathname.split('-');
  const lastPathnameSegment = pathnameSegments[pathnameSegments.length - 1];

  const allowedFiles = fileTypes[pathnameSegments[0]];

  const mimeType = fileTypes[lastPathnameSegment];

  const resetViewToInitialState = useCallback(() => {
    setFiles(null);
    setViews('initialState');
  }, []);

  const handleFileDrop = (files: FileList) => {
    setFiles(files);
    setViews('selectedFileState');
  };

  const handleFileConverter = async () => {
    if (!files) {
      console.error('No file selected.');
      return;
    }
    setViews('convertingState');

    const formData = new FormData();
    formData.append('file', files[0]);

    try {
      const response = await fetch(`/api/convert?format=pdf`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok || !response.body) {
        return;
      }

      const chunks: Uint8Array[] = [];
      const reader = response.body.getReader();

      while (true) {
        const { done, value } = await reader.read();

        if (done) {
          const blob = new Blob(chunks, { type: mimeType });

          const link = document.createElement('a');
          link.href = window.URL.createObjectURL(blob);
          link.download = 'converted-file.docx';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);

          break;
        }

        chunks.push(value);
      }
    } catch (err) {
      const error = err as Error;
      console.error('[WORKER ERROR]:', error.stack ?? error.message);
    } finally {
      setViews('downloadFileState');
    }
  };

  const handleImageConverterWorker = async (filesToConvert) => {
    if (!filesToConvert) return;

    const worker = new Worker(new URL('/image-converter.worker', import.meta.url), { type: 'module' });

    worker.onmessage = (event) => {
      const { blob, newFormat } = event.data;

      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = `${filesToConvert[0].name.split('.')[0]}.${newFormat.toLowerCase()}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

    worker.postMessage({ type: 'convert', file: filesToConvert });
  };

  const handleWorker = async () => {
    if (!pathname || !files) return;
    const relevantPath = pathname.split('/').pop();

    if (!relevantPath) return;

    if (fileConverter.includes(relevantPath)) {
      await handleFileConverter();
    } else if (imageConverter.includes(relevantPath)) {
      handleImageConverterWorker(files);
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
      setViews('selectedFileState');
    }
  };

  const View = (selectedView: ViewProps) => {
    const view = {
      initialState: (
        <InitialState
          textContent={textContent.dragNDropArea}
          handleFileDrop={handleFileDrop}
          isDragging={isDragging}
          setIsDragging={setIsDragging}
          handleOpenFileExplorer={handleOpenFileExplorer}
        />
      ),
      selectedFileState: files && (
        <SelectedFile
          textContent={textContent.fileSelected}
          files={files}
          onFileConvert={handleWorker}
          onCancel={resetViewToInitialState}
        />
      ),
      convertingState: (
        <div className="flex h-full w-full flex-col items-center justify-center space-y-4 bg-opacity-3">
          <div className="relative">
            <div className="absolute inset-1">
              <div className="animate-pingpong-v absolute left-0 z-10 h-1 w-full -translate-y-1/2 rounded-xl bg-primary shadow-2xl" />
            </div>
            <EmptyFile />
          </div>
          <p className="text-2xl font-semibold">{textContent.converting}</p>
        </div>
      ),
      downloadFileState: (
        <DownloadFileState
          textContent={textContent.fileConverted}
          onConvertMoreFilesButtonPressed={resetViewToInitialState}
          onDownloadFile={handleWorker}
        />
      ),
    };

    return view[selectedView.view];
  };

  return (
    <section className="overflow-hidden bg-gray-1 pt-32 pb-20">
      <label>
        <input
          className="pointer-events-none absolute h-0 w-0 overflow-hidden"
          type="file"
          accept={`${allowedFiles}`}
          id="uploadFile"
          ref={uploadFileRef}
          tabIndex={-1}
          onChange={() => handleFileInput()}
        />
      </label>
      <div className="flex flex-col items-center space-y-12 px-5">
        <div className="flex flex-col items-center space-y-5 text-center">
          <Header maxWidth="w-full">{textContent.title}</Header>
          <h2 className="text-xl text-gray-80">{textContent.description}</h2>
          <p className="text-sm font-medium text-gray-80">{textContent.secureUpload}</p>
        </div>
        <div
          className={`flex w-full max-w-screen-lg flex-col items-center space-y-8 rounded-2xl ${borderStyle}  py-12`}
        >
          <View view={views} />
        </div>
      </div>
    </section>
  );
};

export default ConverterSection;
