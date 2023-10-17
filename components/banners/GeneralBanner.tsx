import React, { useState, useEffect } from 'react';
import { X } from '@phosphor-icons/react';
import Image from "next/legacy/image";
import { checkout } from '../../lib/auth';

const GeneralBanner = ({ textContent }) => {
  const [bannerVisible, setIsBannerVisible] = useState(false);
  const onClose = () => {
    sessionStorage.setItem('generalBannerVisible', 'false');
    setIsBannerVisible(false);
  };

  useEffect(() => {
    const isBannerVisible = sessionStorage.getItem('generalBannerVisible');
    if (!isBannerVisible) {
      setTimeout(() => {
        setIsBannerVisible(true);
      }, 10000);
    }
  }, []);

  return (
    <section
      className={`${
        bannerVisible ? 'flex' : 'hidden'
      }  fixed top-0 left-0 right-0 bottom-0 z-50 h-screen bg-black bg-opacity-50 px-5 lg:px-0`}
    >
      <div
        className={`${bannerVisible ? 'flex' : 'hidden'} absolute top-1/2 left-1/2
        flex w-full max-w-[800px] -translate-y-1/2 -translate-x-1/2 transform flex-col rounded-2xl text-neutral-900`}
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
        <div className="flex  flex-col items-center justify-center px-24 pt-20 pb-16">
          <div className="flex flex-col items-center justify-center space-y-10 text-center">
            <div className="flex w-full max-w-[610px] flex-col items-center">
              <p className="text-5xl font-bold text-white">{textContent.title}</p>
              <p className=" pt-4 text-3xl font-medium text-white">{textContent.description}</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-6">
              <div
                className="relative flex cursor-pointer flex-col items-center justify-center rounded-lg bg-primary py-3 px-5 text-base font-medium text-white focus:outline-none focus-visible:bg-primary-dark active:bg-primary-dark sm:text-lg"
                onClick={() => {
                  checkout({
                    planId: 'plan_FkTXxEg3GZW0pg',
                    couponCode: 'lxevN374',
                  });
                }}
              >
                {textContent.cta}
              </div>
              <div
                className="relative flex w-full cursor-pointer flex-col items-center justify-center rounded-lg bg-white py-3 px-5 text-base font-medium text-primary transition duration-100 focus:outline-none active:bg-white active:text-black sm:text-lg"
                onClick={() => {
                  onClose();
                }}
              >
                {textContent.ctaCancel}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeneralBanner;
