import { PricingText } from '@/assets/types/pricing';
import { GlobalDialog, useGlobalDialog } from '@/contexts/GlobalUIManager';
import { Backpack, Check } from '@phosphor-icons/react';
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
    <div className={`${shouldShowBanner ? 'flex' : 'hidden'} relative flex-col overflow-hidden`}>
      <div
        style={{
          backgroundImage: `url('${bgImage}')`,
          backgroundPosition: '0% 100%',
          backgroundSize: '100%',
        }}
        className={
          'relative z-10 hidden  flex-col overflow-hidden rounded-32 lg:flex lg:flex-row xl:w-[1025px] 1.5xl:w-[1150px] 2xl:w-[1300px]'
        }
      >
        <div className={`flex  flex-col items-center text-center lg:flex-row lg:items-start lg:text-left  `}>
          <div className="mx-10 my-10 flex h-[341px] w-[740px] flex-col justify-between rounded-20 bg-white-summer px-8 text-center backdrop-blur-[6px] lg:items-start lg:text-left 2xl:w-[755px]">
            <div className="flex flex-col">
              <div className="flex flex-row items-center gap-3 pt-10">
                <p className=" rounded-2 bg-white-summer-2 px-1 py-0.5 text-xl font-semibold text-primary">
                  {textContent.label}
                </p>
                <p className="text-4xl font-semibold text-gray-100">{textContent.title}</p>
              </div>
              <div className="flex w-[700px] flex-col space-y-2 pt-3">
                <p className="font-regular text-lg text-gray-100 sm:text-lg md:text-lg lg:text-2xl">
                  {textContent.subtitle}
                </p>
                <div className="flex flex-row items-start gap-1 pt-2 lg:gap-2">
                  <Check className="mt-1 text-primary" weight="bold" size={20} />
                  <p className=" text-left text-sm font-normal text-gray-100 lg:pt-0 lg:text-lg">
                    {textContent.subtitle2}
                  </p>
                </div>
                <div className="flex flex-row items-start gap-1 lg:gap-2">
                  <Check className="mt-1 text-primary" weight="bold" size={20} />
                  <p className=" text-left text-sm font-normal text-gray-100 lg:pt-0 lg:text-lg">
                    {textContent.subtitle3}
                  </p>
                </div>
              </div>
              <div className=" flex w-[600px] flex-col items-start pt-6">
                <div className="flex w-full flex-row items-center gap-4  ">
                  <Link
                    href={redirectTo ?? '#billingButtons'}
                    className="font-regular text-md flex w-1/2 items-center justify-center rounded-lg bg-primary px-3 py-2 text-center text-white hover:bg-primary/95 sm:px-5 sm:py-2"
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
                    <p className="font-regular pt-1.5 text-base text-gray-100 sm:text-base md:pb-1">
                      {textContent.guarantee}
                    </p>
                  </div>
                </div>
                <p className="font-regular h-[10px] pt-3 text-center text-sm text-gray-50 sm:text-sm lg:text-left">
                  {textContent.lastCta}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Banner móvil */}
      <div
        style={{
          backgroundImage: `url('${bgImage}')`,
          backgroundPosition: '90% 90%',
          backgroundSize: '280%',
        }}
        className={'relative z-10 flex w-screen flex-col justify-between py-5 pb-72 md:pb-[1000px] lg:hidden'}
      >
        <div className="mx-4 flex flex-col items-center gap-2 rounded-2xl bg-white-summer px-2 py-4 text-center backdrop-blur-[6px] lg:items-start lg:text-left">
          <div className="flex w-max items-center bg-white-summer-2 px-1 py-0.5">
            <p className="text-sm font-semibold text-primary">{textContent.label}</p>
          </div>
          <div className="flex w-full flex-col pt-1">
            <p className="text-2xl font-semibold text-gray-100">{textContent.title}</p>
            <p className="font-regular pt-3 text-center text-lg  text-gray-100">{textContent.subtitle}</p>
          </div>
          <div className="flex w-full flex-row items-center justify-start gap-2 px-4 pt-4">
            <Image
              src={getImage('/images/campaigns/world_environment_day/shield-blue.svg')}
              alt="Internxt Blue Shield check"
              width={24}
              height={24}
            />
            <p className="whitespace-nowrap pt-0.5 text-sm font-medium text-gray-100">{textContent.guarantee}</p>
          </div>
          <div className="flex w-full flex-row items-center justify-start gap-2 px-4 pb-2">
            <Backpack size={24} className="text-primary" weight="fill" />
            <p className="whitespace-nowrap pt-0.5 text-sm font-medium text-gray-100">{textContent.gift}</p>
          </div>
          <div className="flex w-full flex-row items-center justify-start gap-2 px-0 pb-2">
            <Link
              href={redirectTo ?? '#billingButtons'}
              className=" font-regular z-20 mx-4 flex w-full items-center justify-center rounded-sm-6  bg-primary px-4 py-3 text-center text-base text-white hover:bg-primary/95  sm:py-3 sm:text-lg"
            >
              {textContent.cta}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
