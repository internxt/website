import React from 'react';

const GetLifetimeSection = ({ textContent }) => (
  <section className="bg-primary-dark">
    <div className="flex flex-col items-center pt-20 pb-16">
      <div className="mb-8 flex flex-col items-center px-6 text-center font-semibold text-white">
        <h2 className="text-4xl font-semibold">{textContent.title}</h2>
        <p className="pt-4 text-xl font-normal">{textContent.description}</p>
      </div>

      <div className="hidden flex-col px-8 pt-4 lg:flex">
        <img className="max-w-[673px] text-white" src="/images/lifetime/Devices.png" alt="iPhone, iPad, and Mac" />
      </div>
      <div className="flex flex-col px-8 pt-4 lg:hidden">
        <img className="max-h-96 text-white" src="/images/home/devicesMobileView.png" alt="iPhone, iPad, and Mac" />
      </div>
    </div>
  </section>
);

export default GetLifetimeSection;
