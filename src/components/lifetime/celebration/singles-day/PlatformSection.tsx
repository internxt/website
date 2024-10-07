import React from 'react';

const PlatformSection = ({ textContent }) => {
  return (
    <section className="overflow-hidden">
      <div className="flex flex-col items-center py-12">
        <div className="center flex items-center px-20 pb-16 text-center">
          <p className="text-5xl font-semibold text-gray-100">{textContent.PlatformSection.title}</p>
        </div>
        <div className="center flex items-center px-20 pb-16 text-center">
          <p className="text-xl font-semibold text-gray-80">{textContent.PlatformSection.subtitle}</p>
        </div>
        <div className="sm:gap-x-30 flex flex-row flex-wrap justify-center gap-y-10 gap-x-20 lg:gap-x-40">
            <div className="flex flex-col items-center space-y-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-100">
                  <img src="/images/special-offer/black-friday/Globe.svg"/>
                </div>
                <p className="text-gray-80">{textContent.PlatformSection.web}</p>
            </div>
            <div className="flex flex-col items-center space-y-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-100">
                <img src="/images/special-offer/black-friday/iOS.svg" width={26.5} height={32} alt="iOS image" className="filter invert" />
                </div>
                <p className="text-gray-80">{textContent.PlatformSection.iOS}</p>
            </div>
            <div className="flex flex-col items-center space-y-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-100">
                <img src="/images/special-offer/black-friday/Android.svg" width={26.5} height={32} alt="Android image" className="filter invert" />
                </div>
                <p className="text-gray-80">{textContent.PlatformSection.android}</p>
            </div>
            <div className="flex flex-col items-center space-y-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-100">
                <img src="/images/special-offer/black-friday/MacOs.svg" width={32} height={32} alt="MacOs image" className="filter invert" />
                </div>
                <p className="text-gray-80">{textContent.PlatformSection.mac}</p>
            </div>
            <div className="flex flex-col items-center space-y-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-100">
                <img src="/images/special-offer/black-friday/Windows.svg" width={26.5} height={32} alt="Windows image" className="filter invert" />
                </div>
                <p className="text-gray-80">{textContent.PlatformSection.windows}</p>
            </div>
            <div className="flex flex-col items-center space-y-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-100">
                <img src="/images/special-offer/black-friday/Linux.svg" width={26.5} height={32} alt="Linux image" className="filter invert" />
                </div>
                <p className="text-gray-80">{textContent.PlatformSection.linux}</p>
            </div>
        </div>
      </div>

    </section>
  );
};
export default PlatformSection;
