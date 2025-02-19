import React, { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';

import { ArrowCircleRight } from '@phosphor-icons/react';
import { useRouter } from 'next/router';

const DownloadComponent = ({ textContent, lang, download }) => {
  const router = useRouter();
  const language = router.locale;

  function getOS() {
    const osList = [
      { keyword: 'Android', name: 'Android' },
      { keyword: 'iPad', name: 'iPad' },
      { keyword: 'iPhone', name: 'iPhone' },
      { keyword: 'Win', name: 'Windows' },
      { keyword: 'Mac', name: isMobile ? 'iPad' : 'MacOS' },
      { keyword: 'X11', name: 'UNIX' },
      { keyword: 'Linux', name: 'Linux' },
    ];

    const res = osList.find((os) => window.navigator.appVersion.indexOf(os.keyword) !== -1);

    return res ? res.name : `Not known (${window.navigator.appVersion})`;
  }

  const [OS, setOS] = useState<string>('');

  useEffect(() => {
    setOS(getOS());
  }, [download]);

  return (
    <div className="flex w-full flex-col items-center justify-center space-y-9 pb-6">
      <p className="text-center text-4xl font-semibold text-gray-100">{textContent.downloadTitle}</p>

      <div className="flex w-full flex-col items-center justify-center space-y-4 lg:flex-row lg:items-start lg:space-x-12">
        {/* Download for desktop */}
        {!isMobile && (
          <div className="flex flex-col items-center space-y-4 lg:flex-row lg:space-x-32 lg:space-y-0">
            <a className="flex flex-row items-center space-x-2 text-lg font-semibold text-primary hover:underline">
              <span>{textContent.downloadForMac}</span>
              <ArrowCircleRight size={18} weight="bold" />
            </a>
            <a className="flex flex-row items-center space-x-2 text-lg font-semibold text-primary hover:underline">
              <span>{textContent.downloadForWindows}</span>
              <ArrowCircleRight size={18} weight="bold" />
            </a>
            <a className="flex flex-row items-center space-x-2 text-lg font-semibold text-primary hover:underline">
              <span>{textContent.downloadForLinux}</span>
              <ArrowCircleRight size={18} weight="bold" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default DownloadComponent;
