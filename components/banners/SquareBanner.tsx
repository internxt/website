import { useEffect, useState } from 'react';
import { X } from '@phosphor-icons/react';
import { useRouter } from 'next/router';
import Image from 'next/image';

const SHOW_SQUARE_BANNER_LS = 'showSquareBanner';

const SquareBanner = () => {
  const [hidePopup, setHidePopup] = useState(false);
  const router = useRouter();
  const lang = router.locale;

  useEffect(() => {
    const getSquareBannerLS = localStorage.getItem(SHOW_SQUARE_BANNER_LS);
    if (getSquareBannerLS) setHidePopup(true);
  }, []);

  function handleClose() {
    setHidePopup(true);
    localStorage.setItem(SHOW_SQUARE_BANNER_LS, 'false');
  }

  const title = () => {
    switch (lang) {
      case 'en':
        return 'Back Friday is here!';
      case 'es':
        return '¡El Black Friday está aquí!';
      case 'fr':
        return 'Le Black Friday arrivé!';
      default:
        return 'Black Friday is here!';
    }
  };

  const ctaText = () => {
    switch (lang) {
      case 'en':
        return 'Get the deal!';
      case 'es':
        return '¡Obtén el descuento!';
      case 'fr':
        return "Obtenez l'offre";
      default:
        return 'Get the deal!';
    }
  };

  return (
    <div
      className={`fixed bottom-8 left-8 z-50 hidden h-[350px] w-[350px] flex-col overflow-hidden rounded-2xl bg-contain py-8 px-8 lg:${
        hidePopup ? 'hidden' : 'flex'
      }`}
      style={{ background: 'radial-gradient(50% 50% at 50% 50%, #0058DB 0%, rgb(0,0,0) 100%)' }}
    >
      <div className="flex items-end justify-end">
        <button onClick={handleClose} className="absolute top-3 right-3 flex h-auto pb-2">
          <X className=" text-white" size={24} />
        </button>
      </div>
      <div className="relative flex flex-col items-center justify-center space-y-5 text-center text-white">
        <p className="text-3xl font-bold">{title()}</p>
        <div className="flex flex-col">
          <Image src="/images/black-friday/internxt_black_friday_offer.png" width={189} height={170} />
        </div>
        <button
          className="flex w-max flex-row items-center justify-center space-x-4 rounded-lg bg-primary py-2.5 px-5 text-base font-medium text-white transition duration-100 focus:outline-none focus-visible:bg-primary-dark active:bg-primary-dark sm:text-lg"
          onClick={() => {
            router.push('/black-friday#priceTable');
          }}
        >
          {ctaText()}
        </button>
      </div>
    </div>
  );
};

export default SquareBanner;
