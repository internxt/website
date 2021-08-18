import React from 'react'

const HeroSection = ({ descriptions }) => {
  const description = descriptions["HeroSection"];

  return (
    <div className={`HeroSection flex flex-col justify-center w-full`}>
      <div>

        <h1 className={`title text-center text-4xl lg:text-6xl`}>
          {description.title}
        </h1>

        <p className={`text-center mt-6 text-lg lg:text-xl`}>
          {description.subtitle}
        </p>

        <button
          type="button"
          className="inline-flex items-center px-6 py-2 border border-transparent rounded-lg text-base font-semibold text-white bg-blue-60 hover:bg-blue-70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-20"
        >
          {description.cta1}
        </button>

      </div>
    </div>
  );
};

export default HeroSection;