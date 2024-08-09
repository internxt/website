import { CheckCircle, TreePalm, X } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const KeyHoleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="rgb(0,102,255)" viewBox="0 0 256 256">
    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm29.52,146.39a4,4,0,0,1-3.66,5.61H102.14a4,4,0,0,1-3.66-5.61L112,139.72a32,32,0,1,1,32,0Z"></path>
  </svg>
);

const HIDE_BANNER_DATE = new Date('2024-08-19');
const TODAY_DATE = new Date();

const shouldHideBannerAutomatically = TODAY_DATE > HIDE_BANNER_DATE;

const isWeekend = () => {
  const today = new Date().getDay();
  return today === 5 || today === 6 || today === 0;
};

const FeaturesBanner = () => {
  const router = useRouter();
  const lang = router.locale;

  const [showBanner, setShowBanner] = useState(true);
  const textContent = require(`@/assets/lang/${lang}/banners.json`);

  const handleClose = () => {
    sessionStorage.setItem('hideBanner', 'true');
    setShowBanner(false);
  };

  useEffect(() => {
    if (shouldHideBannerAutomatically) {
      setShowBanner(false);
      return;
    }

    const getSquareBannerSS = sessionStorage.getItem('hideBanner');
    if (getSquareBannerSS) {
      setShowBanner(false);
    } else {
      setTimeout(() => {
        setShowBanner(isWeekend());
      }, 10000);
    }
  }, []);

  const handleOnClick = () => {
    router.push('/pricing');
    handleClose();
  };

  return (
    <div
      className={`${
        showBanner ? 'flex' : 'hidden'
      } fixed bottom-0 left-0 right-0 top-0 z-50 h-screen bg-black bg-opacity-50 px-10 lg:px-0`}
    >
      <div className="fixed left-1/2 top-1/2 flex h-auto -translate-x-[50%] -translate-y-[50%] flex-col overflow-hidden rounded-2xl border-4 border-primary/7 bg-white bg-cover px-10">
        <button className="absolute right-0 m-7 flex rounded-md  hover:bg-gray-1/10" onClick={handleClose}>
          <X size={32} />
        </button>
        <div className="flex w-max max-w-[900px] flex-col space-x-10 py-14 lg:flex-row">
          <div className="flex w-full flex-col  items-center justify-center space-y-3 text-center lg:items-start lg:justify-between lg:text-start">
            <div className="flex rounded-lg border-4 border-primary/7 px-3 py-1.5">
              <p className="text-2xl font-bold text-primary">{textContent.featuresBanner.label}</p>
            </div>
            <p className="w-full max-w-[400px] text-5xl font-bold leading-tight ">{textContent.featuresBanner.title}</p>
            <p className="w-full max-w-[328px] text-2xl font-bold leading-tight ">
              {textContent.featuresBanner.subtitle}
            </p>
            <div className="flex flex-col items-center space-y-3 lg:items-start">
              <button
                onClick={handleOnClick}
                className="flex w-max items-center rounded-lg bg-primary px-5 py-3 text-lg font-medium text-white  hover:bg-primary-dark"
              >
                {textContent.featuresBanner.cta}
              </button>
              <div className="flex flex-row items-center space-x-3 pt-2 ">
                <CheckCircle size={24} className="" />
                <p className="whitespace-nowrap font-medium lg:text-lg">{textContent.featuresBanner.guarantee}</p>
              </div>
              <p className="text-sm font-medium text-gray-50">{textContent.featuresBanner.lastCta}</p>
            </div>
          </div>
          <div className="hidden w-full items-center lg:flex">
            <div className="flex flex-col">
              <div className="flex flex-col space-y-8">
                {textContent.featuresBanner.features.map((card) => (
                  <div className="flex flex-row space-x-4" key={card}>
                    <TreePalm size={32} className="text-primary" weight="fill" />
                    <p className="text-lg font-semibold ">{card}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesBanner;
