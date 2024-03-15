import { createRef, useCallback, useState } from 'react';

import Header from '../shared/Header';

import { fileConverter, fileMimeTypes, imageConverter } from './types';

import InitialState from './states/InitialState';
import SelectedFile from './states/SelectedFile';
import EmptyFile from '../shared/icons/EmptyFile';
import DownloadFileState from './states/DownloadFileState';
import fileConverterService from '../services/file-converter.service';

export type Errors = 'bigFile' | 'internalError' | 'unsupportedFormat';

type Views = 'initialState' | 'selectedFileState' | 'convertingState' | 'downloadFileState';

interface ConverterSectionProps {
  textContent: any;
  errorContent: any;
  pathname: string;
}

interface ViewProps {
  view: Views;
}

const MAX_FILE_SIZE = 1073741824;

const ConverterSection = ({ textContent, errorContent, pathname }: ConverterSectionProps) => {
  const [files, setFiles] = useState<FileList | null>(null);
  const [views, setViews] = useState<Views>('initialState');
  const [error, setError] = useState<Errors | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const uploadFileRef = createRef<HTMLInputElement>();
  const borderStyle = isDragging ? 'border border-dashed border-primary' : 'border-4 border-primary/8 bg-primary/2';

  const pathnameSegments = pathname.split('-');

  const lastExtensionInPathname = pathnameSegments[pathnameSegments.length - 1];

  const allowedUploadFiles = fileMimeTypes[pathnameSegments[0]];

  const isMultipleFilesAllowed = pathname === 'png-to-pdf';

  const resetViewToInitialState = useCallback(() => {
    setError(null);
    setFiles(null);
    setViews('initialState');
  }, []);

  const handleFileDrop = (files: FileList) => {
    setFiles(files);
    setViews('selectedFileState');
  };

  const handleConverter = async () => {
    if (!pathname || !files) return;
    const relevantPath = pathname.split('/').pop();

    if (!relevantPath) return;

    const filesSize = Array.from(files).reduce((accumulator, file) => accumulator + file.size, 0);

    if (filesSize > MAX_FILE_SIZE) {
      setError('bigFile');
      resetViewToInitialState();

      return;
    }

    setViews('convertingState');
    try {
      if (fileConverter.includes(relevantPath)) {
        await fileConverterService.handleFileConverter(files, lastExtensionInPathname);
        setViews('downloadFileState');
      } else if (imageConverter.includes(relevantPath)) {
        await fileConverterService.handleImageConverter(files, lastExtensionInPathname);
        setViews('downloadFileState');
      } else if (relevantPath.includes('png-to-pdf')) {
        await fileConverterService.handleImagesToPdfConverter(files);
        setViews('downloadFileState');
      } else {
        setError('unsupportedFormat');
        setViews('initialState');
      }
    } catch (err) {
      const error = err as Error;
      if (error.message.includes('File too large')) {
        setError('bigFile');
      } else {
        setError('internalError');
      }
      resetViewToInitialState();
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
    } else {
      setFiles(null);
      setViews('initialState');
    }
  };

  const View = (views: ViewProps) => {
    const view = {
      initialState: (
        <InitialState
          textContent={textContent.dragNDropArea}
          error={error}
          resetViewToInitialState={resetViewToInitialState}
          errorContent={errorContent}
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
          onFileConvert={handleConverter}
          onCancel={resetViewToInitialState}
        />
      ),
      convertingState: (
        <div className="flex h-full w-full flex-col items-center justify-center space-y-4 bg-opacity-3">
          <div className="relative">
            <div className="absolute inset-1">
              <div className="upDownMotion absolute left-0 z-10 h-1 w-full -translate-y-1/2 rounded-xl bg-primary shadow-2xl" />
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
          onDownloadFile={handleConverter}
        />
      ),
    };

    return view[views.view];
  };

  return (
    <section className="overflow-hidden bg-gray-1 pt-32 pb-20">
      <label>
        <input
          className="pointer-events-none absolute h-0 w-0 overflow-hidden"
          type="file"
          accept={`${allowedUploadFiles}`}
          multiple={isMultipleFilesAllowed}
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
