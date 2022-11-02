import React from 'react';
import PriceTable from './PriceTable';

const HeroSection = ({ lang, textContent }) => (
  <section className="bg-gradient-to-b from-white via-neutral-10 to-white">
    <div className="flex flex-col items-center">
      <img
        className="my-10"
        loading="lazy"
        src="../../logos/internxt/internxt.svg"
        alt="Internxt logo"
        draggable="false"
      />

      <div className="my-8 flex flex-col items-center px-6 text-center text-neutral-900 sm:my-12">
        <div className="mb-10 flex flex-col items-center font-semibold">
          <h3 className="eyebrow text-lg md:text-xl">{textContent.eyebrow}</h3>

          <h1 className="eyebrow text-4xl md:text-6xl">
            {textContent.title.line1}
            <br className="hidden sm:inline-flex" /> {textContent.title.line2}
          </h1>
        </div>

        <p className="eyebrow text-lg font-normal text-neutral-500 md:text-xl">
          {textContent.description.line1}
          <br className="hidden sm:inline-flex" /> {textContent.description.line2}
        </p>
      </div>

      <div className="my-8 sm:my-12" id="priceTable">
        <PriceTable lang={lang} />
      </div>

      <div className="mb-20 flex flex-row items-center space-x-1">
        <img
          className="h-5"
          loading="lazy"
          src="../../images/lifetime/icons/lock-green-icon.png"
          alt="Lock"
          draggable="false"
        />

        <span className="text-normal font-medium text-neutral-100 md:text-sm">{textContent.securePayment}</span>
      </div>
    </div>
  </section>
);

export default HeroSection;
