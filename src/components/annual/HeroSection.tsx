import React from 'react';
import Image from 'next/legacy/image';
import Header from '@/components/shared/Header';
import { getImage } from '@/lib/getImage';
import { Percent } from '@phosphor-icons/react';

const HeroSection = ({ textContent }) => {
  const wordsToBold = ['exclusive 82%'];
  const formattedHero = textContent.header
    .split(/(exclusive 82%)/g)
    .map((word, index) => (wordsToBold.includes(word) ? <b key={index}>{word}</b> : word));
  return (
    <section className="overflow-hidden">
      <div className="flex flex-col items-center justify-center space-y-10 px-6 py-24 lg:flex-row lg:space-x-48 lg:space-y-0">
        <div className="flex max-w-[2000px] flex-col items-center justify-center space-y-8 text-center lg:items-start lg:pt-20 lg:text-left">
          <div className="flex flex-col">
            <Header maxWidth="max-w-[500px]" className="text-6xl text-gray-100 ">
              <p className="pt-4 text-4xl font-bold xl:text-5xl ">
                <span>{textContent.title.normalText}</span>
              </p>
              <p className="pt-4 text-2xl xl:text-3xl">
                <span className="text-primary">{textContent.title.blueText}</span>
              </p>
            </Header>
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
        <div className="flex flex-col rounded-3xl bg-gradient-to-b from-white to-gray-1   ">
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
