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
        return 'Data Privacy Week is here!';
      case 'es':
        return '¡La Semana de Privacidad de Datos está aquí!';
      case 'ru':
        return 'Неделя конфиденциальности данных здесь!';
      case 'fr':
        return 'Semaine de la Confidentialité des Données !';
      case 'it':
        return 'La Settimana della Privacy dei Dati è arrivata!';
      case 'zh':
        return '数据隐私周到了！';
      case 'de':
        return 'Die Datenschutzwoche ist da!';
      default:
        return 'Data Privacy Week is here!';
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
              alt="Data Privacy Internxt"
            />
          </div>
          <div className="flex flex-row items-center justify-center space-x-5 text-white">
            <p className="text-5xl font-bold">{title()}</p>
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
