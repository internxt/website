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
          title1: 'Save 80%',
          title2: {
            line1: 'Christmas savings',
            line2: 'are here!',
          },
        };
      case 'es':
        return {
          title1: '80% en TODOS los planes.',
          title2: {
            line1: 'Estas Navidades,',
            line2: 'ahorros a lo grande! ',
          },
        };
      case 'ru':
        return {
          title1: 'Сэкономьте 80%',
          title2: {
            line1: 'Рождественские скидки',
            line2: 'уже здесь!',
          },
        };
      case 'fr':
        return {
          title1: 'Économisez 80%',
          title2: {
            line1: 'Économies de Noël',
            line2: 'sont là!',
          },
        };
      case 'it':
        return {
          title1: 'Risparmia il 80%',
          title2: {
            line1: 'Risparmi di Natale',
            line2: 'sono qui!',
          },
        };
      case 'zh':
        return {
          title1: '节省 80%',
          title2: {
            line1: '圣诞节省钱',
            line2: '已经到来！',
          },
        };
      case 'zh-tw':
        return {
          title1: '節省 80%',
          title2: {
            line1: '聖誕節省錢',
            line2: '已經到來！',
          },
        };
      case 'de':
        return {
          title1: 'Sparen Sie 80%',
          title2: {
            line1: 'Weihnachtssparen',
            line2: 'ist hier!',
          },
        };
      default:
        return {
          title1: 'Save 80%',
          title2: {
            line1: 'Christmas savings',
            line2: 'are here!',
          },
        };
    }
  };

  const ctaText = () => {
    switch (lang) {
      case 'en':
        return 'Claim deal';
      case 'es':
        return 'Consigue tu plan';
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
        styles.linearGradient
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
              src={getImage('/images/christmas/internxt_christmas_horizontal.webp')}
              width={243}
              height={100}
              draggable={false}
              alt={'Surveillance left'}
            />
          </div>
          <div className="flex flex-row items-center justify-center gap-14">
            <div className="flex flex-row items-center gap-5">
              <p className={`font-bold text-white ${lang === 'es' ? 'text-4xl' : 'text-6xl'}`}>{title().title1}</p>
              <p className={`max-w-[370px] font-semibold text-white ${lang === 'es' ? 'text-xl' : 'text-2xl'}`}>
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
