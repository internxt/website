import { PricingText } from '@/assets/types/pricing';
import { GlobalDialog, useGlobalDialog } from '@/contexts/GlobalUIManager';
import { getImage } from '@/lib/getImage';
import { ArrowCircleDown, CheckCircle } from '@phosphor-icons/react';
import Image from 'next/image';
import Link from 'next/link';

export const PriceBannerForCampaigns = ({
  textContent,
  redirectTo,
}: {
  textContent: PricingText['tableSection']['ctaBanner'];
  redirectTo?: string;
}) => {
  const globalDialog = useGlobalDialog();
  const shouldShowBanner = globalDialog.dialogIsOpen(GlobalDialog.PriceBannerForCampaigns);
  const blurBgImage = getImage('/images/campaigns/euro/grass.webp');
  return (
    <div className={`${shouldShowBanner ? 'flex' : 'hidden'} relative flex-col overflow-hidden px-3 sm:px-5`}>
      {/* Desktop View */}
      <div
        className={`relative z-10 hidden w-full min-w-[1200px] max-w-[1200px] flex-col  rounded-[16px] border border-2 border-gray-5 bg-white sm:gap-40 sm:rounded-[32px] lg:flex lg:flex-row`}
      >
        <div className=" flex min-h-[400px] w-full   flex-col items-center  py-6 text-center lg:flex-row lg:items-start lg:pl-10  lg:text-left">
          <div className="flex min-h-[400px] min-w-[600px]  max-w-[600px] flex-col items-center gap-2  text-center lg:items-start lg:text-left">
            <div className="mt-8 flex w-max rounded-xl border-2 border-pink bg-pink-dark px-2 py-5 sm:rounded-2xl sm:border-4 sm:px-4 sm:py-2">
              <p className="text-xl font-bold text-white sm:text-2xl md:text-5xl">{textContent.label}</p>
            </div>
            <div className="flex w-full flex-col pt-5 ">
              <p className=" flex min-h-[86px] max-w-[450px] items-center bg-white text-2xl font-bold text-gray-80 sm:text-3xl md:text-4xl lg:text-4xl">
                {textContent.title}
              </p>
              <p className="whitespace-nowrap pt-2 text-lg font-medium text-gray-80 sm:text-lg md:text-lg lg:text-lg">
                {textContent.subtitle}
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 pt-4 sm:gap-4 lg:flex-row">
              <Link
                href={redirectTo ?? '#billingButtons'}
                className="flex w-max items-center rounded-lg bg-gray-5 px-3 py-2 text-base font-medium text-gray-80 hover:bg-primary/95 sm:px-5 sm:py-3 sm:text-lg"
              >
                {textContent.cta}
              </Link>
              <div className="flex flex-row items-center space-y-1 text-white sm:space-x-2">
                <CheckCircle size={20} className="text-green-1" weight="fill" />
                <p className="whitespace-nowrap text-base font-medium text-gray-80 sm:text-lg">
                  {textContent.guarantee}
                </p>
              </div>
            </div>
            <p className="whitespace-nowrap pt-6 text-sm font-medium text-gray-30 sm:text-sm">{textContent.lastCta}</p>
          </div>
          <div className="relative flex min-h-[400px] min-w-[500px] max-w-[500px] items-center">
            <Image
              src={getImage('/images/campaigns/valentines/internxt_valentines_sale2025.webp')}
              width={525}
              height={263}
              alt="Dust for scorer"
            />
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div
        className={`relative z-10 flex w-full flex-col justify-between gap-10 rounded-[16px] border-4 border-gray-5 bg-white lg:hidden`}
      >
        <div className="flex w-full flex-col items-center  space-y-5 px-2 py-6 text-center">
          <div className="flex w-max rounded-xl border-4 border-pink bg-red-dark px-2 py-3">
            <p className="text-4xl font-bold text-white sm:text-5xl">{textContent.label}</p>
          </div>
          <div className="flex w-full flex-col text-gray-80">
            <p className="text-4xl font-bold">{textContent.titleMbl1}</p>
            <p className="text-4xl font-bold">{textContent.titleMbl2}</p>
          </div>
          <div className="min-h-auto flex max-w-[250px] flex-col items-center ">
            <p className="font-regular break-words text-center text-xl text-gray-80">{textContent.subtitle}</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="mb-2 flex flex-row items-center space-x-1 pt-2 text-gray-80">
              <CheckCircle size={20} className="text-green-1" weight="fill" />
              <p className="whitespace-nowrap text-sm font-medium">{textContent.guarantee}</p>
            </div>
          </div>
        </div>

        <div className="relative flex h-full w-full flex-col xl:hidden">
          <Image
            src={getImage('/images/campaigns/valentines/internxt_valentines_sale2025.webp')}
            width={525}
            height={263}
            alt="Dust for scorer"
            className="top-10 -z-10 w-full object-cover"
          />
          <ArrowCircleDown
            className="absolute bottom-4 left-40 translate-x-1/2 transform animate-float-sock text-pink-dark"
            size={40}
          />
        </div>
      </div>
    </div>
  );
};
