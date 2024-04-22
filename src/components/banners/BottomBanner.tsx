import { useEffect, useState } from 'react';
import { X } from '@phosphor-icons/react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { GlobalDialog, useGlobalDialog } from '@/contexts/GlobalUIManager';

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
        return { title1: 'Save 70%', title2: 'Secure your accounts and files forever!' };
      case 'es':
        return { title1: 'Ahorra un 70%', title2: '¡Asegura tus archivos para siempre!' };
      case 'ru':
        return { title1: 'Экономия 70%', title2: 'Защитите свои аккаунты и файлы навсегда!' };
      case 'fr':
        return { title1: 'Économisez 70%', title2: 'Sécurisez vos comptes et fichiers pour toujours !' };
      case 'it':
        return { title1: 'Risparmia il 70%', title2: 'Proteggi i tuoi account e file per sempre!' };
      case 'zh':
        return { title1: '省 70%', title2: '永久保护您的帐户和文件！' };
      case 'de':
        return { title1: 'Sparen Sie 70%', title2: 'Sichern Sie Ihre Konten und Dateien für immer!' };
      default:
        return { title1: 'Save 70%', title2: 'Spring savings have arrived!' };
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
      } overflow-hidden rounded-lg bg-primary px-5 lg:px-0`}
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
              src="/images/banners/data_privacy_internxt.webp"
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
              className="flex w-max flex-row items-center justify-center space-x-4 rounded-lg bg-white py-2.5 px-5 text-lg font-medium text-gray-100 transition duration-100 focus:outline-none focus-visible:bg-gray-1 active:bg-gray-5 sm:text-lg"
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
