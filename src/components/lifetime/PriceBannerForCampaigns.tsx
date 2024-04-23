import { GlobalDialog, useGlobalDialog } from '@/contexts/GlobalUIManager';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const PriceBannerForCampaigns = ({ textContent }) => {
  const globalDialog = useGlobalDialog();
  const shouldShowBanner = globalDialog.dialogIsOpen(GlobalDialog.PriceBannerForCampaigns);

  return (
    <div className={`${shouldShowBanner ? 'flex' : 'hidden'} flex-col overflow-hidden px-5`}>
      <div className="flex w-full  flex-col justify-between rounded-[32px] border-4 border-primary/10 bg-white bg-[url('/images/star-wars/bg.webp')] lg:flex-row lg:px-5">
        <div className="hidden w-full flex-row justify-center xl:flex">
          <Image
            src="/images/star-wars/internxt_starwars_promotion_pricing1.webp"
            width={328}
            height={378}
            draggable={false}
            alt="Internxt Cloud Storage Pricing"
            className="rounded-r-[32px]"
          />
        </div>
        <div className="flex w-full flex-col items-center gap-6 p-10 text-center lg:py-16 xl:w-full">
          <div className="flex w-max rounded-2xl bg-gray-100 py-2 px-4 ring-4 ring-primary">
            <p className="text-3xl font-bold text-white">{textContent.label}</p>
          </div>
          <div className="flex flex-col">
            <p className="text-4xl font-bold text-white">{textContent.title}</p>
          </div>
          <div className="flex flex-col items-center gap-4 lg:flex-row">
            <Link
              href={'#billingButtons'}
              className="flex w-max items-center rounded-lg bg-primary px-5 py-3 text-lg font-medium text-white lg:hover:bg-primary-dark"
            >
              {textContent.cta}
            </Link>
            {/* <div className="flex flex-row items-center space-x-2 text-gray-80">
              <CheckCircle size={24} className="text-primary" />
              <p className="whitespace-nowrap font-medium lg:text-lg">{textContent.guarantee}</p>
            </div> */}
          </div>
          <p className="text-sm font-medium text-gray-50">{textContent.lastCta}</p>
        </div>
        <div className="hidden w-full flex-row justify-center xl:flex">
          <Image
            src="/images/star-wars/internxt_starwars_promotion_pricing2.webp"
            width={328}
            height={378}
            draggable={false}
            alt="Internxt Cloud Storage Pricing"
            className="rounded-r-[32px] "
          />
        </div>
      </div>
    </div>
  );
};
