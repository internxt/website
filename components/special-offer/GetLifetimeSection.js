import React from 'react';

const GetLifetimeSection = ({
  textContent
}) => (

  <section>

    <div className="flex flex-col items-center py-20">

      <div className="flex flex-col items-center text-center mb-8 font-semibold px-6 text-gray-20">

        <h2 className="eyebrow text-4xl">
          {textContent.title.line1}
          <br className="hidden sm:inline-flex" />
          {' '}
          {textContent.title.line2}
        </h2>

      </div>

      <a href="#priceTable" className="mb-16">

        <p className="relative flex flex-row text-lg text-red-20">
          <img loading="lazy" className="absolute -top-1 left-0 opacity-80 max-w-full transform origin-center scale-150 select-none pointer-events-none" src={`/images/lifetime/graffiti/${Math.floor(Math.random() * 6) + 1}.png`} draggable="false" alt="check icon" />

          <span className="flex flex-row z-10">
            {textContent.cta}
            <img className="max-h-96 ml-2.5 -mb-0.5" loading="lazy" src="../../images/lifetime/icons-dark/chevronBoldRed20.svg" alt="Arrow right" draggable="false" />
          </span>
        </p>

      </a>

      <div className="flex flex-col px-8">
        <img className="max-h-96" loading="lazy" src="../../images/lifetime/devices.png" alt="Devices" draggable="false" />
      </div>

    </div>

  </section>

);

export default GetLifetimeSection;
