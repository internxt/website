import { ArrowsClockwise, EyeSlash, Gauge, User, Monitor, LockSimple } from 'phosphor-react';
import React from 'react';

const FeatureSection = ({ textContent }) => {
  return (
    <section className="overflow-hidden">
      <div className="content flex flex-1 flex-col items-center bg-white px-10 py-20 text-center">
        <div className="center flex w-1/2 flex-col items-center pb-16">
          <p className="text-4xl font-semibold">{textContent.FeatureSection.title}</p>
          <p className="mt-4 text-center text-xl font-normal">{textContent.FeatureSection.subtitle}</p>
        </div>
        <div className="grid w-full grid-cols-1 justify-items-center gap-x-10 gap-y-20 sm:grid-cols-2 md:gap-x-0 lg:grid-cols-3">
          <div className="flex flex-col items-center md:w-64 md:flex-auto">
            <EyeSlash size={56} color={'rgb(0, 102, 255)'} />
            <p className="text-xl font-semibold">{textContent.FeatureSection.feature1.title}</p>
            <p className="text-center text-xl font-light">{textContent.FeatureSection.feature1.subtitle1}</p>
          </div>
          <div className="flex flex-col items-center md:w-64 md:flex-auto">
            <Gauge size={56} color={'rgb(0, 102, 255)'} />
            <p className="text-xl font-semibold">{textContent.FeatureSection.feature2.title}</p>
            <p className="text-center text-xl font-light">{textContent.FeatureSection.feature2.subtitle1}</p>
          </div>
          <div className="flex flex-col items-center md:w-64 md:flex-auto">
            <LockSimple size={56} color={'rgb(0, 102, 255)'} />
            <p className="text-xl font-semibold">{textContent.FeatureSection.feature3.title}</p>
            <p className="text-center text-xl font-light">{textContent.FeatureSection.feature3.subtitle1}</p>
          </div>
          <div className=" flex flex-col items-center md:w-64 md:flex-auto">
            <ArrowsClockwise size={56} color={'rgb(0, 102, 255)'} />
            <p className="text-xl font-semibold">{textContent.FeatureSection.feature4.title}</p>
            <p className="text-center text-xl font-light">{textContent.FeatureSection.feature4.subtitle1}</p>
          </div>
          <div className="flex flex-col items-center md:w-64 md:flex-auto">
            <Monitor size={56} color={'rgb(0, 102, 255)'} />
            <p className="text-xl font-semibold">{textContent.FeatureSection.feature5.title}</p>
            <p className="text-center text-xl font-light">{textContent.FeatureSection.feature5.subtitle1}</p>
          </div>
          <div className="flex flex-col items-center md:w-64 md:flex-auto">
            <User size={56} color={'rgb(0, 102, 255)'} />
            <p className="text-xl font-semibold">{textContent.FeatureSection.feature6.title}</p>
            <p className="text-center text-xl font-light">{textContent.FeatureSection.feature6.subtitle1}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
