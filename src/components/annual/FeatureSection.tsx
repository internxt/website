import React from 'react';
import Image from 'next/legacy/image';
import Header from '@/components/shared/Header';
import { getImage } from '@/lib/getImage';

const FeatureSection = ({ textContent }) => {
  return (
    <section className="overflow-hidden">
      <div className="flex flex-col items-center justify-center space-y-10 px-6 py-20 lg:flex-row lg:space-x-48 lg:space-y-0 ">
        <div className="flex flex-col rounded-3xl bg-gradient-to-b from-white to-gray-1   ">
          <Image
            loading="eager"
            src={getImage('/images/affiliates/internxt_secure_file_storage.webp')}
            draggable="false"
            quality={100}
            width={600}
            height={600}
            className="mx-auto h-auto w-full max-w-[400px] object-contain"
            alt="Man with laptop"
          />
        </div>
        <div className="flex flex-col space-y-10">
          <div className="flex max-w-[500px] flex-col">
            <Header className="text-6xl text-gray-100 ">
              <p className="pt-4 text-5xl font-semibold ">
                <span>{textContent.title}</span>
              </p>
            </Header>
            <p className="pt-4 ">
              <span className="pt-4 text-xl font-normal text-gray-80">{textContent.description}</span>
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
