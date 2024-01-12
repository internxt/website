import { CheckCircle } from '@phosphor-icons/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

const CampaignCtaSection = ({ textContent }) => {
  const router = useRouter();

  function handleOnClick() {
    window.scrollTo({
      top: document.getElementById('billingButtons').offsetTop,
      behavior: 'smooth',
    });
  }

  return (
    <section className="overflow-hidden px-5 lg:px-0">
      <div className="flex flex-col items-center rounded-[32px] bg-primary">
        <div className="relative flex flex-row">
          <div className="flex w-full flex-col items-center justify-center space-y-6 py-16 pl-16 text-center text-white lg:items-start lg:text-left">
            <div className="flex w-max rounded-2xl border-4 border-primary/7 bg-white px-5 py-2">
              <p className="text-5xl font-bold text-primary">{textContent.label}</p>
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
          </div>
          <div className="relative hidden h-full w-full flex-col lg:flex">
            <Image
              src="/images/pricing/internxt_cloud_storage_pricing.webp"
              width={723}
              quality={100}
              draggable={false}
              height={529}
              alt="Internxt Cloud Storage Pricing"
              className="absolute rounded-r-[32px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampaignCtaSection;
