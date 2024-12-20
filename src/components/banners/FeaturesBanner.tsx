import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { CheckCircle, Snowflake, X } from '@phosphor-icons/react';

const HIDE_BANNER_DATE = new Date('2024-01-07');
const TODAY_DATE = new Date();

const shouldHideBannerAutomatically = TODAY_DATE > HIDE_BANNER_DATE;

const FeaturesBanner = () => {
  const router = useRouter();
  const lang = router.locale;

  const [showBanner, setShowBanner] = useState<boolean>(false);
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
        setShowBanner(true);
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
      <div
        className={
          ' fixed left-1/2 top-1/2 flex h-max -translate-x-[50%] -translate-y-[50%] flex-col overflow-hidden rounded-2xl  bg-white px-10'
        }
      >
        <button
          id="close-banner"
          aria-label="close-banner"
          className="absolute right-0 m-7 flex rounded-md  hover:bg-gray-1/10"
          onClick={handleClose}
        >
          <X size={32} />
        </button>
        <div className="flex max-w-[800px] flex-col items-center justify-between py-16 md:flex-row md:pb-20 lg:w-screen">
          <div className="flex h-max w-full flex-col items-center justify-center space-y-3 text-center lg:items-start lg:justify-between lg:text-start">
            <div className="flex rounded-lg border-2 border-pink bg-red-dark px-3 py-1.5">
              <p className="text-2xl font-bold text-white">{textContent.featuresBanner.label}</p>
            </div>
            <p className="w-full max-w-[400px] text-5xl font-bold leading-tight text-gray-80">
              {textContent.featuresBanner.title}
            </p>

            <div className="flex flex-col items-center space-y-3 lg:items-start">
              <button
                onClick={handleOnClick}
                className="flex w-max items-center rounded-lg bg-gray-5 px-5 py-3 text-lg font-medium text-gray-80"
              >
                {textContent.featuresBanner.cta}
              </button>
              <div className="flex flex-row items-center space-x-3 pt-2 ">
                <CheckCircle size={24} className="text-gray-80" />
                <p className="whitespace-nowrap font-medium text-gray-80 lg:text-lg">
                  {textContent.featuresBanner.guarantee}
                </p>
              </div>
              <p className="text-sm font-medium text-gray-80">{textContent.featuresBanner.lastCta}</p>
            </div>
          </div>
          <div className="hidden w-full items-center lg:flex">
            <div className="flex flex-col">
              <div className="flex flex-col space-y-8">
                {textContent.featuresBanner.features.map((card, index) => {
                  if (index === textContent.featuresBanner.features.length - 2) {
                    return (
                      <div className="flex flex-row space-x-1 font-bold text-red" key={index}>
                        <div className="flex">
                          <Snowflake size={32} className="mr-4 text-red" />
                          <p className="text-lg font-semibold text-gray-80">{card}</p>
                        </div>
                        <div className="flex flex-row">
                          <p className="text-lg font-semibold text-red">
                            {textContent.featuresBanner.features[index + 1]}
                          </p>
                        </div>
                      </div>
                    );
                  }

                  if (index === textContent.featuresBanner.features.length - 1) {
                    return null;
                  }
                  return (
                    <div
                      className={`flex flex-row space-x-4 ${
                        index === textContent.featuresBanner.features.length - 1 ? 'font-bold text-red' : ''
                      }`}
                      key={index}
                    >
                      <Snowflake size={32} className="text-red" />
                      <p className="text-lg font-semibold text-gray-80">{card}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div
          className={`fixed bottom-0 left-0 right-0 mt-8 flex w-full items-center justify-center bg-primary px-1 
          py-1 text-center text-white lg:mt-0 lg:py-4`}
        >
          🎄{textContent.featuresBanner.subtitle}
        </div>
      </div>
    </div>
  );
};

export default FeaturesBanner;
