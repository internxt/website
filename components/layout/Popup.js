import React from 'react';
import styles from 'components/black-friday/BF-HeroSection.module.scss';
import { X } from 'phosphor-react';
import ButtonDeal from '../black-friday/components/ButtonDeal';

const Popup = ({ lang }) => {
  const [hidePopup, setHidePopup] = React.useState(false);

  const handleClose = () => {
    localStorage.setItem('hidePopup', true);
    setHidePopup(true);
  };

  React.useEffect(() => {
    const hidePopup = localStorage.getItem('hidePopup');
    if (hidePopup) {
      setHidePopup(true);
    }
    window.onbeforeunload = localStorage.removeItem('hidePopup');
  }, []);

  return (
    <div
      className={`fixed bottom-8 right-8 z-50 hidden max-h-[350px] max-w-[300px] flex-col py-5 px-8 lg:${
        hidePopup ? 'hidden' : 'flex'
      }`}
    >
      <button onClick={handleClose} className="flex items-end justify-end pb-2">
        <X className=" text-white" size={32} />
      </button>
      <div className="flex flex-col items-center justify-center space-y-5 text-center text-white">
        <p className="text-2xl font-bold">Black Friday is here!</p>
        <img src="/images/special-offer/black-friday/discount.png" className="flex h-auto w-auto" />
        <ButtonDeal lang={lang} />
      </div>
      <div
        className={`absolute top-0 left-0 -z-10 flex h-full w-full ${styles.neonBlur} pointer-events-none origin-center`}
      />
    </div>
  );
};

export default Popup;
