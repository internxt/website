import React from 'react';
import Image from 'next/legacy/image';
import { CheckCircle } from '@phosphor-icons/react';

const CampaignCtaSection = ({ textContent }) => {
  function handleOnClick() {
    window.location.hash = 'priceTable';
  }

  return (
    <div className="flex flex-col overflow-hidden px-5">
      <div className="flex max-w-screen-xl flex-col rounded-[32px] border-4 border-primary/10 bg-white lg:flex-row">
        <div className="flex  flex-col items-center space-y-6 py-16 text-center xl:w-max xl:items-start xl:pl-16 xl:text-left">
          <div className="flex w-max rounded-2xl bg-white py-2 px-4 ring-4 ring-primary/10">
            <p className="text-3xl font-bold text-primary lg:text-5xl">{textContent.label}</p>
          </div>
          <div className="flex w-full max-w-[574px] flex-col space-y-4">
            <p className="text-4xl font-bold text-gray-100 xl:whitespace-nowrap">{textContent.title}</p>
          </div>
          <div className="flex flex-col items-center gap-4 lg:flex-row">
            <button
              onClick={handleOnClick}
              className="flex w-max items-center rounded-lg bg-primary px-5 py-3 text-lg font-medium text-white hover:bg-primary-dark"
            >
              {textContent.cta}
            </button>
            <div className="flex flex-row items-center space-x-2 text-gray-80">
              <CheckCircle size={24} className="" />
              <p className="whitespace-nowrap font-medium lg:text-lg">{textContent.guarantee}</p>
            </div>
          </div>
          <p className="text-sm font-medium text-gray-80">{textContent.lastCta}</p>
        </div>
        <div className="hidden max-h-96 w-full flex-row justify-center xl:flex">
          <img
            src="/images/banners/internxt_spring_pricing.webp"
            draggable={false}
            alt="Internxt Cloud Storage Pricing"
            className="w-full rounded-r-[32px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default CampaignCtaSection;
