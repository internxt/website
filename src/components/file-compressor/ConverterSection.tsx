import { createRef, useCallback, useState } from 'react';
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
  const borderStyle = isDragging
    ? 'border border-dashed border-primary'
    : 'border-4 border-dashed border-primary/8 bg-primary/2';

  const pathnameSegments = pathname.split('-');
  const fileType = pathnameSegments[1];

  const urlToFileExtensionsMap = {
    jpg: ['jpg'],
    png: ['png'],
    pdf: ['pdf'],
    mov: ['mov'],
    zip: ['zip'],
    word: ['doc', 'docx'],
    excel: ['xls', 'xlsx'],
    ppt: ['ppt', 'pptx'],
  };

  const allowedExtensionsForPath = urlToFileExtensionsMap[fileType] || [];

  const allowedUploadedFilesExtension = fileMimeTypes[fileType];

  const formattedConverterText = formatText(converterText, {
    pathFrom: extensionName[fileType],
  });

  const formattedErrorText = formatText(errorContent, {
    pathFrom: extensionName[fileType],
  });

  const resetViewToInitialState = useCallback(() => {
    setError(null);
    setFiles(null);
    setConverterStates('initialState');
    setIsDragging(false);

    setTimeout(() => {
      if (uploadFileRef.current) {
        uploadFileRef.current.value = '';
      }
    }, 100);
  }, []);

  const handleDroppedFiles = (files: FileList) => {
    const file = files.length > 0 ? files.item(files.length - 1) : null;
    if (!file) return;

    const fileExtension = file.name.split('.').pop()?.toLowerCase() || '';

    if (!allowedExtensionsForPath.includes(fileExtension)) {
      setError('unsupportedFormat');
      setConverterStates('errorState');
      return;
    }

    setFiles(files);
    setConverterStates('selectedFileState');
  };

  const handleOpenFileExplorer = () => {
    if (uploadFileRef.current) {
      uploadFileRef.current.click();
    }
  };

  const handleFileInput = () => {
    const fileInput = uploadFileRef.current;
    if (fileInput?.files && fileInput.files.length > 0) {
      const file = fileInput.files[0];
      const filesSize = Array.from(fileInput.files).reduce((accumulator, file) => accumulator + file.size, 0);

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

      setFiles(fileInput.files);
      setConverterStates('selectedFileState');
    }
  };

  const handleCompression = async () => {
    if (!fileType || !files) return;

    setConverterStates('compressingState');

    try {
      let compressionType: 'image' | 'document' | 'video' | 'archive' | undefined;
      const fileExtension = files[0].name.split('.').pop()?.toLowerCase() || '';

      if (compressionTypes.imageCompression.includes(fileExtension)) {
        compressionType = 'image';
      } else if (compressionTypes.documentCompression.includes(fileExtension)) {
        compressionType = 'document';
      } else if (compressionTypes.videoCompression.includes(fileExtension)) {
        compressionType = 'video';
      } else if (compressionTypes.archiveCompression.includes(fileExtension)) {
        compressionType = 'archive';
      } else {
        throw new Error('Unsupported file type for compression');
      }

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
          pathFrom={extensionName[fileType]}
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
          <div className="relative flex h-[58px] items-center text-center lg:w-[60rem] lg-xl:w-[65rem] 1.5xl:w-[72rem] 2xl:w-[80rem]">
            <div
              className="absolute left-0 hidden flex-row items-center justify-end rounded-sm-6 border-[1.5px] border-primary px-4 py-2 pt-2.5 hover:bg-white/50 lg:flex"
              onClick={() => window.history.back()}
            >
              <CaretLeft className="text-primary" size={24} />
              <p className="pl-1 text-base font-medium text-primary">Back</p>
            </div>

            {/* Título centrado */}
            <p className="absolute left-1/2 -translate-x-1/2 text-5xl font-semibold">{formattedConverterText.title}</p>
          </div>

          <h2 className="max-w-[865px] pt-2 text-xl text-gray-80">{textContent.description}</h2>
          <div className="flex flex-row items-center space-x-1">
            <ShieldCheck size={16} className="text-green" />
            <p className="text-sm font-medium text-gray-80">{textContent.secureUpload}</p>
          </div>
        </div>
        <div
          className={`flex w-full max-w-screen-lg flex-col items-center space-y-8 rounded-2xl  px-5 ${borderStyle}  py-12`}
        >
          <State state={converterStates} />
        </div>
      </div>
    </section>
  );
};
