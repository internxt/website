import { ArrowsClockwise, ClockCounterClockwise, CloudCheck, Fingerprint, Gift, ShieldCheck, X } from 'phosphor-react';
import React from 'react';
import styles from '../black-friday/BF-HeroSection.module.scss';
import { useRouter } from 'next/router';

const cardsTitles = {
  en: {
    title1: 'Get up to 10GB free',
    title2: 'Safe and secure cloud storage',
    title3: 'Private file and photo backup',
    title4: 'End-to-end encrypted transfers',
    title5: 'No unauthorized access',
    title6: 'Available on all devices',
  },
  es: {
    title1: 'Get up to 10GB free',
    title2: 'Safe and secure cloud storage',
    title3: 'Private file and photo backup',
    title4: 'End-to-end encrypted transfers',
    title5: 'No unauthorized access',
    title6: 'Available on all devices',
  },
  fr: {
    title1: 'Obtenez jusqu’à 10GB gratuits',
    title2: 'Stockage en nuage sécurisé',
    title3: 'Sauvegarde privée des fichiers',
    title4: 'Transferts cryptés de bout en bout',
    title5: 'Aucun accès non autorisé',
    title6: 'Disponible sur tous les appareils',
  },
};

const LoginBFBanner = () => {
  const [showBanner, setShowBanner] = React.useState(false);
  const router = useRouter();
  const lang = router.locale;

  React.useEffect(() => {
    setTimeout(() => {
      setShowBanner(true);
    }, 300000);
  }, []);

  const handleClose = () => {
    localStorage.setItem('hideLoginBanner', true);
    setShowBanner(false);
  };

  React.useEffect(() => {
    const hideBanner = localStorage.getItem('hideLoginBanner');
    if (showBanner) {
      window.dispatchEvent(new Event('CloseSquare'));
    }
    if (Boolean(hideBanner)) {
      setShowBanner(false);
    }
    window.addEventListener('unload', function (e) {
      e.preventDefault();
      localStorage.removeItem('hideLoginBanner');
    });
    return () => {
      window.removeEventListener('unload', () => {});
    };
  }, [showBanner]);

  const cards = [
    {
      icon: Gift,
      title: cardsTitles[lang].title1,
    },
    {
      icon: CloudCheck,
      title: cardsTitles[lang].title2,
    },
    {
      icon: ClockCounterClockwise,
      title: cardsTitles[lang].title3,
    },
    {
      icon: ShieldCheck,
      title: cardsTitles[lang].title4,
    },
    {
      icon: Fingerprint,
      title: cardsTitles[lang].title5,
    },
    {
      icon: ArrowsClockwise,
      title: cardsTitles[lang].title6,
    },
  ];

  const head = () => {
    switch (lang) {
      case 'en':
        return 'Try before you buy.';
      case 'fr':
        return "Essayez avant d'acheter.";
      default:
        return 'Try before you buy.';
    }
  };

  const title = () => {
    switch (lang) {
      case 'en':
        return 'Get Internxt for free!';
      case 'fr':
        return 'Obtenez Internxt gratuitement!';
      default:
        return 'Get Internxt for free!';
    }
  };

  const buttonText = () => {
    switch (lang) {
      case 'en':
        return 'Sign up now';
      case 'fr':
        return "S'inscrire";
      default:
        return 'Sign up now';
    }
  };

  return (
    showBanner && (
      <div className={`fixed top-0 left-0 right-0 bottom-0 z-50 flex bg-black bg-opacity-50 px-10`}>
        <div
          className={`fixed top-1/2 left-1/2 flex h-auto -translate-y-[50%] -translate-x-[50%] flex-col overflow-hidden rounded-2xl`}
        >
          <button className="absolute right-0 m-7 flex text-white" onClick={handleClose}>
            <X size={32} />
          </button>
          <div className="flex w-auto flex-col p-14 lg:flex-row lg:p-20">
            <div className="flex flex-col items-center justify-center text-center lg:items-start lg:justify-between lg:pr-20 lg:text-start">
              <div className="flex flex-col lg:w-72">
                <p className="text-3xl font-semibold text-white">{head()}</p>
                <p className="pt-8 text-5xl font-bold text-white">{title()}</p>
              </div>
              <div className="flex pt-7 lg:pt-24">
                <button
                  className="relative flex h-14 w-48 flex-row items-center justify-center space-x-4 rounded-4xl bg-primary px-8 text-base text-white transition duration-100 focus:outline-none focus-visible:bg-primary-dark active:bg-primary-dark sm:text-lg"
                  onClick={() => {
                    window.location.replace(
                      'https://drive.internxt.com/new?utm_source=website&utm_medium=banner&utm_campaign=blackfriday',
                    );
                  }}
                >
                  {buttonText()}
                </button>
              </div>
            </div>
            <div className="hidden items-center lg:flex">
              <div className="flex w-[340px] flex-col">
                <div className="flex flex-col">
                  {cards.map((card, index) => (
                    <div className="flex flex-row pb-8 last:pb-0" key={index}>
                      <card.icon size={32} className="mr-4 text-primary" />
                      <p className="text-xl font-semibold text-white">{card.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div
            className={`absolute top-0 left-0 -z-10 flex h-full w-full ${styles.neonBlur} pointer-events-none origin-center`}
          />
        </div>
      </div>
    )
  );
};

export default LoginBFBanner;
