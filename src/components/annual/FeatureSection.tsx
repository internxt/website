import React from 'react';

import RevealY from '@/components/components/RevealY';

const FeatureSection = ({ textContent }) => (
  <section className="overflow-hidden">
    <div className="flex flex-col items-center space-y-8 bg-gray-1 px-5 pb-16 pt-20">
      <div className=" flex flex-col items-center justify-center space-y-6 px-6 text-center font-semibold">
        <h2 className="max-w-[550px] text-4xl font-semibold sm:text-5xl sm:leading-tight">{textContent.title}</h2>
        <p className="max-w-3xl text-xl font-normal text-gray-100">{textContent.description}</p>
        <button
          className="flex items-center rounded-lg bg-primary px-5 py-3 text-base font-medium text-white hover:bg-primary-dark"
          onClick={() => {
            window.location.hash = '#payment';
          }}
        >
          {textContent.cta}
        </button>
      </div>

      <RevealY className="hidden w-full flex-col items-center justify-center pt-6 md:flex">
        <picture>
          <source srcSet="/images/home/internxt_secure_cloud_storage.webp" type="image/webp" />
          <img
            src="/images/home/internxt_secure_cloud_storage.webp"
            alt="Internxt secure cloud storage"
            width={757}
            draggable={false}
          />
        </picture>
      </RevealY>
      <RevealY className="flex h-full w-full flex-col pt-6 md:hidden">
        <picture>
          <source srcSet="/images/home/internxt_secure_cloud_storage.webp" type="image/webp" />
          <img
            src="/images/home/internxt_secure_cloud_storage.webp"
            alt="Internxt secure cloud storage"
            draggable={false}
          />
        </picture>
      </RevealY>
    </div>
  </section>
);

export default FeatureSection;
