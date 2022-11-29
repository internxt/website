import React from 'react';
import Countdown from '../black-friday/components/Countdown';
import { Alarm } from 'phosphor-react';

const HeroSection = ({ lang, textContent }) => {
  return (
    <section className="overflow-hidden pt-16">
      <div className="flex flex-col justify-center bg-primary-dark py-24 lg:flex-row lg:items-stretch">
        <div className="ml-4 flex shrink-0 flex-col items-center lg:ml-10 lg:items-start xl:ml-32">
          <div className="flex flex-row pb-6">
            <Alarm size={32} className="mr-4 text-white" />
            <Countdown dt={'2022-12-31T00:00:00'} />
          </div>
          <div className="flex max-w-[448px] flex-col pb-10 text-center text-white md:text-start">
            <p className="text-7xl font-bold">{textContent.title}</p>
            <p className="pt-6 text-2xl font-normal">{textContent.description}</p>
          </div>
          <div
            onClick={() => {
              window.location.href = `#payment`;
            }}
            className="flex max-w-[260px] cursor-pointer flex-col items-center rounded-full bg-white text-center"
          >
            <p className="px-9 py-3 font-sans text-lg text-primary">{textContent.cta}</p>
          </div>
        </div>
        <div className="hidden w-full flex-col items-end  lg:flex">
          <div className=" flex w-[770px] flex-col">
            <img
              src="/images/lifetime/Infinity.svg"
              className="relative h-full w-full translate-x-36 object-contain object-left"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center px-20 pt-16 lg:hidden">
          <img src="/images/lifetime/Infinity.svg" className="flex" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
