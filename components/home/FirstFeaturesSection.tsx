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
          <h2 className="mb-6 text-4xl font-semibold sm:text-5xl sm:leading-tight">
            {textContent.title.line1}
            <br className="hidden sm:flex" /> {textContent.title.line2}
          </h2>
          <h3 className="mb-6 w-full max-w-3xl text-xl font-normal text-gray-80">{textContent.subtitle}</h3>
        </div>

        <button
          className="flex rounded-lg bg-primary px-5 py-3 text-white hover:bg-primary-dark"
          onClick={() => {
            window.open('https://drive.internxt.com/new', '_blank');
          }}
        >
          {textContent.cta}
        </button>
        <RevealY className="flex h-full w-full flex-col pt-6">
          <picture>
            <source srcSet="/images/home/Internxt-secure-cloud-storage.webp" type="image/webp" />
            <img
              src="/images/home/Internxt-secure-cloud-storage.webp"
              alt="Internxt secure cloud storage"
              draggable={false}
            />
          </picture>
        </RevealY>
      </RevealY>
    </section>
  );
};

export default FirstFeaturesSection;
