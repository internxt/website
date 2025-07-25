import React from 'react';
import Image from 'next/legacy/image';
import { getImage } from '@/lib/getImage';

const FeatureSection = ({ textContent }) => {
  return (
    <section className="overflow-hidden bg-gray-1">
      <div className="flex flex-col items-center justify-center space-y-10 px-6 py-20 lg:flex-row lg:space-x-48 lg:space-y-0 ">
        <div className="flex flex-col rounded-3xl bg-gray-1  from-white   ">
          <Image
            loading="eager"
            src={getImage('/images/affiliates/internxt_secure_file_storage.webp')}
            draggable="false"
            quality={100}
            width={500}
            height={500}
            className="mx-auto h-auto w-full max-w-[400px] object-contain"
            alt="Man with laptop"
          />
        </div>
        <div className="flex max-w-[550px] flex-col items-center justify-center space-y-8 text-center lg:items-start lg:text-left">
          <div className="flex max-w-[500px] flex-col">
            <h1 className="text-3xl font-semibold text-gray-100 lg:text-5xl">
              <p className="pt-4 text-3xl font-semibold md:text-5xl">
                <span>{textContent.title}</span>
              </p>
            </h1>
            <p className="pt-4 ">
              <span className="font-regular text-xl text-gray-80 xl:text-xl">{textContent.description}</span>
            </p>
          </div>

          <div className="flex flex-col items-center justify-center space-x-8 space-y-5 lg:flex-row lg:justify-start lg:space-y-0">
            <button
              className="flex w-max items-center justify-center rounded-lg bg-primary px-5 py-3 font-semibold text-white hover:bg-primary-dark"
              onClick={() => {
                window.scrollTo({ top: document.getElementById('payment')?.offsetTop, behavior: 'smooth' });
              }}
            >
              {textContent.cta}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
