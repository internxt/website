import React from 'react';
import Image from 'next/legacy/image';
import { getImage } from '@/lib/getImage';
import { Percent } from '@phosphor-icons/react';

const HeroSection = ({ textContent }) => {
  const wordsToBold = ['85%'];
  const formattedHero = textContent.header
    .split(/(85%)/g)
    .map((word, index) => (wordsToBold.includes(word) ? <b key={index}>{word}</b> : word));

  return (
    <section className="overflow-hidden">
      <div className="flex flex-col items-center justify-center space-y-10 bg-red px-12 py-24 lg:flex-row lg:space-x-48 lg:space-y-0">
        <div className="flex flex-col items-center justify-center space-y-8 text-center lg:items-start  lg:text-left">
          <div className="flex flex-col">
            <h1 className="text-3xl font-semibold text-gray-100 lg:text-5xl">
              <p className="pt-4 text-4xl font-bold xl:text-5xl ">
                <span>{textContent.title.normalText}</span>
              </p>
              <p className="pt-4 text-2xl xl:text-3xl">
                <span className="text-primary">{textContent.title.blueText}</span>
              </p>
            </h1>
          </div>
          <div className="flex max-w-[400px] flex-row items-start space-x-2.5 rounded-lg bg-gray-5 p-2 xl:items-center">
            <Percent className="h-16 w-16 text-primary xl:h-24 xl:w-24" />
            <p className="font-regular text-xl text-gray-80 ">{formattedHero}</p>
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
        <div className="flex flex-col rounded-3xl  from-white to-gray-1   ">
          <Image
            loading="eager"
            src={getImage('/images/yearly/internxt_yearly_plans.webp')}
            draggable="false"
            quality={100}
            width={500}
            height={500}
            className="mx-auto h-auto w-full max-w-[400px] object-contain"
            alt="Man with laptop"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
