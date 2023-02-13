import React, { useState, useEffect } from 'react';
import { X } from 'phosphor-react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import ShowSnackbar from '../ShowSnackbar';
import { toast } from 'react-toastify';
import { checkout } from '../../lib/auth';
import { getPlanId } from '../../pages/api/stripe/stripeProducts';
import Navbar from '../layout/Navbar';
import { isMobile } from 'react-device-detect';

const VALENTINES_COUPON_ID = 'G8Ti4z1k';

const ValentinesBanner = () => {
  const [sendBannerVisible, setIsSendBannerVisible] = useState(false);
  const { locale } = useRouter();
  const textContent = require(`../../assets/lang/${locale}/banners.json`);
  const navbar = require(`../../assets/lang/${locale}/navbar.json`);
  const subtitle = textContent.valentinesBanner.subtitle.split('VDAY')[0];
  const VDAY = textContent.valentinesBanner.subtitle.substr(textContent.valentinesBanner.subtitle.indexOf('VDAY'), 4);
  const stripeObject = { product: 'TB212' };

  const openToast = () => toast.success(textContent.valentinesBanner.toast);

  const onClose = () => {
    setIsSendBannerVisible(false);
  };

  const copyCoupon = () => {
    navigator.clipboard.writeText(VDAY);
    openToast();
  };

  useEffect(() => {
    setTimeout(() => {
      setIsSendBannerVisible(true);
    }, 5000);
  }, []);

  return (
    <div
      className={`${
        sendBannerVisible ? 'flex' : 'hidden'
      }  fixed top-0 left-0 right-0 bottom-0 z-50 h-screen bg-black bg-opacity-50 px-10 lg:px-0`}
    >
      <Navbar hide={true} cta={['default']} textContent={navbar} coupon={VALENTINES_COUPON_ID} />
      <div
        className={`${sendBannerVisible ? 'flex' : 'hidden'} absolute top-1/2 left-1/2 flex
        w-auto max-w-[800px] -translate-y-1/2 -translate-x-1/2 transform flex-col rounded-2xl text-neutral-900`}
        style={{
          backgroundImage: `url('/images/privacy/neonBlur.webp')`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <button className="absolute right-0 m-7 flex w-auto text-white" onClick={onClose}>
          <X size={32} />
        </button>
        <div className="flex flex-col p-14 lg:flex-row lg:py-16">
          <div className="flex w-full flex-col  items-center justify-center text-center lg:items-start lg:text-left">
            <div className="flex max-w-[323px] flex-col items-start">
              <p className="text-5xl font-bold text-white ">{textContent.valentinesBanner.title}</p>
              <p className=" pt-4 text-2xl font-medium text-white lg:w-[323px]">
                {subtitle}
                <span className="cursor-pointer text-primary" onClick={copyCoupon}>
                  {VDAY}
                </span>
              </p>
            </div>
            <div className="flex pt-6">
              <button
                className="relative flex h-14 w-48 flex-row items-center justify-center space-x-4 rounded-full bg-primary px-8 text-base text-white transition duration-100 focus:outline-none focus-visible:bg-primary-dark active:bg-primary-dark sm:text-lg"
                onClick={() => {
                  if (isMobile) {
                    window.location.replace(
                      `https://drive.internxt.com/new?planId=${getPlanId(
                        stripeObject,
                      )}&couponCode=${VALENTINES_COUPON_ID}&mode=subscription`,
                    );
                  } else {
                    checkout(getPlanId(stripeObject));
                  }
                }}
              >
                {textContent.valentinesBanner.cta}
              </button>
            </div>
          </div>
          <div className="hidden pl-[81px] lg:flex">
            <div className="flex w-[340px]">
              <Image
                src="/images/banners/hearts.png"
                alt="hero"
                quality={100}
                width={382}
                height={308}
                layout="intrinsic"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
      <ShowSnackbar />
    </div>
  );
};

export default ValentinesBanner;
