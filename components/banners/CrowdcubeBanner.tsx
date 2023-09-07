import { X } from '@phosphor-icons/react';
import { useState } from 'react';

const CrowdcubeBanner = () => {
  const [bannerVisible, setBannerVisible] = useState(true);

  function onClose() {
    setBannerVisible(false);
  }

  return (
    <section
      className={`${
        bannerVisible ? 'flex' : 'hidden'
      }  fixed top-0 left-0 right-0 bottom-0 z-50 h-screen bg-black bg-opacity-50 px-5 lg:px-0`}
    >
      <div
        className={`${bannerVisible ? 'flex' : 'hidden'} absolute top-1/2 left-1/2 flex w-full max-w-[320px]
        -translate-y-1/2 -translate-x-1/2 transform flex-col rounded-2xl bg-primary-dark md:max-w-[800px]`}
      >
        <button className="absolute right-0 m-7 flex w-auto text-white" onClick={onClose}>
          <X size={32} />
        </button>
        <div className="flex flex-row justify-between">
          <div className="mx-12 flex w-full max-w-[394px] flex-col items-center justify-center space-y-9 pt-20 pb-16 text-center lg:items-start lg:justify-start lg:text-left">
            <img src="../../logos/internxt/white.svg" alt="Internxt" className="h-4 max-w-[120px]" />
            <div className="flex  flex-col space-y-6 text-white">
              <p className="text-5xl font-bold">Become a part of Internxt's future</p>
              <p className="text-2xl font-semibold">
                Don't just use it, own it. Let's shape a brighter future together!
              </p>
            </div>
            <button
              className="flex w-max items-center justify-center rounded-lg bg-white px-5 py-3 text-center font-medium text-primary"
              onClick={() => {
                window.open(`https://www.crowdcube.eu/early-access/internxt`, '_self');
                onClose();
              }}
            >
              Secure your stake
            </button>
          </div>
          <div className="hidden w-full max-w-[295px] flex-col items-center justify-center space-y-3 rounded-r-2xl bg-primary md:flex">
            <img src="../../logos/internxt/white.svg" alt="Internxt" className="h-[25px] max-w-[200px]" />
            <p className="text-5xl font-bold text-white">+</p>
            <img src="../../logos/investors/crowdcube.png" alt="Internxt" className="max-w-[208px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CrowdcubeBanner;
