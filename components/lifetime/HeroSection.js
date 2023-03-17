import React from 'react';
import { Alarm } from 'phosphor-react';
import Countdown from '../components/Countdown';

const HeroSection = ({ lang, textContent }) => {
  return (
    <section className="overflow-hidden pt-16">
      <div className="bg-primary-dark">
        <div className="lg:mx-10 xl:mx-32">
          <div className="mx-auto flex w-full max-w-screen-xl flex-col sm:mb-24 lg:flex-row">
            <div className="my-6 flex w-screen flex-shrink-0 flex-col items-center justify-center space-y-6 text-center sm:w-auto sm:px-0 md:my-8 lg:ml-0 lg:max-w-lg lg:items-start lg:text-left">
              <div className="flex flex-row rounded-lg py-2">
                <Alarm size={32} className="mr-4 text-white" />
                <Countdown textColor={'white'} />
              </div>
              <div className="flex max-w-[448px] flex-col pb-10 text-center text-white md:text-start">
                <p className="text-7xl font-bold">{textContent.title}</p>
                <p className="pt-6 text-2xl font-normal">{textContent.description}</p>
              </div>
              <div
                onClick={() => {
                  window.location.href = `#payment`;
                }}
                className="flex max-w-[260px] cursor-pointer flex-col items-center rounded-lg bg-white text-center"
              >
                <p className="px-9 py-3 text-lg font-medium text-primary">{textContent.cta}</p>
              </div>

              <div className="hidden w-full md:flex"></div>
            </div>

            <div className="hidden w-full flex-col items-end py-20 lg:flex">
              <div className=" flex w-[770px] flex-col 2xl:w-[850px]">
                <img
                  src="/images/lifetime/infinity.svg"
                  className="relative h-full w-full translate-x-56 object-contain object-left 2xl:translate-x-96"
                  alt="Infinity image"
                />
              </div>
            </div>
            <div className="mb-20 flex flex-col items-center justify-center px-10 pt-12 lg:hidden">
              <img src="/images/lifetime/infinity.svg" alt="infinity image" className="flex" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
