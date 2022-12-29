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

  if (router.pathname === '/lifetime') {
    return null;
  }

  const handleClose = () => {
    setHidePopup(true);
  };

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
        <Link href={'https://internxt.com/lifetime?utm_source=website&utm_medium=banner&utm_campaign=lifetime'}>
          <button
            aria-label="Close popup"
            className="flex h-14 w-48 flex-row items-center justify-center space-x-4 rounded-4xl bg-white px-8 text-base text-primary transition duration-100 focus:outline-none focus-visible:bg-primary-dark active:bg-primary-dark sm:text-lg"
          >
            {buttonDeal[lang]}
          </button>
        </Link>
        <div className="absolute -left-1 -z-40 flex h-[213px] w-[313px] pb-3">
          <img src="/images/lifetime/infinity.svg" alt="Infinity image" className="flex h-auto w-auto" />
        </div>
      </div>
    </div>
  );
};

export default Popup;
