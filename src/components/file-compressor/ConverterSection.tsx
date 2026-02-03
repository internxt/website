/* eslint-disable @typescript-eslint/no-explicit-any */
import { createRef, useCallback, useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { Errors, MAX_FILE_SIZE, extensionName, compressionTypes, fileMimeTypes } from './types';

import InitialState from './states/InitialState';
import SelectedFile from './states/SelectedFile';
import EmptyFile from '../shared/icons/EmptyFile';
import DownloadFileState from './states/DownloadFileState';
import fileCompressorService from '@/services/file-compressor.service';
import { ErrorState } from './states/ErrorState';
import { CaretLeft, ShieldCheck } from '@phosphor-icons/react';
import { formatText } from '../utils/format-text';

interface ConverterSectionProps {
  textContent: any;
  converterText: any;
  errorContent: any;
  pathname: string;
}

type ConverterStates = 'initialState' | 'selectedFileState' | 'compressingState' | 'downloadFileState' | 'errorState';

export const ConverterSection = ({ textContent, converterText, errorContent, pathname }: ConverterSectionProps) => {
  const router = useRouter();
  const [files, setFiles] = useState<FileList | null>(null);
  const [converterStates, setConverterStates] = useState<ConverterStates>('initialState');
  const [error, setError] = useState<Errors | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const uploadFileRef = createRef<HTMLInputElement>();

  const fileType = useMemo(() => {
    const segments = pathname.split('-');
    return segments[1] || 'pdf';
  }, [pathname]);

  const urlToFileExtensionsMap: Record<string, string[]> = {
    jpg: ['jpg', 'jpeg'],
    png: ['png'],
    pdf: ['pdf'],
    mov: ['mov', 'mp4'],
    zip: ['zip'],
    word: ['doc', 'docx'],
    excel: ['xls', 'xlsx'],
    ppt: ['ppt', 'pptx'],
  };

  const allowedExtensionsForPath = urlToFileExtensionsMap[fileType] || [];
  const allowedUploadedFilesExtension = fileMimeTypes[fileType];

  const formattedConverterText = useMemo(
    () =>
      formatText(converterText, {
        pathFrom: extensionName[fileType],
      }),
    [converterText, fileType],
  );

  const formattedErrorText = useMemo(
    () =>
      formatText(errorContent, {
        pathFrom: extensionName[fileType],
      }),
    [errorContent, fileType],
  );

  const borderStyle = isDragging
    ? 'border border-dashed border-primary'
    : 'border-4 border-dashed border-primary/8 bg-primary/2';

  const resetViewToInitialState = useCallback(() => {
    setError(null);
    setFiles(null);
    setConverterStates('initialState');
    setIsDragging(false);

    if (uploadFileRef.current) {
      uploadFileRef.current.value = '';
    }
  }, [uploadFileRef]);

  const validateAndSetFiles = (incomingFiles: FileList) => {
    const file = incomingFiles.length > 0 ? incomingFiles.item(0) : null;
    if (!file) return;

    const filesSize = Array.from(incomingFiles).reduce((acc, f) => acc + f.size, 0);
    if (filesSize > MAX_FILE_SIZE) {
      setError('bigFile');
      setConverterStates('errorState');
      return;
    }

    const fileExtension = file.name.split('.').pop()?.toLowerCase() || '';
    if (!allowedExtensionsForPath.includes(fileExtension)) {
      setError('unsupportedFormat');
      setConverterStates('errorState');
      return;
    }

    setFiles(incomingFiles);
    setConverterStates('selectedFileState');
  };

  const handleDroppedFiles = (droppedFiles: FileList) => {
    validateAndSetFiles(droppedFiles);
  };

  const handleOpenFileExplorer = () => {
    uploadFileRef.current?.click();
  };

  const handleFileInput = () => {
    if (uploadFileRef.current?.files) {
      validateAndSetFiles(uploadFileRef.current.files);
    }
  };

  const handleCompression = async () => {
    if (!fileType || !files || !files[0]) return;

    setConverterStates('compressingState');

    try {
      const fileExtension = files[0].name.split('.').pop()?.toLowerCase() || '';
      let compressionType: 'image' | 'document' | 'video' | 'archive' | undefined;

      const typeEntries = Object.entries(compressionTypes) as [string, string[]][];
      for (const [key, extensions] of typeEntries) {
        if (extensions.includes(fileExtension)) {
          compressionType = key.replace('Compression', '') as any;
          break;
        }
      }

      if (!compressionType) throw new Error('Unsupported file type');

      await fileCompressorService.handleFileCompression(files[0], compressionType, fileExtension);
      setConverterStates('downloadFileState');
    } catch (err) {
      const errorMsg = err as Error;
      const filteredError = errorMsg.message.includes('File too large') ? 'bigFile' : 'internalError';
      setError(filteredError as Errors);
      setConverterStates('errorState');
    }
  };

  const renderState = () => {
    switch (converterStates) {
      case 'initialState':
        return (
          <InitialState
            textContent={formattedConverterText.dragNDropArea}
            pathFrom={extensionName[fileType]}
            handleFileDrop={handleDroppedFiles}
            isDragging={isDragging}
            setIsDragging={setIsDragging}
            handleOpenFileExplorer={handleOpenFileExplorer}
          />
        );
      case 'selectedFileState':
        return (
          files && (
            <SelectedFile
              textContent={formattedConverterText.fileSelected}
              files={files}
              onFileConvert={handleCompression}
              onCancel={resetViewToInitialState}
            />
          )
        );
      case 'compressingState':
        return (
          <div className="flex h-full w-full flex-col items-center justify-center space-y-4 bg-opacity-3">
            <div className="relative">
              <div className="absolute inset-1">
                <div className="upDownMotion absolute left-0 z-10 h-1 w-full -translate-y-1/2 rounded-xl bg-primary shadow-2xl" />
              </div>
              <EmptyFile />
            </div>
            <p className="text-2xl font-semibold">{formattedConverterText.compressing}</p>
          </div>
        );
      case 'downloadFileState':
        return (
          <DownloadFileState
            textContent={formattedConverterText.fileConverted}
            onConvertMoreFilesButtonPressed={resetViewToInitialState}
            onDownloadFile={handleCompression}
          />
        );
      case 'errorState':
        return (
          <ErrorState
            error={error}
            resetViewToInitialState={resetViewToInitialState}
            errorContent={formattedErrorText}
            textContent={formattedConverterText.dragNDropArea}
          />
        );
      default:
        return null;
    }
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
          <div className="relative flex h-[58px] items-center text-center lg:w-[60rem] lg-xl:w-[65rem] 1.5xl:w-[72rem] 2xl:w-[80rem]">
            <div
              className="absolute left-0 hidden cursor-pointer flex-row items-center justify-end rounded-sm-6 border-[1.5px] border-primary px-4 py-2 pt-2.5 hover:bg-white/50 lg:flex"
              onClick={() => router.back()}
            >
              <CaretLeft className="text-primary" size={24} />
              <p className="pl-1 text-base font-medium text-primary">Back</p>
            </div>
            <p className="absolute left-1/2 -translate-x-1/2 text-5xl font-semibold">{formattedConverterText.title}</p>
          </div>

          <h2 className="max-w-[865px] pt-2 text-xl text-gray-80">{textContent.description}</h2>
          <div className="flex flex-row items-center space-x-1">
            <ShieldCheck size={16} className="text-green" />
            <p className="text-sm font-medium text-gray-80">{textContent.secureUpload}</p>
          </div>
        </div>
        <div
          className={`flex w-full max-w-screen-lg flex-col items-center space-y-8 rounded-2xl px-5 ${borderStyle} py-12`}
        >
          {renderState()}
        </div>
      </div>
    </section>
  );
};
