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
    <div className={`${shouldShowBanner ? 'flex' : 'hidden'} relative flex-col overflow-hidden px-3 sm:px-5`}>
      {/* Desktop View */}
      <div
        className={`relative z-10 hidden w-full flex-col justify-between rounded-[16px] bg-primary sm:gap-40 sm:rounded-[32px] lg:flex lg:flex-row`}
      >
        <div className="flex max-h-[384px] w-full min-w-[800px] flex-col items-center gap-6 px-2 py-6 text-center lg:flex-row lg:items-start lg:pl-10  lg:text-left">
          <div className="flex  flex-col items-center gap-2 text-center lg:items-start lg:text-left">
            <div className="flex w-max rounded-xl border-2 border-gray-5 bg-white px-2 py-5 sm:rounded-2xl sm:border-4 sm:px-4 sm:py-2">
              <p className="text-xl font-bold text-primary sm:text-2xl md:text-5xl">{textContent.label}</p>
            </div>
            <div className="flex w-full pt-5">
              <p className="whitespace-nowrap text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl">
                {textContent.subtitle}
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 pt-4 sm:gap-4 lg:flex-row">
              <Link
                href={redirectTo ?? '#billingButtons'}
                className="flex w-max items-center rounded-lg bg-white px-3 py-2 text-base font-medium text-gray-100 sm:px-5 sm:py-3 sm:text-lg lg:hover:bg-gray-5"
              >
                {textContent.cta}
              </Link>
            </div>
            <div className="flex flex-row items-center space-y-1 text-gray-100 sm:space-x-2">
              <CheckCircle size={20} className="text-gray-30" />
              <p className="whitespace-nowrap text-base font-medium text-gray-30 sm:text-lg">{textContent.guarantee}</p>
            </div>
            <p className="whitespace-nowrap text-sm font-medium text-gray-30 sm:text-sm">{textContent.lastCta}</p>
          </div>
          <div className="relative flex items-center justify-center">
            <Image
              src={getImage('/images/privacy_week/internxt_dataprivacyweek_pricing.webp')}
              width={593}
              height={540}
              alt="Internxt Cloud Storage Pricing"
              className="transform rounded-xl  xs:translate-x-20 xs:translate-y-20 md:-translate-y-20 md:translate-x-20 lg:-translate-y-10 lg:translate-x-30 "
            />
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className={`relative z-10 flex w-full flex-col justify-between gap-10 rounded-[16px] bg-primary lg:hidden`}>
        <div className="flex w-full flex-col items-center gap-4 space-y-5 px-2 py-6 text-center">
          <div className="flex w-max rounded-xl border-2 border-gray-5 bg-white px-2 py-3">
            <p className="text-4xl font-bold text-primary sm:text-5xl">{textContent.label}</p>
          </div>
          <div className="flex w-full flex-col text-white">
            <p className="text-4xl font-bold">{textContent.titleMbl1}</p>
            <p className="text-4xl font-bold">{textContent.titleMbl2}</p>
            <p className="text-4xl font-bold">{textContent.titleMbl3}</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="mb-2 flex flex-row items-center space-x-1 text-gray-30">
              <CheckCircle size={20} className="text-primary" />
              <p className="whitespace-nowrap text-sm font-medium">{textContent.guarantee}</p>
            </div>
            <Link
              href={redirectTo ?? '#billingButtons'}
              className="flex w-max items-center rounded-lg bg-white px-3 py-2 text-base font-medium text-gray-100 hover:bg-gray-5"
            >
              {textContent.cta}
            </Link>
          </div>
        </div>

        <div className="flex h-full w-full flex-col object-cover xl:hidden">
          <Image
            src={getImage('/images/home/back-to-work/mobile-header.webp')}
            width={377}
            height={200}
            alt="Privacy Week"
            className="w-full  object-cover"
          />
        </div>
      </div>
    </div>
  );
};
