import React from 'react';
import { X } from 'phosphor-react';
import { useRouter } from 'next/router';
import { buttonDeal } from '../TextWithoutJson';

const SquareBanner = () => {
  const [hidePopup, setHidePopup] = React.useState(false);
  const router = useRouter();
  const lang = router.locale;

  if (router.pathname === '/lifetime') {
    return null;
  }

  const handleClose = () => {
    localStorage.setItem('hideSquareBanner', 'true');
    setHidePopup(true);
  };

  React.useEffect(() => {
    const hidePopup = localStorage.getItem('hideSquareBanner');
    if (hidePopup) {
      setHidePopup(true);
    }
  }, []);

  const title = () => {
    switch (lang) {
      case 'en':
        return 'Lifetime deal!';
      case 'es':
        return '¡Plan lifetime!';
      case 'fr':
        return 'Plan lifetime!';
      default:
        return 'Lifetime deal!';
    }
  };

  return (
    <div
      className={`fixed bottom-8 right-8 z-50 hidden h-[300px] w-[300px] flex-col overflow-hidden rounded-2xl bg-primary-dark py-5 px-8 lg:${
        hidePopup ? 'hidden' : 'flex'
      }`}
    >
      <div className="flex items-end justify-end">
        <button onClick={handleClose} className=" right-0 flex h-auto pb-2">
          <X className=" text-white" size={32} />
        </button>
      </div>
      <div className="relative flex flex-col items-center justify-center space-y-5 text-center text-white">
        <p className="text-6xl font-bold">{title()}</p>
        <button
          className="flex flex-row items-center justify-center space-x-4 rounded-lg bg-white py-3 px-5 text-base font-medium text-primary transition duration-100 focus:outline-none focus-visible:bg-primary-dark active:bg-primary-dark sm:text-lg"
          onClick={() => {
            window.open(
              `https://internxt.com${
                lang === 'en' ? '' : `/${lang}`
              }/pricing?utm_source=website&utm_medium=popbanner&utm_campaign=lifetimeapril`,
              '_blank',
            );
          }}
        >
          {buttonDeal[lang]}
        </button>

        <div className="absolute -left-1 -z-40 flex h-[213px] w-[313px] pb-3">
          <img src="/images/lifetime/infinity.svg" className="flex h-auto w-auto" />
        </div>
      </div>
    </div>
  );
};

export default SquareBanner;
