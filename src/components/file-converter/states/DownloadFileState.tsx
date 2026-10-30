import { CheckCircle, House } from '@phosphor-icons/react';
import { useRouter } from 'next/navigation';

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
  const route = useRouter();
  return (
    <div className="flex flex-col items-center space-y-8 text-center">
      <div className="flex flex-row space-x-2 rounded-lg bg-green/8 p-4 text-center md:text-start">
        <CheckCircle className="hidden text-green md:flex" size={19.5} />
        <p className="text-gray-100 dark:text-white-95">{textContent.label}</p>
      </div>
      <h3 className="text-3xl font-semibold">{textContent.title}</h3>
      <p className="text-lg font-semibold text-gray-60 dark:text-green-120">
        {textContent.description}
      </p>
      <div className="flex flex-col gap-2 md:flex-row">
        <button
          onClick={() => route.push('/file-converter')}
          className="flex flex-row items-center justify-center space-x-2 rounded-lg border-gray-10 bg-white dark:border-gray-71 dark:bg-gray-95 px-5 py-2 font-medium shadow-sm hover:bg-gray-5 dark:hover:bg-gray-105"
        >
          <House size={24} />
          <p>{textContent.goHome}</p>
        </button>
        <button
          onClick={onConvertMoreFilesButtonPressed}
          className="rounded-lg border border-gray-5 bg-white dark:border-gray-71 dark:bg-gray-95 px-5 py-2.5 font-medium text-gray-80 dark:text-cool-gray-30 shadow-sm hover:bg-gray-5 dark:hover:bg-gray-105"
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
