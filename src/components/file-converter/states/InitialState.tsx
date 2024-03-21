import { useState, useEffect } from 'react';
import { WarningCircle } from '@phosphor-icons/react';

import DropArea from '@/components/shared/DropArea';
import EmptyFile from '@/components/shared/icons/EmptyFile';
import { Errors } from '../ConverterSection';

interface InitialStateProps {
  textContent: any;
  errorContent: any;
  error: Errors | null;
  resetViewToInitialState: () => void;
  handleFileDrop: (files: FileList) => void;
  isDragging: boolean;
  setIsDragging: (isDragging: boolean) => void;
  handleOpenFileExplorer: () => void;
}

type States = 'initialState' | 'bigFile' | 'internalError' | 'unsupportedFormat';

interface ViewProps {
  view: States;
}

const InitialState = ({
  textContent,
  errorContent,
  error,
  resetViewToInitialState,
  handleFileDrop,
  isDragging,
  setIsDragging,
  handleOpenFileExplorer,
}: InitialStateProps) => {
  const [state, setState] = useState<States>('initialState');

  useEffect(() => {
    if (error) {
      setState(error);
    }
  }, [error]);

  const View = (selectedView: ViewProps) => {
    const views = {
      initialState: (
        <>
          <div className="flex flex-col rounded-lg bg-primary/7 px-4 py-2">
            <p className="font-medium text-gray-80">{textContent.maxFileSize}</p>
          </div>
          <p className="text-3xl font-semibold text-gray-100">{textContent.dragYourFile}</p>
          <button className="flex rounded-lg bg-primary px-5 py-2.5 text-white" onClick={handleOpenFileExplorer}>
            <p className="font-medium">{textContent.cta}</p>
          </button>
        </>
      ),
      bigFile: (
        <>
          <div className="flex flex-row space-x-2 rounded-lg bg-red/8 p-4">
            <WarningCircle className="text-red" size={19.5} />
            <p className="text-gray-100">
              <span className="font-semibold">{errorContent.bigFile.label} </span>
              {textContent.maxFileSize}.
            </p>
          </div>
          <p className="text-3xl font-semibold text-gray-100">{errorContent.bigFile.selectFile}</p>
          <button className="flex rounded-lg bg-primary px-5 py-2.5 text-white" onClick={resetViewToInitialState}>
            <p className="font-medium">{textContent.cta}</p>
          </button>
        </>
      ),
      internalError: (
        <>
          <div className="flex flex-row space-x-2 rounded-lg bg-red/8 p-4">
            <WarningCircle className="text-red" size={19.5} />
            <p className="text-gray-100">
              <span className="font-semibold">{errorContent.internalError.label.bold}</span>
              {errorContent.internalError.label.normal}
            </p>
          </div>
          <p className="text-3xl font-semibold text-gray-100">{textContent.dragYourFile}</p>
          <button className="flex rounded-lg bg-primary px-5 py-2.5 text-white" onClick={resetViewToInitialState}>
            <p className="font-medium">{textContent.cta}</p>
          </button>
        </>
      ),
      unsupportedFormat: (
        <>
          <div className="flex flex-row space-x-2 rounded-lg bg-red/8 p-4">
            <WarningCircle className="text-red" size={19.5} />
            <p className="text-gray-100">
              <span className="font-semibold">{errorContent.internalError.label.bold}</span>
              {errorContent.internalError.label.normal}
            </p>
          </div>
          <p className="text-3xl font-semibold text-gray-100">{textContent.dragYourFile}</p>
          <button className="flex rounded-lg bg-primary px-5 py-2.5 text-white" onClick={resetViewToInitialState}>
            <p className="font-medium">{textContent.cta}</p>
          </button>
        </>
      ),
    };
    return views[selectedView.view];
  };

  return (
    <DropArea onItemsDropped={handleFileDrop} isDragging={isDragging} setIsDragging={setIsDragging}>
      <div className="flex flex-col items-center space-y-8 text-center">
        {isDragging ? (
          <div className="flex flex-col items-center space-y-4">
            <EmptyFile />
            <p className="text-2xl font-semibold">{textContent.draggingFile}</p>
          </div>
        ) : (
          <View view={state} />
        )}
      </div>
    </DropArea>
  );
};

export default InitialState;
