/* eslint-disable max-len */
import Image from 'next/image';
import React from 'react';
import DownloadComponent from './DownloadComponent';

const HeroSection = ({ textContent, lang, download }) => (
  <section className="flex w-full flex-col pt-40">
    <div className="flex flex-col items-center py-20">
      {/* Main title */}
      <div className="flex flex-col items-center justify-center space-y-6 px-5 text-center">
        <div className="flex w-max items-center justify-center rounded-lg bg-gray-5 py-2 px-4">
          <p className="text-xl font-medium text-gray-80">{textContent.eyebrow}</p>
        </div>

        <h1 className="px-4 text-4xl font-semibold text-gray-100 lg:text-6xl lg:leading-tight">
          <span className="text-primary">{textContent.title.line1}</span> <br className="hidden sm:flex" />
          {textContent.title.line2}
        </h1>

        <h3 className="text-lg font-normal text-gray-80 sm:text-xl lg:mb-20">
          {textContent.subtitle.line1} <br className="hidden sm:flex" />
          {textContent.subtitle.line2} <br className="hidden sm:flex" />
          {textContent.subtitle.line3}
        </h3>
      </div>

      {/* Main title Mockup */}
      <div className="flex h-full flex-col px-5 py-16">
        <img
          src="/images/drive/Internxt-secure-cloud-storage.webp"
          width={757}
          height={419}
          alt="Internxt secure cloud storage"
          draggable="false"
        />
      </div>

      {/* Download links */}
      <DownloadComponent textContent={textContent.DownloadLinks} lang={lang} download={download} />
    </div>
  </section>
);

export default HeroSection;
