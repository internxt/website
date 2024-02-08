import { CheckCircle, X } from '@phosphor-icons/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const SHOW_LIFETIME_BANNER = 'showLifetimeBanner';

const LifetimeBanner = (): JSX.Element => {
  const router = useRouter();
  const language = router.locale;
  const [showBanner, setShowBanner] = useState(false);

  const textContent = require(`@/assets/lang/${language}/banners.json`);

  useEffect(() => {
    const getSquareBannerSS = sessionStorage.getItem(SHOW_LIFETIME_BANNER);
    if (getSquareBannerSS) setShowBanner(false);
    else {
      setTimeout(() => {
        setShowBanner(true);
      }, 3000);
    }
  }, []);

  const onClose = () => {
    setShowBanner(false);
    sessionStorage.setItem(SHOW_LIFETIME_BANNER, 'false');
  };

  return (
    <div
      className={`${showBanner ? 'flex' : 'hidden'} 
         fixed top-0 left-0 right-0 bottom-0 z-50 h-screen bg-black bg-opacity-50 px-10 lg:px-0`}
    >
      <div
        className={`absolute left-1/2 top-1/2 flex h-auto max-w-4xl -translate-x-1/2 -translate-y-1/2
        flex-col overflow-hidden rounded-2xl bg-primary-dark text-neutral-900`}
      >
        <button className="absolute right-0 z-50 m-5 flex w-auto text-white" onClick={onClose}>
          <X size={32} />
        </button>
        <div className="flex w-screen max-w-[800px] flex-col py-10 px-5 lg:pl-10">
          <div className="absolute top-20 right-0 lg:top-0">
            <Image
              src={'/images/banners/lifetime_big.webp'}
              priority
              alt="Internxt Lifetime Offer"
              width={508}
              height={260}
            />
          </div>
          <div className="z-50 flex w-full flex-col items-center space-y-8 text-center lg:items-start lg:text-left">
            <div className="flex flex-col space-y-4">
              <p className="text-3xl font-semibold text-white lg:pr-20">{textContent.lifetimeBanner.label}</p>
              <p className="max-w-[500px] text-5xl font-bold text-white">{textContent.lifetimeBanner.title}</p>
            </div>
            <div className="flex flex-col items-center space-y-6 lg:items-start">
              <button
                className="relative flex w-max flex-row items-center space-x-4 rounded-lg bg-white px-7 py-3 text-base font-medium text-primary transition duration-100 focus:outline-none focus-visible:bg-gray-1 active:bg-gray-1 sm:text-lg"
                onClick={() => {
                  onClose();
                  router.push('/lifetime');
                }}
              >
                {textContent.lifetimeBanner.cta}
              </button>
              <div className="flex flex-row items-center space-x-2">
                <CheckCircle size={24} className="text-white" />
                <p className="text-lg font-medium text-white">{textContent.lifetimeBanner.guarantee}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LifetimeBanner;
