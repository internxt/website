import { isMobile } from 'react-device-detect';
import { ArrowCircleRight } from '@phosphor-icons/react';

const DownloadComponent = ({ textContent, download }) => {
  return (
    <div className="flex w-full flex-col items-center justify-center space-y-9 pb-6">
      <p className="text-center text-4xl font-semibold text-gray-100">{textContent.downloadTitle}</p>
      <div className="flex w-full flex-col items-center justify-center space-y-4 lg:flex-row lg:items-start lg:space-x-12">
        {/* Download for desktop */}
        {!isMobile && (
          <div className="flex flex-col items-center space-y-4 lg:flex-row lg:space-x-32 lg:space-y-0">
            {download.MacOS && (
              <a
                href={download.MacOS}
                className="flex flex-row items-center space-x-2 text-lg font-semibold text-primary hover:underline"
              >
                <span>{textContent.downloadForMac}</span>
                <ArrowCircleRight size={18} weight="bold" />
              </a>
            )}
            {download.Windows && (
              <a
                href={download.Windows}
                className="flex flex-row items-center space-x-2 text-lg font-semibold text-primary hover:underline"
              >
                <span>{textContent.downloadForWindows}</span>
                <ArrowCircleRight size={18} weight="bold" />
              </a>
            )}
            {download.Linux && (
              <a
                href={download.Linux}
                className="flex flex-row items-center space-x-2 text-lg font-semibold text-primary hover:underline"
              >
                <span>{textContent.downloadForLinux}</span>
                <ArrowCircleRight size={18} weight="bold" />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default DownloadComponent;
