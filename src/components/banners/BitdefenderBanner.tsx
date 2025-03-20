import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getImage } from '@/lib/getImage';
import { X } from '@phosphor-icons/react';
import Image from 'next/image';

const BitdefenderBanner = (languageForImage) => {
  const router = useRouter();
  const [showBanner, setShowBanner] = useState<boolean>(true);

  const handleClose = () => {
    setShowBanner(false);
  };

  const handleOnClick = () => {
    window.open(
      `https://www.bitdefender.com/pages/consumer/${languageForImage.languageForImage}/new/trial/ts-trial-3m/internxt/`,
      '_blank',
    );
  };

  console.log('languageForImage', languageForImage.languageForImage);
  return (
    <div
      className={`${
        showBanner ? 'flex' : 'hidden'
      } fixed bottom-0 left-0 right-0 top-0 z-50 h-screen bg-black bg-opacity-50 px-10 lg:px-0`}
    >
      <div
        className={
          ' fixed left-1/2 top-1/2 flex h-max -translate-x-[50%] -translate-y-[50%] flex-col overflow-hidden border-primary/7'
        }
      >
        <button
          id="close-banner"
          aria-label="close-banner"
          className="absolute right-0 m-4 flex rounded-md  hover:bg-gray-1/10"
          onClick={handleClose}
        >
          <X size={32} className="text-white" />
        </button>

        <Image
          src={getImage(`/banners/Ban_Internext_800x450_${languageForImage.languageForImage}.jpg`)}
          alt="File Arrow Up icon"
          width={800}
          height={110}
          quality={100}
          style={{ cursor: 'pointer' }}
          onClick={() => handleOnClick()}
        />
      </div>
    </div>
  );
};

export default BitdefenderBanner;
