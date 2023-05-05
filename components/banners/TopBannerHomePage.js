import { useRouter } from 'next/router';
import { checkout } from '../../lib/auth';

const TopBannerHomePage = ({ isBannerFixed }) => {
  const router = useRouter();
  const lang = router.locale;

  const New = () => {
    if (lang === 'en') {
      return 'Special offer:';
    } else if (lang === 'es') {
      return 'Oferta special:';
    } else if (lang === 'fr') {
      return 'Offre spéciale:';
    } else if (lang === 'it') {
      return 'Offerta speciale:';
    } else {
      return 'Special offer:';
    }
  };

  const textForWeb = () => {
    if (lang === 'en') {
      return 'Get 80% off our 2TB plan for one year!';
    } else if (lang === 'es') {
      return '¡Obtén un 80% de descuento en el plan de 2TB por un año!';
    } else if (lang === 'fr') {
      return '80% de réduction sur le plan 2TB pendant un an !';
    } else if (lang === 'it') {
      return "Ottenete l'80% di sconto sul nostro piano da 2TB per un anno!";
    } else {
      return 'Get 80% off our 2TB plan for one year!';
    }
  };

  const textForMobile = () => {
    if (lang === 'en') {
      return 'Get 80% off our 2TB plan for one year!';
    } else if (lang === 'es') {
      return '¡80% de descuento en el plan de 2TB!';
    } else if (lang === 'fr') {
      return '80% de réduction sur le plan 2TB pendant un an !';
    } else if (lang === 'it') {
      return '80% di sconto sul nostro piano da 2TB per un anno!';
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
      <div
        className={`group ${
          isBannerFixed ? 'absolute' : 'fixed'
        } left-0 z-40 hidden h-[54px] w-screen cursor-pointer items-center justify-center bg-primary text-white md:flex`}
      >
        <div
          className="mx-auto flex flex-row items-center justify-center space-x-3"
          onClick={() =>
            checkout({
              planId: 'plan_FkTXxEg3GZW0pg',
              couponCode: 'lxevN374',
            })
          }
        >
          <p className="flex flex-row rounded-full  font-bold">{New().toUpperCase()}</p>
          <p className="flex flex-row font-normal">{textForWeb()}</p>

          {/* <p className="flex text-base font-semibold underline">{pickUp()}</p> */}
        </div>
      </div>
      <div
        className={`group fixed left-0 z-30 flex h-auto w-screen cursor-pointer items-center justify-center bg-primary text-white md:hidden`}
      >
        <div className="flex flex-col items-center justify-center py-2 px-2 text-center">
          <div
            className="flex flex-col items-center justify-center"
            onClick={() =>
              checkout({
                planId: 'plan_FkTXxEg3GZW0pg',
                couponCode: 'P8PSpVs6',
              })
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
