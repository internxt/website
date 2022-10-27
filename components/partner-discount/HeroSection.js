import React from 'react';

const HeroSection = ({ textContent }) => {
  return (
    <section className="overflow-hidden">
      <div className="mt-[77px] mb-20 flex flex-row justify-between">
        <div className="mx-4 flex max-w-[456px] flex-col items-start justify-center space-y-8 lg:ml-10 xl:ml-32">
          <h1 className=" text-6xl font-semibold">{textContent.title}</h1>
          <p className=" text-2xl font-normal">{textContent.subtitle}</p>
          <div className="flex rounded-full bg-primary px-9 py-4">
            <button className="text-white">{textContent.cta}</button>
          </div>
        </div>
        <div className=" flex flex-col ">
          <img
            src="/images/partners-discount/partners-image.png"
            alt="Laptop and smartphone image"
            className="max-w-[679px]"
          />
        </div>
      </div>
      <div className="" />
    </section>
  );
};

export default HeroSection;
