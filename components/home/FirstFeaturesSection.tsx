/* eslint-disable no-nested-ternary */
import React from 'react';
import RevealY from '../components/RevealY';
import Image from 'next/image';

const FirstFeaturesSection = ({ textContent, lang }) => {
  return (
    <section className="overflow-hidden bg-gray-1">
      <div className="relative mx-auto flex max-w-screen-2xl flex-col">
        <div className="flex flex-col items-center py-16">
          <div className="mb-8 flex flex-col items-center px-6 text-center font-semibold text-black">
            <h2 className="mb-6 text-4xl font-semibold sm:text-5xl sm:leading-tight">
              {textContent.title.line1}
              <br className="hidden sm:flex" /> {textContent.title.line2}
            </h2>
            <h3 className="mb-6 w-full max-w-3xl text-xl font-normal">{textContent.subtitle}</h3>
          </div>

          <button
            className="flex rounded-lg bg-primary px-5 py-3 text-white hover:bg-primary-dark"
            onClick={() => {
              window.open('https://drive.internxt.com/new', '_blank');
            }}
          >
            {textContent.cta}
          </button>

          <RevealY className="flex h-full w-full flex-col px-5 pt-6">
            <img
              src="/images/lifetime/Internxt-secure-cloud-storage.webp"
              alt="Internxt secure cloud storage"
              draggable={false}
            />
          </RevealY>
        </div>
      </div>
    </section>
  );
};

export default FirstFeaturesSection;
