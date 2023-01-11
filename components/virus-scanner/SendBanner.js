import React, { useState, useEffect } from 'react';
import { X } from 'phosphor-react';
import Image from 'next/image';

const SendBanner = ({ textContent }) => {
  const [sendBannerVisible, setIsSendBannerVisible] = useState(false);
  const onClose = () => {
    setIsSendBannerVisible(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsSendBannerVisible(true);
    }, 15000);
  }, []);

  return (
    <div
      className={`${
        sendBannerVisible ? 'flex' : 'hidden'
      }  fixed top-0 left-0 right-0 bottom-0 z-50 h-screen bg-black bg-opacity-50 px-10 lg:px-0`}
    >
      <div
        className={`${sendBannerVisible ? 'flex' : 'hidden'} absolute top-1/2 left-1/2 flex
        w-auto max-w-[800px] -translate-y-1/2 -translate-x-1/2 transform flex-col rounded-2xl text-neutral-900`}
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
        <div className="flex flex-col space-x-20 p-14 lg:flex-row lg:p-20">
          <div className="flex w-full flex-col items-center justify-center text-center lg:items-start lg:text-left">
            <div className="flex max-w-[323px] flex-col items-start">
              <p className="text-5xl font-bold text-white ">{textContent.title}</p>
              <p className=" pt-4 text-3xl font-medium text-white lg:w-[323px]">{textContent.description}</p>
            </div>
            <div className="flex pt-6">
              <button
                className="relative flex h-14 w-48 flex-row items-center justify-center space-x-4 rounded-full bg-primary px-8 text-base text-white transition duration-100 focus:outline-none focus-visible:bg-primary-dark active:bg-primary-dark sm:text-lg"
                onClick={() => {
                  window.open(
                    'https://internxt.com/?utm_source=website&utm_medium=banner&utm_campaign=internxt',
                    '_blank',
                  );
                }}
              >
                {textContent.cta}
              </button>
            </div>
          </div>
          <div className="ml-80 hidden items-center lg:flex">
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
    </div>
  );
};

export default SendBanner;
