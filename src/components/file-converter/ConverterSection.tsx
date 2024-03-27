import { createRef, useCallback, useState } from 'react';

import Header from '../shared/Header';

import { Errors, MAX_FILE_SIZE, fileConverter, fileMimeTypes, imageConverter } from './types';

import InitialState from './states/InitialState';
import SelectedFile from './states/SelectedFile';
import EmptyFile from '../shared/icons/EmptyFile';
import DownloadFileState from './states/DownloadFileState';
import fileConverterService from '../services/file-converter.service';
import { ErrorState } from './states/ErrorState';
import { ShieldCheck } from '@phosphor-icons/react';

const FILE_SCANNER_URL = process.env.FILE_SCANNER_URL;

interface ConverterSectionProps {
  textContent: any;
  errorContent: any;
  pathname: string;
}

interface ConverterStatesProps {
  state: ConverterStates;
}

type ConverterStates = 'initialState' | 'selectedFileState' | 'convertingState' | 'downloadFileState' | 'errorState';

const converters = [
  { type: 'file', paths: fileConverter },
  { type: 'image', paths: imageConverter },
  { type: 'pdf', paths: ['png-to-pdf'] },
];

export const ConverterSection: React.FC<ConverterSectionProps> = ({ textContent, errorContent, pathname }) => {
  const [files, setFiles] = useState<FileList | null>(null);
  const [converterStates, setConverterStates] = useState<ConverterStates>('initialState');
  const [error, setError] = useState<Errors | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const uploadFileRef = createRef<HTMLInputElement>();
  const borderStyle = isDragging ? 'border border-dashed border-primary' : 'border-4 border-primary/8 bg-primary/2';

  const pathnameSegments = pathname.split('-');

  const lastExtensionInPathname = pathnameSegments[pathnameSegments.length - 1];

  const allowedUploadedFilesExtension = fileMimeTypes[pathnameSegments[0]];

  const isMultipleFilesAllowed = pathname === 'png-to-pdf';

  const resetViewToInitialState = useCallback(() => {
    setError(null);
    setFiles(null);
    uploadFileRef.current === null;
    setConverterStates('initialState');
  }, [error, files, uploadFileRef, converterStates]);

  const handleDroppedFiles = (files: FileList) => {
    setFiles(files);
    setConverterStates('selectedFileState');
  };

  const scanFile = async (): Promise<boolean> => {
    const fileInput = uploadFileRef.current;
    const formdata = new FormData();
    formdata.append('', (fileInput as any).files[0], 'test.txt');

    const requestOptions = {
      method: 'POST',
      body: formdata,
    };

    const scanFile = await fetch(`/api/scan`, requestOptions);

    if (scanFile.status === 200) {
      const data = await scanFile.json();

      return data.isInfected;
    } else {
      return true;
    }
  };

  const handleOpenFileExplorer = () => {
    (document.querySelector('input[type=file]') as any).click();
  };

  const handleFileInput = () => {
    const fileInput = uploadFileRef.current;
    if (fileInput?.files && fileInput.files.length > 0) {
      const filesSize = Array.from(fileInput.files).reduce((accumulator, file) => accumulator + file.size, 0);

      if (filesSize > MAX_FILE_SIZE) {
        setError('bigFile');
        setConverterStates('errorState');
      } else {
        setFiles(fileInput.files);
        setConverterStates('selectedFileState');
      }
    }
  };

  const handleConversion = async () => {
    let isFileInfected;
    if (!pathname || !files) return;

    const extensionToConvertTo = pathname.split('/').pop();
    if (!extensionToConvertTo) return;

    const converter = converters.find(({ paths }) => paths.includes(extensionToConvertTo));

    if (!converter) {
      setError('unsupportedFormat');
      setConverterStates('errorState');
      return;
    }

    const scanResults = await Promise.all(Array.from(files).map(scanFile));

    scanResults.map((isFileInfected) => {
      if (isFileInfected) {
        setError('internalError');
        setConverterStates('errorState');
        return;
      }
    });

    setConverterStates('convertingState');

    try {
      if (!isFileInfected) {
        switch (converter.type) {
          case 'file':
            await fileConverterService.handleFileConverter(files, lastExtensionInPathname);
            setConverterStates('downloadFileState');
            break;
          case 'image':
            await fileConverterService.handleImageConverter(files, lastExtensionInPathname);
            setConverterStates('downloadFileState');
            break;
          case 'pdf':
            await fileConverterService.handleImagesToPdfConverter(files);
            setConverterStates('downloadFileState');
            break;
          default:
            throw new Error('Invalid converter type');
        }
      } else {
        setError('internalError');
      }
    } catch (err) {
      const error = err as Error;
      setError(error.message.includes('File too large') ? 'bigFile' : 'internalError');
      setConverterStates('errorState');
    }
  };

  const State = (views: ConverterStatesProps) => {
    const state = {
      initialState: (
        <InitialState
          textContent={textContent.dragNDropArea}
          handleFileDrop={handleDroppedFiles}
          isDragging={isDragging}
          setIsDragging={setIsDragging}
          handleOpenFileExplorer={handleOpenFileExplorer}
        />
      ),
      selectedFileState: files && (
        <SelectedFile
          textContent={textContent.fileSelected}
          files={files}
          onFileConvert={handleConversion}
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
          onDownloadFile={handleConversion}
        />
      ),
      errorState: (
        <ErrorState
          error={error}
          resetViewToInitialState={resetViewToInitialState}
          errorContent={errorContent}
          textContent={textContent.dragNDropArea}
        />
      ),
    };

    return state[views.state];
  };

  return (
    <section className="overflow-hidden bg-gray-1 pt-32 pb-20">
      <label>
        <input
          className="pointer-events-none absolute h-0 w-0 overflow-hidden"
          type="file"
          accept={`${allowedUploadedFilesExtension}`}
          multiple={isMultipleFilesAllowed}
          id="uploadFile"
          ref={uploadFileRef}
          tabIndex={-1}
          onChange={handleFileInput}
        />
      </label>
      <div className="flex flex-col items-center space-y-12 px-5">
        <div className="flex flex-col items-center space-y-5 text-center">
          <Header maxWidth="w-full">{textContent.title}</Header>
          <h2 className="text-xl text-gray-80">{textContent.description}</h2>
          <div className="flex flex-row items-center space-x-1">
            <ShieldCheck size={16} className="text-green" />
            <p className="text-sm font-medium text-gray-80">{textContent.secureUpload}</p>
          </div>
        </div>
        <div
          className={`flex w-full max-w-screen-lg flex-col items-center space-y-8 rounded-2xl ${borderStyle}  py-12`}
        >
          {/* Card */}
          <State state={converterStates} />
        </div>
      </div>
    </section>
  );
};
