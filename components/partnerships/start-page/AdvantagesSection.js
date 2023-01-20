import { Check } from 'phosphor-react';
import React from 'react';

const AdvantagesSection = ({ textContent }) => {
  return (
    <section className="overflow-hidden bg-gray-1">
      <div className="sm:gap-x-30 flex flex-row flex-wrap justify-center gap-x-24">
        {textContent.features.map((feature) => (
          <div key={feature} className="flex max-w-[180px] flex-col items-center space-y-4 py-10 text-center lg:py-10">
            <Check size={32} weight="bold" className="text-primary" />
            <p className="text-xl font-semibold">{feature}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdvantagesSection;
