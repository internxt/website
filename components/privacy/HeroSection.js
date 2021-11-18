import React, { useState } from 'react';
import { UilPlayCircle } from '@iconscout/react-unicons';
import YoutubeEmbed from '../utils/youtube';
import styles from './HeroSection.module.scss';

const HeroSection = ({
  textContent
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="relative flex flex-col w-full pt-32 bg-cool-gray-100 overflow-hidden">
        <div className="flex flex-col items-center py-16 pb-20 lg:py-40 z-10">

          {/* Main title */}
          <div className="text-left sm:text-center px-6">

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-white mb-6 sm:mb-10">
              {textContent.title}
            </h1>

            <h2 className="text-xl sm:text-base font-normal w-full max-w-2xl text-white mb-8 sm:mb-10">
              {textContent.subtitle.line1}
              {' '}
              {textContent.subtitle.line2}
              {' '}
              {textContent.subtitle.line3}
              {' '}
              {textContent.subtitle.line4}
              {' '}
              {textContent.subtitle.line5}
            </h2>

            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="flex flex-row sm:mx-auto space-x-2 items-center justify-center text-xl sm:text-base text-blue-50"
            >
              <span>{textContent.cta}</span>
              <UilPlayCircle className="w-5 h-5" />
            </button>

          </div>

        </div>
        <div className={`absolute top-0 left-0 w-full h-full ${styles.neonBlur} pointer-events-none filter blur-lg transform scale-110 origin-center`} />

      </section>
      <YoutubeEmbed videoID="SlU5zQCM1Lk" show={isOpen} setShow={setIsOpen} autoplay loop hideinfo jsapi />
    </>
  );
};

export default HeroSection;
