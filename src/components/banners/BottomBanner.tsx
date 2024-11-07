import { useEffect, useState } from 'react';
import { X } from '@phosphor-icons/react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { GlobalDialog, useGlobalDialog } from '@/contexts/GlobalUIManager';
import { getImage } from '@/lib/getImage';
import styles from '@/components/black-friday/BF-HeroSection.module.scss';
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
          title1: 'Save 85%',
          title2: {
            line1: 'Back to',
            line2: 'Black Friday!',
          },
        };
      case 'es':
        return {
          title1: 'Ahorra 85%',
          title2: {
            line1: 'De vuelta',
            line2: 'al Black Friday!',
          },
        };
      case 'ru':
        return {
          title1: 'Сэкономьте 85%',
          title2: {
            line1: 'Назад к',
            line2: 'Чёрной пятнице!',
          },
        };
      case 'fr':
        return {
          title1: 'Économisez 85 %',
          title2: {
            line1: 'Retour',
            line2: 'au Black Friday!',
          },
        };
      case 'it':
        return {
          title1: 'Risparmia il 85%',
          title2: {
            line1: 'Torna il',
            line2: 'Black Friday!',
          },
        };
      case 'zh':
        return {
          title1: '节省85%',
          title2: {
            line1: '',
            line2: '回到黑色星期五！',
          },
        };
      case 'zh-tw':
        return {
          title1: '節省 85%',
          title2: {
            line1: '',
            line2: '回到黑色星期五！',
          },
        };
      case 'de':
        return {
          title1: 'Spare 85%',
          title2: {
            line1: 'Zurück zum',
            line2: 'Black Friday!',
          },
        };
      default:
        return {
          title1: 'Save 85%',
          title2: {
            line1: 'Back to',
            line2: 'Black Friday!',
          },
        };
    }
  };

  const ctaText = () => {
    switch (lang) {
      case 'en':
        return 'Claim deal';
      case 'es':
        return 'Reclamar oferta';
      case 'ru':
        return 'Получить скидку';
      case 'fr':
        return 'Obtenez une offre';
      case 'it':
        return 'Ottieni offerta';
      case 'zh':
        return '领取优惠';
      case 'zh-tw':
        return '領取優惠';
      case 'de':
        return 'Angebot sichern';
      default:
        return 'Choose plan';
    }
  };
  return (
    <section
      className={`${shouldShowBanner ? 'fixed' : 'hidden'} bottom-10 z-50 hidden max-h-[100px] ${
        styles.radialGradient
      } lg:${shouldShowBanner ? 'flex' : 'hidden'} overflow-hidden rounded-lg bg-orange px-5 lg:px-0`}
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
              src={getImage('/images/campaigns/halloween/internx_halloween_pricing.webp')}
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
          <div className="flex flex-col justify-end object-contain"></div>
        </div>
      </div>
    </section>
  );
};
export default BottomBanner;
