import React from 'react';
import { UilPlayCircle } from '@iconscout/react-unicons';
import styles from './HeroSection.module.scss';

const HeroSection = ({
  textContent
}) => (
  <section className="relative flex flex-col w-full pt-32 bg-cool-gray-100 overflow-hidden">
    <div className="flex flex-col items-center py-20 lg:py-40 z-10">

      {/* Main title */}
      <div className="text-center px-10">

        <h1 className="text-6xl lg:text-7xl font-semibold text-white mb-10">
          {textContent.title}
        </h1>

        <h2 className="text-base font-normal text-white mb-10">
          {textContent.subtitle.line1}
          {' '}
          <br className="hidden sm:flex" />
          {textContent.subtitle.line2}
          {' '}
          <br className="hidden sm:flex" />
          {textContent.subtitle.line3}
          {' '}
          <br className="hidden sm:flex" />
          {textContent.subtitle.line4}
        </h2>

        <a
          className="flex flex-row space-x-2 items-center justify-center text-blue-50"
          href="https://youtu.be/SlU5zQCM1Lk"
          target="_blank"
          rel="noreferrer"
        >
          <span>{textContent.cta}</span>
          <UilPlayCircle className="w-5 h-5" />
        </a>

      </div>

    </div>
    <div className={`absolute top-0 left-0 w-full h-full ${styles.neonBlur} pointer-events-none filter blur-lg transform scale-110 origin-center`} />

  </section>
);

export default HeroSection;
