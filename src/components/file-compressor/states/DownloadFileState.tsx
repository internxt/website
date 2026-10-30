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
      <div className="flex flex-row items-center space-x-2 rounded-lg bg-green-40 p-4 text-center text-green-dark md:text-start">
        <CheckCircle weight="fill" size={19.5} className="hidden shrink-0 md:flex" />
        <p>{textContent.label}</p>
      </div>
      <h3 className="text-3xl font-semibold text-gray-100 dark:text-white-95">{textContent.title}</h3>
      <p className="text-lg font-semibold text-gray-60 dark:text-green-120">
        {textContent.description}
      </p>
      <div className="flex flex-col gap-2 md:flex-row">
        <button
          onClick={() => route.push('/file-compressor')}
          className="flex flex-row items-center justify-center space-x-2 rounded-lg border-gray-10 bg-white dark:border-gray-71 dark:bg-gray-95 px-5 py-2 font-medium shadow-sm hover:bg-gray-5 dark:hover:bg-gray-105"
        >
          <House size={24} />
          <p>{textContent.goHome}</p>
        </button>
        <button
          onClick={onConvertMoreFilesButtonPressed}
          className="rounded-lg border border-gray-5 bg-white dark:border-gray-71 dark:bg-gray-95 px-5 py-2.5 font-medium text-gray-80 dark:text-cool-gray-30 shadow-sm hover:bg-gray-5 dark:hover:bg-gray-105"
        >
          {textContent.compressAnother || textContent.convertAnother}
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
