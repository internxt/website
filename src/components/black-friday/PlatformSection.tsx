import React from 'react';
import styles from './BF-HeroSection.module.scss';

const PlatformSection = ({ textContent }) => {
  return (
    <section className="overflow-hidden">
      <div className="flex flex-col items-center py-12">
        <div className="center flex items-center px-20 pb-16 text-center">
          <p className="text-4xl font-semibold text-white">{textContent.PlatformSection.title}</p>
        </div>
        <div className="sm:gap-x-30 flex flex-row flex-wrap justify-center gap-y-10 gap-x-20 lg:gap-x-40">
          <div className="flex flex-col items-center space-y-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white">
              <img src="/images/special-offer/black-friday/Linux.svg" width={26.5} height={32} alt="Linux image" />
            </div>
            <p className="text-white">{textContent.PlatformSection.linux}</p>
          </div>
          <div className="flex flex-col items-center space-y-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white">
              <img src="/images/special-offer/black-friday/MacOs.svg" width={32} height={32} alt="MacOs image" />
            </div>
            <p className="text-white">{textContent.PlatformSection.mac}</p>
          </div>
          <div className="flex flex-col items-center space-y-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white">
              <img src="/images/special-offer/black-friday/iOS.svg" width={26.5} height={32} alt="iOS image" />
            </div>
            <p className="text-white">{textContent.PlatformSection.iOS}</p>
          </div>
          <div className="flex flex-col items-center space-y-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white">
              <img src="/images/special-offer/black-friday/Android.svg" width={26.5} height={32} alt="Android image" />
            </div>
            <p className="text-white">{textContent.PlatformSection.android}</p>
          </div>
          <div className="flex flex-col items-center space-y-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white">
              <img src="/images/special-offer/black-friday/Windows.svg" width={26.5} height={32} alt="Windows image" />
            </div>
            <p className="text-white">{textContent.PlatformSection.windows}</p>
          </div>
        </div>
      </div>
      <div
        className={`absolute top-0 left-0 -z-10 flex h-full w-full ${styles.neonBlur} pointer-events-none origin-center`}
      />
    </section>
  );
};
export default PlatformSection;
