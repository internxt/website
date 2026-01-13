import React from 'react';
import styles from '@/components/techradar-discount/Background.module.scss';

const CtaSection = ({ textContent }) => {
  return (
    <section className="overflow-hidden">
      <div className="flex flex-col items-center justify-center space-y-8 px-4 py-14 text-white">
        <div className="flex flex-col space-y-4 text-center">
          <p className="text-4xl font-semibold">{textContent.title}</p>
          <p className="text-xl font-normal">{textContent.description}</p>
        </div>
        <button
          className="flex cursor-pointer rounded-lg bg-white px-6 py-2 hover:bg-blue-10"
          onClick={() => {
            window.open('https://internxt.com/drive', '_blank', 'noopener noreferrer');
          }}
        >
          <p className="text-base font-semibold text-primary">{textContent.cta}</p>
        </button>
      </div>
      <div
        className={`absolute left-0 top-0 -z-10 flex h-full w-full ${styles.partnerHeroSection} pointer-events-none origin-center`}
      />
    </section>
  );
};

export default CtaSection;
