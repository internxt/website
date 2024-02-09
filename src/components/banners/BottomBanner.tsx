import { useEffect, useState } from 'react';
import { X } from '@phosphor-icons/react';
import { useRouter } from 'next/router';

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

  const label = () => {
    switch (lang) {
      case 'en':
        return 'Save 69%';
      case 'es':
        return 'Ahorra un 69%';
      case 'ru':
        return 'Скидка 69%';
      case 'fr':
        return 'Économisez 69%';
      case 'it':
        return 'Risparmia il 69%';
      case 'zh':
        return '节省69%';
      case 'de':
        return 'Sparen Sie 69%';
      default:
        return 'Save 69%';
    }
  };

  const title = () => {
    switch (lang) {
      case 'en':
        return 'Cloud cover for privacy lovers!';
      case 'es':
        return 'Ofertas de San Valentín!';
      case 'ru':
        return 'Облачное хранилище для поклонников безопасности!';
      case 'fr':
        return 'Offres de la Saint-Valentin!';
      case 'it':
        return 'Offerte di San Valentino!';
      case 'zh':
        return '情人节特惠！';
      case 'de':
        return 'Valentinstagsangebote!';
      default:
        return 'Cloud cover for privacy lovers!';
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
      } mx-auto overflow-hidden rounded-lg border-4 border-primary/7 bg-white px-5 lg:px-0`}
    >
      <div className="relative flex h-[100px] flex-col items-center justify-center bg-contain bg-center bg-no-repeat px-14">
        <div className="flex items-end justify-end">
          <button onClick={handleClose} className="absolute top-3 right-3 z-50 flex h-auto pb-2">
            <X className=" text-gray-100" size={24} />
          </button>
        </div>
        <div className="z-40 flex flex-row items-center justify-center">
          {/* <div className="absolute left-0">
            <Image src="/images/banners/wheel_web_banner_left.png" width={170} height={109} />
          </div>
          <div className="absolute right-0">
            <Image src="/images/banners/wheel_web_banner_right.png" width={180} height={109} />
          </div> */}
          <div className="relative flex flex-row items-center justify-center space-x-5 text-center text-gray-80">
            <div className="flex w-max rounded-2xl bg-red-dark py-2 px-4 ring-4 ring-red">
              <p className="text-3xl font-bold text-white lg:text-5xl">{label()}</p>
            </div>
            <p className="text-5xl font-bold">{title()}</p>
            <button
              className="flex w-max flex-row items-center justify-center space-x-4 rounded-lg bg-gray-5 py-2.5 px-5 text-xl font-medium text-gray-80 transition duration-100 hover:bg-gray-10 focus:outline-none focus-visible:bg-gray-10 active:bg-gray-10 sm:text-lg"
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
