import { useEffect, useState } from 'react';

import { WarningCircle } from '@phosphor-icons/react';
import { Errors } from '../types';

interface ErrorStateProps {
  textContent: any;
  errorContent: any;
  error: Errors | null;
  resetViewToInitialState: () => void;
}

interface ErrorViewProps {
  state: Errors;
}

export const ErrorState = ({ textContent, errorContent, error, resetViewToInitialState }: ErrorStateProps) => {
  const [state, setState] = useState<Errors>();

  useEffect(() => {
    if (error) {
      setState(error);
    }
  }, [error]);

  const ErrorView = (selectedView: ErrorViewProps) => {
    const state = {
      bigFile: (
        <>
          <div className="flex flex-row space-x-2 rounded-lg bg-red/8 p-4">
            <WarningCircle className="mt-0.5 hidden text-red sm:mt-0 md:flex" size={19.5} />
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
            <WarningCircle className="mt-0.5 hidden text-red sm:mt-0 md:flex" size={19.5} />
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
            <WarningCircle className="mt-0.5 hidden text-red sm:mt-0 md:flex" size={19.5} />
            <p className="text-gray-100">
              <span className="font-semibold">{errorContent.unsupportedFormat.label.bold}</span>
              {errorContent.unsupportedFormat.label.normal}
            </p>
          </div>
          <p className="text-3xl font-semibold text-gray-100">{textContent.dragYourFile}</p>
          <button className="flex rounded-lg bg-primary px-5 py-2.5 text-white" onClick={resetViewToInitialState}>
            <p className="font-medium">{textContent.cta}</p>
          </button>
        </>
      ),
    };
    return state[selectedView.state];
  };

  return <div className="flex flex-col items-center space-y-8 text-center">{state && <ErrorView state={state} />}</div>;
};
