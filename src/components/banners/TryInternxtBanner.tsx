import React, { useState } from 'react';
import { X } from '@phosphor-icons/react';
import Image from 'next/legacy/image';

const TryInternxtBanner = ({ textContent, url }) => {
  const [bannerVisible, setBannerVisible] = useState(false);
  const onClose = () => {
    setBannerVisible(false);
  };

  // useEffect(() => {

  return (
    <section
      className={`${
        bannerVisible ? 'flex' : 'hidden'
      }  fixed bottom-0 left-0 right-0 top-0 z-50 h-screen bg-black bg-opacity-50 px-10 lg:px-0`}
    >
      <div
        className={`${bannerVisible ? 'flex' : 'hidden'} absolute left-1/2 top-1/2
        flex w-full max-w-[800px] -translate-x-1/2 -translate-y-1/2 transform flex-col rounded-2xl text-neutral-900`}
        style={{
          backgroundImage: `url(/images/virus-scanner/banner-bg.png)`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <button className="absolute right-0 m-7 flex w-auto text-white" onClick={onClose}>
          <X size={32} />
        </button>
        <div className="flex flex-col items-center justify-between space-x-20 p-14 lg:flex-row lg:p-20">
          <div className="flex w-full flex-col items-center justify-center text-center lg:items-start lg:text-left">
            <div className="flex w-full max-w-[350px] flex-col items-start">
              <p className="text-5xl font-bold text-white ">{textContent.title}</p>
              <p className=" pt-4 text-3xl font-medium text-white lg:w-[350px]">{textContent.description}</p>
            </div>
            <div className="flex pt-6">
              <button
                className="relative flex flex-row items-center justify-center space-x-4 rounded-full bg-primary px-8 py-3 text-base text-white transition duration-100 focus:outline-none focus-visible:bg-primary-dark active:bg-primary-dark sm:text-lg"
                onClick={() => {
                  window.open(url, '_blank');
                }}
              >
                {textContent.cta}
              </button>
            </div>
          </div>
          <div className="hidden items-center lg:flex">
            <div className="flex w-[340px]">
              <Image
                src="/images/virus-scanner/ImageBanner.png"
                alt="hero"
                width={208}
                height={208}
                layout="intrinsic"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TryInternxtBanner;
