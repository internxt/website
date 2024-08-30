import { GlobalDialog, useGlobalDialog } from '@/contexts/GlobalUIManager';
import { getImage } from '@/lib/getImage';
import { CheckCircle } from '@phosphor-icons/react';
import Image from 'next/image';
import Link from 'next/link';

export const PriceBannerForCampaigns = ({ textContent }) => {
  const globalDialog = useGlobalDialog();
  const shouldShowBanner = globalDialog.dialogIsOpen(GlobalDialog.PriceBannerForCampaigns);

  return (
    <div className={`${shouldShowBanner ? 'flex' : 'hidden'} flex-col overflow-hidden px-5`}>
      <div
        className={`flex w-full max-w-screen-xl flex-col justify-between rounded-[32px] bg-primary xl:w-full xl:flex-row`}
      >
        <div className="flex w-full max-w-[500px] flex-col items-center gap-6 px-3 py-10 text-center xl:items-start xl:p-10 xl:py-16 xl:text-left">
          <div className="flex w-max rounded-2xl bg-white px-4 py-2 ring-4 ring-primary">
            <p className="text-2xl font-bold text-primary md:text-5xl">{textContent.label}</p>
          </div>
          <div className="flex w-full flex-col">
            <p className="text-3xl font-bold text-white md:text-4xl">{textContent.subtitle}</p>
          </div>
          <div className="flex flex-col items-center gap-4 xl:flex-row">
            <Link
              href={'#billingButtons'}
              className="flex w-max items-center rounded-lg bg-white px-5 py-3 text-lg font-medium text-gray-100 lg:hover:bg-gray-5"
            >
              {textContent.cta}
            </Link>
          </div>
          <div className="flex flex-row items-center space-x-2 text-white">
            <CheckCircle size={24} className="text-white" />
            <p className="whitespace-nowrap font-medium xl:text-lg">{textContent.guarantee}</p>
          </div>
          <p className="text-sm font-medium text-white">{textContent.lastCta}</p>
        </div>
        <div className="hidden w-full max-w-[800px] flex-row justify-end xl:flex">
          <Image
            src={getImage('/images/home/back-to-work/pricing-banner.webp')}
            width={700}
            height={100}
            draggable={false}
            alt="Internxt Cloud Storage Pricing"
            className="rounded-r-[32px]"
          />
        </div>
        <div className="flex h-full w-full flex-col object-cover xl:hidden">
          <Image
            src={getImage('/images/home/back-to-work/mobile-header.webp')}
            width={377}
            height={190}
            alt="Euro 2024 image"
            className="w-full rounded-b-[32px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};
