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

      {/* Download for desktop */}
      <div className={`${isMobile ? 'hidden' : 'hidden lg:flex'} flex-row flex-grow flex-1 justify-end`}>
        <div className="flex flex-col items-center space-y-1">
          <a
            className="flex flex-row space-x-2 items-center text-base font-medium text-blue-60"
            href={download[platform[device]]}
          >
            <span>
              {textContent.downloadFor}
              {' '}
              <span>{textContent[platform[device]]}</span>
            </span>
            <UilArrowCircleDown className="w-5 h-5" />
          </a>

          <div className="text-xs text-cool-gray-60">
            {textContent.orDownloadFor}
            {' '}

            {/* Secondary downloads when is mac */}
            {(platform[device] === 'mac') && (
              <>
                <a
                  className="underline text-cool-gray-70 font-medium"
                  href={download.linux}
                >
                  {textContent.linux}
                </a>
                {' '}
                {textContent.or}
                {' '}
                <a
                  className="underline text-cool-gray-70 font-medium"
                  href={download.windows}
                >
                  {textContent.windows}
                </a>
              </>
            )}

            {/* Secondary downloads when is linux */}
            {(platform[device] === 'linux') && (
              <>
                <a
                  className="underline text-cool-gray-70 font-medium"
                  href={download.mac}
                >
                  {textContent.mac}
                </a>
                {' '}
                {textContent.or}
                {' '}
                <a
                  className="underline text-cool-gray-70 font-medium"
                  href={download.windows}
                >
                  {textContent.windows}
                </a>
              </>
            )}

            {/* Secondary downloads when is windows */}
            {(platform[device] === 'windows') && (
              <>
                <a
                  className="underline text-cool-gray-70 font-medium"
                  href={download.mac}
                >
                  {textContent.mac}
                </a>
                {' '}
                {textContent.or}
                {' '}
                <a
                  className="underline text-cool-gray-70 font-medium"
                  href={download.linux}
                >
                  {textContent.linux}
                </a>
              </>
            )}

          </div>

        </div>
      </div>

      {/* Open Drive Web */}
      <a
        className={`${isMobile ? 'hidden' : 'hidden lg:flex'} flex-row space-x-2 items-center text-base font-medium text-blue-60`}
        href="https://drive.internxt.com/app"
        target="_blank"
        rel="noreferrer"
      >
        <span>{textContent.openDriveWeb}</span>
        <UilArrowUpRight className="w-5 h-5" />
      </a>

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
