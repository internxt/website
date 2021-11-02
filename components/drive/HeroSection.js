import React from 'react';
import { isMobile } from 'react-device-detect';
import { UilArrowUpRight, UilArrowCircleDown } from '@iconscout/react-unicons';

const HeroSection = ({
  textContent,
  download
}) => {
  const hola = 1;
  console.log(hola);

  return (
    <section className="flex flex-col w-full pt-16">
      <div className="flex flex-col items-center py-40">

        {/* Main title */}
        <div className="text-center">

          <h2 className="text-base font-semibold text-cool-gray-90 mb-2">
            INTERNXT DRIVE
          </h2>

          <h1 className="text-6xl font-semibold text-cool-gray-90 mb-10">
            The safest place for all your
            <br />
            files, photos and more.
          </h1>

          <h3 className="text-base font-normal text-cool-gray-80 mb-20">
            Syncing, backing up and sharing your files in total privacy couldn’t be easier.
            <br />
            With Internxt Drive we focus in a user-friendly cloud storage with military-grade
            <br />
            encryption, so only you have the control over your files and data.
          </h3>

        </div>

        {/* Main title Mockup */}
        <div
          className="py-72 rounded-xl bg-cool-gray-10 border border-cool-gray-20 mt-8 mb-12"
          style={{
            width: 884,
            height: 505
          }}
        />

        {/* Download links */}
        <div className="flex flex-row w-full justify-center items-start space-x-32">

          {/* Download for desktop */}
          <div className={`${isMobile ? 'hidden' : ''} flex flex-row flex-grow justify-end`}>
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
            href=""
          >
            <span>Open Drive Web</span>
            <UilArrowUpRight className="w-5 h-5" />
          </a>

          {/* Download for mobile */}
          <div className={`${isMobile ? 'justify-center' : 'justify-start'} flex flex-row flex-grow`}>
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

      </div>

    </section>

  );
};

export default HeroSection;
