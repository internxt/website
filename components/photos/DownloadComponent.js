import React from 'react';
import { isMobile } from 'react-device-detect';
import { UilArrowUpRight, UilArrowCircleDown } from '@iconscout/react-unicons';

const DownloadComponent = ({
  textContent,
  device,
  lang,
  download
}) => {
  const platform = {
    iOS: 'ios',
    Android: 'android',
    Windows: 'windows',
    Ubuntu: 'linux',
    'Mac OS X': 'mac',
  };

  return (
    <div className="flex flex-row w-full justify-center items-center lg:items-start lg:space-x-32">

      {/* Open Drive Web */}
      <div
        className={`${isMobile ? 'hidden' : 'hidden lg:flex'} flex-row flex-grow flex-1 space-x-2 items-center justify-end text-base font-medium text-blue-60`}
      >
        <a
          className="lg:flex flex-row space-x-2 items-center justify-end"
          href="https://drive.internxt.com/app/photos"
          target="_blank"
          rel="noreferrer"
        >
          <span>{textContent.openDriveWeb}</span>
          <UilArrowUpRight className="w-5 h-5" />
        </a>
      </div>

      {/* Download for mobile */}
      <div className={`${isMobile ? 'justify-center' : 'justify-start'} flex flex-row flex-grow flex-1`}>

        <a
          className="flex lg:hidden flex-col w-full"
          href={(platform[device] === 'ios' || platform[device] === 'mac') ? download.ios : download.android}
          target="_blank"
          rel="noreferrer"
        >
          <img loading="lazy" className={`h-16 ${((platform[device] === 'ios' || platform[device] === 'mac') && lang === 'en') ? '' : 'hidden'}`} src="/badges/appStoreEN.svg" draggable="false" alt="Apple App Store badge for download Internxt Drive Mobile App" />
          <img loading="lazy" className={`h-16 ${((platform[device] === 'ios' || platform[device] === 'mac') && lang === 'es') ? '' : 'hidden'}`} src="/badges/appStoreES.svg" draggable="false" alt="Apple App Store badge for download Internxt Drive Mobile App" />
          <img loading="lazy" className={`h-16 ${((platform[device] === 'android' || platform[device] === 'windows') && lang === 'en') ? '' : 'hidden'}`} src="/badges/playStoreEN.svg" draggable="false" alt="Google Play Store badge for download Internxt Drive Mobile App" />
          <img loading="lazy" className={`h-16 ${((platform[device] === 'android' || platform[device] === 'windows') && lang === 'es') ? '' : 'hidden'}`} src="/badges/playStoreES.svg" draggable="false" alt="Google Play Store badge for download Internxt Drive Mobile App" />
        </a>

        <div className="hidden lg:flex flex-col items-center space-y-1">

          {/* Desktop view on mac OR Mobile view in iPhone */}
          {((!isMobile && (platform[device] === 'mac')) || (isMobile && (platform[device] === 'ios'))) && (
            <>
              <a
                className="flex flex-row space-x-2 items-center text-base font-medium text-blue-60"
                href={download.ios}
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  {textContent.downloadOnThe}
                  {' '}
                  {textContent.ios}
                </span>
                <UilArrowCircleDown className="w-5 h-5" />
              </a>

              <div className="text-xs text-cool-gray-60">
                {textContent.orGetOn}
                {' '}
                <a
                  className="underline text-cool-gray-70 font-medium"
                  href={download.android}
                  target="_blank"
                  rel="noreferrer"
                >
                  {textContent.android}
                </a>
              </div>
            </>
          )}

          {/* Desktop view on windows and linux */}
          {((!isMobile && !(platform[device] === 'mac')) || (isMobile && (platform[device] === 'android'))) && (
            <>
              <a
                className="flex flex-row space-x-2 items-center text-base font-medium text-blue-60"
                href={download.android}
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  {textContent.getOn}
                  {' '}
                  {textContent.android}
                </span>
                <UilArrowCircleDown className="w-5 h-5" />
              </a>

              <div className="text-xs text-cool-gray-60">
                {textContent.orDownloadOnThe}
                {' '}
                <a
                  className="underline text-cool-gray-70 font-medium"
                  href={download.ios}
                  target="_blank"
                  rel="noreferrer"
                >
                  {textContent.ios}
                </a>
              </div>
            </>
          )}

        </div>
      </div>

    </div>
  );
};

export default DownloadComponent;
