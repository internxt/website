/* eslint-disable max-len */
import React from 'react';

const ManifestoSection = ({ textContent }) => (
  <section className="relative flex w-full flex-col bg-gray-1">
    {/* Why privacy is so important */}
    <div className="z-10 flex flex-col items-center py-20 ">
      <div className="px-6 text-center">
        <h2 className="mb-10 text-3xl font-medium lg:text-4xl">{textContent.section1.title.line1}</h2>

        <h3 className="mb-10 w-full max-w-2xl text-lg font-normal text-cool-gray-80 sm:text-base">
          {textContent.section1.subtitle.line1} {textContent.section1.subtitle.line2}{' '}
          {textContent.section1.subtitle.line3} {textContent.section1.subtitle.line4}{' '}
          {textContent.section1.subtitle.line5}
        </h3>

        <div className="flex flex-col items-center">
          <p className="mb-4 text-sm font-medium text-cool-gray-40 sm:text-xs">{textContent.section1.signature}</p>
          <img
            loading="lazy"
            className="w-24 select-none"
            src="/images/privacy/signature.webp"
            draggable="false"
            alt="Fran's signature"
          />
        </div>
      </div>
    </div>
  </section>
);

export default ManifestoSection;
