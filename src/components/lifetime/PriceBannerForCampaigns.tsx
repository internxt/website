import { PricingText } from '@/assets/types/pricing';
import { GlobalDialog, useGlobalDialog } from '@/contexts/GlobalUIManager';

import { Backpack, CheckCircle } from '@phosphor-icons/react';
import Link from 'next/link';
import { getImage } from '@/lib/getImage';
import Image from 'next/image';
export const PriceBannerForCampaigns = ({
  textContent,
  redirectTo,
}: {
  textContent: PricingText['tableSection']['ctaBanner'];
  redirectTo?: string;
}) => {
  const globalDialog = useGlobalDialog();
  const shouldShowBanner = globalDialog.dialogIsOpen(GlobalDialog.PriceBannerForCampaigns);
  const bgImage = getImage('/images/campaigns/summer/SummerCampaign.png');
  return (
    <div className={`${shouldShowBanner ? 'flex' : 'hidden'} relative flex-col overflow-hidden `}>
      <div
        style={{
          backgroundImage: `url('${bgImage}')`,
          backgroundPosition: 'center bottom',
          backgroundSize: '100%',
        }}
        className={
          'w- relative  z-10 hidden w-[1400px] flex-col overflow-hidden rounded-[16px] sm:gap-40 sm:rounded-[32px] lg:flex lg:flex-row'
        }
      >
        <div className=" flex  w-full flex-col items-center  text-center lg:flex-row lg:items-start  lg:pl-10  lg:text-left">
          <div className="my-10 flex flex-col items-center gap-2 rounded-3xl bg-white-summer px-8 text-center backdrop-blur-[6px] lg:items-start lg:text-left">
            <div className="flex flex-row items-center gap-4 pt-10">
              <p className="bg-white-summer-2 px-1 py-0.5 text-xl font-semibold text-primary">{textContent.label}</p>
              <p className="text-4xl font-semibold text-gray-100">
                {textContent.title.line1}
                {textContent.title.line2}
              </p>
            </div>

            <div className="flex w-full flex-col space-y-2">
              <p className="font-regular whitespace-nowrap text-lg text-gray-100 sm:text-lg md:text-lg lg:text-2xl">
                {textContent.subtitle}
              </p>
              <p className="font-regular whitespace-nowrap text-lg text-gray-100 sm:text-lg md:text-lg lg:text-lg">
                {textContent.subtitle2}
              </p>
            </div>
            <div className="flex w-full flex-col items-center gap-2 pt-14 sm:gap-4 lg:flex-row">
              <Link
                href={redirectTo ?? '#billingButtons'}
                className="flex w-1/2 items-center justify-center rounded-lg bg-primary px-3 py-2 text-center font-medium text-white hover:bg-primary/95 sm:px-5 sm:py-2 sm:text-lg"
              >
                {textContent.cta}
              </Link>
              <div className="flex flex-row items-center justify-center space-y-1 sm:space-x-2">
                <CheckCircle size={20} className="text-primary" weight="fill" />
                <p className="whitespace-nowrap text-base font-medium text-gray-100 sm:text-lg md:pb-1">
                  {textContent.guarantee}
                </p>
              </div>
            </div>
            <p className="whitespace-nowrap pb-8 pt-4 text-sm font-medium text-gray-50 sm:text-sm">
              {textContent.lastCta}
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url('${bgImage}')`,
          backgroundPosition: '90% 90%',
          backgroundSize: '280%',
        }}
        className={'relative z-10 flex w-screen flex-col justify-between py-5 pb-80 md:pb-[1000px] lg:hidden'}
      >
        <div className="mx-4 my-10 flex flex-col items-center gap-2 rounded-2xl bg-white-summer px-6 py-4 text-center backdrop-blur-[6px] lg:items-start lg:text-left">
          <div className="flex w-max items-center bg-white-summer-2 px-1 py-0.5">
            <p className="text-sm font-semibold text-primary">{textContent.label}</p>
          </div>
          <div className="flex w-full flex-col ">
            <p className="text-3xl font-semibold text-gray-100">{textContent.title.line1}</p>
            <p className="text-3xl font-semibold text-gray-100">{textContent.title.line2}</p>
          </div>

          <div className="min-h-auto flex flex-col items-center space-y-2 py-3">
            <p className="font-regular text-center text-lg  text-gray-100">{textContent.subtitle}</p>
          </div>
          <div className="flex w-full flex-row items-center justify-start gap-2">
            <Image
              src={getImage('/images/campaigns/world_environment_day/shield-blue.svg')}
              alt="Internxt Blue Shield check"
              width={24}
              height={24}
            />
            <p className="whitespace-nowrap pt-0.5 text-sm font-medium text-gray-100">{textContent.guarantee}</p>
          </div>
          <div className="flex w-full flex-row items-center justify-start gap-2">
            <Backpack size={24} className="text-primary" weight="fill" />
            <p className="whitespace-nowrap pt-0.5 text-sm font-medium text-gray-100">{textContent.gift}</p>
          </div>

          <Link
            href={redirectTo ?? '#billingButtons'}
            className=" z-20 flex w-full items-center justify-center rounded-lg bg-primary px-2 py-3 text-center text-base font-medium text-white hover:bg-primary/95  sm:py-3 sm:text-lg"
          >
            {textContent.cta}
          </Link>
        </div>
      </div>
    </div>
  );
};
