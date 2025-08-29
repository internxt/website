import { GlobalDialog, useGlobalDialog } from '@/contexts/GlobalUIManager';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { goToSignUpURL } from '@/lib/auth';
import Button from '../shared/Button';
import { CellTower, CloudArrowUp, Envelope, ShieldPlus, Sparkle, VideoConference, X } from '@phosphor-icons/react';
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
    router.push('/specialoffer/exclusiveoffer');
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

  const products = [
    {
      icon: CloudArrowUp,
      text: bannerText.FreeCardPromoBanner.products.drive,
    },
    {
      icon: ShieldPlus,
      text: bannerText.FreeCardPromoBanner.products.antivirus,
    },
    {
      icon: Sparkle,
      text: bannerText.FreeCardPromoBanner.products.cleaner,
    },
    {
      icon: CellTower,
      text: bannerText.FreeCardPromoBanner.products.vpn,
    },
    {
      icon: VideoConference,
      text: bannerText.FreeCardPromoBanner.products.meet,
    },
    {
      icon: Envelope,
      text: bannerText.FreeCardPromoBanner.products.mail,
    },
  ];

  return (
    <div
      className={`${shouldShowBanner ? 'flex' : 'hidden'} 
         fixed bottom-0 left-0 right-0 top-0 z-50 h-screen w-full bg-black bg-opacity-50 px-5`}
    >
      <div className="flex w-full flex-col items-center justify-center">
        <div
          className={`relative flex h-auto w-full flex-col overflow-hidden rounded-2xl
        text-neutral-900 lg:w-full lg:max-w-6xl`}
          style={{
            background: 'linear-gradient(360deg, #E5EFFF 0%, #FFFFFF 100%)',
          }}
        >
          <button className="absolute right-0 top-0 z-50 m-5 flex w-auto text-gray-100" onClick={onCloseBanner}>
            <X size={32} />
          </button>
          <div className="flex flex-col items-center gap-12 px-5 pb-10 pt-16 lg:flex-row lg:justify-between lg:py-10 lg:pl-10">
            <div className="flex w-[650px] w-full flex-col items-center gap-8  text-center lg:items-start lg:text-left">
              <div className="flex flex-col gap-5 text-center lg:text-left">
                <span className="font-regular flex flex-row gap-3 text-30 leading-tight text-gray-100 md:text-xl">
                  <p className="rounded-2 bg-neutral-17 px-1 py-0.5 font-semibold text-primary">
                    {bannerText.FreeCardPromoBanner.header.primaryText}
                  </p>
                  {bannerText.FreeCardPromoBanner.header.afterPrimaryText}
                </span>
                <span className="flex flex-col justify-center gap-4">
                  <p className="text-30 font-bold leading-tight text-gray-100 md:text-3xl">
                    {bannerText.FreeCardPromoBanner.title}
                  </p>
                  <p className="text-xl font-semibold leading-tight text-gray-100 lg:text-2xl">
                    <span className="text-primary">{bannerText.FreeCardPromoBanner.subtitle.blue}</span>
                    {bannerText.FreeCardPromoBanner.subtitle.normal}
                  </p>
                </span>
              </div>
              <div className="flex w-full flex-col justify-center gap-4">
                <div className="flex flex-col items-center gap-4 lg:flex-row">
                  <Button text={bannerText.FreeCardPromoBanner.getDealCta} onClick={onGetTheDealButtonClicked} />
                  <Button
                    text={bannerText.FreeCardPromoBanner.freePlanCta}
                    onClick={onContinueWithFreePlanButtonClicked}
                    className="border-[1.5px] border-primary bg-transparent"
                    textColor="text-primary"
                  />
                </div>
                <div className="flex flex-row items-center gap-2">
                  <Image
                    src={getImage('/images/campaigns/world_environment_day/shield-blue.svg')}
                    alt="Internxt Blue Shield check"
                    width={24}
                    height={24}
                  />
                  <p className="font-medium text-gray-100 lg:text-lg">{bannerText.FreeCardPromoBanner.guarantee}</p>
                </div>
              </div>

              <div className="flex w-full flex-wrap items-start justify-start gap-2 lg:flex-nowrap lg:justify-between">
                {products.map((feature, index) => (
                  <div
                    key={index}
                    className="flex h-6 w-min flex-row items-center justify-center gap-1 rounded bg-white/50 px-1 py-0.5 shadow-sm lg:h-8 lg:px-2 lg:py-1"
                  >
                    <feature.icon className="h-5 w-5 text-primary lg:h-6 lg:w-6" />
                    <p className="whitespace-nowrap text-sm font-medium leading-tight text-gray-80">{feature.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden lg:flex">
              <Image
                src={getImage('/images/banners/freeCardPromoBanner/image_internxt.webp')}
                alt="Free Card Promo Banner"
                width={500}
                height={359}
                className="translate-x-5 translate-y-5"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
