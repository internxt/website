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
        return '50% OFF all lifetime plans!';
      case 'es':
        return 'DESCUENTO 50% en planes lifetime!';
      case 'fr':
        return '50% de reduction sur plans lifetime!';
      case 'ru':
        return 'Скидка 50% на пожизненные планы!';
      default:
        return '50% OFF all lifetime plans!';
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
      className={`fixed bottom-10 z-50 hidden lg:${hidePopup ? 'hidden' : 'flex'} mx-auto overflow-hidden px-5 lg:px-0`}
    >
      <div
        className="relative flex h-[100px] w-[898px] flex-col items-center justify-center rounded-lg bg-contain bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/images/banners/pop_up_banner_bf_2023_798x100_bg_2x.webp")' }}
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
                router.push('/lifetime#payment');
              }}
            >
              {ctaText()}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BottomBanner;
