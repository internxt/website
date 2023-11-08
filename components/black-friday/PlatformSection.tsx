import { Globe } from '@phosphor-icons/react';
import React from 'react';

const PlatformSection = ({ textContent }) => {
  return (
    <section className="overflow-hidden bg-black">
      <div className="flex flex-col items-center py-12 px-5">
        <div className="flex flex-col items-center space-y-6 pb-16 text-center">
          <p className="text-4xl font-semibold text-white md:text-5xl">{textContent.title}</p>
          <p className="text-xl text-gray-5">{textContent.description}</p>
        </div>
        <div className="sm:gap-x-30 flex flex-row flex-wrap justify-center gap-y-10 gap-x-20 lg:gap-x-24">
          <div className="flex flex-col items-center space-y-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-100">
              <Globe size={32} className="text-white" />
            </div>
            <p className="text-white">{textContent.web}</p>
          </div>
          <div className="flex flex-col items-center space-y-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-100">
              <img src="/images/special-offer/black-friday/iOS.svg" width={26.5} height={32} alt="iOS image" />
            </div>
            <p className="text-white">{textContent.iOS}</p>
          </div>
          <div className="flex flex-col items-center space-y-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-100">
              <img src="/images/special-offer/black-friday/Android.svg" width={26.5} height={32} alt="Android image" />
            </div>
            <p className="text-white">{textContent.android}</p>
          </div>
          <div className="flex flex-col items-center space-y-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-100">
              <img src="/images/special-offer/black-friday/MacOs.svg" width={32} height={32} alt="MacOs image" />
            </div>
            <p className="text-white">{textContent.mac}</p>
          </div>
          <div className="flex flex-col items-center space-y-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-100">
              <img src="/images/special-offer/black-friday/Windows.svg" width={26.5} height={32} alt="Windows image" />
            </div>
            <p className="text-white">{textContent.windows}</p>
          </div>
          <div className="flex flex-col items-center space-y-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-100">
              <img src="/images/special-offer/black-friday/Linux.svg" width={26.5} height={32} alt="Linux image" />
            </div>
            <p className="text-white">{textContent.linux}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;
