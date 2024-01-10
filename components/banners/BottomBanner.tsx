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
        return '50% OFF annual subscription plans!';
      case 'es':
        return '¡50% de descuento en planes anuales!';
      case 'ru':
        return 'Скидка 50% на годовой абонемент!';
      case 'fr':
        return '50 % de réduction sur les abonnements annuels!';
      case 'it':
        return '50% di sconto sui piani di abbonamento annuali!';
      case 'zh':
        return '年度订阅计划 5 折优惠！';
      case 'de':
        return '50 % Rabatt auf Jahresabonnementpläne!';
      default:
        return '50% OFF annual subscription plans!';
    }
  };

  const ctaText = () => {
    switch (lang) {
      case 'en':
        return 'Choose plan';
      case 'es':
        return 'Elige un plan';
      case 'ru':
        return 'Выбрать план';
      case 'fr':
        return 'Choisissez plan';
      case 'it':
        return 'Scegli un piano';
      case 'zh':
        return '选择计划';
      case 'de':
        return 'Wählen Sie einen Plan';
      default:
        return 'Choose plan';
    }
  };

  return (
    <section
      className={`fixed bottom-10 z-50 hidden lg:${
        hidePopup ? 'hidden' : 'flex'
      } mx-auto overflow-hidden rounded-lg bg-gradient-to-b from-[#060C40] to-primary px-5 lg:px-0`}
    >
      <div className="relative flex h-[100px] flex-col items-center justify-center bg-contain bg-center bg-no-repeat px-20">
        <div className="flex items-end justify-end">
          <button onClick={handleClose} className="absolute top-3 right-3 z-50 flex h-auto pb-2">
            <X className=" text-white" size={24} />
          </button>
        </div>
        <div className="z-40 flex flex-row items-center justify-center">
          <div className="relative flex flex-row items-center justify-center space-x-5 text-center text-white">
            <p className="text-3xl font-bold">{title()}</p>
            <button
              className="flex w-max flex-row items-center justify-center space-x-4 rounded-lg bg-white py-2.5 px-5 text-lg font-medium text-primary transition duration-100 focus:outline-none focus-visible:bg-blue-10 active:bg-blue-10 sm:text-lg"
              onClick={() => {
                router.push('/pricing');
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
