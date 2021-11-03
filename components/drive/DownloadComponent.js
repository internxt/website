import React from 'react';
import { isMobile } from 'react-device-detect';
import { UilArrowUpRight, UilArrowCircleDown } from '@iconscout/react-unicons';

const DownloadComponent = ({
  textContent,
  download
}) => (
  <div className="flex flex-row w-full justify-center items-start space-x-32">

    {/* Download for desktop */}
    <div className={`${isMobile ? 'hidden' : ''} flex flex-row flex-grow flex-1 justify-end`}>
      <div className="flex flex-col items-center space-y-1">
        <a
          className="flex flex-row space-x-2 items-center text-base font-medium text-blue-60"
          href={download}
        >
          <span>Download for Mac</span>
          <UilArrowCircleDown className="w-5 h-5" />
        </a>

        <div className="text-xs text-cool-gray-60">
          {'Or download for '}
          <a href="" className="underline text-cool-gray-70 font-medium">Windows</a>
          {' or '}
          <a href="" className="underline text-cool-gray-70 font-medium">Linux</a>
        </div>
      </div>
    </div>

    {/* Open Drive Web */}
    <a
      className={`${isMobile ? 'hidden' : ''} flex flex-row space-x-2 items-center text-base font-medium text-blue-60`}
      href="https://drive.internxt.com/app"
      target="_blank"
      rel="noreferrer"
    >
      <span>Open Drive Web</span>
      <UilArrowUpRight className="w-5 h-5" />
    </a>

    {/* Download for mobile */}
    <div className={`${isMobile ? 'justify-center' : 'justify-start'} flex flex-row flex-grow flex-1`}>
      <div className="flex flex-col items-center space-y-1">
        <a
          className="flex flex-row space-x-2 items-center text-base font-medium text-blue-60"
          href=""
        >
          <span>Download on the App Store</span>
          <UilArrowCircleDown className="w-5 h-5" />
        </a>

        <div className="text-xs text-cool-gray-60">
          {'Or get on '}
          <a href="" className="underline text-cool-gray-70 font-medium">Play Store</a>
        </div>
      </div>
    </div>

  </div>
);

export default DownloadComponent;
