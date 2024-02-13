import { CheckCircle, Heart, X } from '@phosphor-icons/react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const FeaturesBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const router = useRouter();
  const lang = router.locale;
  const textContent = require(`@/assets/lang/${lang}/banners.json`);

  const handleClose = () => {
    sessionStorage.setItem('hideBanner', 'true');
    setShowBanner(false);
  };

  useEffect(() => {
    const getSquareBannerSS = sessionStorage.getItem('hideBanner');
    if (getSquareBannerSS) setShowBanner(false);
    else {
      setTimeout(() => {
        setShowBanner(true);
      }, 10000);
    }
  }, []);

  const handleOnClick = () => {
    router.push('/pricing');
  };

  return (
    //Background
    <div
      className={`${showBanner ? 'flex' : 'hidden'} 
         fixed top-0 left-0 right-0 bottom-0 z-50 h-screen bg-black bg-opacity-50 px-10 lg:px-0`}
    >
      {/* Banner */}
      <div
        className={`fixed top-1/2 left-1/2 flex h-auto -translate-y-[50%] -translate-x-[50%] flex-col overflow-hidden rounded-2xl border-4 border-primary/7 bg-white`}
      >
        <button className="absolute  right-0 m-7 flex text-black" onClick={handleClose}>
          <X size={32} />
        </button>
        <div className="flex w-auto flex-col p-14 lg:flex-row lg:p-20">
          <div className="flex flex-col items-center justify-center space-y-4 text-center lg:items-start lg:justify-between lg:pr-20 lg:text-start">
            <div className="flex w-max rounded-2xl bg-red-dark py-2 px-4 ring-4 ring-red">
              <p className="text-2xl font-bold text-white">{textContent.valentinesBanner.label}</p>
            </div>
            <p className="pt-5 text-5xl font-bold text-gray-100">{textContent.valentinesBanner.title}</p>

            <div className="flex flex-col items-center space-y-3 lg:items-start">
              <button
                onClick={handleOnClick}
                className="flex w-max items-center rounded-lg bg-gray-5 px-5 py-3 text-lg font-medium text-gray-80 hover:bg-gray-10"
              >
                {textContent.valentinesBanner.cta}
              </button>
              <div className="flex flex-row items-center space-x-3 pt-2 text-gray-80">
                <CheckCircle size={24} className="" />
                <p className="whitespace-nowrap font-medium lg:text-lg">{textContent.valentinesBanner.guarantee}</p>
              </div>

              <p className="text-sm font-medium text-gray-80">{textContent.valentinesBanner.lastCta}</p>
            </div>
          </div>
          <div className="hidden items-center lg:flex">
            <div className="flex flex-col">
              <div className="flex flex-col space-y-8">
                {textContent.valentinesBanner.features.map((card) => (
                  <div className="flex flex-row" key={card}>
                    <Heart size={32} weight="fill" className="mr-4 text-red-dark" />
                    <p className="whitespace-nowrap text-xl font-semibold text-gray-80">{card}</p>
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
