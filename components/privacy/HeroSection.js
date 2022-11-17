import React, { useState } from 'react';
import { UilPlayCircle } from '@iconscout/react-unicons';
import YoutubeEmbed from '../utils/youtube';
import styles from './HeroSection.module.scss';

const HeroSection = ({ textContent }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="relative -mt-16 flex w-full flex-col overflow-hidden bg-cool-gray-100 pt-16">
        <div className="z-10 flex flex-col items-center py-16 pb-20 lg:py-40">
          {/* Main title */}
          <div className="px-6 text-left sm:text-center">
            <h1 className="mb-6 text-5xl font-medium text-white sm:mb-10 sm:text-6xl lg:text-7xl">
              {textContent.title}
            </h1>

            <h2 className="mb-8 w-full max-w-2xl text-xl font-normal text-white sm:mb-10 sm:text-base">
              {textContent.subtitle.line1} {textContent.subtitle.line2} {textContent.subtitle.line3}{' '}
              {textContent.subtitle.line4} {textContent.subtitle.line5}
            </h2>

            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="flex flex-row items-center justify-center space-x-2 text-xl text-blue-50 sm:mx-auto sm:text-base"
            >
              <span>{textContent.cta}</span>
              <UilPlayCircle className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div
          className={`absolute top-0 left-0 h-full w-full ${styles.neonBlur} pointer-events-none origin-center scale-[105] blur-lg filter`}
        />
      </section>
      <YoutubeEmbed videoID="SlU5zQCM1Lk" show={isOpen} setShow={setIsOpen} autoplay loop hideinfo jsapi />
    </>
  );
};

export default HeroSection;
