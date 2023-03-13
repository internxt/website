import { useRouter } from 'next/router';
import { X } from 'phosphor-react';
import { checkout } from '../../lib/auth';

const TopBannerHomePage = ({ isBannerFixed, closeBannerOnMobile, setCloseBannerOnMobile }) => {
  const router = useRouter();
  const lang = router.locale;

  const New = () => {
    if (lang === 'en') {
      return 'Special offer';
    } else if (lang === 'es') {
      return 'Oferta special';
    } else if (lang === 'fr') {
      return 'Offre spéciale';
    }
  };

  const textForWeb = () => {
    if (lang === 'en') {
      return 'Get 90% off our 2TB plan for one year!';
    } else if (lang === 'es') {
      return '90% de descuento en el plan de 2TB por un año';
    } else if (lang === 'fr') {
      return '90% de réduction sur le plan 2TB pour un an';
    }
  };

  const textForMobile = () => {
    if (lang === 'en') {
      return ' Internxt’s Free Temporary Email';
    } else if (lang === 'es') {
      return 'Correo Temporal gratuito de Internxt';
    } else if (lang === 'fr') {
      return 'Courriel Temporaire Gratuit d’Internet';
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
      <div
        className={`group ${
          isBannerFixed ? 'absolute' : 'fixed'
        } top-16 left-0 z-40 hidden h-[54px] w-screen cursor-pointer items-center justify-center bg-primary text-white md:flex`}
      >
        <div
          className="mx-auto flex flex-row items-center justify-center space-x-3"
          onClick={() =>
            checkout({
              planId: 'plan_FkTXxEg3GZW0pg',
              couponCode: 'P8PSpVs6',
            })
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
        } h-16 w-screen cursor-pointer items-center justify-center bg-primary text-white md:hidden`}
      >
        <div className="flex flex-row">
          <div
            className="flex flex-row items-center justify-center space-x-2"
            onClick={() =>
              checkout({
                planId: 'plan_FkTXxEg3GZW0pg',
                couponCode: 'P8PSpVs6',
              })
            }
          >
            <p className="flex flex-row rounded-full  font-bold">{New().toUpperCase()}</p>
            <p className="flex flex-row font-normal">{textForWeb()}</p>
          </div>

          <button
            className="absolute top-3 right-3 flex flex-col"
            onClick={() => {
              setCloseBannerOnMobile(true);
            }}
          >
            <X size={36} className="z-50" />
          </button>
        </div>
      </div>
    </>
  );
};

export default TopBannerHomePage;
