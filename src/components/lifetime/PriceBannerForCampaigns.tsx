import { PricingText } from '@/assets/types/pricing';
import { GlobalDialog, useGlobalDialog } from '@/contexts/GlobalUIManager';
import { Check, TShirt } from '@phosphor-icons/react';
import Link from 'next/link';
import { getImage } from '@/lib/getImage';
import Image from 'next/image';
import styles from '@/components/privacy/HeroSection.module.scss';

export const PriceBannerForCampaigns = ({
  textContent,
  redirectTo,
}: {
  textContent: PricingText['tableSection']['ctaBanner'];
  redirectTo?: string;
}) => {
  const globalDialog = useGlobalDialog();
  const shouldShowBanner = globalDialog.dialogIsOpen(GlobalDialog.PriceBannerForCampaigns);
  const bgImage = getImage('/images/campaigns/5th-anniversary/confetti.webp');
  const bgImage2 = getImage('/images/campaigns/5th-anniversary/visual (hero).webp');

  return (
    <div
      className={`${shouldShowBanner ? 'flex' : 'hidden'} relative flex-col overflow-hidden lg:rounded-32  ${
        styles.horizontalLinearGardient
      }`}
    >
      <div
        className={`relative z-10 hidden h-[426px]  flex-col overflow-hidden rounded-32 lg:flex lg:flex-row xl:w-[1025px] 1.5xl:w-[1150px] 2xl:w-[1300px]`}
        style={{
          backgroundImage: ` url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div
          className={`flex flex-col items-center overflow-hidden text-center lg:flex-row lg:items-start lg:text-left `}
        >
          <div
            className={`${styles.titleAndOnePlanSection} my-10 ml-10 flex h-[341px] w-[740px] flex-col justify-between rounded-20 px-8 text-center backdrop-blur-[6px] lg:items-start lg:text-left 2xl:w-[646px]`}
          >
            <div className="flex flex-col">
              <div className="flex flex-row items-center gap-3 pt-10">
                <p className="rounded-2 bg-gray-95/30 px-1 py-0.5 text-xl font-semibold text-primary">
                  {textContent.label}
                </p>
                <p className="text-2xl font-normal text-white">{textContent.title}</p>
              </div>
              <div className="flex w-[700px] flex-col space-y-2 pt-3">
                <p className="text-lg font-semibold text-white sm:text-lg md:text-lg lg:text-4xl">
                  {textContent.subtitle}
                </p>
                <div className="flex flex-row items-start gap-1 pt-2 lg:gap-2">
                  <Check className="mt-1 text-primary" weight="bold" size={20} />
                  <p className=" text-left text-sm font-normal text-white lg:pt-0 lg:text-lg">
                    {textContent.subtitle2}
                  </p>
                </div>
                <div className="flex flex-row items-start gap-1 lg:gap-2">
                  <Check className="mt-1 text-primary" weight="bold" size={20} />
                  <p className=" text-left text-sm font-normal text-white lg:pt-0 lg:text-lg">
                    {textContent.subtitle3}
                  </p>
                </div>
              </div>
              <div className=" flex w-[600px] flex-col items-start pt-6">
                <div className="flex w-full flex-row items-center gap-4  ">
                  <Link
                    href={redirectTo ?? '#billingButtons'}
                    className="flex w-1/2 items-center justify-center rounded-lg bg-primary px-3 py-2 text-center text-base font-medium text-white hover:bg-primary/95 sm:px-5 sm:py-2"
                  >
                    {textContent.cta}
                  </Link>
                  <div className="flex flex-row items-center justify-center space-x-2">
                    <Image
                      src={getImage('/images/campaigns/world_environment_day/shield-blue.svg')}
                      alt="Internxt Blue Shield check"
                      width={24}
                      height={24}
                      className="hidden md:block"
                    />
                    <p className="pt-1.5 text-base font-medium text-white sm:text-base md:pb-1">
                      {textContent.guarantee}
                    </p>
                  </div>
                </div>
                <p className="h-[10px] pt-3 text-center text-sm font-medium text-gray-25 sm:text-sm lg:text-left">
                  {textContent.lastCta}
                </p>
              </div>
            </div>
          </div>

          <Image
            src={getImage('/images/campaigns/5th-anniversary/visual (pricing).webp')}
            alt="Internxt 5th anniversary"
            width={568}
            height={502}
            quality={100}
          />
        </div>
      </div>

      {/* Banner móvil */}
      <div
        style={{
          backgroundImage: `url('${bgImage}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        className={'relative z-10 flex h-[630px] w-screen flex-col justify-between py-5 md:pb-[1000px] lg:hidden'}
      >
        <div
          className={`mx-4 flex flex-col items-center gap-2 rounded-2xl ${styles.titleAndOnePlanSection} px-2 py-4 text-center backdrop-blur-[6px] lg:items-start lg:text-left`}
        >
          <div className="flex w-max items-center rounded-2 bg-gray-95/30 px-1 py-0.5">
            <p className="text-sm font-semibold text-primary">{textContent.label}</p>
          </div>
          <div className="flex w-full flex-col pt-1">
            <p className="text-lg font-normal text-white">{textContent.title}</p>
            <p className="pt-3 text-center text-2xl font-semibold  text-white">{textContent.subtitle}</p>
          </div>
          <div className="flex w-full flex-row items-center justify-start gap-2 px-4 pt-4">
            <Image
              src={getImage('/images/campaigns/world_environment_day/shield-blue.svg')}
              alt="Internxt Blue Shield check"
              width={24}
              height={24}
            />
            <p className="whitespace-nowrap pt-0.5 text-sm font-medium text-white">{textContent.guarantee}</p>
          </div>
          <div className="flex w-full flex-row items-center justify-start gap-2 px-4 pb-2">
            <TShirt size={24} className="text-primary" />
            <p className="whitespace-nowrap pt-0.5 text-sm font-medium text-white">{textContent.gift}</p>
          </div>
          <div className="flex w-full flex-row items-center justify-start gap-2 px-0 pb-2">
            <Link
              href={redirectTo ?? '#billingButtons'}
              className="z-20 mx-4 flex w-full items-center justify-center rounded-sm-6 bg-primary  px-4 py-3 text-center text-base font-normal text-white hover:bg-primary/95  sm:py-3 sm:text-lg"
            >
              {textContent.cta}
            </Link>
          </div>
        </div>
        <div className="relative h-[320px] w-full ">
          <Image
            src={getImage('/images/campaigns/5th-anniversary/visual (mobile).webp')}
            alt="Internxt 5th anniversary"
            width={568}
            height={311}
            quality={100}
            className="absolute -top-4 right-1/2 z-10 translate-x-1/2 pr-8"
          />
          <Image
            src={getImage('/images/campaigns/5th-anniversary/logos (mobile).webp')}
            alt="Internxt x Valencia logo"
            width={230}
            height={100}
            quality={100}
            className="absolute bottom-0 left-1/2 z-10 -translate-x-1/2"
          />
        </div>
      </div>
    </div>
  );
};
