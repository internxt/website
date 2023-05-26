/* eslint-disable max-len */
import Image from 'next/image';
import React from 'react';
import DownloadComponent from '../drive/DownloadComponent';
import RevealX from '../components/RevealX';
import RevealY from '../components/RevealY';

const HeroSection = ({ textContent, lang, device, download }) => (
  <section className="flex w-full flex-col pt-12">
    <div className="flex flex-col items-center py-28 px-5 lg:py-40">
      {/* Main title */}
      <div className="flex flex-col items-center justify-center space-y-6 text-center">
        <div className="flex w-max items-center justify-center rounded-lg bg-gray-5 py-2 px-4">
          <h2 className="text-xl font-medium text-gray-80">{textContent.eyebrow}</h2>
        </div>

        <h1 className="mb-10 px-4 text-4xl font-semibold text-cool-gray-90 lg:text-6xl lg:leading-tight">
          {textContent.title.line1} <br className="hidden sm:flex" />
          <span className="text-primary">{textContent.title.line2}</span>
        </h1>

        <h3 className="max-w-4xl text-lg font-normal text-gray-80 sm:text-xl lg:mb-20">
          {textContent.subtitle.line1}
          {textContent.subtitle.line2}
          {textContent.subtitle.line3}
        </h3>
        <div className="flex h-full flex-col px-5 py-16 lg:hidden">
          <Image
            width={622}
            height={483}
            src="/images/photos/photo-storage.webp"
            alt="Internxt secure cloud storage"
            draggable="false"
          />
        </div>
        <div className="mx-auto hidden h-[700px] w-[622px] flex-col items-center justify-center object-contain lg:flex">
          <div className="relative flex h-full w-full flex-col px-5 py-16">
            {/* Dog image */}
            <RevealX
              direction="left"
              className="absolute bottom-[147px] -right-5 z-20 flex  overflow-hidden rounded-3xl shadow-xl"
            >
              <Image
                width={287}
                height={287}
                src="/images/photos/Dog-image.png"
                alt="Internxt secure cloud storage"
                draggable="false"
              />
            </RevealX>
            {/*  Girl image */}
            <RevealX
              direction="right"
              className="absolute bottom-[107px] -left-5 flex overflow-hidden rounded-3xl shadow-xl"
            >
              <Image
                width={287}
                height={287}
                src="/images/photos/Girl-image.png"
                alt="Internxt secure cloud storage"
                draggable="false"
              />
            </RevealX>
            {/* Skater image */}
            <RevealY className="absolute bottom-[330px] left-[147px] z-10 flex w-max rounded-3xl shadow-xl">
              <Image
                width={287}
                className="shadow-xl"
                height={287}
                src="/images/photos/Skater-image.png"
                alt="Internxt secure cloud storage"
                draggable="false"
              />
            </RevealY>
          </div>
        </div>
      </div>

      {/* Download links */}
      <DownloadComponent textContent={textContent.DownloadLinks} lang={lang} download={download} />
    </div>
  </section>
);

export default HeroSection;
