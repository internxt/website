import React from 'react';
import PriceTable from './PriceTable';
import styles from './Font.module.scss';

const HeroSection = ({
  lang,
  textContent
}) => (

  <section>

    <div className="flex flex-col items-center">

      <img className="fixed top-0 right-0 h-48 sm:max-h-80 pointer-events-none" loading="lazy" src="../../images/lifetime/cobweb.png" alt="Internxt logo" draggable="false" />

      <img className="my-10" loading="lazy" src="../../logos/internxt/internxtWhite.svg" alt="Internxt logo" draggable="false" />

      <div className="flex flex-col items-center my-8 sm:my-12 text-center text-gray-10 px-6">

        <div className="flex flex-col items-center mb-10 font-semibold">

          <h3 className="eyebrow text-lg md:text-xl font-normal">
            {textContent.eyebrow}
          </h3>

          <h1 className="eyebrow text-4xl md:text-6xl">
            {textContent.title.line1}
            <br className="hidden sm:inline-flex" />
            {' '}
            {textContent.title.line2}
          </h1>

        </div>

        <p className="eyebrow text-lg text-gray-40 font-normal">
          {textContent.description.line1}
          <br className="hidden sm:inline-flex" />
          {' '}
          {textContent.description.line2.subline1}
          &nbsp;
          <span className="relative">
            {textContent.description.line2.subline2}
            <img loading="lazy" className="absolute top-1 left-0 opacity-80 max-w-full transform origin-center -rotate-12 scale-110 select-none pointer-events-none" src={`/images/lifetime/graffiti/${Math.floor(Math.random() * 6) + 1}.png`} draggable="false" alt="check icon" />
            <span className={`${styles.marker} absolute left-4 top-4 transform origin-center -rotate-2 -skew-y-6 scale-125 text-red-70 font-bold`}>
              {textContent.description.line2.subline2spooky}
            </span>
          </span>
          &nbsp;
          {textContent.description.line2.subline3}
        </p>

      </div>

      <div className="my-8 sm:my-12" id="priceTable">

        <PriceTable lang={lang} />

      </div>

      <div className="flex flex-row items-center mb-20 space-x-1">

        <img className="h-5" loading="lazy" src="../../images/lifetime/icons/lock-green-icon.png" alt="Lock" draggable="false" />

        <span className="text-normal md:text-sm text-gray-40">{textContent.securePayment}</span>

      </div>

    </div>

  </section>

);

export default HeroSection;
