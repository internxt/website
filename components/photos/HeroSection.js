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
          INTERNXT PHOTOS
        </h2>

        <h1 className="text-4xl lg:text-6xl font-semibold text-cool-gray-90 px-4 mb-10">
          Your picture-perfect moments
          {' '}
          <br className="hidden sm:flex" />
          under lock and key.
        </h1>

        <h3 className="text-base font-normal text-cool-gray-80 mb-10 lg:mb-20">
          Relive, share and keep your best memories safe all in one place.
          {' '}
          <br className="hidden sm:flex" />
          With Internxt Photos focus on privacy and security
          {' '}
          <br className="hidden sm:flex" />
          your photos are yours and yours alone.
        </h3>

      </div>

      {/* Main title Mockup */}
      <div
        className="hidden lg:flex py-72 rounded-xl bg-cool-gray-10 border border-cool-gray-20 mt-8 mb-12"
        style={{
          width: 720,
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
