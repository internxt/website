import { useEffect, useState } from 'react';
import { X } from '@phosphor-icons/react';
import { useRouter } from 'next/router';
import Image from 'next/legacy/image';
import { GlobalDialog, useGlobalDialog } from '../../contexts/GlobalUIManager';

const SHOW_SQUARE_BANNER_LS = 'showBottomBanner';

const BottomBanner = () => {
  const [hidePopup, setHidePopup] = useState(false);
  const router = useRouter();
  const lang = router.locale;
  const globalDialogs = useGlobalDialog();

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
        return 'Safer Internet Day offer!';
      // case 'es':
      //   return '¡La Semana de Privacidad de Datos está aquí!';
      // case 'ru':
      //   return 'Неделя конфиденциальности данных здесь!';
      // case 'fr':
      //   return 'Semaine de la Confidentialité des Données !';
      // case 'it':
      //   return 'La Settimana della Privacy dei Dati è arrivata!';
      // case 'zh':
      //   return '数据隐私周到了！';
      // case 'de':
      //   return 'Die Datenschutzwoche ist da!';
      default:
        return 'Safer Internet Day offer!';
    }
  };

  const ctaText = () => {
    switch (lang) {
      case 'en':
        return 'View offer';
      // case 'es':
      //   return 'Elige un plan';
      // case 'ru':
      //   return 'Выбрать план';
      // case 'fr':
      //   return 'Choisissez plan';
      // case 'it':
      //   return 'Scegli un piano';
      // case 'zh':
      //   return '选择计划';
      // case 'de':
      //   return 'Wählen Sie einen Plan';
      default:
        return 'View offer';
    }
  };

  return (
    <section
      className={`fixed bottom-10 z-50 hidden lg:${
        hidePopup ? 'hidden' : 'flex'
      } mx-auto overflow-hidden rounded-lg bg-primary-dark px-5 lg:px-0`}
    >
      <div className="relative flex h-[100px] w-[898px] flex-col items-center justify-center bg-contain bg-center bg-no-repeat">
        <div className="flex items-end justify-end">
          <button onClick={handleClose} className="absolute top-3 right-3 z-50 flex h-auto pb-2">
            <X className=" text-white" size={24} />
          </button>
        </div>
        <div className="z-40 flex flex-row items-center justify-center">
          <div className="absolute left-0">
            <Image src="/images/banners/wheel_web_banner_left.png" width={170} height={109} />
          </div>
          <div className="absolute right-0">
            <Image src="/images/banners/wheel_web_banner_right.png" width={180} height={109} />
          </div>
          <div className="relative flex flex-row items-center justify-center space-x-5 text-center text-white">
            <p className="text-3xl font-bold">{title()}</p>
            <button
              className="flex w-max flex-row items-center justify-center space-x-4 rounded-lg bg-white py-2.5 px-5 text-lg font-medium text-gray-100 transition duration-100 focus:outline-none focus-visible:bg-gray-10 active:bg-gray-10 sm:text-lg"
              onClick={() => {
                globalDialogs.openDialog(GlobalDialog.Wheel);
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
