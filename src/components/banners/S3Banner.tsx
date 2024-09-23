import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { CheckCircle, X } from '@phosphor-icons/react';
import Image from 'next/image';
import { getImage } from '@/lib/getImage';
import { GlobalDialog, useGlobalDialog } from '@/contexts/GlobalUIManager';

const HIDE_BANNER_DATE = new Date('2024-09-30');
const TODAY_DATE = new Date();

const shouldHideBannerAutomatically = TODAY_DATE > HIDE_BANNER_DATE;

const S3Banner = () => {
  const router = useRouter();
  const lang = router.locale;
  const { dialogIsOpen } = useGlobalDialog();
  const shouldShowBanner = dialogIsOpen(GlobalDialog.S3Banner);

  const [showBanner, setShowBanner] = useState<boolean>(false);
  const bannerText = require(`@/assets/lang/${lang}/banners.json`);
  const textContent = bannerText.s3StorageBanner;

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
    } else if (shouldShowBanner) {
      setTimeout(() => {
        setShowBanner(true);
      }, 10000);
    }
  }, []);

  const handleOnClick = () => {
    router.push('/cloud-object-storage');
    handleClose();
  };

  return (
    <div
      className={`${
        showBanner ? 'flex' : 'hidden'
      } fixed bottom-0 left-0 right-0 top-0 z-50 h-screen bg-black bg-opacity-50 px-10 lg:px-0`}
    >
      <div
        style={{
          background: 'radial-gradient(50% 50% at 50% 50%, #0058DB 0%, #161616 100%)',
        }}
        className="fixed left-1/2 top-1/2 flex h-auto -translate-x-[50%] -translate-y-[50%] flex-col overflow-hidden rounded-[32px] border-4 border-primary/7 bg-cover px-10"
      >
        <button
          id="close-banner"
          aria-label="close-banner"
          className="absolute right-0 m-7 flex rounded-md text-white  hover:bg-gray-1/10"
          onClick={handleClose}
        >
          <X size={32} />
        </button>
        <div className="flex w-max max-w-[900px] flex-col space-x-10 py-8 lg:flex-row">
          <div className="flex w-full flex-col  items-center justify-center gap-6 text-center lg:items-start lg:justify-between lg:text-start">
            <div className="flex flex-col gap-3">
              <p className="text-lg font-semibold text-white">{textContent.label}</p>
              <p className="w-full max-w-[400px] text-5xl font-bold leading-tight text-white">{textContent.title}</p>
            </div>
            <div className="flex flex-col gap-2">
              {textContent.feat.map((feature) => (
                <div key={feature} className="flex flex-row gap-4">
                  <CheckCircle className="text-primary" weight="fill" size={32} />
                  <p className="text-lg font-semibold text-white">{feature}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col items-center space-y-3 lg:items-start">
              <button
                onClick={handleOnClick}
                className="flex w-max items-center rounded-lg bg-primary px-5 py-3 text-lg font-medium text-white  hover:bg-primary-dark"
              >
                {textContent.cta}
              </button>
              <p className="text-sm font-medium text-white">{textContent.offerEnds}</p>
            </div>
          </div>
          <div className="hidden w-full items-center lg:flex">
            <Image
              src={getImage('/images/cloud-object-storage/s3_internxt.webp')}
              alt="cloud object storage"
              width={350}
              height={315}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default S3Banner;
