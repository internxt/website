import { useEffect, useState } from 'react';
import { X } from '@phosphor-icons/react';
import { useRouter } from 'next/router';
import { buttonDeal } from '../TextWithoutJson';
import Image from 'next/image';

const SquareBanner = () => {
  const [hidePopup, setHidePopup] = useState(false);
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
      className={`fixed bottom-8 right-8 z-50 hidden h-[300px] w-[300px] flex-col overflow-hidden rounded-2xl bg-[url(/images/banners/banner_pop_up_cs_month_800x450_300x300_bg.webp)] bg-contain py-7 px-8 lg:${
        hidePopup ? 'hidden' : 'flex'
      }`}
    >
      <div className="flex items-end justify-end">
        <button onClick={handleClose} className="absolute top-2 right-2 flex h-auto pb-2">
          <X className=" text-white" size={24} />
        </button>
      </div>
      <div className="relative flex flex-col items-center justify-center space-y-5 text-center text-white">
        <p className="text-2xl font-medium">Cyber Security Awareness Month</p>
        <div className="flex flex-col">
          <Image src="/images/banners/80off-white.svg" width={217} height={95} alt="80 off image" />
        </div>
        <button
          className="flex w-max flex-row items-center justify-center space-x-4 rounded-lg bg-white py-2.5 px-5 text-base font-medium text-primary transition duration-100 focus:outline-none focus-visible:bg-gray-10 active:bg-gray-10 sm:text-lg"
          onClick={() => {
            router.push('/pricing#priceTable');
          }}
        >
          Get the deal!
        </button>
      </div>
    </div>
  );
};

export default SquareBanner;
