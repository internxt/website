import React from 'react';
import styles from '../../components/techradar-discount/Background.module.scss';

const CtaSection = ({ textContent }) => {
  return (
    <section className="overflow-hidden py-12">
      <div className="flex flex-col items-center justify-center pt-12 lg:px-20">
        <div className="flex flex-col text-center text-white">
          <p className="text-4xl font-semibold">{textContent.title}</p>
          <p className="pb-5 pt-4 text-xl font-normal">{textContent.description}</p>
        </div>
        <button
          onClick={() => {
            window.open('https://internxt.com/drive', '_blank', 'noopener noreferrer');
          }}
          className="flex max-w-[260px] cursor-pointer flex-col items-center rounded-lg bg-white text-center hover:bg-blue-10"
        >
          <p className="px-9 py-3 text-base font-semibold text-primary">{textContent.cta}</p>
        </button>
      </div>
      <div
        className={`absolute left-0 top-16 -z-10 flex h-screen w-screen ${styles.partnerHeroSection} pointer-events-none origin-center`}
      />
    </section>
  );
};

export default CtaSection;
