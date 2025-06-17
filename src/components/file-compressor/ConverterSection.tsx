import { createRef, useCallback, useState } from 'react';

import Header from '../shared/Header';

import { Errors, MAX_FILE_SIZE, extensionName, compressionTypes, fileMimeTypes } from './types';

import InitialState from './states/InitialState';
import SelectedFile from './states/SelectedFile';
import EmptyFile from '../shared/icons/EmptyFile';
import DownloadFileState from './states/DownloadFileState';
import fileCompressorService from '@/services/file-compressor.service';
import { ErrorState } from './states/ErrorState';
import { ShieldCheck } from '@phosphor-icons/react';
import { formatText } from '../utils/format-text';

interface ConverterSectionProps {
  textContent: any;
  converterText: any;
  errorContent: any;
  pathname: string;
}

interface ConverterStatesProps {
  state: ConverterStates;
}

type ConverterStates = 'initialState' | 'selectedFileState' | 'compressingState' | 'downloadFileState' | 'errorState';

export const ConverterSection = ({ textContent, converterText, errorContent, pathname }: ConverterSectionProps) => {
  const [files, setFiles] = useState<FileList | null>(null);
  const [converterStates, setConverterStates] = useState<ConverterStates>('initialState');
  const [error, setError] = useState<Errors | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const uploadFileRef = createRef<HTMLInputElement>();
  const borderStyle = isDragging ? 'border border-dashed border-primary' : 'border-4 border-primary/8 bg-primary/2';

  const pathnameSegments = pathname.split('-');

  const lastExtensionInPathname = pathnameSegments[pathnameSegments.length - 1];

  const allowedUploadedFilesExtension = fileMimeTypes[pathnameSegments[0]];

  const formattedConverterText = formatText(converterText, {
    pathFrom: extensionName[pathnameSegments[0]],
    pathTo: extensionName[lastExtensionInPathname],
  });

  const formattedErrorText = formatText(errorContent, {
    pathFrom: extensionName[pathnameSegments[0]],
    pathTo: extensionName[lastExtensionInPathname],
  });

  const resetViewToInitialState = useCallback(() => {
    setError(null);
    setFiles(null);
    setConverterStates('initialState');
  }, [error, files, uploadFileRef, converterStates]);

  const handleDroppedFiles = (files: FileList) => {
    const file = files.length > 0 ? files.item(files.length - 1) : null;
    if (!file) return;

    const fileTypes = file.type;

    if (!pathnameSegments.length) {
      setError('unsupportedFormat');
      setConverterStates('errorState');
      return;
    }

    const isExtensionAllowed = fileTypes.includes(pathnameSegments[0]);

    if (!isExtensionAllowed) {
      setError('unsupportedFormat');
      setConverterStates('errorState');
      return;
    }

    setFiles(files);
    setConverterStates('selectedFileState');
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

  const handleCompression = async () => {
    if (!pathname || !files) return;

    const fileExtension = pathname.split('/').pop()?.replace('-compress', '');
    if (!fileExtension) return;

    // Check if the file type is supported for compression
    const isSupportedType = compressionTypes.allCompressionTypes.includes(fileExtension);
    if (!isSupportedType) {
      setError('unsupportedFormat');
      setConverterStates('errorState');
      return;
    }

    setConverterStates('compressingState');

    try {
      // Determine compression type based on file extension
      let compressionType;
      if (compressionTypes.imageCompression.includes(fileExtension)) {
        compressionType = 'image';
      } else if (compressionTypes.documentCompression.includes(fileExtension)) {
        compressionType = 'document';
      } else if (compressionTypes.videoCompression.includes(fileExtension)) {
        compressionType = 'video';
      } else {
        throw new Error('Unsupported file type for compression');
      }

      // Call the compression service
      await fileCompressorService.handleFileCompression(files[0], compressionType, fileExtension);
      setConverterStates('downloadFileState');
    } catch (err) {
      const error = err as Error;
      const filteredError = error.message.includes('File too large') ? 'bigFile' : 'internalError';
      setError(filteredError);
      setConverterStates('errorState');
    }
  };

  const State = (views: ConverterStatesProps) => {
    const state = {
      initialState: (
        <InitialState
          textContent={formattedConverterText.dragNDropArea}
          pathFrom={extensionName[pathnameSegments[0]]}
          handleFileDrop={handleDroppedFiles}
          isDragging={isDragging}
          setIsDragging={setIsDragging}
          handleOpenFileExplorer={handleOpenFileExplorer}
        />
      ),
      selectedFileState: files && (
        <SelectedFile
          textContent={formattedConverterText.fileSelected}
          files={files}
          onFileConvert={handleCompression}
          onCancel={resetViewToInitialState}
        />
      ),
      compressingState: (
        <div className="flex h-full w-full flex-col items-center justify-center space-y-4 bg-opacity-3">
          <div className="relative">
            <div className="absolute inset-1">
              <div className="upDownMotion absolute left-0 z-10 h-1 w-full -translate-y-1/2 rounded-xl bg-primary shadow-2xl" />
            </div>
            <EmptyFile />
          </div>
          <p className="text-2xl font-semibold">{formattedConverterText.compressing}</p>
        </div>
      ),
      downloadFileState: (
        <DownloadFileState
          textContent={formattedConverterText.fileConverted}
          onConvertMoreFilesButtonPressed={resetViewToInitialState}
          onDownloadFile={handleCompression}
        />
      ),
      errorState: (
        <ErrorState
          error={error}
          resetViewToInitialState={resetViewToInitialState}
          errorContent={formattedErrorText}
          textContent={formattedConverterText.dragNDropArea}
        />
      ),
    };

    return state[views.state];
  };

  return (
    <section className="overflow-hidden bg-gray-1 pb-20 pt-32">
      <input
        className="pointer-events-none absolute h-0 w-0 overflow-hidden"
        type="file"
        accept={`${allowedUploadedFilesExtension}`}
        multiple={false}
        id="uploadFile"
        ref={uploadFileRef}
        tabIndex={-1}
        onChange={handleFileInput}
      />
      <div className="flex flex-col items-center space-y-12 px-5">
        <div className="flex flex-col items-center space-y-5 text-center">
          <Header maxWidth="w-full">{formattedConverterText.title}</Header>
          <h2 className="text-xl text-gray-80">{textContent.description}</h2>
          <div className="flex flex-row items-center space-x-1">
            <ShieldCheck size={16} className="text-green" />
            <p className="text-sm font-medium text-gray-80">{textContent.secureUpload}</p>
          </div>
        </div>
        <div
          className={`flex w-full max-w-screen-lg flex-col items-center space-y-8 rounded-2xl px-5 ${borderStyle}  py-12`}
        >
          {/* Card */}
          <State state={converterStates} />
        </div>
      </div>
    </section>
  );
};
