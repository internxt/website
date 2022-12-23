/* eslint-disable max-len */
import React from 'react';
import DownloadComponent from '../drive/DownloadComponent';

const HeroSection = ({ textContent, lang, device, download }) => (
  <section className="flex w-full flex-col pt-10">
    <div className="flex flex-col items-center py-40">
      {/* Main title */}
      <div className="px-6 text-center">
        <h2 className="mb-2 text-sm font-medium text-cool-gray-90 lg:text-base">{textContent.eyebrow}</h2>

        <h1 className="mb-10 px-4 text-4xl font-medium text-cool-gray-90 lg:text-6xl">
          {textContent.title.line1} <br className="hidden sm:flex" />
          {textContent.title.line2}
        </h1>

        <h3 className="mb-10 text-lg font-normal text-cool-gray-80 sm:text-base">
          {textContent.subtitle.line1} <br className="hidden sm:flex" />
          {textContent.subtitle.line2} <br className="hidden sm:flex" />
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

      <DownloadComponent textContent={textContent.DownloadLinks} lang={lang} download={download} />
    </div>
  </section>
);

export default HeroSection;
