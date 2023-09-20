/* eslint-disable max-len */
import getConfig from 'next/config';
import Image from 'next/image';
import React from 'react';
import DownloadComponent from '../shared/DownloadComponent';
import Header from '../shared/Header';

const HeroSection = ({ textContent, lang, device, download }) => {
  return (
    <section className="flex w-full flex-col">
      <div className="flex flex-col items-center pb-32 pt-40">
        {/* Main title */}
        <div className="flex flex-col items-center justify-center space-y-6 px-5 text-center">
          <div className="flex w-max items-center justify-center rounded-lg bg-gray-5 py-2 px-4">
            <h2 className="text-xl font-medium text-gray-80">{textContent.eyebrow}</h2>
          </div>

          <Header maxWidth="max-w-max" className="text-gray-100">
            {textContent.title.line1} <br className="hidden sm:flex" />
            <span className="text-primary">{textContent.title.line2}</span>
          </Header>

          <h3 className="max-w-4xl text-lg font-normal text-gray-80 sm:text-xl lg:mb-20">
            {textContent.subtitle.line1}
            {textContent.subtitle.line2}
            {textContent.subtitle.line3}
          </h3>
        </div>

        <div className="flex h-full flex-col px-5 py-16">
          <Image
            width={622}
            height={483}
            src="/images/photos/photo-storage.webp"
            loading="eager"
            alt="Internxt secure cloud storage"
            quality={100}
            draggable="false"
          />
        </div>

        {/* Download links */}
        <DownloadComponent textContent={textContent.DownloadLinks} lang={lang} download={download} />
      </div>
    </section>
  );
};

export default HeroSection;
