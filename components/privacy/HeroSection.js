import React, { useState } from 'react';
import { UilPlayCircle } from '@iconscout/react-unicons';
import YoutubeEmbed from '../utils/youtube';
import styles from './HeroSection.module.scss';
import { CaretRight } from '@phosphor-icons/react';

const HeroSection = ({ textContent }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="relative flex w-full flex-col overflow-hidden pt-14">
        <div className="flex flex-col items-center py-16 pb-20 lg:py-20">
          {/* Main title */}
          <div className="flex flex-col items-center justify-center px-6 text-center">
            <h1 className="mb-6 max-w-[796px] text-5xl font-medium text-gray-100 sm:mb-10 sm:text-6xl">
              {textContent.title.normalText}
              <span className="text-primary">{textContent.title.blueText}</span>
            </h1>

            <h2 className="mb-8 w-full max-w-[850px] text-xl font-normal text-gray-80 sm:mb-10">
              {textContent.description}
            </h2>

            <div
              type="button"
              onClick={() => setIsOpen(true)}
              className="flex flex-row items-center justify-center space-x-1 text-xl font-semibold text-blue-50 hover:underline sm:text-lg"
            >
              <p>{textContent.cta}</p>
              <CaretRight size={12} weight="bold" />
            </div>
          </div>
        </div>
      </section>
      <YoutubeEmbed videoID="SlU5zQCM1Lk" show={isOpen} setShow={setIsOpen} autoplay loop hideinfo jsapi />
    </>
  );
};

export default HeroSection;
