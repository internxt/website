import { useEffect, useState } from 'react';
import { X } from '@phosphor-icons/react';
import { useRouter } from 'next/router';
import Image from 'next/image';

const SHOW_SQUARE_BANNER_LS = 'showBottomBanner';

const BottomBanner = () => {
  const [hidePopup, setHidePopup] = useState(false);
  const router = useRouter();
  const lang = router.locale;

  useEffect(() => {
    const getSquareBannerLS = sessionStorage.getItem(SHOW_SQUARE_BANNER_LS);
    if (getSquareBannerLS) setHidePopup(true);
  }, []);

  function handleClose() {
    setHidePopup(true);
    sessionStorage.setItem(SHOW_SQUARE_BANNER_LS, 'false');
  }

  const title = () => {
    switch (lang) {
      case 'en':
        return 'Black Friday is here!';
      case 'es':
        return '¡Ya es Black Friday!';
      case 'fr':
        return 'Black Friday arrivé!';
      case 'ru':
        return 'Черная пятница наступила!';
      default:
        return 'Black Friday is here!';
    }
  };

  const ctaText = () => {
    switch (lang) {
      case 'en':
        return 'Get the deal!';
      case 'es':
        return '¡Obtén la oferta!';
      case 'fr':
        return "Obtenez l'offre";
      case 'ru':
        return 'Получить скидку!';
      default:
        return 'Get the deal!';
    }
  };

  return (
    <section
      className={`fixed bottom-10 hidden lg:${hidePopup ? 'hidden' : 'flex'} mx-auto overflow-hidden px-5 lg:px-0`}
    >
      <div
        className="flex h-[100px] w-[898px] flex-col items-center justify-center rounded-lg"
        style={{ background: 'radial-gradient(50% 50% at 50% 50%, #0058DB 0%, #18181B 100%)' }}
      >
        <div className="flex items-end justify-end">
          <button onClick={handleClose} className="absolute top-3 right-3 z-50 flex h-auto pb-2">
            <X className=" text-white" size={24} />
          </button>
        </div>
        <div className="z-50 flex flex-row items-center justify-center">
          <div className="relative flex flex-row items-center justify-center space-x-5 text-center text-white">
            <p className="text-3xl font-bold">{title()}</p>
            <button
              className="flex w-max flex-row items-center justify-center space-x-4 rounded-lg bg-primary py-2.5 px-5 text-lg font-medium text-white transition duration-100 focus:outline-none focus-visible:bg-primary-dark active:bg-primary-dark sm:text-lg"
              onClick={() => {
                router.push('/black-friday#priceTable');
              }}
            >
              {ctaText()}
            </button>
          </div>
        </div>
      </div>
      <div className="absolute left-5 top-0 hidden animate-pulse flex-row lg:flex">
        <Image
          src="/images/banners/discount-left.png"
          width={178.5}
          height={100}
          alt="Internxt Black Friday Offer"
          draggable={false}
        />
      </div>
      <div className="absolute right-6 top-0 hidden h-full animate-pulse flex-row lg:flex">
        <Image
          src="/images/banners/discount-right.png"
          width={178.5}
          height={100}
          alt="Internxt Black Friday Offer"
          draggable={false}
        />
      </div>
    </section>
  );
};

export default BottomBanner;
