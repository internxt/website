import { ArrowsLeftRight } from 'phosphor-react';
import React from 'react';

const HeroSection = ({ textContent }) => {
  return (
    <section className="overflow-hidden">
      <div className="mx-4 flex py-32 md:mx-10 lg:mx-32">
        <div className="mx-auto flex w-full max-w-screen-xl flex-row items-center justify-between">
          {/* Title and subtitle */}
          <div className="flex w-full max-w-[337px] flex-col items-start justify-between text-left">
            <h1 className="text-5xl font-semibold">{textContent.title}</h1>
            <p className="pt-6 text-xl font-normal text-gray-80">{textContent.description}</p>
            <p className="pt-6 text-xl font-normal text-gray-80">{textContent.description1}</p>
          </div>
          {/* Container */}
          <div className="flex w-full max-w-[672px] flex-col rounded-2xl border-2 border-primary border-opacity-6 bg-primary bg-opacity-3 py-12 px-16 shadow-subtle-hard">
            <div className="flex flex-row">
              <input type={'number'} className="h-10 w-72 rounded-lg border border-gray-30 bg-transparent" />
              <button className="ml-10 h-10 items-center justify-center rounded-lg bg-primary px-[70px] text-white">
                {textContent.container.cta}
              </button>
            </div>
            <div className="flex flex-row items-end justify-between pt-6">
              <div className="flex flex-col items-start space-y-2">
                <p className="text-lg font-semibold text-gray-60">{textContent.container.from}</p>
                <input type={'number'} className="h-10 w-48 rounded-lg border border-gray-30 bg-transparent" />
              </div>
              <ArrowsLeftRight size={40} weight={'regular'} className="text-gray-60" />
              <div className="flex flex-col items-start space-y-2">
                <p className="text-lg font-semibold text-gray-60">{textContent.container.to}</p>
                <input type={'number'} className="h-10 w-48 rounded-lg border border-gray-30 bg-transparent" />
              </div>
            </div>
            <div className="flex flex-col items-start space-y-2 pt-6">
              <p className="text-lg font-semibold text-gray-60">{textContent.container.result}</p>
              <div className="flex h-10 w-full flex-col rounded-lg border border-gray-30 bg-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
