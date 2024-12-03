import { CircleWavyCheck } from '@phosphor-icons/react';
import React from 'react';

const FeaturesSection = ({ textContent }) => {
  return (
    <section className="overflow-hidden">
      <div className="flex flex-wrap items-end justify-center gap-8 bg-highlight px-6 py-12 md:px-10 md:py-16 lg:flex-row">
        {textContent.HeroSection.features &&
          textContent.HeroSection.features.map((feature, index) => (
            <div
              key={index}
              className="flex w-full max-w-[170px] flex-col items-center space-y-4 text-center md:w-auto lg:mx-4 lg:min-h-[140px]"
            >
              <CircleWavyCheck size={32} className="text-primary" weight="fill" />
              <p className="text-lg font-semibold text-white">{feature}</p>
            </div>
          ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
