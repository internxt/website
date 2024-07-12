import { CheckCircle, X } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getImage } from '@/lib/getImage';

const KeyHoleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="rgb(0,102,255)" viewBox="0 0 256 256">
    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm29.52,146.39a4,4,0,0,1-3.66,5.61H102.14a4,4,0,0,1-3.66-5.61L112,139.72a32,32,0,1,1,32,0Z"></path>
  </svg>
);

const HIDE_BANNER_DATE = new Date('2024-07-15');
const TODAY_DATE = new Date();

const FeaturesBanner = () => {
  const shouldHideBannerAutomatically = TODAY_DATE > HIDE_BANNER_DATE;

  const [showBanner, setShowBanner] = useState(false);
  const router = useRouter();
  const textContent = require(`@/assets/lang/fr/banners.json`);

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
    if (getSquareBannerSS) setShowBanner(false);
    else {
      setTimeout(() => {
        setShowBanner(true);
      }, 10000);
    }
  }, []);

  const handleOnClick = () => {
    router.push('/lifetime/celebration/france');
    handleClose();
  };

  return (
    //Background
    <div
      className={`${showBanner ? 'flex' : 'hidden'} 
         fixed top-0 left-0 right-0 bottom-0 z-50 h-screen bg-black bg-opacity-50 px-10 lg:px-0`}
    >
      {/* Banner */}
      <div
        className={`fixed top-1/2 left-1/2 flex h-auto -translate-y-[50%] -translate-x-[50%] flex-col overflow-hidden rounded-2xl bg-cover bg-no-repeat  px-10`}
        style={{
          backgroundImage: `url(${getImage('/images/lifetime/celebration/france/france-bg.webp')})`,
        }}
      >
        <button className="absolute right-0 m-7 flex rounded-md text-white hover:bg-gray-1/10" onClick={handleClose}>
          <X size={32} />
        </button>
        <div className="flex w-screen max-w-[900px] flex-col space-x-10 py-14 lg:flex-row">
          <div className="flex w-full flex-col  items-center justify-center space-y-3 text-center lg:items-start lg:justify-between lg:text-start">
            <div className="flex rounded-lg py-1.5 px-3 ring-2 ring-white">
              <p className="text-2xl font-bold text-white">{textContent.featuresBanner.label}</p>
            </div>
            <p className="w-full max-w-[310px] text-4xl font-bold leading-tight text-white">
              {textContent.featuresBanner.title}
            </p>

            <div className="flex flex-col items-center space-y-3 lg:items-start">
              <button
                onClick={handleOnClick}
                className="flex w-max items-center rounded-lg bg-primary px-5 py-3 text-lg font-medium text-white hover:bg-primary-dark"
              >
                {textContent.featuresBanner.cta}
              </button>
              <div className="flex flex-row items-center space-x-3 pt-2 text-white">
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
                    <CheckCircle size={32} className="text-white" weight="fill" />
                    <p className="text-lg font-semibold text-white">{card}</p>
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
