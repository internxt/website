/* eslint-disable max-len */
/* eslint-disable prefer-const */
import React from 'react';

const HeroSection = ({
  textContent
}) => {
  const table = {
    internxt: {
      line1: 'Table goes here'
    }
  };

  return (

    <section id="buy" className="relative flex flex-col w-full pt-16 bg-gradient-to-b from-white via-neutral-10 to-white">

      <div className="flex flex-col">

        {/* Header */}
        <div className="relative flex flex-col items-center justify-center pt-32 pb-16 bg-blue-60 text-white overflow-hidden">
          <div className="relative flex flex-col items-center justify-center mb-8 z-10">
            <h1 className="text-6xl font-medium text-center mb-4">
              {textContent.title.line1}
              <br />
              {textContent.title.line2}
            </h1>

            <h2 className="text-lg text-center">
              {textContent.description}
            </h2>
          </div>

          <div className="relative flex flex-col items-center justify-center z-10">
            <a
              href="https://drive.internxt.com/new"
              target="_blank"
              rel="noreferrer"
              className="flex justify-center w-full sm:w-auto sm:inline-flex items-center px-6 py-2 border border-transparent rounded-xl text-lg sm:text-base font-semibold text-blue-60 bg-white focus:outline-none"
            >
              {textContent.cta}
            </a>

            <p className="text-xs text-center mt-1.5">
              {textContent.noCredirCardNeeded}
            </p>
          </div>

          <div className="absolute top-2/3 left-0 w-full h-full rounded-t-full-percentage transform scale-y-200 filter blur-4xl bg-blue-70" />
        </div>
        {table.internxt.line1}

      </div>

    </section>

  );
};

export default HeroSection;
