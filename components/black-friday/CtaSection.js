import React from 'react';
import styles from './BF-HeroSection.module.scss';

const CtaSection = ({ textContent }) => {
  return (
    <section className="overflow-hidden">
      <div className="center mt-20 mb-20 flex flex-col items-center space-y-10">
        <div className="center flex flex-col items-center space-y-5">
          <p className="text-4xl font-semibold text-white">{textContent.title}</p>
          <p className="text-xl font-light text-white">{textContent.subtitle}</p>
        </div>
        <div className="flex">
          <button
            className="relative flex h-14 w-48 flex-row items-center justify-center space-x-4 rounded-4xl bg-primary px-8 text-lg text-white transition duration-100 focus:outline-none focus-visible:bg-primary-dark active:bg-primary-dark sm:mt-0 sm:text-base"
            onClick={() => console.log('signup')}
          >
            Get the deal
          </button>
        </div>
      </div>
      <div
        className={`absolute top-0 left-0 -z-10 flex h-full w-full ${styles.neonBlur} pointer-events-none origin-center`}
      />
    </section>
  );
};

export default CtaSection;
