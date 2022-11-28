import React from 'react';

const GetLifetimeSection = ({ textContent }) => (
  <section className="bg-primary-dark">
    <div className="flex flex-col items-center py-20">
      <div className="mb-8 flex flex-col items-center px-6 text-center font-semibold text-white">
        <h2 className="text-4xl font-semibold">{textContent.title}</h2>
        <p className="pt-4 text-xl font-normal">{textContent.description}</p>
      </div>

      <div className="flex flex-col px-8 pt-4">
        <img
          className="max-h-96"
          loading="lazy"
          src="/images/lifetime/Devices.svg"
          alt="iPhone, iPad, and Mac"
          draggable="false"
        />
      </div>
    </div>
  </section>
);

export default GetLifetimeSection;
