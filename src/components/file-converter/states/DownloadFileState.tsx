import { CheckCircle } from '@phosphor-icons/react';

interface DownloadFileStateProps {
  textContent: any;
  onConvertMoreFilesButtonPressed: () => void;
  onDownloadFile: () => void;
}

const DownloadFileState = ({
  textContent,
  onConvertMoreFilesButtonPressed,
  onDownloadFile,
}: DownloadFileStateProps) => {
  return (
    <div className="flex flex-col items-center space-y-8">
      <div className="flex flex-row space-x-2 bg-green/8 p-4">
        <CheckCircle className="text-green" size={19.5} />
        <p className="text-gray-100">{textContent.label}</p>
      </div>
      <h3 className="text-3xl font-semibold">{textContent.title}</h3>
      <p className="text-lg font-semibold text-gray-60">{textContent.description}</p>
      <div className="flex flex-row space-x-2">
        <button
          onClick={onConvertMoreFilesButtonPressed}
          className="rounded-lg border border-gray-5 bg-white px-5 py-2.5 font-medium text-gray-80 shadow-sm hover:bg-gray-10"
        >
          {textContent.convertAnother}
        </button>
        <button
          onClick={onDownloadFile}
          className="rounded-lg bg-primary px-5 py-2.5 font-medium text-white hover:bg-primary-dark"
        >
          {textContent.downloadFile}
        </button>
      </div>
    </div>
  );
};

export default DownloadFileState;
