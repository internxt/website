import React from 'react';
import Image from 'next/legacy/image';
import { CheckCircle } from '@phosphor-icons/react';

const CampaignCtaSection = ({ textContent }) => {
  function handleOnClick() {
    window.location.hash = 'priceTable';
  }

  return (
    <div className="flex flex-col overflow-hidden">
      <div className="flex flex-col items-center rounded-[32px] border-4 border-primary/10 bg-white px-10 xl:px-0">
        <div className="flex h-full flex-row">
          <div className="flex h-full w-max flex-col items-center justify-center space-y-6 py-16 text-center xl:items-start xl:pl-16 xl:text-left">
            <div className="flex w-max rounded-2xl bg-red-dark py-2 px-4 ring-4 ring-red-dark/80">
              <p className="text-3xl font-bold text-white lg:text-5xl">{textContent.label}</p>
            </div>
            <div className="flex w-full max-w-[574px] flex-col space-y-4">
              <p className="text-4xl font-bold text-red-dark">{textContent.title}</p>
              <p className="text-xl text-gray-80">{textContent.subtitle}</p>
            </div>
            <div className="flex flex-col items-center gap-4 lg:flex-row">
              <button
                onClick={handleOnClick}
                className="flex w-max items-center rounded-lg bg-gray-5 px-5 py-3 text-lg font-medium text-gray-80 hover:bg-gray-10"
              >
                {textContent.cta}
              </button>
              <div className="flex flex-row items-center space-x-3 text-gray-80">
                <CheckCircle size={24} className="" />
                <p className="whitespace-nowrap font-medium lg:text-lg">{textContent.guarantee}</p>
              </div>
            </div>
            <p className="text-sm font-medium text-gray-80">{textContent.lastCta}</p>
          </div>
          <div className="relative hidden h-full w-full flex-col xl:flex">
            <Image
              src="/images/banners/internxt_valentines_sale_pricing.webp"
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
