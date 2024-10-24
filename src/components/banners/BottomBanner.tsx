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
        return {
          title1: 'Save 80%',
          title2: {
            line1: 'Secure your',
            line2: 'world!',
          },
        };
      case 'es':
        return {
          title1: 'Ahorra 80%',
          title2: {
            line1: 'Asegura tu',
            line2: 'mundo!',
          },
        };
      case 'ru':
        return {
          title1: 'Сэкономьте 80%',
          title2: {
            line1: 'Защитите свой',
            line2: 'мир!',
          },
        };
      case 'fr':
        return {
          title1: 'Économisez 80 %',
          title2: {
            line1: 'Sécurise ton',
            line2: 'monde!',
          },
        };
      case 'it':
        return {
          title1: 'Risparmia il 80%',
          title2: {
            line1: 'Proteggi il tuo',
            line2: 'mondo!',
          },
        };
      case 'zh':
        return {
          title1: '节省80%',
          title2: {
            line1: '保护你的',
            line2: '世界!',
          },
        };
      case 'zh-tw':
        return {
          title1: '節省 80%',
          title2: {
            line1: '保護你的',
            line2: '世界!',
          },
        };
      case 'de':
        return {
          title1: 'Spare 80%',
          title2: {
            line1: 'Sichere deine',
            line2: 'Welt!',
          },
        };
      default:
        return {
          title1: 'Save 80%',
          title2: {
            line1: 'Work smart, ',
            line2: 'not hard!',
          },
        };
    }
  };

  const ctaText = () => {
    switch (lang) {
      case 'en':
        return 'Choose plan';
      case 'es':
        return 'Elige tu plan';
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
      className={`${shouldShowBanner ? 'fixed' : 'hidden'} bottom-10 z-50 hidden max-h-[100px] lg:${
        shouldShowBanner ? 'flex' : 'hidden'
      } overflow-hidden rounded-lg bg-primary px-5 lg:px-0`}
    >
      <div className="flex flex-col justify-center">
        <div className="flex items-end justify-end">
          <button
            id="close-bottom-banner"
            aria-label="close-bottom-banner"
            onClick={handleClose}
            className="absolute right-3 top-3 z-50 flex h-auto pb-2 text-white"
          >
            <X size={24} />
          </button>
        </div>
        <div className="z-40 flex flex-row justify-between gap-24">
          <div className="flex flex-col">
            <Image
              src={getImage('/images/cyber-awareness/cyber-awareness-2024/surveillance_left.webp')}
              width={160}
              height={100}
              draggable={false}
              alt={'Surveillance left'}
            />
          </div>
          <div className="flex flex-row items-center justify-center gap-14">
            <div className="flex flex-row items-center gap-5">
              <p className="text-6xl font-bold text-white">{title().title1}</p>
              <p className="max-w-[370px] text-2xl font-semibold text-white">
                {title().title2.line1} <br /> {title().title2.line2}
              </p>
            </div>
            <button
              className="flex w-max flex-row items-center justify-center space-x-4 rounded-lg bg-white px-5 py-2.5 text-lg font-medium text-gray-100 transition duration-100 focus:outline-none focus-visible:bg-gray-1 active:bg-gray-10 sm:text-lg"
              onClick={() => {
                router.push('/pricing');
                handleClose();
              }}
            >
              {ctaText()}
            </button>
          </div>
          <div className="flex flex-col justify-end object-contain">
            <Image
              src={getImage('/images/cyber-awareness/cyber-awareness-2024/surveillance_right.webp')}
              width={160}
              height={100}
              draggable={false}
              alt={'Surveillance right'}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default BottomBanner;
