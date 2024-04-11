import { GlobalDialog, useGlobalDialog } from '@/contexts/GlobalUIManager';
import { useRouter } from 'next/router';
import React from 'react';

export const PriceBannerForCampaigns = ({ textContent }) => {
  const globalDialog = useGlobalDialog();
  const shouldShowBanner = globalDialog.dialogIsOpen(GlobalDialog.PriceBannerForCampaigns);

  const router = useRouter();

  function handleOnClick() {
    router.push('/lifetime');
  }

  return (
    <div className={`${shouldShowBanner ? 'flex' : 'hidden'} flex-col overflow-hidden px-5`}>
      <div className="flex max-w-screen-xl flex-col rounded-[32px] border-4 border-primary/10 bg-white lg:flex-row lg:px-16">
        <div className="flex flex-col items-center space-y-6 p-10 text-center lg:py-16 xl:w-full xl:items-start xl:text-left">
          <div className="flex w-max rounded-2xl bg-white py-2 px-4 ring-4 ring-primary/10">
            <p className="text-3xl font-bold text-primary">{textContent.label}</p>
          </div>
          <div className="flex max-w-[400px] flex-col">
            <p className="text-4xl font-bold text-gray-100">{textContent.title}</p>
          </div>
          <div className="flex flex-col items-center gap-4 lg:flex-row">
            <button
              onClick={handleOnClick}
              className="flex w-max items-center rounded-lg bg-primary px-5 py-3 text-lg font-medium text-white lg:hover:bg-primary-dark"
            >
              {textContent.cta}
            </button>
            {/* <div className="flex flex-row items-center space-x-2 text-gray-80">
              <CheckCircle size={24} className="text-primary" />
              <p className="whitespace-nowrap font-medium lg:text-lg">{textContent.guarantee}</p>
            </div> */}
          </div>
          <p className="text-sm font-medium text-gray-50">{textContent.lastCta}</p>
        </div>
        <div className="hidden w-max flex-row justify-center xl:flex">
          <img
            src="/images/banners/identity_management_day_internxt_pricing.webp"
            draggable={false}
            alt="Internxt Cloud Storage Pricing"
            className="rounded-r-[32px] "
          />
        </div>
      </div>
    </div>
  );
};
