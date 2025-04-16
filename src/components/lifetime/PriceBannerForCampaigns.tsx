import { PricingText } from '@/assets/types/pricing';
import { GlobalDialog, useGlobalDialog } from '@/contexts/GlobalUIManager';
import { getImage } from '@/lib/getImage';
import { CheckCircle } from '@phosphor-icons/react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/components/black-friday/BF-HeroSection.module.scss';

export const PriceBannerForCampaigns = ({
  textContent,
  redirectTo,
}: {
  textContent: PricingText['tableSection']['ctaBanner'];
  redirectTo?: string;
}) => {
  const globalDialog = useGlobalDialog();
  const shouldShowBanner = globalDialog.dialogIsOpen(GlobalDialog.PriceBannerForCampaigns);
  return (
    <div className={`${shouldShowBanner ? 'flex' : 'hidden'} relative flex-col overflow-hidden `}>
      {/* Desktop View */}
      <div
        className={`${styles.linearGradient} relative z-10 hidden w-full min-w-[1200px] max-w-[1200px] flex-col overflow-hidden rounded-[16px] sm:gap-40 sm:rounded-[32px] lg:flex lg:flex-row`}
        style={{ backgroundImage: `url('${getImage('/images/campaigns/starwars/bg.webp')}')` }}
      >
        <div className=" flex h-[400px] w-full flex-col items-center text-center lg:flex-row lg:items-start lg:pl-10  lg:text-left">
          <div className="flex min-h-[400px] min-w-[600px]  max-w-[800px]  flex-col items-center gap-2 text-center lg:items-start lg:text-left">
            <div className="mt-14 flex w-max rounded-xl border-4 border-primary bg-gray-100 px-2 py-4 sm:rounded-2xl sm:px-4 sm:py-2">
              <p className="text-xl font-bold text-white sm:text-2xl md:text-5xl">{textContent.label}</p>
            </div>
            <div className="flex w-full flex-col pt-4 ">
              <p className=" flex min-h-[42px] max-w-[600px] items-center pb-2 text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-4xl">
                {textContent.title}
              </p>
              <p className="whitespace-nowrap text-lg font-medium text-white sm:text-lg md:text-lg lg:text-lg">
                {textContent.subtitle}
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 pt-2 sm:gap-4 lg:flex-row">
              <Link
                href={redirectTo ?? '#billingButtons'}
                className="flex w-max items-center rounded-lg bg-primary px-3 text-base font-medium text-white hover:bg-primary/95 sm:px-5 sm:py-2 sm:text-lg"
              >
                {textContent.cta}
              </Link>
              <div className="flex flex-row items-center space-y-1 text-white sm:space-x-2">
                <CheckCircle size={20} className="text-green-1" weight="fill" />
                <p className="whitespace-nowrap text-base font-medium text-white sm:text-lg">{textContent.guarantee}</p>
              </div>
            </div>
            <p className="whitespace-nowrap pt-4 text-sm font-medium text-gray-30 sm:text-sm">{textContent.lastCta}</p>
          </div>
          <div className="relative flex h-[400px] w-[600px] items-center overflow-hidden pl-24">
            <Image
              src={getImage('/images/campaigns/starwars/internxt_may4th_2.webp')}
              width={400}
              height={400}
              alt="World Secure Day"
            />
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div
        className={`${styles.linearGradient} relative z-10 flex w-screen  flex-col justify-between lg:hidden`}
        style={{ backgroundImage: `url('${getImage('/images/campaigns/starwars/bg.webp')}')` }}
      >
        <div className="flex w-full flex-col items-center space-y-5 px-2 py-6 text-center">
          <div className="flex w-max rounded-xl border-2 border-primary  bg-gray-100 px-2 py-1">
            <p className="text-sm font-medium text-white">{textContent.label}</p>
          </div>
          <div className="flex w-full flex-col px-4 text-gray-100">
            <p className="text-4xl font-bold text-white">{textContent.titleMbl}</p>
          </div>
          <div className="min-h-auto flex flex-col items-center ">
            <p className="font-regular break-words text-center text-lg font-bold text-white">
              {textContent.subtitleMbl}
            </p>
            <p className="font-regular break-words text-center text-lg text-white ">{textContent.descriptionMbl}</p>
          </div>

          <div className="flex flex-col items-center">
            <Link
              href={redirectTo ?? '#billingButtons'}
              className="flex w-max items-center rounded-lg bg-primary px-5 py-3 text-base font-medium text-white hover:bg-primary/95 sm:px-5 sm:py-3 sm:text-lg"
            >
              {textContent.cta}
            </Link>
            <div className="mb-2 flex flex-row items-center space-x-1 pt-3 text-gray-80">
              <CheckCircle size={20} className="text-green-1" weight="fill" />
              <p className="whitespace-nowrap text-sm font-medium text-white">{textContent.guarantee}</p>
            </div>
          </div>
        </div>

        <div className="relative flex h-auto w-full flex-col items-center px-20 pb-10 xl:hidden">
          <Image
            src={getImage('/images/campaigns/starwars/internxt_may4th_2.webp')}
            width={425}
            height={263}
            objectFit="contain"
            alt="Dust for scorer"
            className="top-10 -z-10 max-w-[300px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};
