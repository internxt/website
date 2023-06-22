/* eslint-disable max-len */
/* eslint-disable prefer-const */
import React from 'react';
import Image from 'next/image';
import PriceCard from './PriceCard';
import ButtonDeal from './components/ButtonDeal';

const HeroSection = ({ textContent, lang }) => {
  const freeArg1 = textContent.title.line2.split('free')[0];
  const free = textContent.title.line2.substr(textContent.title.line2.indexOf('free'), 4);
  return (
    <section id="buy" className="pt-10 lg:pt-20">
      <div className="mb-4 flex flex-col items-center justify-center space-y-10 px-8 py-20 md:px-32 xl:flex-row xl:space-x-40 xl:space-y-0 xl:px-56">
        {/* Main title */}
        <div className="flex flex-col space-y-5 text-center xl:text-left">
          <div className="flex h-10 flex-row items-center justify-center space-y-4 rounded-lg bg-cool-gray-10 px-5 lg:m-0 lg:mb-4 xl:self-start">
            <p className="mr-2 text-base font-medium text-cool-gray-80">{textContent.header}</p>
            <Image
              src="/images/partnerships/cloudwards/logo.png"
              alt="Logo image"
              quality={100}
              width={102}
              height={24}
              layout="fixed"
            />
          </div>
          <div className="flex max-w-[550px] flex-shrink-0">
            <h1 className="mb-4 flex-shrink-0 text-4xl font-medium sm:mb-8 md:text-6xl">
              {textContent.title.line1}
              <br />
              {freeArg1}
              {<span className="text-primary">{free}</span>}
              <br />
              {textContent.title.line3}
            </h1>
          </div>
          <div className="flex justify-center xl:justify-start">
            <ButtonDeal textContent={textContent} />
          </div>
        </div>

        {/* Features grid */}
        <PriceCard lang={lang} />
      </div>
    </section>
  );
};

export default HeroSection;
