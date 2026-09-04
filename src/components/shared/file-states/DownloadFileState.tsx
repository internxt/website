import { CheckCircle, House } from '@phosphor-icons/react';
import { useRouter } from 'next/navigation';

interface DownloadFileStateProps {
  textContent: any;
  onConvertMoreFilesButtonPressed: () => void;
  onDownloadFile: () => void;
  /** Where the "go home" button lands: the converter or the compressor. */
  homeUrl?: string;
  /** The compressor uses a filled check on a stronger green. */
  successBannerClass?: string;
  successLabelClass?: string;
  checkIconClass?: string;
  checkIconWeight?: 'regular' | 'fill';
  /** The compressor labels this "compress another". */
  againLabel?: string;
}

const DownloadFileState = ({
  textContent,
  onConvertMoreFilesButtonPressed,
  onDownloadFile,
  homeUrl = '/file-converter',
  successBannerClass = 'bg-green/8 text-center md:text-start',
  successLabelClass = 'text-gray-100',
  checkIconClass = 'hidden text-green md:flex',
  checkIconWeight = 'regular',
  againLabel,
}: DownloadFileStateProps) => {
  const route = useRouter();
  return (
    <div className="flex flex-col items-center space-y-8 text-center">
      <div className={`flex flex-row space-x-2 rounded-lg p-4 ${successBannerClass}`}>
        <CheckCircle className={checkIconClass} weight={checkIconWeight} size={19.5} />
        <p className={successLabelClass}>{textContent.label}</p>
      </div>
      <h3 className="text-3xl font-semibold">{textContent.title}</h3>
      <p className="text-lg font-semibold text-gray-60">{textContent.description}</p>
      <div className="flex flex-col gap-2 md:flex-row">
        <button
          onClick={() => route.push(homeUrl)}
          className="flex flex-row items-center justify-center space-x-2 rounded-lg border-gray-10 bg-white px-5 py-2 font-medium shadow-sm hover:bg-gray-5"
        >
          <House size={24} />
          <p>{textContent.goHome}</p>
        </button>
        <button
          onClick={onConvertMoreFilesButtonPressed}
          className="rounded-lg border border-gray-5 bg-white px-5 py-2.5 font-medium text-gray-80 shadow-sm hover:bg-gray-5"
        >
          {againLabel ?? textContent.convertAnother}
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
