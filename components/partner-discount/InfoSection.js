import { ShieldCheck, LockKey, Scales, Fingerprint } from '@phosphor-icons/react';
import React from 'react';

const InfoSection = ({ textContent }) => {
  return (
    <section className="overflow-hidden">
      <div className="flex flex-col py-20">
        <div className="flex flex-col items-center justify-center space-y-6 px-5 text-center">
          <p className="text-4xl font-semibold">{textContent.title}</p>
          <p className="max-w-[672px] text-lg font-normal">{textContent.subtitle}</p>
        </div>
        <div className="flex flex-col space-y-8">
          <div className="mt-16 flex flex-row flex-wrap justify-center space-y-8 px-8 sm:space-y-0 sm:space-x-8">
            <div className="flex flex-col items-start justify-start rounded-2xl bg-cool-gray-5 p-8 sm:p-10 md:max-w-[488px]">
              <ShieldCheck className="mb-6 text-4xl text-primary" />
              <h4 className="mb-6 text-2xl font-medium">{textContent.card1.title}</h4>
              <h5 className="text-lg text-cool-gray-80 sm:text-base">{textContent.card1.description}</h5>
            </div>
            <div className="flex flex-col items-start justify-start rounded-2xl bg-cool-gray-5 p-8 sm:p-10 md:max-w-[488px]">
              <LockKey className="mb-6 text-4xl text-primary" />
              <h4 className="mb-6 text-2xl font-medium">{textContent.card2.title}</h4>
              <h5 className="text-lg text-cool-gray-80 sm:text-base">{textContent.card2.description}</h5>
            </div>
          </div>
          <div className="flex flex-row flex-wrap justify-center px-8 md:space-x-8">
            <div className="flex flex-col items-start justify-start rounded-2xl bg-cool-gray-5 p-8 sm:p-10 md:max-w-[488px]">
              <Scales className="mb-6 text-4xl text-primary" />
              <h4 className="mb-6 text-2xl font-medium">{textContent.card3.title}</h4>
              <h5 className="text-lg text-cool-gray-80 sm:text-base">{textContent.card3.description}</h5>
            </div>
            <div className="flex flex-col items-start justify-start rounded-2xl bg-cool-gray-5 p-8 sm:p-10 md:max-w-[488px]">
              <Fingerprint className="mb-6 text-4xl text-primary" />
              <h4 className="mb-6 text-2xl font-medium">{textContent.card4.title}</h4>
              <h5 className="text-lg text-cool-gray-80 sm:text-base">{textContent.card4.description}</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
