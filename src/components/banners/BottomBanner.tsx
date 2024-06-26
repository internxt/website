import { useEffect, useState } from 'react';
import { X } from '@phosphor-icons/react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { GlobalDialog, useGlobalDialog } from '@/contexts/GlobalUIManager';
import { getImage } from '@/lib/getImage';

const SHOW_SQUARE_BANNER_LS = 'showBottomBanner';

const BottomBanner = () => {
  const router = useRouter();
  const [shouldShowBanner, setShouldShowBanner] = useState(false);

  const { dialogIsOpen, closeDialog } = useGlobalDialog();

  const lang = router.locale;

  useEffect(() => {
    const getSquareBannerLS = sessionStorage.getItem(SHOW_SQUARE_BANNER_LS);
    if (getSquareBannerLS) {
      closeDialog(GlobalDialog.BottomBanner);
    } else {
      setShouldShowBanner(dialogIsOpen(GlobalDialog.BottomBanner));
    }
  }, []);

  function handleClose() {
    setShouldShowBanner(false);
    sessionStorage.setItem(SHOW_SQUARE_BANNER_LS, 'false');
  }

  const title = () => {
    switch (lang) {
      case 'en':
        return { title1: 'Save 75%', title2: 'Kick off your privacy journey!' };
      case 'es':
        return { title1: 'Ahorra un 75%', title2: '¡Marca con seguridad y protege tus datos!' };
      case 'ru':
        return { title1: 'Сэкономьте 75%', title2: 'Начните свой путь к приватности!' };
      case 'fr':
        return { title1: 'Économisez 75%', title2: 'Commencez votre voyage vers la confidentialité!' };
      case 'it':
        return { title1: 'Risparmia 75%', title2: 'Inizia il tuo viaggio verso la privacy!' };
      case 'zh':
        return { title1: '节省75%', title2: '开始您的隐私之旅！' };
      case 'zh-tw':
        return { title1: '節省75%', title2: '開始您的隱私之旅！' };
      case 'de':
        return { title1: 'Spare 75%', title2: 'Beginnen Sie Ihre Reise zur Privatsphäre!' };
      default:
        return { title1: 'Save 75%', title2: 'Spring savings have arrived!' };
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
      className={`${shouldShowBanner ? 'fixed' : 'hidden'} bottom-10 z-50 hidden lg:${
        shouldShowBanner ? 'flex' : 'hidden'
      } overflow-hidden rounded-lg px-5 lg:px-0`}
      style={{
        backgroundImage: `url(${getImage('/images/campaigns/euro/grass.webp')})`,
        // filter: 'blur(24px)'
      }}
    >
      <div className="flex flex-col justify-center pr-20">
        <div className="flex items-end justify-end">
          <button onClick={handleClose} className="absolute top-3 right-3 z-50 flex h-auto pb-2 text-white">
            <X size={24} />
          </button>
        </div>
        <div className="z-40 flex flex-row ">
          <div className="flex flex-col">
            <Image
              src={getImage('/images/campaigns/euro/banner.webp')}
              width={178}
              height={70}
              className="flex w-full object-fill"
              draggable={false}
              alt={"Internxt's spring sale"}
            />
          </div>
          <div className="flex flex-row items-center justify-center space-x-5">
            <p className="text-6xl font-bold text-white">{title().title1}</p>
            <p className="max-w-[300px] text-2xl font-semibold text-white">{title().title2}</p>
            <button
              className="flex w-max flex-row items-center justify-center space-x-4 rounded-lg bg-primary py-2.5 px-5 text-lg font-medium text-white transition duration-100 focus:outline-none focus-visible:bg-primary-dark active:bg-primary-dark sm:text-lg"
              onClick={() => {
                router.push('/pricing');
                handleClose();
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
