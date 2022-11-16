import React from 'react';
import styles from 'components/black-friday/BF-HeroSection.module.scss';
import { X } from 'phosphor-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { buttonDeal } from '../TextWithoutJson';
import { buttonLink } from '../TextWithoutJson';

const Popup = () => {
  const [hidePopup, setHidePopup] = React.useState(false);
  const router = useRouter();
  const lang = router.locale;

  if (router.pathname === '/black-friday') {
    return null;
  }

  const handleClose = () => {
    localStorage.setItem('hidePopup', true);
    setHidePopup(true);
  };

  React.useEffect(() => {
    const hidePopup = localStorage.getItem('hidePopup');
    if (hidePopup === 'true') {
      setHidePopup(true);
    }
    ['beforeunload', 'CloseSquare'].forEach((event) => {
      window.addEventListener(event, function (e) {
        if (event === 'beforeunload') {
          e.preventDefault();
          localStorage.removeItem('hidePopup');
        } else {
          localStorage.setItem('hidePopup', true);
          setHidePopup(true);
        }
      });
    });
    return () => {
      ['beforeunload', 'CloseSquare'].forEach((event) => {
        window.removeEventListener(event, () => {});
      });
    };
  }, []);

  const title = () => {
    switch (lang) {
      case 'en':
        return 'Black Friday is here!';
      case 'es':
        return '¡Black Friday ya está aquí!';
      case 'fr':
        return 'Le Black Friday est arrivé!';
      default:
        return 'Black Friday is here!';
    }
  };

  return (
    <div
      className={`fixed bottom-8 right-8 z-50 hidden max-h-[350px] max-w-[300px] flex-col py-5 px-8 lg:${
        hidePopup ? 'hidden' : 'flex'
      }`}
    >
      <div className="flex items-end justify-end">
        <button onClick={handleClose} className=" right-0 flex h-auto pb-2">
          <X className=" text-white" size={32} />
        </button>
      </div>
      <div className="flex flex-col items-center justify-center space-y-5 text-center text-white">
        <p className="text-2xl font-bold">{title()}</p>
        <img src="/images/special-offer/black-friday/discount.png" className="flex h-auto w-auto" />
        <Link href={buttonLink[lang]}>
          <button className="relative flex h-14 w-48 flex-row items-center justify-center space-x-4 rounded-4xl bg-primary px-8 text-base text-white transition duration-100 focus:outline-none focus-visible:bg-primary-dark active:bg-primary-dark sm:text-lg">
            {buttonDeal[lang]}
          </button>
        </Link>
      </div>
      <div
        className={`absolute top-0 left-0 -z-10 flex h-full w-full ${styles.neonBlur} pointer-events-none origin-center rounded-2xl`}
      />
    </div>
  );
};

export default Popup;
