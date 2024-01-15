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
        return { title1: 'Save 70%', title2: 'on monthly & annual subscriptions!' };
      case 'es':
        return { title1: '¡Ahorra un 70%', title2: 'en las suscripciones anuales y mensuales!' };
      case 'ru':
        return { title1: 'Экономия 70%', title2: 'на месячных и годовых планах!' };
      case 'fr':
        return { title1: 'Économisez 70%', title2: 'sur les abonnements mensuels et annuels !' };
      case 'it':
        return { title1: 'Risparmia il 70%', title2: 'su abbonamenti mensili e annuali!' };
      case 'zh':
        return { title1: '省 70%', title2: '月度和年度订阅优惠！' };
      case 'de':
        return { title1: 'Sparen Sie 70%', title2: 'bei monatlichen und jährlichen Abonnements!' };
      default:
        return { title1: 'Save 70%', title2: 'on monthly & annual subscriptions!' };
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
      } overflow-hidden rounded-lg bg-primary px-5 lg:px-0`}
    >
      <div className="flex flex-col justify-center pr-20">
        <div className="flex items-end justify-end">
          <button onClick={handleClose} className="absolute top-3 right-3 z-50 flex h-auto pb-2">
            <X className=" text-white" size={24} />
          </button>
        </div>
        <div className="z-40 flex flex-row ">
          <div className="flex flex-col">
            <Image
              src="/images/banners/data_privacy_internxt.webp"
              width={198}
              height={100}
              className="flex w-full object-fill"
              draggable={false}
            />
          </div>
          <div className="flex flex-row items-center justify-center space-x-5 text-white">
            <p className="text-6xl font-bold">{title().title1}</p>
            <p className="max-w-[300px] text-2xl font-bold">{title().title2}</p>
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
