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
        return 'Lifetime security for your files';
      case 'es':
        return 'Seguridad para tus archivos de por vida';
      case 'ru':
        return 'Пожизненная безопасность файлов';
      case 'fr':
        return 'Sécurité à vie pour vos fichiers';
      case 'it':
        return 'Sicurezza a vita per i tuoi file';
      case 'zh':
        return '文件的终身安全';
      case 'de':
        return 'Lebenslange Sicherheit für Ihre Dateien';
      default:
        return 'Lifetime security for your files';
    }
  };

  const ctaText = () => {
    switch (lang) {
      case 'en':
        return 'View plans';
      case 'es':
        return 'Ver planes';
      case 'ru':
        return 'Тарифные планы';
      case 'fr':
        return 'Voir les plans';
      case 'it':
        return 'Visualizza i piani';
      case 'zh':
        return '查看计划';
      case 'de':
        return 'Pläne anzeigen';
      default:
        return 'View plans';
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
            <img width="148" height="100" src="/images/banners/lifetime_small_left.svg" />
          </div>
          <div className="absolute right-0">
            <img width="148" height="100" src="/images/banners/lifetime_small_right.svg" />
          </div>
          <div className="relative flex flex-row items-center justify-center space-x-5 text-center text-white">
            <p className="text-3xl font-bold">{title()}</p>
            <button
              className="flex w-max flex-row items-center justify-center space-x-4 rounded-lg bg-primary py-2.5 px-5 text-lg font-medium text-white transition duration-100 focus:outline-none focus-visible:bg-primary-dark active:bg-primary-dark sm:text-lg"
              onClick={() => {
                router.push('/lifetime');
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
