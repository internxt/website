import { EyeSlash } from 'phosphor-react';
import React from 'react';

const FeatureSection = ({ textContent }) => {
  return (
    <section className="overflow-hidden">
      <div className="center flex h-screen w-screen flex-col items-center bg-white px-10 py-20">
        <div className="center flex flex-col items-center pb-16">
          <p className="text-4xl font-semibold">{textContent.FeatureSection.title}</p>
          <p className="mt-4 text-xl font-normal">{textContent.FeatureSection.subtitle}</p>
          <p className="text-xl font-normal">{textContent.FeatureSection.subtitle2}</p>
          <p className=" text-xl font-normal">{textContent.FeatureSection.subtitle3}</p>
        </div>
        <div className="flex flex-col space-y-12 pt-12">
          <div className="flex flex-row space-x-80">
            <div className="flex flex-col">
              <EyeSlash size={56} />
            </div>
            <div className="flex flex-col">
              <EyeSlash />
            </div>
            <div className="flex flex-col">
              <EyeSlash />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
