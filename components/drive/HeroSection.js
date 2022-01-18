/* eslint-disable max-len */
import React from 'react';
import DownloadComponent from './DownloadComponent';

const HeroSection = ({
  textContent,
  lang,
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
          {' '}
          <br className="hidden sm:flex" />
          {textContent.title.line3}
        </h1>

        <h3 className="text-lg sm:text-base font-normal text-cool-gray-80 mb-10 lg:mb-20">
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
      <div
        className="hidden lg:flex py-72 my-8 bg-no-repeat bg-cover bg-center-top"
        style={{
          backgroundImage: 'url(/images/drive/landing.webp)',
          width: 929,
          height: 617
        }}
      />

      {/* Download links */}
      <DownloadComponent
        textContent={textContent.DownloadLinks}
        lang={lang}
        download={download}
      />

    </div>

  </section>
);

export default HeroSection;
