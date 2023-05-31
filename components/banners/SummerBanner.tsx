import React, { useState, useEffect } from 'react';
import { X } from '@phosphor-icons/react';
import { checkout } from '../../lib/auth';
import { useRouter } from 'next/router';

const SummerBanner = () => {
  const router = useRouter();
  const lang = router.locale;
  const [bannerVisible, setIsBannerVisible] = useState(true);
  const onClose = () => {
    sessionStorage.setItem('SummerBanner', 'false');
    setIsBannerVisible(false);
  };

  // useEffect(() => {
  //   const isBannerVisible = sessionStorage.getItem('SummerBanner');
  //   if (!isBannerVisible) {
  //     setTimeout(() => {
  //       setIsBannerVisible(true);
  //     }, 10000);
  //   }
  // }, []);

  return (
    <section
      className={`${
        bannerVisible ? 'flex' : 'hidden'
      }  fixed top-0 left-0 right-0 bottom-0 z-50 h-screen bg-black bg-opacity-50 px-5 lg:px-0`}
    >
      <div
        className={`${bannerVisible ? 'flex' : 'hidden'} absolute top-1/2 left-1/2 flex w-full
        max-w-[320px] -translate-y-1/2 -translate-x-1/2 transform flex-col rounded-2xl lg:max-w-[800px]`}
        style={{
          backgroundImage: `url(/images/banners/BannerInternal-SummerCampaign-800x450-EN.svg)`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <button className="absolute right-0 m-7 flex w-auto text-white" onClick={onClose}>
          <X size={32} />
        </button>
        <div
          className="flex  cursor-pointer flex-col items-center justify-center px-24 pt-20 pb-16"
          onClick={() => {
            window.open(
              `https://internxt.com/${
                lang === 'en' ? '' : lang
              }/pricing?utm_source=website&utm_medium=banner&utm_campaign=lifetimeapril`,
              '_blank',
            );
          }}
        >
          <div className="flex flex-col items-center justify-center space-y-9 text-center">
            <img src="../../logos/internxt/white.svg" alt="Internxt" className="max-w-[120px]" />
            <div className="flex flex-col items-center justify-center space-y-6">
              <div className="flex max-w-[443px] items-center justify-center rounded-xl bg-mint px-10 py-3 text-white">
                <p className="text-4xl font-semibold">SUMMER DEAL!</p>
              </div>
              <div className="flex flex-col items-center space-y-6 text-white">
                <p className="text-8xl font-bold">90% off</p>
                <p className="text-3xl font-bold">2TB PLAN FOR 1 YEAR</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SummerBanner;
