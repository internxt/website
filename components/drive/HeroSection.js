import React from 'react';
import DownloadComponent from './DownloadComponent';

const HeroSection = ({
  textContent,
  device,
  lang,
  download
}) => (
  <section className="flex flex-col w-full pt-36">
    <div className="flex flex-col items-center py-20 lg:py-40">

      {/* Main title */}
      <div className="text-center px-6">

        <h2 className="text-sm lg:text-base font-semibold text-cool-gray-90 mb-2">
          INTERNXT DRIVE
        </h2>

        <h1 className="text-4xl lg:text-6xl font-semibold text-cool-gray-90 mb-10">
          The safest cloud storage for all
          {' '}
          <br className="hidden sm:flex" />
          your files, photos and more.
        </h1>

        <h3 className="text-base font-normal text-cool-gray-80 mb-10 lg:mb-20">
          Syncing, backing up and sharing your files in total privacy couldn’t be easier.
          {' '}
          <br className="hidden sm:flex" />
          With Internxt Drive we focus in a user-friendly encrypted storage with military-grade
          {' '}
          <br className="hidden sm:flex" />
          encryption, so only you have the control over your files and data.
        </h3>

      </div>

      {/* Main title Mockup */}
      <div
        className="hidden lg:flex py-72 rounded-xl bg-cool-gray-10 border border-cool-gray-20 mt-8 mb-12"
        style={{
          width: 884,
          height: 505
        }}
      />
      {/*
      <div
        className="flex lg:hidden bg-cool-gray-10 rounded-2xl border border-cool-gray-20 shadow-subtle mb-12"
        style={{
          width: 272,
          height: 491
        }}
      />
      */}

      {/* Download links */}
      <DownloadComponent
        textContent={textContent.DownloadLinks}
        lang={lang}
        device={device}
        download={download}
      />

    </div>

  </section>
);

export default HeroSection;
