import { useRouter } from 'next/router';
import { X } from 'phosphor-react';

const TopBannerHomePage = ({ isBannerFixed, closeBannerOnMobile, setCloseBannerOnMobile }) => {
  const router = useRouter();
  const lang = router.locale;

  const New = () => {
    if (lang === 'en') {
      return 'NEW:';
    } else if (lang === 'es') {
      return 'NUEVO:';
    } else if (lang === 'fr') {
      return 'NOUVEAU:';
    }
  };

  const textForWeb = () => {
    if (lang === 'en') {
      return "Protect your inbox with Internxt's free Temporary Email";
    } else if (lang === 'es') {
      return 'Protege tu bandeja de entrada con el correo electrónico temporal gratuito de Internxt';
    } else if (lang === 'fr') {
      return "Protégez votre boîte de réception avec le courriel temporaire gratuit d'Internxt";
    }
  };

  const textForMobile = () => {
    if (lang === 'en') {
      return "Pick up the Valentine's deal";
    } else if (lang === 'es') {
      return 'Obtén la oferta';
    } else if (lang === 'fr') {
      return "Profitez de l'offre";
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
            window.location.replace(
              `https://internxt.com/temporary-email?utm_source=website&utm_medium=banner&utm_campaign=tempmail`,
            )
          }
        >
          <p className="flex flex-row rounded-full  font-bold">{New()}</p>
          <p className="flex flex-row font-normal">{textForWeb()}</p>

          <p className="flex text-base font-semibold underline">{pickUp()}</p>
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
              window.location.replace(
                `https://internxt.com/temporary-email?utm_source=website&utm_medium=banner&utm_campaign=tempmail`,
              )
            }
          >
            <p className="flex flex-row rounded-full  font-bold">{New()}</p>
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
