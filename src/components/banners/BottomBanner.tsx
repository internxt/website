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
          title1: 'Save 78%',
          title2: {
            line1: 'Work smart, ',
            line2: 'not hard!',
          },
        };
      case 'es':
        return {
          title1: 'Ahorra 78%',
          title2: {
            line1: 'en tus planes lifetime',
            line2: '',
          },
        };
      case 'ru':
        return {
          title1: 'Сэкономьте 78%',
          title2: {
            line1: 'Работай умно, ',
            line2: 'не усердно!',
          },
        };
      case 'fr':
        return {
          title1: 'Économisez 78 %',
          title2: {
            line1: 'Travaillez intelligemment, ',
            line2: 'pas dur !',
          },
        };
      case 'it':
        return {
          title1: 'Risparmia il 78%',
          title2: {
            line1: 'Lavora intelligente, ',
            line2: 'non duro!',
          },
        };
      case 'zh':
        return {
          title1: '节省80%',
          title2: {
            line1: '保护你的',
            line2: '世界！',
          },
        };
      case 'zh-tw':
        return {
          title1: '節省 78%',
          title2: {
            line1: '聰明工作，',
            line2: '不是辛苦工作！',
          },
        };
      case 'de':
        return {
          title1: 'Spare 78%',
          title2: {
            line1: 'Arbeite klug, ',
            line2: 'nicht hart!',
          },
        };
      default:
        return {
          title1: 'Save 78%',
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
      className={`${shouldShowBanner ? 'fixed' : 'hidden'} bottom-10 z-50 hidden lg:${
        shouldShowBanner ? 'flex' : 'hidden'
      } overflow-hidden rounded-lg bg-primary px-5 lg:px-0`}
    >
      <div className="flex flex-col justify-center pr-20">
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
        <div className="z-40 flex flex-row gap-24">
          <div className="flex flex-col">
            <Image
              src={getImage('/images/home/back-to-work/bottom-banner.webp')}
              width={180}
              height={100}
              className="flex w-full object-fill"
              draggable={false}
              alt={"Internxt's summer discount"}
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
                router.push('/lifetime');
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
