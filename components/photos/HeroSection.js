/* eslint-disable max-len */
import React from 'react';
import DownloadComponent from './DownloadComponent';

const HeroSection = ({
  textContent,
  lang,
  device,
  download
}) => (
  <section className="flex flex-col w-full pt-10">
    <div className="flex flex-col items-center py-40">

      {/* Main title */}
      <div className="text-center px-6">

        <h2 className="text-sm lg:text-base font-semibold text-cool-gray-90 mb-2">
          {textContent.eyebrow}
        </h2>

        <h1 className="text-4xl lg:text-6xl font-semibold text-cool-gray-90 px-4 mb-10">
          {textContent.title.line1}
          {' '}
          <br className="hidden sm:flex" />
          {textContent.title.line2}
        </h1>

        <h3 className="text-lg sm:text-base font-normal text-cool-gray-80 mb-10">
          {textContent.subtitle.line1}
          {' '}
          <br className="hidden sm:flex" />
          {textContent.subtitle.line2}
          {' '}
          <br className="hidden sm:flex" />
          {textContent.subtitle.line3}
        </h3>

      </div>

      {/* Main title Mockup */}
      {/*
      <div
        className="hidden lg:flex py-72 rounded-xl bg-cool-gray-10 border border-cool-gray-20 mt-8 mb-12"
        style={{
          width: 720,
          height: 505
        }}
      />
      */}
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
