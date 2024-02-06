import { CheckCircle } from '@phosphor-icons/react';
import Image from 'next/legacy/image';
import React from 'react';
import { GlobalDialog, useGlobalDialog } from '@/contexts/GlobalUIManager';

const CampaignCtaSection = ({ textContent }) => {
  const globalDialog = useGlobalDialog();
  function handleOnClick() {
    globalDialog.openDialog(GlobalDialog.Wheel);
  }

  return (
    <div className="flex flex-col overflow-hidden">
      <div className="flex flex-col items-center rounded-[32px] bg-primary px-10 xl:px-0">
        <div className="flex flex-row">
          <div className="flex w-full flex-col items-center justify-center space-y-6 py-16 text-center text-white xl:items-start xl:pl-16 xl:text-left">
            <div className="flex w-max rounded-2xl border-4 border-primary/7 bg-primary-dark py-2 px-4">
              <p className="textxl font-bold text-white lg:text-2xl">{textContent.label}</p>
            </div>
            <div className="flex w-full max-w-[574px] flex-col space-y-4">
              <p className="text-4xl font-bold md:text-5xl">{textContent.title}</p>
              <p className="text-xl">{textContent.subtitle}</p>
            </div>
            <div className="flex flex-col items-center gap-4 lg:flex-row">
              <button
                onClick={handleOnClick}
                className="flex w-max items-center rounded-lg bg-white px-5 py-3 text-lg font-medium text-gray-80"
              >
                {textContent.cta}
              </button>
              <div className="flex flex-row items-center space-x-3">
                <CheckCircle size={24} className="text-white" />
                <p className="font-medium text-white lg:text-lg">{textContent.guarantee}</p>
              </div>
            </div>
            <p>{textContent.lastCta}</p>
          </div>
          <div className="relative hidden h-full w-full flex-col xl:flex">
            <Image
              src="/images/banners/wheel_pricing.png"
              width={653}
              height={455}
              quality={100}
              draggable={false}
              alt="Internxt Cloud Storage Pricing"
              className="absolute h-full overflow-hidden rounded-r-[32px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignCtaSection;
