/* eslint-disable no-nested-ternary */
import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import RevealY from '../components/RevealY';

const FirstFeaturesSection = ({ textContent, lang }) => {
  return (
    <section className="overflow-hidden bg-gray-1">
      <RevealY className="content flex flex-col items-center space-y-6 px-5 py-20">
        <div className="flex w-full flex-shrink-0 flex-col items-center justify-center text-center">
          <h2 className="mb-6 text-4xl font-medium sm:text-5xl">
            {textContent.title.line1}
            <br className="hidden sm:flex" /> {textContent.title.line2}
          </h2>
          <h3 className="mb-6 w-full max-w-3xl text-lg text-neutral-500">{textContent.subtitle}</h3>
        </div>

        <button
          className="flex rounded-lg bg-primary px-5 py-3 text-white"
          onClick={() => {
            window.open('https://drive.internxt.com/new', '_blank');
          }}
        >
          {textContent.cta}
        </button>
        <RevealY className="flex flex-col pt-6">
          <Image
            src="/images/special-offer/black-friday/Devices.png"
            alt="Devices image"
            width={673}
            height={400}
            layout="intrinsic"
            quality={100}
          />
        </RevealY>
      </RevealY>
    </section>
  );
};

export default FirstFeaturesSection;
