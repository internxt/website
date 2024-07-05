import { useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { GlobalDialog, useGlobalDialog } from '@/contexts/GlobalUIManager';
import { getImage } from '@/lib/getImage';
import { event } from '@/lib/gtag';
import { CheckCircle, X } from '@phosphor-icons/react';

const CLOSE_TAB_BANNER_NAME = 'close_tab_banner_date';
const ONE_MONTH_IN_MS = 30 * 24 * 60 * 60 * 1000;

export const BeforeCloseTabBanner = () => {
  const router = useRouter();
  const lang = router.locale;
  const todayDate = new Date();
  const { openDialog, closeDialog, dialogIsOpen } = useGlobalDialog();

  const showBanner = dialogIsOpen(GlobalDialog.BeforeYouGoBanner);

  const textContent = require(`../../assets/lang/${lang}/banners.json`);

  useEffect(() => {
    const handleMouseLeave = (event) => {
      const closeTabBannerInLocalStorage = localStorage.getItem(CLOSE_TAB_BANNER_NAME);
      const todayDate = new Date().getTime();

      if (closeTabBannerInLocalStorage) {
        const lastCloseDate = new Date(closeTabBannerInLocalStorage).getTime();

        if (todayDate - lastCloseDate > ONE_MONTH_IN_MS) {
          localStorage.removeItem(CLOSE_TAB_BANNER_NAME);
          openDialog(GlobalDialog.BeforeYouGoBanner);
        } else {
          closeDialog(GlobalDialog.BeforeYouGoBanner);
        }
      } else if (event.clientY <= 0) {
        openDialog(GlobalDialog.BeforeYouGoBanner);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const handleCloseBanner = () => {
    event({
      action: 'redirect_button',
      category: 'before-you-go',
      label: 'User accepts the promo',
      value: '',
    });
    localStorage.setItem(CLOSE_TAB_BANNER_NAME, todayDate.toString());
    closeDialog(GlobalDialog.BeforeYouGoBanner);
  };

  const handleOnClick = () => {
    router.push('/specialoffer/freeuser');
    handleCloseBanner();
  };

  return (
    <div
      className={`${showBanner ? 'flex' : 'hidden'} 
         fixed top-0 left-0 right-0 bottom-0 z-50 h-screen bg-black bg-opacity-50 px-10 lg:px-0`}
    >
      {/* Banner */}
      <div
        className={`fixed top-1/2 left-1/2 flex h-auto w-max max-w-4xl -translate-y-[50%] -translate-x-[50%] flex-col overflow-hidden rounded-2xl bg-cover bg-no-repeat px-5  md:w-full md:px-0 md:pl-10`}
        style={{
          backgroundImage: `url(${getImage('/images/banners/before-go-banner-bg.webp')})`,
        }}
      >
        <button
          className="absolute right-0 m-7 flex rounded-md text-white hover:bg-gray-1/10"
          onClick={handleCloseBanner}
        >
          <X size={32} className="text-gray-100" />
        </button>
        <div className="flex w-full flex-col space-x-10 md:flex-row">
          <div className="flex w-full flex-col  items-center justify-center space-y-3 py-14 text-center md:items-start md:justify-between md:text-start">
            <p className="w-full max-w-[310px] text-4xl font-bold leading-tight text-gray-100">
              {textContent.BeforeCloseBanner.title.normal1}{' '}
              <span className="text-primary">{textContent.BeforeCloseBanner.title.blue}</span>
              {textContent.BeforeCloseBanner.title.normal2}
            </p>

            <p className="w-full max-w-[310px] text-2xl font-semibold leading-tight text-gray-100">
              {textContent.BeforeCloseBanner.subtitle}
            </p>

            <div className="flex flex-col items-center space-y-3 lg:items-start">
              <button
                onClick={handleOnClick}
                className="flex w-max items-center rounded-lg bg-primary px-5 py-3 text-lg font-medium text-white hover:bg-primary-dark"
              >
                {textContent.BeforeCloseBanner.cta}
              </button>
              <div className="flex flex-row items-center space-x-3 pt-2 text-gray-100">
                <CheckCircle size={24} className="text-primary" />
                <p className="whitespace-nowrap font-medium lg:text-lg">{textContent.BeforeCloseBanner.guarantee}</p>
              </div>
            </div>
          </div>
          <div className="hidden w-full md:flex">
            <Image
              src={getImage('/images/freeuser/Internxt_storage.webp')}
              loading="lazy"
              width={451}
              height={457}
              alt="Internxt Drive"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
