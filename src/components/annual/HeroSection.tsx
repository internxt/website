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
      <div className="flex flex-col items-center justify-center space-y-10 px-6 pt-24 lg:flex-row lg:space-x-48 lg:space-y-0 lg:pt-0">
        <div className="flex flex-col space-y-10">
          <div className="flex flex-col">
            <Header maxWidth="max-w-[500px]" className="text-6xl text-gray-100 ">
              <p className="pt-4 text-6xl font-bold ">
                <span>{textContent.title.normalText}</span>
              </p>
              <p className="pt-4 text-4xl">
                <span className="text-primary">{textContent.title.blueText}</span>
              </p>
            </Header>
          </div>
          <div className="flex max-w-[500px] flex-row items-center space-x-3 rounded-lg bg-gray-5 px-5  py-2">
            <Percent className="h-16 w-16 text-primary xl:h-24 xl:w-24" />
            <p className="text-xl font-medium text-gray-80">{formattedHero}</p>
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
            width={600}
            height={700}
            className="mx-auto h-auto w-full max-w-[400px] object-contain"
            alt="Man with laptop"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
