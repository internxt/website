import React from 'react';

const GetLifetimeSection = ({ textContent }) => (
  <section className="bg-neutral-10">
    <div className="flex flex-col items-center py-20">
      <div className="mb-8 flex flex-col items-center px-6 text-center font-semibold">
        <h2 className="eyebrow text-4xl">
          {textContent.title.line1}
          <br className="hidden sm:inline-flex" /> {textContent.title.line2}
        </h2>
      </div>

      <a
        href="#priceTable"
        className="mb-16 flex justify-center rounded-full border border-transparent bg-blue-60 px-6 py-2 text-base font-medium text-white transition-all duration-75 focus:bg-blue-70 focus:outline-none focus:ring-2 focus:ring-blue-20 focus:ring-offset-2 active:bg-blue-70 sm:inline-flex"
      >
        <span className="whitespace-nowrap">{textContent.cta}</span>
      </a>

      <div className="flex flex-col px-8">
        <img
          className="max-h-96"
          loading="lazy"
          src="../../images/lifetime/devices.png"
          alt="Eye slash"
          draggable="false"
        />
      </div>
    </div>
  </section>
);

export default GetLifetimeSection;
