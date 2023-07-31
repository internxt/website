import React from 'react';
import styles from '/components/techradar-discount/Background.module.scss';

const CtaSection = ({ textContent }) => {
  return (
    <section className="overflow-hidden">
      <div className="flex w-screen flex-col items-center justify-center space-y-8 px-10 py-12">
        <div className="flex w-full max-w-[500px] flex-col space-y-4 text-center text-white">
          <p className="text-4xl font-semibold">{textContent.title}</p>
          <p className="text-xl font-normal">{textContent.subtitle}</p>
        </div>
        <button
          className="flex rounded-lg bg-white px-6 py-2 hover:bg-blue-10"
          onClick={() => window.open('https://drive.internxt.com/new', '_blank')}
        >
          <p className="text-base font-semibold text-primary">{textContent.cta}</p>
        </button>
      </div>
      <div
        className={`absolute top-0 left-0 -z-10 flex h-full w-full ${styles.partnerHeroSection} pointer-events-none origin-center`}
      />
    </section>
  );
};

export default CtaSection;
