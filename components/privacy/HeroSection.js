import React from 'react';
import { UilPlayCircle } from '@iconscout/react-unicons';
import styles from './HeroSection.module.scss';

const HeroSection = ({
  textContent,
  device,
  lang
}) => (
  <section className="relative flex flex-col w-full pt-32 bg-cool-gray-100">
    <div className="flex flex-col items-center py-20 lg:py-40 z-10">

      {/* Main title */}
      <div className="text-center px-10">

        <h1 className="text-6xl lg:text-7xl font-semibold text-white mb-10">
          Privacy
        </h1>

        <h2 className="text-base font-normal text-white mb-10">
          Privacy is a fundamental human right. At Internxt we believe that any kind of product
          {' '}
          <br className="hidden sm:flex" />
          should be designed with privacy in it’s core. What you share from your devices and
          {' '}
          <br className="hidden sm:flex" />
          who you share it with should be up to you. We design and develop products that
          {' '}
          <br className="hidden sm:flex" />
          protects your privacy and puts you back in control over your information.
        </h2>

        <a
          className="flex flex-row space-x-2 items-center justify-center text-blue-50"
          href=""
          target="_blank"
          rel="noreferrer"
        >
          <span>Watch the movie</span>
          <UilPlayCircle className="w-5 h-5" />
        </a>

      </div>

    </div>
    <div className={`absolute -top-4 left-0 w-full h-full ${styles.neonBlur} pointer-events-none filter blur-lg`} />

  </section>
);

export default HeroSection;
