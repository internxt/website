import React from 'react';
import styles from './BF-HeroSection.module.scss';

const BestStorageSection = ({ textContent, lang }) => {
  return (
    <section className="overflow-hidden">
      <div className="flex flex-col items-center py-24 px-20">
        <div className="top-24 flex flex-col items-center space-y-5">
          <h1 className="text-6xl font-bold text-white">{textContent.BestStorage.title}</h1>
          <h3 className="text-xl font-normal text-white">{textContent.BestStorage.subtitle}</h3>
        </div>
        <div className="py-9">
          <button
            className="relative flex h-14 w-48 flex-row items-center justify-center space-x-4 rounded-4xl bg-primary px-8 text-lg text-white transition duration-100 focus:outline-none focus-visible:bg-primary-dark active:bg-primary-dark sm:mt-0 sm:text-base"
            onClick={() => console.log('signup')}
          >
            {textContent.HeroSection.button.text}
          </button>
        </div>
        <img
          // loading="lazy"
          className="mb-6 hidden md:flex lg:max-w-3xl"
          src="/images/special-offer/black-friday/devices.webp"
          draggable="false"
          alt="dektop, laptop and phone with Internxt app"
        />
        <img
          // loading="lazy"
          className="mb-6 flex md:hidden lg:max-w-3xl"
          src="/images/home/devicesMobileView.png"
          draggable="false"
          alt="dektop, laptop and phone with Internxt app"
        />
      </div>
      <div
        className={`absolute top-0 left-0 -z-10 flex h-full w-full ${styles.neonBlur} pointer-events-none origin-center`}
      />
    </section>
  );
};

export default BestStorageSection;
