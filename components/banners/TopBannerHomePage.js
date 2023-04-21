import { useRouter } from 'next/router';
import { X } from 'phosphor-react';
import { checkout } from '../../lib/auth';

const TopBannerHomePage = ({ isBannerFixed, closeBannerOnMobile, setCloseBannerOnMobile }) => {
  const router = useRouter();
  const lang = router.locale;

  const New = () => {
    if (lang === 'en') {
      return 'Limited-Time Deal:';
    } else if (lang === 'es') {
      return 'Oferta special:';
    } else if (lang === 'fr') {
      return 'Offre limitée :';
    } else if (lang === 'ita') {
      return 'Offerta limitata:';
    }
  };

  const textForWeb = () => {
    if (lang === 'en') {
      return 'Get 50% OFF All Lifetime Plans';
    } else if (lang === 'es') {
      return '50% de descuento en los planes Lifetime';
    } else if (lang === 'fr') {
      return '50% de réduction sur tous les plans à vie';
    } else if (lang === 'ita') {
      return '50% di sconto su tutti i piani a vita';
    }
  };

  const textForMobile = () => {
    if (lang === 'en') {
      return 'Get 50% OFF All Lifetime Plans';
    } else if (lang === 'es') {
      return '50% de descuento en los planes Lifetime';
    } else if (lang === 'fr') {
      return '50% de réduction sur tous les plans à vie';
    } else if (lang === 'ita') {
      return '50% di sconto su tutti i piani a vita';
    }
  };

  const pickUp = () => {
    if (lang === 'en') {
      return 'Try now';
    } else if (lang === 'es') {
      return 'Pruébalo ahora';
    } else if (lang === 'fr') {
      return 'Essayez maintenant';
    } else {
      return 'Essayez maintenant';
    }
  };

  return (
    <>
      <div
        className={`group ${
          isBannerFixed ? 'absolute' : 'fixed'
        } top-16 left-0 z-40 hidden h-[54px] w-screen cursor-pointer items-center justify-center bg-primary text-white md:flex`}
      >
        <div
          className="mx-auto flex flex-row items-center justify-center space-x-3"
          onClick={() =>
            window.open(
              `https://internxt.com/${lang}/pricing?utm_source=website&utm_medium=banner&utm_campaign=lifetimeapril`,
              '_blank',
            )
          }
        >
          <p className="flex flex-row rounded-full  font-bold">{New().toUpperCase()}</p>
          <p className="flex flex-row font-normal">{textForWeb()}</p>

          {/* <p className="flex text-base font-semibold underline">{pickUp()}</p> */}
        </div>
      </div>
      <div
        className={`group fixed top-16 left-0 z-30 ${
          closeBannerOnMobile ? 'hidden' : 'flex'
        } h-auto w-screen cursor-pointer items-center justify-center bg-primary text-white md:hidden`}
      >
        <div className="flex flex-col items-center justify-center py-2 px-2 text-center">
          <div
            className="flex flex-col items-center justify-center"
            onClick={() =>
              window.open(
                `https://internxt.com${
                  lang === 'en' ? '' : `/${lang}`
                }/pricing?utm_source=website&utm_medium=banner&utm_campaign=lifetimeapril`,
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
