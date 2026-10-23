/* eslint-disable max-len */
import React from 'react';
import { getImage } from '@/lib/getImage';
import { DARK_MODE_ENABLED } from '@/theme.config';

const ManifestoSection = ({ darkMode = DARK_MODE_ENABLED, textContent }) => (
  <section className={`relative flex w-full flex-col ${darkMode ? 'bg-gray-105' : 'bg-gray-1'}`}>
    {/* Why privacy is so important */}
    <div className="z-10 flex flex-col items-center py-20 ">
      <div className="px-6 text-center">
        <h2 className="mb-10 text-3xl font-semibold lg:text-5xl">{textContent.section1.title.line1}</h2>

        <h3
          className={`mb-10 w-full max-w-[850px] text-lg font-normal ${
            darkMode ? 'text-cool-gray-30' : 'text-gray-80'
          } sm:text-xl`}
        >
          {textContent.section1.subtitle.line1}
        </h3>

        <div className="flex flex-col items-center">
          <p className={`mb-4 text-sm font-semibold ${darkMode ? 'text-cool-gray-30' : 'text-gray-80'}  sm:text-base`}>
            {textContent.section1.signature.line1} <br /> {textContent.section1.signature.line2}
          </p>
          <img
            loading="lazy"
            className="w-24 select-none"
            src={getImage('/images/privacy/signature.webp')}
            draggable="false"
            alt="Fran's signature"
          />
        </div>
      </div>
    </div>
  </section>
);

export default ManifestoSection;
