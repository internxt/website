import { GlobalDialog, useGlobalDialog } from '@/contexts/GlobalUIManager';
import { CheckCircle, X } from '@phosphor-icons/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Button from '../shared/Button';
import Image from 'next/image';

export const FreeCardPromoBanner = () => {
  const router = useRouter();
  const lang = router.locale;

  const { dialogIsOpen, closeDialog } = useGlobalDialog();
  const [shouldShowBanner, setShouldShowBanner] = useState<boolean>(false);
  const bannerText = require(`@/assets/lang/${lang}/banners.json`);

  const isDialogOpen = dialogIsOpen(GlobalDialog.FreeSpaceCardBanner);

  const onCloseBanner = () => {
    closeDialog(GlobalDialog.FreeSpaceCardBanner);
  };

  useEffect(() => {
    setShouldShowBanner(dialogIsOpen(GlobalDialog.FreeSpaceCardBanner));
  }, [isDialogOpen]);

  return (
    <div
      className={`${shouldShowBanner ? 'flex' : 'hidden'} 
         fixed top-0 left-0 right-0 bottom-0 z-50 h-screen bg-black bg-opacity-50 lg:px-0`}
    >
      <div
        className={`absolute left-1/2 top-1/2 flex h-auto max-w-6xl -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden
        rounded-2xl px-5 text-neutral-900 lg:w-full`}
        style={{
          backgroundImage: 'url(/images/banners/freeCardPromoBanner/bg.webp)',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <button className="absolute right-0 z-50 m-5 flex w-auto text-gray-100" onClick={onCloseBanner}>
          <X size={32} />
        </button>
        <div className="flex w-full flex-col items-center justify-between gap-12 py-10 px-5 lg:flex-row lg:px-0 lg:pl-10">
          <div className="flex max-w-[500px] flex-col items-center space-y-12 text-center lg:items-start lg:text-left">
            <div className="flex flex-col gap-4 text-center lg:text-left">
              <h2 className="text-5xl font-bold leading-tight text-gray-100">{bannerText.FreeCardPromoBanner.title}</h2>
              <p className="text-2xl font-semibold leading-tight text-gray-100">
                <span className="text-primary">{bannerText.FreeCardPromoBanner.subtitle.blue}</span>
                {bannerText.FreeCardPromoBanner.subtitle.normal}
              </p>
            </div>
            <div className="flex flex-col items-center gap-6 lg:flex-row">
              <Button
                text={bannerText.FreeCardPromoBanner.getDealCta}
                onClick={() => {
                  router.push('');
                }}
              />
              <button
                className="text-xl font-medium text-primary underline hover:no-underline"
                onClick={() => {
                  router.push('/specialoffer/freeuser');
                }}
              >
                {bannerText.FreeCardPromoBanner.freePlanCta}
              </button>
            </div>
            <div className="flex flex-row items-center space-x-3 pt-2">
              <CheckCircle size={24} className="text-primary" weight="bold" />
              <p className="whitespace-nowrap font-medium text-gray-100 lg:text-lg">
                {bannerText.FreeCardPromoBanner.guarantee}
              </p>
            </div>
          </div>
          <div className="hidden lg:flex">
            <Image
              src="/images/banners/freeCardPromoBanner/image_internxt.webp"
              alt="Free Card Promo Banner"
              width={500}
              height={359}
              className="translate-y-5 translate-x-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
