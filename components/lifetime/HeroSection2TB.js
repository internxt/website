import React from 'react';
import PriceTable2TB from './PriceTable2TB';

const HeroSection2TB = ({ lang, textContent }) => (
  <section className="bg-gradient-to-b from-white via-neutral-10 to-white">
    <div className="flex flex-col items-center">

      <img className="my-10" loading="lazy" src="../../logos/internxt/internxt.svg" alt="Internxt logo" draggable="false" />

      <div className="flex flex-col items-center my-8 sm:my-12 text-center text-neutral-900 px-6">

        <div className="flex flex-col items-center mb-10 font-semibold">
          <h3 className="eyebrow text-lg md:text-xl">
            {textContent.eyebrow}
          </h3>
          <h1 className="eyebrow text-4xl md:text-6xl">
            {textContent.title.line1}
            <br className="hidden sm:inline-flex" />
            {' '}
            {textContent.title.line2}
          </h1>
        </div>

        <p className="eyebrow text-lg md:text-xl text-neutral-500 font-normal">
          {textContent.description.line1}
          <br className="hidden sm:inline-flex" />
          {' '}
          {textContent.description.line2}
        </p>
      </div>

      <div className="my-8 sm:my-12" id="priceTable">
        <PriceTable2TB lang={lang} />
      </div>

      <div className="flex flex-row items-center mb-20 space-x-1">
        <img className="h-5" loading="lazy" src="../../images/lifetime/icons/lock-green-icon.png" alt="Lock" draggable="false" />
        <span className="text-normal font-medium md:text-sm text-neutral-100">{textContent.securePayment}</span>
      </div>

    </div>
  </section>
);

export default HeroSection2TB;
