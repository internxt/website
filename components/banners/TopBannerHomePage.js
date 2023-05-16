import { useRouter } from 'next/router';
import { checkout } from '../../lib/auth';

const TopBannerHomePage = ({ isBannerFixed }) => {
  const router = useRouter();
  const lang = router.locale;

  const New = () => {
    if (lang === 'en') {
      return 'NEW RESOURCE:';
    } else {
      return 'NEW RESOURCE:';
    }
  };

  const textForWeb = () => {
    if (lang === 'en') {
      return 'Max out your Google privacy settings with our What Google Knows page';
    } else if (lang === 'es') {
      return 'Maximiza tu configuración de privacidad de Google con nuestra nueva página de privacidad';
    } else if (lang === 'fr') {
      return 'Optimisez vos paramètres de confidentialité Google avec notre nouvelle page sur la confidentialité';
    } else if (lang === 'it') {
      return 'Ottimizzate le impostazioni sulla privacy di Google con la nostra nuova pagina sulla privacy';
    } else {
      return 'Max out your Google privacy settings with our What Google Knows page';
    }
  };

  const textForMobile = () => {
    if (lang === 'en') {
      return 'Max out your Google privacy settings with our What Google Knows page';
    } else if (lang === 'es') {
      return 'Maximiza tu configuración de privacidad de Google con nuestra nueva página de privacidad';
    } else if (lang === 'fr') {
      return 'Optimisez vos paramètres de confidentialité Google avec notre nouvelle page sur la confidentialité';
    } else if (lang === 'it') {
      return 'Ottimizzate le impostazioni sulla privacy di Google con la nostra nuova pagina sulla privacy';
    } else {
      return 'Get 80% off our 2TB plan for one year!';
    }
  };

  const pickUp = () => {
    if (lang === 'en') {
      return 'Try now';
    } else if (lang === 'es') {
      return 'Pruébalo ahora';
    } else if (lang === 'fr') {
      return 'Essayez maintenant';
    }
  };

  return (
    <>
      {/* Desktop view */}
      <div
        className={`group ${
          isBannerFixed ? 'absolute' : 'fixed'
        } left-0 z-40 hidden h-[54px] w-screen cursor-pointer items-center justify-center bg-primary text-white md:flex`}
      >
        <div
          className="mx-auto flex flex-row items-center justify-center space-x-3"
          onClick={() =>
            window.open(
              'https://internxt.com/what-does-google-know-about-me/?utm_source=website&utm_medium=banner&utm_campaign=google_knows',
              '_blank',
            )
          }
        >
          <p className="flex flex-row rounded-full  font-bold">{New().toUpperCase()}</p>
          <p className="flex flex-row font-normal">{textForWeb()}</p>

          {/* <p className="flex text-base font-semibold underline">{pickUp()}</p> */}
        </div>
      </div>
      {/* Mobile view */}
      <div
        className={`group fixed left-0 z-30 flex h-auto w-screen cursor-pointer items-center justify-center bg-primary text-white md:hidden`}
      >
        <div className="flex flex-col items-center justify-center py-2 px-2 text-center">
          <div
            className="flex flex-col items-center justify-center"
            onClick={() =>
              window.open(
                'https://internxt.com/what-does-google-know-about-me/?utm_source=website&utm_medium=banner&utm_campaign=google_knows',
                '_blank',
              )
            }
          >
            <p className="flex flex-row rounded-full  font-bold">{New().toUpperCase()}</p>
            <p className="flex flex-row font-normal">{textForMobile()}</p>
          </div>

          {/* <button
            className="absolute top-3 right-3 flex flex-col"
            onClick={() => {
              setCloseBannerOnMobile(true);
            }}
          >
            <X size={36} className="z-50" />
          </button> */}
        </div>
      </div>
    </>
  );
};

export default TopBannerHomePage;
