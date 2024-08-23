import { GlobalDialog, useGlobalDialog } from '@/contexts/GlobalUIManager';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { goToSignUpURL } from '@/lib/auth';
import Button from '../shared/Button';
import { CheckCircle, X } from '@phosphor-icons/react';
import Image from 'next/image';
import { getImage } from '@/lib/getImage';
import { event } from '@/lib/gtag';

export const FreeCardPromoBanner = () => {
  const router = useRouter();
  const lang = router.locale;

  const { dialogIsOpen, closeDialog } = useGlobalDialog();
  const [shouldShowBanner, setShouldShowBanner] = useState<boolean>(false);
  const bannerText = require(`@/assets/lang/${lang}/banners.json`);

  const isDialogOpen = dialogIsOpen(GlobalDialog.FreeSpaceCardBanner);

  useEffect(() => {
    setShouldShowBanner(dialogIsOpen(GlobalDialog.FreeSpaceCardBanner));
  }, [isDialogOpen]);

  const onCloseBanner = () => {
    closeDialog(GlobalDialog.FreeSpaceCardBanner);
  };

  const onGetTheDealButtonClicked = () => {
    event({
      action: 'redirect_button',
      category: 'Free card promo',
      label: 'User accepts the promo',
      value: '',
    });
    router.push('/specialoffer/freeuser');
    onCloseBanner();
  };

  const onContinueWithFreePlanButtonClicked = () => {
    event({
      action: 'redirect_button',
      category: 'Free card promo',
      label: 'User decline the promo',
      value: '',
    });
    goToSignUpURL();
  };

  return (
    <div
      className={`${shouldShowBanner ? 'flex' : 'hidden'} 
         fixed top-0 left-0 right-0 bottom-0 z-50 h-screen w-full bg-black bg-opacity-50 px-5`}
    >
      <div className="flex w-full flex-col items-center justify-center">
        {/* absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 */}
        <div
          className={`relative flex h-auto w-full flex-col overflow-hidden rounded-2xl
        text-neutral-900 lg:w-full lg:max-w-6xl`}
          style={{
            backgroundImage: `url(${getImage('/images/banners/freeCardPromoBanner/bg.webp')})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        >
          <button className="absolute top-0 right-0 z-50 m-5 flex w-auto text-gray-100" onClick={onCloseBanner}>
            <X size={32} />
          </button>
          <div className="flex flex-col items-center gap-12 px-5 pt-16 pb-10 lg:flex-row lg:justify-between lg:py-10 lg:pl-10">
            <div className="flex w-full max-w-[500px] flex-col items-center gap-12 text-center lg:items-start lg:text-left">
              <div className="flex flex-col gap-4 text-center lg:text-left">
                <h2 className="text-3xl font-bold leading-tight text-gray-100 md:text-5xl">
                  {bannerText.FreeCardPromoBanner.title}
                </h2>
                <p className="text-xl font-semibold leading-tight text-gray-100 md:text-2xl">
                  <span className="text-primary">{bannerText.FreeCardPromoBanner.subtitle.blue}</span>
                  {bannerText.FreeCardPromoBanner.subtitle.normal}
                </p>
              </div>
              <div className="flex flex-col items-center gap-6 lg:flex-row">
                <Button text={bannerText.FreeCardPromoBanner.getDealCta} onClick={onGetTheDealButtonClicked} />
                <button
                  className="text-xl font-medium text-primary underline hover:no-underline"
                  onClick={onContinueWithFreePlanButtonClicked}
                >
                  {bannerText.FreeCardPromoBanner.freePlanCta}
                </button>
              </div>
              <div className="flex flex-row space-x-3 pt-2">
                <CheckCircle size={24} className="text-primary" weight="bold" />
                <p className="font-medium text-gray-100 lg:text-lg">{bannerText.FreeCardPromoBanner.guarantee}</p>
              </div>
            </div>
            <div className="hidden lg:flex">
              <Image
                src={getImage('/images/banners/freeCardPromoBanner/image_internxt.webp')}
                alt="Free Card Promo Banner"
                width={500}
                height={359}
                className="translate-y-5 translate-x-5"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
