import React from 'react';
import Countdown from '../black-friday/components/Countdown';
import { Alarm } from 'phosphor-react';

const HeroSection = ({ lang, textContent }) => {
  return (
    <section className="overflow-hidden pt-16">
      <div className="flex h-auto flex-row bg-primary-dark py-20">
        <div className="ml-4 flex w-full flex-col border lg:ml-10 xl:ml-32">
          <div className="flex flex-row pb-6">
            <Alarm size={32} className="mr-4 text-white" />
            <Countdown dt={'2022-12-31T00:00:00'} />
          </div>
          <div className="flex max-w-[448px] flex-col pb-10 text-start text-white">
            <p className="text-7xl font-bold">{textContent.title}</p>
            <p className="pt-6 text-2xl font-normal">{textContent.description}</p>
          </div>
          <div
            onClick={() => {
              window.location.href = `#payment`;
            }}
            className="flex max-w-[243px] cursor-pointer flex-col items-center rounded-full bg-white"
          >
            <p className="px-9 py-3 font-sans text-lg text-primary">{textContent.cta}</p>
          </div>
        </div>

        <div className="flex h-full w-full flex-col">
          <div className="absolute right-0 flex">
            <img src="/images/lifetime/Group.svg" className="h-full border object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
